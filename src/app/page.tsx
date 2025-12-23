"use client";

import { useState, useEffect, useRef, useCallback } from "react";

// Starfield Background Component - Enhanced with natural red blend
function Starfield() {
  const [stars, setStars] = useState<Array<{
    id: number;
    x: number;
    y: number;
    size: number;
    delay: number;
    duration: number;
    type: 'white' | 'red' | 'rose';
  }>>([]);

  useEffect(() => {
    const generatedStars = Array.from({ length: 150 }, (_, i) => {
      const rand = Math.random();
      let type: 'white' | 'red' | 'rose' = 'white';
      if (rand < 0.15) type = 'red';
      else if (rand < 0.25) type = 'rose';

      return {
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 0.5,
        delay: Math.random() * 5,
        duration: Math.random() * 4 + 2,
        type,
      };
    });
    setStars(generatedStars);
  }, []);

  const getStarColor = (type: 'white' | 'red' | 'rose') => {
    switch (type) {
      case 'red': return 'bg-red-400';
      case 'rose': return 'bg-rose-300';
      default: return 'bg-white';
    }
  };

  const getStarGlow = (type: 'white' | 'red' | 'rose') => {
    switch (type) {
      case 'red': return '0 0 8px rgba(255, 107, 107, 0.8)';
      case 'rose': return '0 0 6px rgba(251, 113, 133, 0.6)';
      default: return '0 0 4px rgba(255, 255, 255, 0.4)';
    }
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className={`absolute rounded-full star ${getStarColor(star.type)}`}
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            '--delay': `${star.delay}s`,
            '--duration': `${star.duration}s`,
            boxShadow: getStarGlow(star.type),
          } as React.CSSProperties}
        />
      ))}
      {/* Shooting stars with natural red blend */}
      <div className="shooting-star absolute top-[15%] right-[30%]" style={{ animationDelay: '0s' }} />
      <div className="shooting-star shooting-star-red absolute top-[25%] right-[20%]" style={{ animationDelay: '3s' }} />
      <div className="shooting-star absolute top-[35%] right-[45%]" style={{ animationDelay: '6s' }} />
      <div className="shooting-star shooting-star-red absolute top-[50%] right-[15%]" style={{ animationDelay: '9s' }} />
    </div>
  );
}

// Floating Ember Particles - Ambient red particles
function EmberParticles() {
  const [embers, setEmbers] = useState<Array<{ id: number; x: number; y: number; size: number; delay: number }>>([]);

  useEffect(() => {
    const generatedEmbers = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: 50 + Math.random() * 50,
      size: Math.random() * 4 + 2,
      delay: Math.random() * 8,
    }));
    setEmbers(generatedEmbers);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {embers.map((ember) => (
        <div
          key={ember.id}
          className="absolute rounded-full ember bg-gradient-to-t from-red-500/60 to-red-400/20"
          style={{
            left: `${ember.x}%`,
            top: `${ember.y}%`,
            width: `${ember.size}px`,
            height: `${ember.size}px`,
            animationDelay: `${ember.delay}s`,
            filter: 'blur(1px)',
          }}
        />
      ))}
    </div>
  );
}

// Floating Orbs - Large glowing moving orbs
function FloatingOrbs() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Large orbiting orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="orbit" style={{ animationDuration: '25s' }}>
          <div className="w-4 h-4 rounded-full bg-red-500/60 glow-breathe" />
        </div>
      </div>

      {/* Reverse orbit */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="orbit-reverse" style={{ animationDuration: '30s' }}>
          <div className="w-3 h-3 rounded-full bg-rose-400/50 glow-breathe" style={{ animationDelay: '1s' }} />
        </div>
      </div>

      {/* Floating orb top-left */}
      <div
        className="absolute top-[15%] left-[10%] w-6 h-6 rounded-full bg-gradient-to-br from-red-400/40 to-red-600/20 float-diagonal glow-breathe"
        style={{ animationDelay: '0s' }}
      />

      {/* Floating orb top-right */}
      <div
        className="absolute top-[20%] right-[15%] w-4 h-4 rounded-full bg-gradient-to-br from-rose-400/50 to-red-500/30 pulse-move"
        style={{ animationDelay: '2s' }}
      />

      {/* Floating orb mid-left */}
      <div
        className="absolute top-[45%] left-[5%] w-5 h-5 rounded-full bg-gradient-to-br from-red-500/30 to-rose-400/20 wave"
        style={{ animationDelay: '1s' }}
      />

      {/* Floating orb mid-right */}
      <div
        className="absolute top-[55%] right-[8%] w-8 h-8 rounded-full bg-gradient-to-br from-red-400/25 to-red-600/15 bounce-float glow-breathe"
        style={{ animationDelay: '3s' }}
      />

      {/* Floating orb bottom */}
      <div
        className="absolute bottom-[25%] left-[20%] w-3 h-3 rounded-full bg-gradient-to-br from-rose-300/40 to-red-400/20 float-diagonal"
        style={{ animationDelay: '4s', animationDuration: '10s' }}
      />

      {/* Extra small floating dots */}
      <div className="absolute top-[30%] left-[25%] w-2 h-2 rounded-full bg-red-400/50 scale-pulse" style={{ animationDelay: '0.5s' }} />
      <div className="absolute top-[70%] right-[25%] w-2 h-2 rounded-full bg-rose-400/40 scale-pulse" style={{ animationDelay: '1.5s' }} />
      <div className="absolute top-[40%] right-[30%] w-2 h-2 rounded-full bg-red-500/30 scale-pulse" style={{ animationDelay: '2.5s' }} />
    </div>
  );
}

