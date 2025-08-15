import React from 'react';
import { useTranslation } from 'react-i18next';
import TeamMemberCard from '../../components/client/TeamMemberCard';

const Team: React.FC = () => {
  const { t } = useTranslation();

  const teamMembers = [
    {
      name: 'Olcay Coşkun',
      role: t('Rehber'),
      email: 'olcay.coshkun@asoiu.edu.az',
      researchInterests:
        t('Sonlu qrupların təsvir nəzəriyyəsi, Mackey funksiyaları, (lifli) biset funksiyaları, kateqoriya cəbrləri, "Green Biset" funksiyaları, blok nəzəriyyəsi, birləşmə sistemləri, homoloji cəbr'),
      imageUrl: 'https://bdu.info.az/storage/52193/conversions/IMG_0294-thumb.jpg',
      link: "haqqimizda/emekdaslar/olcay-coskun",
    },
    {
      name: 'Türker Bıyıkoğlu',
      role: t('Tədqiqatçı'),
      email: 'tbiiyikoglu@gmail.com',
      researchInterests: t('Qrafik nəzəriyyəsi və onun tətbiqləri'),
      imageUrl: 'https://bdu.info.az/storage/52195/conversions/resim-thumb.jpg',
      link: "haqqimizda/emekdaslar/turker-biyikoglu",
    },
    {
      name: 'Ertan Elma',
      role: t('Tədqiqatçı'),
      email: 'ertan.elma@asoiu.edu.az',
      researchInterests:
        t('Analitik və Elementar ədədlər nəzəriyyəsi, L-funksiyaları, Ələk üsulları və onların tətbiqi, Eksponensial cəbrlər və dairə metodu, Ədədlər nəzəriyyəsində ehtimal nəticələri, funksiyan sahələrində ədədlər nəzəriyyəsi'),
      imageUrl: 'https://bdu.info.az/storage/52194/conversions/ertanelma1-thumb.jpg',
      link: "haqqimizda/emekdaslar/ertan-elma",
    },
  ];

  return (
    <div className="container mx-auto py-6">
      <h2 className="text-3xl font-bold text-gray-800 mt-6 mb-4 ml-10">
        {t('Əməkdaşlar')}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-10 mt-12">
        {teamMembers.map((member, index) => (
          <TeamMemberCard key={index} {...member} />
        ))}
      </div>
    </div>
  );
};

export default Team;
