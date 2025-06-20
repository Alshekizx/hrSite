'use client';

import { useEffect, useRef} from 'react';
import Image from 'next/image';
import { CheckCircleIcon } from '@heroicons/react/20/solid';

type Feature = {
  title: string | null;
  description: string | null;
};

type HrSectionProps = {
  title: string | null;
  description: string | null;
  features: Feature[] | null;
  image: string | null;
};

export default function AnotherHrSectionInverse({
  title,
  description,
  features,
  image,
}: HrSectionProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  

  useEffect(() => {
    
  }, [title, description, features]);

  return (
    <section
      className="bg-[var(--background-light)] containerDiv px-[5%] py-12"
      style={{ minHeight: '50px' }}
    >
      <div className="flex flex-col-reverse md:flex-row gap-10 items-center justify-between">
        {/* Image */}
        <div
         
          className="w-full md:w-1/2 flex justify-center items-center"
        >
          {image && (
            <Image
              src={image}
              alt={title || 'Section Image'}
              width={600}
              height={600}
              className="w-full h-auto"
            />
          )}
        </div>

        {/* Text content */}
        <div
          ref={contentRef}
          className="w-full md:w-1/2 flex flex-col gap-6 justify-center h-fit"
        >
          {title && <h3 className="text-3xl text-[var(--primary-color)]">{title}</h3>}
          {description && (
            <p className="text-[var(--text-muted)] text-lg" style={{fontSize:'24'}}>{description}</p>
          )}

          {features && features.length > 0 && (
            <ul className="space-y-6">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircleIcon
                    className="w-[20px] h-[20px] text-[var(--primary-color)] flex-shrink-0"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-[var(--text-muted)] " style={{fontSize:'24'}}>
                      <strong className="text-[var(--primary-color)]">
                        {feature.title || 'Untitled'}
                      </strong>{' '}
                      – {feature.description || 'No description provided'}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}