// Animated Geometric Shapes
function GeometricShapes() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Rotating ring - large */}
      <div className="absolute top-[20%] right-[10%] w-32 h-32 spin-slow opacity-20">
        <div className="w-full h-full rounded-full border border-red-500/40" />
      </div>

      {/* Rotating ring - medium reverse */}
      <div className="absolute bottom-[30%] left-[8%] w-24 h-24 spin-slow-reverse opacity-15">
        <div className="w-full h-full rounded-full border border-rose-400/30" />
      </div>

      {/* Morphing blob */}
      <div
        className="absolute top-[60%] right-[20%] w-20 h-20 bg-gradient-to-br from-red-500/10 to-red-700/5 morph"
      />

      {/* Morphing blob 2 */}
      <div
        className="absolute top-[25%] left-[15%] w-16 h-16 bg-gradient-to-br from-rose-400/10 to-red-500/5 morph"
        style={{ animationDelay: '2s' }}
      />

      {/* Triangle shape - rotating */}
      <div className="absolute bottom-[40%] right-[5%] spin-slow opacity-10" style={{ animationDuration: '40s' }}>
        <svg width="60" height="60" viewBox="0 0 60 60">
          <polygon points="30,5 55,50 5,50" fill="none" stroke="rgba(239, 68, 68, 0.3)" strokeWidth="1" />
        </svg>
      </div>

      {/* Diamond shape */}
      <div className="absolute top-[35%] left-[3%] spin-slow-reverse opacity-15" style={{ animationDuration: '35s' }}>
        <svg width="40" height="40" viewBox="0 0 40 40">
          <polygon points="20,2 38,20 20,38 2,20" fill="none" stroke="rgba(251, 113, 133, 0.25)" strokeWidth="1" />
        </svg>
      </div>

      {/* Hexagon */}
      <div className="absolute bottom-[20%] left-[25%] spin-slow opacity-10" style={{ animationDuration: '45s' }}>
        <svg width="50" height="50" viewBox="0 0 50 50">
          <polygon points="25,2 45,14 45,36 25,48 5,36 5,14" fill="none" stroke="rgba(239, 68, 68, 0.2)" strokeWidth="1" />
        </svg>
      </div>
    </div>
  );
}

// Light Streaks - Moving lines across screen
function LightStreaks() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Diagonal streak 1 */}
      <div
        className="absolute top-[20%] -left-20 w-40 h-[1px] bg-gradient-to-r from-transparent via-red-500/40 to-transparent streak rotate-[25deg]"
        style={{ animationDuration: '12s', animationDelay: '0s' }}
      />

      {/* Diagonal streak 2 */}
      <div
        className="absolute top-[40%] -left-20 w-60 h-[1px] bg-gradient-to-r from-transparent via-rose-400/30 to-transparent streak rotate-[15deg]"
        style={{ animationDuration: '15s', animationDelay: '3s' }}
      />

      {/* Diagonal streak 3 */}
      <div
        className="absolute top-[60%] -left-20 w-32 h-[1px] bg-gradient-to-r from-transparent via-red-400/35 to-transparent streak rotate-[20deg]"
        style={{ animationDuration: '10s', animationDelay: '6s' }}
      />

      {/* Horizontal moving line */}
      <div
        className="absolute top-[75%] -left-10 w-20 h-[2px] bg-gradient-to-r from-transparent via-red-500/50 to-transparent streak"
        style={{ animationDuration: '8s', animationDelay: '2s' }}
      />

      {/* Vertical drifting line */}
      <div className="absolute left-[10%] top-0 w-[1px] h-20 bg-gradient-to-b from-transparent via-red-500/20 to-transparent drift opacity-40" />
      <div className="absolute right-[15%] top-0 w-[1px] h-32 bg-gradient-to-b from-transparent via-rose-400/15 to-transparent drift opacity-30" style={{ animationDelay: '4s' }} />
    </div>
  );
}

// Scroll Animation Hook
function useScrollAnimation() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}

