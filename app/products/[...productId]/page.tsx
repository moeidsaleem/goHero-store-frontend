import ProductCard from "@/components/core/product/ProductCard/ProductCard";




export default function ProductDetailpage(){
    return (<div>
        <div className="flex flex-col w-full mb-6 lg:justify-center lg:flex-row md:mb-8">

    <ProductCard id={1} title="Organic Apples" price={3.99} description="Fresh, locally grown organic apples."   imageUrl="/images/basket.png" showCartButton={false} />
    <div className="p-4 my-auto">
        <h4 className="font-semibold text-2xl">
            Specifications
        </h4>
        <ul className="mt-4">
            <li>
                <span className="font-semibold">Weight:</span> 1kg
            </li>
            <li>
                <span className="font-semibold">Dimensions:</span> 10 x 10 x 10 cm
            </li>
            <li>
                <span className="font-semibold">Color:</span> Red
            </li>
            <li>
                <span className="font-semibold">Material:</span> Plastic
            </li>

        </ul>
        <div className="flex items-center mt-6">
            <button className="px-4 py-2 mr-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gradient-to-tl from-blue-600 to-violet-600 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                Add to cart
            </button>
            </div>
    </div>
    </div>
       
    </div>)
}