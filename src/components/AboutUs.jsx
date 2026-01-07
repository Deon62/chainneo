import { useScrollAnimation } from '../hooks/useScrollAnimation';

const AboutUs = () => {
  const [ref1, isVisible1] = useScrollAnimation();
  const [ref2, isVisible2] = useScrollAnimation();
  const [ref3, isVisible3] = useScrollAnimation();

  const stats = [
    { number: '500+', label: 'Students Trained' },
    { number: '50+', label: 'Workshops Delivered' },
    { number: '20+', label: 'Partner Organizations' },
    { number: '10+', label: 'Active Projects' },
  ];

  const values = [
    {
      title: 'Education First',
      description: 'We believe accessible, quality education is the foundation for Web3 adoption in Africa.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
    {
      title: 'Community Driven',
      description: 'Our strength lies in collaboration, peer learning, and building together as a community.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: 'Practical Impact',
      description: 'We focus on real-world applications that create tangible economic opportunities for youth.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="about" className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div 
          ref={ref1}
          className={`text-center mb-16 transition-all duration-700 transform ${
            isVisible1 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text mb-6">
            About Chain Neo
          </h2>
          <p className="text-text/70 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Chain Neo is a community-based organization dedicated to empowering African youth with Web3 knowledge and skills. We bridge the gap between emerging blockchain technologies and the communities that can benefit most from them.
          </p>
        </div>

        <div 
          ref={ref2}
          className={`mb-20 transition-all duration-700 transform ${
            isVisible2 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="bg-brand text-white rounded-3xl p-12 md:p-16">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h3>
            <p className="text-white/90 text-lg md:text-xl leading-relaxed mb-8">
              To democratize access to Web3 education across Africa, enabling young people to understand, build, and leverage decentralized technologies for sustainable economic development and innovation.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="text-white/80 text-sm md:text-base">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div 
          ref={ref3}
          className={`transition-all duration-700 transform ${
            isVisible3 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <h3 className="text-3xl md:text-4xl font-bold text-text text-center mb-12">
            Our Core Values
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-background p-8 rounded-2xl border border-brand/10 hover:border-brand/30 transition-all duration-300"
              >
                <div className="text-brand mb-6">
                  {value.icon}
                </div>
                <h4 className="text-2xl font-bold text-text mb-4">
                  {value.title}
                </h4>
                <p className="text-text/70 text-lg leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