// Countdown Timer Component - Enhanced styling
function CountdownTimer({ targetDate }: { targetDate: Date }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (!mounted) {
    return (
      <div className="flex gap-3 md:gap-6 justify-center">
        {['days', 'hours', 'minutes', 'seconds'].map((label) => (
          <div key={label} className="flex flex-col items-center">
            <div className="glass-red rounded-2xl p-4 md:p-5 min-w-[60px] md:min-w-[90px] border border-red-500/30">
              <span className="text-2xl md:text-4xl font-bold text-red-400 font-code">
                --
              </span>
            </div>
            <span className="text-[10px] md:text-xs text-gray-500 mt-3 uppercase tracking-[0.2em] font-medium">
              {label}
            </span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="flex gap-3 md:gap-6 justify-center">
      {Object.entries(timeLeft).map(([label, value], index) => (
        <div
          key={label}
          className="flex flex-col items-center fade-in-up"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="glass-red rounded-2xl p-4 md:p-5 min-w-[60px] md:min-w-[90px] pulse-glow border border-red-500/30 hover:border-red-400/50 transition-all duration-300">
            <span className="text-2xl md:text-4xl font-bold text-red-400 font-code">
              {String(value).padStart(2, "0")}
            </span>
          </div>
          <span className="text-[10px] md:text-xs text-gray-500 mt-3 uppercase tracking-[0.2em] font-medium">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}

// Navigation Component - Fixed z-index and smoother animations
function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#timeline", label: "Timeline" },
    { href: "#prizes", label: "Prizes" },
    { href: "#contact", label: "Contact" },
  ];

  const handleNavClick = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "glass py-3 border-b border-red-500/20 shadow-lg shadow-red-900/10"
          : "bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 group">
          <span className="font-bold text-xl synapse-title text-white group-hover:text-red-400 transition-colors duration-300">
            SYNAPSE
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-300 hover:text-red-400 transition-all duration-300 text-sm font-medium link-hover"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://unstop.com/p/synapse-ai-case-simulation-challenge-sies-graduate-school-of-technology-navi-mumbai-maharashtra-1613771"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 bg-gradient-to-r from-red-600 to-red-500 rounded-full font-semibold text-sm btn-primary hover:from-red-500 hover:to-red-400 shadow-md shadow-red-900/25 ml-2"
          >
            Register Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-gray-300 hover:text-red-400 transition-colors"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="glass mt-3 mx-4 rounded-2xl p-5 border border-red-500/20">
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleNavClick}
              className="block py-3 text-gray-300 hover:text-red-400 transition-colors font-medium"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://unstop.com/p/synapse-ai-case-simulation-challenge-sies-graduate-school-of-technology-navi-mumbai-maharashtra-1613771"
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-4 px-6 py-3 bg-gradient-to-r from-red-600 to-red-500 rounded-full font-semibold text-center hover:from-red-500 hover:to-red-400 transition-all"
          >
            Register Now
          </a>
        </div>
      </div>
    </nav>
  );
}

// Feature Card Component - With real icons
function FeatureCard({ icon, title, description, delay }: { icon: React.ReactNode; title: string; description: string; delay: number }) {
  return (
    <div
      className="glass rounded-2xl p-7 card-hover border border-red-500/15 hover:border-red-500/40 group fade-in-up"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500/20 to-red-700/10 flex items-center justify-center mb-5 border border-red-500/20 group-hover:border-red-500/40 group-hover:scale-110 transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-white group-hover:text-red-400 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </div>
  );
}

// Timeline Item Component - Enhanced animations
function TimelineItem({
  date,
  title,
  description,
  location,
  note,
  isLast,
  index
}: {
  date: string;
  title: string;
  description: string;
  location: string;
  note?: string;
  isLast?: boolean;
  index: number;
}) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`flex gap-6 md:gap-8 ${isVisible ? 'fade-in-up' : 'opacity-0'}`}
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      <div className="flex flex-col items-center">
        <div className="w-5 h-5 bg-gradient-to-br from-red-400 to-red-600 rounded-full pulse-glow shadow-lg shadow-red-500/40 relative z-10" />
        {!isLast && (
          <div className="w-0.5 flex-1 bg-gradient-to-b from-red-500/60 via-red-500/30 to-transparent min-h-[120px]" />
        )}
      </div>
      <div className="glass rounded-2xl p-7 flex-1 mb-8 card-hover border border-red-500/20 hover:border-red-500/40">
        <div className="flex flex-wrap items-center gap-3 mb-3">
          <span className="text-red-400 font-code text-sm font-semibold glow-text">{date}</span>
          <span className="px-3 py-1.5 bg-red-500/15 text-red-300 text-xs rounded-full border border-red-500/30 font-medium">
            {location}
          </span>
        </div>
        <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
        {note && (
          <div className="mt-4 p-3 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
            <p className="text-yellow-400 text-xs font-medium">{note}</p>
          </div>
        )}
      </div>
    </div>
  );
}

// Section Header Component - Reusable with animations
function SectionHeader({ title, highlight, subtitle }: { title: string; highlight: string; subtitle?: string }) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div ref={ref} className={`text-center mb-16 ${isVisible ? 'fade-in-up' : 'opacity-0'}`}>
      <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
        {title} <span className="text-red-400 glow-text">{highlight}</span>
      </h2>
      {subtitle && <p className="text-gray-400 text-lg">{subtitle}</p>}
    </div>
  );
}

