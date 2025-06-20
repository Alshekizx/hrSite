"use client";
import Image from "next/image";

const ContactForm = () => {
  return (
    <section
      className=" bg-[var(--primary-100)] flex flex-col items-center w-full "
      style={{ paddingTop: "100px", paddingBottom: "100px" }}
    >
      <div className="containerDiv flex flex-col lg:flex-row gap-10 items-stretch">
      {/* Left: Form Section */}
      <div className="form-container w-full lg:w-1/2 border border-[var(--primary-color)] bg-white rounded-t-lg overflow-hidden flex flex-col">
        <p className="p-6 font-semibold bg-[var(--primary-color)] text-white" style={{fontSize:'28px'}}>
          Speak with an expert
        </p>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6 p-10 flex-grow">
          <div>
            <label className="block mb-2 font-medium text-[var(--text-dark)]">
             <p style={{fontSize:'24px'}}>First Name:</p> 
            </label>
            <input
              type="text"
              className="w-full p-3 border border-[var(--primary-color)] border-1 bg-[var(--primary-100)] custom-ring-color"
            />
          </div>
          <div>
            <label className="block mb-2 font-medium text-[var(--text-dark)]">
             <p style={{fontSize:'24px'}}>Last Name:</p> 
            </label>
            <input
              type="text"
              className="w-full p-3 border border-[var(--primary-color)] border-1 bg-[var(--primary-100)] custom-ring-color"
            />
          </div>
          <div>
            <label className="block mb-2 font-medium text-[var(--text-dark)]">
             <p style={{fontSize:'24px'}}>Company:</p> 
            </label>
            <input
              type="text"
              className="w-full p-3 border border-[var(--primary-color)] border-1 bg-[var(--primary-100)] custom-ring-color"
            />
          </div>
          <div>
            <label className="block mb-2 font-medium text-[var(--text-dark)]">
              <p style={{fontSize:'24px'}}>Email Address:</p>
            </label>
            <input
              type="email"
              className="w-full p-3 border border-[var(--primary-color)] border-1 bg-[var(--primary-100)] custom-ring-color"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block mb-2 font-medium text-[var(--text-dark)]">
              <p style={{fontSize:'24px'}}>Best number to call you on:</p>
            </label>
            <input
              type="tel"
              className="w-full p-3 border border-[var(--primary-color)] border-1 bg-[var(--primary-100)] custom-ring-color"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block mb-2 font-medium text-[var(--text-dark)]">
             <p style={{fontSize:'24px'}}> Drop a Message:</p>
            </label>
            <textarea
            className="w-full p-3 border border-[var(--primary-color)] border-1 bg-[var(--primary-100)] custom-ring-color min-h-[80px]"
          ></textarea>
          </div>
          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full button py-3 rounded-md"
              style={{ borderRadius: "5px", padding: "15px" }}
            >
              <p style={{fontSize:'28px'}}>Book Free Consultation</p>
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
      </div>
    </section>
  );
};

export default ContactForm;