const MenuItem = ({ title,title2, price, description, imageUrl }) => {
  return (
    <div className="bg-white py-4 lg:p-4 flex lg:flex-row-reverse flex-col items-start lg:flex-[50%] lg:items-center">
      <div className="w-[200px] h-[200px] rounded-full overflow-hidden flex-shrink-0">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="ml-4 flex flex-col justify-between ">
        <h3 className="mt-3 lg:mt-0 font-medium text-lg lg:text-2xl font-poppins">
          {title}
        </h3>
        <h3 className="lg:mt-0 font-medium text-lg lg:text-2xl font-poppins">
          {title2}
        </h3>
        <h2 className="mt-3 lg:mt-0 font-medium text-lg lg:text-lx font-poppins">
          &#8377; {price}
        </h2>
        <p className="mt-2 font-poppins text-sm font-medium text-gray-600">
          {description}
        </p>
      </div>
    </div>
  );
};
export default MenuItem