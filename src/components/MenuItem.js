const MenuItem = ({ title, price, description, imageUrl }) => {
  return (
    <div className="bg-white py-4 lg:p-4 flex lg:flex-row flex-col items-start lg:flex-[50%] lg:items-center">
      <div className="w-[200px] h-[200px] rounded-full overflow-hidden flex-shrink-0">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="ml-4 flex flex-col justify-between ">
        <h3 className="mt-3 lg:mt-0 font-bold text-lg lg:text-2xl font-poppins">
          {title} - {price}
        </h3>
        <p className="mt-2 font-poppins text-sm font-medium text-gray-600">
          {description}
        </p>
      </div>
    </div>
  );
};
export default MenuItem