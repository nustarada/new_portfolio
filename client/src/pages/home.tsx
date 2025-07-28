import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { Link } from 'wouter';
import { useToast } from '@/hooks/use-toast';
import { LiquidGrid } from '@/components/liquid-grid';
import { MovingRibbon } from '@/components/moving-ribbon';
import logoPath from '@assets/Logo black_1749729973781.png';
import futureFirstFamiliesThumbnail from '@assets/Screenshot 2025-07-29 at 00.03.25_1753728466090.png';
import resumePdf from '@assets/Karan_Gadhave_CV_1749719107819.pdf';
import profilePhoto from '@assets/Snapchat-46456319_1753732781437.jpg';
import { 
  Terminal, 
  Sparkles, 
  Brain, 
  Zap, 
  Code2, 
  Palette, 
  Database,
  Layers,
  Users,
  Clock,
  Target,
  ArrowUpRight,
  Mail,
  Github,
  Linkedin,
  Download,
  Eye,
  User,
  Briefcase,
  MessageSquare,
  Send,
  ArrowRight,
  X,
  MapPin,
  FileText,
  Lightbulb,
  Heart,
  Trophy
} from 'lucide-react';

export default function Home() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [activeSection, setActiveSection] = useState('');
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  const [waveIntensity, setWaveIntensity] = useState(0.3);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const { toast } = useToast();

  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const contactMutation = useMutation({
    mutationFn: async (data: any) => {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to send message');
      }
      return response.json();
    },
    onSuccess: (data) => {
      reset();
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
        duration: 5000,
      });
    },
    onError: (error: any) => {
      toast({
        title: "Failed to Send Message",
        description: error.message || "Please try again later.",
        variant: "destructive",
        duration: 5000,
      });
    },
  });

  useEffect(() => {
    let ticking = false;
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setCursorPos({ x: e.clientX, y: e.clientY });
          
          // Update liquid wave position for hero section
          if (heroRef.current) {
            const rect = heroRef.current.getBoundingClientRect();
            const isInHero = e.clientY >= rect.top && e.clientY <= rect.bottom;
            
            if (isInHero) {
              const x = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
              const y = Math.max(0, Math.min(100, ((e.clientY - rect.top) / rect.height) * 100));
              
              setMousePos({ x, y });
              setWaveIntensity(1);
              heroRef.current.style.setProperty('--mouse-x', `${x}%`);
              heroRef.current.style.setProperty('--mouse-y', `${y}%`);
            } else {
              setWaveIntensity(0.3);
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };



    const handleScroll = () => {
      const sections = ['hero', 'about', 'projects', 'expertise', 'contact'];
      const scrollPos = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPos >= offsetTop && scrollPos < offsetTop + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const projects = [
    {
      title: "FutureFirstFamilies",
      subtitle: "Gamified Advocacy Platform",
      description: "A civic engagement platform empowering parents to take monthly actions on educational reform through gamified, user-friendly design tailored for non-tech-savvy users.",
      detailedDescription: "Designed and developed the entire platform from ground up, combining gamification with advocacy to create an engaging experience that increased completed actions by 30% and achieved 4× higher user retention.",
      image: "/api/placeholder/600/400",
      liveUrl: "https://futurefirstfamilies.com/",
      tags: ["Civic Engagement", "Gamification", "React", "UX Research", "Full-Stack"],
      year: "2025",
      category: "Civic Platform",
      role: "UX Research, Design System, Full Development",
      outcomes: [
        "30% increase in completed actions within first month",
        "4× higher user retention vs previous system", 
        "1500+ parents onboarded in first 3 weeks",
        "Significant improvement in action tracking and admin workflow"
      ],
      keyFeatures: [
        "Combined Monthly Action and Activity Hub into single tab-based experience",
        "Milestone-based reward system for completing actions",
        "Referral leaderboard to encourage viral growth",
        "Simple admin dashboard for content management",
        "Accessibility features including light/dark modes and clean typography"
      ],
      techStack: ["React", "JavaScript", "Replit", "Responsive Design", "Accessibility"],
      process: [
        "Conducted interviews with advocacy organizers",
        "Created user flows and low-fidelity wireframes", 
        "Designed high-fidelity mockups and reusable design system",
        "Developed platform using React in Replit",
        "Integrated gamification, referrals, and accessibility features",
        "Tested and refined based on team feedback"
      ]
    },
    {
      title: "AI-Powered Design System",
      description: "Next-generation design system with AI-driven component generation and automated documentation",
      image: "/api/placeholder/600/400",
      tags: ["AI/ML", "Design Systems", "Automation"],
      year: "2025",
      category: "Product Design"
    },
    {
      title: "Enterprise Analytics Dashboard", 
      description: "Real-time analytics platform processing millions of data points with intuitive visualization",
      image: "/api/placeholder/600/400",
      tags: ["Data Visualization", "Enterprise", "Real-time"],
      year: "2025",
      category: "Data & Analytics"
    }
  ];

  const skills = [
    { name: "AI Integration", level: 95, icon: Brain },
    { name: "Design Systems", level: 92, icon: Layers },
    { name: "User Research", level: 88, icon: Users },
    { name: "Product Strategy", level: 90, icon: Target },
    { name: "Prototyping", level: 87, icon: Zap },
    { name: "Data Visualization", level: 85, icon: Database }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden" style={{ backgroundColor: '#040406', color: '#fafafa' }}>


      {/* Scroll Progress */}
      <motion.div className="scroll-indicator" style={{ scaleX }} />

      {/* Floating Orbs */}
      <div className="floating-orb w-64 h-64 top-20 -left-32 opacity-30" />
      <div className="floating-orb w-96 h-96 top-1/2 -right-48 opacity-20" style={{ animationDelay: '2s' }} />
      <div className="floating-orb w-48 h-48 bottom-20 left-1/4 opacity-25" style={{ animationDelay: '4s' }} />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-[100] glass-card grain-texture border-b border-white/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
          >
            <img src={logoPath} alt="Karan Gadhave" className="w-10 h-10" />
          </motion.div>
          
          <div className="hidden md:flex items-center space-x-8">
            {['About', 'Projects'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`text-sm font-semibold transition-colors hover:text-primary jost-secondary ${
                  activeSection === item.toLowerCase() ? 'text-primary' : 'text-foreground opacity-80'
                }`}
                whileHover={{ y: -2 }}
              >
                {item}
              </motion.a>
            ))}
            <motion.button
              onClick={() => setIsResumeOpen(true)}
              className="text-sm font-semibold transition-colors hover:text-primary text-foreground opacity-80 jost-secondary"
              whileHover={{ y: -2 }}
            >
              Resume
            </motion.button>
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button
              onClick={() => {
                const contactSection = document.getElementById('contact');
                contactSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="relative group px-6 py-3 text-white font-bold cta-button grain-texture border-0"
            >

              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              <div className="relative z-10 flex items-center space-x-2 jost-secondary">
                <Mail className="w-4 h-4" />
                <span>Contact Me</span>
              </div>
            </button>
          </motion.div>
        </div>
      </nav>


      {/* Hero Section */}
      <section 
        ref={heroRef} 
        id="hero" 
        className="min-h-screen flex items-center justify-center relative cyber-grid pt-32 pb-8"
        style={{
          '--mouse-x': `${mousePos.x}%`,
          '--mouse-y': `${mousePos.y}%`,
          '--wave-intensity': waveIntensity
        } as React.CSSProperties}
      >
        <LiquidGrid 
          mouseX={mousePos.x} 
          mouseY={mousePos.y} 
          intensity={waveIntensity}
        />
        
        {/* Elegant Single Color Background */}
        <div className="absolute inset-0 pointer-events-none z-[1]">
          {/* Primary Elegant Glow */}
          <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/12 blur-3xl animate-pulse" />
          
          {/* Refined Grid Lines */}
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent opacity-50" />
          <div className="absolute left-1/2 top-0 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent opacity-40" />
          
          {/* Minimal Corner Accents */}
          <div className="absolute top-12 left-12 w-12 h-12 border-l border-t border-primary/40" />
          <div className="absolute top-12 right-12 w-12 h-12 border-r border-t border-primary/40" />
          <div className="absolute bottom-12 left-12 w-12 h-12 border-l border-b border-primary/40" />
          <div className="absolute bottom-12 right-12 w-12 h-12 border-r border-b border-primary/40" />
        </div>
        <div className="max-w-5xl mx-auto px-6 text-center relative z-20 w-full">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-6 md:space-y-8"
          >
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Badge 
                  variant="outline" 
                  className="text-sm px-6 py-3 glass-card grain-texture text-white font-semibold tracking-wider hover:glass-intense transition-all duration-300 jost-secondary"
                >
                  <Sparkles className="w-4 h-4 mr-2 text-primary" />
                  AVAILABLE FOR NEW OPPORTUNITIES
                </Badge>
              </motion.div>
            </motion.div>
            
            {/* Name with Bold Display */}
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-normal text-white tracking-wide leading-tight hero-text-hover modern-heritage">
                <span className="text-gradient">KARAN GADHAVE</span>
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-emerald-400 mx-auto"></div>
            </motion.div>
            
            {/* Title/Role */}
            <motion.div 
              className="space-y-3"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal leading-tight modern-heritage">
                <span className="text-white">SENIOR </span>
                <span className="glow-text">PRODUCT DESIGNER</span>
              </h2>
              
              <motion.div 
                className="flex items-center justify-center gap-4"
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                <div className="w-16 h-0.5 bg-primary" />
                <span className="text-xl md:text-2xl font-light text-primary jost-secondary">
                  & AI INNOVATOR
                </span>
                <div className="w-16 h-0.5 bg-primary" />
              </motion.div>
            </motion.div>
            
            {/* Compact Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3 }}
              className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto font-normal jost-secondary"
            >
              Designing exceptional digital experiences using AI-powered design tools, Figma workflows, and innovative platforms like Replit.
            </motion.p>
            

            
            {/* Action Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
            >
              <motion.div
                whileHover={{ scale: 1.08, y: -4 }}
                whileTap={{ scale: 0.95 }}
                className="group/hero-cta"
              >
                <Button 
                  size="lg" 
                  className="relative overflow-hidden px-12 py-6 text-lg font-bold text-white cta-button grain-texture border-0 hover:scale-105"
                >
                  {/* Animated Background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover/hero-cta:translate-x-full transition-transform duration-700" />
                  
                  {/* Pulsing Ring */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-white/30 opacity-0 group-hover/hero-cta:opacity-100 group-hover/hero-cta:scale-110 transition-all duration-500" />
                  
                  <div className="relative z-10 flex items-center space-x-3">
                    <ArrowUpRight className="w-6 h-6 group-hover/hero-cta:rotate-45 transition-transform duration-300" />
                    <span>View My Work</span>
                  </div>
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group/secondary"
              >
                <Button 
                  size="lg" 
                  onClick={() => setIsResumeOpen(true)}
                  className="relative overflow-hidden px-10 py-4 text-lg font-semibold text-white glass-card grain-texture hover:glass-intense border-primary/50 transition-all duration-300 hover:scale-105"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 opacity-0 group-hover/secondary:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10 flex items-center space-x-2">
                    <Eye className="w-5 h-5" />
                    <span>Resume</span>
                  </div>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Moving Skills Ribbon */}
      <MovingRibbon />

      {/* Statistics Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Elegant Background */}
        <div className="absolute inset-0 grain-texture">
          <div className="absolute inset-0 bg-gradient-to-br from-background/98 via-background/95 to-background/98" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/15 blur-3xl animate-pulse" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2 
              className="text-4xl md:text-6xl font-normal mb-6 glow-text modern-heritage"
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              ACHIEVEMENTS
            </motion.h2>
            <motion.div 
              className="w-32 h-1 bg-gradient-to-r from-primary via-cyan-400 to-emerald-400 mx-auto mb-8"
              initial={{ width: 0 }}
              whileInView={{ width: 128 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            />
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed jost-secondary">
              Proven impact through innovative design solutions and exceptional team leadership
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { 
                number: '4+', 
                label: 'Years Experience', 
                color: 'from-primary to-purple-500', 
                icon: Clock,
                description: 'Specialized UI/UX expertise'
              },
              { 
                number: '50+', 
                label: 'Projects Delivered', 
                color: 'from-purple-500 to-pink-500', 
                icon: Zap,
                description: 'Successful design solutions'
              },
              { 
                number: '15+', 
                label: 'Team Members Led', 
                color: 'from-pink-500 to-orange-500', 
                icon: Users,
                description: 'Cross-functional collaboration'
              }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -8 }}
                className="group"
              >
                <Card className="relative overflow-hidden text-center p-10 glass-card grain-texture hover:glass-intense transition-all duration-500 h-full">
                  {/* Animated Background Effects */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-cyan-400/15 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/10 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Floating Particles */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-primary/80 animate-pulse" />
                  <div className="absolute bottom-6 left-6 w-1.5 h-1.5 bg-cyan-400/80 animate-pulse delay-500" />
                  <div className="absolute top-1/2 left-4 w-1 h-1 bg-emerald-400/70 animate-pulse delay-1000" />
                  
                  {/* Content */}
                  <div className="relative z-10 space-y-6">
                    {/* Icon Container */}
                    <motion.div 
                      className="w-20 h-20 mx-auto flex items-center justify-center backdrop-blur-sm border border-white/20 group-hover:scale-110 transition-all duration-500"
                      style={{
                        background: `linear-gradient(135deg, ${
                          stat.color === 'from-primary to-purple-500' ? 'hsla(185, 84%, 55%, 0.25), hsla(285, 85%, 60%, 0.25)' :
                          stat.color === 'from-purple-500 to-pink-500' ? 'hsla(180, 70%, 50%, 0.25), hsla(170, 60%, 45%, 0.25)' :
                          'hsla(45, 93%, 70%, 0.25), hsla(25, 95%, 60%, 0.25)'
                        })`
                      }}
                      whileHover={{ rotate: 5 }}
                    >
                      <stat.icon className="w-10 h-10 text-white drop-shadow-lg" />
                    </motion.div>
                    
                    {/* Number Display */}
                    <motion.div 
                      className={`text-6xl md:text-7xl font-black leading-none modern-heritage`}
                      style={{
                        background: `linear-gradient(135deg, ${
                          stat.color === 'from-primary to-purple-500' ? 'hsl(262, 83%, 58%), hsl(280, 100%, 70%)' :
                          stat.color === 'from-purple-500 to-pink-500' ? 'hsl(280, 100%, 70%), hsl(330, 81%, 60%)' :
                          'hsl(330, 81%, 60%), hsl(25, 95%, 53%)'
                        })`,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                      }}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
                      viewport={{ once: true }}
                    >
                      {stat.number}
                    </motion.div>
                    
                    {/* Label and Description */}
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-white tracking-wide jost-secondary">
                        {stat.label}
                      </h3>
                      <p className="text-white/60 text-sm leading-relaxed jost-secondary">
                        {stat.description}
                      </p>
                    </div>
                  </div>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Additional Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              {[
                { metric: '60%', label: 'Faster Design Cycles', icon: '⚡' },
                { metric: '95%', label: 'Client Satisfaction', icon: '⭐' }
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  className="flex items-center justify-center space-x-4 p-6 glass-card grain-texture hover:glass-intense transition-all duration-300"
                  initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <span className="text-3xl">{item.icon}</span>
                  <div className="text-left">
                    <div className="text-2xl font-bold text-primary jost-secondary">{item.metric}</div>
                    <div className="text-white/70 text-sm jost-secondary">{item.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 relative overflow-hidden">
        {/* Elegant Background */}
        <div className="absolute inset-0 grain-texture">
          <div className="absolute inset-0 bg-gradient-to-br from-background/98 via-background/95 to-background/98" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-primary/12 blur-3xl animate-pulse" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" />
        </div>
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.h2 
              className="text-4xl md:text-6xl font-normal mb-6 glow-text modern-heritage"
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              ABOUT ME
            </motion.h2>
            <motion.div 
              className="w-24 h-1 bg-gradient-to-r from-primary to-cyan-400 mx-auto mb-8"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            />
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed jost-secondary">
              Crafting the future of digital experiences through innovative design and cutting-edge technology
            </p>
          </motion.div>

          {/* Main Content - Single Column */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Card className="relative overflow-hidden glass-intense grain-texture p-12">
              {/* Subtle Background Effects */}
              <div className="absolute top-0 left-0 w-40 h-40 bg-primary/8 blur-3xl" />
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-400/8 to-emerald-400/8 blur-2xl" />
              
              <div className="relative z-10 space-y-12">
                {/* Bio Content - Restructured with Photo */}
                <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
                  {/* Profile Photo */}
                  <div className="md:col-span-2 flex justify-center">
                    <motion.div
                      className="relative group"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="w-64 h-64 relative overflow-hidden bg-gradient-to-br from-primary/20 to-purple-500/20 backdrop-blur-sm border border-white/10">
                        <img 
                          src={profilePhoto} 
                          alt="Karan Gadhave - Senior Product Designer" 
                          className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500 grayscale group-hover:grayscale-0"
                        />
                        {/* Overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>
                      
                      {/* Decorative border */}
                      <div className="absolute -inset-2 bg-gradient-to-r from-primary/30 via-cyan-400/30 to-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10" />
                      
                      {/* Profile info overlay */}
                      <div className="mt-6 text-center">
                        <h3 className="text-2xl font-bold text-white mb-2 modern-heritage">KARAN GADHAVE</h3>
                        <p className="text-primary text-lg font-semibold mb-1 jost-secondary">Senior Product Designer</p>
                        <p className="text-white/60 text-sm jost-secondary">AI Innovation Specialist</p>
                      </div>
                    </motion.div>
                  </div>

                  {/* Bio Content */}
                  <div className="md:col-span-3 space-y-8">
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-4 flex items-center jost-secondary">
                        <span className="w-3 h-3 bg-primary mr-3"></span>
                        Experience & Expertise
                      </h4>
                      <p className="text-white/80 leading-relaxed jost-secondary">
                        With over <span className="text-primary font-semibold">4 years of specialized experience</span> in <span className="text-primary font-semibold">UI/UX design</span>, 
                        I craft <span className="text-primary font-semibold">innovative digital solutions</span> that elevate user experiences by harnessing 
                        <span className="text-primary font-semibold">AI-driven design approaches</span> and <span className="text-primary font-semibold">modern technologies</span>.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-4 flex items-center jost-secondary">
                        <span className="w-3 h-3 bg-purple-400 mr-3"></span>
                        Innovation Focus
                      </h4>
                      <p className="text-white/80 leading-relaxed jost-secondary">
                        Driven by a <span className="text-primary font-semibold">passion for innovation</span>, I've <span className="text-primary font-semibold">streamlined UI/UX workflows</span> using 
                        <span className="text-primary font-semibold">AI-powered design approaches</span>—<span className="bg-primary/20 text-primary px-2 py-1 rounded-lg font-semibold">cutting design cycles by 60%</span> 
                        while delivering <span className="text-primary font-semibold">intuitive, high-impact user experiences</span>.
                      </p>
                    </div>

                    {/* Core Values */}
                    <div className="space-y-4">
                      <h4 className="text-xl font-semibold text-white mb-4 jost-secondary">Core Principles</h4>
                      
                      {[
                        { icon: '🎯', title: 'User-Centered Design', desc: 'Every decision driven by user needs and behaviors' },
                        { icon: '⚡', title: 'AI-Enhanced Workflow', desc: 'Leveraging technology for maximum efficiency' },
                        { icon: '🚀', title: 'Innovation-First Mindset', desc: 'Pushing creative boundaries in every project' }
                      ].map((principle, index) => (
                        <motion.div
                          key={principle.title}
                          className="flex items-start space-x-4 p-4 glass-card grain-texture hover:glass-intense transition-all duration-300"
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <span className="text-xl flex-shrink-0">{principle.icon}</span>
                          <div>
                            <h5 className="text-white font-semibold mb-1 text-sm jost-secondary">{principle.title}</h5>
                            <p className="text-white/70 text-xs leading-relaxed jost-secondary">{principle.desc}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Skills Tags */}
                <div className="text-center">
                  <h4 className="text-lg font-semibold text-white mb-6 jost-secondary">Specialized Skills</h4>
                  <div className="flex flex-wrap justify-center gap-3">
                    {[
                      'AI Design Tools', 'Figma Mastery', 'Replit Prototyping', 
                      'Design Systems', 'User Research', 'Design Automation',
                      'Rapid Prototyping', 'Cross-Platform Design'
                    ].map((skill, index) => (
                      <motion.span
                        key={skill}
                        className="px-4 py-2 glass-card grain-texture text-white/90 text-sm font-medium hover:glass-intense transition-all duration-300 jost-secondary"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>



      {/* Projects Section */}
      <section id="projects" className="py-16 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="relative inline-block mb-6">
              <h2 className="text-4xl md:text-5xl font-normal glow-text relative z-10 modern-heritage">FEATURED PROJECTS</h2>
              <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 via-transparent to-primary/20 blur-xl opacity-60 -z-10" />
            </div>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed jost-secondary">
              A showcase of innovative solutions spanning AI integration, enterprise platforms, and user-centered design systems.
            </p>
          </motion.div>

          {/* Enhanced Project Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="group h-full"
              >
                <Card className="relative h-full overflow-hidden glass-card grain-texture hover:glass-intense border-0 hover:shadow-2xl hover:shadow-primary/25 transition-all duration-700 group-hover:scale-[1.02]">
                  {/* Project Number Badge */}
                  <div className="absolute top-4 left-4 z-20">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-purple-500/20 backdrop-blur-md border border-white/10 flex items-center justify-center">
                      <span className="text-lg font-bold text-primary font-mono">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                  </div>

                  {/* Hero Image Section */}
                  <div className="relative h-80 overflow-hidden">
                    {index === 0 ? (
                      /* FutureFirstFamilies Project Thumbnail */
                      <img 
                        src={futureFirstFamiliesThumbnail} 
                        alt="FutureFirstFamilies Platform" 
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    ) : (
                      /* Abstract background for other projects */
                      <>
                        {/* Dynamic Gradient Background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/40 via-sky-500/30 to-cyan-500/40 group-hover:scale-110 transition-transform duration-700" />
                        
                        {/* Simplified Geometric Shapes */}
                        <div className="absolute inset-0">
                          <div className="absolute top-8 right-8 w-16 h-16 bg-blue-500/30 rotate-45 group-hover:rotate-90 transition-transform duration-300" />
                          <div className="absolute bottom-8 left-8 w-12 h-12 bg-sky-500/30 rounded-full group-hover:scale-110 transition-transform duration-300" />
                          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-cyan-500/40 group-hover:rotate-45 transition-transform duration-300" />
                        </div>

                        {/* Central Icon */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="relative group-hover:scale-110 transition-transform duration-500">
                            <div className="w-20 h-20 bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                              <Terminal className="w-10 h-10 text-white" />
                            </div>
                            {/* Pulsing Ring */}
                            <div className="absolute inset-0 border-2 border-white/30 animate-pulse group-hover:scale-125 transition-transform duration-500" />
                          </div>
                        </div>

                        {/* Overlay Effects */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      </>
                    )}
                  </div>

                  {/* Content Section - Simplified */}
                  <div className="p-6 space-y-4">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <Badge className={`${
                        index === 0 
                          ? 'bg-primary/20 text-primary border-primary/30' 
                          : 'bg-blue-500/20 text-blue-300 border-blue-500/30'
                      } text-xs font-semibold px-3 py-1 jost-secondary`}>
                        {project.category}
                      </Badge>
                      <Badge variant="outline" className="bg-black/20 backdrop-blur-sm border-white/20 text-white/80 text-xs px-2 py-1 jost-secondary">
                        {project.year}
                      </Badge>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white leading-tight group-hover:text-primary transition-colors duration-300 jost-secondary">
                      {project.title.toUpperCase()}
                    </h3>

                    {/* Description */}
                    <p className="text-white/80 leading-relaxed text-base jost-secondary line-clamp-3">
                      {project.description}
                    </p>

                    {/* Action Buttons */}
                    <div className="pt-4">
                      {index === 0 ? (
                        <div className="grid grid-cols-2 gap-3">
                          <Link href="/project/futurefirstfamilies">
                            <Button className="w-full group/btn relative overflow-hidden cta-button grain-texture text-white font-bold py-3 text-sm border-0 hover:scale-[1.02] transition-all duration-300">
                              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700" />
                              <div className="relative z-10 flex items-center justify-center space-x-2 jost-secondary">
                                <span>Case Study</span>
                                <ArrowUpRight className="w-4 h-4 group-hover/btn:rotate-45 transition-transform duration-300" />
                              </div>
                            </Button>
                          </Link>
                          <Button 
                            onClick={() => window.open(project.liveUrl, '_blank')}
                            variant="outline"
                            className="w-full text-white border-white/20 hover:bg-white/10 py-3 text-sm jost-secondary"
                          >
                            <div className="flex items-center justify-center space-x-2">
                              <span>Live Site</span>
                              <ArrowUpRight className="w-4 h-4" />
                            </div>
                          </Button>
                        </div>
                      ) : (
                        <Button 
                          onClick={() => {
                            if (project.liveUrl) {
                              window.open(project.liveUrl, '_blank');
                            } else {
                              toast({ title: "Coming Soon", description: "Case studies are currently under construction. Stay tuned!" });
                            }
                          }}
                          className="w-full group/btn relative overflow-hidden text-white font-bold cta-button grain-texture border-0 hover:scale-[1.02] py-3 text-sm"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700" />
                          <div className="relative z-10 flex items-center justify-center space-x-2 jost-secondary">
                            <span>{project.liveUrl ? 'View Live Site' : 'Explore Project'}</span>
                            <ArrowUpRight className="w-4 h-4 group-hover/btn:rotate-45 transition-transform duration-300" />
                          </div>
                        </Button>
                      )}
                    </div>
                  </div>

                  {/* Enhanced Ambient Effects */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-primary/8 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-blue-500/8 to-transparent rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl" />
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Philosophy Section */}
      <section className="py-16 relative">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="relative inline-block mb-6">
              <h2 className="text-4xl md:text-5xl font-normal glow-text relative z-10 modern-heritage">DESIGN PHILOSOPHY</h2>
              <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 via-transparent to-primary/20 blur-xl opacity-60 -z-10" />
            </div>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed jost-secondary">
              My approach to creating meaningful and impactful digital experiences
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="group relative overflow-hidden p-10 glass-intense grain-texture hover:glass-card transition-all duration-500">
              {/* Background Elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-tr from-white/10 to-transparent rounded-full blur-2xl" />
              
              <div className="relative z-10">
                <div className="flex items-center justify-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/25 to-white/20 flex items-center justify-center backdrop-blur-sm">
                    <Sparkles className="w-8 h-8 text-primary" />
                  </div>
                </div>
                
                <div className="space-y-8">
                  <blockquote className="relative text-center">
                    <div className="absolute left-1/2 transform -translate-x-1/2 top-0 w-1 h-full bg-gradient-to-b from-primary via-cyan-400 to-primary/60"></div>
                    <p className="text-white/95 leading-relaxed italic text-xl md:text-2xl pl-8 pr-8 font-medium jost-secondary">
                      "Great design is invisible. It seamlessly bridges human needs with 
                      technological possibilities, creating experiences that feel natural, 
                      intuitive, and delightful."
                    </p>
                  </blockquote>
                  
                  <div className="text-center pt-6 border-t border-white/10">
                    <p className="text-white/85 text-lg leading-relaxed max-w-2xl mx-auto jost-secondary">
                      I harness the power of AI design tools, master Figma's ecosystem, and leverage Replit's capabilities to create innovative, efficient design workflows that deliver exceptional results.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Expertise Section - Hidden */}
      {/* <section id="expertise" className="py-32 relative">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6 glow-text">EXPERTISE</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="neo-card text-center h-full">
                    <div className="mb-6">
                      <div className="w-16 h-16 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">{skill.name}</h3>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Proficiency</span>
                        <span className="code-font text-primary">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-primary to-primary/60"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section> */}

      {/* Contact Section */}
      <section id="contact" className="py-16 relative">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl font-normal mb-6 glow-text modern-heritage">GET IN TOUCH</h2>
            <p className="text-xl text-muted-foreground jost-secondary">
              Ready to collaborate on your next innovative project?
            </p>
          </motion.div>

          <Card className="group relative overflow-hidden p-10 glass-intense grain-texture hover:glass-card transition-all duration-700 shadow-2xl shadow-primary/20">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-cyan-500/10 to-transparent rounded-full blur-2xl" />
            
            <div className="relative z-10">
              <form 
                onSubmit={handleSubmit((data) => contactMutation.mutate(data))}
                className="space-y-8"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="group/field"
                  >
                    <label className="flex items-center space-x-2 text-sm font-semibold mb-3 text-white/90 jost-secondary">
                      <Users className="w-4 h-4 text-primary" />
                      <span>Name</span>
                    </label>
                    <Input 
                      {...register('name', { required: "Name is required" })}
                      placeholder="Enter your name"
                      className={`h-12 glass-card grain-texture border-2 ${errors.name ? 'border-red-500' : 'border-white/10'} hover:border-primary/30 focus:border-primary/50 transition-all duration-300 text-white placeholder:text-white/50`}
                    />
                    {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name.message as string}</p>}
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="group/field"
                  >
                    <label className="flex items-center space-x-2 text-sm font-semibold mb-3 text-white/90 jost-secondary">
                      <Mail className="w-4 h-4 text-primary" />
                      <span>Email</span>
                    </label>
                    <Input 
                      {...register('email', { 
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address"
                        }
                      })}
                      type="email"
                      placeholder="your.email@company.com"
                      className={`h-12 glass-card grain-texture border-2 ${errors.email ? 'border-red-500' : 'border-white/10'} hover:border-primary/30 focus:border-primary/50 transition-all duration-300 text-white placeholder:text-white/50`}
                    />
                    {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email.message as string}</p>}
                  </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="group/field"
                  >
                    <label className="flex items-center space-x-2 text-sm font-semibold mb-3 text-white/90 jost-secondary">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span>City, Country</span>
                    </label>
                    <Input 
                      {...register('location', { required: "Location is required" })}
                      placeholder="New York, USA"
                      className={`h-12 glass-card grain-texture border-2 ${errors.location ? 'border-red-500' : 'border-white/10'} hover:border-primary/30 focus:border-primary/50 transition-all duration-300 text-white placeholder:text-white/50`}
                    />
                    {errors.location && <p className="text-red-400 text-sm mt-1">{errors.location.message as string}</p>}
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="group/field"
                  >
                    <label className="flex items-center space-x-2 text-sm font-semibold mb-3 text-white/90 jost-secondary">
                      <FileText className="w-4 h-4 text-primary" />
                      <span>Subject</span>
                    </label>
                    <Input 
                      {...register('subject', { required: "Subject is required" })}
                      placeholder="Project inquiry"
                      className={`h-12 glass-card grain-texture border-2 ${errors.subject ? 'border-red-500' : 'border-white/10'} hover:border-primary/30 focus:border-primary/50 transition-all duration-300 text-white placeholder:text-white/50`}
                    />
                    {errors.subject && <p className="text-red-400 text-sm mt-1">{errors.subject.message as string}</p>}
                  </motion.div>
                </div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <label className="flex items-center space-x-2 text-sm font-semibold mb-3 text-white/90 jost-secondary">
                    <MessageSquare className="w-4 h-4 text-primary" />
                    <span>Project Details</span>
                  </label>
                  <Textarea 
                    {...register('message', { required: "Project details are required" })}
                    placeholder="Tell me about your project goals, challenges, timeline, and how I can help bring your vision to life..."
                    rows={6}
                    className={`glass-card grain-texture border-2 ${errors.message ? 'border-red-500' : 'border-white/10'} hover:border-primary/30 focus:border-primary/50 transition-all duration-300 text-white placeholder:text-white/50 resize-none`}
                  />
                  {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message.message as string}</p>}
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="pt-4"
                >
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="group/btn relative w-full h-16 text-white font-bold text-xl cta-button grain-texture overflow-hidden hover:scale-[1.02] disabled:opacity-50 border-0"
                    disabled={contactMutation.isPending}
                  >
                    {/* Shimmer Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700" />
                    
                    {/* Pulsing Ring */}
                    <div className="absolute inset-0 rounded-2xl border-2 border-white/30 opacity-0 group-hover/btn:opacity-100 group-hover/btn:scale-105 transition-all duration-500" />
                    
                    <div className="relative z-10 flex items-center justify-center space-x-4">
                      {contactMutation.isPending ? (
                        <>
                          <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin" />
                          <span className="jost-secondary">Sending Message...</span>
                        </>
                      ) : (
                        <>
                          <Mail className="w-6 h-6" />
                          <span className="jost-secondary">Send Message</span>
                          <ArrowUpRight className="w-5 h-5 group-hover/btn:rotate-45 transition-transform duration-300" />
                        </>
                      )}
                    </div>
                  </Button>
                </motion.div>
              </form>
            </div>
          </Card>


        </div>
      </section>

      {/* Resume Modal */}
      <Dialog open={isResumeOpen} onOpenChange={setIsResumeOpen}>
        <DialogContent className="max-w-6xl w-full max-h-[95vh] p-0 glass-intense grain-texture border-2 border-primary/40 overflow-hidden">
          <DialogHeader className="p-4 pb-3 border-b border-primary/20">
            <DialogTitle className="text-xl font-bold text-white flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-primary/30 to-cyan-500/30 flex items-center justify-center">
                <User className="w-4 h-4 text-primary" />
              </div>
              <span>Karan Gadhave - Resume</span>
            </DialogTitle>
          </DialogHeader>
          
          <div className="w-full h-[calc(95vh-80px)] p-4 bg-white">
            <div className="w-full h-full bg-white rounded-lg overflow-auto">
              <div className="max-w-4xl mx-auto p-8 bg-white text-black">
                <div className="text-center mb-8">
                  <h1 className="text-4xl font-bold mb-2">Karan Sanjay Gadhave</h1>
                  <h2 className="text-xl text-gray-600 mb-4">Senior Product / UI/UX Designer</h2>
                  
                  <div className="flex justify-center space-x-8 text-sm">
                    <span>Email: gadhavekaran@gmail.com</span>
                    <span>Phone: +91 7744074265</span>
                    <span>LinkedIn: karan-gadhave</span>
                  </div>
                </div>

                <hr className="border-gray-300 mb-6" />

                <section className="mb-8">
                  <h3 className="text-lg font-bold mb-3">Profile Summary:</h3>
                  <p className="text-sm leading-relaxed">
                    As a skilled Senior Product Designer with four years of experience, I excel in UI/UX design, transforming ideas into intuitive digital products. My
                    expertise in user research, wireframing, and design systems ensures effective, user-focused solutions. I take a strategic, data-driven approach to
                    problem-solving, consistently delivering high-quality results. As a UI/UX manager, I lead design teams, manage project timelines, and ensure
                    alignment with product goals, making me the ideal candidate to create impactful digital experiences.
                  </p>
                </section>

                <section className="mb-8">
                  <h3 className="text-lg font-bold mb-4">Work Experience:</h3>
                  
                  <div className="mb-6">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold">Team Pumpkin</h4>
                      <span className="text-sm text-gray-600">Apr 2022 - Present</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">UI UX Designer Manager - Remote, India</p>
                    <div className="text-sm space-y-1">
                      <p>• Pioneered the design of Acedboard, a project management tool, driving a 35% increase in user satisfaction and a 40% boost in task efficiency</p>
                      <p>• Led the end-to-end design of Aeroplane, a business-oriented social media platform, achieving a 25% rise in user engagement</p>
                      <p>• Created cutting-edge health platforms for Healthsignz and MYMEDIC B2B2C Digital Health</p>
                      <p>• Demonstrated expertise in UI/UX design, user research, and information architecture</p>
                      <p>• Excelled in managing and mentoring a design team, ensuring delivery of high-impact solutions</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold">WeInvest Pepperpenny</h4>
                      <span className="text-sm text-gray-600">Jun 2021 - Nov 2021</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">UI UX Designer - Remote, India</p>
                    <div className="text-sm space-y-1">
                      <p>• Designed core features for StockMarketBox like broker comparison, market tickers, courses, and blog</p>
                      <p>• Successfully launched Stockmarketbox.com, boosting online presence</p>
                      <p>• Created custom illustrations and animations, increasing user engagement by 20%</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold">DBM Infotech PVT LTD</h4>
                      <span className="text-sm text-gray-600">Mar 2021 - Jun 2021</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">UI UX Designer - Pune, India</p>
                    <div className="text-sm space-y-1">
                      <p>• Led the design for Teach Max mobile application</p>
                      <p>• Worked on various redesign projects from websites to mobile applications</p>
                    </div>
                  </div>
                </section>

                <section className="mb-8">
                  <h3 className="text-lg font-bold mb-4">Internship Experience:</h3>
                  
                  <div className="mb-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold">Credence Analytics</h4>
                      <span className="text-sm text-gray-600">Jan 2022 - Mar 2022</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">UI UX Designer Intern - Remote, India</p>
                    <div className="text-sm space-y-1">
                      <p>• Redesigned iDeal, iDeal Wealth and Fund, Mercury, and CashTrea, achieving 30% improvement in user satisfaction</p>
                      <p>• Redesigned company website, resulting in 47% growth in visitors and 20% increase in lead generation</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold">FarmiGO</h4>
                      <span className="text-sm text-gray-600">Oct 2020 - Dec 2020</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">UI UX Designer Intern - Remote, India</p>
                    <div className="text-sm space-y-1">
                      <p>• Designed both UX and UI with deep focus on enhancing user experience through extensive research</p>
                      <p>• Applied advanced problem-solving skills to deliver optimal and intuitive design solutions</p>
                      <p>• Spearheaded the app design process from initial research to high-fidelity prototypes in two months</p>
                    </div>
                  </div>
                </section>

                <section className="mb-8">
                  <h3 className="text-lg font-bold mb-4">Education:</h3>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold">Bachelor of Arts in History</h4>
                      <p className="text-sm text-gray-600">Yashwantrao Chavan Maharashtra Open University, Barshi, India</p>
                    </div>
                    <span className="text-sm text-gray-600">2016 - 2019</span>
                  </div>
                </section>

                <section className="mb-8">
                  <h3 className="text-lg font-bold mb-4">Certifications:</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>UX/UI Bootcamp - Designwings UX/UI School</span>
                      <span className="text-gray-600">Mar 2022</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Complete Web & Mobile Designer - Udemy</span>
                      <span className="text-gray-600">Feb 2024</span>
                    </div>
                    <div className="flex justify-between">
                      <span>UI/UX Design - Internshala</span>
                      <span className="text-gray-600">Aug 2020</span>
                    </div>
                  </div>
                </section>

                <section>
                  <h3 className="text-lg font-bold mb-4">Skills:</h3>
                  <div className="grid grid-cols-3 gap-6 text-sm">
                    <div>
                      <h4 className="font-semibold mb-2">Design Skills</h4>
                      <div className="space-y-1">
                        <p>• Prototyping</p>
                        <p>• User Experience Design</p>
                        <p>• Design Strategy</p>
                        <p>• User Journeys</p>
                        <p>• UI Design</p>
                        <p>• UX Design</p>
                        <p>• User Research</p>
                        <p>• Typography</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Technical Skills</h4>
                      <div className="space-y-1">
                        <p>• Figma</p>
                        <p>• Sketch</p>
                        <p>• Adobe XD</p>
                        <p>• Axure RP</p>
                        <p>• Agile Methodologies</p>
                        <p>• Visual Design</p>
                        <p>• Wireframing</p>
                        <p>• User Testing</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Soft Skills</h4>
                      <div className="space-y-1">
                        <p>• Strong Leadership</p>
                        <p>• Coordination Skills</p>
                        <p>• Adaptability</p>
                        <p>• Creative Thinking</p>
                        <p>• Empathy</p>
                        <p>• Critical Thinking</p>
                        <p>• Communication</p>
                        <p>• Time Management</p>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Sticky Contact CTA */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button 
          onClick={() => {
            const contactSection = document.getElementById('contact');
            contactSection?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="group relative overflow-hidden text-white font-bold px-8 py-4 text-lg cta-button grain-texture border-0 hover:scale-110"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
          
          <div className="relative z-10 flex items-center space-x-3">
            <Mail className="w-6 h-6" />
            <span>Contact Me</span>
          </div>
        </Button>
      </div>

      {/* Footer */}
      <footer className="py-12 border-t border-border/30">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="flex justify-center mb-6">
            <a 
              href="https://www.linkedin.com/in/karan-gadhave/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group inline-block touch-manipulation"
              style={{ WebkitTapHighlightColor: 'transparent' }}
            >
              <Button variant="ghost" size="icon" className="w-12 h-12 rounded-full neo-card group-hover:scale-110 group-active:scale-95 transition-transform duration-300 cursor-pointer">
                <Linkedin className="w-5 h-5 group-hover:text-primary group-active:text-primary transition-colors duration-300" />
              </Button>
            </a>
          </div>
          <p className="text-muted-foreground code-font">
            © 2025 Karan Gadhave. Designed & developed with passion.
          </p>
        </div>
      </footer>
    </div>
  );
}