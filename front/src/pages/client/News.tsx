import SeminarCard from '@/components/client/NewsCard';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Endpoints } from '@/enums/endpoints';
import { getAll } from '@/services/commonRequest';
import type { News } from '@/types/newsType';
import { format } from 'date-fns';
import { CalendarIcon, Search } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const SeminarList: React.FC = () => {
  const [news, setNews] = useState<News[]>([]);
  const [filteredNews, setFilteredNews] = useState<News[]>([]);
  const [date, setDate] = React.useState<Date | undefined>(undefined);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [visibleSeminars, setVisibleSeminars] = useState<News[]>([]);
  const [showMore, setShowMore] = useState<boolean>(false);
  const [noNewsOnSelectedDate, setNoNewsOnSelectedDate] = useState<boolean>(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    getAll<{ news: News[] }>(Endpoints.news).then((resp) => {
      setNews(resp.news);
      setFilteredNews(resp.news);
      setVisibleSeminars(resp.news.slice(0, 8));
      setShowMore(resp.news.length > 8);
    });
  }, []);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    const filtered = news.filter((seminar) =>
      seminar.title[i18n.language as keyof typeof seminar.title]?.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredNews(filtered);
    setVisibleSeminars(filtered.slice(0, 8));
    setShowMore(filtered.length > 8);
  };

  const handleDateChange = (selectedDate: Date | undefined) => {
    setDate(selectedDate);
    if (selectedDate) {
      const filtered = news.filter((seminar) => {
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

      setFilteredNews(filtered);
      setVisibleSeminars(filtered.slice(0, 8));
      setShowMore(filtered.length > 8);
    } else {
      setFilteredNews(news);
      setVisibleSeminars(news.slice(0, 8));
      setShowMore(news.length > 8);
      setNoNewsOnSelectedDate(false);
    }
  };

  const handleResetFilters = () => {
    setDate(undefined);
    setFilteredNews(news);
    setVisibleSeminars(news.slice(0, 8));
    setShowMore(news.length > 8);
    setNoNewsOnSelectedDate(false);
  };

  const loadMoreSeminars = () => {
    const nextSeminars = filteredNews.slice(visibleSeminars.length, visibleSeminars.length + 4);
    setVisibleSeminars((prev) => [...prev, ...nextSeminars]);

    if (visibleSeminars.length + nextSeminars.length >= filteredNews.length) {
      setShowMore(false);
    }
  };

  return (
    <div className="container mt-10 mx-auto p-4">
      {/* Search and Filter Section */}
      <div className="flex items-center justify-between mb-8 flex-col sm:flex-row">
        <h1 className="text-4xl font-light text-gray-500 tracking-wide uppercase mb-4 sm:mb-0">{t("xeberler")}</h1>
        <div className="flex items-center space-x-4">
          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder={t("axtarış")}
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0D1F4F] focus:border-transparent"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Filter Button */}
      <div className="mb-8">
        <Button
          onClick={handleResetFilters}
          className="bg-[#0D1F4F] text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition-colors duration-200 w-full sm:w-auto"
        >
          {t("butun_xeberler")}
        </Button>
      </div>

      {/* Calendar Popover */}
      <div className="flex items-center justify-between mb-6 flex-col sm:flex-row">
        <h2 className="text-2xl font-medium text-gray-800 mb-4 sm:mb-0">{t("butun_xeberler")}</h2>
        <div>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                data-empty={!date}
                className="data-[empty=true]:text-muted-foreground w-full sm:w-[280px] justify-start text-left font-normal"
              >
                <CalendarIcon />
                {date ? format(date, 'PPP') : <span>{t("tarix_secin")}</span>}
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

      {/* News Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {visibleSeminars.map((seminar) => (
          <SeminarCard
            key={seminar.id}
            id={seminar.id}
            title={seminar.title}
            coverImage={seminar.coverImage}
            createdAt={seminar.createdAt}
            updatedAt={seminar.updatedAt}
          />
        ))}
      </div>

      {/* "Load More" Button */}
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

export default SeminarList;
