import type { News } from '@/types/newsType';
import React from 'react';
import { Link } from 'react-router-dom';


const SeminarCard: React.FC<News> = ({
    title,
    coverImage,
    createdAt,
    id
}) => {
    const formatDate = (timestamp: number) => {
        const date = new Date(timestamp);
        const day = date.getDate();
        const month = date.toLocaleDateString('en-US', { month: 'short' }).toUpperCase();
        const time = date.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false
        });
        return { day, month, time };
    };

    const { day, month, time } = formatDate(createdAt ? createdAt : Date.now());

    return (
        <Link to={`/xeberler/${id}`} className="group max-w-md">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                <div className="bg-sky-200 p-4 text-center relative">
                    <div className="w-full h-32 mb-4 rounded-lg overflow-hidden">
                        <img
                            src={coverImage}
                            alt="Seminar"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                </div>
                <div className="p-4 flex">
                    <div className="flex-shrink-0 text-center mr-4">
                        <div className="text-3xl font-bold text-[#0D1F4F] leading-none">
                            {day}
                        </div>
                        <div className="text-sm text-gray-500 uppercase font-medium">
                            {month}
                        </div>
                        <div className="text-xs text-gray-400 mt-1">
                            {time}
                        </div>
                    </div>
                    <div className="flex-1">
                        <p className="text-sm text-gray-600 leading-relaxed line-clamp-3 tracking-wide">
                            {title}
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default SeminarCard;
