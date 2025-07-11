const CenterMission = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-gray-50 text-gray-800 py-12 px-6 sm:px-8">
      <div className="max-w-5xl mx-auto text-center animate__animated animate__fadeIn animate__delay-1s">
        <h2 className="text-4xl font-bold text-[#0D1F4F] mb-6 transition-transform transform hover:scale-105">
          Laboratoriyanın Missiyası
        </h2>

        <p className="text-lg text-gray-700 mb-6 leading-relaxed transition-opacity opacity-90 hover:opacity-100 animate__animated animate__fadeIn animate__delay-2s">
          2024-cü ildə təsis edilmiş Riyaziyyat Tədqiqat Lab (MRL), fundamental və multidissiplinar riyaziyyat tədqiqatlarının inkişafına həsr olunmuş aparıcı tədqiqat institutudur. Missiyamız, riyaziyyatı müxtəlif sahələrlə əlaqələndirərək yeniliyi təşviq etmək, tədqiqatçılar arasında riyazi bacarıqları inkişaf etdirmək və riyaziyyat elmlərində qabaqcıl tədqiqatların inkişafına dəstək olmaqdır.
        </p>

        <div className="space-y-6 mb-6">
          <p className="text-lg text-gray-700 leading-relaxed animate__animated animate__fadeIn animate__delay-3s">
            BIMS aşağıdakı məqsədləri həyata keçirir:
          </p>

          <ul className="list-disc pl-6 text-lg text-gray-700 leading-relaxed animate__animated animate__fadeIn animate__delay-4s">
            <li>Riyaziyyatın nəzəri və tətbiqi sahələrində mükəmməlliyi təşviq etmək.</li>
            <li>Riyaziyyatın digər elmi, texnoloji və mühəndislik fənləri ilə birləşdirən multidissiplinar əməkdaşlığa dəstək olmaq.</li>
            <li>Azərbaycanın elmi icmasının tədqiqat potensialını gücləndirmək və qlobal tədqiqat şəbəkəsi ilə güclü əlaqələr qurmaq.</li>
            <li>Tədqiqatçıların peşəkar inkişafına dəstək olmaq və əməkdaşlıq təşəbbüsləri, seminarlar və akademik proqramlar vasitəsilə bilik mübadiləsini asanlaşdırmaq.</li>
          </ul>
        </div>

        <p className="text-lg text-gray-700 leading-relaxed animate__animated animate__fadeIn animate__delay-5s">
          İnstitut, Azərbaycan Dövlət Neft və Sənaye Universitetinin (ADNSU) Tədqiqat, İnkişaf və İnnovasiya üzrə Mükəmməllik Mərkəzinin (TIIMM) nəzdində yerləşən Rəqəmsal Tədqiqat Laboratoriyasının (DRL) ayrılmaz bir hissəsidir və universitetin tədqiqatlarının inkişafı, o cümlədən beynəlxalq elmi əməkdaşlığı təşviq etmək öhdəliyində mühüm rol oynayır.
        </p>
      </div>
    </div>
  );
};

export default CenterMission;
