import { useTranslation } from 'react-i18next';



const ScientificAdvisory = () => {
  const { t } = useTranslation();
  const members = t('councilMembers', { returnObjects: true }) as {
    name: string;
    title: string;
  }[];
  return (
    <div className="p-10 bg-white text-gray-800">
      {/* Subtitle */}
      <h2 className="text-2xl font-bold mb-6 text-[#0D1F4F]">
        {t('scientific_advisory.title')}
      </h2>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {members.map((member, index) => (
          <div
            key={index}
            className="bg-gray-100 p-6 rounded shadow-sm"
          >
            <p className="text-lg font-semibold text-gray-600">
              {member.name}
            </p>
            <p className="mt-1 text-[#0D1F4F]">
              {member.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScientificAdvisory;
