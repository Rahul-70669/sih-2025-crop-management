import { Link } from 'react-router';

export const Footer = () => {
    return (
        <footer className="w-full bg-neutral-cream dark:bg-[#1a2e22] border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6 py-12 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    {/* Brand & Description */}
                    <div className="flex flex-col items-center md:items-start space-y-4 max-w-xs text-center md:text-left">
                        <div className="flex items-center gap-2">
                            <div className="w-30 h-8 bg-primary rounded-lg flex items-center justify-center text-white">
                                <span className="material-symbols-rounded text-[20px]">agriculture</span>
                            </div>
                            <span className="text-xl font-bold text-text-dark dark:text-white tracking-tight">FarmMitra</span>
                        </div>
                        <p className="text-sm text-text-muted dark:text-gray-400 leading-relaxed">
                            Personalized AI crop advisory for a sustainable future. Empowering farmers across India.
                        </p>
                    </div>

                    {/* Navigation Links */}
                    <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-medium text-text-muted dark:text-gray-300">
                        <Link className="hover:text-primary transition-colors duration-200" to="/">Home</Link>
                        <Link className="hover:text-primary transition-colors duration-200" to="/advisory">Advisory</Link>
                        <Link className="hover:text-primary transition-colors duration-200" to="/market-prices">Market</Link>
                        <Link className="hover:text-primary transition-colors duration-200" to="/pest-detection">Pest Detection</Link>
                        <Link className="hover:text-primary transition-colors duration-200" to="/profile">Profile</Link>
                    </nav>

                    {/* Social & Language */}
                    <div className="flex flex-col items-center md:items-end gap-4">
                        <div className="flex items-center gap-4">
                            <a aria-label="WhatsApp" className="group bg-white dark:bg-gray-800 p-2 rounded-full shadow-sm border border-gray-100 dark:border-gray-700 hover:border-primary/50 transition-all duration-300" href="#">
                                <span className="material-symbols-rounded text-green-600 group-hover:scale-110 transition-transform">chat</span>
                            </a>
                            <a aria-label="YouTube" className="group bg-white dark:bg-gray-800 p-2 rounded-full shadow-sm border border-gray-100 dark:border-gray-700 hover:border-primary/50 transition-all duration-300" href="#">
                                <span className="material-symbols-rounded text-red-600 group-hover:scale-110 transition-transform">play_circle</span>
                            </a>
                        </div>
                        {/* Language Selector Hint */}
                        <button className="flex items-center gap-2 text-xs font-medium text-text-muted dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">
                            <span className="material-symbols-rounded text-[16px]">language</span>
                            <span>English (IN)</span>
                            <span className="material-symbols-rounded text-[14px]">expand_more</span>
                        </button>
                    </div>
                </div>

                {/* Divider */}
                <div className="my-8 border-t border-gray-200/60 dark:border-gray-700"></div>

                {/* Bottom Copyright */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-text-muted dark:text-gray-500">
                    <p className="text-center md:text-left">© 2023 FarmMitra. All rights reserved.</p>
                    <div className="flex gap-6">
                        <span className="flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                            System Operational
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
};
export default Footer;
