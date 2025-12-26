import { useState } from 'react';
import { Link, NavLink } from 'react-router';

export const Header = () => {
    const [language, setLanguage] = useState('English');

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'Advisory', path: '/advisory' },
        { name: 'Market', path: '/market-prices' },
        { name: 'Pest Detection', path: '/pest-detection' },
        { name: 'Profile', path: '/profile' },
    ];

    const isLoggedIn = localStorage.getItem('is_logged_in') === 'true';
    const userProfile = JSON.parse(localStorage.getItem('user_profile') || '{}');

    return (
        <header className="sticky top-0 z-50 w-full border-b border-[#e7f3ec] dark:border-[#1e3a29] bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md">
            <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Logo Section */}
                <Link to="/" className="flex items-center gap-2 group cursor-pointer text-inherit no-underline">
                    {/* Leaf Icon */}
                    <div className="relative flex items-center justify-center">
                        <span className="material-symbols-rounded text-primary text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                            eco
                        </span>
                    </div>
                    <h2 className="text-xl font-bold tracking-tight text-[#0d1b13] dark:text-white sm:text-2xl">
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
                                    : 'text-[#0d1b13] dark:text-gray-200 hover:text-primary dark:hover:text-primary'
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
                        {isLoggedIn ? (
                            <Link to="/profile" className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-surface-light dark:bg-surface-dark hover:bg-primary/10 transition-colors">
                                <span className="material-symbols-rounded text-primary">account_circle</span>
                                <span className="text-sm font-bold truncate max-w-[100px]">{userProfile.name}</span>
                            </Link>
                        ) : (
                            <Link to="/onboarding">
                                <button className="flex h-10 min-w-[84px] cursor-pointer items-center justify-center rounded-xl bg-primary px-4 text-[#0d1b13] text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors shadow-sm shadow-primary/25">
                                    <span className="truncate">Sign Up</span>
                                </button>
                            </Link>
                        )}
                        {/* Search Icon */}
                        <button className="flex size-10 items-center justify-center rounded-xl text-[#0d1b13] dark:text-white hover:bg-surface-light dark:hover:bg-surface-dark transition-colors">
                            <span className="material-symbols-rounded">search</span>
                        </button>

                        {/* Mobile Menu Button */}
                        <button className="flex md:hidden size-10 items-center justify-center rounded-xl text-[#0d1b13] dark:text-white hover:bg-surface-light dark:hover:bg-surface-dark transition-colors">
                            <span className="material-symbols-rounded">menu</span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;