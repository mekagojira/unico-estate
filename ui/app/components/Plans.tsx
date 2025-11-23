import { useTranslations } from 'next-intl';

export default function Plans() {
  const t = useTranslations('services');

  const services = [
    {
      id: 'sales',
      icon: '🏛️',
      gradient: 'from-blue-50 via-blue-100/50 to-white',
      borderColor: 'border-blue-200/50',
      hoverBorder: 'hover:border-blue-300',
      accent: 'blue',
    },
    {
      id: 'rental',
      icon: '🔑',
      gradient: 'from-blue-50 via-blue-100/50 to-white',
      borderColor: 'border-blue-200/50',
      hoverBorder: 'hover:border-blue-300',
      accent: 'blue',
    },
    {
      id: 'management',
      icon: '📊',
      gradient: 'from-blue-50 via-blue-100/50 to-white',
      borderColor: 'border-blue-200/50',
      hoverBorder: 'hover:border-blue-300',
      accent: 'blue',
    },
    {
      id: 'foreignSupport',
      icon: '🌍',
      gradient: 'from-blue-50 via-blue-100/50 to-white',
      borderColor: 'border-blue-200/50',
      hoverBorder: 'hover:border-blue-300',
      accent: 'blue',
    },
  ];

  return (
    <section id="services" className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-white via-stone-50/20 to-white relative overflow-hidden">
      {/* Luxury background pattern */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M0 0h20v20H0zM20 20h20v20H20zM40 40h20v20H40zM60 60h20v20H60z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16 lg:mb-24">
          <div className="inline-block mb-4 md:mb-6">
            <span className="text-xs font-medium text-blue-700 tracking-[0.2em] uppercase">{t('badge')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extralight text-gray-900 mb-6 md:mb-8 tracking-tighter leading-[1.05] px-4">
            {t('title')}
          </h2>
          <div className="w-32 md:w-40 h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto mb-6 md:mb-8"></div>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed px-4">{t('subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br ${service.gradient} border ${service.borderColor} ${service.hoverBorder} transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-2`}
            >
              {/* Luxury shine effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 transform translate-x-[-100%] group-hover:translate-x-[100%]"></div>
              
              <div className="relative p-6 sm:p-8 md:p-10 lg:p-12">
                <div className="mb-4 md:mb-6">
                  <div className="text-4xl sm:text-5xl mb-4 md:mb-6 transform group-hover:scale-110 transition-transform duration-500">
                    {service.icon}
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-light text-gray-900 mb-3 md:mb-4 tracking-tight">
                    {t(`${service.id}.title`)}
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-gray-600 font-light leading-relaxed">
                    {t(`${service.id}.description`)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
