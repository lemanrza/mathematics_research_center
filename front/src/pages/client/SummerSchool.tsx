import { useTranslation } from 'react-i18next';

const SummerSchool = () => {
  const { t } = useTranslation();

  return (
    <div className="p-10 bg-white text-[#0D1F4F] space-y-8">
      {/* Main Title */}
      <h1 className="text-3xl font-bold text-[#0D1F4F] mb-6">
        {t('summer_school.title')}
      </h1>

      <div className="space-y-4 text-md mb-20 mt-9 leading-relaxed text-[#3b4a7f]">
        <p>
          {t('summer_school.description')}
        </p>
      </div>
    </div>
  );
};

export default SummerSchool;
