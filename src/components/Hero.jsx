const Hero = () => {
  return (
    <section className="bg-background min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-text mb-6 leading-tight">
          Building the Next Generation of Web3 Builders
        </h1>
        <p className="text-xl md:text-2xl text-text/70 mb-12 font-semibold">
          Learn. Build. Connect.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-brand text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-brand/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
            Join the Community
          </button>
          <button className="bg-white text-brand border-2 border-brand px-8 py-4 rounded-lg font-semibold text-lg hover:bg-brand/5 transition-all duration-300">
            What is Chain Neo?
          </button>
        </div>

        <div className="mt-20">
          <svg className="w-full max-w-2xl mx-auto" viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="50" y="150" width="120" height="120" rx="8" fill="#1B3C73" opacity="0.1"/>
            <rect x="200" y="100" width="120" height="120" rx="8" fill="#1B3C73" opacity="0.15"/>
            <rect x="350" y="180" width="120" height="120" rx="8" fill="#1B3C73" opacity="0.2"/>
            <rect x="500" y="120" width="120" height="120" rx="8" fill="#1B3C73" opacity="0.15"/>
            <rect x="650" y="160" width="120" height="120" rx="8" fill="#1B3C73" opacity="0.1"/>
            
            <line x1="110" y1="210" x2="260" y2="160" stroke="#1B3C73" strokeWidth="2" opacity="0.3"/>
            <line x1="260" y1="160" x2="410" y2="240" stroke="#1B3C73" strokeWidth="2" opacity="0.3"/>
            <line x1="410" y1="240" x2="560" y2="180" stroke="#1B3C73" strokeWidth="2" opacity="0.3"/>
            <line x1="560" y1="180" x2="710" y2="220" stroke="#1B3C73" strokeWidth="2" opacity="0.3"/>
            
            <circle cx="110" cy="210" r="8" fill="#1B3C73"/>
            <circle cx="260" cy="160" r="8" fill="#1B3C73"/>
            <circle cx="410" cy="240" r="8" fill="#1B3C73"/>
            <circle cx="560" cy="180" r="8" fill="#1B3C73"/>
            <circle cx="710" cy="220" r="8" fill="#1B3C73"/>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
