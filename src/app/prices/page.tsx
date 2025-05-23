"use client";

import HeroSection from "../components/ourHrServiceComponent/heroSection";

const pricingPlans = [
  {
    title: "Starter",
    price: "€49",
    description: "For small businesses just getting started with HR support.",
    features: [
      "HR policy templates",
      "Basic email support",
      "1 user account",
      "Monthly check-ins",
    ],
    isPopular: false,
  },
  {
    title: "Professional",
    price: "€149",
    description: "Ideal for growing teams that need full HR guidance.",
    features: [
      "Custom HR strategy",
      "Unlimited email & phone support",
      "Up to 10 user accounts",
      "Legal compliance checks",
      "Monthly HR reports",
    ],
    isPopular: true,
  },
  {
    title: "Enterprise",
    price: "Custom",
    description: "Tailored HR services for large or complex organizations.",
    features: [
      "Dedicated HR consultant",
      "In-person workshops",
      "Unlimited user accounts",
      "Compliance audits",
      "On-demand employee relations support",
    ],
    isPopular: false,
  },
];

const PricesPage = () => {
  return (
    <section className=" pt-10" >
        <HeroSection
              title="Our Prices"
              description="tips on recruitment and shift-based workforce management for HR teams, locum workers, and business leaders."
              breadcrumbs={[
                { label: 'Home', href: '/' },
                { label: 'Our Prices' },
              
              ]}
            />
            <div className="containerDiv">
      <div className="  text-center mb-14 ">
        <h2 className="text-4xl font-bold text-[var(--primary-color)] mb-4">
          Simple Pricing for Every Business
        </h2>
        <p className="text-[var(--text-muted)] max-w-xl mx-auto">
          Choose a plan that fits your company’s needs. All plans include access to our expert HR team and support tools.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className={`rounded-xl border p-8 flex flex-col justify-between ${
              plan.isPopular
                ? "border-[var(--primary-color)] bg-[var(--primary-100)]"
                : "border-[var(--border-color)] bg-white"
            }`}
          >
            {plan.isPopular && (
              <div className="text-sm font-bold text-[var(--primary-color)] uppercase mb-2">
                Most Popular
              </div>
            )}

            <div>
              <h3 className="text-2xl font-semibold mb-2 text-[var(--text-dark)]">
                {plan.title}
              </h3>
              <p className="text-xl font-bold mb-2">
                {plan.price}
                <span className="text-sm font-normal text-[var(--text-muted)] ml-1">
                  /month
                </span>
              </p>
              <p className="text-[var(--text-muted)] mb-6">
                {plan.description}
              </p>

              <ul className="space-y-3 text-sm mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <span className="w-2 h-2 mr-3 bg-[var(--primary-color)] rounded-full"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <button
              className="w-full py-3 text-center rounded-md font-semibold button"
              style={{ borderRadius: "6px" }}
            >
              {plan.title === "Enterprise" ? "Contact Us" : "Get Started"}
            </button>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
};

export default PricesPage;
