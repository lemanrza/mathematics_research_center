import { t } from 'i18next';
import React from 'react';
import { Link, useParams } from 'react-router-dom';

const SeminarDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const seminars = [
    {
      id: 1,
      title: 'Tələbələr Üçün Seminarlar',
      data: [
        {
          date: '17.04.2025',
          time: '12:00',
          location: 'Rəqəmsal Tədqiqat Laboratoriyası, Bakı Dövlət Universiteti, Əsas Bina, 3-cü mərtəbə',
          speaker: 'Göyərçin Yuvası II - Türker Bıyıkoğlu, MRL',
          summary: 'Diskret riyaziyyat və qrafik nəzəriyyəsində tez-tez istifadə olunan bəzi sübut üsulları və texnikalarını sizə təqdim edəcəm. Bir neçə əsas tərifə və bu cür üsullara əsaslanan teoremlər və onların məqsədyönlü sübutlarını görəcəyik. Bu həftə biz "Göyərçin yuvası" prinsipi ilə başlayırıq.',
        },
        {
          date: '10.04.2025',
          time: '12:00',
          location: 'Rəqəmsal Tədqiqat Laboratoriyası, Bakı Dövlət Universiteti, Əsas Bina, 3-cü mərtəbə',
          speaker: 'Arifmetik funksiyalara giriş II - Ertan Elma, Mathematics Research Lab',
          summary: 'In this second talk of the series, we will continue with some further properties of the Möbius function such as the Möbius Inversion Formula. Then we will see some other arithmetic functions such as the divisor function and the Euler totient function. If time permits, we will start considering the summatory functions of these functions and cover a technique called partial summation.',
        },
        {
          date: '03.04.2025',
          time: '12:00',
          location: 'Rəqəmsal Tədqiqat Laboratoriyası, Bakı Dövlət Universiteti, Əsas Bina, 3-cü mərtəbə',
          speaker: 'Arifmetik funksiyalara giriş - Ertan Elma, MRL',
          summary: 'Bu seminarlar silsiləsində biz ədədlər nəzəriyyəsində Möbius funksiyası, Eyler totient funksiyası və bölən funksiyası kimi çox istifadə olunan arifmetik funksiyaları müəyyənləşdirəcək və onların elementar xassələrini əhatə edəcəyik.',
        },
        {
          date: '12.03.2025',
          time: '12:00',
          location: 'Rəqəmsal Tədqiqat Laboratoriyası, Bakı Dövlət Universiteti, Əsas Bina, 3-cü mərtəbə',
          speaker: 'Göyərçin Yuvası - Türker Bıyıkoğlu, MRL',
          summary: 'Diskret riyaziyyat və qrafik nəzəriyyəsində tez-tez istifadə olunan bəzi sübut üsulları və texnikalarını sizə təqdim edəcəm. Bir neçə əsas tərifə və bu cür üsullara əsaslanan teoremlər və onların məqsədyönlü sübutlarını görəcəyik.',
        },
        {
          date: '06.03.2025',
          time: '12:00',
          location: 'Rəqəmsal Tədqiqat Laboratoriyası, Bakı Dövlət Universiteti, Əsas Bina, 3-cü mərtəbə',
          speaker: 'Arifmetik Funksiyalara Giriş - Ertan Elma, MRL',
          summary: 'Bu seminarlar silsiləsində biz ədədlər nəzəriyyəsində Möbius funksiyası, Eyler totient funksiyası və bölən funksiyası kimi çox istifadə olunan arifmetik funksiyaları müəyyənləşdirəcək və onların elementar xassələrini əhatə edəcəyik.',
        },
        {
          date: '24.12.2024',
          time: '12:00',
          location: 'Rəqəmsal Tədqiqat Laboratoriyası, Bakı Dövlət Universiteti, Əsas Bina, 3-cü mərtəbə',
          speaker: 'Qrafik Entropiya, Dərəcə Assortitivliyi və Şəbəkələrdə İyerarxik strukturlar - Türker Bıyıkoğlu, MRL',
          summary: 'Bu çıxışda biz qrafların struktur və dinamik xassələri ilə bağlı bir neçə anlayışı əlaqələndiririk. Onların arasında müəyyən dinamik sistemdən gələn topoloji entropiya var ki, bu da qrafikin bitişik matrisinin spektral radiusu, kimyadan Randi\'{c} indeksi və real şəbəkələrin assortitivlik dərəcəsi ilə bağlıdır.',
        },
        {
          date: '30.10.2024',
          time: '10:15',
          location: 'Mexanika Riyaziyyat fakültəsi',
          speaker: 'Olcay Coşkun, MRL',
          summary: 'Link to the seminar: [Sadə Şəkillər - Olcay Coşkun](https://bdu.info.az/xeberler/turkiyeli-professor-bdu-da-elm-seminar-kecirib)',
        },
        {
          date: '05.03.2025',
          time: '12:00',
          location: 'Tətbiqi riyaziyyat və kibernetika fakültəsi, Bakı Dövlət Universiteti, 3 saylı tədris binası, otaq 317',
          speaker: 'Türker Bıyıkoğlu, MRL',
          summary: 'Bu çıxışda biz qrafların struktur və dinamik xassələri ilə bağlı bir neçə anlayışı əlaqələndiririk. Onların arasında müəyyən dinamik sistemdən gələn topoloji entropiya var ki, bu da qrafikin bitişik matrisinin spektral radiusu, kimyadan Randi\'{c} indeksi və real şəbəkələrin assortitivlik dərəcəsi ilə bağlıdır. Görəcəyik ki, informatika elminin iyerarxik strukturu, azalan dərəcələrlə genişlik - ilk axtarış sıralaması adlanan bu anlayışların maksimallaşdırılmasını xarakterizə edir. Bu iş, Bilkent Universitetinin müəllimi Fatihcan Atay ilə birgə işdir.',
        },
        {
          date: '05.03.2025',
          time: '12:00',
          location: 'Tətbiqi riyaziyyat və kibernetika fakültəsi, Bakı Dövlət Universiteti, 3 saylı tədris binası, otaq 317',
          speaker: 'Türker Bıyıkoğlu, MRL',
          summary: 'Bu çıxışda biz qrafların struktur və dinamik xassələri ilə bağlı bir neçə anlayışı əlaqələndiririk. Onların arasında müəyyən dinamik sistemdən gələn topoloji entropiya var ki, bu da qrafikin bitişik matrisinin spektral radiusu, kimyadan Randi\'{c} indeksi və real şəbəkələrin assortitivlik dərəcəsi ilə bağlıdır. Görəcəyik ki, informatika elminin iyerarxik strukturu, azalan dərəcələrlə genişlik - ilk axtarış sıralaması adlanan bu anlayışların maksimallaşdırılmasını xarakterizə edir. Bu iş, Bilkent Universitetinin müəllimi Fatihcan Atay ilə birgə işdir.',
        }
      ],
    },
    {
      id: 2,
      title: 'Cəbr Seminarları',
      data: [
        {
          date: '17.04.2025',
          time: '15:00AST - 11:00GMT',
          location: '',
          speaker: 'Crystals and Cluster Algebras - Volker Genz, Institute des Hautes Études Scientifiques',
          summary: 'Cluster algebras offer a unifying framework that connects a diverse range of mathematical areas, including representation theory, string theory, Poisson geometry, integrable systems, knot theory, and combinatorics. In this talk, we will give a gentle introduction to cluster algebras, tracing their origins in representation theory and highlighting recent developments that connect cluster structures with crystal operators. Along the way, we will explore some of the rich structures and features inherent in cluster algebras.',
        },
        {
          date: '23.01.2025',
          time: '10:00',
          location: 'Rəqəmsal Tədqiqat Laboratoriyası, Bakı Dövlət Universiteti, Əsas Bina, 3-cü mərtəbə',
          speaker: 'Diagonal $p$-permutation functors and local-global conjectures in block theory - Deniz Yilmaz, Bilkent University',
          summary: 'The local-global principle in modular representation theory asserts that the invariants of blocks of finite groups are determined by the invariants (of blocks) of local subgroups. There are several outstanding conjectures revolving around this principle. Alperin\'s block-wise weight conjecture (1987) predicts that the number of simple modules of a block is equal to the number of its weights. The finiteness conjectures of Donovan (1980) and Puig (1982) state that there are only finitely many blocks of finite groups with a given defect group, up to Morita and splendid Morita equivalence, respectively.',
        },
        {
          date: '05.12.2024',
          time: '10:30',
          location: 'Rəqəmsal Tədqiqat Laboratoriyası, Bakı Dövlət Universiteti, Əsas Bina, 3-cü mərtəbə',
          speaker: 'Burnside Halqları Bölməsinin Green Biset funktorları üzərindəki sadə funktorları II - Ruslan Müslümov, ADA Universiteti',
          summary: 'Biset functors over a commutative and unitary ring $k$ provide a powerful framework for studying finite groups and their actions. The biset category, whose objects are finite groups and morphism sets are given by Grothendieck groups $B(G, H)$ of finite $(G, H)$-bisets, serves as the foundation for this theory.',
        },
        {
          date: '27.11.2024',
          time: '11:00',
          location: 'Rəqəmsal Tədqiqat Laboratoriyası, Bakı Dövlət Universiteti, Əsas Bina, 3-cü mərtəbə',
          speaker: 'Burnside Halqları Bölməsinin Green Biset funktorları üzərindəki sadə funktorları I - Ruslan Müslümov, ADA Universiteti',
          summary: 'This is a detailed description of Biset functors and their application in group theory.',
        },
        {
          date: '24.10.2024',
          time: '10:00',
          location: 'Rəqəmsal Tədqiqat Laboratoriyası, Bakı Dövlət Universiteti, Əsas Bina, 3-cü mərtəbə',
          speaker: 'Biset Funktorlarının Yapışdırılması üçün Maneələr I - Olcay Coşkun, MRL',
          summary: 'This is the first of a series of seminars in which we develop an obstruction theory for the existence and uniqueness of a solution to the gluing problem for a biset functor defined on the subquotients of a finite group \(G\).',
        }
      ]
    },
    {
      id: 3,
      title: 'Riyaziyyat Seminarları',
      data: [
        {
          date: '24.09.2024',
          time: '10:15',
          location: 'Mexanika Riyaziyyat fakültəsi',
          speaker: 'Representation Theory through the Lens of Category Theory - Olcay Coşkun, MRL',
          summary: 'Link to the seminar: [Representation Theory through the Lens of Category Theory - Olcay Coşkun](https://mechmath.bdu.info.az/xeberler/professor-olcay-coskun-meruze-etdi)',
        }
      ]
    },
    {
      id: 4,
      title: 'Ədədlər Nəzəriyyəsi Seminarları',
      data: [
        {
          date: '10.04.2025',
          time: '12:00',
          location: 'Rəqəmsal Tədqiqat Laboratoriyası, Bakı Dövlət Universiteti, Əsas Bina, 3-cü mərtəbə',
          speaker: 'Arifmetik funksiyalara giriş II - Ertan Elma, Mathematics Research Lab',
          summary: 'In this second talk of the series, we will continue with some further properties of the Möbius function such as the Möbius Inversion Formula. Then we will see some other arithmetic functions such as the divisor function and the Euler totient function. If time permits, we will start considering the summatory functions of these functions and cover a technique called partial summation.',
        },
        {
          date: '09.04.2025',
          time: '11:00',
          location: 'ADA Universiteti',
          speaker: 'Verilmiş Çoxluğu Olan Əsas Amillərin Sayı - Ertan Elma, Mathematics Research Lab',
          summary: 'For natural numbers $k,n\geqslant 1$, let $\omega_k(n)$ be the number of prime factors of $n$ with multiplicity $k$. The functions $\omega_k(n)$ with $k\geqslant 1$ are refined versions of the well-known function $\omega(n)$ counting the number of distinct prime factors of $n$ without any conditions on the multiplicities. In this talk, we will cover several elementary, analytic and probabilistic results about the functions $\omega_k(n)$ with $k\geqslant 1$ and their function field analogues in polynomial rings with coefficients from a finite field.',
        },
        {
          date: '17.03.2025',
          time: '9:30',
          location: '',
          speaker: 'Towards the Bloch-Kato conjecture for GSp6 - Waqar Ali Shah, University of California, Santa Barbara',
          summary: 'One of the central problems in number theory is the Birch and Swinnerton-Dyer conjecture, which asserts that the order of vanishing of the L-function of a rational elliptic curve E at the central value coincides with the rank of its Mordell-Weil group. In this talk, we recall the Bloch-Kato conjecture in the setting of GSp6-Shimura varieties and present the construction of an Euler system using a novel method that overcomes a major obstacle. As a consequence, we obtain the first non-trivial result towards the Bloch-Kato conjecture in this setting.',
        },
        {
          date: '11.03.2025',
          time: '10:30',
          location: 'Rəqəmsal Tədqiqat Laboratoriyası, Bakı Dövlət Universiteti, Əsas Bina, 3-cü mərtəbə',
          speaker: 'Multiplicative functions $k$-additive on hexagonal numbers - Elçin Həsənəlizadə, ADA Universiteti',
          summary: 'Characterization of the identity function using functional equations has been actively studied by many authors. In this talk, we will show that for $k\ge3$ the set of all nonzero hexagonal numbers is a new k-additive uniqueness set for the collection of multiplicative functions.',
        },
        {
          date: '26.12.2024',
          time: '10:30',
          location: 'Rəqəmsal Tədqiqat Laboratoriyası, Bakı Dövlət Universiteti, Əsas Bina, 3-cü mərtəbə',
          speaker: 'A Discrete Mean Value of the Riemann Zeta Function and its Derivatives - Ertan Elma, MRL',
          summary: 'In this talk, we will discuss an estimate for a discrete mean value of the Riemann zeta function and its derivatives multiplied by Dirichlet polynomials. Assuming the Riemann Hypothesis, we obtain a lower bound for the \(2k\)-th moment of all the derivatives of the Riemann zeta function evaluated at its nontrivial zeros. This is based on a joint work with Kübra Benli and Nathan Ng.',
        }
      ]
    },
    {
      id: 5,
      title: 'Diskret Strukturlar Seminarları',
      data: [
        {
          date: '02.04.2025',
          time: '10:30',
          location: '',
          speaker: 'Which Equations, Sets, (Hyper)Graphs, and Polynomials Are Extremal? Bridging Mathematical Fields Through Combinatorial Ideas - Nika Salia, King Fahd University',
          summary: 'In this talk, we will explore recent advances in combinatorics and graph theory, with a focus on stability results, extremal problems, and the structural properties of discrete objects. We will introduce a stability version of Dirac’s classical theorem, providing a full characterization of near-Hamiltonian graphs, and discuss extensions of Pósa’s theorem to hypergraphs. Additionally, I will present the resolution of a longstanding conjecture by Hakimi and Schmeichel on the maximum number of pentagons in planar graphs. Further, I will highlight connections between combinatorics and algebra, including results on intersecting families of polynomials over finite fields and higher-order extensions of Schur’s theorem. These findings illustrate the deep interplay between combinatorics and other areas of mathematics, with potential applications in both theoretical and applied settings.',
        },
        {
          date: '05.03.2025',
          time: '12:00',
          location: 'Tətbiqi riyaziyyat və kibernetika fakültəsi, Bakı Dövlət Universiteti, 3 saylı tədris binası, otaq 317',
          speaker: 'Qrafik Entropiya, Dərəcə Assortitivliyi və Şəbəkələrdə İyerarxik strukturlar - Türker Bıyıkoğlu, MRL',
          summary: 'Bu çıxışda biz qrafların struktur və dinamik xassələri ilə bağlı bir neçə anlayışı əlaqələndiririk. Onların arasında müəyyən dinamik sistemdən gələn topoloji entropiya var ki, bu da qrafikin bitişik matrisinin spektral radiusu, kimyadan Randi\'{c} indeksi və real şəbəkələrin assortitivlik dərəcəsi ilə bağlıdır. Görəcəyik ki, informatika elminin iyerarxik strukturu, azalan dərəcələrlə genişlik - ilk axtarış sıralaması adlanan bu anlayışların maksimallaşdırılmasını xarakterizə edir. Bu iş, Bilkent Universitetinin müəllimi Fatihcan Atay ilə birgə işdir.',
        }
      ]
    },
    {
      id: 6,
      title: 'Həndəsə/Topologiya seminarları',
      data: [
        {
          date: '14.04.2025',
          time: '13:39 AST, 9:30 GMT',
          location: '',
          speaker: 'Advanced concepts in Mathematical Physics: an operator algebraic approach - Christiaan J.F. van de Ven, TNO',
          summary: 'In this talk, I will give an overview of my research interests and current projects within the field of modern Mathematical Physics. A central focus of my work is the mathematical derivation of the foundations of quantum mechanics. In particular, I highlight the concept of asymptotic emergence, a rigorous mathematical framework for understanding the classical and macroscopic limits of quantum systems. Key topics of my interest in this context include the abstract formulation of natural phenomena such as spontaneous symmetry breaking (SSB), phase transitions, and entropy. I explore these ideas through the lens of strict deformation quantization of Poisson manifolds, C*-algebras, analysis, and large deviation theory. These themes will be central to the seminar.',
        },
        {
          date: '28.03.2025',
          time: '15:00 AST - 11:00 GMT',
          location: '',
          speaker: 'Jets, differential operators, and principal symbols in noncommutative geometry - Keegan Jonathan Flood, UniDistance Suisse',
          summary: 'Classically, jet bundles provide the framework for variational calculus as well as for both the Lagrangian and the Hamiltonian formalism in physics. Further, the geometric theory of differential equations is formulated in the context of jet bundles. In this talk, we will be concerned with the extension of jet theory to the noncommutative setting. Noncommutative differential geometry generalizes classical differential geometry by replacing the commutative algebra $C^{\infty}(M)$ of smooth functions on a smooth manifold $M$ with an arbitrary unital associative algebra $A$ over a commutative ring $\mathbbm{k}.',
        },
        {
          date: '17.04.2025',
          time: '12:00',
          location: 'Rəqəmsal Tədqiqat Laboratoriyası, Bakı Dövlət Universiteti, Əsas Bina, 3-cü mərtəbə',
          speaker: 'Crystals and Cluster Algebras - Volker Genz, Institute des Hautes Études Scientifiques',
          summary: 'Cluster algebras offer a unifying framework that connects a diverse range of mathematical areas, including representation theory, string theory, Poisson geometry, integrable systems, knot theory, and combinatorics. In this talk, we will give a gentle introduction to cluster algebras, tracing their origins in representation theory and highlighting recent developments that connect cluster structures with crystal operators. Along the way, we will explore some of the rich structures and features inherent in cluster algebras.',
        }
      ]
    }
  ];


  const seminar = seminars.find((seminar) => seminar.id.toString() == id);

  if (!seminar) {
    return <div>Seminar not found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold text-[#0D1F4F] mb-6">
        {t(seminar.title)}
      </h1>

      {seminar.data.map((event, index) => (
        <div key={index} className="bg-[#F3F3F4] p-6 rounded-md mb-6">
          <h2 className="text-2xl font-semibold text-[#4A4A4A]">{event.speaker}</h2>
          <p className="text-lg text-[#333] font-medium mt-2">
            <span>{t('seminar_detail.date_time')}:</span> {event.date} | {event.time}
          </p>
          {event.location && (
            <p className="text-sm text-[#7D7D7D] mt-2">
              <span className="font-semibold">{t('seminar_detail.location')}:</span> {event.location}
            </p>
          )}
          <p className="text-gray-800 mt-4">
            <span className="font-semibold">{t('seminar_detail.summary')}:</span> {t(event.summary)}
          </p>
        </div>
      ))}
      <Link
        to="/elmi-fealiyyet/seminarlar"
        className="inline-block mt-6 px-6 py-2 bg-[#0D1F4F] text-white font-semibold text-lg rounded-md hover:bg-[#4A90E2]"
      >
        {t('seminar_detail.all_seminars')}
      </Link>
    </div>
  );
};

export default SeminarDetail;
