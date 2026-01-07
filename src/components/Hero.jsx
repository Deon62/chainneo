const Hero = () => {
  return (
    <section className="grid-background-hero min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl mx-auto text-center bg-white/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text mb-6 leading-tight drop-shadow-sm">
          Building the Next Generation of Web3 Builders
        </h1>
        <p className="text-xl md:text-2xl text-text/80 mb-12 font-semibold">
          Learn. Build. Connect.
        </p>
        
        <div className="flex justify-center items-center">
          <button className="bg-brand text-white px-12 py-5 rounded-full font-bold text-xl hover:bg-brand/90 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 hover:scale-105">
            Join the Community
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
