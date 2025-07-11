
const events = [
  "Representation Theory through the Lens of Category Theory, Olcay Coşkun, MRL, September 24, 2024",
  "Obstructions for Gluing Biset Functors I, Olcay Coşkun, MRL, October 24, 2024",
  "Prime Portraits, Olcay Coşkun, MRL, October 30, 2024",
  "Simple Functors over the Green Biset Functor of Section Burnside Rings I, Ruslan Muslumov, ADA University, November 22, 2024",
  "Simple Functors over the Green Biset Functor of Section Burnside Rings II, Ruslan Muslumov, ADA University, November 27, 2024",
  "Finite Group Representations I, Olcay Coşkun, MRL, December 24, 2024",
  "A Discrete Mean Value of the Riemann Zeta Function and Its Derivatives, Ertan Elma, MRL, December 26, 2024",
  "Diagonal p-Permutation Functors and Local-Global Conjectures in Block Theory, Deniz Yılmaz, Bilkent University, January 23, 2025",
  "Graph Entropy, Degree Assortativity, and Hierarchical Structures in Networks, Turker Biyikoglu, MRL, March 5, 2025",
  "An Introduction to Arithmetic Functions, Ertan Elma, MRL, March 6, 2025",
  "Multiplicative functions k-additive on hexagonal numbers, Elchin Hasanalizade, ADA University, March 11, 2025",
  "Pigeon Hole, Turker Biyikoglu, MRL, March 13, 2025",
  "Towards the Bloch-Kato conjecture for GSp₆., Waqar Ali Shah, University of California, March 17, 2025",
  "Jets, differential operators, and principal symbols in noncommutative geometry, Keegan Jonathan Flood, UniDistance Suisse, March 28, 2025",
  "Which Equations, Sets, (Hyper)Graphs, and Polynomials Are Extremal? Bridging Mathematical Fields Through Combinatorial Ideas, Nika Salia, King Fahd University, April 3, 2025",
  "Finite groups, their actions and Burnside rings, Olcay Coskun, MRL, April 4, 2025",
  "Number of Prime Factors with a Given Multiplicity, Ertan Elma, MRL, April 9, 2025",
  "An Introduction to Arithmetic Functions II, Ertan Elma, MRL, April 10, 2025",
  "Advanced concepts in Mathematical Physics: an operator algebraic approach, Christiaan J.F. van de Ven, TNO, April 14, 2025",
  "Crystals and Cluster Algebras Volker Genz, Institute des Hautes Études Scientifiques, April 17, 2025",
  "Pigeon Hole II, Türker Bıyıkoğlu, MRL, April 17, 2025",
  "The Burnside Ring of a Finite Group, Olcay Coskun, MRL, April 24, 2025"
];

const AllEvents = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12 text-[#0D1F4F] font-sans">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6  tracking-wide">BÜTÜN TƏDBİRLƏR</h2>
      <ol className="list-decimal list-inside space-y-4 text-sm sm:text-base text-[#0D1F4F] leading-relaxed">
        {events.map((event, index) => (
          <li key={index}>{event}</li>
        ))}
      </ol>
    </section>
  );
};

export default AllEvents;
