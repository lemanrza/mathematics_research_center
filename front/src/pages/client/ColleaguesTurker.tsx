import React from "react";

interface SectionProps {
  title: string;
  items: string[];
}

const TurkerBiyikogluProfile: React.FC = () => {
  return (
    <div className="p-6 md:p-12 max-w-8xl mx-auto text-sm leading-relaxed text-gray-800">
      <h1 className="text-3xl font-bold text-[#0D1F4F] mb-2">TÜRKER BIYIKOĞLU</h1>
      <p className="mb-4 text-[15px] text-gray-700">
        Qraf Nəzəriyyəsi Və Onun Tətbiqləri Qrupu - Baş Elmi Işçi
      </p>
      <p className="mb-6 text-gray-700">
        Tədqiqat maraqlarıma <strong>Qraf Nəzəriyyəsi</strong>, Qraf Modelləşdirmə və Qraf Tətbiqləri daxildir.
      </p>

      <Section
        title="Qısa məlumat"
        items={[
          "2000-ci ildə TU Grazdan (Avstriya) Gerhard J Woegingerin rəhbərliyi altında riyaziyyat üzrə bakalavr və magistratura diplom dərəcəsini və 2003-cü ildə Vyana Universitetində (Avstriya) Peter F. Stadler və Josef Leydoldun rəhbərliyi altında doktorantura dərəcəsini almışam.",
          "Mən Leypsiqdəki (Almaniya) Maks Plank adına Riyaziyyat İnstitutunda iki il, Katolik de Louvain Universitetinin (Belçika) Riyaziyyat Mühəndisliyi Departamentində bir il doktoranturadan sonra elmi işçi kimi fəaliyyət göstərmişəm.",
          "İstanbulda İşık Universitetinin Riyaziyyat kafedrasında və İzmirdə İzmir Texnologiya İnstitutunun Riyaziyyat kafedrasında altı ildən çox dosent vəzifəsində çalışmışam.",
          "Son yeddi il Ankarada iki startap şirkətində baş elmi işçi kimi fəaliyyət göstərmişəm."
        ]}
      />

      <Section
        title="Mükafatlar"
        items={[
          "Türk Matematik Vakfı (Turkish Mathematical Foundation) - Masatoshi Gündüz İkeda Research Award, 2015",
          "Distinguished Young Scholar Award, Turkish Academy of Sciences, 2009 (TUBA-GEBIP/2009)"
        ]}
      />

      <Section
        title="Fondla Tədqiqat Layihələri"
        items={[
          "“Geometric representations and symmetries of graphs, maps and other discrete structures and applications in science” (GReGAS) supported by TUBITAK and the European Science Foundation (EUROCORES Programme EUROGIGA), 2011-2014, Principal Researcher. Lale Ozkahya (post-doc)",
          "“Castelnuovo-Mumford Regularity of Graphs and Topology of Decycling Complexes” supported by TUBITAK, 2012-2014. This is a joint project with Yusuf Civan (Suleyman Demirel University, Isparta, Turkey).",
          "“Bionetalign: Global Alignment of Biochemical Networks Regularity for Functional Orthology” supported by TUBITAK 2012-2014. This is a joint project with Cesim Erten (Kadir Has University Istanbul, Turkey)."
        ]}
      />

      <Section
        title="Nəşrlər"
        items={[
          "T. Biyikoglu, J. Leydold and P. F. Stadler, Laplacian Eigenvectors of Graphs, Lecture Notes in Mathematics 1915, Springer (2007).",
          "Alkan, T. Biyikoglu, M. Demange and C. Erten, Structure of conflict graphs in constraint alignment problems and algorithms, Discrete Mathematics & Theoretical Computer Science, 21 no.4 Sep 11 (2019).",
          "Biyikoglu and Y. Civan, Prime Graphs, Matching and the Castelnuovo-Mumford Regularity, J. Commutative Algebra, 11: 1-27 (2019).",
          "Biyikoglu and Y. Civan, Castelnuovo-Mumford Regularity of Graphs, Combinatorica, 38: 1353-1383 (2018).",
          "Biyikoglu and Y. Civan, Vertex Decomposable Graphs, Codismantlability, Cohen-Macaulayness and Castelnuovo-Mumford Regularity, Electronic Journal of Combinatorics, 21: #P1.1 (2014).",
          "Abaka, T. Biyikoglu, C. Erten, CAMPways: constrained alignment framework for the comparative analysis of a pair of metabolic pathways, Bioinformatics, 29: 145-153 (2013).",
          "Biyikoglu and Y. Civan, Four-cycled graphs with topological applications, Annals of Combinatorics, 16: 37-56 (2012).",
          "Biyikoglu and J. Leydold, Dendrimers are the unique chemical trees with maximum spectral radius, MATCH Communications in Mathematical and in Computer Chemistry, 68: 851-854 (2012).",
          "Biyikoglu and J. Leydold, Graphs of given order and size and minimum algebraic connectivity, Linear Algebra and its Applications, 436: 2067-2077 (2012).",
          "Biyikoglu, S. Simic, Z. Stanic, Some Notes on Spectra of Cographs, Ars Combinatoria, 100: 421-434 (2011)."
        ]}
      />

      <Section
        title="Konfransın materialları"
        items={[
          "Baksi, O. Kaya and T. Biyikoglu, Enabling Cooperation, Resource Allocation and Receiver Selection Across Cells: Complementary Fractional Frequency Reuse. IEEE PIMRC 2013, London, UK, Sept. 2013.",
          "Baksi, O. Kaya, T. Biyikoglu, Optimal and Near-optimal Partner Selection Algorithms in Cooperative OFDMA, IEEE WCNC 2012, Paris, France, April 2012."
        ]}
      />

      <Section
        title="Preprints"
        items={[
          "Biyikoglu and Y. Civan, Bounding the collapsibility number of simplicial complexes and graphs, Preprint (2023). [pdf]",
          "Biyikoglu and Y. Civan, Projective dimension of (hyper)graphs and the Castelnuovo-Mumford regularity of bipartite graphs, Preprint (2016). [pdf]",
          "Biyikoglu and Y. Civan, A note on the recognition of codismantlable graphs and posets, Preprint (2016). [pdf]",
          "T. Biyikoglu and Y. Civan, Bounding Castelnuovo-Mumford regularity of graphs via Lozin's transformation, Preprint (2013). [pdf]",
          "T. Biyikoglu, and J Leydold, Semiregular Trees with Minimal Index, Preprint (2009). [pdf]",
          "T. Biyikoglu, M. Hellmuth, J Leydold, Largest Laplacian Eigenvalue and Degree Sequences of Trees, Preprint (2007). [pdf]"
        ]}
      />

      <Section
        title="Hazırlıq Mərhələsində Olan Məqalələr"
        items={[
          "Biyikoglu, Y. Civan, M. Demir and H. G¨uler, Helly number, domination and homology, submitted (2024).",
          "Allmer, T. Biyikoglu and C. Has, De Novo Sequencing of Tandem Mass Spectra using a Novel Graph Modeling Approach, in preparation",
          "M. Atay and T. Biyikoglu, Graph entropy, degree assortativity, and hierarchical structures in networks, in preparation."
        ]}
      />

      <Section
        title="Sənaye Tədqiqatları"
        items={[
          "2015-2017-ci illərdə konsaltinq şirkətinin qurucularından biri olmuşam. Biz Türkiyə su elektrik stansiyası sektoru üçün xüsusi tədqiqata əsaslanan buxar axınını proqnozlaşdırma modelləri və məhsulları hazırlamışıq."
        ]}
      />

      <Section
        title="Seminar və Konfranslar"
        items={[
          "Monthly Istanbul Discrete Mathematics Meetings, Istanbul Center for Mathematical Sciences, Bo˘gazi¸ci University, 2009-2012 (with T. Ekim).",
          "Workshop on Graph Theory and its Applications I, II, III, Istanbul, 2010, 2011 and 2012 (with T. Ekim)."
        ]}
      />

      <Section
        title="Xidmət"
        items={[
          "Türkiyənin məşhur riyaziyyat jurnalının qonaq redaktoru journal ”Matematik Dünyası”, 2017–2020."
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

export default TurkerBiyikogluProfile;
