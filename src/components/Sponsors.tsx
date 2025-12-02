import { Building2, Handshake } from 'lucide-react';

function Sponsors() {
  const sponsors = {
    platinum: [
      { name: 'TechCorp Global', logo: 'TC' },
      { name: 'Innovation Labs', logo: 'IL' },
    ],
    gold: [
      { name: 'DataSync Solutions', logo: 'DS' },
      { name: 'CloudNet Systems', logo: 'CS' },
      { name: 'AI Dynamics', logo: 'AD' },
    ],
    silver: [
      { name: 'CodeCraft', logo: 'CC' },
      { name: 'DevHub', logo: 'DH' },
      { name: 'SecureIT', logo: 'SI' },
      { name: 'ByteForce', logo: 'BF' },
    ],
  };

  const partners = [
    { name: 'Tech University', logo: 'TU' },
    { name: 'StartupHub', logo: 'SH' },
    { name: 'Innovation Center', logo: 'IC' },
    { name: 'Developer Community', logo: 'DC' },
  ];

  return (
    <section id="sponsors" className="relative py-24 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0icmdiYSgyNTUsIDE2NSwgMCwgMC4wNSkiLz48L2c+PC9zdmc+')] opacity-20"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
            Sponsors & Partners
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300">
            Powered by industry leaders and innovation partners
          </p>
        </div>

        {/* Platinum Sponsors */}
        <div className="mb-16">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Building2 className="w-6 h-6 text-orange-500" />
            <h3 className="text-2xl font-bold text-orange-500">Platinum Sponsors</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {sponsors.platinum.map((sponsor, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-800 to-gray-900 p-12 rounded-3xl border-2 border-orange-500/50 hover:border-orange-500 transition-all duration-500 hover:transform hover:scale-105 w-64"
              >
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center text-4xl font-black text-white group-hover:rotate-6 transition-transform">
                    {sponsor.logo}
                  </div>
                  <p className="text-xl font-bold text-white">{sponsor.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gold Sponsors */}
        <div className="mb-16">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Building2 className="w-5 h-5 text-yellow-500" />
            <h3 className="text-xl font-bold text-yellow-500">Gold Sponsors</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {sponsors.gold.map((sponsor, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-yellow-500/30 hover:border-yellow-500/50 transition-all duration-500 hover:transform hover:scale-105 w-48"
              >
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center text-2xl font-black text-white group-hover:rotate-6 transition-transform">
                    {sponsor.logo}
                  </div>
                  <p className="text-sm font-bold text-white">{sponsor.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Silver Sponsors */}
        <div className="mb-16">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Building2 className="w-4 h-4 text-gray-400" />
            <h3 className="text-lg font-bold text-gray-400">Silver Sponsors</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {sponsors.silver.map((sponsor, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-500/30 hover:border-gray-400/50 transition-all duration-500 hover:transform hover:scale-105 w-36"
              >
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-gray-500 to-gray-600 rounded-lg flex items-center justify-center text-lg font-black text-white group-hover:rotate-6 transition-transform">
                    {sponsor.logo}
                  </div>
                  <p className="text-xs font-bold text-white">{sponsor.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Partners */}
        <div className="bg-gradient-to-r from-orange-500/10 via-red-500/10 to-orange-500/10 rounded-3xl p-12 border border-orange-500/30 backdrop-blur-sm">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Handshake className="w-6 h-6 text-orange-500" />
            <h3 className="text-2xl font-bold text-white">Community Partners</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="group bg-black/30 p-6 rounded-xl border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-lg flex items-center justify-center text-xl font-black text-orange-500 group-hover:rotate-6 transition-transform">
                    {partner.logo}
                  </div>
                  <p className="text-sm font-semibold text-gray-300">{partner.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">Interested in sponsoring IGNITE-A-THON?</p>
          <button className="px-8 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/50">
            Become a Sponsor
          </button>
        </div>
      </div>
    </section>
  );
}

export default Sponsors;
