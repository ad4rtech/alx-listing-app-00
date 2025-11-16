'use client';

import { useState } from 'react';
import Image from 'next/image';
import { PROPERTYLISTINGSAMPLE, HERO_BACKGROUND_IMAGE, FILTER_OPTIONS } from '@/constants';
import Pill from '@/components/ui/Pill';
import PropertyCard from '@/components/PropertyCard';
import { PropertyProps } from '@/interfaces';

export default function Home() {
    const [activeFilter, setActiveFilter] = useState<string | null>(null);
    const [filteredProperties, setFilteredProperties] = useState<PropertyProps[]>(PROPERTYLISTINGSAMPLE);

    const handleFilterClick = (filter: string) => {
        setActiveFilter(prev => prev === filter ? null : filter);

        if (filter === 'All' || !filter) {
            setFilteredProperties(PROPERTYLISTINGSAMPLE);
        } else {
            const filtered = PROPERTYLISTINGSAMPLE.filter(property =>
                property.category.some(cat => cat.toLowerCase().includes(filter.toLowerCase()))
            );
            setFilteredProperties(filtered);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <Image
                    src={HERO_BACKGROUND_IMAGE}
                    alt="Hero background"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <div className="text-center text-white max-w-4xl mx-auto px-4">
                        <h1 className="text-5xl md:text-6xl font-light mb-6">
                            Find your favorite place here!
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-200">
                            The best prices for over 2 million properties worldwide.
                        </p>
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Filters Section */}
                <section className="mb-8">
                    <div className="flex flex-wrap gap-3 mb-6">
                        <Pill
                            label="All"
                            isActive={activeFilter === null || activeFilter === 'All'}
                            onClick={() => handleFilterClick('All')}
                        />
                        {FILTER_OPTIONS.map((filter) => (
                            <Pill
                                key={filter}
                                label={filter}
                                isActive={activeFilter === filter}
                                onClick={() => handleFilterClick(filter)}
                            />
                        ))}
                    </div>

                    {/* Results Count */}
                    <p className="text-sm text-gray-600">
                        Showing {filteredProperties.length} of {PROPERTYLISTINGSAMPLE.length} properties
                    </p>
                </section>

                {/* Listings Section */}
                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredProperties.map((property, index) => (
                        <PropertyCard key={index} property={property} />
                    ))}
                </section>

                {/* Load More Button (if needed) */}
                {filteredProperties.length < PROPERTYLISTINGSAMPLE.length && (
                    <div className="text-center mt-12">
                        <button className="bg-white border border-gray-300 hover:border-gray-400 text-gray-700 px-6 py-3 rounded-full text-sm font-medium transition-colors">
                            Show more properties
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}