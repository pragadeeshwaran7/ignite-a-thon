import { Clock, Flag, Users, Presentation, Award } from 'lucide-react';

function Timeline() {
  const events = [
    {
      icon: Flag,
      time: 'Day 1 - 9:00 AM',
      title: 'Registration & Opening Ceremony',
      description: 'Check-in, team formation, and kickoff announcement. Get ready to ignite your ideas!',
    },
    {
      icon: Users,
      time: 'Day 1 - 11:00 AM',
      title: 'Hacking Begins',
      description: 'Teams start working on their projects. Mentors available for guidance and support.',
    },
    {
      icon: Clock,
      time: 'Day 1 - 7:00 PM',
      title: 'Mid-Hack Review',
      description: 'Progress check-in with mentors. Dinner break and networking session.',
    },
    {
      icon: Presentation,
      time: 'Day 2 - 9:00 AM',
      title: 'Final Sprint',
      description: 'Last hours to polish your project. Complete documentation and prepare presentations.',
    },
    {
      icon: Presentation,
      time: 'Day 2 - 2:00 PM',
      title: 'Project Presentations',
      description: 'Teams present their solutions to the judging panel. Showcase your innovation!',
    },
    {
      icon: Award,
      time: 'Day 2 - 5:00 PM',
      title: 'Results & Closing Ceremony',
      description: 'Winners announced! Prize distribution and celebration of all participants.',
    },
  ];

  return (
    <section id="timeline" className="relative py-24 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
            Event Timeline
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300">
            Your journey through 48 hours of innovation
          </p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 via-red-500 to-orange-500"></div>

          <div className="space-y-12">
            {events.map((event, index) => {
              const Icon = event.icon;
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-row`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 -ml-2 bg-orange-500 rounded-full border-4 border-black z-10 group-hover:scale-150 transition-transform"></div>

                  {/* Content */}
                  <div className={`w-full md:w-5/12 ${isLeft ? 'md:pr-16 pl-20' : 'md:pl-16 pl-20'} md:pl-0`}>
                    <div className="group bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-orange-500/20 hover:border-orange-500/50 transition-all duration-500 hover:transform hover:scale-105">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="p-3 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl group-hover:scale-110 transition-transform">
                          <Icon className="w-6 h-6 text-orange-500" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm text-orange-500 font-semibold mb-2">{event.time}</div>
                          <h3 className="text-2xl font-bold text-white mb-3">{event.title}</h3>
                        </div>
                      </div>
                      <p className="text-gray-400 leading-relaxed">{event.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Timeline;
