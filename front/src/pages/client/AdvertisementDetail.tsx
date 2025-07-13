import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams to get the ID from the URL
import { getOne } from '@/services/commonRequest';
import { Endpoints } from '@/enums/endpoints';
import type { Advertisement } from '@/types/advertisementType';

const AdvertisementDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Get the ID from the URL params
  const [advertisement, setAdvertisement] = useState<Advertisement | null>(null);
  console.log(id)
  useEffect(() => {
    if (id) {
      getOne<Advertisement>(Endpoints.advertisements, id).then((advertisement) => {
        setAdvertisement(advertisement);
      }).catch((error) => {
        console.error("Error fetching advertisement:", error);
      });
    }
  }, [id]);


  if (!advertisement) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h2 className="text-3xl font-semibold text-gray-800">{advertisement.title}</h2>
        <img src={advertisement.coverImage} alt={advertisement.title} className="w-70 h-70 object-cover mt-4 mb-6" />
        <div className="text-right mt-4">
          <div className="text-xl font-semibold text-[#0D1F4F]">{advertisement.createdAt}</div>
        </div>
      </div>
    </div>
  );
};

export default AdvertisementDetail;
