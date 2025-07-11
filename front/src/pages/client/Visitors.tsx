import { Link } from "react-router-dom";

const Visitors = () => {
  return (
    <div className="p-10 bg-white text-[#0D1F4F] space-y-6">
      <h2 className="text-3xl font-bold  text-[#0D1F4F]">Ziyarətçilər</h2>

      <div className="space-y-4 text-base leading-relaxed">
        <p>
          Mərkəz həm qısamüddətli, həm də uzunmüddətli ziyarətçiləri qəbul edir:
        </p>
        <p>
          <span className="font-semibold">Qısamüddətli ziyarətçilər:</span> Laboratoriyanın rəhbəri və mütəxəssisləri tərəfindən bir semestr müddətinə dəvət olunan riyaziyyatçılar.
        </p>
        <p>
          <span className="font-semibold">Uzunmüddətli ziyarətçilər:</span> DRL-də bir və ya iki semestr tədqiqatı ilə maraqlanan riyaziyyatçılar uzunmüddətli ziyarətçi olmaq üçün müraciət edə bilərlər. Onlar tədqiqatları müddətində ofis otağı və laboratoriyanın resursları ilə təmin olunacaq.
        </p>
      </div>

      <h2 className="text-xl font-bold uppercase mt-10">Visitors</h2>

      <Link to={"https://yilmazdeniz.bilkent.edu.tr/"}>
        <div className="flex flex-col md:flex-row bg-gray-100 rounded shadow-sm overflow-hidden max-w-3xl">
          <img
            src="https://bdu.info.az/storage/52196/conversions/Photo-248x300-thumb.jpg"
            alt="Deniz Yılmaz"
            className="w-full md:w-1/3 h-auto object-cover"
          />
          <div className="p-6 space-y-2">
            <h3 className="text-[#0D1F4F] font-semibold text-lg">Deniz Yılmaz</h3>
            <p className="text-[#0D1F4F]">Bilkent University</p>
            <p className="font-semibold text-[#0D1F4F]">January 20–24, 2025</p>
            <p>
              <span className="font-semibold">Research Interests:</span> Finite groups, Representation theory, Block theory, Biset functors
            </p>
            <p>
              <span className="font-semibold">Host:</span> Olcay Coşkun
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Visitors;
