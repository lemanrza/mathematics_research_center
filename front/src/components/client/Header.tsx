import { Menu, X, ChevronDown, Globe } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Header() {
    const { t, i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [isHaqqimizdaOpen, setIsHaqqimizdaOpen] = useState(false);
    const [isElmiFealiyyetOpen, setIsElmiFealiyyetOpen] = useState(false);
    const [isLanguageOpen, setIsLanguageOpen] = useState(false);
    const [currentLanguage, setCurrentLanguage] = useState(i18n.language || "az");
    const [_, setActiveDropdown] = useState<string | null>(null);
    useEffect(() => {
        setCurrentLanguage(i18n.language);
    }, [i18n.language]);

    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setActiveDropdown(null);
                setIsHaqqimizdaOpen(false);
                setIsElmiFealiyyetOpen(false);
                setIsLanguageOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Close mobile menu when screen becomes larger
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleLanguageChange = (lang: string) => {
        i18n.changeLanguage(lang);
        localStorage.setItem('language', lang); // Store the selected language
        setCurrentLanguage(lang); // Update the currentLanguage state
        setIsLanguageOpen(false); // Close the language dropdown
    };

    const handleLinkClick = () => {
        setIsOpen(false);
        setActiveDropdown(null);
        setIsHaqqimizdaOpen(false);
        setIsElmiFealiyyetOpen(false);
        setIsLanguageOpen(false);
    };

    const languages = [
        { code: 'az', name: 'Azərbaycan', flag: '🇦🇿' },
        { code: 'en', name: 'English', flag: '🇺🇸' },
    ];

    return (
        <header className="bg-[#0D1F4F] shadow-lg sticky top-0 z-50" ref={dropdownRef}>
            <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                <Link to={"/"} onClick={handleLinkClick}>
                    <div className="flex items-center gap-4">
                        <img
                            src="/mathematics_research_lab_logo2.jpg"
                            alt="Logo"
                            className="w-16 h-16 rounded-md"
                        />
                        <div className="flex flex-col">
                            <span className="text-white text-sm md:text-base">
                                {t("Azərbaycan Dövlət Neft və Sənaye Universiteti")}
                            </span>
                            <span className="text-xl font-bold text-white">
                                Mathematics Research Center
                            </span>
                        </div>
                    </div>
                </Link>

                <div className="flex items-center gap-4">
                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex gap-8 text-sm text-white font-medium relative">
                        {/* Haqqımızda */}
                        <div className="relative">
                            <button
                                onMouseEnter={() => {
                                    setIsHaqqimizdaOpen(true);
                                    setActiveDropdown('haqqimizda');
                                }}
                                onMouseLeave={() => {
                                    setIsHaqqimizdaOpen(false);
                                    setActiveDropdown(null);
                                }}
                                className="flex items-center gap-1 cursor-pointer hover:text-gray-200 py-5 transition-colors duration-200 group"
                            >
                                {t("haqqimizda")}
                                <ChevronDown
                                    size={16}
                                    className={`transition-transform duration-200 ${isHaqqimizdaOpen ? 'rotate-180' : ''} group-hover:text-gray-200`}
                                />
                            </button>

                            {isHaqqimizdaOpen && (
                                <div
                                    className="absolute top-full left-0 bg-white text-[#0D1F4F] shadow-xl rounded-lg p-6 w-[550px] transition-all duration-300 ease-out transform opacity-100 translate-y-0 z-50"
                                    onMouseEnter={() => {
                                        setIsHaqqimizdaOpen(true);
                                        setActiveDropdown('haqqimizda');
                                    }}
                                    onMouseLeave={() => {
                                        setIsHaqqimizdaOpen(false);
                                        setActiveDropdown(null);
                                    }}
                                >
                                    <div className="grid grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <Link
                                                to="/haqqimizda/xos-gelmisiniz"
                                                onClick={handleLinkClick}
                                                className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-all duration-200"
                                            >
                                                {t("xos_gelmisiniz")}
                                            </Link>
                                            <Link
                                                to="/haqqimizda/merkezin-missiyasi"
                                                onClick={handleLinkClick}
                                                className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-all duration-200"
                                            >
                                                {t("merkezin_missiyasi")}
                                            </Link>
                                            <Link
                                                to="/haqqimizda/elmi-meslehet-surasi"
                                                onClick={handleLinkClick}
                                                className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-all duration-200"
                                            >
                                                {t("Elmi Məsləhət şurası")}
                                            </Link>
                                        </div>
                                        <div className="space-y-2">
                                            <Link
                                                to="/haqqimizda/emekdaslar"
                                                onClick={handleLinkClick}
                                                className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-all duration-200"
                                            >
                                                {t("Əməkdaşlar")}
                                            </Link>
                                            <Link
                                                to="/haqqimizda/ziyaretciler"
                                                onClick={handleLinkClick}
                                                className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-all duration-200"
                                            >
                                                {t("Ziyarətçilər")}
                                            </Link>
                                            <Link
                                                to="/haqqimizda/muraciet"
                                                onClick={handleLinkClick}
                                                className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-all duration-200"
                                            >
                                                {t("Müraciət")}
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Elmi Fəaliyyət */}
                        <div className="relative">
                            <button
                                onMouseEnter={() => {
                                    setIsElmiFealiyyetOpen(true);
                                    setActiveDropdown('elmi');
                                }}
                                onMouseLeave={() => {
                                    setIsElmiFealiyyetOpen(false);
                                    setActiveDropdown(null);
                                }}
                                className="flex items-center gap-1 cursor-pointer hover:text-gray-200 py-5 transition-colors duration-200 group"
                            >
                                {t("elmi_fealiyyet")}
                                <ChevronDown
                                    size={16}
                                    className={`transition-transform duration-200 ${isElmiFealiyyetOpen ? 'rotate-180' : ''} group-hover:text-gray-200`}
                                />
                            </button>

                            {isElmiFealiyyetOpen && (
                                <div
                                    className="absolute top-full left-0 bg-white text-[#0D1F4F] shadow-xl rounded-lg p-6 w-[650px] transition-all duration-300 ease-out transform opacity-100 translate-y-0 z-50"
                                    onMouseEnter={() => {
                                        setIsElmiFealiyyetOpen(true);
                                        setActiveDropdown('elmi');
                                    }}
                                    onMouseLeave={() => {
                                        setIsElmiFealiyyetOpen(false);
                                        setActiveDropdown(null);
                                    }}
                                >
                                    <div className="grid grid-cols-3 gap-6">

                                        <div className="space-y-2">
                                            <Link
                                                to="/elmi-fealiyyet/tedbirler"
                                                onClick={handleLinkClick}
                                                className="block px-3 py-2 rounded-md font-semibold text-[#0D1F4F] hover:bg-blue-50 hover:text-blue-700 transition-all duration-200"
                                            >
                                                {t("Bütün Tədbirlər")}
                                            </Link>
                                            <Link
                                                to="/elmi-fealiyyet/seminarlar"
                                                onClick={handleLinkClick}
                                                className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-all duration-200"
                                            >
                                                {t("Seminarlar")}
                                            </Link>
                                            <Link
                                                to="/elmi-fealiyyet/konfranslar"
                                                onClick={handleLinkClick}
                                                className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-all duration-200"
                                            >
                                                {t("Konfranslar")}
                                            </Link>
                                            <Link
                                                to="/elmi-fealiyyet/yay-mektebi"
                                                onClick={handleLinkClick}
                                                className="block px-3 py-2 rounded-md font-semibold text-[#0D1F4F] hover:bg-blue-50 hover:text-blue-700 transition-all duration-200"
                                            >
                                                {t("Yay Məktəbi")}
                                            </Link>

                                        </div>
                                        <div className="space-y-2">
                                            <Link
                                                to="/elmi-fealiyyet/tedqiqat-qrupu"
                                                onClick={handleLinkClick}
                                                className="block px-3 py-2 rounded-md font-semibold text-[#0D1F4F] hover:bg-blue-50 hover:text-blue-700 transition-all duration-200"
                                            >
                                                {t("Tədqiqat Qrupu")}
                                            </Link>
                                            <Link
                                                to="/elmi-fealiyyet/tedqiqat-proqramlari"
                                                onClick={handleLinkClick}
                                                className="block px-3 py-2 rounded-md font-semibold text-[#0D1F4F] hover:bg-blue-50 hover:text-blue-700 transition-all duration-200"
                                            >
                                                {t("Tədqiqat Proqramları")}
                                            </Link>
                                            <Link
                                                to="/elmi-fealiyyet/tedqiqat-neticeleri"
                                                onClick={handleLinkClick}
                                                className="block px-3 py-2 rounded-md font-semibold text-[#0D1F4F] hover:bg-blue-50 hover:text-blue-700 transition-all duration-200"
                                            >
                                                {t("Tədqiqat Nəticələri")}
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        <Link
                            to="/xeberler"
                            onClick={handleLinkClick}
                            className="hover:text-gray-200 py-5 transition-colors duration-200"
                        >
                            {t("xeberler")}
                        </Link>
                        <Link
                            to="/elaqe"
                            onClick={handleLinkClick}
                            className="hover:text-gray-200 py-5 transition-colors duration-200"
                        >
                            {t("elaqe")}
                        </Link>
                    </nav>

                    {/* Language Selector */}
                    <div className="relative">
                        <button
                            onClick={() => {
                                setIsLanguageOpen(!isLanguageOpen);
                            }}
                            className="hidden md:flex items-center gap-2 text-white hover:text-gray-200 px-3 py-2 rounded-md transition-colors duration-200 border border-white/20 hover:border-white/40"
                        >
                            <Globe size={16} />
                            <span className="text-sm  font-medium">{t(`${currentLanguage}`)}</span>
                            <ChevronDown
                                size={14}
                                className={`transition-transform duration-200 ${isLanguageOpen ? 'rotate-180' : ''}`}
                            />
                        </button>

                        {isLanguageOpen && (
                            <div className="absolute top-full right-0 mt-1 bg-white text-[#0D1F4F] shadow-xl rounded-lg py-2 w-40 z-50">
                                {languages.map((lang) => (
                                    <button
                                        key={lang.code}
                                        onClick={() => handleLanguageChange(lang.code)}
                                        className={`w-full flex items-center gap-3 px-4 py-2 text-sm hover:bg-gray-50 transition-colors duration-200 ${currentLanguage === lang.code ? 'bg-blue-50 text-blue-700 font-medium' : 'text-gray-700'}`}
                                    >
                                        <span>{lang.name}</span>
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>


                    {/* Mobile menu toggle */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors duration-200"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                <div className="bg-[#0D1F4F] px-6 py-4 shadow-inner border-t border-white/10">
                    <nav className="flex flex-col gap-3 text-white font-medium text-sm">
                        <Link
                            to="/"
                            onClick={handleLinkClick}
                            className="py-2 hover:text-gray-300 transition-colors duration-200"
                        >
                            {t("ana_sehife")}
                        </Link>

                        <div className="border-b border-white/10 pb-2">
                            <button
                                onClick={() => {
                                    setIsHaqqimizdaOpen(!isHaqqimizdaOpen);
                                    setActiveDropdown(isHaqqimizdaOpen ? null : 'mobile-haqqimizda');
                                }}
                                className="flex items-center justify-between w-full py-2 hover:text-gray-300 transition-colors duration-200"
                            >
                                {t("haqqimizda")}
                                <ChevronDown
                                    size={16}
                                    className={`transition-transform duration-200 ${isHaqqimizdaOpen ? 'rotate-180' : ''
                                        }`}
                                />
                            </button>
                            {isHaqqimizdaOpen && (
                                <div className="mt-2 ml-4 space-y-1">
                                    <Link
                                        to="/haqqimizda/xos-gelmisiniz"
                                        onClick={handleLinkClick}
                                        className="block py-1 text-gray-300 hover:text-white text-xs transition-colors duration-200"
                                    >
                                       {t("xos_gelmisiniz")}
                                    </Link>
                                    <Link
                                        to="/haqqimizda/merkezin-missiyasi"
                                        onClick={handleLinkClick}
                                        className="block py-1 text-gray-300 hover:text-white text-xs transition-colors duration-200"
                                    >
                                       {t("merkezin_missiyasi")}
                                    </Link>
                                    <Link
                                        to="/haqqimizda/elmi-meslehet-surasi"
                                        onClick={handleLinkClick}
                                        className="block py-1 text-gray-300 hover:text-white text-xs transition-colors duration-200"
                                    >
                                        {t("Elmi Məsləhət şurası")}
                                    </Link>
                                    <Link
                                        to="/haqqimizda/emekdaslar"
                                        onClick={handleLinkClick}
                                        className="block py-1 text-gray-300 hover:text-white text-xs transition-colors duration-200"
                                    >
                                        {t("Əməkdaşlar")}
                                    </Link>
                                    <Link
                                        to="/haqqimizda/ziyaretciler"
                                        onClick={handleLinkClick}
                                        className="block py-1 text-gray-300 hover:text-white text-xs transition-colors duration-200"
                                    >
                                        {t("Ziyarətçilər")}
                                    </Link>
                                    <Link
                                        to="/haqqimizda/muraciet"
                                        onClick={handleLinkClick}
                                        className="block py-1 text-gray-300 hover:text-white text-xs transition-colors duration-200"
                                    >
                                        {t("Müraciət")}
                                    </Link>
                                </div>
                            )}
                        </div>

                        {/* Mobile Dropdown - Elmi Fəaliyyət */}
                        <div className="border-b border-white/10 pb-2">
                            <button
                                onClick={() => {
                                    setIsElmiFealiyyetOpen(!isElmiFealiyyetOpen);
                                    setActiveDropdown(isElmiFealiyyetOpen ? null : 'mobile-elmi');
                                }}
                                className="flex items-center justify-between w-full py-2 hover:text-gray-300 transition-colors duration-200"
                            >
                                {t("elmi_fealiyyet")}
                                <ChevronDown
                                    size={16}
                                    className={`transition-transform duration-200 ${isElmiFealiyyetOpen ? 'rotate-180' : ''
                                        }`}
                                />
                            </button>
                            {isElmiFealiyyetOpen && (
                                <div className="mt-2 ml-4 space-y-1">
                                    <Link
                                        to="/elmi-fealiyyet/tedbirler"
                                        onClick={handleLinkClick}
                                        className="block py-1 text-gray-300 hover:text-white text-xs font-semibold transition-colors duration-200"
                                    >
                                        {t("Bütün Tədbirlər")}
                                    </Link>
                                    <Link
                                        to="/elmi-fealiyyet/seminarlar"
                                        onClick={handleLinkClick}
                                        className="block py-1 text-gray-300 hover:text-white text-xs transition-colors duration-200"
                                    >
                                        {t("Seminarlar")}
                                    </Link>
                                    <Link
                                        to="/elmi-fealiyyet/konfranslar"
                                        onClick={handleLinkClick}
                                        className="block py-1 text-gray-300 hover:text-white text-xs transition-colors duration-200"
                                    >
                                        {t("Konfranslar")}
                                    </Link>
                                    <Link
                                        to="/elmi-fealiyyet/yay-mektebi"
                                        onClick={handleLinkClick}
                                        className="block py-1 text-gray-300 hover:text-white text-xs font-semibold transition-colors duration-200"
                                    >
                                        {t("Yay Məktəbi")}
                                    </Link>
                                    <Link
                                        to="/elmi-fealiyyet/tedqiqat-qrupu"
                                        onClick={handleLinkClick}
                                        className="block py-1 text-gray-300 hover:text-white text-xs transition-colors duration-200"
                                    >
                                        {t("Tədqiqat Qrupu")}
                                    </Link>
                                    <Link
                                        to="/elmi-fealiyyet/tedqiqat-proqramlari"
                                        onClick={handleLinkClick}
                                        className="block py-1 text-gray-300 hover:text-white text-xs font-semibold transition-colors duration-200"
                                    >
                                        {t("Tədqiqat Proqramları")}
                                    </Link>
                                    <Link
                                        to="/elmi-fealiyyet/tedqiqat-neticeleri"
                                        onClick={handleLinkClick}
                                        className="block py-1 text-gray-300 hover:text-white text-xs font-semibold transition-colors duration-200"
                                    >
                                        {t("Tədqiqat Nəticələri")}
                                    </Link>
                                </div>
                            )}
                        </div>

                        <Link
                            to="/xeberler"
                            onClick={handleLinkClick}
                            className="py-2 hover:text-gray-300 transition-colors duration-200"
                        >
                            {t("xeberler")}
                        </Link>
                        <Link
                            to="/elaqe"
                            onClick={handleLinkClick}
                            className="py-2 hover:text-gray-300 transition-colors duration-200"
                        >
                            {t("elaqe")}
                        </Link>

                        {/* Mobile Language Selector */}
                        <div className="border-t border-white/10 pt-3 mt-2">
                            <div className="text-xs text-gray-300 mb-2">Dil seçin:</div>
                            <div className="flex gap-2">
                                {languages.map((lang) => (
                                    <button
                                        key={lang.code}
                                        onClick={() => handleLanguageChange(lang.code)}
                                        className={`flex items-center gap-1 px-3 py-1 rounded-md text-xs transition-colors duration-200 ${currentLanguage === lang.code
                                            ? 'bg-white/20 text-white font-medium'
                                            : 'text-gray-300 hover:text-white hover:bg-white/10'
                                            }`}
                                    >
                                        <span>{lang.flag}</span>
                                        <span>{lang.code}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
}