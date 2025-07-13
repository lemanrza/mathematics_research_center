const ResearchResults = () => {
  return (
    <div className="p-10 bg-white text-[#0D1F4F] space-y-8">
      {/* Main Title */}
      <h1 className="text-3xl font-bold text-[#0D1F4F] mb-6">Tədqiqat Nəticələri</h1>

      {/* Description */}
      <div className="space-y-4 text-base leading-relaxed text-[#3b4a7f]">
        <p>
          MRL-nin tədqiqat nəticələri onun akademik mükəmməlliyini əks etdirir. Bu səhifə nəzəridən tətbiqiyə qədər bir çox riyaziyyat fənlərindəki töhfələrin geniş spektrini göstərmək üçün nəzərdə tutulub. Burada əlamətdar nəşrlərdən tutmuş birgə layihələrə qədər məlumat tapa bilərsiniz. Tədqiqat fəaliyyətlərimizin təfərrüatlı nəticələrini araşdırın və işimizin riyaziyyat cəmiyyətində və ondan kənarda təsiri haqqında öyrənin.
        </p>
      </div>
      <div className="space-y-4">
        <ul className="list-disc pl-5 space-y-2">
          <li className="text-base font-medium">
            Ibrahim Kaan Aslan, Olcay Coskun,
            <a href="https://arxiv.org/abs/2505.15150" className="text-blue-500 hover:text-blue-700 ">
              "p-biset functor of monomial Burnside rings"
            </a>
             (preprint)
          </li>
          <li className="text-base font-medium">
            Olcay Coskun, Deniz Yılmaz,
            <a href="https://arxiv.org/abs/2505.15150" className="text-blue-500 hover:text-blue-700 ">
              "p-Bifree biset functors" 
            </a>
             (preprint)
          </li>
          <li className="text-base font-medium">
            Olcay Coskun, Ruslan Muslumov,
            <a href="https://arxiv.org/abs/2505.15163" className="text-blue-500 hover:text-blue-700 ">
              "A Categorical Decomposition of C^x-fibered p-biset Functors"
            </a>
            (preprint)
          </li>
          <li className="text-base font-medium">
            Robert Boltje, Olcay Coskun, Cisil Karaguzel,
            <span>"The functor of trivial source modules"</span> (preprint)
          </li>
          <li className="text-base font-medium">
            Bittu Chahal, Ertan Elma, Nicolo Fellini, Akshaa Vatwani, Do Nhat Tan Vo, 
            <a href="https://arxiv.org/abs/2503.02766" className="text-blue-500 hover:text-blue-700 ">
              "On the second Hardy-Littlewood conjecture"
            </a>
            (preprint)
          </li>
        </ul>
      </div>

    </div>
  );
};

export default ResearchResults;
