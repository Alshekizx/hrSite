"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function EmployersTabs() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
  jobType: '',
  location: '',
  jobTitle: '',
  details: '',
  firstName: '',
  lastName: '',
  companyName: '',
  contactEmail: '',
  phoneNumber: '',
});

 const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

const stepIndicator = (current: number) => {
  return (
    <div className="relative mb-6 w-full max-w-lg">
      {/* Base Track */}
      <div
        className="absolute top-4 z-0 h-1 bg-[var(--secondary-200)] rounded"
        style={{
          left: 'calc(16.6667%)', // aligns to center of step 1
          width: '66.6667%',      // spans between the centers of step 1 and step 3
        }}
      />

      {/* Active Progress */}
      <div
        className="absolute top-4 z-10 h-1 bg-[var(--color-primary)] rounded transition-all duration-300"
        style={{
          left: 'calc(16.6667%)',
          width: `${((current - 1) / 2) * 66.6667}%`,
        }}
      />

      <div className="flex justify-between relative w-full z-20">
        {[1, 2, 3].map((num) => {
          const isCompleted = num < current;
          const isActive = num === current;

          const baseCircle = `w-8 h-8 rounded-full border-2 flex items-center justify-center font-bold transition-all duration-300`;
          const circleState = isActive
            ? 'bg-[var(--color-primary)] text-white border-[var(--color-primary)]'
            : isCompleted
            ? 'text-[var(--color-primary)] border-[var(--color-primary)] bg-white'
            : 'text-[var(--secondary-400)] border-[var(--secondary-200)] bg-white';

          const textColor = isCompleted
            ? 'text-[var(--color-primary)]'
            : 'text-[var(--color-text-muted)]';

          return (
            <div key={num} className="flex flex-col items-center w-1/3">
              <div className={`${baseCircle} ${circleState}`}>{num}</div>
              <span className={`text-sm mt-1 transition-colors ${textColor}`}>
                {num === 1
                  ? 'Type of hire'
                  : num === 2
                  ? 'Job Details'
                  : 'Contact Details'}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

  return (
    <div className="flex flex-col items-center pb-40 min-h-screen h-[150vh]  pb-100 relitave  ">
    <div className=' flex flex-col items-center pt-40 pb-40 bg-[var(--primary-color)] w-full card-texture-bg '
    >
      <p className="font-bold text-center" style={{color:"white" }}>Hire Smarter – Find Top Talent Fast!</p>
      <div className='max-w-xl'>
      <p className="text-center " style={{color:"white" }}>
        We don’t just fill roles; we connect you with top professionals who fit your business needs.
        Let MployUs help you hire smarter, faster, and more efficiently.
      </p>
      </div>
    </div>
      <div className="card2 rounded-lg absolute top-80 w-full max-w-lg" style={{padding: "2rem"}}>
        {stepIndicator(step)}
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
          >
            {step === 1 && (
             <div className="flex flex-col gap-4">
    <div>
        <label className="block mb-1 font-semibold">Job Type:</label>
        <select
        name="jobType"
        value={formData.jobType}
        onChange={handleChange}
        className="w-full border p-2 rounded custom-ring-color bg-white"
        >
        <option value="">Select a job type</option>
        <option value="Full-time">Full-time</option>
        <option value="Part-time">Part-time</option>
        <option value="Contract">Contract</option>
        <option value="Internship">Internship</option>
        <option value="Temporary">Temporary</option>
        </select>
    </div>

  <div>
    <label className="block mb-1 font-semibold">Location:</label>
    <select
      name="location"
      value={formData.location}
      onChange={handleChange}
      className="w-full border p-2 rounded custom-ring-color bg-white"
    >
      <option value="">Select a location</option>
      <option value="Remote">Remote</option>
      <option value="On-site">On-site</option>
      <option value="Hybrid">Hybrid</option>
    </select>
  </div>
</div>
            )}

            {step === 2 && (
              <div className="flex flex-col gap-4">
                <div>
                  <label className="block mb-1 font-semibold">Job Title(s):</label>
                  <input
                    type="text"
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleChange}
                    placeholder="Job title of position you are hiring for"
                    className="w-full border p-2 rounded custom-ring-color"
                  />
                </div>
                <div>
                  <label className="block mb-1 font-semibold">Details:</label>
                  <textarea
                    name="details"
                    value={formData.details}
                    onChange={handleChange}
                    placeholder="Any specific details? Estimated salary, urgency of turnaround"
                    className="w-full border p-2 rounded custom-ring-color"
                    rows={4}
                  />
                </div>
              </div>
            )}

            {step === 3 && (
            <div className="flex flex-col gap-4">
            <div className='flex flex-row gap-4'>
                <div>
                    <label className="block mb-1 font-semibold">First Name:</label>
                    <input
                    type="text"
                    name="firstName"
                    value={formData.firstName || ''}
                    onChange={handleChange}
                    placeholder="Your first name"
                    className="w-full border p-2 rounded custom-ring-color"
                    />
                </div>
                <div>
                    <label className="block mb-1 font-semibold">Last Name:</label>
                    <input
                    type="text"
                    name="lastName"
                    value={formData.lastName || ''}
                    onChange={handleChange}
                    placeholder="Your last name"
                    className="w-full border p-2 rounded custom-ring-color"
                    />
                </div>
            </div>
            <div>
                <label className="block mb-1 font-semibold">Company Name:</label>
                <input
                type="text"
                name="companyName"
                value={formData.companyName || ''}
                onChange={handleChange}
                placeholder="Your company"
                className="w-full border p-2 rounded custom-ring-color"
                />
            </div>
            <div>
                <label className="block mb-1 font-semibold">Work Email Address:</label>
                <input
                type="email"
                name="contactEmail"
                value={formData.contactEmail}
                onChange={handleChange}
                placeholder="you@company.com"
                className="w-full border p-2 rounded custom-ring-color"
                />
            </div>
            <div>
                <label className="block mb-1 font-semibold">Phone Number:</label>
                <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber || ''}
                onChange={handleChange}
                placeholder="e.g. +1 555 123 4567"
                className="w-full border p-2 rounded custom-ring-color"
                />
            </div>
            </div>
            )}

            <div className="flex justify-between mt-6">
              <button onClick={prevStep} className="inverseButton">Back</button>
              {step < 3 ? (
                <button onClick={nextStep} className="button">Next</button>
              ) : (
                <button className="button">Submit</button>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
