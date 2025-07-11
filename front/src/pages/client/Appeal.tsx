
const Appeal = () => {
  return (
    <div className="p-10 bg-white text-[#0D1F4F] space-y-6">
      {/* Ana Başlıq */}
      <h1 className="text-3xl font-bold  text-[#0D1F4F]">MÜRACİƏT</h1>

      {/* Alt Başlıq */}
      <h2 className="text-xl font-bold text-[#0D1F4F]">
        Riyaziyyat Tədqiqat Lab (MRL) Qoşulun
      </h2>

      {/* Açıqlama */}
      <div className="space-y-4 text-base leading-relaxed">
        <p>
          Riyaziyyat Tədqiqat Lab (MRL) Bakı Dövlət Universitetinin (BDU) nəzdində Tədqiqat, İnkişaf və İnnovasiya üzrə Mükəmməllik Mərkəzinin bir hissəsidir. 2024-cü ildə yaradılan institut qabaqcıl tədqiqat fəaliyyətlərində əməkdaşlıq etmək üçün dünyanın hər yerindən aparıcı riyaziyyatçıları birləşdirərək dinamik riyazi mühit yaratmağı hədəfləyir.
        </p>
        <p>
          MRL hal-hazırda riyaziyyatın bütün sahələrində və bütün karyera səviyyələrində 2025-ci ilin iyulundan və ya daha erkən fəaliyyətə başlayacaq komandasına qoşulmaq üçün riyaziyyatçılar axtarır. İnstitut heç bir məcburi tədris öhdəliyi olmadan yalnız tədqiqata diqqət yetirmək üçün unikal imkan təklif edir. Bununla belə, tədqiqatçılar BDU-nun Mexanika-Riyaziyyat fakültəsində dərs deyə və magistrantlara rəhbərlik edə bilərlər.
        </p>
      </div>

      {/* Vəzifələr */}
      <div>
        <h3 className="font-semibold text-[#0D1F4F]">Daimi və Müddətli Vəzifələr</h3>
        <p className="mt-2">
          İnstitut, Doktorant tədqiqatçılar, Assistent Tədqiqatçı, Dosent Tədqiqatçı, Tam Tədqiqatçı və ya Fəxri Tədqiqatçı səviyyələrində daimi və müddətli mövqelər üçün namizədlər axtarır. Namizədlər öz sahələrində əhəmiyyətli töhfələr və riyazi biliklərin inkişaf etdirilməsi öhdəliyi də daxil olmaqla, tədqiqatın mükəmməlliyini nümayiş etdirməlidirlər. Təklif olunan əmək haqqı ixtisas və təcrübə ilə mütənasibdir.
        </p>
      </div>

      {/* Bakı haqqında */}
      <div>
        <h3 className="font-semibold text-[#0D1F4F]">Bakıda Yaşamaq</h3>
        <p className="mt-2">
          Azərbaycanın paytaxtı Bakı Xəzər dənizinin mənzərəli sahilində yerləşən canlı və kosmopolit şəhərdir. Müasirlik və ənənənin qarışığı ilə tanınan Bakı zəngin mədəni irs, dünya səviyyəli yeməklər və Aralıq dənizinə bənzər xoş iqlim təklif edir.
        </p>
        <p className="mt-2">Əlavə məlumat üçün institutun saytına daxil olun.</p>
      </div>

      {/* Müraciət Prosesi */}
      <div>
        <h3 className="font-semibold text-[#0D1F4F]">Müraciət Prosesi</h3>
        <p className="mt-2">
          İşə qəbul komissiyası müraciətləri dərhal nəzərdən keçirməyə başlayacaq. Komissiya vakant yerlər dolana­dək aktiv olacaqdır.
        </p>
      </div>

      {/* Lazım olan sənədlər */}
      <div>
        <h3 className="font-semibold text-[#0D1F4F]">Tələb olunan müraciət materialları:</h3>
        <p className="mt-2">
          Müraciət etmək üçün aşağıdakı sənədləri <span className="font-semibold">mrl@bsu.edu.az</span> ünvanına təqdim edin:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Motivasiya məktubu</li>
          <li>CV</li>
          <li>Tədqiqat Bəyanatı</li>
          <li>Nəşr siyahısı</li>
          <li>
            (Doktorant tədqiqatçılar və Assistent Tədqiqatçılar üçün) Üç və ya daha çox tövsiyə məktubu (birbaşa tövsiyəçilər tərəfindən təqdim edilməlidir).
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Appeal;
