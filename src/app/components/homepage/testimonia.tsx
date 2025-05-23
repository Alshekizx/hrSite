"use client";
import { useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";


const testimonials = [
  {
    name: "Renee Wells",
    title: "Effortless Hiring & Quality Candidates",
    rating: 5,
    review:
      "With Agency the results are very satisfying. Wrapped with high quality and innovative design that makes a surge of visitors on my website",
  },
  {
    name: "Michael Lee",
    title: "Effortless Hiring & Quality Candidates",
    rating: 5,
    review:
      "They streamlined our HR processes effortlessly. Their tools are intuitive and their support team is amazing.",
  },
  {
    name: "Fatima Musa",
    title: "Effortless Hiring & Quality Candidates",
    rating: 4,
    review:
      "A reliable and innovative team. Their HR software changed how we manage payroll and attendance.",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const testimonial = testimonials[current];

  return (
    <section className="containerDiv flex items-center justify-center " style={{ minHeight: '50vh' }}>
      <div className="text-center  flex flex-col gap-10">
        <div className="text-center w-full max-w-[800px] mx-auto">
          <h3 className="text-[var(--primary-color)] font-bold">TESTIMONIALS</h3>
          <p>What clients say jobseekers and employers say about us</p>
        </div>

<div className="relative max-w-4xl mx-auto h-[50vh] flex items-center justify-center">

  {/* Stack illusion background cards at the bottom */}
  <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 translate-y-8 w-[85%] h-[50%] rounded-lg bg-gray-100  z-0 scale-90"></div>
  <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 translate-y-4 w-[90%] h-[50%] rounded-lg bg-gray-200  z-0 scale-95"></div>


  {/* Main testimonial card */}
  <div className="relative h-[70%] z-10 w-full p-6 sm:p-10 bg-[var(--background)] rounded-lg flex flex-col gap-5 text-center justify-center shadow-lg">
    
    <p className="text-[var(--primary-color)] font-semibold">{testimonial.title}</p>
    
    <blockquote className="text-lg font-medium text-[var(--text-dark)] italic">
      “{testimonial.review}”
    </blockquote>

    <div>
      <p className="text-[var(--text-dark)] font-semibold">- {testimonial.name} -</p>
    </div>

    {/* Navigation buttons */}
    <div className="absolute inset-[-40] flex justify-between items-center px-4">
      <button
        onClick={prev}
        className="w-10 h-10 rounded-full bg-[var(--background)] border border-[var(--border-color)] flex items-center justify-center hover:bg-gray-100"
      >
        <ArrowLeftIcon className="w-5 h-5 text-[var(--primary-color)]" />
      </button>
      <button
        onClick={next}
        className="w-10 h-10 rounded-full bg-[var(--primary-color)] text-white flex items-center justify-center hover:opacity-80"
      >
        <ArrowRightIcon className="w-5 h-5 text-white" />
      </button>
    </div>

  </div>
</div>
      </div>
    </section>
  );
};

export default Testimonials;