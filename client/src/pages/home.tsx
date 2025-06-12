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
import { LiquidGrid } from '@/components/liquid-grid';
import { MovingRibbon } from '@/components/moving-ribbon';
import logoPath from '@assets/Logo black_1749713682616.png';
import resumePdf from '@assets/Karan_Gadhave_CV_1749719107819.pdf';
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
  User,
  Briefcase,
  MessageSquare,
  Send,
  ArrowRight,
  X,
  MapPin,
  FileText
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

  const { register, handleSubmit, reset } = useForm();

  const contactMutation = useMutation({
    mutationFn: async (data: any) => {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error('Failed to send message');
      return response.json();
    },
    onSuccess: () => {
      reset();
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
      title: "AI-Powered Design System",
      description: "Next-generation design system with AI-driven component generation and automated documentation",
      image: "/api/placeholder/600/400",
      tags: ["AI/ML", "Design Systems", "Automation"],
      year: "2024",
      category: "Product Design"
    },
    {
      title: "Enterprise Analytics Dashboard",
      description: "Real-time analytics platform processing millions of data points with intuitive visualization",
      image: "/api/placeholder/600/400",
      tags: ["Data Visualization", "Enterprise", "Real-time"],
      year: "2024",
      category: "Data & Analytics"
    },
    {
      title: "Mobile Banking Revolution",
      description: "Complete mobile banking experience with biometric security and AI-powered financial insights",
      image: "/api/placeholder/600/400",
      tags: ["Fintech", "Mobile", "Security"],
      year: "2023",
      category: "Mobile App"
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
    <div className="min-h-screen bg-background text-foreground cursor-glow relative overflow-hidden" style={{ backgroundColor: '#080808', color: '#fafafa' }}>
      {/* Custom Cursor */}
      <div 
        className="custom-cursor"
        style={{
          left: cursorPos.x,
          top: cursorPos.y,
        }}
      />

      {/* Scroll Progress */}
      <motion.div className="scroll-indicator" style={{ scaleX }} />

      {/* Floating Orbs */}
      <div className="floating-orb w-64 h-64 top-20 -left-32 opacity-30" />
      <div className="floating-orb w-96 h-96 top-1/2 -right-48 opacity-20" style={{ animationDelay: '2s' }} />
      <div className="floating-orb w-48 h-48 bottom-20 left-1/4 opacity-25" style={{ animationDelay: '4s' }} />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
          >
            <img src={logoPath} alt="Karan Gadhave" className="w-10 h-10" />
          </motion.div>
          
          <div className="hidden md:flex items-center space-x-8">
            {['About', 'Projects', 'Expertise'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`text-sm font-semibold transition-colors hover:text-primary ${
                  activeSection === item.toLowerCase() ? 'text-primary' : 'text-foreground opacity-80'
                }`}
                whileHover={{ y: -2 }}
              >
                {item}
              </motion.a>
            ))}
            <motion.button
              onClick={() => setIsResumeOpen(true)}
              className="text-sm font-semibold transition-colors hover:text-primary text-foreground opacity-80"
              whileHover={{ y: -2 }}
            >
              Resume
            </motion.button>
          </div>

          <Button variant="outline" size="sm" className="morphing-border">
            <Mail className="w-4 h-4 mr-2" />
            Contact Me
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} id="hero" className="min-h-screen flex items-center justify-center relative cyber-grid pt-20 pb-8">
        <LiquidGrid 
          mouseX={mousePos.x} 
          mouseY={mousePos.y} 
          intensity={waveIntensity}
        />
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10 w-full">
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
                  className="text-sm px-6 py-3 border-primary/50 bg-primary/20 text-white font-semibold tracking-wider backdrop-blur-sm shadow-lg shadow-primary/25 hover:bg-primary/30 transition-all duration-300"
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
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-wide leading-tight">
                KARAN GADHAVE
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-pink-500 mx-auto rounded-full"></div>
            </motion.div>
            
            {/* Title/Role */}
            <motion.div 
              className="space-y-3"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
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
                <span className="text-xl md:text-2xl font-light text-primary tracking-wider uppercase">
                  & AI Innovator
                </span>
                <div className="w-16 h-0.5 bg-primary" />
              </motion.div>
            </motion.div>
            
            {/* Compact Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3 }}
              className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto font-medium"
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
                  style={{
                    background: 'linear-gradient(to right, hsl(262, 83%, 58%), hsl(280, 100%, 70%), hsl(262, 83%, 58%))',
                    border: 'none'
                  }}
                  className="relative overflow-hidden px-12 py-6 text-lg font-bold text-white rounded-2xl shadow-2xl hover:scale-105 transition-all duration-300"
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
                  style={{
                    background: 'transparent',
                    border: '2px solid hsl(262, 83%, 58%)',
                    boxShadow: '0 0 20px hsla(262, 83%, 58%, 0.3)'
                  }}
                  className="relative overflow-hidden px-10 py-4 text-lg font-semibold text-white hover:bg-primary/20 backdrop-blur-sm rounded-xl transition-all duration-300 hover:scale-105"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 opacity-0 group-hover/secondary:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10 flex items-center space-x-2">
                    <Download className="w-5 h-5" />
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

      {/* About Section */}
      <section id="about" className="py-20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/15 rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/15 rounded-full blur-3xl opacity-60" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="relative inline-block">
              <h2 className="text-5xl md:text-7xl font-bold mb-6 glow-text relative z-10">ABOUT ME</h2>
              <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 via-transparent to-primary/20 blur-xl opacity-60 -z-10" />
            </div>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Transforming ideas into exceptional digital experiences through strategic design and innovation
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Column - Story & Stats */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-7 space-y-6"
            >
              {/* Story Card */}
              <Card className="group relative overflow-hidden p-10 bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-slate-900/85 backdrop-blur-xl border-2 border-primary/40 hover:border-primary/80 transition-all duration-500 shadow-2xl shadow-primary/20 rounded-2xl">
                {/* Card Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-2xl" />
                
                <div className="relative z-10 space-y-8">
                  <div className="flex items-center space-x-4 mb-8 pb-4 border-b border-primary/20">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary/30 to-purple-500/30 rounded-2xl flex items-center justify-center backdrop-blur-sm shadow-lg shadow-primary/20">
                      <Brain className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-1">My Journey</h3>
                      <p className="text-primary/80 text-sm">From Vision to Innovation</p>
                    </div>
                  </div>
                  
                  <div className="space-y-6 text-lg text-white/90 leading-relaxed">
                    <p className="relative">
                      <span className="absolute -left-4 top-0 w-2 h-2 bg-primary rounded-full"></span>
                      With <span className="text-primary font-bold bg-primary/10 px-2 py-1 rounded">four years of specialized experience</span> in UI/UX design, 
                      I leverage cutting-edge AI design tools and platforms to create innovative digital solutions. My expertise spans 
                      <span className="text-primary font-bold">Figma design workflows, AI-powered design automation, and Replit-based prototyping</span> 
                      to deliver exceptional user experiences.
                    </p>
                    
                    <p className="relative">
                      <span className="absolute -left-4 top-0 w-2 h-2 bg-purple-400 rounded-full"></span>
                      As a design innovator, I specialize in integrating AI tools into design processes, mastering 
                      <span className="text-primary font-bold">Figma's advanced features, and utilizing Replit for rapid design-to-code workflows</span>. 
                      This unique approach has enabled me to <span className="text-primary font-bold bg-primary/10 px-2 py-1 rounded">reduce design iteration cycles by 60% 
                      while maintaining design excellence</span>.
                    </p>
                  </div>
                </div>
              </Card>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-6">
                {[
                  { number: '4+', label: 'Years Experience', color: 'from-purple-500 to-pink-500', icon: Clock },
                  { number: '50+', label: 'Projects Delivered', color: 'from-blue-500 to-purple-500', icon: Zap },
                  { number: '15+', label: 'Team Members Led', color: 'from-green-500 to-blue-500', icon: Users }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="group"
                  >
                    <Card className="relative overflow-hidden text-center p-6 bg-gradient-to-br from-card/80 via-card/60 to-card/40 backdrop-blur-md border border-white/10 hover:border-primary/30 transition-all duration-300">
                      {/* Background Glow */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                      
                      {/* Content */}
                      <div className="relative z-10 mb-4">
                        <div className={`w-12 h-12 mx-auto bg-gradient-to-r ${stat.color} bg-opacity-20 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                          <stat.icon className="w-6 h-6 text-white" />
                        </div>
                        
                        <div className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                          {stat.number}
                        </div>
                        
                        <div className="text-sm text-white/80 font-medium tracking-wide">
                          {stat.label}
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Column - Skills & Philosophy */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:col-span-5 space-y-8"
            >
              {/* Core Expertise */}
              <Card className="group relative overflow-hidden p-8 bg-gradient-to-br from-primary/15 via-primary/10 to-transparent backdrop-blur-md border border-primary/30 hover:border-primary/50 transition-all duration-500">
                {/* Background Elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-xl" />
                
                <div className="relative z-10">
                  <div className="flex items-center space-x-3 mb-8">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary/30 to-purple-500/30 rounded-lg flex items-center justify-center">
                      <Code2 className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Core Expertise</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-4">
                    {[
                      'AI Design Tools', 'Figma Mastery', 'Replit Prototyping', 'Design Systems',
                      'User Research', 'AI-Powered Workflows', 'Rapid Prototyping', 'Design Automation'
                    ].map((skill, index) => (
                      <motion.div
                        key={skill}
                        className="group/item relative overflow-hidden flex items-center space-x-4 p-4 rounded-xl bg-white/5 hover:bg-primary/15 border border-transparent hover:border-primary/20 transition-all duration-300"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ x: 8 }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />
                        <motion.div 
                          className="relative z-10 w-4 h-4 bg-gradient-to-r from-primary via-purple-400 to-pink-400 rounded-full flex items-center justify-center"
                          whileHover={{ scale: 1.2, rotate: 90 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="w-2 h-2 bg-white rounded-full opacity-80" />
                        </motion.div>
                        <span className="relative z-10 text-white/90 font-medium group-hover/item:text-white transition-colors">
                          {skill}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </Card>

              {/* Design Philosophy */}
              <Card className="group relative overflow-hidden p-8 bg-gradient-to-br from-card/90 via-card/70 to-card/50 backdrop-blur-md border border-white/15 hover:border-white/25 transition-all duration-500">
                {/* Background Elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-tr from-white/10 to-transparent rounded-full blur-2xl" />
                
                <div className="relative z-10">
                  <div className="flex items-center mb-8">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/25 to-white/20 rounded-xl flex items-center justify-center mr-4 backdrop-blur-sm">
                      <Sparkles className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Design Philosophy</h3>
                  </div>
                  
                  <div className="space-y-6">
                    <blockquote className="relative">
                      <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-primary via-purple-400 to-primary/60 rounded-full"></div>
                      <p className="text-white/95 leading-relaxed italic text-lg pl-8 font-medium">
                        "Great design is invisible. It seamlessly bridges human needs with 
                        technological possibilities, creating experiences that feel natural, 
                        intuitive, and delightful."
                      </p>
                    </blockquote>
                    
                    <div className="pl-8 pt-4 border-l border-white/10">
                      <p className="text-white/85 text-base leading-relaxed">
                        I harness the power of AI design tools, master Figma's ecosystem, and leverage Replit's capabilities to create innovative, efficient design workflows that deliver exceptional results.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">FEATURED PROJECTS</h2>
            <p className="text-lg md:text-xl text-foreground opacity-90 max-w-3xl mx-auto font-medium">
              A showcase of innovative solutions spanning AI integration, enterprise platforms,
              and user-centered design systems.
            </p>
          </motion.div>

          <div className="space-y-16">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="space-y-8">
                    <div className="flex items-center space-x-4 mb-2">
                      <Badge variant="outline" className="text-xs px-3 py-1">
                        {project.category}
                      </Badge>
                      <span className="text-sm text-muted-foreground code-font">
                        {project.year}
                      </span>
                    </div>
                    
                    <div className="space-y-6">
                      <h3 className="text-4xl md:text-5xl font-bold glow-text leading-tight">{project.title}</h3>
                      
                      <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                    
                    <div className="flex flex-wrap gap-3 py-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs px-3 py-1">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="pt-6">
                      <Link href="/case-study">
                        <Button 
                          size="lg"
                          style={{
                            background: 'linear-gradient(to right, hsl(262, 83%, 58%), hsl(280, 100%, 70%), hsl(262, 83%, 58%))',
                            border: 'none',
                            boxShadow: '0 10px 30px hsla(262, 83%, 58%, 0.4)'
                          }}
                          className="group/cta relative overflow-hidden text-white font-bold text-base px-8 py-4 rounded-xl hover:scale-105 transition-all duration-300"
                        >
                          {/* Shimmer Effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/cta:translate-x-full transition-transform duration-700" />
                          
                          <div className="relative z-10 flex items-center space-x-3">
                            <ArrowUpRight className="w-5 h-5 group-hover/cta:rotate-45 transition-transform duration-300" />
                            <span>View Case Study</span>
                          </div>
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <Card className="neo-card p-0 overflow-hidden">
                    <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                      <Terminal className="w-16 h-16 text-primary/60" />
                    </div>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
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
            <h2 className="text-5xl font-bold mb-6 glow-text">GET IN TOUCH</h2>
            <p className="text-xl text-muted-foreground">
              Ready to collaborate on your next innovative project?
            </p>
          </motion.div>

          <Card className="group relative overflow-hidden p-10 bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-slate-900/85 backdrop-blur-xl border-2 border-primary/40 hover:border-primary/60 transition-all duration-700 shadow-2xl shadow-primary/20 rounded-3xl">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-purple-500/10 to-transparent rounded-full blur-2xl" />
            
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
                    <label className="flex items-center space-x-2 text-sm font-semibold mb-3 text-white/90">
                      <Users className="w-4 h-4 text-primary" />
                      <span>Name</span>
                    </label>
                    <Input 
                      {...register('name', { required: true })}
                      placeholder="Enter your name"
                      className="h-12 bg-white/5 border-2 border-white/10 hover:border-primary/30 focus:border-primary/50 transition-all duration-300 text-white placeholder:text-white/50 rounded-xl backdrop-blur-sm"
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="group/field"
                  >
                    <label className="flex items-center space-x-2 text-sm font-semibold mb-3 text-white/90">
                      <Mail className="w-4 h-4 text-primary" />
                      <span>Email</span>
                    </label>
                    <Input 
                      {...register('email', { required: true })}
                      type="email"
                      placeholder="your.email@company.com"
                      className="h-12 bg-white/5 border-2 border-white/10 hover:border-primary/30 focus:border-primary/50 transition-all duration-300 text-white placeholder:text-white/50 rounded-xl backdrop-blur-sm"
                    />
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
                    <label className="flex items-center space-x-2 text-sm font-semibold mb-3 text-white/90">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span>City, Country</span>
                    </label>
                    <Input 
                      {...register('location', { required: true })}
                      placeholder="New York, USA"
                      className="h-12 bg-white/5 border-2 border-white/10 hover:border-primary/30 focus:border-primary/50 transition-all duration-300 text-white placeholder:text-white/50 rounded-xl backdrop-blur-sm"
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="group/field"
                  >
                    <label className="flex items-center space-x-2 text-sm font-semibold mb-3 text-white/90">
                      <FileText className="w-4 h-4 text-primary" />
                      <span>Subject</span>
                    </label>
                    <Input 
                      {...register('subject', { required: true })}
                      placeholder="Project inquiry"
                      className="h-12 bg-white/5 border-2 border-white/10 hover:border-primary/30 focus:border-primary/50 transition-all duration-300 text-white placeholder:text-white/50 rounded-xl backdrop-blur-sm"
                    />
                  </motion.div>
                </div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <label className="flex items-center space-x-2 text-sm font-semibold mb-3 text-white/90">
                    <MessageSquare className="w-4 h-4 text-primary" />
                    <span>Project Details</span>
                  </label>
                  <Textarea 
                    {...register('message', { required: true })}
                    placeholder="Tell me about your project goals, challenges, timeline, and how I can help bring your vision to life..."
                    rows={6}
                    className="bg-white/5 border-2 border-white/10 hover:border-primary/30 focus:border-primary/50 transition-all duration-300 text-white placeholder:text-white/50 resize-none rounded-xl backdrop-blur-sm"
                  />
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
                    style={{
                      background: 'linear-gradient(to right, hsl(262, 83%, 58%), hsl(280, 100%, 70%), hsl(262, 83%, 58%))',
                      border: 'none',
                      boxShadow: '0 15px 40px hsla(262, 83%, 58%, 0.5)'
                    }}
                    className="group/btn relative w-full h-16 text-white font-bold text-xl rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02] disabled:opacity-50"
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
                          <span>Sending Message...</span>
                        </>
                      ) : (
                        <>
                          <Mail className="w-6 h-6" />
                          <span>Send Message</span>
                          <ArrowUpRight className="w-5 h-5 group-hover/btn:rotate-45 transition-transform duration-300" />
                        </>
                      )}
                    </div>
                  </Button>
                </motion.div>
              </form>
            </div>
          </Card>

          <div className="mt-16 text-center">
            <div className="flex justify-center space-x-6">
              <Button variant="ghost" size="icon" className="w-12 h-12 rounded-full neo-card">
                <Mail className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="w-12 h-12 rounded-full neo-card">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="w-12 h-12 rounded-full neo-card">
                <Github className="w-5 h-5" />
              </Button>
            </div>
            <p className="mt-6 text-sm text-muted-foreground code-font">
              karan.gadhave@designer.com • linkedin.com/in/karangadhave • dribbble.com/karangadhave
            </p>
          </div>
        </div>
      </section>

      {/* Resume Modal */}
      <Dialog open={isResumeOpen} onOpenChange={setIsResumeOpen}>
        <DialogContent className="max-w-6xl w-full max-h-[95vh] p-0 bg-slate-900/95 border-2 border-primary/40 backdrop-blur-xl overflow-hidden">
          <DialogHeader className="p-4 pb-3 border-b border-primary/20">
            <DialogTitle className="text-xl font-bold text-white flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-primary/30 to-purple-500/30 rounded-lg flex items-center justify-center">
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

      {/* Footer */}
      <footer className="py-12 border-t border-border/30">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-muted-foreground code-font">
            © 2024 Karan Gadhave. Designed & developed with passion.
          </p>
        </div>
      </footer>
    </div>
  );
}