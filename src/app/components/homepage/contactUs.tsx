"use client";
import Image from "next/image";

const ContactForm = () => {
  return (
    <section
      className="containerDiv bg-[var(--primary-100)] flex flex-col lg:flex-row gap-10 items-stretch"
      style={{ paddingTop: "100px", paddingBottom: "100px" }}
    >
      {/* Left: Form Section */}
      <div className="form-container w-full lg:w-1/2 border border-[var(--primary-color)] bg-white rounded-t-lg overflow-hidden flex flex-col">
        <p className="p-6 font-semibold bg-[var(--primary-color)] text-white">
          Speak with an expert
        </p>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6 p-10 flex-grow">
          <div>
            <label className="block mb-2 font-medium text-[var(--text-dark)]">
              First Name:
            </label>
            <input
              type="text"
              placeholder="John"
              className="w-full p-3 border border-[var(--border-color)] custom-ring-color"
            />
          </div>
          <div>
            <label className="block mb-2 font-medium text-[var(--text-dark)]">
              Last Name:
            </label>
            <input
              type="text"
              placeholder="Doe"
              className="w-full p-3 border border-[var(--border-color)] custom-ring-color"
            />
          </div>
          <div>
            <label className="block mb-2 font-medium text-[var(--text-dark)]">
              Company:
            </label>
            <input
              type="text"
              placeholder="Your Company"
              className="w-full p-3 border border-[var(--border-color)] custom-ring-color"
            />
          </div>
          <div>
            <label className="block mb-2 font-medium text-[var(--text-dark)]">
              Email Address:
            </label>
            <input
              type="email"
              placeholder="email@example.com"
              className="w-full p-3 border border-[var(--border-color)] custom-ring-color"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block mb-2 font-medium text-[var(--text-dark)]">
              Best number to call you on:
            </label>
            <input
              type="tel"
              placeholder="+353 123 4567"
              className="w-full p-3 border border-[var(--border-color)] custom-ring-color"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block mb-2 font-medium text-[var(--text-dark)]">
              Drop a Message:
            </label>
            <textarea
            placeholder="Message"
            className="w-full p-3 border border-[var(--border-color)] custom-ring-color min-h-[80px]"
          ></textarea>
          </div>
          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full button py-3 rounded-md"
              style={{ borderRadius: "5px", padding: "15px" }}
            >
              Book Free Consultation
            </button>
          </div>
        </form>
      </div>

      {/* Right: Image Section */}
      <div className="hidden md:block w-full lg:w-1/2 relative min-h-[300px] md:min-h-[500px] rounded-t-lg overflow-hidden">
        <Image
          src="/images/contactFormImg.png"
          alt="Contact Form Illustration"
          fill
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
};

export default ContactForm;