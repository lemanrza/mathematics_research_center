import { Send } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { t } from "i18next";

export default function Footer() {
  return (
    <footer className="bg-gray-50 text-[#3b2d4a] pt-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 pb-10 border-b border-purple-200">

        {/* Links Section */}
        <div className="flex flex-col gap-2 mt-2">
          <h3><Link to={"/"} className="hover:text-purple-600">{t("ana_sehife")}</Link></h3>
          <h3><Link to={"/haqqimizda"} className="hover:text-purple-600">{t("haqqimizda")}</Link></h3>
          <h3><Link to={"/elanlar"} className="hover:text-purple-600">{t("elanlar")}</Link></h3>
          <h3><Link to={"/xeberler"} className="hover:text-purple-600">{t("xeberler")}</Link></h3>
        </div>

        {/* Centered Logo and Contact Information */}
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <img
            src="/mathematics_research_lab_logo.jpg"
            alt="Mathematics Research Center"
            className="w-60 h-auto mb-3"
          />
          <p className="text-sm font-medium">
            {t("BDU, əsas bina, 3-cü mərtəbə, Rəqəmsal Araşdırmalar Lab.")}
          </p>
          <p className="text-sm mt-1">{t("Z. Xəlilov küçəsi, 33, AZ1148")}</p>
        </div>

        {/* Contact Button */}
        <div className="mt-2">
          <h4 className="text-lg font-semibold mb-3"></h4>
          <p className="text-sm mb-4 text-gray-700">
            {t("Sualınız, təklifiniz və ya şikayətiniz varsa, müraciət edə bilərsiniz.")}
          </p>
          <Link to={"/rektora-muraciet"}>
            <Button className="inline-flex items-center gap-2 bg-[#0D1F4F] hover:bg-[#181c28] text-white text-sm px-4 py-2 rounded-md shadow">
              <Send size={16} className="text-white" />
              {t("Rektora müraciət")}
            </Button>
          </Link>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-[#0D1F4F] text-white text-sm py-6 mt-6">
        <div className="max-w-7xl mx-auto px-4 text-center">
          © {new Date().getFullYear()} Mathematics Research Center
        </div>
      </div>
    </footer>
  );
}
