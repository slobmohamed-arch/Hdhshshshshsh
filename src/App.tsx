import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Instagram, Globe, Shield, TrendingUp, Users, ChevronRight, Menu, X } from 'lucide-react';
import { translations } from './translations';

export default function App() {
  const [lang, setLang] = useState<'ar' | 'en'>('ar');
  const t = translations[lang];

  useEffect(() => {
    document.documentElement.dir = t.dir;
    document.documentElement.lang = lang;
  }, [lang, t.dir]);

  const toggleLang = () => setLang(lang === 'ar' ? 'en' : 'ar');

  const founders = [
    { name: lang === 'ar' ? "محمد الصميدعي" : "Mohammed Al-Sumaidaie" },
    { name: lang === 'ar' ? "رنا عودان" : "Rana Oudan" },
    { name: lang === 'ar' ? "مريم دانسيل" : "Maryam Dancil" }
  ];

  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden selection:bg-royal-gold selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: lang === 'ar' ? 20 : -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 gold-gradient rounded-full flex items-center justify-center text-white shadow-lg shadow-royal-gold/20">
              <Shield className="w-6 h-6" />
            </div>
            <span className="text-xl font-bold tracking-tight text-navy-blue">AetherSovereign</span>
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleLang}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 hover:border-royal-gold hover:text-royal-gold transition-colors font-medium text-sm"
          >
            <Globe className="w-4 h-4" />
            {t.langToggle}
          </motion.button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-white">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-navy-blue/5 -skew-x-12 transform origin-top-right -z-10" />
        
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8 text-navy-blue">
              {t.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg mb-10">
              {t.heroDescription}
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                className="px-8 py-4 gold-gradient text-white rounded-xl font-bold shadow-xl shadow-royal-gold/30 hover:shadow-2xl hover:shadow-royal-gold/40 transition-all"
              >
                {lang === 'ar' ? 'ابدأ رحلتك الآن' : 'Start Your Journey Now'}
              </motion.button>
              <div className="flex items-center gap-4 px-6 py-4 rounded-xl border border-gray-100 bg-gray-50/50">
                <Shield className="text-royal-gold w-6 h-6" />
                <span className="font-semibold text-navy-blue">{lang === 'ar' ? 'مرخصة ومحمية' : 'Licensed & Protected'}</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, type: "spring" }}
            className="relative perspective-1000 flex justify-center"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <motion.div
                animate={{ 
                  rotateY: [0, 360],
                  y: [0, -20, 0]
                }}
                transition={{ 
                  rotateY: { duration: 8, repeat: Infinity, ease: "linear" },
                  y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                }}
                className="w-full h-full rounded-full gold-gradient p-1 shadow-[0_0_100px_rgba(212,175,55,0.3)]"
              >
                <div className="w-full h-full rounded-full navy-gradient flex items-center justify-center relative overflow-hidden backdrop-blur-sm">
                  <Shield className="w-32 h-32 md:w-48 md:h-48 text-royal-gold/90" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-none" />
                </div>
              </motion.div>
              {/* Cinematic lighting effects */}
              <div className="absolute -inset-10 bg-royal-gold/10 blur-[100px] -z-10 rounded-full" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Investment Gallery */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center mb-16 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-navy-blue mb-4">{t.galleryTitle}</h2>
            <div className="w-24 h-1 gold-gradient rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                url: "https://images.unsplash.com/photo-1611974717483-392da9a02bbe?q=80&w=2670&auto=format&fit=crop",
                title: lang === 'ar' ? "نمو مستدام" : "Sustainable Growth"
              },
              { 
                url: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?q=80&w=2574&auto=format&fit=crop",
                title: lang === 'ar' ? "أمان مطلق" : "Absolute Security"
              },
              { 
                url: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2832&auto=format&fit=crop",
                title: lang === 'ar' ? "ازدهار وطني" : "National Prosperity"
              }
            ].map((img, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="group relative h-80 rounded-3xl overflow-hidden shadow-xl"
              >
                <img 
                  src={img.url} 
                  alt={img.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-blue/90 via-navy-blue/20 to-transparent flex items-end p-8">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{img.title}</h3>
                    <div className="flex items-center gap-2 text-royal-gold">
                      <TrendingUp className="w-4 h-4" />
                      <span className="text-xs uppercase tracking-widest font-bold">AetherSovereign</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Stats */}
      <section className="py-20 bg-navy-blue text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:40px_40px]" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid md:grid-cols-4 gap-12">
          {[
            { icon: Users, label: lang === 'ar' ? "مستثمر" : "Investors", val: "500K+" },
            { icon: Shield, label: lang === 'ar' ? "أمان" : "Security", val: "100%" },
            { icon: Globe, label: lang === 'ar' ? "دولة" : "Country", val: "Iraq ❤️" },
            { icon: TrendingUp, label: lang === 'ar' ? "نمو سنوي" : "Annual Growth", val: "24.5%" }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <stat.icon className="w-10 h-10 text-royal-gold mb-4" />
              <div className="text-4xl font-black mb-2 tracking-tight">{stat.val}</div>
              <div className="text-gray-400 font-medium uppercase text-xs tracking-[0.2em]">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white" id="contact">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-navy-blue mb-6">{t.contactTitle}</h2>
            <p className="text-gray-600 mb-12 text-lg">
              {lang === 'ar' ? 'نحن هنا للإجابة على جميع استفساراتكم. كن جزءاً من المستقبل اليوم.' : 'We are here to answer all your inquiries. Be part of the future today.'}
            </p>
            
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <motion.a
                href="mailto:slobmohamed@gmail.com"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-3 px-8 py-5 bg-navy-blue text-white rounded-2xl font-bold shadow-2xl transition-all"
              >
                <Mail className="w-5 h-5 text-royal-gold" />
                {t.emailBtn}
              </motion.a>
              
              <motion.a
                href="https://instagram.com/aethersovereignofficial"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-3 px-8 py-5 border-2 border-navy-blue text-navy-blue rounded-2xl font-bold hover:bg-navy-blue hover:text-white transition-all"
              >
                <Instagram className="w-5 h-5 text-royal-gold" />
                {t.instagramBtn}
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-20 pb-10 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 mb-20 items-start">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Shield className="text-royal-gold w-8 h-8" />
                <span className="text-2xl font-black text-navy-blue">AetherSovereign</span>
              </div>
              <p className="text-gray-500 max-w-sm mb-8 leading-relaxed">
                {t.legal}
              </p>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-navy-blue hover:text-royal-gold hover:border-royal-gold cursor-pointer transition-all">
                  <Instagram className="w-4 h-4" />
                </div>
                <div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-navy-blue hover:text-royal-gold hover:border-royal-gold cursor-pointer transition-all">
                  <Mail className="w-4 h-4" />
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h4 className="font-bold text-navy-blue mb-6 text-sm uppercase tracking-widest">{t.foundersTitle}</h4>
                <ul className="space-y-4">
                  {founders.map((f, i) => (
                    <li key={i} className="text-gray-600 font-medium">{f.name}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-navy-blue mb-6 text-sm uppercase tracking-widest">{lang === 'ar' ? 'المستندات' : 'Documents'}</h4>
                <a href="#" className="block text-royal-gold font-medium hover:underline text-sm mb-4">
                  {t.privacy}
                </a>
                <a href="#" className="block text-royal-gold font-medium hover:underline text-sm">
                  {lang === 'ar' ? 'الشروط والأحكام' : 'Terms & Conditions'}
                </a>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm font-medium">{t.rights}</p>
            <div className="flex gap-8">
              <span className="text-gray-300 text-xs font-bold uppercase tracking-widest">Royal Heritage</span>
              <span className="text-gray-300 text-xs font-bold uppercase tracking-widest">Future Digital</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
