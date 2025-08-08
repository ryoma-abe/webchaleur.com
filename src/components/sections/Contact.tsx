'use client';

import { useEffect, useState } from 'react';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('contact');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // 仮の送信処理
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    alert('お問い合わせありがとうございます！\n内容を確認次第、ご連絡させていただきます。');
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      message: '',
    });
    setIsSubmitting(false);
  };

  return (
    <section 
      id="contact"
      className="section-padding bg-[var(--bg-light)]"
    >
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        {/* セクションヘッダー */}
        <div 
          className={`text-center mb-12 transition-all duration-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 
            className="text-3xl md:text-4xl font-[var(--font-handwritten)] font-bold text-[#2c2825] mb-2"
          >
            お問い合わせ
          </h2>
          <span 
            className="text-sm text-[var(--text-gray)] inline-block mb-4"
          >
            Contact
          </span>
          <p className="text-[var(--text-gray)] max-w-2xl mx-auto">
            まずはお気軽にご相談ください。
            <br />
            どんな小さなことでも、親身に対応いたします。
          </p>
        </div>

        {/* フォーム */}
        <form 
          onSubmit={handleSubmit}
          className={`bg-white p-8 md:p-10 transition-all duration-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{
            borderRadius: '24px',
            boxShadow: '0 10px 40px rgba(91, 143, 185, 0.08)',
          }}
        >
          <div className="space-y-6">
            {/* お名前 */}
            <div className="form-group">
              <label 
                htmlFor="name" 
                className="block text-sm font-medium text-[var(--text-dark)] mb-2"
              >
                お名前
                <span className="ml-2 text-xs px-2 py-1 bg-[var(--main-blue)] text-white rounded-md">
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
                className="w-full px-4 py-3 border-2 border-[var(--accent-beige)] focus:border-[var(--main-blue)] focus:outline-none transition-colors"
                style={{ 
                  borderRadius: '8px'
                }}
                placeholder="山田 太郎"
              />
            </div>

            {/* 会社名 */}
            <div className="form-group">
              <label 
                htmlFor="company" 
                className="block text-sm font-medium text-[var(--text-dark)] mb-2"
              >
                会社名
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-[var(--accent-beige)] focus:border-[var(--main-blue)] focus:outline-none transition-colors"
                style={{ 
                  borderRadius: '8px'
                }}
                placeholder="株式会社○○"
              />
            </div>

            {/* メールアドレス */}
            <div className="form-group">
              <label 
                htmlFor="email" 
                className="block text-sm font-medium text-[var(--text-dark)] mb-2"
              >
                メールアドレス
                <span className="ml-2 text-xs px-2 py-1 bg-[var(--main-blue)] text-white rounded-md">
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
                className="w-full px-4 py-3 border-2 border-[var(--accent-beige)] focus:border-[var(--main-blue)] focus:outline-none transition-colors"
                style={{ 
                  borderRadius: '8px'
                }}
                placeholder="info@example.com"
              />
            </div>

            {/* 電話番号 */}
            <div className="form-group">
              <label 
                htmlFor="phone" 
                className="block text-sm font-medium text-[var(--text-dark)] mb-2"
              >
                電話番号
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-[var(--accent-beige)] focus:border-[var(--main-blue)] focus:outline-none transition-colors"
                style={{ 
                  borderRadius: '8px'
                }}
                placeholder="0155-00-0000"
              />
            </div>

            {/* お問い合わせ内容 */}
            <div className="form-group">
              <label 
                htmlFor="message" 
                className="block text-sm font-medium text-[var(--text-dark)] mb-2"
              >
                お問い合わせ内容
                <span className="ml-2 text-xs px-2 py-1 bg-[var(--main-blue)] text-white rounded-md">
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
                className="w-full px-4 py-3 border-2 border-[var(--accent-beige)] focus:border-[var(--main-blue)] focus:outline-none transition-colors resize-none"
                style={{ 
                  borderRadius: '8px'
                }}
                placeholder="ホームページを作りたいのですが..."
              />
            </div>

            {/* 送信ボタン */}
            <div className="text-center pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[var(--main-blue)] text-white px-12 py-4 font-medium hover:bg-[#4a7da6] transition-all hover:transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ 
                  borderRadius: '24px',
                  minWidth: '200px'
                }}
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
        <div 
          className={`text-center mt-12 transition-all duration-800 delay-400 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <span className="text-2xl mb-2 block">📧</span>
              <h3 className="font-[var(--font-handwritten)] font-bold text-[var(--text-dark)] mb-1">メール</h3>
              <p className="text-sm text-[var(--text-gray)]">info@webchaleur.jp</p>
            </div>
            <div>
              <span className="text-2xl mb-2 block">📞</span>
              <h3 className="font-[var(--font-handwritten)] font-bold text-[var(--text-dark)] mb-1">お電話</h3>
              <p className="text-sm text-[var(--text-gray)]">平日 9:00-18:00</p>
            </div>
            <div>
              <span className="text-2xl mb-2 block">📍</span>
              <h3 className="font-[var(--font-handwritten)] font-bold text-[var(--text-dark)] mb-1">エリア</h3>
              <p className="text-sm text-[var(--text-gray)]">北海道十勝エリア</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}