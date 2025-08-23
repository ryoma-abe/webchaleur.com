"use client";

import { useState } from "react";
import Link from "next/link";

interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  budget: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
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
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          service: "",
          budget: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-3xl shadow-xl p-8 md:p-12 space-y-8"
    >
      <div className="grid md:grid-cols-2 gap-6 md:gap-8">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
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
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-main-blue focus:border-transparent transition-all duration-200 hover:border-gray-300"
            placeholder="山田 太郎"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
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
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-main-blue focus:border-transparent transition-all duration-200 hover:border-gray-300"
            placeholder="info@example.com"
          />
        </div>

        <div>
          <label
            htmlFor="company"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            会社名・団体名
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-main-blue focus:border-transparent transition-all duration-200 hover:border-gray-300"
            placeholder="株式会社〇〇"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            電話番号
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-main-blue focus:border-transparent transition-all duration-200 hover:border-gray-300"
            placeholder="0155-00-0000"
          />
        </div>

        <div>
          <label
            htmlFor="service"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            ご希望のサービス
            <span className="text-red-500 ml-1">*</span>
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-main-blue focus:border-transparent transition-all duration-200 hover:border-gray-300 appearance-none bg-white"
          >
            <option value="">選択してください</option>
            <option value="web">Web制作</option>
            <option value="ec">ECサイト構築</option>
            <option value="consulting">コンサルティング</option>
            <option value="maintenance">保守・運用</option>
            <option value="other">その他</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="budget"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            ご予算
          </label>
          <select
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-main-blue focus:border-transparent transition-all duration-200 hover:border-gray-300 appearance-none bg-white"
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

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
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
          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-main-blue focus:border-transparent transition-all duration-200 hover:border-gray-300 resize-none"
          placeholder="ご相談内容をお聞かせください。&#10;例：ホームページをリニューアルしたい、ECサイトを作りたい、など"
        />
      </div>

      <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl">
        <input
          type="checkbox"
          id="privacy"
          required
          className="mt-1 w-5 h-5 text-main-blue border-gray-300 rounded focus:ring-main-blue cursor-pointer"
        />
        <label
          htmlFor="privacy"
          className="text-sm text-gray-600 cursor-pointer"
        >
          <Link
            href="/privacy"
            target="_blank"
            className="text-main-blue hover:text-light-blue underline font-medium"
          >
            プライバシーポリシー
          </Link>
          に同意する
        </label>
      </div>

      <div className="text-center pt-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn btn-primary btn-wide"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              送信中...
            </span>
          ) : (
            "送信する"
          )}
        </button>
      </div>

      {submitStatus === "success" && (
        <div className="mt-6 p-6 bg-green-50 border-2 border-green-200 rounded-2xl text-center animate-fadeIn">
          <div className="flex justify-center mb-3">
            <svg
              className="w-12 h-12 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <p className="text-green-700 font-medium">
            お問い合わせありがとうございます。
            <br />
            2営業日以内にご返信いたします。
          </p>
        </div>
      )}

      {submitStatus === "error" && (
        <div className="mt-6 p-6 bg-red-50 border-2 border-red-200 rounded-2xl text-center animate-fadeIn">
          <div className="flex justify-center mb-3">
            <svg
              className="w-12 h-12 text-red-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <p className="text-red-700 font-medium">
            送信に失敗しました。
            <br />
            お手数ですが、もう一度お試しください。
          </p>
        </div>
      )}
    </form>
  );
}
