
const councilMembers = [
  {
    name: 'Azer Abizade',
    title: 'ADA Universiteti və Elm və Təhsil Nazirliyi',
  },
  {
    name: 'Olcay Coşkun',
    title: 'MRL Müdiri',
  },
  {
    name: 'Burak Gürel',
    title: 'Boğaziçi Universiteti, Riyaziyyat Professoru',
  },
  {
    name: 'Ergün Yalçın',
    title: 'Bilkent Universiteti, Riyaziyyat Professoru',
  },
  {
    name: 'Ferhad Huseynov',
    title: 'ADA Universiteti',
  },
];

const SceintificAdvisory = () => {
  return (
    <div className="p-10 bg-white text-gray-800">

      {/* Subtitle */}
      <h2 className="text-2xl font-bold mb-6 text-[#0D1F4F]">
        Elmi Məsləhət Şurası
      </h2>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {councilMembers.map((member, index) => (
          <div
            key={index}
            className="bg-gray-100 p-6 rounded shadow-sm"
          >
            <p className="text-lg font-semibold text-gray-600">
              {member.name}
            </p>
            <p className="mt-1 text-[#0D1F4F]">{member.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};


export default SceintificAdvisory