import { useTranslation } from "react-i18next";

const Connection = () => {
  const { t } = useTranslation();

  return (
    <div className="p-10 bg-white text-[#0D1F4F] space-y-8 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-[#0D1F4F]  mb-10">{t("Əlaqə")}</h2>

      <div className="space-y-6 pb-1 text-base leading-relaxed">
        <p>
          <span className="font-semibold italic">{t("Ünvan: ")}</span> {t("Bakı Dövlət Universiteti, əsas bina 3-cü mərtəbə, Rəqəmsal Araşdırmalar Laboratoriyası, Bakı şəhəri, akademik Zahid Xəlilov küçəsi, 33, AZ 1148")}
        </p>
        <p>
          <span className="font-semibold italic">{t("Mail ünvanı: ")}</span> 
          <a href="mailto:mrl@asoiu.edu.az" className="text-[#1e3a8a] hover:text-[#0b1123] transition-colors duration-300">
            mrl@asoiu.edu.az
          </a>
        </p>
        <p>
          <span className="font-semibold italic">{t("Qeydiyyat: ")}</span> 
          <a href="https://docs.google.com/forms/d/e/1FAIpQLScppsrMBkNY4OJjMVt58WmTCFKMKVJLHaArDjncTl8nDDRHHw/viewform" className="text-[#1e3a8a] hover:text-[#0b1123] ml-2 hover:underline transition-colors duration-300">
            {t("Qeydiyyat Linki")}
          </a>
        </p>
      </div>
    </div>
  );
};

export default Connection;
