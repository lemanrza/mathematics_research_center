import { Button } from '@/components/ui/button';
import { useNavigate, useParams } from 'react-router-dom';
import type { News } from '@/types/newsType';
import { useEffect, useState } from 'react';
import { Endpoints } from '@/enums/endpoints';
import { getAll, getOne } from '@/services/commonRequest';
import { ArrowLeft } from 'lucide-react';
import { t } from 'i18next';
import { useTranslation } from 'react-i18next';

const NewsDetail: React.FC = () => {
  const [news, setNews] = useState<News | null>(null);
  const [allNews, setAllNews] = useState<News[]>([]);
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { i18n } = useTranslation();  // Access current language from i18n

  useEffect(() => {
    if (id) {
      getOne<News>(Endpoints.news, id)
        .then((resp) => {
          setNews(resp);
        })
        .catch((error) => {
          console.error('Error fetching news:', error);
        });
    }
  }, [id]);

  useEffect(() => {
    getAll<{ news: News[] }>(Endpoints.news)
      .then((resp) => {
        setAllNews(resp.news);
      })
      .catch((error) => {
        console.error('Error fetching all news:', error);
      });
  }, []);

  const months = [
    'Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'İyun', 'İyul', 'Avqust',
    'Sentyabr', 'Oktyabr', 'Noyabr', 'Dekabr',
  ];

  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp);
    const day = String(date.getDate()).padStart(2, '0');
    const month = months[date.getMonth()];
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${day} ${month} ${hours}:${minutes}`;
  };

  const handleNavigateToNews = (id: string) => {
    navigate(`/xeberler/${id}`);  // Navigate to the selected news item
  };

  if (!news) {
    return <div>Loading...</div>;
  }

  // Access the title based on the current language (az or en)
  const title = news.title[i18n.language as keyof typeof news.title];

  return (
    <>
      {/* Back Button */}
      <Button
        onClick={() => navigate('/xeberler')}
        className="mb-3 mt-6 mx-5 bg-[#0D1F4F] text-white hover:bg-[#202941] rounded-md px-6 py-2"
      >
        <ArrowLeft /> {t("butun_xeberlere_bax")}
      </Button>

      <div className="flex flex-col sm:flex-row mx-auto mt-2 p-4 gap-8">
        {/* News Title and Content Section */}
        <div className="w-full sm:w-3/4 md:w-2/3">
          {/* News Title Section */}
          <div className="justify-between items-center mb-6">
            <h1 className="text-4xl font-semibold text-gray-800">{title}</h1>
            <div className="text-lg mt-2 text-gray-500">{formatDate(news.createdAt ? news.createdAt : Date.now())}</div>
          </div>

          {/* News Cover Image */}
          <div className="mb-6">
            <img
              src={news.coverImage}
              alt={title}
              className="w-120 h-110 rounded-lg"
            />
          </div>
        </div>

        {/* Latest News Section */}
        <div className="w-full sm:w-1/3 md:w-1/3 bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-medium text-white w-60 text-center rounded mx-auto bg-[#0D1F4F] mb-6">
            {t("son_xeberler")}
          </h2>
          <div className="space-y-6">
            {allNews.slice(0, 5).map((item) => (
              <div
                key={item.id}
                className="border-b pb-4 cursor-pointer hover:bg-gray-100 p-2 transition-all"
                onClick={() => item.id && handleNavigateToNews(item.id)}
              >
                <h3 className="font-semibold text-gray-700">{item.title[i18n.language as keyof typeof item.title]}</h3>
                <p className="text-sm text-gray-500">{formatDate(item.createdAt ? item.createdAt : Date.now())}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsDetail;
