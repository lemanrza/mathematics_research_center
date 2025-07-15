import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const Visitors = () => {
  const { t } = useTranslation();

  return (
    <div className="p-10 bg-white text-[#0D1F4F] space-y-6">
      {/* Main Title */}
      <h2 className="text-3xl font-bold text-[#0D1F4F]">{t('visitors.title')}</h2>

      <div className="space-y-4 text-base leading-relaxed">
        <p>{t('visitors.introduction')}</p>
        <p>
          <span className="font-semibold">{t('visitors.short_term_visitors_label')}:</span> {t('visitors.short_term_visitors')}
        </p>
        <p>
          <span className="font-semibold">{t('visitors.long_term_visitors_label')}:</span> {t('visitors.long_term_visitors')}
        </p>
      </div>

      <h2 className="text-xl font-bold uppercase mt-10">{t('visitors.visitors_title')}</h2>

      <Link to={"https://yilmazdeniz.bilkent.edu.tr/"}>
        <div className="flex flex-col md:flex-row bg-gray-100 rounded shadow-sm overflow-hidden max-w-3xl">
          <img
            src="https://bdu.info.az/storage/52196/conversions/Photo-248x300-thumb.jpg"
            alt="Deniz Yılmaz"
            className="w-full md:w-1/3 h-auto object-cover"
          />
          <div className="p-6 space-y-2">
            <h3 className="text-[#0D1F4F] font-semibold text-lg">Deniz Yılmaz</h3>
            <p className="text-[#0D1F4F]">{t('visitors.hosted_by')}</p>
            <p className="font-semibold text-[#0D1F4F]">January 20–24, 2025</p>
            <p>
              <span className="font-semibold">{t('visitors.research_interests_label')}:</span> Finite groups, Representation theory, Block theory, Biset functors
            </p>
            <p>
              <span className="font-semibold">{t('visitors.host_label')}:</span> Olcay Coşkun
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Visitors;
