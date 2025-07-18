import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import type { Advertisement } from '@/types/advertisementType';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { post, put, remove } from '@/services/commonRequest';
import { Endpoints } from '@/enums/endpoints';
import { formatDate } from "../../utils/formatDate"
import { useTranslation } from 'react-i18next';

interface AdminAnnouncementsProps {
    allAnnouncements: Advertisement[];
    setAllAnnouncements: React.Dispatch<React.SetStateAction<Advertisement[]>>;
    searchAds: string;
    setSearchAds: React.Dispatch<React.SetStateAction<string>>;
}

const AdminAnnouncements: React.FC<AdminAnnouncementsProps> = ({ allAnnouncements, setAllAnnouncements, searchAds, setSearchAds }) => {
    const { i18n } = useTranslation();

    const [modalData, setModalData] = useState<Advertisement>({
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

    const handleAddAdvertisement = () => {
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

    const handleEditAdvertisement = (id: string) => {
        const ad = allAnnouncements.find((item) => item.id === id);
        if (ad) {
            setModalData(ad);
            setIsEdit(true);
            setIsModalOpen(true);
        }
    };

    const handleDeleteAdvertisement = async (id: string) => {
        try {
            await remove<Advertisement>(Endpoints.advertisements, id);
            setAllAnnouncements(allAnnouncements.filter(ad => ad.id !== id));
        } catch (error) {
            console.error('Error deleting advertisement:', error);
        }
    };

    const handleModalSubmit = async () => {
        try {
            const newItem = { ...modalData };
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
                await put(Endpoints.advertisements, modalData.id!, newItem);
                setAllAnnouncements(allAnnouncements.map(ad => ad.id === modalData.id ? newItem : ad));
            } else {
                await post(Endpoints.advertisements, newItem);
                setAllAnnouncements((prevAds) => [...prevAds, newItem]);
            }

            setIsModalOpen(false);
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
                <h3 className="text-2xl font-semibold text-[#0D1F4F]">Elanlar</h3>
                <Button onClick={handleAddAdvertisement} className="bg-[#0D1F4F] my-4 text-white py-2 px-4 rounded-md hover:bg-[#0a1838] transition">
                    Elan əlavə et
                </Button>
                <div className="mb-4 flex gap-4">
                    <input
                        type="text"
                        className="p-2 border border-gray-300 rounded-md w-1/2"
                        placeholder="Elanı axtar"
                        value={searchAds}
                        onChange={(e) => setSearchAds(e.target.value)}
                    />
                </div>
                <div className="space-y-4">
                    {allAnnouncements.filter(ad => ad.title.az.toLowerCase().includes(searchAds.toLowerCase()) || ad.title.en.toLowerCase().includes(searchAds.toLowerCase())).map((ad) => (
                        <div key={ad.id} className="p-4 border border-gray-300 rounded-lg shadow-md hover:bg-gray-50 transition">
                            <h4 className="font-semibold text-lg text-[#0D1F4F]">Azərbaycanca: {ad.title.az}</h4>
                            <h4 className="font-semibold text-lg text-[#0D1F4F]">English: {ad.title.en}</h4>

                            <img src={ad.coverImage} alt={ad.title[i18n.language as keyof typeof ad.title]} className="w-24 h-24 object-cover rounded-md mt-2 mb-4" />
                            <div className="mt-2">
                                <button
                                    onClick={() => ad.id && handleEditAdvertisement(ad.id)}
                                    className="bg-[#0D1F4F] text-white py-1 px-3 rounded-md mr-2 hover:bg-[#0a1838] transition"
                                >
                                    Dəyişdir
                                </button>
                                <button
                                    onClick={() => ad.id && handleDeleteAdvertisement(ad.id)}
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

export default AdminAnnouncements;
