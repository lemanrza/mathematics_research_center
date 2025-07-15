import { useTranslation } from 'react-i18next';

const ResearchGroup = () => {
  const { t } = useTranslation();

  // Tətbiq ediləcək düzgün tip
  const groups = t('research_group.groups', { returnObjects: true }) as Array<{
    title: string;
    leader: string;
    role: string;
    description: string;
    leaderInfo?: string;
  }>;

  return (
    <section className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-[#0D1F4F] font-sans">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0D1F4F] mb-6">
        {t('research_group.title')}
      </h2>

      <p className="text-sm sm:text-base text-[#3b4a7f] mb-8 leading-relaxed">
        <strong className="block mb-1 text-[#0D1F4F] text-base sm:text-lg font-medium">
          {t('research_group.description.groups_title')}
        </strong>
        {t('research_group.description.intro')}
      </p>

      <div className="space-y-10">
        {groups.map((group, index) => (
          <div key={index} className="border-t border-[#0D1F4F]/20 pt-6">
            <h3 className="text-lg sm:text-xl font-semibold text-[#0D1F4F] mb-2">
              {group.title}
            </h3>

            <p className="text-sm sm:text-base text-[#3b4a7f] mb-2 leading-relaxed">
              {group.description}
            </p>

            <ul className="list-disc list-inside text-sm sm:text-base mb-2">
              <li className="font-semibold text-[#0D1F4F]">
                {group.leader}{' '}
                <span className="font-normal text-[#3b4a7f]">({group.role})</span>
              </li>
            </ul>

            {group.leaderInfo && (
              <p className="text-sm sm:text-base text-[#3b4a7f] leading-relaxed">
                {group.leaderInfo}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ResearchGroup;
