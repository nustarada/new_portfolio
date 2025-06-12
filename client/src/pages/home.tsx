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
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
          >
            <img src={logoPath} alt="Karan Gadhave" className="w-8 h-8" />
            <span className="text-xl font-bold glow-text">Karan Gadhave</span>
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
      <section ref={heroRef} id="hero" className="min-h-screen flex items-center justify-center relative cyber-grid">
        <LiquidGrid 
          mouseX={mousePos.x} 
          mouseY={mousePos.y} 
          intensity={waveIntensity}
        />
        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="mb-6">
              <Badge variant="outline" className="text-xs px-3 py-1 mb-4 border-primary/30">
                <Sparkles className="w-3 h-3 mr-1" />
                AVAILABLE FOR NEW OPPORTUNITIES
              </Badge>
            </div>
            
            <motion.div 
              className="flex justify-center mb-8"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <img 
                src={logoPath} 
                alt="Karan Gadhave Logo" 
                className="w-20 h-20 md:w-24 md:h-24 opacity-90" 
              />
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight glow-text">
              SENIOR PRODUCT DESIGNER & AI INNOVATOR
            </h1>
            
            <div className="text-3xl md:text-4xl font-medium mb-8 text-foreground opacity-80">
              Karan
            </div>
            
            <p className="text-lg md:text-xl text-foreground opacity-90 max-w-3xl mx-auto mb-12 leading-relaxed font-medium">
              Crafting exceptional digital experiences through strategic design thinking,
              AI innovation, and human-centered solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="px-8 py-4 text-lg neo-card bg-primary hover:bg-primary/90">
                <ArrowUpRight className="w-5 h-5 mr-2" />
                View My Work
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-4 text-lg morphing-border">
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="section-divider" />

      {/* About Section */}
      <section id="about" className="py-32 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">ABOUT ME</h2>
              
              <div className="space-y-6 text-base md:text-lg text-foreground leading-relaxed">
                <p className="font-medium opacity-90">
                  With four years of specialized experience in UI/UX design, I transform complex 
                  challenges into intuitive digital solutions. My approach combines strategic 
                  design thinking with cutting-edge AI integration to create products that drive 
                  meaningful business outcomes.
                </p>
                
                <p className="font-medium opacity-90">
                  As a design leader, I excel in user research, system architecture, and cross-
                  functional collaboration. I've successfully led teams through product launches, 
                  managed design systems at scale, and pioneered AI-enhanced design 
                  workflows that improve efficiency by 40%.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">4+</div>
                  <div className="text-sm text-foreground opacity-80 font-medium">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">50+</div>
                  <div className="text-sm text-foreground opacity-80 font-medium">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">15+</div>
                  <div className="text-sm text-foreground opacity-80 font-medium">Team Members Led</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <Card className="neo-card">
                <h3 className="text-xl md:text-2xl font-bold mb-6 text-foreground">Core Expertise</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    'AI Integration', 'Design Systems', 'User Research', 'Team Leadership',
                    'Product Strategy', 'Prototyping', 'Data Visualization', 'Cross-functional Collaboration'
                  ].map((skill, index) => (
                    <motion.div
                      key={skill}
                      className="flex items-center space-x-2 p-3 rounded-lg bg-secondary/50"
                      whileHover={{ scale: 1.05, backgroundColor: 'rgba(138, 43, 226, 0.1)' }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-sm font-semibold text-foreground">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </Card>

              <Card className="neo-card">
                <h3 className="text-xl md:text-2xl font-bold mb-6 text-foreground">Design Philosophy</h3>
                <p className="text-foreground opacity-90 leading-relaxed font-medium">
                  Great design is invisible. It seamlessly bridges human needs with 
                  technological possibilities, creating experiences that feel natural, 
                  intuitive, and delightful. I believe in data-driven decisions, user-
                  centered approaches, and the power of AI to augment human creativity.
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

      {/* Expertise Section */}
      <section id="expertise" className="py-32 relative">
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
      </section>

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