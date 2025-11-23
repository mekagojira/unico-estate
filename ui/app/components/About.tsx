import { useTranslations } from 'next-intl';

export default function About() {
  const t = useTranslations('about');

  return (
    <section id="about" className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-white via-stone-50/30 to-white relative overflow-hidden">
      {/* Luxury marble texture pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0z' fill='%23000' fill-opacity='0.4'/%3E%3Cpath d='M40 40h40v40H40z' fill='%23000' fill-opacity='0.4'/%3E%3Cpath d='M80 80h40v40H80z' fill='%23000' fill-opacity='0.4'/%3E%3C/svg%3E")`,
      }}></div>

      {/* Elegant light accent */}
      <div className="absolute top-1/4 right-0 w-1/3 h-1/3 bg-gradient-radial from-blue-100/20 via-transparent to-transparent rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-24">
          <div className="inline-block mb-6">
            <span className="text-xs font-medium text-blue-700 tracking-[0.2em] uppercase">{t('badge')}</span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extralight text-gray-900 mb-8 tracking-tighter leading-[1.05]">
            {t('title')}
          </h2>
          <div className="w-40 h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto"></div>
        </div>

        <div className="max-w-5xl mx-auto mb-24">
          <div className="prose prose-xl mx-auto text-center">
            <p className="text-3xl md:text-4xl text-gray-800 leading-relaxed font-extralight mb-8">
              {t('description')}
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          <div className="group relative text-center p-6 sm:p-8 md:p-10 lg:p-12 rounded-2xl md:rounded-3xl bg-white/80 backdrop-blur-sm border border-blue-100/50 hover:border-blue-200/80 transition-all duration-500 transform hover:-translate-y-2 md:hover:-translate-y-3 hover:shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-blue-50/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500">
                <svg className="w-10 h-10 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-light text-gray-900 mb-4 tracking-tight">{t('feature1Title')}</h3>
              <p className="text-gray-600 leading-relaxed font-light text-lg">{t('feature1Desc')}</p>
            </div>
          </div>

          <div className="group relative text-center p-12 rounded-3xl bg-white/80 backdrop-blur-sm border border-stone-100/50 hover:border-stone-200/80 transition-all duration-500 transform hover:-translate-y-3 hover:shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-stone-50/0 to-stone-50/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-gradient-to-br from-stone-100 to-stone-50 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500">
                <svg className="w-10 h-10 text-stone-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-light text-gray-900 mb-4 tracking-tight">{t('feature2Title')}</h3>
              <p className="text-gray-600 leading-relaxed font-light text-lg">{t('feature2Desc')}</p>
            </div>
          </div>

          <div className="group relative text-center p-6 sm:p-8 md:p-10 lg:p-12 rounded-2xl md:rounded-3xl bg-white/80 backdrop-blur-sm border border-blue-100/50 hover:border-blue-200/80 transition-all duration-500 transform hover:-translate-y-2 md:hover:-translate-y-3 hover:shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-blue-50/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500">
                <svg className="w-10 h-10 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-light text-gray-900 mb-4 tracking-tight">{t('feature3Title')}</h3>
              <p className="text-gray-600 leading-relaxed font-light text-lg">{t('feature3Desc')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
