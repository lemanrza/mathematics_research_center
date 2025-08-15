import { useTranslation } from 'react-i18next';

const ResearchResults = () => {
  const { t } = useTranslation();

  return (
    <div className="p-10 bg-white text-[#0D1F4F] space-y-8">
      {/* Main Title */}
      <h1 className="text-3xl font-bold text-[#0D1F4F] mb-6">
        {t('research_results.main_title')}
      </h1>

      {/* Description */}
      <div className="space-y-4 text-base leading-relaxed text-[#3b4a7f]">
        <p>{t('research_results.description')}</p>
      </div>
      
      <div className="space-y-4">
        <ul className="list-disc pl-5 space-y-2">
          <li className="text-base font-medium">
            {t('research_results.research_1')}
            <a
              href="https://arxiv.org/abs/2505.15150"
              className="text-blue-500 hover:text-blue-700 "
            >
              {t('research_results.research_1_link')}
            </a>
          </li>
          <li className="text-base font-medium">
            {t('research_results.research_2')}
            <a
              href="https://arxiv.org/abs/2505.15150"
              className="text-blue-500 hover:text-blue-700 "
            >
              {t('research_results.research_2_link')}
            </a>
          </li>
          <li className="text-base font-medium">
            {t('research_results.research_3')}
            <a
              href="https://arxiv.org/abs/2505.15163"
              className="text-blue-500 hover:text-blue-700 "
            >
              {t('research_results.research_3_link')}
            </a>
          </li>
          <li className="text-base font-medium">
            {t('research_results.research_5')}
            <a
              href="https://arxiv.org/abs/2503.02766"
              className="text-blue-500 hover:text-blue-700 "
            >
              {t('research_results.research_5_link')}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ResearchResults;
