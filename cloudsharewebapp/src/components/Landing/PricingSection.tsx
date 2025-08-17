import { PricingPlans } from "../../assets/data";
import { Check } from "lucide-react";
const PricingSection = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Choose the plan that's right for you. We offer a range of pricing
            plans to suit your needs.
          </p>
        </div>
        <div className="mt-16 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8 ">
          {PricingPlans.map((plan, idx) => (
            <div
              key={idx}
              className={`flex flex-col rounded-lg shadow-lg overflow-hidden max-lg:mx-auto max-lg:w-[90%] ${
                plan.highlighted
                  ? "border-2 border-purple-500 trasform scale-105"
                  : "border border-gray-200"
              }`}
            >
              <div
                className={`px-6 py-8 bg-white sm:p-6 ${
                  plan.highlighted
                    ? "bg-gradient-to-br from-purple-100 to-white"
                    : ""
                }`}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-medium text-gray-900">
                    {plan.name}
                  </h3>
                  {plan.highlighted && (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium leading-4 bg-purple-100 text-purple-800">
                      Popular
                    </span>
                  )}
                </div>
                <p className="mt-4 text-sm text-gray-500">{plan.description}</p>
                <p className="mt-4 text-4xl font-extrabold text-gray-900 ">₹{plan.price}</p>
              </div>
              <div className="flex-1 flex flex-col justify-between px-6 pt-6 pb-8 bg-gray-50 space-y-6">
                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <div className="flex-shrink-0">
                        <Check className="h-5 w-5 text-purple-400" />
                      </div>
                      <p className="ml-3 text-sm text-gray-700">{feature}</p>
                    </li>
                  ))}
                </ul>
                <div className="rounded-md shadow-sm">
                  <button
                    className={`w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md ${
                      plan.highlighted
                        ? "text-white bg-purple-500 hover:bg-purple-600"
                        : "text-purple-500 bg-white hover:bg-gray-50 border-purple-500"
                    } transition-colors duration-200 `}
                  >
                    {plan.cta}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
