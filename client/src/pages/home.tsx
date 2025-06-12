import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { LiquidGrid } from '@/components/liquid-grid';
import logoPath from '@assets/Logo black_1749713682616.png';
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
  Target,
  ArrowUpRight,
  Mail,
  Github,
  Linkedin,
  Download
} from 'lucide-react';

export default function Home() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [activeSection, setActiveSection] = useState('');
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [waveIntensity, setWaveIntensity] = useState(0.3);
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
            {['About', 'Projects', 'Expertise', 'Contact'].map((item) => (
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
          </div>

          <Button variant="outline" size="sm" className="morphing-border">
            <Download className="w-4 h-4 mr-2" />
            Resume
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} id="hero" className="min-h-screen flex items-center justify-center relative cyber-grid pt-24 pb-12">
        <LiquidGrid 
          mouseX={mousePos.x} 
          mouseY={mousePos.y} 
          intensity={waveIntensity}
        />
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-8 md:space-y-10"
          >
            {/* Logo at Top */}
            <motion.div 
              className="relative flex justify-center"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div 
                className="absolute inset-0 bg-primary/20 rounded-full blur-2xl"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <img 
                src={logoPath} 
                alt="Karan Gadhave Logo" 
                className="relative w-20 h-20 md:w-24 md:h-24 opacity-95" 
              />
            </motion.div>
            
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Badge variant="outline" className="text-xs px-4 py-2 border-primary/30 mx-auto">
                <Sparkles className="w-3 h-3 mr-2" />
                AVAILABLE FOR NEW OPPORTUNITIES
              </Badge>
            </motion.div>
            
            {/* Main Title with 3D Flip Effect */}
            <div className="space-y-4">
              <motion.h1 
                className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <motion.span 
                  className="block text-white"
                  initial={{ opacity: 0, rotateX: -90 }}
                  animate={{ opacity: 1, rotateX: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  SENIOR
                </motion.span>
                <motion.span 
                  className="block glow-text text-primary"
                  initial={{ opacity: 0, rotateX: -90 }}
                  animate={{ opacity: 1, rotateX: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                >
                  PRODUCT
                </motion.span>
                <motion.span 
                  className="block text-white"
                  initial={{ opacity: 0, rotateX: -90 }}
                  animate={{ opacity: 1, rotateX: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                >
                  DESIGNER
                </motion.span>
              </motion.h1>
              
              <motion.div 
                className="flex items-center justify-center gap-3"
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.8, delay: 1.5 }}
              >
                <div className="w-12 h-0.5 bg-primary" />
                <span className="text-lg md:text-xl font-light text-primary tracking-wider">
                  & AI INNOVATOR
                </span>
                <div className="w-12 h-0.5 bg-primary" />
              </motion.div>
            </div>
            
            {/* Name with Slide Animation */}
            <motion.div 
              className="space-y-2"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 1.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-wide">
                KARAN GADHAVE
              </h2>
            </motion.div>
            
            {/* Description with Fade Up */}
            <motion.p 
              className="text-lg md:text-xl text-white opacity-85 leading-relaxed max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 2.1 }}
            >
              Crafting exceptional digital experiences through strategic design thinking and cutting-edge AI integration.
            </motion.p>
            
            {/* Action Buttons with Bounce */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 2.4 }}
            >
              <motion.div
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button size="lg" className="px-8 py-3 text-base neo-card bg-primary hover:bg-primary/90">
                  <ArrowUpRight className="w-4 h-4 mr-2" />
                  View My Work
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button size="lg" variant="outline" className="px-8 py-3 text-base border-white/20 hover:border-primary/50">
                  <Mail className="w-4 h-4 mr-2" />
                  Get In Touch
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="section-divider" />

      {/* About Section */}
      <section id="about" className="py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-6 glow-text">ABOUT ME</h2>
            <p className="text-xl md:text-2xl text-white opacity-80 max-w-3xl mx-auto">
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
              className="lg:col-span-7 space-y-8"
            >
              {/* Story Card */}
              <Card className="neo-card p-8 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border-primary/20">
                <div className="space-y-6 text-lg text-white leading-relaxed">
                  <p>
                    With <span className="text-primary font-bold">four years of specialized experience</span> in UI/UX design, 
                    I transform complex challenges into intuitive digital solutions. My approach combines strategic 
                    design thinking with cutting-edge AI integration to create products that drive 
                    meaningful business outcomes.
                  </p>
                  
                  <p>
                    As a design leader, I excel in user research, system architecture, and cross-
                    functional collaboration. I've successfully led teams through product launches, 
                    managed design systems at scale, and pioneered <span className="text-primary font-bold">AI-enhanced design 
                    workflows that improve efficiency by 40%</span>.
                  </p>
                </div>
              </Card>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-6">
                {[
                  { number: '4+', label: 'Years Experience', color: 'from-purple-500 to-pink-500' },
                  { number: '50+', label: 'Projects Delivered', color: 'from-blue-500 to-purple-500' },
                  { number: '15+', label: 'Team Members Led', color: 'from-green-500 to-blue-500' }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, rotateY: 5 }}
                  >
                    <Card className="neo-card text-center p-6 bg-gradient-to-br from-card/60 to-transparent backdrop-blur-sm border-white/10">
                      <div className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-3`}>
                        {stat.number}
                      </div>
                      <div className="text-sm text-white opacity-80 font-medium tracking-wide">
                        {stat.label}
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
              <Card className="neo-card p-8 bg-gradient-to-br from-primary/10 to-transparent backdrop-blur-sm border-primary/30">
                <h3 className="text-2xl font-bold mb-6 text-white">Core Expertise</h3>
                <div className="grid grid-cols-1 gap-3">
                  {[
                    'AI Integration', 'Design Systems', 'User Research', 'Team Leadership',
                    'Product Strategy', 'Prototyping', 'Data Visualization', 'Cross-functional Collaboration'
                  ].map((skill, index) => (
                    <motion.div
                      key={skill}
                      className="group flex items-center space-x-3 p-4 rounded-xl bg-white/5 hover:bg-primary/20 transition-all duration-300"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 5 }}
                    >
                      <motion.div 
                        className="w-3 h-3 bg-gradient-to-r from-primary to-pink-500 rounded-full"
                        whileHover={{ scale: 1.3, rotate: 180 }}
                        transition={{ duration: 0.3 }}
                      />
                      <span className="text-white font-medium group-hover:text-primary transition-colors">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </Card>

              {/* Design Philosophy */}
              <Card className="neo-card p-8 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border-white/10">
                <div className="flex items-center mb-6">
                  <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center mr-4">
                    <Sparkles className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Design Philosophy</h3>
                </div>
                <blockquote className="text-white leading-relaxed italic text-lg border-l-4 border-primary/50 pl-6">
                  "Great design is invisible. It seamlessly bridges human needs with 
                  technological possibilities, creating experiences that feel natural, 
                  intuitive, and delightful."
                </blockquote>
                <p className="text-white/80 mt-4 text-base">
                  I believe in data-driven decisions, user-centered approaches, and the power of AI to augment human creativity.
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">FEATURED PROJECTS</h2>
            <p className="text-lg md:text-xl text-foreground opacity-90 max-w-3xl mx-auto font-medium">
              A showcase of innovative solutions spanning AI integration, enterprise platforms,
              and user-centered design systems.
            </p>
          </motion.div>

          <div className="space-y-32">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <Badge variant="outline" className="text-xs px-3 py-1">
                        {project.category}
                      </Badge>
                      <span className="text-sm text-muted-foreground code-font">
                        {project.year}
                      </span>
                    </div>
                    
                    <h3 className="text-4xl font-bold glow-text">{project.title}</h3>
                    
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <Button variant="outline" className="morphing-border">
                      <ArrowUpRight className="w-4 h-4 mr-2" />
                      View Case Study
                    </Button>
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
      <section id="contact" className="py-32 relative">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6 glow-text">GET IN TOUCH</h2>
            <p className="text-xl text-muted-foreground">
              Ready to collaborate on your next innovative project?
            </p>
          </motion.div>

          <Card className="neo-card">
            <form 
              onSubmit={handleSubmit((data) => contactMutation.mutate(data))}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <Input 
                    {...register('name', { required: true })}
                    placeholder="Your Name"
                    className="bg-secondary border-border"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input 
                    {...register('email', { required: true })}
                    type="email"
                    placeholder="your@email.com"
                    className="bg-secondary border-border"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Project Type</label>
                <Select>
                  <SelectTrigger className="bg-secondary border-border">
                    <SelectValue placeholder="Select project type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="product-design">Product Design</SelectItem>
                    <SelectItem value="design-system">Design System</SelectItem>
                    <SelectItem value="ai-integration">AI Integration</SelectItem>
                    <SelectItem value="consulting">Consulting</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <Textarea 
                  {...register('message', { required: true })}
                  placeholder="Tell me about your project and goals..."
                  rows={6}
                  className="bg-secondary border-border resize-none"
                />
              </div>
              
              <Button 
                type="submit" 
                size="lg" 
                className="w-full neo-card bg-primary hover:bg-primary/90"
                disabled={contactMutation.isPending}
              >
                {contactMutation.isPending ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
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