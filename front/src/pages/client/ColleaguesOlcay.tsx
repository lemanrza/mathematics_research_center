import { t } from "i18next";
import React from "react";

interface SectionProps {
  title: string;
  items: string[];
}

const OlcayCoskunProfile: React.FC = () => {
  return (
    <div className="p-6 md:p-12 max-w-8xl mx-auto text-sm leading-relaxed text-gray-800">
      <h1 className="text-3xl font-bold text-[#0D1F4F] mb-2">OLCAY COŞKUN</h1>
      <p className="mb-4 text-[15px] text-gray-700">
        {t("DRL-in direktoru, Cəbr Tədqiqat Qrupu - Baş Tədqiqatçı")}
      </p>
      <p className="mb-6 text-gray-700">
        Tədqiqat maraqlarıma <strong>sonlu qrupların təsvir nəzəriyyəsi</strong>, Mackey funktorları, (lifli) biset funktorları, kateqoriya cəbrləri, "Green Biset" funktorları, blok nəzəriyyəsi, birləşmə sistemləri, homoloji cəbr daxildir.
      </p>

      <Section
        title="İnzibati Vəzifələr"
        items={[
          "MRL-TİİMM, Bakı Dövlət Universiteti - Rəhbər (2024 – hazırda)",
          "Boğaziçi Universiteti Riyaziyyat Fakültəsi – Bölmə rəhbəri (15 iyul 2022 - 15 iyul 2024)",
          "Türk Riyaziyyat Cəmiyyəti (TMD) - vitse-prezident (2021 - 2024)",
          "Matematik Dünyası – Baş redaktor (2021 - 2024)",
          "İstanbul Riyaziyyat Elmləri Mərkəzi (IMBM) – Həmsədr (2019 - 2022)",
          "Feza Gürsey Riyaziyyat və Fizika Mərkəzi - Sədr müavini (2015 - 2018)"
        ]}
      />

      <Section
        title="Mükafatlar"
        items={[
          "TGC - 47-ci Sedat Simavi Elm Hörmət Mükafatı - 2023",
          "TÜBİTAK 2219 - Xaricdə Təhsil üçün Tədqiqat Təqaüdü, 2019",
          "Fulbrayt Fondu - Akademik Tədqiqat Təqaüdü, 2018-2019",
          "Bilim Akademisi - BAGEP, 2017",
          "Türk Matematik Vakfı - Masatoshi Gündüz İkeda Tədqiqat Mükafatı, 2014",
          "Bilkent Universiteti Riyaziyyat Fakültəsi - Alişbah Təqaüdü, 2005"
        ]}
      />

      <Section
        title="Maliyyələşdirilən Tədqiqat Layihələri"
        items={[
          "TÜBİTAK Tədqiqat Qrantı - (1001-119F422) - (2020 - 2023) - Baş Tədqiqatçı - Ruslan Müslümov (Doktorant), Doğa Ulaş Budak (Magistr), Mustafa Akdağ (Magistr), İbrahim Aslan (Magistr), Mehmet Arslan ( Post-doktorant) və Cihan Bahran (Post-doktorant) tam dəstəklənirdilər.",
          "TÜBİTAK Tədqiqat Qrantı (1002-117F291), 2018–2019 - Baş Tədqiqatçı",
          "Boğaziçi Universiteti Tədqiqat Qrantı - 11144 - (2015 - 2017), Baş Tədqiqatçı",
          "TÜBİTAK Tədqiqat Qrantı - (1001-115F156)} - (2015 - 2018), Tədqiqatçı",
          "TÜBİTAK Tədqiqat Qrantı -(1001-113F240) - (2014 - 2017) - Baş Tədqiqatçı - Mehmet Arslan (Doktorant), Deniz Yılmaz (Magistrant), İrmak Balçık (Magistrant), Ruslan Müslümov (Magistrant) tam dəstəklənib.",
          "Boğaziçi Universiteti Tədqiqat Qrantı - 7623 - (2013 - 2015) - Baş Tədqiqatçı",
          "TÜBİTAK Karyera Tədqiqat Qrantı - (1001-109T661) - (2010 - 2013) - Baş Tədqiqatçı - Zehra Bilgin (Magistrant) tam dəstəkləndi.",
          "Boğaziçi Universiteti Tədqiqat Qrantı - 6029 - (2011 - 2013) - Tədqiqatçı"
        ]}
      />

      <Section
        title="Nəşrlər"
        items={[
          "Simple functors over the Green biset functor of section Burnside rings, (Ruslan Müslümovla birgə), Communications in Algebra 52 2 (2024), 1-27.",
          "The fibered Burnside group of a fusion system, (Mert Sevinişlə birgə), International Journal of Algebra and Computation 31 (2021), 453-470.",
          "The functor of complex characters of finite groups, (Mehmet Arslanla birgə), Journal of Algebra 562 (2020), 115-147.",
          "Obstructions for gluing biset functors, (Ergün Yalçınla birgə), Journal of Algebra 532 (2019), 268-310.",
          "Fibered $p$-biset functor structure of fibered Burnside rings, (Deniz Yılmazla birgə), Algebras and Representation Theory 22 (2019), 21-41.",
          "Fibered biset functors, (Robert Boltje ilə birgə), Advances in Mathematics 339 (2018), 540-598.",
          "The Dade group of Mackey functors for p-groups, Journal of Algebra 470 (2017), 172-196.",
          "Inducing native Mackey functors to biset functors, Journal of Pure and Applied Algebra 219 (2015), 2359-2380.",
          "Gluing Borel-Smith functions and the group of endo-trivial modules, Bulletin of the London Mathematical Society 43 (2011), 912-926.",
          "Projective resolutions of globally defined Mackey functors in characteristic zero, (Semra Pamukla birgə), Archiv der Mathematik 96 (2011), 39-48.",
          "Ring of subquotients of a finite group II: Pure bisets, Journal of Algebra 324 (2010), 706-731.",
          "Ring of Subquotients of a finite group I: Linearization, Journal of Algebra 322 (2009), 2773-2792.",
          "A Tate cohomology sequence for generalized Burnside rings, (Ergün Yalçınla birgə), Journal of Pure and Applied Algebra 213 (2009), 1306-1315.",
          "Alcahestic subalgebras of the alchemic algebra and a correspondence of simple modules, Journal of Algebra 320 (2008), 2422-2450.",
          "Mackey functors, induction from restriction functors and coinduction from transfer functors, Journal of Algebra 315 (2007), 224-248.",
          "Tower diagrams and Pieri's Rule, (Müge Taşkınla birgə), Discrete Mathematics 341 (2018), 3089-3105.",
          "Sorting and generating reduced words, (Müge Taşkınla birgə), Archiv der Mathematik 101 (2013), 427-436.",
          "Tower tableaux and Schubert polynomials, (Müge Taşkınla birgə), Journal of Combinatorial Theory Series A 120 (2013), 1976-1995.",
          "Tower Tableaux, (Müge Taşkınla birgə), Journal of Combinatorial Theory Series A 120 (2013), 843-871."
        ]}
      />

      <Section
        title="Tələbələr - Cari"
        items={["Mustafa Akdağ, Doktorantura üçün namizəd"]}
      />

      <Section
        title="Tələbələr - Məzunlar"
        items={[
          "İbrahim Kaan Arslan, Magistrant (2024)",
          "Mustafa Akdağ, Magistrant (2023)",
          "Ruslan Müslümov, Doktorant (2022)",
          "Səid Yılmaz, Magistrant (2022)",
          "Doğa Ulaş Budak, Magistrant (2021)",
          "Mert Sevinis, Doktorant (2019)",
          "Ebru Beyza Küçük, Magistrant (2019)",
          "Ayçin İplikçi, Magistr (2019)",
          "Mehmet Arslan, Doktorant (2018)",
          "Turan Karakurt, Magistrant (2018)",
          "Gözde Sert, Magistrant (2018)",
          "Mustafa Türköz (T. Turqut ilə məsləhətçi), Magistrant (2017)",
          "Ruslan Müslümov, Magistrant (2017)",
          "Irmak Balçık, Magistrant (2016)",
          "Deniz Yılmaz, Magistrant (2015)",
          "Zehra Bilgin (A. Boysal ilə birgə məsləhətçi), Magistrant (2012)"
        ]}
      />

      <Section
        title="Post-doktorantlar"
        items={["Cihan Bahran (2022–2023)", "Mehmet Arslan (2020–2021)"]}
      />

      <Section
        title="Tələbələr üçün Məqalələri (Türk dilində)"
        items={[
          "Kategoriler teorisi, Matematik Dünyası, (2024), 50 pages.",
          "XOXO, Matematik Dünyası, to appear, 10 pages.",
          "Sonlu Group Temsilleri, Matematik Dünyası, 117 (2023), 17-66.",
          "Mertebeden Gruplar, Matematik Dünyası, 116 (2023), 89 - 89.",
          "Permütasyonları Sıralamak!, Matematik Dünyası, 114 (2022) 83 - 86.",
          "Başarının iki yüzü, IMBM anısına, Matematik Dünyası, 113 (2022) 14 - 15.",
          "Galois grupları, Matematik Dünyası, 112 (2022) 17 - 24.",
          "Rubik küp grubu, Matematik Dünyası, 112 (2022) 50 - 59.",
          "Asal Portreler, Matematik Dünyası, 111 (2021) 10 - 13.",
          "Unutulmuş bir problem: Feit-Thompson sanısı, Matematik Dünyası, 111 (2021) 76 - 78."
        ]}
      />

      <div className="mt-8 text-md text-[#0D1F4F]">
        <p>
          Scopus ID {" "}:{" "}{" "}
          <a
            href="https://www.scopus.com/authid/detail.uri?authorId=17345043600"
            className="hover:underline"
          >
            https://www.scopus.com/authid/detail.uri?authorId=17345043600
          </a>
        </p>
        <p>
          Orcid ID {" "}:{" "}
          <a href="https://orcid.org/0000-0001-7649-560X" className="hover:underline">
            https://orcid.org/0000-0001-7649-560X
          </a>
        </p>
      </div>
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

export default OlcayCoskunProfile;
