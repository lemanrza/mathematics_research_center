import React from 'react';

const Seminars: React.FC = () => {
  const seminars = [
    {
      id: 1,
      title: 'Tələbələr Üçün Seminarlar',
      color: 'bg-[#FEAFCB]'
    },
    {
      id: 2,
      title: 'Cəbr Seminarları',
      color: 'bg-[#B5E2F6]'
    },
    {
      id: 3,
      title: 'Riyaziyyat Seminarları',
      color: 'bg-[#FFF0BA]'
    },
    {
      id: 4,
      title: 'Ədədlər Nəzəriyyəsi Seminarları',
      color: 'bg-[#B4E5D6]'
    },
    {
      id: 5,
      title: 'Diskret Strukturlar Seminarları',
      color: 'bg-[#BFC6E4]'
    },
    {
      id: 6,
      title: 'Həndəsə/Topologiya seminarları',
      color: 'bg-[#48B4B3]'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold text-[#0D1F4F] mb-12 ">
        SEMİNARLAR
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {seminars.map((seminar) => (
          <div key={seminar.id} className="relative h-28 flex items-center p-4">
            <div className="w-full h-[120px] bg-[#F3F3F4] rounded-md flex items-center justify-center text-[#0D1F4F] font-sans text-md text-center px-4">
              {seminar.title}
            </div>

            <div
              className={`absolute -left-8 top-1/2 transform -translate-y-1/2 w-[120px] h-[120px] rounded-full border-20 border-white ${seminar.color} shadow-md`}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Seminars;
