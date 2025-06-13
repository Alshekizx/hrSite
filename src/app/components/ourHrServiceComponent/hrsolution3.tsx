'use client';

import { useEffect, useRef, useState } from 'react';
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
  image: string;
};

export default function HrSection3({
  title,
  description,
  features,
  image,
}: HrSectionProps) {
  const leftRef = useRef<HTMLDivElement>(null);
  const [, setHeight] = useState<number | undefined>(undefined);

  useEffect(() => {
    if (leftRef.current) {
      setHeight(leftRef.current.offsetHeight);
    }
  }, [title, description, features]);

  return (
    <section
      className="bg-[var(--background-light)] containerDiv w-full py-12 px-6 md:px-20"
      style={{ minHeight: '50px' }}
    >
      <div className="flex flex-row gap-12 items-end">
        {/* Left Content */}
        <div className="flex flex-col w-full md:w-2/3 gap-6 justify-center"
          ref={leftRef}
          
        >
          {title && (
            <h3 className=" font-bold text-[var(--primary-color)]">
              {title}
            </h3>
          )}
          {description && (
            <p className="text-lg text-[var(--text-muted)]">
              {description}
            </p>
          )}

          <ul className="space-y-6">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckCircleIcon
                  className="w-5 h-5 text-[var(--primary-color)] flex-shrink-0"
                  aria-hidden="true"
                />
                <p className="text-[var(--text-muted)]">
                  <strong className="text-[var(--primary-color)]">{feature.title}</strong>{' '}
                  – {feature.description}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Image */}
        <div className="rounded-lg w-full md:w-1/3 h-full  border-2 border-[var(--secondary-400)] p-2 flex items-center justify-center">
          <Image
            src={image}
            alt={title ?? 'Section image'}
            width={600}
            height={600}
            className="w-full h-auto max-h-[400px] object-contain"
          />
        </div>
      </div>
    </section>
  );
}
