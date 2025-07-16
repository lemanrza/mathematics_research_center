import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import type { News } from '@/types/newsType';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { post, put, remove } from '@/services/commonRequest';
import { Endpoints } from '@/enums/endpoints';
import { formatDate } from '@/utils/formatDate';
import { useTranslation } from 'react-i18next';

interface AdminNewsProps {
    allNews: News[];
    setAllNews: React.Dispatch<React.SetStateAction<News[]>>;
    searchNews: string;
    setSearchNews: React.Dispatch<React.SetStateAction<string>>;
}

const AdminNews: React.FC<AdminNewsProps> = ({ allNews, setAllNews, searchNews, setSearchNews }) => {
    const { i18n } = useTranslation();

    const [modalData, setModalData] = useState<News>({
        id: '',
        title: {
            az: '',
            en: ''
        },
        coverImage: '',
        createdAt: Date.now(),
        updatedAt: Date.now().toString(),
    });
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEdit, setIsEdit] = useState(false);

    const handleAddNews = () => {
        setModalData({
            id: '',
            title: {
                az: '',
                en: ''
            },
            coverImage: '',
            createdAt: Date.now(),
            updatedAt: Date.now().toString(),
        });
        setIsEdit(false);
        setIsModalOpen(true);
    };

    const handleEditNews = (id: string) => {
        const news = allNews.find((item) => item.id === id);
        if (news) {
            setModalData(news);
            setIsEdit(true);
            setIsModalOpen(true);
        }
    };

    const handleDeleteNews = async (id: string) => {
        try {
            await remove<News>(Endpoints.news, id);
            setAllNews(allNews.filter(news => news.id !== id));
        } catch (error) {
            console.error('Error deleting news:', error);
        }
    };

    const handleModalSubmit = async () => {
        try {
            const newItem = { ...modalData };

            // Only delete properties if they are defined
            if (newItem.createdAt !== undefined) {
                delete newItem.createdAt;
            }
            if (newItem.updatedAt !== undefined) {
                delete newItem.updatedAt;
            }
            if (newItem.id !== undefined) {
                delete newItem.id;
            }

            if (isEdit) {
                await put(Endpoints.news, modalData.id!, newItem); // Use non-null assertion `modalData.id!` if you are sure `id` will exist.
                setAllNews(allNews.map(news => news.id === modalData.id ? newItem : news));
            } else {
                await post(Endpoints.news, newItem);
                setAllNews((prevNews) => [...prevNews, newItem]);
            }

            setIsModalOpen(false);
            setModalData({
                id: '', // Reset to empty string
                title: {
                    az: '',
                    en: ''
                },
                coverImage: '',
                createdAt: Date.now(),
                updatedAt: Date.now().toString(),
            });
        } catch (error) {
            console.error('Error submitting modal data:', error);
        }
    };

    return (
        <>
            <Dialog open={isModalOpen} onOpenChange={() => setIsModalOpen(false)}>
                <DialogHeader></DialogHeader>
                <DialogContent>
                    <DialogTitle>{isEdit ? 'Dəyişdir' : 'Əlavə et'}</DialogTitle>
                    <form onSubmit={(e) => { e.preventDefault(); handleModalSubmit(); }}>
                        {/* Azerbaijani Title Input */}
                        <input
                            type="text"
                            placeholder="Başlıq (Azerbaijani)"
                            value={modalData.title.az}
                            onChange={(e) => setModalData({ ...modalData, title: { ...modalData.title, az: e.target.value } })}
                            className="w-full p-2 border border-gray-300 rounded-md mb-4"
                            required
                        />
                        {/* English Title Input */}
                        <input
                            type="text"
                            placeholder="Title (English)"
                            value={modalData.title.en}
                            onChange={(e) => setModalData({ ...modalData, title: { ...modalData.title, en: e.target.value } })}
                            className="w-full p-2 border border-gray-300 rounded-md mb-4"
                            required
                        />
                        {/* Cover Image Input */}
                        <input
                            type="url"
                            placeholder="Şəkil URL-i"
                            value={modalData.coverImage}
                            onChange={(e) => setModalData({ ...modalData, coverImage: e.target.value })}
                            className="w-full p-2 border border-gray-300 rounded-md mb-4"
                            required
                        />
                        <div className="mb-4">
                            <p>Yaradılma tarixi: {formatDate(modalData.createdAt ? modalData.createdAt : Date.now())}</p>
                        </div>
                        <button
                            type="submit"
                            className="bg-[#0D1F4F] text-white py-2 px-4 rounded-md hover:bg-[#0a1838] transition w-full"
                        >
                            Yadda saxla
                        </button>
                        <button
                            type="button"
                            onClick={() => setIsModalOpen(false)}
                            className="mt-4 text-center block w-full bg-gray-300 text-black py-2 px-4 rounded-md hover:bg-gray-400"
                        >
                            İmtina et
                        </button>
                    </form>
                </DialogContent>
            </Dialog>

            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold text-[#0D1F4F]">Xəbərlər</h3>
                <Button onClick={handleAddNews} className="bg-[#0D1F4F] my-4 text-white py-2 px-4 rounded-md hover:bg-[#0a1838] transition">
                    Xəbər əlavə et
                </Button>
                <div className="mb-4 flex gap-4">
                    <input
                        type="text"
                        className="p-2 border border-gray-300 rounded-md w-1/2"
                        placeholder="Xəbəri axtar"
                        value={searchNews}
                        onChange={(e) => setSearchNews(e.target.value)}
                    />
                </div>
                <div className="space-y-4">
                    {allNews.filter(news =>
                        news.title.az.toLowerCase().includes(searchNews.toLowerCase()) ||
                        news.title.en.toLowerCase().includes(searchNews.toLowerCase())
                    ).map((news) => (
                        <div key={news.id} className="p-4 border border-gray-300 rounded-lg shadow-md hover:bg-gray-50 transition">
                            <h4 className="font-semibold text-lg text-[#0D1F4F]">Azərbaycanca: {news.title.az}</h4>
                            <h4 className="font-semibold text-lg text-[#0D1F4F]">English: {news.title.en}</h4>
                            <img src={news.coverImage} alt={news.title[i18n.language as keyof typeof news.title]} className="w-24 h-24 object-cover rounded-md mt-2 mb-4" />
                            <div className="mt-2">
                                <button
                                    onClick={() => news.id && handleEditNews(news.id)}
                                    className="bg-[#0D1F4F] text-white py-1 px-3 rounded-md mr-2 hover:bg-[#0a1838] transition"
                                >
                                    Dəyişdir
                                </button>
                                <button
                                    onClick={() => news.id && handleDeleteNews(news.id)}
                                    className="bg-[#D32F2F] text-white py-1 px-3 rounded-md hover:bg-[#9A0000] transition"
                                >
                                    Sil
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default AdminNews;
