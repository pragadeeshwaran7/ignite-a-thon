import { Search, Users, Trophy } from 'lucide-react';

function ReviewProcess() {
  const reviews = [
    {
      icon: Search,
      title: 'Initial Screening',
      description: 'All submissions undergo a preliminary evaluation based on innovation, technical implementation, and completeness. Projects are assessed for their adherence to track requirements and overall quality.',
      step: '01',
    },
    {
      icon: Users,
      title: 'Judging Panel Review',
      description: 'Shortlisted projects are evaluated by our expert panel of industry professionals and academics. Teams present their solutions through live demonstrations and answer technical questions.',
      step: '02',
    },
    {
      icon: Trophy,
      title: 'Final Evaluation',
      description: 'Top projects compete in the final round judged on innovation, impact, scalability, and presentation quality. Winners are selected based on comprehensive scoring across all criteria.',
      step: '03',
    },
  ];

  return (
    <section id="review" className="relative py-24 bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-900/20 via-black to-black"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
            Review Process
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A rigorous three-stage evaluation process to identify and reward the best innovations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => {
            const Icon = review.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-900 to-black rounded-3xl border border-orange-500/20 hover:border-orange-500/50 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute top-0 right-0 text-[120px] font-black text-orange-500/5 group-hover:text-orange-500/10 transition-colors leading-none p-8">
                  {review.step}
                </div>

                <div className="relative p-8">
                  <div className="mb-6 inline-block p-5 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Icon className="w-10 h-10 text-orange-500" />
                  </div>

                  <div className="mb-4">
                    <span className="inline-block px-4 py-1 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full text-orange-500 text-sm font-semibold mb-4">
                      Stage {review.step}
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-4">{review.title}</h3>
                  </div>

                  <p className="text-gray-400 leading-relaxed">
                    {review.description}
                  </p>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-orange-500/10 via-red-500/10 to-orange-500/10 rounded-3xl p-12 border border-orange-500/30 backdrop-blur-sm">
          <h3 className="text-3xl font-bold text-center text-white mb-8">Evaluation Criteria</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Innovation', weight: '30%' },
              { label: 'Technical Excellence', weight: '30%' },
              { label: 'Impact & Scalability', weight: '25%' },
              { label: 'Presentation', weight: '15%' },
            ].map((criteria, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl font-black bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                  {criteria.weight}
                </div>
                <p className="text-gray-400">{criteria.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ReviewProcess;
