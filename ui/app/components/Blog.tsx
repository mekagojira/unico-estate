import { useTranslations } from 'next-intl';

export default function Blog() {
  const t = useTranslations('blog');

  const blogPosts = [
    { key: 'post1' },
    { key: 'post2' },
    { key: 'post3' },
    { key: 'post4' },
  ];

  return (
    <section id="blog" className="py-12 md:py-20 lg:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-4 md:mb-6 tracking-tight px-4">
            {t('title')}
          </h2>
          <div className="w-24 md:w-32 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-4 md:mb-6"></div>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 font-light px-4">{t('subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Placeholder for image */}
              <div className="aspect-video bg-gradient-to-br from-blue-100/50 to-stone-100/50 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-gray-400 text-sm font-light">{t('imagePlaceholder')}</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              
              <div className="p-6 lg:p-8">
                <span className="inline-block px-3 py-1.5 text-xs font-semibold text-blue-700 bg-blue-50 rounded-full mb-4 tracking-wide">
                  {t('category')}
                </span>
                <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-700 transition-colors leading-snug">
                  {t(`posts.${post.key}.title`)}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-2 mb-6 font-light leading-relaxed">
                  {t(`posts.${post.key}.excerpt`)}
                </p>
                <a
                  href="#"
                  className="text-sm font-medium text-blue-700 hover:text-blue-800 inline-flex items-center tracking-wide"
                >
                  {t('readMore')}
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
            className="inline-flex items-center px-8 py-4 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl tracking-wide"
          >
            {t('viewAll')}
          </a>
        </div>
      </div>
    </section>
  );
}
