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


const SeminarList: React.FC = () => {
  const [news, setNews] = useState<News[]>([]);  
  const [date, setDate] = React.useState<Date>();

  // Fetch news and seminar data from the API on mount
  useEffect(() => {
    getAll<{ news: [] }>(Endpoints.news).then((resp) => {
      console.log("resp: ", resp);
      setNews([...resp.news]);
    });
  }, []);

  const months = [
    "Yanvar", "Fevral", "Mart", "Aprel", "May", "İyun", "İyul", "Avqust",
    "Sentyabr", "Oktyabr", "Noyabr", "Dekabr"
  ];

  const formatDate = (timestamp: string) => {
    const date = new Date(timestamp);
    const day = String(date.getDate()).padStart(2, '0');
    const month = months[date.getMonth()];
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${day} ${month} ${hours}:${minutes}`;
  };

  return (
    <div className="container mt-10 mx-auto p-4">
      {/* Search and Filter Section */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl font-light text-gray-500 tracking-wide">XƏBƏRLƏR</h1>
        <div className="flex items-center space-x-4">
          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Axtarış"
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0D1F4F] focus:border-transparent"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Filter Button */}
      <div className="mb-8">
        <button className="bg-[#0D1F4F] text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition-colors duration-200">
          BÜTÜN XƏBƏRLƏR
        </button>
      </div>

      {/* Calendar Popover */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-medium text-gray-800">BÜTÜN XƏBƏRLƏR</h2>
        <div>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                data-empty={!date}
                className="data-[empty=true]:text-muted-foreground w-[280px] justify-start text-left font-normal"
              >
                <CalendarIcon />
                {date ? format(date, "PPP") : <span>Tarix seçin</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar mode="single" selected={date} onSelect={setDate} />
            </PopoverContent>
          </Popover>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {news.map((seminar) => (
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

      <div className="text-center mt-12">
        <button className="bg-[#0D1F4F] text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition-colors duration-200">
          Daha çox yüklə
        </button>
      </div>
    </div>
  );
};

export default SeminarList;
