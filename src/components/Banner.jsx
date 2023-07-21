function Banner() {
  return (
    <>
      <div className="px-16">
        <div className="container mx-auto bg-gray-800  h-80 flex flex-col justify-center px-10 text-white relative rounded-lg mt-4">
          <h1 className="text-5xl font-bold z-10">Bienvenidos.</h1>
          <h2 className="text-2xl font-medium pl-1 mt-1 z-10">
            Las mejores películas y series en un solo lugar. Explora ahora.
          </h2>
          <input
            type="search"
            name=""
            id=""
            className="border-red-800 mx-1 px-4 mt-8 h-10 rounded-2xl z-10 contrast-more:border-slate-400 text-slate-800"
            placeholder="Busca una pelicula o serie y conoce más..."
          />
          <div className="absolute top-0 left-0 h-full ">
            <img
              src="https://i.imgur.com/HXcK2wr.png"
              alt=""
              className="h-full w-screen object-cover opacity-30"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
