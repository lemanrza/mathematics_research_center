// // import { Menu } from "lucide-react";
// // import { useState } from "react";
// // import { Link } from "react-router-dom";

// // export default function Header() {
// //     const [isOpen, setIsOpen] = useState(false);

// //     return (
// //         <header className="bg-white shadow-md sticky top-0 z-50">
// //             <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

// //                 <div className="flex items-center gap-4">
// //                     <img src="/mathematics_research_lab_logo2.jpg" alt="Logo" className="w-14 h-20 h-auto" />
// //                     <span className="text-xl font-bold text-[#0D1F4F]">Mathematics <br /> Research Center</span>
// //                 </div>

// //                 <nav className="hidden md:flex gap-6 text-sm text-gray-700 font-medium">
// //                     <Link to={"/haqqimizda"} className="hover:text-purple-600">Haqqımızda</Link>
// //                     <Link to={"/elanlar"} className="hover:text-purple-600">Elmi-Fəaliyyət</Link>
// //                     <Link to={"/xeberler"} className="hover:text-purple-600">Xəbərlər</Link>
// //                     <Link to={"/elaqe"} className="hover:text-purple-600">Əlaqə</Link>
// //                 </nav>

// //                 <button
// //                     onClick={() => setIsOpen(!isOpen)}
// //                     className="md:hidden text-purple-700"
// //                 >
// //                     <Menu size={24} />
// //                 </button>
// //             </div>

// //             {/* Mobile Nav */}
// //             {isOpen && (
// //                 <div className="md:hidden bg-white px-4 pb-4 shadow-sm">
// //                     <nav className="flex flex-col gap-3 text-sm text-gray-700 font-medium">
// //                         <a href="#" className="hover:text-purple-600">Ana səhifə</a>
// //                         <a href="#" className="hover:text-purple-600">Haqqımızda</a>
// //                         <a href="#" className="hover:text-purple-600">Tədqiqatlar</a>
// //                         <a href="#" className="hover:text-purple-600">Əlaqə</a>
// //                     </nav>
// //                 </div>
// //             )}
// //         </header>
// //     );
// // }
// import { Menu } from "lucide-react";
// import { useState } from "react";
// import { Link } from "react-router-dom";

// export default function Header() {
//     const [isOpen, setIsOpen] = useState(false);
//     const [isHaqqimizdaOpen, setIsHaqqimizdaOpen] = useState(false);
//     const [isElmiFealiyyetOpen, setIsElmiFealiyyetOpen] = useState(false);

//     return (
//         <header className="bg-[#0D1F4F] shadow-md sticky top-0 z-50">
//             <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
//                 <div className="flex items-center gap-4">
//                     <img src="/mathematics_research_lab_logo2.jpg" alt="Logo" className="w-18 h-20 rounded-xl h-auto" />
//                     <div className="flex flex-col">
//                         <span className="text-white text-lg">Azerbaijan State of Oil and Industry University</span>
//                         <span className="text-xl font-bold text-white">Mathematics Research Center</span>
//                     </div>
//                 </div>

//                 <nav className="hidden md:flex gap-6 text-sm text-gray-700 font-medium">
//                     <div
//                         className="relative"
//                         onMouseEnter={() => setIsHaqqimizdaOpen(true)}
//                         onMouseLeave={() => setIsHaqqimizdaOpen(false)}
//                     >
//                         <h3 className="hover:text-purple-600 cursor-pointer">Haqqımızda</h3>
//                         {isHaqqimizdaOpen && (
//                             <div className="absolute pt-4 bg-white shadow-xl rounded-md p-6 flex justify-center w-[700px] gap-10 z-40">
//                                 <div>
//                                     <Link to="/haqqimizda/xos-gelmisiniz" className="block text-gray-700 hover:text-purple-600 mb-1">Xoş gəlmisiniz</Link>
//                                     <Link to="/haqqimizda/merkezin-missiyasi" className="block text-gray-700 hover:text-purple-600 mb-1">Mərkəzin missiyası</Link>
//                                 </div>
//                                 <div>
//                                     <Link to="/haqqimizda/elmi-meslehet-surasi" className="block text-gray-700 hover:text-purple-600 mb-1">Elmi Məsləhər şurası</Link>
//                                 </div>
//                                 <div>
//                                     <Link to="/haqqimizda/emekdaslar" className="block text-gray-700 hover:text-purple-600 mb-1">Əməkdaşlar</Link>
//                                     <Link to="/haqqimizda/ziyaretciler" className="block text-gray-700 hover:text-purple-600">Ziyarətçilər</Link>
//                                 </div>
//                                 <div>
//                                     <Link to="/haqqimizda/muraciet" className="block text-gray-700 hover:text-purple-600 mb-1">Müraciət</Link>
//                                     <Link to="/haqqimizda/media-kit" className="block text-gray-700 hover:text-purple-600">Media-KİT</Link>
//                                 </div>
//                             </div>
//                         )}
//                     </div>

