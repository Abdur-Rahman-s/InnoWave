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
        <section className='bg-[#FAFAFA]'>
            <div id='Dashboard' className='pt-8 lg:container mx-auto'>
                <div className='flex flex-wrap justify-center lg:justify-start gap-6'>
                    {properties.map((property, index) => (
                        <Card
                            key={index}
                            image={property.image}
                            title={property.title}
                            description={property.description}
                            price={property.price}
                            className=""
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
