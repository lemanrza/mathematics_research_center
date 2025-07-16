import { useTranslation } from "react-i18next";

const eventKeys = [
  "event1", "event2", "event3", "event4", "event5", "event6",
  "event7", "event8", "event9", "event10", "event11", "event12",
  "event13", "event14", "event15", "event16", "event17", "event18",
  "event19", "event20", "event21", "event22"
];

const AllEvents = () => {
  const { t } = useTranslation()
  return (
    <section className="max-w-7xl mx-auto px-4 py-12 text-[#0D1F4F] font-sans">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6  tracking-wide">{t("butun_tedbirler")}</h2>
      <ol className="list-decimal list-inside space-y-4 text-sm sm:text-base text-[#0D1F4F] leading-relaxed">
        {eventKeys.map((eventKey, index) => (
          <li key={index}>{t(`events.${eventKey}`)}</li>
        ))}
      </ol>
    </section>
  );
};

export default AllEvents;
