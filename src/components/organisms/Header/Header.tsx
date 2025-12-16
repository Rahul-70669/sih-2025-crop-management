import { useState } from 'react';

export const Header = () => {
    const [language, setLanguage] = useState('English');

    return (
        <header className="sticky top-0 z-50 w-full border-b border-[#e7f3ec] dark:border-[#1e3a29] bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md">
            <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Logo Section */}
                <div className="flex items-center gap-2 group cursor-pointer">
                    {/* Leaf Icon */}
                    <div className="relative flex items-center justify-center">
                        <span className="material-symbols-outlined text-primary text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                            eco
                        </span>
                    </div>
                    <h2 className="text-xl font-bold tracking-tight text-[#0d1b13] dark:text-white sm:text-2xl">
                        FarmMitra
                    </h2>
                </div>

                {/* Desktop Navigation Links */}
                <nav className="hidden md:flex flex-1 items-center justify-center gap-8 px-8">
                    <a href="#" className="text-sm font-semibold text-[#0d1b13] dark:text-gray-200 hover:text-primary dark:hover:text-primary transition-colors">
                        Home
                    </a>
                    <a href="#" className="text-sm font-semibold text-[#0d1b13] dark:text-gray-200 hover:text-primary dark:hover:text-primary transition-colors">
                        Advisory
                    </a>
                    <a href="#" className="text-sm font-semibold text-[#0d1b13] dark:text-gray-200 hover:text-primary dark:hover:text-primary transition-colors">
                        My Crops
                    </a>
                    <a href="#" className="text-sm font-semibold text-[#0d1b13] dark:text-gray-200 hover:text-primary dark:hover:text-primary transition-colors">
                        Profile
                    </a>
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
                                onChange={(e) => setLanguage(e.target.value)}
                                className="hidden peer"
                            />
                            <span className="text-xs font-bold text-gray-500 peer-checked:text-[#0d1b13] dark:text-gray-400 dark:peer-checked:text-white">
                                English
                            </span>
                        </label>
                        <label className="cursor-pointer h-full px-3.5 flex items-center justify-center rounded-lg transition-all has-[:checked]:bg-white dark:has-[:checked]:bg-background-dark has-[:checked]:shadow-[0_1px_2px_rgba(0,0,0,0.1)]">
                            <input
                                type="radio"
                                name="language_toggle"
                                value="Hindi"
                                checked={language === 'Hindi'}
                                onChange={(e) => setLanguage(e.target.value)}
                                className="hidden peer"
                            />
                            <span className="text-xs font-bold text-gray-500 peer-checked:text-[#0d1b13] dark:text-gray-400 dark:peer-checked:text-white">
                                हिंदी
                            </span>
                        </label>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-3">
                        <button className="flex h-10 min-w-[84px] cursor-pointer items-center justify-center rounded-xl bg-primary px-4 text-[#0d1b13] text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors shadow-sm shadow-primary/25">
                            <span className="truncate">Log In</span>
                        </button>

                        {/* Search Icon */}
                        <button className="flex size-10 items-center justify-center rounded-xl text-[#0d1b13] dark:text-white hover:bg-surface-light dark:hover:bg-surface-dark transition-colors">
                            <span className="material-symbols-outlined">search</span>
                        </button>

                        {/* Mobile Menu Button */}
                        <button className="flex md:hidden size-10 items-center justify-center rounded-xl text-[#0d1b13] dark:text-white hover:bg-surface-light dark:hover:bg-surface-dark transition-colors">
                            <span className="material-symbols-outlined">menu</span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;