import { PROPERTYLISTINGSAMPLE } from "@/constants";
import Image from "next/image";
import HERO_IMAGE from '@/public/assets/images/image 19.png';
import PropertyCard from "@/components/common/PropertyCard";

const Home: React.FC = ()=>{
  return(
    
    <div className="max-w-full mx-auto">
      {/* <Hero Section/> */}
      <section className="relative h-[60vh] md:h-[70vh] w-full bg-cover bg-center flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-black opacity-100">
          <Image
          src={HERO_IMAGE}
          alt="House Image"
          fill
          className="object-cover"
          loading="eager"
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">Find your favorite place here!</h1>
          <p className="text-xl sm:text-2xl font-medium drop-shadow-md">The best prices for over 2 million properties worldwide</p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="max-w-7xl mx-auto my-8 px-4 flex flex-wrap gap-3">
  {["Top Villa", "Self Checkin", "Luxury", "Beachfront", "Mountain"].map(
    (filter) => (
      <span
        key={filter}
        className="px-4 py-2 bg-gray-100 rounded-full cursor-pointer hover:bg-blue-100 transition"
      >
        {filter}
      </span>
    )
  )}
</section>


      {/* Listing Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROPERTYLISTINGSAMPLE.map((property)=>(
          <PropertyCard key={property.name} property={property}/>
        ))}
      </section>
      
    </div>
  )
};

export default Home;