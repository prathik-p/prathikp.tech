import Navbar from "../components/Navbar";

function Home2() {
  return (
    <>
      <div>
        <div className="header">
          <div className="nav">
            <Navbar />
          </div>
        </div>
        <div className="h-[70vh] flex items-center justify-center">
          <div className="triangle"></div>
          <div className="triangle2"></div>
          <div className="text-[26vh] font-bold text-bg">Hello</div>
          <div className="triangle-1"></div>
          <div className="triangle2-1"></div>
        </div>
        <div className="footer"></div>
      </div>
      <div>
        <div className="h-[100vh]"></div>
      </div>
    </>
  );
}

export default Home2;
