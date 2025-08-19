import { NextRequest, NextResponse } from 'next/server';

const WEB3FORMS_API_KEY = '7777d309-a47c-4f76-ad9b-30c0e164c949';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, phone, service, budget, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: '必須項目を入力してください' },
        { status: 400 }
      );
    }

    // Web3Formsへ送信するデータ
    const web3FormsData = {
      access_key: WEB3FORMS_API_KEY,
      subject: `【WebChaleur】新しいお問い合わせ: ${name}様より`,
      from_name: name,
      email: email,
      // メッセージ本文
      message: `
新しいお問い合わせがありました。

【お名前】
${name}

【メールアドレス】
${email}

【会社名・団体名】
${company || '未記入'}

【電話番号】
${phone || '未記入'}

【ご希望のサービス】
${service || '未記入'}

【ご予算】
${budget || '未記入'}

【お問い合わせ内容】
${message}

---
このメールは WebChaleur のお問い合わせフォームから送信されました。
      `,
    };

    // Web3Forms APIにPOSTリクエスト
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(web3FormsData),
    });

    const result = await response.json();

    if (result.success) {
      return NextResponse.json(
        { message: 'お問い合わせを送信しました' },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { error: '送信に失敗しました。しばらく経ってから再度お試しください。' },
        { status: 500 }
      );
    }
  } catch {
    return NextResponse.json(
      { error: '送信に失敗しました。しばらく経ってから再度お試しください。' },
      { status: 500 }
    );
  }
}