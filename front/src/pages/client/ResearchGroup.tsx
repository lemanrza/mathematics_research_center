const groups = [
  {
    title: 'Cəbr Tədqiqat Qrupu',
    leader: 'Olcay Coşkun',
    role: 'Qrup rəhbəri, Aparıcı Tədqiqatçı',
    description:
      'Bu qrup cəbrin həm əsas, həm də qabaqcıl sahələrini araşdırır. Qrup üzvləri sonlu qrupların təsvirlər nəzəriyyəsi, kateqoriya nəzəriyyəsi, qraf nəzəriyyəsi və onların tətbiqləri ilə bağlı tədqiqatlarla məşğul olurlar.',
    leaderInfo:
      'Olcay Coşkun qrupa rəhbərlik edir və cəbrin müxtəlif sahələrində ixtisaslaşmışdır. Onun tədqiqat maraqları sonlu qrupların təsvirlər nəzəriyyəsi, Mackey funktorları, (lifli) biset funktorları, kateqoriya cəbrləri, “Green Biset” funktorları, blok nəzəriyyəsi, fuyzon sistemləri, homoloji cəbrdir.',
  },
  {
    title: 'Qraflar Nəzəriyyəsi və Tətbiqləri Tədqiqat Qrupu',
    leader: 'Türker Bıyıkoğlu',
    role: 'Aparıcı Tədqiqatçı',
    description:
      'Türker Bıyıkoğlu qraf nəzəriyyəsi və onun tətbiqləri sahəsinə töhfə verir.',
  },
  {
    title: 'Ədədlər Nəzəriyyəsi Tədqiqat Qrupu',
    leader: 'Ertan Elma',
    role: 'Gənc Tədqiqatçı',
    description:
      'Bu qrup riyazi nəzəriyyə sahəsində tədqiqatlar aparır.',
    leaderInfo:
      'Ertan Elma gənc tədqiqatçıdır, o, analitik və elementar riyazi nəzəriyyə, L-funksiyaları, süzgəc metodları və onların tətbiqləri, eksponensial cəm və Daira metodu, riyazi nəzəriyyədə probabilistik nəticələr, funksiyalar sahəsində riyazi nəzəriyyə mövzusunda araşdırmalar aparır.',
  },
];

const ResearchGroup = () => {
  return (
    <section className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-[#0D1F4F] font-sans">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0D1F4F] mb-6">
        TƏDQİQAT QRUPU
      </h2>

      <p className="text-sm sm:text-base text-[#3b4a7f] mb-8 leading-relaxed">
        <strong className="block mb-1 text-[#0D1F4F] text-base sm:text-lg font-medium">
          Tədqiqat Qrupları və Onların Üzvləri
        </strong>
        BIMS-dəki tədqiqat qrupları aşağıda təqdim edilmişdir. Üzvlər haqqında əlavə məlumat üçün zəhmət olmasa, onların şəxsi səhifələrinə baxın.
      </p>

      <div className="space-y-10">
        {groups.map((group, index) => (
          <div key={index} className="border-t border-[#0D1F4F]/20 pt-6">
            <h3 className="text-lg sm:text-xl font-semibold text-[#0D1F4F] mb-2">
              {group.title}
            </h3>

            <p className="text-sm sm:text-base text-[#3b4a7f] mb-2 leading-relaxed">
              {group.description}
            </p>

            <ul className="list-disc list-inside text-sm sm:text-base mb-2">
              <li className="font-semibold text-[#0D1F4F]">
                {group.leader}{' '}
                <span className="font-normal text-[#3b4a7f]">({group.role})</span>
              </li>
            </ul>

            {group.leaderInfo && (
              <p className="text-sm sm:text-base text-[#3b4a7f] leading-relaxed">
                {group.leaderInfo}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ResearchGroup;
