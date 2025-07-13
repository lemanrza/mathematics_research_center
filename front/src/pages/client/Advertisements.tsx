import React, { useEffect, useState } from 'react';
import { CalendarIcon, Search } from 'lucide-react';
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import type { Advertisement } from '@/types/advertisementType';
import { getAll } from '@/services/commonRequest';
import { Endpoints } from '@/enums/endpoints';
import { useNavigate } from 'react-router-dom';

const AnnouncementsSection: React.FC = () => {
  const [advertisements, setAdvertisements] = useState<Advertisement[]>([]);
  const navigate = useNavigate()
  useEffect(() => {
    getAll<{
      advertisements: [];
    }>(Endpoints.advertisements).then((resp) => {
      console.log("resp: ", resp)
      setAdvertisements([...resp.advertisements]);
    });
  }, []);

  const [date, setDate] = React.useState<Date>()

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
  const handleCardClick = (id: string) => {
    navigate(`/elanlar/${id}`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl font-light text-gray-500 tracking-wide">ELANLAR</h1>
        <div className="flex items-center space-x-4">
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

      <div className="mb-8">
        <button className="bg-[#0D1F4F] text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition-colors duration-200">
          BÜTÜN ELANLAR
        </button>
      </div>

      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-medium text-gray-800">BÜTÜN ELANLAR</h2>
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {advertisements.map((announcement) => (
          <div
            key={announcement.id}
            onClick={() => handleCardClick(announcement.id)}
            className="bg-white border border-gray-200 rounded-lg overflow-hidden  transition-shadow duration-300 cursor-pointer group"
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
                    {announcement.title}
                  </p>
                </div>

                <div className="flex items-center justify-between mt-auto">
                  <div className="text-right">
                    <div className="text-xl font-semibold text-[#0D1F4F]">
                      {formatDate(announcement.createdAt)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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

export default AnnouncementsSection;

