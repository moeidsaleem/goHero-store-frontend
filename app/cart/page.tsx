



export default function CartPage(){


    return (<>
    <section>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="flex flex-col md:flex-row -mx-4">
                <div className="md:flex-1 px-4">
                    <div className="flex-1">
                        <h2 className="text-2xl font-bold leading-tight text-gray-800">Shopping Cart</h2>
                        <p className="text-xl text-gray-600">Review your items</p>
                    </div>
                    <div className="flex flex-col mt-8">
                        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                                <div className="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">
                                    <table className="min-w-full divide-y divide-gray-200">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                                                    Product
                                                </th>
                                                <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                                                    Quantity
                                                </th>
                                                <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                                                    Price
                                                </th>
                                                <th scope="col" className="relative px-6 py-3">
                                                    <span className="sr-only">Remove</span>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200">
                                            <tr>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex items-center">
                                                        <div className="flex-shrink-0 w-20 h-20">
                                                            <img className="w-20 h-20 rounded-md object-cover" src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg" alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt." />
                                                        </div>
                                                        <div className="ml-4">
                                                            <div className="text-sm font-medium text-gray-900">Zip Tote Basket</div>
                                                            <div className="text-sm text-gray-500">Salmon</div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex items-center">
                                                        <button className="text-gray-500 focus:outline-none focus:text-gray-600">
                                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                                            </svg>
                                                        </button>
                                                        <span className="mx-2 text-gray-700">2</span>
                                                        <button className="text-gray-500 focus:outline-none focus:text-gray-600">
                                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 12H6" />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">$58.00</td>
                                                <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                                    <button className="text-gray-500 focus:outline-none focus:text-gray-600">
                                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                                        </svg>
                                                    </button>
                                                </td>
                                            </tr>
                                          </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between mt-8">
                        <div className="flex">
                            <div className="flex-shrink-0">
                                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                </svg>
                             </div>
                            <div className="ml-4 text-sm font-medium text-gray-500">
                                <a href="#" className="text-gray-900">Continue Shopping<span aria-hidden="true"> &rarr;</span></a>
                            </div>
                        </div>
                        <div className="flex ">
                            <div className="text-sm my-auto font-medium text-gray-500">
                                Subtotal $58.00 USD 
                            </div>
                            <button className="flex items-center justify-center px-4 py-2 ml-4 text-sm font-medium text-white bg-gray-800 border border-transparent rounded-md shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
                                Checkout
                            </button>
                            </div>
                            </div>
                </div>
                </div>
        </div>
                
    </section>
    
    </>)
}