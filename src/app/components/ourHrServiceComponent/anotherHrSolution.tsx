'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

type HrSectionProps = {
  title?: string | null;
  description?: string | null;
  image: string; // public path, e.g. "/image-name.png"
  reverse?: boolean; // determines layout direction on large screens
};

export default function AnotherHrSection({
  title,
  description,
  image,
  reverse = false,
}: HrSectionProps) {
  const textRef = useRef<HTMLDivElement>(null);
  const [, setTextHeight] = useState<number | undefined>(undefined);

  useEffect(() => {
    if (textRef.current) {
      setTextHeight(textRef.current.offsetHeight);
    }
  }, [title, description]);

  return (
    <section
      className="containerDiv  w-full"
      style={{ padding: '0 auto', minHeight: '50px' }}
    >
      <div
        className={`flex flex-col ${
          reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'
        } items-center justify-between gap-12`}
      >
        {/* Text Content */}
        <div
          ref={textRef}
          className="flex flex-col gap-6 text-center lg:text-left lg:w-3/5"
        >
          {title && (
            <h3 className="text-3xl md:text-4xl font-bold text-[var(--primary-color)]">
              {title}
            </h3>
          )}
          {description && (
            <p className="text-lg text-[var(--text-muted)] whitespace-pre-line">
              {description}
            </p>
          )}
        </div>

         {/* Image Content */}
        <div
          className="relative w-full lg:w-2/5 rounded-lg  flex items-center justify-center"
          
        >
          <Image
            src={image}
            alt={title ?? 'Section image'}
            width={400}
            height={400}
            className="object-contain w-full  h-full"
          />
        </div>
      </div>
    </section>
  );
}