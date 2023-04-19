//the landing page component that will be exported
const Landing = ({ setCurrentPage }) => {
  //rendering the jsx element
  return (
    <div className="landing">
      <div className="container mx-auto xl:px-20">
        <div className="grid md:grid-cols-2 items-center gap-10">
          <div className="text-justify">
            <div className="flex justify-center md:justify-start text-center md:text-start">
              <h1 className="text-2xl lg:text-4xl xl:text-5xl font-bold mb-4">
                Jadilah Bagian <br /> Dari BeasiswaPintar
              </h1>
            </div>
            <br />
            <div className="flex justify-center md:justify-start">
              <div className="w-[90%]">
                <label>
                  "Sudah ada lebih dari 100 mahasiswa penerima beasiswa. Tunggu
                  apa lagi, daftarkan dirimu sekarang!!"
                </label>
              </div>
            </div>
            <br />
            <div className="flex justify-center md:justify-start">
              <button
                className="mt-16 rounded-full bg-blue-600 hover:bg-blue-700 text-white px-4 xl:px-5 py-2 xl:py-3 font-medium shadow-lg"
                onClick={() => {
                  //onClick events that will pass values to the main component
                  setCurrentPage("/register");
                }}
              >
                Daftar Sekarang
              </button>
            </div>
          </div>
          <div className=" justify-end hidden md:flex">
            <img
              className="w-[80%]"
              src={require("../assets/hero.png")}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
