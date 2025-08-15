import React from "react";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

type SeminarEvent = {
  date: string;
  time: string;
  location: string;
  speaker: string;
  summaryHtml: string; // HTML və ya düz mətn
};

type SeminarCategory = {
  id: number;
  title: string;
  data: SeminarEvent[];
};

const SeminarDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation();

  // Bütün seminarları cari dil üçün i18n-dən götür
  const seminars = t("seminars", { returnObjects: true }) as SeminarCategory[];

  const seminar = seminars.find((s) => String(s.id) === String(id));

  if (!seminar) {
    return <div className="px-4 py-10">{t("seminar_detail.not_found")}</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold text-[#0D1F4F] mb-6">
        {seminar.title}
      </h1>

      {seminar.data.map((event, index) => (
        <div key={index} className="bg-[#F3F3F4] p-6 rounded-md mb-6">
          <h2 className="text-2xl font-semibold text-[#4A4A4A]">
            {event.speaker}
          </h2>

          <p className="text-lg text-[#333] font-medium mt-2">
            <span className="font-semibold">{t("seminar_detail.date_time")}:</span>{" "}
            {event.date} | {event.time}
          </p>

          {event.location && (
            <p className="text-sm text-[#7D7D7D] mt-2">
              <span className="font-semibold">{t("seminar_detail.location")}:</span>{" "}
              {event.location}
            </p>
          )}

          <p className="text-gray-800 mt-4">
            <span className="font-semibold">{t("seminar_detail.summary")}:</span>{" "}
            <span
              // i18n faylınızdakı kontent sizə məxsusdur deyə HTML göstərmək uyğundur
              dangerouslySetInnerHTML={{ __html: event.summaryHtml }}
            />
          </p>
        </div>
      ))}

      <Link
        to="/elmi-fealiyyet/seminarlar"
        className="inline-block mt-6 px-6 py-2 bg-[#0D1F4F] text-white font-semibold text-lg rounded-md hover:bg-[#4A90E2]"
      >
        {t("seminar_detail.all_seminars")}
      </Link>
    </div>
  );
};

export default SeminarDetail;
