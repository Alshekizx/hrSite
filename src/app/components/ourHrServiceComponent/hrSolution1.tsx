'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { CheckCircleIcon } from '@heroicons/react/20/solid';

type Feature = {
  title: string;
  description: string;
};

type HrSectionProps = {
  title?: string | null;
  description?: string | null;
  features: Feature[];
  image: string; // public path, e.g. "/image-name.png"
};

export default function HrSection({
  title,
  description,
  features,
  image,
}: HrSectionProps) {
  const leftRef = useRef<HTMLDivElement>(null);
 

  useEffect(() => {

  }, [title, description, features]);

  return (
    <section className="bg-[var(--background-light)]  containerDiv" style={{padding:'auto 100px ', minHeight: '50px'}}>
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div ref={leftRef} className="flex flex-col gap-6 justify-center h-fit">
          {title && <h3 className="text-3xl text-[var(--primary-color)]">{title}</h3>}
          {description && (
            <p className="text-[var(--text-muted)] text-lg">{description}</p>
          )}

          <ul className="space-y-6">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircleIcon
                  className="w-[20px] h-[20px] text-[var(--primary-color)] flex-shrink-0"
                  aria-hidden="true"
                />
                <div>
                  <p className="text-[var(--text-muted)]">
                  <strong className="text-[var(--primary-color)]">{feature.title}</strong>{' '}
                  
                    – {feature.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-lg h-full ">
          <Image
            src={image}
            alt={title ?? 'section image'}
            width={600}
            height={600}
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}