//                     <div
//                         className="relative"
//                         onMouseEnter={() => setIsElmiFealiyyetOpen(true)}
//                         onMouseLeave={() => setIsElmiFealiyyetOpen(false)}
//                     >
//                         <h3 className="hover:text-purple-600">Elmi Fəaliyyət</h3>
//                         {isElmiFealiyyetOpen && (
//                             <div className="absolute left-0 mt-2 bg-white shadow-xl rounded-md p-6 flex gap-10 z-40">
//                                 <div>
//                                     <Link to="/elmi-fealiyyet/tedbirler" className="block font-semibold text-gray-500 mb-2 hover:text-purple-600">Bütün Tədbirlər</Link>
//                                     <Link to="/elmi-fealiyyet/seminarlar" className="block text-gray-700 hover:text-purple-600 mb-1">Seminarlar</Link>
//                                     <Link to="/elmi-fealiyyet/konfranslar" className="block text-gray-700 hover:text-purple-600">Konfranslar</Link>
//                                 </div>
//                                 <div>
//                                     <Link to="/elmi-fealiyyet/yay-mektebi" className="block font-semibold text-gray-500 mb-2 hover:text-purple-600">Yay Məktəbi</Link>
//                                     <Link to="/elmi-fealiyyet/kurslar" className="block text-gray-700 hover:text-purple-600">Kurslar</Link>
//                                 </div>
//                                 <div>
//                                     <Link to="/elmi-fealiyyet/tedqiqat-neticeleri" className="block font-semibold text-gray-500 hover:text-purple-600">Tədqiqat Nəticələri</Link>
//                                 </div>
//                             </div>
//                         )}
//                     </div>

//                     <Link to={"/xeberler"} className="hover:text-purple-600">Xəbərlər</Link>
//                     <Link to={"/elaqe"} className="hover:text-purple-600">Əlaqə</Link>
//                 </nav>

//                 <button
//                     onClick={() => setIsOpen(!isOpen)}
//                     className="md:hidden text-purple-700"
//                 >
//                     <Menu size={24} />
//                 </button>
//             </div>

