import { useClerk } from "@clerk/clerk-react";

const CTASecction = () => {
  const { openSignUp } = useClerk();
  return (
    <div className="bg-purple-500">
      <div className="max-w-7xl py-12 mx-auto px-4 text-white sm:px-6 lg:px-8 lg:flex lg:items-center lg:justify-between ">
        <h2 className="text-3xl font-extrabold tracking-tight text-white  sm:text-4xl">
          <span className="block">Ready to get started?</span>
          <span className="block text-purple-200">
            Create your Account today!
          </span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <button
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-purple-600 bg-white hover:bg-purple-50 transition-colors duration-200"
              onClick={() => openSignUp()}
            >
              Signup for Free
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASecction;
