
import React from 'react';
import Card from '../Shared/Card'; // Assuming Card is another component you're using.

const Gallery = () => {
    const properties = [
        { image: "/image (1).png", title: "Whitechapel Rd.", description: "Tulare County, Los Angeles, CA 23415", price: "$1,456,654.00" },
        { image: "/image (2).png", title: "Whitechapel Rd.", description: "Tulare County, Los Angeles, CA 23415", price: "$1,234,789.00" },
        { image: "/image (3).png", title: "Tulare County", description: "Tulare County, Los Angeles, CA 23415", price: "$2,345,999.00" },
        { image: "/image (4).png", title: "Tulare County", description: "Tulare County, Los Angeles, CA 23415", price: "$850,000.00" },
        { image: "/image (5).png", title: "Tulare County", description: "Tulare County, Los Angeles, CA 23415", price: "$900,000.00" },
        { image: "/image (6).png", title: "Tulare County", description: "Tulare County, Los Angeles, CA 23415", price: "$1,100,000.00" },
    ];

    return (
        <section className='bg-[#FAFAFA] py-8'>
            <div id='Dashboard' className='lg:container mx-auto px-4'>
                <h2 className="text-3xl font-bold text-center mb-10">Property Listings</h2>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                    {properties.map((property, index) => (
                        <Card
                            key={index}
                            image={property.image}
                            title={property.title}
                            description={property.description}
                            price={property.price}
                            className="transform transition-transform hover:scale-105 hover:shadow-2xl"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
