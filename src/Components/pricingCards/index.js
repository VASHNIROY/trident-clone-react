import React from "react";

const PricingCard = ({
  tagline,
  title,
  price,
  description,
  features,
  linkText,
  linkUrl,
  isPopular,
}) => {
  return (
    <div
      className={`flex flex-col border ${
        isPopular ? "border-violet-900" : "border-gray-200"
      } text-center rounded-2xl p-4 md:p-8 dark:bg-slate-900 ${
        isPopular ? "dark:border-violet-700" : ""
      }`}
      style={{
        backgroundColor: "#f4f8ff",
        width: "30%",
      }}
    >
      {isPopular && (
        <p className="mb-3">
          <span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-lg text-xs uppercase font-semibold bg-violet-100 text-violet-800 dark:bg-violet-900 dark:text-white">
            Most popular
          </span>
        </p>
      )}
      <h4 className="font-medium text-lg ">{title}</h4>
      <span className="mt-5 font-bold text-3xl md:text-4xl xl:text-5xl ">
        {price}
      </span>
      <p className="mt-2 text-sm ">{description}</p>

      <ul className="mt-7 space-y-2.5 text-sm">
        {features.map((feature, index) => (
          <li key={index} className="flex space-x-2">
            <svg
              className="flex-shrink-0 mt-0.5 h-4 w-4 text-violet-900"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <span className="text-gray-800 dark:text-gray-400">{feature}</span>
          </li>
        ))}
      </ul>

      <a
        className={`mt-5 py-3 px-4 w-full inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border ${
          isPopular
            ? "border-violet-600 text-violet-600 hover:border-violet-500 hover:text-violet-500"
            : "border-transparent bg-violet-600 text-white hover:bg-violet-700"
        } disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600`}
        href={linkUrl}
      >
        {linkText}
      </a>
    </div>
  );
};

const Pricingcards = () => {
  const pricingOptions = [
    {
      tagline: "Free",
      title: "Basic Plan",
      price: "Free",
      description: "Get started with basic features It is free now",
      features: ["1 user", "Plan features", "Product support"],
      linkText: "Get started",
      linkUrl: "#",
    },
    {
      tagline: "Most popular",
      title: "Business Plan",
      price: "$39",
      description: "All the basics for starting a new business",
      features: ["2 users", "Plan features", "Product support"],
      linkText: "Get started",
      linkUrl: "#",
    },
    {
      tagline: "Team",
      title: "Corporate Plan",
      price: "$89",
      description: "Everything you need for a growing business",
      features: ["5 users", "Plan features", "Product support"],
      linkText: "Get started",
      linkUrl: "#",
    },
  ];

  return (
    <main
      id="content"
      className="priciing-cards-main-container mb-5"
      role="main"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <div className="overflow-hidden">
        {/* grid*/}
        <div
          className="mt-6 md:mt-12  sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 lg:gap-3 xl:gap-6 lg:items-center"
          style={{
            display: "flex",
            width: "100%",

            "@media (max-width: 700px)": {
              display: "flex",
              flexDirection: "column",
            },
          }}
        >
          {pricingOptions.map((option, index) => (
            <PricingCard key={index} {...option} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Pricingcards;
