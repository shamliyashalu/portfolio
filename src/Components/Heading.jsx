const Heading = ({ backGround, forGround }) => {
  return (
    <div className="w-full flex flex-col items-center justify-center relative z-10">
      {/* "HI MY NAME IS" Text */}
      {/* <h1 className="outline-text absolute text-[8rem] font-bold text-white top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 z-0 font-montserrat">
            {backGround}
          </h1> */}
      <h1
        className="absolute text-5xl sm:text-6xl md:text-[6rem] font-bold text-transparent top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 z-0 font-montserrat w-full flex items-center justify-center"
        style={{ WebkitTextStroke: "0.5px grey" }}
      >
        {backGround}
      </h1>
      <h1 className="text-xl font-bold text-transparent bg-clip-text bg-custom-gradient tracking-widest sm:tracking-[1rem] z-10 drop-shadow-[0_0_10px_rgba(173,223,250,0.8)] ">
        {forGround}
      </h1>
    </div>
  );
};
export default Heading;
