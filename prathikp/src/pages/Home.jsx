import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <div className="header">
        <div className="nav">
          <Navbar />
        </div>
      </div>
      <div className=" h-[70vh] flex flex-col justify-center   md:h-[70vh] md:flex-row md:justify-start md:items-end ">
        <div className="w-[100vw] h-[35vh] z-0 bg-bg flex items-center justify-center  md:w-[60vw] md:h-[60vh]">
          <a className="text-8xl md:text-9xl">Hello</a>
        </div>
        <div className="w-[100vw] h-[8vh] z-10 bg-white flex items-center justify-center  md:flex-1 md:h-[13vh]">
          <a className="text-4xl text-black 2xl:text-6xl lg:text-5xl">
            I'm Prathik Prejith
          </a>
        </div>
      </div>
    </>
  );
}

export default Home;
