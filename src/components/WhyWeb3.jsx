import { useScrollAnimation } from '../hooks/useScrollAnimation';

const WhyWeb3 = () => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section className="bg-background py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-text text-center mb-12">
          Why Web3?
        </h2>
        
        <div 
          ref={ref}
          className={`max-w-4xl mx-auto transition-all duration-700 transform ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-text/80 text-lg md:text-xl leading-relaxed text-center">
            Web3 technologies blockchain, DeFi, and digital identity can help Africa bypass traditional barriers in finance and innovation. Chain Neo makes these tools simple and accessible, empowering youth to learn, build, and create real economic opportunities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyWeb3;
