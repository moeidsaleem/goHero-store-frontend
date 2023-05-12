export default function BannerSimple({title}:{
    title:string
}) {
  return (
    <div className="bg-gradient-to-br from-pink-500 to-purple-600 py-16 w-full md:bg-gradient-to-r">
      <div className="container m-auto px-6 text-center md:px-12 lg:px-20">
        <h2 className="mb-8 text-4xl font-bold text-white md:text-4xl">
          {title}
        </h2>
        <a
          href="#"
          className="relative flex h-12 w-full mx-auto items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:bg-white before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
        >
          <span className="relative text-base font-semibold text-purple-600">
            Create an Account now
          </span>
        </a>
      </div>
    </div>
  );
}
