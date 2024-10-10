function ServiceSection() {
  const services = [
    {
      count: "1,000+",
      title: "Happy Customers",
    },
    {
      count: "500+",
      title: "Unique Plants",
    },
    {
      count: "24/7",
      title: "Plant Support",
    },
  ];

  return (
    <div className="min-h-fit p-10 md:px-15 md:py-20 xl:py-32 2xl:py-40 flex flex-wrap justify-center items-center gap-10 gap-y-20">
      {services.map((service, index) => (
        <div
          className="flex flex-col items-center gap-7 w-1/3 min-w-fit flex-1"
          key={index}
        >
          <h2 className="text-5xl md:text-6xl 2xl:text-8xl font-bold text-green-400">
            {service.count}
          </h2>
          <h4
            className="text-2xl md:text-3xl 2xl:text-6xl font-semibold text-nowrap text-gray-700"
            style={{ letterSpacing: "3px" }}
          >
            {service.title}
          </h4>
        </div>
      ))}
    </div>
  );
}

export default ServiceSection;
