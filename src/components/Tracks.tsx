import { useState } from 'react';
import { Brain, Database, Shield, Code, ChevronDown } from 'lucide-react';

function Tracks() {
  const [selected, setSelected] = useState<number | null>(null);

  const tracks = [
    {
      icon: Brain,
      title: 'AI/ML',
      description: 'Harness the power of artificial intelligence and machine learning to create intelligent solutions that learn and adapt.',
      overview: 'Explore how intelligent systems learn from data, make decisions, and automate complex tasks. This track dives deeper into practical AI/ML applications such as predictive analytics, pattern detection, natural language processing, and generative AI systems. Participants will get exposure to how modern models are trained, optimized, and deployed, and how AI is used today in industries like healthcare, finance, education, and cybersecurity.',
      whatYouDo: 'Participants will brainstorm and build an innovative AI/ML solution within the overnight challenge. You may design a simple machine learning model, build an automation tool, create a smart assistant concept, or experiment with generative AI. Your goal is to turn your idea into a working prototype, demonstrate creativity in applying ML techniques, and showcase how AI can solve a real-world problem.',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-500/10 to-cyan-500/10',
    },

    {
      icon: Code,
      title: 'FinTech',
      description: 'Discover how technology is revolutionizing financial systems and shaping the future of digital finance.',
      overview: 'Discover how technology is revolutionizing financial systems—from digital payments and UPI infrastructure to algorithmic trading, fraud analytics, and open banking. This track encourages participants to understand how automation, data-driven intelligence, and secure digital finance are shaping the future. You\'ll explore how modern FinTech platforms improve convenience, transparency, transaction speed, and overall user experience.',
      whatYouDo: 'Participants will conceptualize and build a creative FinTech solution that addresses a financial challenge. This could be a digital payment innovation, a fraud detection concept, a financial analytics dashboard, or an automated finance assistant. You\'ll be expected to blend technology and financial logic to develop a functional prototype or workflow that demonstrates your idea\'s potential impact.',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-500/10 to-pink-500/10',
    },
    {
      icon: Shield,
      title: 'Blockchain & Security',
      description: 'Learn how blockchain creates trust through decentralization and how security safeguards digital systems.',
      overview: 'Learn how blockchain creates trust through decentralization, transparency, and immutability, and how cybersecurity safeguards digital systems. This track covers core blockchain principles, smart contracts, Web3 applications, and essential security practices like encryption, authentication, and threat mitigation. Participants will understand how blockchain and security work together to build safe, tamper-proof systems beyond cryptocurrencies.',
      whatYouDo: 'Participants will work on an innovative blockchain or security-based idea. You may design a simple smart contract, create a secure transaction model, propose a decentralized application concept, or perform a lightweight threat analysis. The goal is to develop a prototype or structured solution that highlights trust, security, or decentralization, and demonstrate how these technologies can solve modern digital challenges.',
      color: 'from-pink-500 to-rose-500',
      bgColor: 'from-pink-500/10 to-rose-500/10',
    },
  ];

  return (
    <section id="tracks" className="relative py-24 bg-black">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-orange-950/10 to-black"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
            Tracks to Explore
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose your battleground and showcase your expertise in cutting-edge technology domains
          </p>
        </div>

        <div className="space-y-8">
          {tracks.map((track, index) => {
            const Icon = track.icon;
            const isExpanded = selected === index;
            return (
              <div key={index} className="space-y-4">
                <div className="group relative bg-gradient-to-br from-gray-900 to-black p-8 rounded-3xl border border-gray-800 hover:border-orange-500/50 transition-all duration-500 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${track.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                  <div className="relative z-10">
                    <div className="flex items-start gap-6 mb-6">
                      <div className={`p-4 rounded-2xl bg-gradient-to-br ${track.color} group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                        <Icon className="w-10 h-10 text-white" />
                      </div>

                      <div className="flex-1">
                        <h3 className={`text-3xl font-bold mb-3 bg-gradient-to-r ${track.color} bg-clip-text text-transparent`}>
                          {track.title}
                        </h3>
                        <p className="text-gray-400 leading-relaxed text-lg">
                          {track.description}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 text-sm text-gray-500 group-hover:text-orange-500 transition-colors">
                      <div className="flex-1 h-px bg-gradient-to-r from-gray-800 to-transparent group-hover:from-orange-500/50"></div>
                      <button
                        onClick={() => {
                          setSelected(isExpanded ? null : index);
                          if (!isExpanded) {
                            setTimeout(() => {
                              document.getElementById(`track-details-${index}`)?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                            }, 100);
                          }
                        }}
                        className="font-medium text-left text-gray-300 hover:text-orange-400 focus:outline-none flex items-center gap-2"
                      >
                        Explore This Track
                        <ChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                      </button>
                    </div>
                  </div>

                  <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-orange-500/5 to-transparent rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
                </div>

                {/* Inline expanded details */}
                {isExpanded && (
                  <div id={`track-details-${index}`} className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-8 rounded-3xl border border-orange-500/20 space-y-6 animate-fadeIn">
                    <div>
                      <h4 className="text-2xl font-bold text-orange-400 mb-3">Overview</h4>
                      <p className="text-gray-300 leading-relaxed text-base">{track.overview}</p>
                    </div>

                    <div>
                      <h4 className="text-2xl font-bold text-orange-400 mb-3">What You'll Do</h4>
                      <p className="text-gray-300 leading-relaxed text-base">{track.whatYouDo}</p>
                    </div>

                    <button
                      onClick={() => setSelected(null)}
                      className="mt-4 px-6 py-2 bg-orange-500/10 border border-orange-500/30 text-orange-400 rounded-lg hover:bg-orange-500/20 transition-colors"
                    >
                      Collapse
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Old modal code removed - details now show inline */}
    </section>
  );
}

export default Tracks;
