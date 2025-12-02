import { Flame, Users, Trophy, Zap } from 'lucide-react';

function About() {
  const features = [
    {
      icon: Flame,
      title: 'Ignite Innovation',
      description: 'Bring your groundbreaking ideas to life in an electrifying 2-day hackathon experience.',
    },
    {
      icon: Users,
      title: 'Collaborate & Connect',
      description: 'Network with brilliant minds, industry experts, and potential teammates.',
    },
    {
      icon: Trophy,
      title: 'Win Big',
      description: 'Compete for exciting prizes, recognition, and career opportunities.',
    },
    {
      icon: Zap,
      title: 'Level Up',
      description: 'Accelerate your skills through intense problem-solving and real-world challenges.',
    },
  ];

  return (
    <section id="about" className="relative py-24 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0icmdiYSgyNTUsIDE2NSwgMCwgMC4wNSkiLz48L2c+PC9zdmc+')] opacity-30"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
            About IGNITE-A-THON
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            IGNITE-A-THON is not just another hackathon—it's a transformative journey where passion meets opportunity.
            Over two intense days, participants will tackle real-world challenges, build innovative solutions,
            and forge connections that last a lifetime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-orange-500/20 hover:border-orange-500/50 transition-all duration-500 hover:transform hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-red-500/0 group-hover:from-orange-500/5 group-hover:to-red-500/5 rounded-2xl transition-all duration-500"></div>

                <div className="relative">
                  <div className="mb-6 inline-block p-4 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-orange-500" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-orange-500/10 via-red-500/10 to-orange-500/10 rounded-3xl p-12 border border-orange-500/30 backdrop-blur-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="group">
              <div className="text-5xl font-black bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                48
              </div>
              <p className="text-gray-400 text-lg">Hours of Innovation</p>
            </div>
            <div className="group">
              <div className="text-5xl font-black bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                4
              </div>
              <p className="text-gray-400 text-lg">Exciting Tracks</p>
            </div>
            <div className="group">
              <div className="text-5xl font-black bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                ∞
              </div>
              <p className="text-gray-400 text-lg">Possibilities</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
