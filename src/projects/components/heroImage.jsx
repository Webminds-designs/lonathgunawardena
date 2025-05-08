import React from 'react'

export default function heroImage() {

  const products = [
    {
      id: 1,
      name: 'Product 1',
      image: '/images/product1.webp',
    },
    {
      id: 2,
      name: 'Product 2',
      image: '/images/product2.webp',
    },
    {
      id: 3,
      name: 'Product 3',
      image: '/images/product3.webp',
    },
    {
      id: 4,
      name: 'Product 4',
      image: '/images/product4.webp',
    },
    {
      id: 5,
      name: 'Product 5',
      image: '/images/product5.webp',
    },
    {
      id: 6,
      name: 'Product 6',
      image: '/images/product6.webp',
    },
    {
      id: 7,
      name: 'Product 7',
      image: '/images/product7.webp',
    },
    {
      id: 8,
      name: 'Product 8',
      image: '/images/product8.webp',
    },
  ]

  return (
    <div className='flex flex-col space-y-10 px-12 w-full max-w-[1920px] mx-auto py-10 md:py-14 lg:py-20 xl:py-24 2xl:py-32'>
      {/* main image */}
      <img
        src='/images/ssproduction.webp'
        className='rounded-4xl'
      />

      {/* product cards title */}
      <div className='flex flex-col lg:flex-row items-center justify-between text-black w-full'>
        <p className='text-xs xl:text-base 2xl:text-2xl font-figtree text-center lg:text-left mb-5 xl:mb-8 2xl:mb-12 px-4 lg:px-0 max-w-[25em]'>A curated series of branded graphic cards designed for WebMinds, each representing a unique product or service offered by the company.</p>
        <p className='flex flex-col uppercase text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl items-center lg:items-end text-center  mb-3 xl:mb-5 2xl:mb-8'>
          <span className='font-reviewheavy'>WebMinds Product Cards</span>
          <span className='font-reviewregular font-bold'>2025</span>
        </p>
      </div>

      {/* images */}
      <div className="container mx-auto p-6">
        <div className="flex flex-wrap justify-center">
          {products.map((p, i) => (
            <div key={i} className="w-full md:w-1/3 p-2">
              <div className="overflow-hidden rounded-xl shadow-lg">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}
