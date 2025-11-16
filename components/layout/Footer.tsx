const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-sm">A</span>
                            </div>
                            <span className="text-xl font-bold">airbnb</span>
                        </div>
                        <p className="text-gray-400 text-sm mb-6">
                            Book unique homes and experiences all over the world.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                •
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                Privacy
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                Terms
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                Sitemap
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                Company Details
                            </a>
                        </div>
                    </div>

                    {/* Support Links */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-100 mb-4">Support</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">AirCover</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Safety information</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Cancellation options</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Our COVID-19 Response</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Report a neighborhood concern</a></li>
                        </ul>
                    </div>

                    {/* Hosting Links */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-100 mb-4">Hosting</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-white transition-colors">Airbnb your home</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Host an Online Experience</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Responsible hosting</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Resource Center</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Community center</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400">
                    <span>&copy; 2025 Airbnb, Inc.</span>
                    <div className="flex space-x-6 mt-4 sm:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Privacy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms</a>
                        <a href="#" className="hover:text-white transition-colors">Sitemap</a>
                        <a href="#" className="hover:text-white transition-colors">Company Details</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;