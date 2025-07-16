import React, { useEffect, useState } from 'react';
import { CalendarIcon, Search } from 'lucide-react';
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import type { Advertisement } from '@/types/advertisementType';  // Ensure this type is correct
import { getAll } from '@/services/commonRequest';
import { Endpoints } from '@/enums/endpoints';
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import { useTranslation } from 'react-i18next';

const AnnouncementsSection: React.FC = () => {
  const [advertisements, setAdvertisements] = useState<Advertisement[]>([]);
  const [filteredAdvertisements, setFilteredAdvertisements] = useState<Advertisement[]>([]);
  const [visibleSeminars, setVisibleSeminars] = useState<Advertisement[]>([]);
  const [date, setDate] = useState<Date | undefined>();
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showMore, setShowMore] = useState<boolean>(false);
  const [noNewsOnSelectedDate, setNoNewsOnSelectedDate] = useState<boolean>(false);
  const { t, i18n } = useTranslation();  // Get the current language from i18n
  const navigate = useNavigate();

  useEffect(() => {
    getAll<{ advertisements: Advertisement[] }>(Endpoints.advertisements).then((resp) => {
      console.log("resp: ", resp);
      setAdvertisements(resp.advertisements.reverse());
      setFilteredAdvertisements(resp.advertisements);
      setVisibleSeminars(resp.advertisements.slice(0, 8));
      setShowMore(resp.advertisements.length > 8);
    });
  }, []);

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

  // Handle Search Input
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    const filtered = advertisements.filter((seminar) =>
      seminar.title[i18n.language as keyof typeof seminar.title]?.toLowerCase().includes(query.toLowerCase()) // Safe type assertion
    );
    setFilteredAdvertisements(filtered);
    setVisibleSeminars(filtered.slice(0, 8));
    setShowMore(filtered.length > 8);
  };

  // Handle Date Selection
  const handleDateChange = (selectedDate: Date | undefined) => {
    setDate(selectedDate);
    if (selectedDate) {
      const filtered = advertisements.filter((seminar) => {
        const seminarDate = new Date(seminar.createdAt ? seminar.createdAt : Date.now());
        return (
          seminarDate.getDate() === selectedDate.getDate() &&
          seminarDate.getMonth() === selectedDate.getMonth() &&
          seminarDate.getFullYear() === selectedDate.getFullYear()
        );
      });

      if (filtered.length === 0) {
        setNoNewsOnSelectedDate(true);
      } else {
        setNoNewsOnSelectedDate(false);
      }

      setFilteredAdvertisements(filtered);
      setVisibleSeminars(filtered.slice(0, 8));
      setShowMore(filtered.length > 8);
    } else {
      setFilteredAdvertisements(advertisements);
      setVisibleSeminars(advertisements.slice(0, 8));
      setShowMore(advertisements.length > 8);
      setNoNewsOnSelectedDate(false);
    }
  };

  const handleResetFilters = () => {
    setDate(undefined);
    setFilteredAdvertisements(advertisements);
    setVisibleSeminars(advertisements.slice(0, 8));
    setShowMore(advertisements.length > 8);
    setNoNewsOnSelectedDate(false);
  };

  const loadMoreSeminars = () => {
    const nextSeminars = filteredAdvertisements.slice(visibleSeminars.length, visibleSeminars.length + 4);
    setVisibleSeminars((prev) => [...prev, ...nextSeminars]);

    if (visibleSeminars.length + nextSeminars.length >= filteredAdvertisements.length) {
      setShowMore(false);
    }
  };

  const handleCardClick = (id: string) => {
    navigate(`/elanlar/${id}`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col sm:flex-row items-center justify-between mb-8">
        <h1 className="text-4xl font-light text-gray-500 tracking-wide uppercase mb-4 sm:mb-0">{t("elanlar")}</h1>
        <div className="flex items-center space-x-4 w-full sm:w-auto">
          <div className="relative w-full sm:w-[280px]">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder={t("search")}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0D1F4F] focus:border-transparent w-full"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          </div>
        </div>
      </div>

      <div className="mb-8">
        <Button onClick={handleResetFilters} className="bg-[#0D1F4F] uppercase text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition-colors duration-200">
          {t("butun_elanlar")}
        </Button>
      </div>

      <div className="flex flex-col lg:flex-row md:flex-row gap-3 items-center uppercase justify-between mb-6">
        <h2 className="text-2xl font-medium text-gray-800">{t("butun_elanlar")}</h2>
        <div>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                data-empty={!date}
                className="data-[empty=true]:text-muted-foreground w-[280px] justify-start text-left font-normal"
              >
                <CalendarIcon />
                {date ? format(date, "PPP") : <span>{t("tarix_secin")}</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={date ?? undefined}
                onSelect={handleDateChange}
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>

      {/* No News Message */}
      {noNewsOnSelectedDate && (
        <div className="text-center text-red-500 font-medium mb-4">
          {t("tarixde_xeber_yoxdur")}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {visibleSeminars.map((announcement) => (
          <div
            key={announcement.id}
            onClick={() => announcement.id && handleCardClick(announcement.id)}
            className="bg-white border border-gray-200 rounded-lg overflow-hidden transition-shadow duration-300 cursor-pointer group"
          >
            <div className="flex">
              <div className="w-48 h-32 flex-shrink-0">
                <img
                  src={announcement.coverImage}
                  alt="Announcement"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="flex-1 p-4 flex flex-col justify-between">
                <div>
                  <p className="text-sm font-semibold text-gray-600 mb-2 line-clamp-3 hover:text-gray-900 hover:underline leading-relaxed">
                    {announcement.title[i18n.language as keyof typeof announcement.title]} {/* Safe indexing */}
                  </p>
                </div>

                <div className="flex items-center justify-between mt-auto">
                  <div className="text-right">
                    <div className="text-xl font-semibold text-[#0D1F4F]">
                      {formatDate(announcement.createdAt ? announcement.createdAt : Date.now())}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showMore && (
        <div className="text-center mt-12">
          <button
            onClick={loadMoreSeminars}
            className="bg-[#0D1F4F] text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition-colors duration-200"
          >
            {t("daha_cox_yukle")}
          </button>
        </div>
      )}
    </div>
  );
};

export default AnnouncementsSection;
