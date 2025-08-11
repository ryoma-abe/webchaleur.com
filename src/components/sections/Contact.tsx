'use client';

import { useState } from 'react';
import HandDrawnButton from '@/components/ui/HandDrawnButton';
import { FaEnvelope, FaMobileAlt, FaMapMarkerAlt } from 'react-icons/fa';

interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  budget: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    budget: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          service: '',
          budget: '',
          message: '',
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Submit error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        {/* セクションヘッダー */}
        <div className="text-center mb-12">
          <h2 className="heading-section">お問い合わせ</h2>
          <span className="text-caption inline-block">Contact</span>
          <p className="text-body mt-6 max-w-2xl mx-auto">
            十勝エリアはもちろん、全国どこからでもお気軽にご相談ください。
            <br />
            お見積りは無料です。オンライン相談も対応しています。
            <br />
            2営業日以内にご返信いたします。
          </p>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="form-label">
                お名前
                <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-input"
                placeholder="山田 太郎"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="form-label">
                メールアドレス
                <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input"
                placeholder="info@example.com"
              />
            </div>

            {/* Company */}
            <div>
              <label htmlFor="company" className="form-label">
                会社名・団体名
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="form-input"
                placeholder="株式会社〇〇"
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="form-label">
                電話番号
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="form-input"
                placeholder="0155-00-0000"
              />
            </div>

            {/* Service */}
            <div>
              <label htmlFor="service" className="form-label">
                ご希望のサービス
                <span className="text-red-500 ml-1">*</span>
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="form-input"
              >
                <option value="">選択してください</option>
                <option value="web">Web制作</option>
                <option value="ec">ECサイト構築</option>
                <option value="consulting">コンサルティング</option>
                <option value="maintenance">保守・運用</option>
                <option value="other">その他</option>
              </select>
            </div>

            {/* Budget */}
            <div>
              <label htmlFor="budget" className="form-label">
                ご予算
              </label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="form-input"
              >
                <option value="">選択してください</option>
                <option value="under-30">〜30万円</option>
                <option value="30-50">30万円〜50万円</option>
                <option value="50-100">50万円〜100万円</option>
                <option value="100-200">100万円〜200万円</option>
                <option value="over-200">200万円以上</option>
                <option value="undecided">未定</option>
              </select>
            </div>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="form-label">
              ご相談内容
              <span className="text-red-500 ml-1">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="form-input resize-none"
              placeholder="ご相談内容をお聞かせください。&#10;例：ホームページをリニューアルしたい、ECサイトを作りたい、など"
            />
          </div>

          {/* Privacy Policy Agreement */}
          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="privacy"
              required
              className="mt-1 w-4 h-4 text-main-blue border-gray-300 rounded focus:ring-main-blue"
            />
            <label htmlFor="privacy" className="text-sm text-text-gray">
              <a href="/privacy" target="_blank" className="text-main-blue hover:underline">
                プライバシーポリシー
              </a>
              に同意する
            </label>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <HandDrawnButton
              type="submit"
              variant="primary"
              size="large"
              disabled={isSubmitting}
              className="min-w-[200px]"
            >
              {isSubmitting ? '送信中...' : '送信する'}
            </HandDrawnButton>
          </div>

          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-2xl text-center">
              <p className="text-green-700">
                お問い合わせありがとうございます。
                <br />
                2営業日以内にご返信いたします。
              </p>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-2xl text-center">
              <p className="text-red-700">
                送信に失敗しました。
                <br />
                お手数ですが、もう一度お試しください。
              </p>
            </div>
          )}
        </form>

        {/* Additional Contact Info */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl mb-3 text-primary-blue flex justify-center">
              <FaEnvelope />
            </div>
            <h3 className="font-klee font-bold text-lg mb-2">メール</h3>
            <p className="text-caption">
              info@webchaleur.jp
              <br />
              24時間受付
            </p>
          </div>
          <div>
            <div className="text-3xl mb-3 text-primary-blue flex justify-center">
              <FaMobileAlt />
            </div>
            <h3 className="font-klee font-bold text-lg mb-2">LINE</h3>
            <p className="text-caption">
              @webchaleur
              <br />
              お気軽にメッセージを
            </p>
          </div>
          <div>
            <div className="text-3xl mb-3 text-primary-blue flex justify-center">
              <FaMapMarkerAlt />
            </div>
            <h3 className="font-klee font-bold text-lg mb-2">所在地</h3>
            <p className="text-caption">
              北海道河東郡音更町
              <br />
              全国対応可能
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}