//             {isOpen && (
//                 <div className="md:hidden bg-white px-4 pb-4 shadow-sm">
//                     <nav className="flex flex-col gap-3 text-sm text-gray-700 font-medium">
//                         <a href="#" className="hover:text-purple-600">Ana səhifə</a>
//                         <a href="#" className="hover:text-purple-600">Haqqımızda</a>
//                         <a href="#" className="hover:text-purple-600">Elmi Fəaliyyət</a>
//                         <a href="#" className="hover:text-purple-600">Əlaqə</a>
//                     </nav>
//                 </div>
//             )}
//         </header>
//     );
// }
import { Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isHaqqimizdaOpen, setIsHaqqimizdaOpen] = useState(false);
    const [isElmiFealiyyetOpen, setIsElmiFealiyyetOpen] = useState(false);

    return (
        <header className="bg-[#0D1F4F] shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                {/* Logo and Title */}
                <div className="flex items-center gap-4">
                    <img
                        src="/mathematics_research_lab_logo2.jpg"
                        alt="Logo"
                        className="w-16 h-16 rounded-md"
                    />
                    <div className="flex flex-col">
                        <span className="text-white text-sm md:text-base">
                            Azerbaijan State Oil and Industry University
                        </span>
                        <span className="text-xl font-bold text-white">
                            Mathematics Research Center
                        </span>
                    </div>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex gap-8 text-sm text-white font-medium relative">
                    {/* Haqqımızda */}
                    <div
                        className="relative"
                        onMouseEnter={() => setIsHaqqimizdaOpen(true)}
                        onMouseLeave={() => setIsHaqqimizdaOpen(false)}
                    >
                        <h3 className="cursor-pointer hover:text-gray-200 py-5 transition-colors duration-200">
                            Haqqımızda
                        </h3>
                        {isHaqqimizdaOpen && (
                            <div className="absolute top-10 left-0 bg-white text-[#0D1F4F] shadow-lg rounded-md p-6 grid grid-cols-2 gap-6 w-[550px] transition-all duration-300 ease-in-out z-40">
                                <div>
                                    <Link to="/haqqimizda/xos-gelmisiniz" className="block hover:bg-gray-100 px-2 py-1 rounded">Xoş gəlmisiniz</Link>
                                    <Link to="/haqqimizda/merkezin-missiyasi" className="block hover:bg-gray-100 px-2 py-1 rounded">Mərkəzin missiyası</Link>
                                </div>
                                <div>
                                    <Link to="/haqqimizda/elmi-meslehet-surasi" className="block hover:bg-gray-100 px-2 py-1 rounded">Elmi Məsləhət şurası</Link>
                                </div>
                                <div>
                                    <Link to="/haqqimizda/emekdaslar" className="block hover:bg-gray-100 px-2 py-1 rounded">Əməkdaşlar</Link>
                                    <Link to="/haqqimizda/ziyaretciler" className="block hover:bg-gray-100 px-2 py-1 rounded">Ziyarətçilər</Link>
                                </div>
                                <div>
                                    <Link to="/haqqimizda/muraciet" className="block hover:bg-gray-100 px-2 py-1 rounded">Müraciət</Link>
                                    <Link to="/haqqimizda/media-kit" className="block hover:bg-gray-100 px-2 py-1 rounded">Media-KİT</Link>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Elmi Fəaliyyət */}
                    <div
                        className="relative"
                        onMouseEnter={() => setIsElmiFealiyyetOpen(true)}
                        onMouseLeave={() => setIsElmiFealiyyetOpen(false)}
                    >
                        <h3 className="cursor-pointer hover:text-gray-200 py-5 transition-colors duration-200">
                            Elmi Fəaliyyət
                        </h3>
                        {isElmiFealiyyetOpen && (
                            <div className="absolute top-10 left-0 bg-white text-[#0D1F4F] shadow-lg rounded-md p-6 grid grid-cols-3 gap-6 w-[650px] transition-all duration-300 ease-in-out z-40">
                                <div>
                                    <Link to="/elmi-fealiyyet/tedbirler" className="block font-semibold hover:bg-gray-100 px-2 py-1 rounded">Bütün Tədbirlər</Link>
                                    <Link to="/elmi-fealiyyet/seminarlar" className="block hover:bg-gray-100 px-2 py-1 rounded">Seminarlar</Link>
                                    <Link to="/elmi-fealiyyet/konfranslar" className="block hover:bg-gray-100 px-2 py-1 rounded">Konfranslar</Link>
                                </div>
                                <div>
                                    <Link to="/elmi-fealiyyet/yay-mektebi" className="block font-semibold hover:bg-gray-100 px-2 py-1 rounded">Yay Məktəbi</Link>
                                    <Link to="/elmi-fealiyyet/kurslar" className="block hover:bg-gray-100 px-2 py-1 rounded">Kurslar</Link>
                                </div>
                                <div>
                                    <Link to="/elmi-fealiyyet/tedqiqat-neticeleri" className="block font-semibold hover:bg-gray-100 px-2 py-1 rounded">Tədqiqat Nəticələri</Link>
                                </div>
                            </div>
                        )}
                    </div>

                    <Link to="/xeberler" className="hover:text-gray-200 transition-colors duration-200">Xəbərlər</Link>
                    <Link to="/elaqe" className="hover:text-gray-200 transition-colors duration-200">Əlaqə</Link>
                </nav>

                {/* Mobile menu toggle */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-white"
                >
                    <Menu size={28} />
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-[#0D1F4F] px-6 py-4 shadow-inner">
                    <nav className="flex flex-col gap-4 text-white font-medium text-sm">
                        <Link to="/" className="hover:text-gray-300">Ana səhifə</Link>
                        <Link to="/haqqimizda" className="hover:text-gray-300">Haqqımızda</Link>
                        <Link to="/elmi-fealiyyet" className="hover:text-gray-300">Elmi Fəaliyyət</Link>
                        <Link to="/xeberler" className="hover:text-gray-300">Xəbərlər</Link>
                        <Link to="/elaqe" className="hover:text-gray-300">Əlaqə</Link>
                    </nav>
                </div>
            )}
        </header>
    );
}
