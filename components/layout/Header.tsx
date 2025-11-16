'use client';

import { useState } from 'react';
import { ACCOMMODATION_TYPES } from '@/constants';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    {/* Logo */}
                    <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-sm">A</span>
                        </div>
                        <span className="text-xl font-bold text-gray-900">airbnb</span>
                    </div>

                    {/* Desktop Search Bar */}
                    <div className="hidden md:flex flex-1 max-w-md mx-8">
                        <div className="flex bg-white border border-gray-300 rounded-full shadow-sm overflow-hidden">
                            <div className="flex items-center px-4 text-gray-500">
                            </div>
                            <input
                                type="text"
                                placeholder="Where are you going?"
                                className="flex-1 px-4 py-2 outline-none text-sm"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-6">
                        <div className="relative group">
                            <button className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 px-3 py-2 rounded-full">
                                <span className="text-sm font-medium">Accommodation</span>
                            </button>
                            <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                                <div className="py-1">
                                    {ACCOMMODATION_TYPES.map((type) => (
                                        <a
                                            key={type}
                                            href="#"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        >
                                            {type}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <button className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-full">
                        </button>
                        <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors">
                            Sign up
                        </button>
                        <button className="border border-gray-300 hover:bg-gray-50 text-gray-700 px-4 py-2 rounded-full text-sm font-medium transition-colors">
                            Sign in
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden flex items-center p-2 rounded-full hover:bg-gray-100"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                    </button>
                </div>

                {/* Mobile Search Bar */}
                <div className="md:hidden mb-4">
                    <div className="flex bg-white border border-gray-300 rounded-full shadow-sm overflow-hidden">
                        <div className="flex items-center px-4 text-gray-500">
                        </div>
                        <input
                            type="text"
                            placeholder="Where are you going?"
                            className="flex-1 px-4 py-3 outline-none text-sm"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;