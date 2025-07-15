import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Endpoints } from "@/enums/endpoints";
import { getAll } from "@/services/commonRequest";
import type { Advertisement } from "@/types/advertisementType";
import type { News } from "@/types/newsType";
import { t } from "i18next";
import { ChevronLeft, ChevronRight, MousePointer } from "lucide-react"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [seminars, setSeminars] = useState<News[]>()
  const [announcements, setAnnouncements] = useState<Advertisement[]>()
  useEffect(() => {
    getAll<{ news: [] }>(Endpoints.news).then((resp) => {
      setSeminars([...resp.news]);
    });
    getAll<{ advertisements: [] }>(Endpoints.advertisements).then((resp) => {
      setAnnouncements([...resp.advertisements.reverse()])
    })
  }, [])

  const months = [
    "Yanvar", "Fevral", "Mart", "Aprel", "May", "İyun", "İyul", "Avqust",
    "Sentyabr", "Oktyabr", "Noyabr", "Dekabr"
  ];

  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp);
    const day = String(date.getDate()).padStart(2, '0');
    const month = months[date.getMonth()];
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${day} ${month} ${hours}:${minutes}`;
  };
  const menuItems = [
    { label: "xos_gelmisiniz", link: "/haqqimizda/xos-gelmisiniz" },
    { label: "merkezin_missiyasi", link: "/haqqimizda/merkezin-missiyasi" },
    { label: "Elmi Məsləhət şurası", link: "/haqqimizda/elmi-meslehet-surasi" },
    { label: "Tədqiqat Proqramları", link: "/elmi-fealiyyet/tedqiqat-proqramlari" },
    { label: "Müraciət", link: "/haqqimizda/muraciet" },
    { label: "elaqe", link: "/elaqe" }
  ];

  return (
    <div>
      <section className="relative min-h-[500px] bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-lg transform rotate-12"></div>
          <div className="absolute top-32 left-32 w-24 h-24 bg-yellow-400 rounded-lg transform -rotate-6"></div>
          <div className="absolute top-16 left-48 w-20 h-20 bg-cyan-400 rounded-lg transform rotate-45"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-white rounded-lg transform -rotate-12"></div>
          <div className="absolute bottom-32 right-32 w-28 h-28 bg-pink-400 rounded-lg transform rotate-6"></div>
        </div>

        <div className="absolute left-8 top-1/2 transform -translate-y-1/2">
          <div className="grid grid-cols-4 gap-2">
            {Array.from({ length: 16 }).map((_, i) => (
              <div
                key={i}
                className={`w-8 h-8 rounded-sm ${i % 3 === 0 ? 'bg-purple-500' :
                  i % 3 === 1 ? 'bg-blue-500' :
                    'bg-indigo-500'
                  } opacity-80`}
              />
            ))}
          </div>
        </div>
        <div className="relative z-10 flex items-center justify-center min-h-[500px] px-4">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-wide">
              MATHEMATICS
            </h1>
            <h2 className="text-3xl md:text-5xl font-semibold mb-8 tracking-wide">
              RESEARCH CENTER
            </h2>
            <div className="bg-black/20 backdrop-blur-sm px-4 py-2 rounded-lg inline-block">
              <Link to={"/haqqimizda/merkezin-missiyasi"} className="text-lg flex gap-2 cursor-pointer items-center">{t("daha_cox")} <MousePointer /> </Link>
            </div>
          </div>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20 w-12 h-12 rounded-full"
        >
          <ChevronLeft className="w-6 h-6" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20 w-12 h-12 rounded-full"
        >
          <ChevronRight className="w-6 h-6" />
        </Button>

        <div className="absolute bottom-8 right-8 flex space-x-2">
          <div className="w-3 h-3 bg-white rounded-full"></div>
          <div className="w-3 h-3 bg-white/50 rounded-full"></div>
          <div className="w-3 h-3 bg-white/50 rounded-full"></div>
        </div>
      </section>
      <section className="flex gap-4 px-6 py-4 flex-wrap lg:flex-nowrap">

        {/* sidebar */}
        <div className="w-full lg:w-80 space-y-1">
          {menuItems.map((item, index) => (
            <Card
              key={index}
              className="group bg-[#A6B9D5] hover:bg-[#0D1F4F] transition-colors duration-200 cursor-pointer border-0 shadow-sm rounded-none px-5 py-2.5 flex items-center"
            >
              <Link to={item.link} className="font-medium text-sm text-[#0D1F4F] group-hover:text-white transition-colors duration-200">
                {t(`${item.label}`)}
              </Link>
            </Card>
          ))}
        </div>
        {/* news */}
        <div className="flex-1 ">
          <Card className="border-0 shadow-lg">
            <CardHeader className="bg-white border-b">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold uppercase text-gray-700">{t("xeberler")}</h2>
              </div>
            </CardHeader>
            <CardContent className="px-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                {seminars?.slice(0, 4).map((seminar) => (
                  <Card key={seminar.id} className="shadow-lg rounded-lg overflow-hidden group">
                    <Link to={`/xeberler/${seminar.id}`}>
                      <div className="w-full h-40">
                        <img
                          className="w-full h-full object-cover hover:scale-105 transition-transform transform"
                          src={seminar.coverImage}
                          alt={seminar.title}
                        />
                      </div>
                      <CardContent className="py-2">
                        <h3 className="text-xl font-bold text-gray-800 line-clamp-2">{seminar.title}</h3>
                        <p className="text-sm text-gray-600 mb-2">
                          {formatDate(seminar.createdAt ? seminar.createdAt : Date.now())}
                        </p>
                      </CardContent>
                    </Link>
                  </Card>
                ))}
              </div>
            </CardContent>

            <div className="text-center py-4">
              <Link to={"/xeberler"}>
                <Button className="px-6 py-2 bg-[#0D1F4F] text-white font-medium rounded hover:bg-[#1a233c] transition duration-200">
                  {t("butun_xeberler")}
                </Button>
              </Link>
            </div>
          </Card>
        </div>

        {/* announcements */}
        <div className="w-full lg:w-80">
          <Card className="border-0 shadow-sm">
            <CardHeader className="bg-[#0D1F4F] text-white">
              <h2 className="text-xl uppercase font-bold">{t("elanlar")}</h2>
            </CardHeader>
            <CardContent className="p-0">
              <div className="space-y-0">
                {announcements?.slice(0, 6).map((announcement, index) => (
                  <div
                    key={announcement.id}
                    className={`p-4 border-b border-gray-200 last:border-b-0 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                      }`}
                  >
                    <Link to={`/elanlar/${announcement.id}`}>
                      <div className="flex items-start gap-3">
                        <div className="text-sm text-gray-500 font-medium whitespace-nowrap">
                          {formatDate(announcement.createdAt ? announcement.createdAt : Date.now())}
                        </div>
                      </div>
                      <p className="text-sm text-gray-700 mt-2 leading-relaxed">
                        {announcement.title}
                      </p>
                    </Link>

                  </div>
                ))}
              </div>
            </CardContent>
            <div className="text-center py-4">
              <Link to={"/elanlar"}>
                <Button className="px-6 py-2 bg-[#0D1F4F] text-white font-medium rounded hover:bg-[#1a233c] transition duration-200">
                  {t("butun_elanlar")}
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>
    </div>

  )
}

export default Home