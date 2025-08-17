import { features } from "../../assets/data";

const FeatureSection = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Everything you need for a file sharing
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Cloud-Share provides all the tools you need to manage you digital
            content with ease.
          </p>
        </div>
        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, idx) => (
              <div
                className="pt-6 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 bg-white"
                key={idx}
              >
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div className="inline-flex items-center justify-center p-3 bg-white rounded-md shadow-lg">
                      <feature.iconName
                        className={`${feature.iconColor}`}
                        size={25}
                      />
                    </div>
                    <h3 className="mt-5 font-medium text-lg text-gray-900 tracking-tight ">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-base text-gray-500">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
