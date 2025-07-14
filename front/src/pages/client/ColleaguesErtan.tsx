import React from "react";

interface SectionProps {
  title: string;
  items: string[];
}

const ErtanElmaProfile: React.FC = () => {
  return (
    <div className="p-6 md:p-12 max-w-8xl mx-auto text-sm leading-relaxed text-gray-800">
      <h1 className="text-3xl font-bold text-[#0D1F4F] mb-2">ERTAN ELMA</h1>
      <p className="mb-4 text-[15px] text-gray-700">
        Təhsil
      </p>
      <p className="mb-6 text-gray-700">
        Doktorantura - Waterloo Universiteti, Waterloo, Kanada<br />
        Fəlsəfə doktoru üzrə tezisi: Multiplikativ və Additiv ədədlər nəzəriyyəsində bəzi məsələlər<br />
        Elmi rəhbərlər: Yu-Ru Liu və Wentang Kuo, 2015–2020
      </p>

      <Section
        title="Magistratura"
        items={[
          "Boğaziçi Universiteti, İstanbul, Türkiyə",
          "Riyaziyyat, Elmi rəhbər: Cem Yalçın Yıldırım, 2012–2015",
          "Magistratura üzrə tezis: Funksional tənlik faktorlarının orta qiymətləri"
        ]}
      />

      <Section
        title="Bakalavr"
        items={[
          "Boğaziçi Universiteti, İstanbul, Türkiyə",
          "Riyaziyyat, 2007-2012"
        ]}
      />

      <Section
        title="Elmi Fəaliyyət"
        items={[
          "Lethbridge Universiteti, Lethbridge Kanada, Doktoranturadan Sonra Təqaüdçü, saathesabı müəllim, 2022–2024",
          "Waterloo Universiteti, Kanada, Tədris Asisstenti, saathesabı müəllim, 2015–2020",
          "Boğaziçi Universiteti, İstanbul, Türkiyə, Tədris Asisstenti, 2012-2015"
        ]}
      />

      <Section
        title="Mükafatlar və Qrantlar"
        items={[
          "Lethbridge Number Theory and Combinatorics Seminars Grant, $4500, PIMS, 2023-2024",
          "Postdoktorantura Təqaüdçü Qrantı, $1000, Lethbridge Universiteti, 2023",
          "Beynəlxalq Məzun Tələbə Dəstəyi, ildə $30000, Waterloo Universiteti, 2015-2020",
          "Ən Yaxşı 0,5% Bakalavr Elm Tələbələri üçün Təqaüd, TÜBİTAK, 2007-2012",
          "Magistratura Tələbələri üçün Təqaüd, TÜBİTAK, 2012-2014",
          "Valedictorian Prize, Sakıp Sabancı Anadolu Liseyi, 2007"
        ]}
      />

      <Section
        title="Tədqiqat İstiqamətləri"
        items={[
          "Analitik və Elementar ədədlər nəzəriyyəsi",
          "L-funksiyaları",
          "Ələk üsulları və onların tətbiqi",
          "Eksponensial Cəmlər və Dairə Metodu",
          "Ədədlər nəzəriyyəsində ehtimal nəticələri",
          "Funksiya sahələrində ədədlər nəzəriyyəsi"
        ]}
      />

      <Section
        title="Nəşrlər"
        items={[
          "Distribution of the number of prime factors with a given multiplicity (Greg Martin ilə birlikdə), Canad. Math. Bull., 67 (2024), no. 4, 1107–1122.",
          "A discrete mean value of the Riemann zeta function (Kübra Benli and Nathan Ng ilə birlikdə), Mathematika, 70 (2024), no. 4, Paper No. e12281, 47 pp.",
          "A Dirichlet series related to the error term in the Prime Number Theorem, Int. J. Number Theory, 20 (2024), no. 3, 715–725.",
          "On the number of irreducible factors with a given multiplicity in function fields (Sourabhashis Das, Wentang Kuo and Yu-Ru Liu ilə birlikdə), Finite Fields Appl., 92 (2023), Paper No. 102281, 22 pp.",
          "Number of prime factors with a given multiplicity (Yu-Ru Liu ilə birlikdə), Canad. Math. Bull. 65 (2022), no. 1, 253-269.",
          "On discrete mean values of Dirichlet L-functions, Czechoslovak Math. J. 71 (146) (2021), no. 4, 1035–1048.",
          "On a problem related to discrete mean values of Dirichlet L-functions, J. Number Theory 217 (2020), 36-43.",
          "Mean values of the functional equation factors at the zeros of derivatives of the Riemann zeta function and Dirichlet L-functions (Kübra Benli və Cem Yalçın Yıldırım ilə birlikdə), Analytic Number Theory, Modular Forms and q-Hypergeometric Series, Springer Proc. Math. Stat., vol. 221, Springer, Cham, (2017), 59-67."
        ]}
      />

      <Section
        title="Davam edən Araşdırmalar"
        items={[
          "On the fourth moment of the derivative of the Riemann zeta function (joint with Kübra Benli, Fatma Çiçek, Alia Hamieh, Nathan Ng), ongoing, 70 pp.",
          "On the second Hardy-Littlewood conjecture (joint with Bittu, Nicolo Fellini, Akshaa Vatwani, Do Nhat Tan Vo), ongoing, 10 pp."
        ]}
      />

      <Section
        title="Təşkilati fəaliyyətlər"
        items={[
          "NTC seminarlarının həmtəşkilatçısı - Lethbridge Universiteti, 2023-2024",
          "PIMS tədqiqat təqaüdü üçün müraciət etdi və qazandı, $4500",
          "Xarici qonaqların dəvət edilməsi və ev sahibliyi edilməsi",
          "Səsyazmalar: mathtube.org",
          "Veb sayt: Lethbridge-də NTC seminarları"
        ]}
      />

      <Section
        title="Açıq Saylar Nəzəriyyəsində İnklüziv Yollar yay məktəbində tədqiqat layihəsinin həmrəhbəri"
        items={[
          "British Columbia Universiteti Okanaqan Kampusu, Kelowna, İyul, 2023",
          "Layihənin adı: İkinci Hardy-Littlewood ehtimalı",
          "Layihə Rəhbəri: Akshaa Vatwani"
        ]}
      />

      <Section
        title="Elmi Vəzifələr"
        items={[
          "Canadian Journal of Mathematics jurnalı rəyçi, 2022",
          "AMS Mathematical Reviews üçün rəyçi, 2021"
        ]}
      />

      <Section
        title="Tədris təcrübəsi"
        items={[
          "Instructor and Tutorial Coordinator if available, University of Lethbridge, MATH 1410, Elementary Linear Algebra, Spring 2024",
          "MATH 2570, Calculus III, Fall 2023",
          "MATH 2560, Calculus II, Spring 2023",
          "MATH 1565, Accelerated Calculus I, Fall 2022"
        ]}
      />

      <Section
        title="Konfranslar və Seminarlarda İştirak"
        items={[
          "Comparative Prime Number Theory Symposium, Vancouver (attended online), 2024",
          "16th Meeting of the Canadian Number Theory Association, Toronto (attended online), 2024",
          "Canadian Mathematical Society Winter Meeting, Montreal, 2023",
          "Inclusive Paths in Explicit Number Theory Summer School, University of British Columbia Okanagan Campus, Kelowna, 2023",
          "The 20th Annual Alberta Mathematics Dialogue, Mount Royal University, Calgary, 2023",
          "Alberta Number Theory Days XIV, Banff International Research Station, Banff, 2023",
          "PIMS CRG L-functions in Analytic Number Theory, Launch Event, Banff International Research Station, Banff, 2022",
          "PIMS CRG Workshop on Moments of L-functions, University of Northern British Columbia, Prince George (attended online), 2022",
          "Virtual CMS Winter Meeting, Online, 2020",
          "AMS Fall Eastern Sectional Meetings, Online, 2020",
          "CMS Winter Meeting, Toronto, 2019",
          "Journées Arithmétiques XXXI, İstanbul University, İstanbul, 2019",
          "15th Meeting of the Canadian Number Theory Association, Québec City, 2018",
          "CMS Winter Meeting, Waterloo, 2017",
          "Efficient Congruencing, The Fields Institute, Toronto, 2017",
          "Gainesville International Number Theory Conference, Gainesville, 2016",
          "14th Meeting of the Canadian Number Theory Association, Calgary, 2016",
          "CMS Winter Meeting, Niagara Falls, 2016",
          "CMS Summer Meeting, Edmonton, 2016",
          "CMS Winter Meeting, Montréal, 2015",
          "International Conference on Algebra and Number Theory, Samsun, 2014"
        ]}
      />

      <Section
        title="Dəvət Edilmiş Nitqlər"
        items={[
          "Number of prime factors with a given multiplicity, Canadian Mathematical Society Winter Meeting, Montreal, 2023",
          "A Dirichlet series related to the error term in the Prime Number Theorem, The 20th Annual Alberta Mathematics Dialogue, Mount Royal University, 2023",
          "A discrete mean value of the Riemann zeta function and its derivatives, Alberta Number Theory Days XIV, Banff International Research Station, 2023",
          "Some identities concerning Dirichlet L-functions, Number Theory and Combinatorics Seminars, University of Lethbridge, 2022",
          "Discrete mean values of Dirichlet L-functions, Number Theory Seminars, Queen’s University, 2020",
          "Discrete mean values of Dirichlet L-functions, Number Theory Seminars, University of Waterloo, 2019",
          "Pólya-Vinogradov inequality, Pure Mathematics Student Colloquium, University of Waterloo, 2018"
        ]}
      />

      <Section
        title="İştirakçı Nitqləri"
        items={[
          "Discrete mean values of Dirichlet L-functions, Journées Arithmétiques XXXI, Istanbul University, 2019",
          "Perron’s formula, Joint Student Colloquium, University of Waterloo, 2017",
          "On a sum concerning the zeros of the k-th derivative of Dirichlet L-functions, International Conference on Algebra and Number Theory, Samsun, 2014"
        ]}
      />

      <Section
        title="Dillər"
        items={[
          "Türk, yerli",
          "İngilis dili, səlis",
          "Fransız dili, orta",
          "Alman dili, başlanğıc"
        ]}
      />

      <Section
        title="Bədii maraqlar"
        items={[
          "Musiqi istehsalı",
          "Mahnı yazısı və bəstəkarlıq",
          "3D animasiyalar və vizual effektlər",
          "Film çəkmək"
        ]}
      />
    </div>
  );
};

const Section: React.FC<SectionProps> = ({ title, items }) => (
  <div className="mb-6">
    <h2 className="text-md font-semibold text-[#0D1F4F] border-b border-purple-300 pb-1 mb-2">
      {title}
    </h2>
    <ul className="list-disc list-inside text-gray-700 space-y-1">
      {items.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
    </ul>
  </div>
);

export default ErtanElmaProfile;
