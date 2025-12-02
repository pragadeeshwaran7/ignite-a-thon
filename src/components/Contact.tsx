import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

function Contact() {
  const [mainName, setMainName] = useState('');
  const [mainEmail, setMainEmail] = useState('');
  const [mainPhone, setMainPhone] = useState('');
  const [mainCollege, setMainCollege] = useState('');
  const [preferredTrack, setPreferredTrack] = useState('');
  const [teamSize, setTeamSize] = useState<number>(1);
  const [members, setMembers] = useState<Array<{ name: string; email: string; phone: string; college: string }>>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      main: { name: mainName, email: mainEmail, phone: mainPhone, college: mainCollege },
      preferredTrack,
      teamSize,
      members,
    };

    // For now just log and show confirmation. Backend wiring can be added later.
    console.log('Registration payload:', payload);
    alert('Registration submitted! We will contact you soon.');
  };

  const handleTeamSizeChange = (value: number) => {
    setTeamSize(value);
    const extra = Math.max(0, value - 1);
    setMembers((prev) => {
      const copy = prev.slice(0, extra);
      while (copy.length < extra) {
        copy.push({ name: '', email: '', phone: '', college: '' });
      }
      return copy;
    });
  };

  const updateMember = (index: number, field: string, value: string) => {
    setMembers((prev) => {
      const copy = [...prev];
      copy[index] = { ...copy[index], [field]: value };
      return copy;
    });
  };

  return (
    <section id="contact" className="relative py-24 bg-black">
      <div className="absolute inset-0 bg-gradient-to-t from-orange-950/20 to-black"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300">
            Ready to ignite your career? Register now or reach out with any questions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-3xl border border-orange-500/20">
              <h3 className="text-3xl font-bold text-white mb-8">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Email</p>
                    <p className="text-lg text-white font-semibold">dhanush04.prabakaran@gmail.com</p>
                    <p className="text-lg text-white font-semibold">ramakrishnan.rk057@gmail.com</p>

                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Phone</p>
                    <p className="text-lg text-white font-semibold">+91 86107 27012</p>
                    <p className="text-lg text-white font-semibold">+91 70107 54298</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl group-hover:scale-110 transition-transform">
                    <MapPin className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Venue</p>
                    <p className="text-lg text-white font-semibold">Kasturba Hall</p>
                    <p className="text-sm text-gray-400 mt-1">VIT Chennai, MG Auditorium (Basement)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-500/10 via-red-500/10 to-orange-500/10 rounded-3xl p-8 border border-orange-500/30">
              <h3 className="text-2xl font-bold text-white mb-4">Event Highlights</h3>
              <ul className="space-y-3">
                {[
                  '48 hours of intense innovation',
                  'Other college and university participants are allowed',
                  'Expert mentorship and guidance',
                  'Exciting prizes and recognition',
                  'Networking with industry leaders',
                  'Only refreshments will be provided',
                  'Certificate of participation',
                  'No accommodation provided',
                  'No transportation provided'

                ].map((highlight, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-300">
                    <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Registration Form */}
          <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-3xl border border-orange-500/20">
            <h3 className="text-3xl font-bold text-white mb-8">Register Now</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Full Name</label>
                <input
                  type="text"
                  required
                  value={mainName}
                  onChange={(e) => setMainName(e.target.value)}
                  className="w-full px-4 py-3 bg-black/50 border border-orange-500/20 rounded-xl text-white focus:border-orange-500 focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={mainEmail}
                  onChange={(e) => setMainEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-black/50 border border-orange-500/20 rounded-xl text-white focus:border-orange-500 focus:outline-none transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Phone</label>
                <input
                  type="tel"
                  required
                  value={mainPhone}
                  onChange={(e) => setMainPhone(e.target.value)}
                  className="w-full px-4 py-3 bg-black/50 border border-orange-500/20 rounded-xl text-white focus:border-orange-500 focus:outline-none transition-colors"
                  placeholder="+91 98765 43210"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">College/University</label>
                <input
                  type="text"
                  required
                  value={mainCollege}
                  onChange={(e) => setMainCollege(e.target.value)}
                  className="w-full px-4 py-3 bg-black/50 border border-orange-500/20 rounded-xl text-white focus:border-orange-500 focus:outline-none transition-colors"
                  placeholder="Your institution"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Preferred Track</label>
                <select
                  required
                  value={preferredTrack}
                  onChange={(e) => setPreferredTrack(e.target.value)}
                  className="w-full px-4 py-3 bg-black/50 border border-orange-500/20 rounded-xl text-white focus:border-orange-500 focus:outline-none transition-colors"
                >
                  <option value="">Select a track</option>
                  <option value="aiml">AI/ML</option>
                  <option value="ds">Data Science</option>
                  <option value="cyber">Cyber Security</option>
                  <option value="dev">Software Development</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Team Size</label>
                <select
                  required
                  value={String(teamSize)}
                  onChange={(e) => handleTeamSizeChange(Number(e.target.value))}
                  className="w-full px-4 py-3 bg-black/50 border border-orange-500/20 rounded-xl text-white focus:border-orange-500 focus:outline-none transition-colors"
                >
                  <option value="1">Solo (1 member)</option>
                  <option value="2">2 members</option>
                  <option value="3">3 members</option>
                  <option value="4">4 members</option>
                </select>
              </div>

              {/* Additional team member inputs */}
              {members.map((member, idx) => (
                <div key={idx} className="bg-black/40 p-4 rounded-xl border border-orange-500/10 space-y-3">
                  <h4 className="text-white font-medium">Member {idx + 2}</h4>
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">Name</label>
                    <input value={member.name} onChange={(e) => updateMember(idx, 'name', e.target.value)} className="w-full px-3 py-2 rounded-lg bg-black/50 text-white border border-orange-500/10" />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">Email</label>
                    <input value={member.email} onChange={(e) => updateMember(idx, 'email', e.target.value)} className="w-full px-3 py-2 rounded-lg bg-black/50 text-white border border-orange-500/10" />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">Phone</label>
                    <input value={member.phone} onChange={(e) => updateMember(idx, 'phone', e.target.value)} className="w-full px-3 py-2 rounded-lg bg-black/50 text-white border border-orange-500/10" />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">College/Institution</label>
                    <input value={member.college} onChange={(e) => updateMember(idx, 'college', e.target.value)} className="w-full px-3 py-2 rounded-lg bg-black/50 text-white border border-orange-500/10" />
                  </div>
                </div>
              ))}

              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold rounded-xl hover:from-orange-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/50 flex items-center justify-center gap-3"
              >
                <span>Register for ₹200</span>
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-orange-500/20 text-center">
          <p className="text-gray-400">
            © 2025 IGNITE-A-THON. All rights reserved. Ignite your career with innovation.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
