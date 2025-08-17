const FooterSection = () => {
  return (
    <div className="bg-gray-800">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-base text-gray-400">
            &copy; {new Date().getFullYear()} Cloud-Share. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
