import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { t } from 'i18next';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        {/* Building Illustration */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            {/* Main Building */}
            <div className="bg-[#2C5F7C] rounded-lg p-6 shadow-lg">
              {/* Building Top with "BDU" text */}
              <div className="bg-[#1E4A5F] rounded-t-lg px-4 py-2 mb-4">
                <div className="text-white font-bold text-lg tracking-wider">ADNSU</div>
                <div className="flex justify-center space-x-1 mt-1">
                  {Array.from({ length: 15 }).map((_, i) => (
                    <div key={i} className="w-1 h-1 bg-white rounded-full"></div>
                  ))}
                </div>
              </div>
              
              {/* Building Floors */}
              <div className="space-y-2">
                {/* Floor 1 */}
                <div className="grid grid-cols-12 gap-1">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <div key={i} className="bg-[#4A7A9A] h-3 rounded-sm border border-[#5A8AAA]">
                      <div className="bg-[#6A9ABA] h-1 rounded-sm mt-1"></div>
                    </div>
                  ))}
                </div>
                
                {/* Floor 2 */}
                <div className="grid grid-cols-12 gap-1">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <div key={i} className="bg-[#4A7A9A] h-3 rounded-sm border border-[#5A8AAA]">
                      <div className="bg-[#6A9ABA] h-1 rounded-sm mt-1"></div>
                    </div>
                  ))}
                </div>
                
                {/* Floor 3 */}
                <div className="grid grid-cols-12 gap-1">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <div key={i} className="bg-[#4A7A9A] h-3 rounded-sm border border-[#5A8AAA]">
                      <div className="bg-[#6A9ABA] h-1 rounded-sm mt-1"></div>
                    </div>
                  ))}
                </div>
                
                {/* Floor 4 */}
                <div className="grid grid-cols-12 gap-1">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <div key={i} className="bg-[#4A7A9A] h-3 rounded-sm border border-[#5A8AAA]">
                      <div className="bg-[#6A9ABA] h-1 rounded-sm mt-1"></div>
                    </div>
                  ))}
                </div>
                
                {/* Ground Floor with Entrance */}
                <div className="grid grid-cols-12 gap-1">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div key={i} className="bg-[#4A7A9A] h-4 rounded-sm border border-[#5A8AAA]">
                      <div className="bg-[#6A9ABA] h-1 rounded-sm mt-1"></div>
                    </div>
                  ))}
                  
                  {/* Entrance Doors */}
                  <div className="col-span-4 bg-[#3A6A8A] h-4 rounded-sm border-2 border-[#2A5A7A] flex items-center justify-center">
                    <div className="flex space-x-1">
                      <div className="w-3 h-3 bg-[#5A8AAA] rounded border border-[#4A7A9A]"></div>
                      <div className="w-3 h-3 bg-[#5A8AAA] rounded border border-[#4A7A9A]"></div>
                      <div className="w-3 h-3 bg-[#5A8AAA] rounded border border-[#4A7A9A]"></div>
                    </div>
                  </div>
                  
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div key={i + 8} className="bg-[#4A7A9A] h-4 rounded-sm border border-[#5A8AAA]">
                      <div className="bg-[#6A9ABA] h-1 rounded-sm mt-1"></div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Building Base */}
              <div className="mt-2 bg-[#1E4A5F] h-2 rounded-b-lg"></div>
            </div>
            
            {/* Ground/Shadow */}
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-300 rounded-full opacity-50"></div>
          </div>
        </div>

        {/* Error Message */}
        <div className="space-y-4">
          <h1 className="text-2xl font-semibold text-gray-700 mb-2">
            {t('səhifə_tapılmadı')}
          </h1>
          
          <p className="text-gray-600 mb-2">
            {t('axtardığınız_səhifə_tapılmadı')}
          </p>
          
          <p className="text-gray-600 mb-8">
            {t('ana_səhifəyə_qayıda_bilə_bilirsiniz')}
          </p>
          
          {/* Back to Home Button */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 font-medium"
          >
            <ArrowLeft size={18} />
            {t('ana_səhifəyə_qayıt')}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
