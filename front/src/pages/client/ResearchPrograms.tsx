
const researchPrograms = [
  {
    heading: 'Seminarlar Silsiləsi',
    items: [
      {
        title: 'Həftəlik Tədqiqat Qrupu Seminarları:',
        content:
          'İnstitutdakı tədqiqat qruplarının hər biri həftəlik seminar təşkil edir, burada aparıcı və gənc tədqiqatçılar, post doktorantlar və qonaqlar öz işlərində ən son yenilikləri təqdim edirlər. Beləliklə, seminarlar qrupun diqqət mərkəzində olan bir çox mövzuları əhatə edir, müzakirə və əməkdaşlığı təşviq edir.',
      },
      {
        title: 'Magistratura Tələbələri Üçün Seminarlar:',
        content:
          'Bu cür seminarlar magistr tələbələrinə tədqiqat işlərini davam etdirməsinə kömək edir. Seminarlar tələbələrə öz işlərini təqdim etmək, rəy almaq və institutda daha geniş tədqiqat icması ilə əlaqə saxlamaq üçün imkan yaradır.',
      },
      {
        title: 'Bakalavr Tələbələri Üçün Tədqiqat Seminarları:',
        content:
          'Bu seminarlar bakalavr tələbələrini riyaziyyatı magistratura səviyyəsində öyrənməyə həvəsləndirmək və təşviq etmək məqsədi daşıyır. Seminarlar tələbələri riyazi tədqiqatlar dünyası ilə tanış edir və riyaziyyatın onların həyatında daşıdığı potensial və təsirini göstərir, beləliklə, onlara mövzuya xas olan bir çox imkanları qiymətləndirməyə imkan verir.',
      },
    ],
  },
  {
    heading: 'Konfranslar və Seminarlar',
    items: [
      {
        title: 'Konfranslar:',
        content:
          'Bu böyük tədbirlərdə aparıcı beynəlxalq tədqiqatçılar və institutun üzvləri məruzələr təqdim edir. Konfranslar riyaziyyatda son nailiyyətləri müzakirə etmək, fikir mübadiləsi aparmaq və xarici tədqiqatçılarla əlaqə yaratmaq imkanı verir. İnstitut, həmçinin mühüm məruzəçilərə səfər, yaşayış və gündəlik xərclər üzrə subsidiya təqdim edir.',
      },
      {
        title: 'Seminarlar:',
        content:
          'Konfranslardan fərqli olaraq, seminarlar kiçik və daha çox diqqət mərkəzindədirlər; seminarlar müəy­yən bir riyazi sahəyə dərindən diqqət yetirmək üçün 5-10 seçilmiş tədqiqatçını bir araya gətirirlər. Adətən 2-3 gün davam edən müddətdə iştirakçılar nəinki intensiv əməkdaşlıq etməyə, həm də müəyyən hallar tapmaq üçün praktik tədqiqatlar aparmağa imkan verir.',
      },
    ],
  },
  {
    heading: 'Yay məktəbləri',
    items: [
      {
        title: '',
        content:
          'İnstitut riyaziyyatın seçilmiş müasir sahələrində institutun yay məktəbləri təşkil edir. Bu proqramların iştirakçıları arasında doktorant və gənc tədqiqatçılar yer alır. Bu proqramlar aksariyyəti riyaziyyatın müəyyən bir sahəsinə, çox vaxt riyaziyyat sahəsində yeni nəşr edilmiş kitablara diqqət yetirir. Kitabdakı fəsillərin təqdimatı və müzakirəsi iştirakçılar arasında aktiv qarşılıqlı əlaqəyə imkan yaradır.',
      },
    ],
  },
  {
    heading: 'Tədqiqat Semestrləri',
    items: [
      {
        title: '',
        content:
          'İnstitut tematik tədqiqat semestrlərini – müəyyən bir mövzuya yönəlmiş tədqiqat dövrlərini keçirir. Bela semestrlər adətən seçilmiş mövzu üzərində müəyyən dövr müddətində intensiv işləyəcək 5-7 tədqiqatçını bir araya gətirir. Tədqiqatçılar bela iştirak üçün müraciət edə bilərlər. Seçim müsabiqə yolu ilə həyata keçirilir. Bu, müəyyən bir mövzuya dərindən diqqət yetirmək, əməkdaşlıq etmək və vacib məsələlərin həllində əhəmiyyətli irəliləyiş əldə etmək üçün unikal imkandır.',
      },
    ],
  },
  {
    heading: 'Yay Tədqiqat Qrupları',
    items: [
      {
        title: '',
        content:
          'İnstitut yay aylarında tədqiqatçıların birgə müəyyən bir riyazi saha üzərində işlədikləri yay tədqiqat qruplarını maliyyələşdirir. Qruplara layihə müddətində, adətən 2-3 ay ərzində, işləmək üçün ofis və aylıq tədqiqat ödənişi təklif edilir. Yay tədqiqat qrupları birgə iş üçün ideal mühit təklif edir , beləliklə iştirakçılar yeni ideyaları araşdırmaq və tədqiqatlarında əhəmiyyətli nəticələr əldə etmək imkanı verir.',
      },
    ],
  },
];

const ResearchPrograms = () => {
  return (
    <section className="max-w-8xl mx-auto px-12 py-14 font-sans text-[#0D1F4F]">
      <h2 className="text-3xl sm:text-4xl font-bold mb-10">TƏDQİQAT PROQRAMLARI</h2>

      <div className="space-y-10">
        {researchPrograms.map((section, index) => (
          <div key={index} className="space-y-4">
            <h3 className="text-xl font-semibold text-[#0D1F4F]">{section.heading}</h3>
            <div className="space-y-3 text-[#3b4a7f]">
              {section.items.map((item, i) => (
                <p key={i} className="text-sm sm:text-base leading-relaxed">
                  {item.title && <strong className="text-[#0D1F4F]">{item.title} </strong>}
                  {item.content}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ResearchPrograms;
