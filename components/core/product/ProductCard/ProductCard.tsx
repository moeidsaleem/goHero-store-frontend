interface ProductCardProps {
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  id: any;
  slug?: string;
  showCartButton?: boolean;
  btnClick?: any;
  btnText?: string;
}

export default function ProductCard({
  title,
  description,
  price,
  imageUrl,
  id,
  slug,
  showCartButton = true,
  btnClick,
  btnText = "Add to Cart",
  ...props
}: ProductCardProps) {
  return (
    <div>
      <img
        className="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80"
        src={imageUrl}
        alt=""
      />
      <p className="mb-1 text-xl font-bold leading-none sm:text-2xl">
        {title}
      </p>
      <p className="font-bold text-2xl mb-2 bg-">
        <span className="bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent">
         {price && price.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
            })
         }
        </span>{" "}
        <span className="text-base font-normal"> </span>
      </p>
      <p className="text-gray-700">
        {description}
      </p>
      {showCartButton && ( <button
      onClick={btnClick}
      className="px-4 py-2 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gradient-to-tl from-blue-600 to-violet-600 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
       {btnText}
      </button>)}
     
    </div>
  );
}
