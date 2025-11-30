import { PropertyProps } from "@/interfaces";
import STAR_IMAGE from '@/public/assets/images/List 1.png'
import Image from "next/image";

interface Props{
    property: PropertyProps;
}

const PropertyCard: React.FC<Props> = ({property})=>{
    return(
        <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition p-4">
            <div className="relative h-60 w-full">
                <Image src={property.image} alt={property.name} fill className="object-cover" />
                {property.discount && (
                    <span className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 rounded text-sm">
                        {property.discount}
                    </span>
                )}
            </div>
            <div>
                <h2 className="text-lg font-semibold">{property.name}</h2>
                <p className="text-gray-500 text-sm">{property.address.city}, {property.address.country}</p>
                <p className="mt-2 font-bold">{property.price}/night</p>
                <p>{property.rating}<Image src={STAR_IMAGE} alt="star image" loading="eager"/></p>
            </div>
        </div>
    )
}

export default PropertyCard;