import React from "react";
import { useTranslation } from "react-i18next";

interface SectionProps {
  title: string;
  items: string[];
}

const OlcayCoskunProfile: React.FC = () => {
  const { t } = useTranslation();

  const adminItems = t("profile.sections.admin.items", { returnObjects: true }) as string[];
  const awardsItems = t("profile.sections.awards.items", { returnObjects: true }) as string[];
  const projectsItems = t("profile.sections.projects.items", { returnObjects: true }) as string[];
  const publicationsItems = t("profile.sections.publications.items", { returnObjects: true }) as string[];
  const studentsCurrentItems = t("profile.sections.studentsCurrent.items", { returnObjects: true }) as string[];
  const studentsGradsItems = t("profile.sections.studentsGrads.items", { returnObjects: true }) as string[];
  const postdocsItems = t("profile.sections.postdocs.items", { returnObjects: true }) as string[];
  const studentArticlesItems = t("profile.sections.studentArticles.items", { returnObjects: true }) as string[];

  return (
    <div className="p-6 md:p-12 max-w-8xl mx-auto text-sm leading-relaxed text-gray-800">
      <h1 className="text-3xl font-bold text-[#0D1F4F] mb-2">
        {t("profile.name")}
      </h1>

      <p className="mb-4 text-[15px] text-gray-700">{t("profile.role")}</p>

      <p className="mb-6 text-gray-700">
        {t("profile.bio.prefix")}
        <strong>{t("profile.bio.highlight")}</strong>
        {t("profile.bio.suffix")}
      </p>

      <Section title={t("profile.sections.admin.title")} items={adminItems} />
      <Section title={t("profile.sections.awards.title")} items={awardsItems} />
      <Section title={t("profile.sections.projects.title")} items={projectsItems} />
      <Section title={t("profile.sections.publications.title")} items={publicationsItems} />
      <Section title={t("profile.sections.studentsCurrent.title")} items={studentsCurrentItems} />
      <Section title={t("profile.sections.studentsGrads.title")} items={studentsGradsItems} />
      <Section title={t("profile.sections.postdocs.title")} items={postdocsItems} />
      <Section title={t("profile.sections.studentArticles.title")} items={studentArticlesItems} />

      <div className="mt-8 text-md text-[#0D1F4F] space-y-1">
        <p>
          {t("profile.ids.scopus")}:{" "}
          <a
            href="https://www.scopus.com/authid/detail.uri?authorId=17345043600"
            className="hover:underline"
          >
            https://www.scopus.com/authid/detail.uri?authorId=17345043600
          </a>
        </p>
        <p>
          {t("profile.ids.orcid")}:{" "}
          <a
            href="https://orcid.org/0000-0001-7649-560X"
            className="hover:underline"
          >
            https://orcid.org/0000-0001-7649-560X
          </a>
        </p>
      </div>
    </div>
  );
};

const Section: React.FC<SectionProps> = ({ title, items }) => (
  <div className="mb-6">
    <h2 className="text-md font-semibold text-[#0D1F4F] border-b border-purple-300 pb-1 mb-2">
      {title}
    </h2>
    <ul className="list-disc list-inside text-gray-700 space-y-1">
      {items.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
    </ul>
  </div>
);

export default OlcayCoskunProfile;
