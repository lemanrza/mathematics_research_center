import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Seminars: React.FC = () => {
  const { t } = useTranslation();

  const seminars = [
    {
      id: 1,
      titleKey: 'seminar_page.categories.short_term', // Tələbələr Üçün Seminarlar
      color: 'bg-[#FEAFCB]'
    },
    {
      id: 2,
      titleKey: 'seminar_page.categories.algebra', // Cəbr Seminarları
      color: 'bg-[#B5E2F6]'
    },
    {
      id: 3,
      titleKey: 'seminar_page.categories.mathematics', // Riyaziyyat Seminarları
      color: 'bg-[#FFF0BA]'
    },
    {
      id: 4,
      titleKey: 'seminar_page.categories.number_theory', // Ədədlər Nəzəriyyəsi Seminarları
      color: 'bg-[#B4E5D6]'
    },
    {
      id: 5,
      titleKey: 'seminar_page.categories.discrete_structures', // Diskret Strukturlar Seminarları
      color: 'bg-[#BFC6E4]'
    },
    {
      id: 6,
      titleKey: 'seminar_page.categories.geometry_topology', // Həndəsə/Topologiya seminarları
      color: 'bg-[#48B4B3]'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold text-[#0D1F4F] mb-12">
        {t('seminar_page.title')}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {seminars.map((seminar) => (
          <Link
            to={`/elmi-fealiyyet/seminarlar/${seminar.id}`}
            key={seminar.id}
            className="relative h-28 flex items-center p-4"
            aria-label={t(seminar.titleKey)}
          >
            <div className="w-full h-[120px] bg-[#F3F3F4] rounded-md flex items-center justify-center text-[#0D1F4F] font-sans text-md text-center px-4">
              {t(seminar.titleKey)}
            </div>

            {/* Tailwind-də `border-20` default yoxdur. Arbitrary value istifadə edin: border-[20px] */}
            <div
              className={`pointer-events-none absolute -left-8 top-1/2 -translate-y-1/2 w-[120px] h-[120px] rounded-full border-[20px] border-white ${seminar.color} shadow-md`}
              aria-hidden="true"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Seminars;
