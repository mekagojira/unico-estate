import { useTranslations } from 'next-intl';

export default function News() {
  const t = useTranslations('news');

  const newsItems = [
    { key: 'item1' },
    { key: 'item2' },
  ];

  return (
    <section id="news" className="py-12 md:py-20 lg:py-32 bg-gradient-to-b from-gray-50/50 via-white to-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-4 md:mb-6 tracking-tight px-4">
            {t('title')}
          </h2>
          <div className="w-24 md:w-32 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-4 md:mb-6"></div>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 font-light px-4">{t('subtitle')}</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {newsItems.map((item, index) => (
              <article
                key={index}
                className="group bg-white rounded-xl border border-gray-200 p-8 hover:shadow-xl hover:border-blue-200 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div className="flex-1">
                    <time className="text-sm font-medium text-gray-500 mb-3 block tracking-wide">
                      {t(`items.${item.key}.date`)}
                    </time>
                    <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 group-hover:text-blue-700 transition-colors leading-snug">
                      {t(`items.${item.key}.title`)}
                    </h3>
                  </div>
                  <a
                    href="#"
                    className="text-blue-700 hover:text-blue-800 font-medium text-sm inline-flex items-center tracking-wide"
                  >
                    {t('details')}
                    <svg
                      className="ml-2 w-4 h-4 transform group-hover:translate-x-2 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-16">
            <a
              href="#"
              className="inline-flex items-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-medium rounded-lg hover:border-blue-600 hover:text-blue-700 transition-all tracking-wide"
            >
              {t('viewAll')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
