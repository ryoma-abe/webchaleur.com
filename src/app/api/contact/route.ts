import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, phone, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: '必須項目を入力してください' },
        { status: 400 }
      );
    }

    const mailContent = `
      新しいお問い合わせがありました。

      【お名前】
      ${name}

      【メールアドレス】
      ${email}

      【会社名】
      ${company || '未記入'}

      【電話番号】
      ${phone || '未記入'}

      【お問い合わせ内容】
      ${message}

      ---
      このメールは WebChaleur のお問い合わせフォームから送信されました。
    `;

    if (process.env.NODE_ENV === 'development') {
      console.log('===== お問い合わせ内容 =====');
      console.log(mailContent);
      console.log('===========================');
      
      return NextResponse.json(
        { message: 'お問い合わせを受け付けました（開発モード）' },
        { status: 200 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_FROM || '"WebChaleur" <noreply@webchaleur.jp>',
      to: process.env.CONTACT_EMAIL || 'info@webchaleur.jp',
      subject: `【WebChaleur】新しいお問い合わせ: ${name}様より`,
      text: mailContent,
      replyTo: email,
    });

    const autoReplyContent = `
      ${name} 様

      この度は WebChaleur へお問い合わせいただき、誠にありがとうございます。
      以下の内容でお問い合わせを受け付けました。

      ---
      【お問い合わせ内容】
      ${message}
      ---

      内容を確認の上、2営業日以内にご連絡させていただきます。
      今しばらくお待ちくださいませ。

      なお、お急ぎの場合は、お電話でもお気軽にご連絡ください。

      WebChaleur
      十勝・帯広のWeb制作パートナー
      https://webchaleur.jp
    `;

    await transporter.sendMail({
      from: process.env.SMTP_FROM || '"WebChaleur" <noreply@webchaleur.jp>',
      to: email,
      subject: '【WebChaleur】お問い合わせありがとうございます',
      text: autoReplyContent,
    });

    return NextResponse.json(
      { message: 'お問い合わせを送信しました' },
      { status: 200 }
    );
  } catch (error) {
    console.error('お問い合わせエラー:', error);
    return NextResponse.json(
      { error: '送信に失敗しました。しばらく経ってから再度お試しください。' },
      { status: 500 }
    );
  }
}