import { Flame } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
}

function Navigation({ activeSection }: NavigationProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'tracks', label: 'Tracks' },
    { id: 'timeline', label: 'Timeline' },
    { id: 'review', label: 'Review Process' },
    { id: 'sponsors', label: 'Sponsors' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-orange-500/20">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 group">
            <div className="relative">
              <Flame className="w-8 h-8 text-orange-500 animate-pulse" />
              <div className="absolute inset-0 bg-orange-500/20 blur-xl rounded-full animate-pulse"></div>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 bg-clip-text text-transparent">
              IGNITE-A-THON
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-all duration-300 hover:text-orange-500 relative group ${
                  activeSection === item.id ? 'text-orange-500' : 'text-gray-300'
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-orange-500 to-red-500 transition-transform duration-300 ${
                    activeSection === item.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                ></span>
              </button>
            ))}
          </div>

          <button
            onClick={() => scrollToSection('contact')}
            className="px-6 py-2.5 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/50"
          >
            Register Now
          </button>
           <button
            onClick={() => scrollToSection('#')}
            className="px-6 py-2.5 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/50"
          >
            Download Brochure
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
