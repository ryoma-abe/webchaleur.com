import CTASection from "@/components/ui/CTASection";
import FadeIn from "@/components/animations/FadeIn";
import PageHeader from "@/components/ui/PageHeader";
import Link from "next/link";
import { generatePageMetadata } from "@/lib/seo";
import { additionalServices, services, serviceStep } from "@/data/service";

export const metadata = generatePageMetadata({ path: "/services" });

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        englishTitle="Our Services"
        japaneseTitle="サービス"
        description="十勝からWebの力で、あなたのビジネスをもっと楽しく。地元の方も遠方の方も、まずは気軽にご相談ください。"
      />
      <FadeIn>
        <section className="py-16 px-6 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  className="animate-fadeInUp"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animationFillMode: "forwards",
                  }}
                >
                  <div className="h-full flex flex-col bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-accent-beige">
                    <div className="text-center mb-6 text-6xl text-primary-blue">
                      {service.emoji}
                    </div>

                    <h3 className="heading-card text-primary-blue mb-2">
                      {service.title}
                    </h3>
                    <span className="text-caption text-gray">
                      {service.subtitle}
                    </span>

                    <p className="text-body my-6">{service.description}</p>

                    <div className="flex-grow">
                      <h4 className="text-primary mb-3">主な機能・サービス</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-sm text-gray"
                          >
                            <span className="text-primary-blue mt-1 text-xs flex-shrink-0">
                              ✓
                            </span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="border-t border-accent-beige pt-4 mt-6">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-caption block mb-1">
                            料金目安
                          </span>
                          <span className="text-primary-blue">
                            {service.price}
                          </span>
                        </div>
                        <div>
                          <span className="text-caption block mb-1">
                            制作期間
                          </span>
                          <span className="text-primary">
                            {service.duration}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6">
                      <Link
                        href={`/contact?service=${service.id}`}
                        className="btn btn-primary w-full text-center"
                      >
                        詳しく相談する
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>
      <FadeIn>
        <section className="py-16 px-6 md:px-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 relative">
                その他のサービス
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-primary-blue rounded-full mt-2"></div>
              </h2>
              <p className="text-body mt-4">
                Web制作以外にも、様々なサービスでお客様をサポートします
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {additionalServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl hover:translate-y-[-2px] transition-all group shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.08)]"
                  style={{
                    animationDelay: `${index * 50}ms`,
                  }}
                >
                  <div className="text-4xl mb-4 text-primary-blue text-center">
                    {service.emoji}
                  </div>
                  <h3 className="text-lg text-primary mb-2">{service.title}</h3>
                  <p className="text-caption mb-4">{service.description}</p>
                  <span className="text-sm text-primary-blue">
                    {service.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>
      <FadeIn>
        <section className="py-16 px-6 md:px-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 relative">
                制作の流れ
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-primary-blue rounded-full mt-2"></div>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceStep.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all"
                >
                  <div className="text-center mb-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center font-bold text-lg mx-auto">
                      {item.step}
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="text-lg font-bold text-primary mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray mb-4">{item.description}</p>
                    <div className="text-sm text-primary-blue font-medium">
                      {item.duration}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>
      <FadeIn>
        <div className="px-6 md:px-8 py-16">
          <div className="max-w-7xl mx-auto">
            <CTASection />
          </div>
        </div>
      </FadeIn>
    </>
  );
}
