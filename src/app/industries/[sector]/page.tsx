//industries/page

'use client';

import Image from 'next/image';
import { services } from "../sectorData";
import { notFound } from "next/navigation";
import { useParams } from 'next/navigation';

export default function SectorDetailPage() {
  const params = useParams();
  const sectorSlug = params?.sector?.toString().toLowerCase();

  const sector = services.find(
    (item) => item.slug.toLowerCase() === sectorSlug
  );

  if (!sector) return notFound();

  return (

    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <div className="relative h-[300px] md:h-[400px] w-full">
        <Image
          src={sector.bgImage}
          alt={sector.title}
          fill
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h2 className="text-white text-3xl md:text-5xl font-bold" style={{color: 'white'}}>{sector.title}</h2>
        </div>
      </div>

      {/* Content Section */}
      <div className="containerDiv mt-20 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Content */}
        <div>
          {sector.sections.map((section, i) => (
            <div key={i} className="mb-8">
              <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-4">
                {section.heading}
              </h3>
              <p className="text-gray-700">{section.description}</p>
            </div>
          ))}
        </div>

        {/* Right Form */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-blue-900 mb-4">Get In Touch</h3>
          <form className="space-y-4">
            <div>
              <label className="block mb-1">Full Name:</label>
              <input type="text" className="custom-ring-color w-full border border-gray-300 rounded-md p-3" />
            </div>
            <div className='flex flex-row w-full justify-between gap-4'>

                <div className='w-full'>
                    <label className="block mb-1">Business Email: <span className="text-red-500">*</span></label>
                    <input type="email" className="custom-ring-color w-full border border-gray-300 rounded-md p-3" required />
                </div>

                <div className='w-full'>
                    <label className="block mb-1">Phone Number:</label>
                    <input type="tel" className="custom-ring-color w-full border border-gray-300 rounded-md p-3" />
                </div>

            </div>
            <div className='flex flex-row w-full justify-between gap-4' >
            <div className='w-full'>
              <label className="block mb-1">Company Name: <span className="text-red-500">*</span></label>
              <input type="text" className="custom-ring-color w-full border border-gray-300 rounded-md p-3" required />
            </div>
            <div className='w-full'>
              <label className="block mb-1">Number of Employees:</label>
              <select className="custom-ring-color w-full border border-gray-300 rounded-md p-3">
                <option>2 - 50+</option>
                <option>2 - 10</option>
                <option>11 - 25</option>
                <option>26 - 50</option>
                <option>50+</option>
              </select>
            </div>
            </div>
            
            <div>
              <label className="block mb-1">Message: <span className="text-red-500">*</span></label>
              <textarea className="custom-ring-color w-full border border-gray-300 rounded-md p-3" rows={4}></textarea>
            </div>
            <button
              type="submit"
              className="button"
              style={{borderRadius:'5px'}}
            >
              Make your enquiries
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}