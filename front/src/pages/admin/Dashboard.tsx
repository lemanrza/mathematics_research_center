import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface Item {
  id: string;
  title: string;
  imageUrl: string;
  createdAt: string;
}

const formatDate = (date: string) => {
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'
  ];
  const d = new Date(date);
  return `${d.getDate()} ${monthNames[d.getMonth()]} ${d.getFullYear()}`;
};

const Dashboard = () => {
  const [newsList, setNewsList] = useState<Item[]>([
    { id: '1', title: 'News Article 1', imageUrl: 'https://via.placeholder.com/100', createdAt: '2023-07-10' },
    { id: '2', title: 'News Article 2', imageUrl: 'https://via.placeholder.com/100', createdAt: '2023-07-09' },
  ]);

  const [advertisementsList, setAdvertisementsList] = useState<Item[]>([
    { id: '1', title: 'Advertisement 1', imageUrl: 'https://via.placeholder.com/100', createdAt: '2023-07-08' },
    { id: '2', title: 'Advertisement 2', imageUrl: 'https://via.placeholder.com/100', createdAt: '2023-07-07' },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState<Item>({ id: '', title: '', imageUrl: '', createdAt: '' });
  const [isEdit, setIsEdit] = useState(false);
  const [searchNews, setSearchNews] = useState('');
  const [searchAds, setSearchAds] = useState('');

  const handleAddNews = () => {
    setModalData({ id: '', title: '', imageUrl: '', createdAt: formatDate(new Date().toString()) });
    setIsEdit(false);
    setIsModalOpen(true);
  };

  const handleAddAdvertisement = () => {
    setModalData({ id: '', title: '', imageUrl: '', createdAt: formatDate(new Date().toString()) });
    setIsEdit(false);
    setIsModalOpen(true);
  };

  const handleEditNews = (id: string) => {
    const news = newsList.find((item) => item.id === id);
    if (news) {
      setModalData(news);
      setIsEdit(true);
      setIsModalOpen(true);
    }
  };

  const handleEditAdvertisement = (id: string) => {
    const ad = advertisementsList.find((item) => item.id === id);
    if (ad) {
      setModalData(ad);
      setIsEdit(true);
      setIsModalOpen(true);
    }
  };

  const handleDeleteNews = (id: string) => {
    setNewsList(newsList.filter(news => news.id !== id));
  };

  const handleDeleteAdvertisement = (id: string) => {
    setAdvertisementsList(advertisementsList.filter(ad => ad.id !== id));
  };

  const handleModalSubmit = () => {
    if (isEdit) {
      if (modalData.id) {
        if (newsList.find(news => news.id === modalData.id)) {
          setNewsList(newsList.map(news => news.id === modalData.id ? modalData : news));
        } else {
          setAdvertisementsList(advertisementsList.map(ad => ad.id === modalData.id ? modalData : ad));
        }
      }
    } else {
      const newItem = { ...modalData, id: (newsList.length + advertisementsList.length + 1).toString() };
      if (modalData.title.includes('Advertisement')) {
          setAdvertisementsList([...advertisementsList, newItem]);
      } else {
          setNewsList([...newsList, newItem]);
      }
    }
    setIsModalOpen(false);
  };

  return (
      <div className="container mx-auto p-6">
        <Dialog open={isModalOpen} onOpenChange={() => setIsModalOpen(false)}>
      <h2 className="text-3xl text-center font-semibold mb-6 text-[#0D1F4F]">Dashboard</h2>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <div className="mb-8 bg-white p-6 rounded-lg shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl font-semibold text-[#0D1F4F]">News</h3>
            <DialogTrigger>
              <button
                onClick={handleAddNews}
                className="bg-[#0D1F4F] text-white py-2 px-4 rounded-md hover:bg-[#0a1838] transition"
              >
                Add News
              </button>
            </DialogTrigger>
          </div>

          <div className="mb-4 flex gap-4">
            <input
              type="text"
              className="p-2 border border-gray-300 rounded-md w-1/2"
              placeholder="Search News"
              value={searchNews}
              onChange={(e) => setSearchNews(e.target.value)}
            />
          </div>

          <div className="space-y-4">
            {newsList.filter(news => news.title.toLowerCase().includes(searchNews.toLowerCase())).map((news) => (
              <div key={news.id} className="p-4 border border-gray-300 rounded-lg shadow-md hover:bg-gray-50 transition">
                <h4 className="font-semibold text-lg text-[#0D1F4F]">{news.title}</h4>
                <img src={news.imageUrl} alt={news.title} className="w-24 h-24 object-cover rounded-md mt-2 mb-4" />
                <p className="text-gray-500 text-sm">Created on: {news.createdAt}</p>
                <div className="mt-2">
                  <button
                    onClick={() => handleEditNews(news.id)}
                    className="bg-[#0D1F4F] text-white py-1 px-3 rounded-md mr-2 hover:bg-[#0a1838] transition"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteNews(news.id)}
                    className="bg-[#D32F2F] text-white py-1 px-3 rounded-md hover:bg-[#9A0000] transition"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl font-semibold text-[#0D1F4F]">Advertisements</h3>
            <DialogTrigger>
              <button
                onClick={handleAddAdvertisement}
                className="bg-[#0D1F4F] text-white py-2 px-4 rounded-md hover:bg-[#0a1838] transition"
              >
                Add Advertisement
              </button>
            </DialogTrigger>
          </div>

          <div className="mb-4 flex gap-4">
            <input
              type="text"
              className="p-2 border border-gray-300 rounded-md w-1/2"
              placeholder="Search Advertisements"
              value={searchAds}
              onChange={(e) => setSearchAds(e.target.value)}
            />
          </div>

          <div className="space-y-4">
            {advertisementsList.filter(ad => ad.title.toLowerCase().includes(searchAds.toLowerCase())).map((ad) => (
              <div key={ad.id} className="p-4 border border-gray-300 rounded-lg shadow-md hover:bg-gray-50 transition">
                <h4 className="font-semibold text-lg text-[#0D1F4F]">{ad.title}</h4>
                <img src={ad.imageUrl} alt={ad.title} className="w-24 h-24 object-cover rounded-md mt-2 mb-4" />
                <p className="text-gray-500 text-sm">Created on: {ad.createdAt}</p>
                <div className="mt-2">
                  <button
                    onClick={() => handleEditAdvertisement(ad.id)}
                    className="bg-[#0D1F4F] text-white py-1 px-3 rounded-md mr-2 hover:bg-[#0a1838] transition"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteAdvertisement(ad.id)}
                    className="bg-[#D32F2F] text-white py-1 px-3 rounded-md hover:bg-[#9A0000] transition"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal using ShadCN Dialog components */}
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{isEdit ? 'Edit Item' : 'Add Item'}</DialogTitle>
          </DialogHeader>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleModalSubmit();
            }}
          >
            <input
              type="text"
              placeholder="Title"
              value={modalData.title}
              onChange={(e) => setModalData({ ...modalData, title: e.target.value })}
              className="w-full p-2 border border-gray-300 rounded-md mb-4"
              required
            />
            <input
              type="url"
              placeholder="Image URL"
              value={modalData.imageUrl}
              onChange={(e) => setModalData({ ...modalData, imageUrl: e.target.value })}
              className="w-full p-2 border border-gray-300 rounded-md mb-4"
              required
            />
            <div className="mb-4">
              <p>Created At: {modalData.createdAt}</p>
            </div>
            <button
              type="submit"
              className="bg-[#0D1F4F] text-white py-2 px-4 rounded-md hover:bg-[#0a1838] transition w-full"
            >
              Save
            </button>
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="mt-4 text-center block w-full bg-gray-300 text-black py-2 px-4 rounded-md hover:bg-gray-400"
            >
              Cancel
            </button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Dashboard;
