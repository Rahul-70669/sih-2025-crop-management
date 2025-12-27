import { useState } from 'react';
import { Link, NavLink } from 'react-router';
import { useTranslation } from 'react-i18next';

export const Header = () => {
    const { t, i18n } = useTranslation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const language = i18n.language.startsWith('hi') ? 'Hindi' : 'English';

    const handleLanguageChange = (lang: string) => {
        const langCode = lang === 'Hindi' ? 'hi' : 'en';
        i18n.changeLanguage(langCode);
    };

    const navItems = [
        { name: t('common.home'), path: '/' },
        { name: t('common.advisory'), path: '/advisory' },
        { name: t('common.market'), path: '/market-prices' },
        { name: t('common.pestDetection'), path: '/pest-detection' },
        { name: t('common.profile'), path: '/profile' },
    ];

    const isLoggedIn = localStorage.getItem('is_logged_in') === 'true';
    const userProfile = JSON.parse(localStorage.getItem('user_profile') || '{}');

    return (
        <header className="sticky top-0 z-50 w-full border-b border-[#e7f3ec] dark:border-[#1e3a29] bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md">
            <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Logo Section */}
                <Link to="/" className="flex items-center gap-2 group cursor-pointer text-black no-underline">
                    {/* Leaf Icon */}
                    <div className="relative flex items-center justify-center">
                        <span className="material-symbols-rounded text-primary text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                            eco
                        </span>
                    </div>
                    <h2 className="text-xl font-bold tracking-tight text-black dark:text-black sm:text-2xl">
                        FarmMitra
                    </h2>
                </Link>

                {/* Desktop Navigation Links */}
                <nav className="hidden lg:flex flex-1 items-center justify-center gap-6 px-8">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            className={({ isActive }) => 
                                `text-sm font-semibold transition-colors ${
                                    isActive 
                                    ? 'text-primary' 
                                    : 'text-black dark:text-black hover:text-primary dark:hover:text-primary'
                                }`
                            }
                        >
                            {item.name}
                        </NavLink>
                    ))}
                </nav>

                {/* Right Controls */}
                <div className="flex items-center gap-4">
                    {/* Language Toggle (Segmented Button) */}
                    <div className="hidden sm:flex h-10 items-center rounded-xl bg-surface-light dark:bg-surface-dark p-1">
                        <label className="cursor-pointer h-full px-3.5 flex items-center justify-center rounded-lg transition-all has-[:checked]:bg-white dark:has-[:checked]:bg-background-dark has-[:checked]:shadow-[0_1px_2px_rgba(0,0,0,0.1)]">
                            <input
                                type="radio"
                                name="language_toggle"
                                value="English"
                                checked={language === 'English'}
                                onChange={(e) => handleLanguageChange(e.target.value)}
                                className="hidden peer"
                            />
                            <span className="text-xs font-bold text-black peer-checked:text-black dark:text-black dark:peer-checked:text-black">
                                English
                            </span>
                        </label>
                        <label className="cursor-pointer h-full px-3.5 flex items-center justify-center rounded-lg transition-all has-[:checked]:bg-white dark:has-[:checked]:bg-background-dark has-[:checked]:shadow-[0_1px_2px_rgba(0,0,0,0.1)]">
                            <input
                                type="radio"
                                name="language_toggle"
                                value="Hindi"
                                checked={language === 'Hindi'}
                                onChange={(e) => handleLanguageChange(e.target.value)}
                                className="hidden peer"
                            />
                            <span className="text-xs font-bold text-black peer-checked:text-black dark:text-black dark:peer-checked:text-black">
                                हिंदी
                            </span>
                        </label>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-3">
                        {isLoggedIn ? (
                            <Link to="/profile" className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-surface-light dark:bg-surface-dark hover:bg-primary/10 transition-colors">
                                <span className="material-symbols-rounded text-primary">account_circle</span>
                                <span className="text-sm font-bold truncate max-w-[100px] text-black dark:text-black">{userProfile.name}</span>
                            </Link>
                        ) : (
                            <Link to="/onboarding" className="hidden sm:block">
                                <button className="flex h-10 min-w-[84px] cursor-pointer items-center justify-center rounded-xl bg-primary px-4 text-black text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors shadow-sm shadow-primary/25">
                                    <span className="truncate">{t('common.signUp')}</span>
                                </button>
                            </Link>
                        )}
                        {/* Search Icon */}
                        <button className="flex size-10 items-center justify-center rounded-xl text-black dark:text-black hover:bg-surface-light dark:hover:bg-surface-dark transition-colors">
                            <span className="material-symbols-rounded">search</span>
                        </button>

                        {/* Mobile Menu Button */}
                        <button 
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="flex lg:hidden size-10 items-center justify-center rounded-xl text-black dark:text-black hover:bg-surface-light dark:hover:bg-surface-dark transition-colors"
                        >
                            <span className="material-symbols-rounded">{isMenuOpen ? 'close' : 'menu'}</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            {isMenuOpen && (
                <div className="lg:hidden border-t border-[#e7f3ec] dark:border-[#1e3a29] bg-background-light dark:bg-background-dark px-4 py-4 space-y-4">
                    <nav className="flex flex-col gap-4">
                        {navItems.map((item) => (
                            <NavLink
                                key={item.path}
                                to={item.path}
                                onClick={() => setIsMenuOpen(false)}
                                className={({ isActive }) => 
                                    `text-base font-semibold transition-colors ${
                                        isActive 
                                        ? 'text-primary' 
                                        : 'text-black dark:text-black'
                                    }`
                                }
                            >
                                {item.name}
                            </NavLink>
                        ))}
                    </nav>

                    {/* Mobile Language Toggle */}
                    <div className="flex h-12 items-center rounded-xl bg-surface-light dark:bg-surface-dark p-1 sm:hidden">
                        <label className="flex-1 cursor-pointer h-full flex items-center justify-center rounded-lg transition-all has-[:checked]:bg-white dark:has-[:checked]:bg-background-dark">
                            <input
                                type="radio"
                                name="mobile_language_toggle"
                                value="English"
                                checked={language === 'English'}
                                onChange={(e) => handleLanguageChange(e.target.value)}
                                className="hidden peer"
                            />
                            <span className="text-sm font-bold text-black peer-checked:text-black dark:text-black dark:peer-checked:text-black">
                                English
                            </span>
                        </label>
                        <label className="flex-1 cursor-pointer h-full flex items-center justify-center rounded-lg transition-all has-[:checked]:bg-white dark:has-[:checked]:bg-background-dark">
                            <input
                                type="radio"
                                name="mobile_language_toggle"
                                value="Hindi"
                                checked={language === 'Hindi'}
                                onChange={(e) => handleLanguageChange(e.target.value)}
                                className="hidden peer"
                            />
                            <span className="text-sm font-bold text-black peer-checked:text-black dark:text-black dark:peer-checked:text-black">
                                हिंदी
                            </span>
                        </label>
                    </div>

                    {/* Mobile Profile/Sign Up */}
                    <div className="pt-4 border-t border-[#e7f3ec] dark:border-[#1e3a29] sm:hidden">
                        {isLoggedIn ? (
                            <Link 
                                to="/profile" 
                                onClick={() => setIsMenuOpen(false)}
                                className="flex items-center gap-3 px-2 py-2 text-black dark:text-black"
                            >
                                <span className="material-symbols-rounded text-primary">account_circle</span>
                                <span className="font-bold text-black dark:text-black">{userProfile.name}</span>
                            </Link>
                        ) : (
                            <Link 
                                to="/onboarding" 
                                onClick={() => setIsMenuOpen(false)}
                                className="block w-full"
                            >
                                <button className="w-full h-12 rounded-xl bg-primary text-black font-bold">
                                    {t('common.signUp')}
                                </button>
                            </Link>
                        )}
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;