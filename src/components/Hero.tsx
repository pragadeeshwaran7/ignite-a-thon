import { Calendar, IndianRupee, ChevronDown } from 'lucide-react';

function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-orange-950/20 to-black"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-orange-500 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 text-center px-6 max-w-6xl">
        <div className="mb-8 inline-block">
          <div className="relative">
            <h1 className="text-7xl md:text-9xl font-black mb-2 bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 bg-clip-text text-transparent animate-gradient">
              IGNITE-A-THON
            </h1>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 opacity-20 blur-2xl"></div>
          </div>
          <p className="text-2xl md:text-3xl text-orange-400 font-semibold tracking-wider">
            Ignite Your Career
          </p>
        </div>

        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Join the most powerful hackathon experience. Transform your ideas into reality and set your career ablaze.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-8 mb-16">
          <div className="flex items-center gap-3 bg-gradient-to-r from-orange-500/10 to-red-500/10 px-8 py-4 rounded-xl border border-orange-500/30 backdrop-blur-sm hover:border-orange-500/50 transition-all duration-300 group">
            <Calendar className="w-6 h-6 text-orange-500 group-hover:scale-110 transition-transform" />
            <div className="text-left">
              <p className="text-sm text-gray-400">Event Date</p>
              <p className="text-lg font-bold text-white">10-11 December 2025</p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-gradient-to-r from-orange-500/10 to-red-500/10 px-8 py-4 rounded-xl border border-orange-500/30 backdrop-blur-sm hover:border-orange-500/50 transition-all duration-300 group">
            <IndianRupee className="w-6 h-6 text-orange-500 group-hover:scale-110 transition-transform" />
            <div className="text-left">
              <p className="text-sm text-gray-400">Registration Fee</p>
              <p className="text-lg font-bold text-white">₹200</p>
            </div>
          </div>
        </div>

        <button
          onClick={scrollToAbout}
          className="animate-bounce text-orange-500 hover:text-orange-400 transition-colors"
        >
          <ChevronDown className="w-12 h-12" />
        </button>
      </div>

      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-100vh) translateX(20px); opacity: 0; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        .animate-float {
          animation: float linear infinite;
        }
      `}</style>
    </section>
  );
}

export default Hero;
