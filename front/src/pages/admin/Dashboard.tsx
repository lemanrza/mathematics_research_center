import React, { useState, useEffect } from 'react';
import { getAll } from '@/services/commonRequest';
import { Endpoints } from '@/enums/endpoints';
import type { News } from '@/types/newsType';
import type { Advertisement } from '@/types/advertisementType';
import AdminNews from '@/components/admin/adminNews';
import AdminAnnouncements from '@/components/admin/adminAnnouncements';
import { useNavigate } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const [allNews, setAllNews] = useState<News[]>([]);
  const [allAnnouncements, setAllAnnouncements] = useState<Advertisement[]>([]);
  const [searchNews, setSearchNews] = useState('');
  const [searchAds, setSearchAds] = useState('');
  const navigate = useNavigate()
  useEffect(() => {
    getAll<{ advertisements: Advertisement[] }>(Endpoints.advertisements).then((resp) => {
      setAllAnnouncements(resp.advertisements.reverse());
    });
    getAll<{ news: News[] }>(Endpoints.news).then((resp) => {
      setAllNews(resp.news.reverse());
    });
  }, []);
  const logout = () => {
    localStorage.removeItem("token")
    navigate("/")
  }
  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-center text-3xl font-semibold text-[#0D1F4F]">Admin Panel</h2>
        <button
          onClick={logout}
          className="bg-[#D32F2F] text-white py-2 px-4 rounded-md hover:bg-[#9A0000] transition"
        >
          Logout
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <AdminNews
            allNews={allNews}
            setAllNews={setAllNews}
            searchNews={searchNews}
            setSearchNews={setSearchNews}
          />
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <AdminAnnouncements
            allAnnouncements={allAnnouncements}
            setAllAnnouncements={setAllAnnouncements}
            searchAds={searchAds}
            setSearchAds={setSearchAds}
          />
        </div>
      </div>
    </div>


  );
};

export default Dashboard;
