import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function Footer() {
  const t = useTranslations('footer');

  const footerLinks = {
    home: ['home', 'about'],
    services: ['services'],
    news: ['news', 'blog'],
  };

  return (
    <footer id="contact" className="bg-gray-900 text-gray-300 relative overflow-hidden">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Image
                src="https://svc.uni-co-jinzai.com/api/image/1710811080191916f93c44cef41299b052827fa8582f1.png"
                alt="Uni-Co 株式会社"
                width={200}
                height={67}
                className="h-16 w-auto object-contain"
                unoptimized
              />
            </div>
            <div className="space-y-3 text-sm text-gray-400 font-light leading-relaxed">
              <p>{t('address')}</p>
              <p>{t('address2')}</p>
              <p className="mt-6">
                <span className="font-semibold text-gray-300">{t('tel')}</span> {t('telNumber')}
              </p>
              <p>
                <span className="font-semibold text-gray-300">{t('hours')}</span>／{t('hoursTime')}
              </p>
              <p>
                <span className="font-semibold text-gray-300">{t('closed')}</span>／{t('closedDays')}
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 tracking-wide">{t('sections.home')}</h4>
            <ul className="space-y-3 text-sm">
              {footerLinks.home.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-blue-400 transition-colors font-light">
                    {t(`links.${link}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 tracking-wide">{t('sections.services')}</h4>
            <ul className="space-y-3 text-sm">
              {footerLinks.services.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-blue-400 transition-colors font-light">
                    {t(`links.${link}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 tracking-wide">{t('sections.news')}</h4>
            <ul className="space-y-3 text-sm">
              {footerLinks.news.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-blue-400 transition-colors font-light">
                    {t(`links.${link}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500 font-light">
              {t('copyright')}
            </p>
            <div className="text-sm text-gray-500 font-light">
              <span>{t('tagline')}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
