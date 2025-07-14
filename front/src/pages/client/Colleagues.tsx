import React from 'react';
import TeamMemberCard from '../../components/client/TeamMemberCard';

const Team: React.FC = () => {
  const teamMembers = [
    {
      name: 'Olcay Coşkun',
      role: 'Rehber',
      email: 'olcay.coshkun@bsu.edu.az',
      researchInterests:
        'Sonlu qrupların təsvir nəzəriyyəsi, Mackey funksiyaları, (lifli) biset funksiyaları, kateqoriya cəbrləri, "Green Biset" funksiyaları, blok nəzəriyyəsi, birləşmə sistemləri, homoloji cəbr',
      imageUrl: 'https://bdu.info.az/storage/52193/conversions/IMG_0294-thumb.jpg',
      link: "haqqimizda/emekdaslar/olcay-coskun",

    },
    {
      name: 'Türker Bıyıkoğlu',
      role: 'Tədqiqatçı',
      email: 'tbiiyikoglu@gmail.com',
      researchInterests: 'Qrafik nəzəriyyəsi və onun tətbiqləri',
      imageUrl: 'https://bdu.info.az/storage/52195/conversions/resim-thumb.jpg',
      link: "haqqimizda/emekdaslar/turker-biyikoglu",
    },
    {
      name: 'Ertan Elma',
      role: 'Tədqiqatçı',
      email: 'ertan.elma@bsu.edu.az',
      researchInterests:
        'Analitik və Elementar ədədlər nəzəriyyəsi, L-funksiyaları, Ələk üsulları və onların tətbiqi, Eksponensial cəbrlər və dairə metodu, Ədədlər nəzəriyyəsində ehtimal nəticələri, funksiyan sahələrində ədədlər nəzəriyyəsi',
      imageUrl: 'https://bdu.info.az/storage/52194/conversions/ertanelma1-thumb.jpg',
      link: "haqqimizda/emekdaslar/ertan-elma",

    },
  ];

  return (
    <div className="container mx-auto py-6">
      <h2 className="text-3xl font-bold text-gray-800 mt-6 mb-4 ml-10">Əməkdaşlar</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-10 mt-12">
        {teamMembers.map((member, index) => (
          <TeamMemberCard key={index} {...member} />
        ))}
      </div>
    </div>
  );
};

export default Team;
