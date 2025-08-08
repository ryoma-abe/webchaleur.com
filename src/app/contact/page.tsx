'use client';

import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || 'YOUR_ACCESS_KEY_HERE',
          ...formData,
          from_name: formData.name,
          subject: `【WebChaleur】${formData.company || '個人'}様からのお問い合わせ`,
        })
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          company: '',
          email: '',
          phone: '',
          message: '',
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        <section className="section-padding bg-gray-50
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            {/* ページヘッダー */}
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-[var(--font-handwritten)] font-bold text-[#2c2825] mb-4">
                お問い合わせ
              </h1>
              <p className="text-[#5a524c] max-w-2xl mx-auto">
                まずはお気軽にご相談ください。
                <br />
                どんな小さなことでも、親身に対応いたします。
              </p>
            </div>

            {/* 成功メッセージ */}
            {submitStatus === 'success' && (
              <div className="mb-8 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                お問い合わせありがとうございます。内容を確認次第、ご連絡させていただきます。
              </div>
            )}

            {/* エラーメッセージ */}
            {submitStatus === 'error' && (
              <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
                送信に失敗しました。お手数ですが、もう一度お試しください。
              </div>
            )}

            {/* フォーム */}
            <form 
              onSubmit={handleSubmit}
              className="bg-white p-8 md:p-10 rounded-2xl shadow-lg"
            >
              <div className="space-y-6">
                {/* お名前 */}
                <div className="form-group">
                  <label 
                    htmlFor="name" 
                    className="block text-sm font-medium text-[#2c2825] mb-2"
                  >
                    お名前
                    <span className="ml-2 text-xs px-2 py-1 bg-[#5b8fb9] text-white rounded-md">
                      必須
                    </span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 focus:border-[#5b8fb9] focus:outline-none transition-colors rounded-lg"
                    placeholder="山田 太郎"
                  />
                </div>

                {/* 会社名 */}
                <div className="form-group">
                  <label 
                    htmlFor="company" 
                    className="block text-sm font-medium text-[#2c2825] mb-2"
                  >
                    会社名
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 focus:border-[#5b8fb9] focus:outline-none transition-colors rounded-lg"
                    placeholder="株式会社○○"
                  />
                </div>

                {/* メールアドレス */}
                <div className="form-group">
                  <label 
                    htmlFor="email" 
                    className="block text-sm font-medium text-[#2c2825] mb-2"
                  >
                    メールアドレス
                    <span className="ml-2 text-xs px-2 py-1 bg-[#5b8fb9] text-white rounded-md">
                      必須
                    </span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 focus:border-[#5b8fb9] focus:outline-none transition-colors rounded-lg"
                    placeholder="info@example.com"
                  />
                </div>

                {/* 電話番号 */}
                <div className="form-group">
                  <label 
                    htmlFor="phone" 
                    className="block text-sm font-medium text-[#2c2825] mb-2"
                  >
                    電話番号
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 focus:border-[#5b8fb9] focus:outline-none transition-colors rounded-lg"
                    placeholder="0155-00-0000"
                  />
                </div>

                {/* お問い合わせ内容 */}
                <div className="form-group">
                  <label 
                    htmlFor="message" 
                    className="block text-sm font-medium text-[#2c2825] mb-2"
                  >
                    お問い合わせ内容
                    <span className="ml-2 text-xs px-2 py-1 bg-[#5b8fb9] text-white rounded-md">
                      必須
                    </span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 border-2 border-gray-200 focus:border-[#5b8fb9] focus:outline-none transition-colors resize-none rounded-lg"
                    placeholder="ホームページを作りたいのですが..."
                  />
                </div>

                {/* 送信ボタン */}
                <div className="text-center pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-[#5b8fb9] text-white px-12 py-4 font-medium rounded-full hover:bg-[#4a7da6] transition-all hover:transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed min-w-[200px]"
                  >
                    {isSubmitting ? (
                      <span className="inline-flex items-center gap-2">
                        送信中
                        <span className="animate-pulse">...</span>
                      </span>
                    ) : (
                      '送信する'
                    )}
                  </button>
                </div>
              </div>
            </form>

            {/* 追加情報 */}
            <div className="text-center mt-12">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <span className="text-2xl mb-2 block">📧</span>
                  <h3 className="font-[var(--font-handwritten)] font-bold text-[#2c2825] mb-1">メール</h3>
                  <p className="text-sm text-[#5a524c]
                </div>
                <div>
                  <span className="text-2xl mb-2 block">📞</span>
                  <h3 className="font-[var(--font-handwritten)] font-bold text-[#2c2825] mb-1">お電話</h3>
                  <p className="text-sm text-[#5a524c] 9:00-18:00</p>
                </div>
                <div>
                  <span className="text-2xl mb-2 block">📍</span>
                  <h3 className="font-[var(--font-handwritten)] font-bold text-[#2c2825] mb-1">エリア</h3>
                  <p className="text-sm text-[#5a524c]
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}