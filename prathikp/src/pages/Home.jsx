import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <div className="header">
        <div className="nav">
          <Navbar />
        </div>
      </div>
      <div className="h-[70vh] flex flex-col justify-center  md:relative md:h-[70vh] md:flex-row md:justify-start md:items-end ">
        <div className="hello-box w-[100vw] h-[35vh] z-0 bg-bg flex items-center justify-center   md:w-[60vw] md:h-[62vh]">
          <a className="text-8xl 2xl:text-[200px] md:text-[150px] transform rotate-180">Hello.</a>
        </div>
        <div className="name-box w-[100vw] h-[9vh] z-10 bg-white flex items-center justify-center overflow-hidden md:absolute md:right-0 md:w-1/2 md:h-[13vh]">
          <a className="name font-metro text-4xl text-black relative 2xl:text-6xl lg:text-5xl">
            I'm Prathik Prejith
          </a>
        </div>
      </div>
      <div className="footer"></div>
      <div id="aboutme" className="md:h-[100vh] flex md:relative md:flex-row md:justify-end md:items-end">
        <div className="md:w-[60vw] md:h-full z-0  bg-black">Lorem ipsum</div>
        <div className="w-[100vw] h-[8vh] z-10 bg-white flex items-center justify-center  md:absolute md:left-0 md:bottom-1/4 md:w-1/2 md:h-[13vh]">
          <a className="text-4xl font-metro text-black 2xl:text-6xl lg:text-5xl">
            About me
          </a>
        </div>
      </div>
    </>
  );
}

export default Home;
