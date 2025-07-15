import { useTranslation } from 'react-i18next';

interface ResearchProgramItem {
  title: string;
  content: string;
}

interface ResearchProgramSection {
  heading: string;
  items: ResearchProgramItem[];
}

const ResearchPrograms = () => {
  const { t } = useTranslation();

  // `t` metodunun nəticəsini `any` tipində qəbul edirik və sonra doğru tipe çeviririk
  const researchPrograms = t('research_programs', { returnObjects: true }) as ResearchProgramSection[];

  return (
    <section className="max-w-8xl mx-auto px-12 py-14 font-sans text-[#0D1F4F]">
      <h2 className="text-3xl sm:text-4xl font-bold mb-10">
        {t('seminarlar_silsilesi')}
      </h2>

      <div className="space-y-10">
        {researchPrograms.map((section, index) => (
          <div key={index} className="space-y-4">
            <h3 className="text-xl font-semibold text-[#0D1F4F]">
              {section.heading}
            </h3>
            <div className="space-y-3 text-[#3b4a7f]">
              {section.items.map((item, i) => (
                <p key={i} className="text-sm sm:text-base leading-relaxed">
                  {item.title && <strong className="text-[#0D1F4F]">{item.title} </strong>}
                  {item.content}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ResearchPrograms;
