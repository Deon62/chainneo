const Hero = () => {
  return (
    <section className="bg-background min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6 leading-tight">
          Building the Next Generation of Web3 Builders
        </h1>
        <p className="text-lg md:text-xl text-text/70 mb-12 font-semibold">
          Learn. Build. Connect.
        </p>
        
        <div className="flex justify-center items-center">
          <button className="bg-brand text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-brand/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
            Join the Community
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
