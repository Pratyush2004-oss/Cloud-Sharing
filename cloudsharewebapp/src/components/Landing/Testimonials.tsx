import { Star } from "lucide-react";
import { testimonials } from "../../assets/data";

const Testimonials = () => {
  return (
    <div className="py-20 bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Trusted by Professionals World Wide
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              See what's our users have to say about Cloud-Share
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className={`bg-white rounded-xl shadow-md overflow-hidden transform transition duration-500 hover:scale-105`}
              >
                <div className="p-8">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 size-12">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="size-12 rounded-full"
                      />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-bold text-gray-900">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-600 font-bold text-sm">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center mt-4">
                    {[...Array(5)].map((_, idx) => (
                      <Star
                        key={idx}
                        size={15}
                        className={`${
                          idx < testimonial.rating
                            ? "text-yellow-400"
                            : "text-gray-300"
                        } fill-current`}
                      />
                    ))}
                  </div>
                  <blockquote className="mt-4">
                    <p className="text-base italic text-gray-600">
                      "{testimonial.quote}"
                    </p>
                  </blockquote>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