// Main Page Component
export default function Home() {
  const eventDate = new Date("2026-01-18T09:00:00");
  const [heroMounted, setHeroMounted] = useState(false);

  useEffect(() => {
    setHeroMounted(true);
  }, []);

  const features = [
    {
      icon: (
        <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "AI Ethics",
      description: "Explore the ethical implications of AI systems and learn to identify biases and failures."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "Product Thinking",
      description: "Apply product management principles to rescue and redesign failed AI products."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      ),
      title: "UX Design",
      description: "Create user-centered solutions that prioritize accessibility and experience."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      title: "Investigation",
      description: "Become an AI investigator and uncover what went wrong with the failed system."
    }
  ];

  const timelineEvents = [
    {
      date: "16th January 2026",
      title: "Round 1: Screening Quiz",
      description: "A short and simple online quiz with 20 multiple-choice questions. You do not need any AI, ML, or coding knowledge to attempt this round. If you understand how apps and systems work at a basic level, you're good to go. Think of this round as a friendly screening, not a difficult test.",
      location: "Online",
      note: "If not selected for Round 2, entry fee will be refunded (after deducting ₹50) within 20 days"
    },
    {
      date: "28th January 2026",
      title: "Round 2: AI Failure Investigation",
      description: "Top 25 teams shortlisted from Round 1 will move to the main offline event. Work on a real-world AI failure case, analyse what went wrong, redesign the system and user experience, and present your solution to the judges.",
      location: "Offline at SIESGST"
    },
    {
      date: "28th January 2026",
      title: "Round 3: Final Presentation & Pitch",
      description: "TOP 15 Teams present their solution in front of judges and industry experts. Evaluation based on innovation, problem solving, ethical understanding, and presentation. Duration: 5 mins per team (excluding Q&A).",
      location: "Offline at SIESGST"
    }
  ];

  return (
    <main className="min-h-screen bg-[#030303] overflow-x-hidden relative">
      <Starfield />
      <EmberParticles />
      <FloatingOrbs />
      <GeometricShapes />
      <LightStreaks />
      <Navigation />

      {/* Hero Section - Fixed spacing and z-index */}
      <section id="home" className="min-h-screen flex flex-col items-center justify-center px-4 pt-16 pb-16 relative z-10">
        {/* Realistic Dark Red Planet */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
          {/* Planet base sphere */}
          <div
            className="absolute w-[400px] h-[400px] md:w-[550px] md:h-[550px] rounded-full"
            style={{
              background: `
                radial-gradient(ellipse 100% 100% at 50% 50%,
                  #c41e1e 0%,
                  #a31818 15%,
                  #8b1515 30%,
                  #721212 50%,
                  #4a0c0c 70%,
                  #2a0707 85%,
                  #0d0202 100%
                )
              `,
              transform: 'translateY(-5%)'
            }}
          />

          {/* Spinning terrain layer */}
          <div
            className="absolute w-[400px] h-[400px] md:w-[550px] md:h-[550px] rounded-full animate-spin-planet overflow-hidden"
            style={{ transform: 'translateY(-5%)' }}
          >
            {/* Large dark maria (seas) - high contrast */}
            <div className="absolute w-[180px] h-[120px] rounded-[50%] bg-[#1a0303] top-[20%] left-[10%] blur-[6px] opacity-90" />
            <div className="absolute w-[150px] h-[100px] rounded-[50%] bg-[#150202] top-[50%] left-[50%] blur-[5px] opacity-85" />
            <div className="absolute w-[130px] h-[80px] rounded-[50%] bg-[#1c0404] top-[65%] left-[20%] blur-[7px] opacity-80" />

            {/* Medium terrain patches */}
            <div className="absolute w-[100px] h-[60px] rounded-[50%] bg-[#200505] top-[35%] left-[65%] blur-[4px] opacity-85" />
            <div className="absolute w-[90px] h-[55px] rounded-[50%] bg-[#180303] top-[10%] left-[50%] blur-[5px] opacity-80" />
            <div className="absolute w-[110px] h-[70px] rounded-[50%] bg-[#1e0404] top-[75%] left-[55%] blur-[6px] opacity-75" />

            {/* Bright highland spots */}
            <div className="absolute w-[80px] h-[50px] rounded-[50%] bg-[#e83a3a] top-[40%] left-[25%] blur-[10px] opacity-40" />
            <div className="absolute w-[60px] h-[40px] rounded-[50%] bg-[#f04545] top-[55%] left-[35%] blur-[8px] opacity-35" />
            <div className="absolute w-[70px] h-[45px] rounded-[50%] bg-[#dc3030] top-[25%] left-[40%] blur-[9px] opacity-30" />

            {/* Prominent craters */}
            <div className="absolute w-[35px] h-[35px] rounded-full bg-[#0a0101] top-[45%] left-[45%] blur-[2px] opacity-90" />
            <div className="absolute w-[28px] h-[28px] rounded-full bg-[#0c0202] top-[30%] left-[55%] blur-[2px] opacity-85" />
            <div className="absolute w-[22px] h-[22px] rounded-full bg-[#0e0202] top-[60%] left-[30%] blur-[1px] opacity-80" />
            <div className="absolute w-[40px] h-[40px] rounded-full bg-[#080101] top-[70%] left-[45%] blur-[2px] opacity-85" />
          </div>

          {/* 3D lighting overlay (static) */}
          <div
            className="absolute w-[400px] h-[400px] md:w-[550px] md:h-[550px] rounded-full"
            style={{
              background: `
                radial-gradient(circle at 30% 30%, rgba(255, 150, 150, 0.15) 0%, transparent 40%),
                radial-gradient(circle at 70% 70%, rgba(0, 0, 0, 0.5) 0%, transparent 50%)
              `,
              transform: 'translateY(-5%)'
            }}
          />

          {/* Terminator shadow (day/night boundary) */}
          <div
            className="absolute w-[400px] h-[400px] md:w-[550px] md:h-[550px] rounded-full"
            style={{
              background: 'linear-gradient(105deg, transparent 0%, transparent 45%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.7) 60%, rgba(0,0,0,0.9) 75%)',
              transform: 'translateY(-5%)'
            }}
          />

          {/* Atmospheric rim glow */}
          <div
            className="absolute w-[400px] h-[400px] md:w-[550px] md:h-[550px] rounded-full"
            style={{
              boxShadow: `
                inset 2px 0 20px rgba(255, 80, 80, 0.3),
                inset -50px -30px 80px rgba(0, 0, 0, 0.8),
                0 0 60px rgba(200, 50, 50, 0.25),
                0 0 100px rgba(150, 30, 30, 0.15)
              `,
              transform: 'translateY(-5%)'
            }}
          />

          {/* Thin atmosphere edge */}
          <div
            className="absolute w-[410px] h-[410px] md:w-[565px] md:h-[565px] rounded-full"
            style={{
              background: 'radial-gradient(circle at 50% 50%, transparent 88%, rgba(255, 100, 100, 0.08) 94%, rgba(255, 80, 80, 0.12) 97%, transparent 100%)',
              transform: 'translateY(-5%)'
            }}
          />
        </div>

        <div className={`text-center relative z-20 max-w-5xl mx-auto ${heroMounted ? 'fade-in-up' : 'opacity-0'}`}>
          {/* Dark backdrop for text readability */}
          <div
            className="absolute inset-0 -mx-8 -my-4 rounded-3xl"
            style={{
              background: 'radial-gradient(ellipse 80% 70% at 50% 45%, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.3) 50%, transparent 80%)'
            }}
          />

          <div className="relative">
            {/* CSI SIESGST presents */}
            <div className="mb-6 fade-in-up flex flex-col items-center" style={{ animationDelay: '0.1s' }}>
              <img
                src="/csi-logo.png"
                alt="CSI SIESGST"
                className="h-20 md:h-28 lg:h-32 w-auto mb-2"
                style={{ filter: 'drop-shadow(0 2px 10px rgba(0, 0, 0, 0.8))' }}
              />
              <p
                className="text-base md:text-lg text-gray-300 italic font-light"
                style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.8)' }}
              >
                presents
              </p>
            </div>

            {/* Main Title */}
            <h1
              className="text-5xl md:text-7xl lg:text-[8rem] font-black mb-2 synapse-title text-white hero-title tracking-wider fade-in-up"
              style={{
                animationDelay: '0.2s',
                textShadow: '0 4px 20px rgba(0, 0, 0, 0.9), 0 0 60px rgba(200, 80, 80, 0.3), 0 0 100px rgba(180, 60, 60, 0.2)'
              }}
            >
              SYNAPSE
            </h1>

            {/* Year */}
            <p
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-red-400 mb-4 fade-in-up"
              style={{
                animationDelay: '0.3s',
                textShadow: '0 4px 15px rgba(0, 0, 0, 0.9), 0 0 40px rgba(255, 100, 100, 0.5)'
              }}
            >
              2026
            </p>

            {/* Tagline */}
            <p
              className="text-lg md:text-2xl text-white mb-8 font-light fade-in-up"
              style={{
                animationDelay: '0.4s',
                textShadow: '0 2px 10px rgba(0, 0, 0, 0.9)'
              }}
            >
              Where Logic is <span className="text-red-400 font-semibold" style={{ textShadow: '0 0 20px rgba(255, 100, 100, 0.6)' }}>Challenged</span>
            </p>

            {/* Countdown Timer */}
            <div className="mb-8 fade-in-up" style={{ animationDelay: '0.5s' }}>
              <p
                className="text-sm text-gray-300 mb-4 uppercase tracking-[0.25em] font-medium"
                style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.8)' }}
              >
                Event starts in
              </p>
              <CountdownTimer targetDate={eventDate} />
            </div>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-5 justify-center fade-in-up relative z-10"
              style={{ animationDelay: '0.6s' }}
            >
              <a
                href="https://unstop.com/p/synapse-ai-case-simulation-challenge-sies-graduate-school-of-technology-navi-mumbai-maharashtra-1613771"
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-4 bg-gradient-to-r from-red-600 to-red-500 rounded-full font-bold text-lg btn-primary hover:from-red-500 hover:to-red-400 shadow-lg shadow-red-900/30 glow-pulse-btn text-white"
                style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)' }}
              >
                Register Now
              </a>
              <a
                href="#about"
                className="px-10 py-4 border-2 border-red-500/60 rounded-full font-bold text-lg hover:bg-red-500/20 hover:border-red-400/80 transition-all duration-300 text-red-400 hover:text-red-300 backdrop-blur-sm"
                style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.8)' }}
              >
                Learn More
              </a>
            </div>
          </div>
        </div>


        {/* Crowd Silhouettes */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none z-10">
          <img
            src="https://www.pngall.com/wp-content/uploads/2016/05/Crowd-Free-Download-PNG.png"
            alt=""
            className="w-full h-auto opacity-80"
            style={{ filter: 'brightness(0) saturate(100%)' }}
          />
        </div>
      </section>

      {/* About Section - Fixed spacing */}
      <section id="about" className="py-28 px-4 relative z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-28 bg-gradient-to-b from-red-500/60 to-transparent" />

        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="About"
            highlight="SYNAPSE"
          />

          <div className="text-center mb-12">
            <p className="text-gray-300 max-w-4xl mx-auto text-lg leading-relaxed fade-in-up mb-6">
              SYNAPSE is a <span className="text-red-400 font-semibold">job simulation</span> where you step into the role of an{" "}
              <span className="text-red-400 font-semibold">AI System Investigator</span> and{" "}
              <span className="text-red-400 font-semibold">Product Strategist</span> working on a live production issue.
            </p>
            <div className="glass rounded-2xl p-8 max-w-3xl mx-auto border border-red-500/20 fade-in-up" style={{ animationDelay: '0.1s' }}>
              <p className="text-xl text-white font-medium mb-4">A real-world AI system has failed.</p>
              <p className="text-lg text-gray-300 mb-2">Users are affected. Trust is broken.</p>
              <p className="text-red-400 font-semibold text-lg">Your task is to analyse the failure, identify the root cause, and redesign the system—just like teams do in real tech companies.</p>
            </div>
            <p className="text-gray-400 max-w-2xl mx-auto text-base mt-8 fade-in-up italic" style={{ animationDelay: '0.2s' }}>
              This is not a coding contest. It is a thinking, analysis, and decision-making simulation.
            </p>
          </div>

          {/* Your Role Section */}
          <div className="mb-20">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-10 text-white fade-in-up">
              Your <span className="text-red-400 glow-text">Role</span>
            </h3>
            <p className="text-gray-300 text-center mb-8 fade-in-up">You are part of a task force brought in to:</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {[
                { icon: "🔍", text: "Investigate system behaviour using logs and outputs" },
                { icon: "🎯", text: "Perform Root Cause Analysis (technical + ethical)" },
                { icon: "🔧", text: "Redesign the AI workflow to prevent future failures" },
                { icon: "💬", text: "Improve how the system explains decisions to users" },
                { icon: "🎤", text: "Defend your solution to an AI review board (judges)" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="glass rounded-xl p-5 border border-red-500/20 hover:border-red-500/40 transition-all duration-300 fade-in-up flex items-center gap-4"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="text-2xl">{item.icon}</span>
                  <p className="text-gray-300 text-sm">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {features.map((feature, index) => (
              <FeatureCard key={index} icon={feature.icon} title={feature.title} description={feature.description} delay={index * 0.1} />
            ))}
          </div>

          {/* Investigation Terminal */}
          <div className="glass rounded-2xl overflow-hidden max-w-3xl mx-auto border border-red-500/20 fade-in-up mb-20">
            <div className="flex items-center gap-2 px-5 py-4 bg-gradient-to-r from-[#1a0808] to-[#150606] border-b border-red-500/20">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="ml-4 text-sm text-gray-500 font-code">ai_investigation.log</span>
            </div>
            <div className="p-7 font-code text-sm leading-loose">
              <p className="text-gray-500">{"> "}Initializing AI Ethics Investigation...</p>
              <p className="text-red-400">{"> "}ERROR: AI System NEXUS-7 has failed</p>
              <p className="text-orange-400">{"> "}WARNING: Ethical violations detected</p>
              <p className="text-gray-300">{"> "}Mission: Identify root cause</p>
              <p className="text-gray-300">{"> "}Mission: Propose ethical solutions</p>
              <p className="text-gray-300">{"> "}Mission: Rebuild user trust</p>
              <p className="text-green-400">{"> "}Status: Awaiting investigators...</p>
              <p className="text-red-400 flex items-center">
                {"> "}<span className="cursor-blink ml-1">_</span>
              </p>
            </div>
          </div>

          {/* Guidelines Section */}
          <div className="mb-0">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-10 text-white fade-in-up">
              Who Can <span className="text-red-400 glow-text">Participate?</span>
            </h3>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Eligibility */}
              <div className="glass rounded-2xl p-8 border border-red-500/20 hover:border-red-500/40 transition-all duration-300 fade-in-up">
                <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-500/30 to-red-700/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                  Eligibility
                </h4>
                <ul className="space-y-3">
                  {[
                    "Open to all college students",
                    "Inter-college team members allowed",
                    "Inter-specialisation team members allowed",
                    "Anyone interested in AI, product, design, or consulting",
                    "Students who enjoy problem-solving and analysis"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                      <span className="text-red-400 mt-0.5">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Team Size */}
              <div className="glass rounded-2xl p-8 border border-red-500/20 hover:border-red-500/40 transition-all duration-300 fade-in-up" style={{ animationDelay: '0.1s' }}>
                <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-500/30 to-red-700/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </span>
                  Team Size
                </h4>
                <div className="text-center py-6">
                  <div className="text-5xl font-bold text-red-400 glow-text mb-2">2-3</div>
                  <p className="text-gray-300 text-lg">Members per team</p>
                </div>
                <div className="glass-red rounded-xl p-4 border border-red-500/30 mt-4">
                  <p className="text-sm text-gray-300 text-center">
                    Form a diverse team with complementary skills for the best results!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="py-28 px-4 relative z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-28 bg-gradient-to-b from-red-500/60 to-transparent" />

        <div className="max-w-3xl mx-auto">
          <SectionHeader
            title="Event"
            highlight="Timeline"
            subtitle="Mark these dates on your calendar"
          />

          <div className="relative mt-12">
            {timelineEvents.map((event, index) => (
              <TimelineItem
                key={index}
                {...event}
                index={index}
                isLast={index === timelineEvents.length - 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Prize Section */}
      <section id="prizes" className="py-28 px-4 relative z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-28 bg-gradient-to-b from-red-500/60 to-transparent" />

        <div className="max-w-4xl mx-auto text-center">
          <SectionHeader
            title="Prize"
            highlight="Pool"
            subtitle="Compete for glory and rewards"
          />

          <div className="glass rounded-3xl p-10 md:p-14 relative overflow-hidden border border-red-500/25 fade-in-up">
            <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 via-transparent to-red-600/5" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-red-500/10 rounded-full blur-[100px]" />

            <div className="relative z-10">
              <div className="text-7xl mb-8 float">🏆</div>
              <div className="text-5xl md:text-7xl font-bold text-red-400 mb-5 glow-text-intense">₹7,000</div>
              <p className="text-xl text-gray-300 font-medium">Total Prize Pool</p>

              <div className="mt-10 pt-8 border-t border-red-500/20">
                <p className="text-gray-400">+ Certificates, Swag, and Networking Opportunities</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Gain Section */}
      <section className="py-28 px-4 relative z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-28 bg-gradient-to-b from-red-500/60 to-transparent" />

        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="What You"
            highlight="Gain"
            subtitle="Skills and experience that matter"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              {
                icon: (
                  <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                ),
                title: "Real-World Experience",
                description: "Experience a real-world AI decision-making workflow used in tech companies"
              },
              {
                icon: (
                  <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                  </svg>
                ),
                title: "System Thinking",
                description: "Practice system-level thinking used in industry to solve complex problems"
              },
              {
                icon: (
                  <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                ),
                title: "Portfolio Builder",
                description: "Build a strong case study for interviews and enhance your resume"
              },
              {
                icon: (
                  <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                title: "Responsible AI",
                description: "Learn how responsible AI is designed, reviewed, and deployed ethically"
              }
            ].map((item, index) => (
              <FeatureCard key={index} icon={item.icon} title={item.title} description={item.description} delay={index * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* What Makes This Different Section */}
      <section className="py-28 px-4 relative z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-28 bg-gradient-to-b from-red-500/60 to-transparent" />

        <div className="max-w-5xl mx-auto">
          <SectionHeader
            title="What Makes This"
            highlight="Different"
            subtitle="Not your typical hackathon"
          />

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {[
              { icon: "📁", text: "Case files based on real AI product failures" },
              { icon: "🧠", text: "Focus on system logic, not algorithms" },
              { icon: "🎨", text: "Product, UX, and ethics combined in one challenge" },
              { icon: "💻", text: "No ML coding required" },
              { icon: "📊", text: "Evaluated on clarity, reasoning, and feasibility" }
            ].map((item, index) => (
              <div
                key={index}
                className="glass rounded-xl p-6 border border-red-500/20 hover:border-red-500/40 transition-all duration-300 fade-in-up flex items-center gap-5 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="text-3xl group-hover:scale-110 transition-transform duration-300">{item.icon}</span>
                <p className="text-gray-200 text-lg font-medium">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Dates Section */}
      <section className="py-28 px-4 relative z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-28 bg-gradient-to-b from-red-500/60 to-transparent" />

        <div className="max-w-5xl mx-auto">
          <SectionHeader
            title="Important"
            highlight="Dates"
            subtitle="Mark your calendar"
          />

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              {
                date: "16 Jan 2026",
                time: "12:00 AM IST",
                label: "Quiz Attempting",
                description: "Round 1 quiz goes live"
              },
              {
                date: "18 Jan 2026",
                time: "12:00 AM IST",
                label: "Registration Deadline",
                description: "Last date to register"
              },
              {
                date: "28 Jan 2026",
                time: "02:00 PM IST",
                label: "Offline Simulation",
                description: "Rounds 2 & 3 at SIESGST"
              }
            ].map((item, index) => (
              <div
                key={index}
                className="glass rounded-2xl p-8 border border-red-500/20 hover:border-red-500/40 transition-all duration-300 text-center fade-in-up group"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-red-500/30 to-red-700/20 flex items-center justify-center border border-red-500/30 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="text-2xl font-bold text-white mb-1">{item.date}</div>
                <div className="text-red-400 font-code text-sm mb-4">{item.time}</div>
                <div className="px-4 py-2 bg-red-500/15 rounded-full inline-block mb-3">
                  <span className="text-red-300 text-sm font-semibold">{item.label}</span>
                </div>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>

          {/* CTA after dates */}
          <div className="text-center mt-16 fade-in-up">
            <p className="text-gray-300 text-lg mb-6">Don&apos;t miss out on this unique opportunity!</p>
            <a
              href="https://unstop.com/p/synapse-ai-case-simulation-challenge-sies-graduate-school-of-technology-navi-mumbai-maharashtra-1613771"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 bg-gradient-to-r from-red-600 to-red-500 rounded-full font-bold text-lg btn-primary hover:from-red-500 hover:to-red-400 shadow-lg shadow-red-900/30 glow-pulse-btn text-white"
            >
              Register Now on Unstop
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-28 px-4 relative z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-28 bg-gradient-to-b from-red-500/60 to-transparent" />

        <div className="max-w-4xl mx-auto">
          <SectionHeader
            title="Contact"
            highlight="Us"
            subtitle="Reach out to our event leads"
          />

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { name: "Kanishka Jadhav", phone: "+91 90828 85761", tel: "+919082885761" },
              { name: "Chinmay Rane", phone: "+91 93220 84986", tel: "+919322084986" }
            ].map((contact, index) => (
              <div
                key={contact.name}
                className="glass rounded-2xl p-8 text-center card-hover border border-red-500/20 hover:border-red-500/40 fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <h3 className="text-xl font-bold mb-2 text-white">{contact.name}</h3>
                <p className="text-red-400 mb-5 font-medium">Event Lead</p>
                <a
                  href={`tel:${contact.tel}`}
                  className="inline-flex items-center gap-3 text-gray-300 hover:text-red-400 transition-colors text-lg group"
                >
                  <svg className="w-5 h-5 text-red-500 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {contact.phone}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-14 px-4 border-t border-red-500/20 relative z-10 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[150px] bg-red-500/8 rounded-full blur-[80px]" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-4">
              <div>
                <div className="font-bold text-xl synapse-title text-white">SYNAPSE 2026</div>
                <div className="text-sm text-red-400/70 mt-1">by CSI SIESGST</div>
              </div>
            </div>

            <div className="flex gap-8 text-sm text-gray-400">
              {['About', 'Timeline', 'Prizes', 'Contact'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="hover:text-red-400 transition-colors link-hover"
                >
                  {link}
                </a>
              ))}
            </div>

            <a
              href="https://unstop.com/p/synapse-ai-case-simulation-challenge-sies-graduate-school-of-technology-navi-mumbai-maharashtra-1613771"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-2.5 bg-gradient-to-r from-red-600 to-red-500 rounded-full font-semibold text-sm btn-primary hover:from-red-500 hover:to-red-400 shadow-lg shadow-red-500/30"
            >
              Register Now
            </a>
          </div>

          <div className="mt-10 pt-8 border-t border-red-500/15 text-center text-gray-500 text-sm">
            <p>&copy; 2026 <span className="text-red-400">Synapse</span> | CSI SIESGST | Where Logic is Challenged</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
