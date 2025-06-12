import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { useRef, useState, useEffect } from "react";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  projectType: z.string().min(1, "Please select a project type"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const projects = [
  {
    id: 1,
    title: "AI-Powered Design Assistant",
    description: "Revolutionary design tool leveraging machine learning to automate workflows and enhance creative processes",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    tags: ["AI/ML", "Product Design", "Innovation"],
    year: "2024"
  },
  {
    id: 2,
    title: "Enterprise Analytics Platform",
    description: "Comprehensive data visualization suite transforming complex datasets into actionable business insights",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    tags: ["Data Visualization", "Enterprise UX", "Dashboard"],
    year: "2024"
  },
  {
    id: 3,
    title: "Mobile Banking Revolution",
    description: "Next-generation fintech app redefining digital banking with intuitive AI-driven experiences",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    tags: ["Fintech", "Mobile Design", "AI Integration"],
    year: "2023"
  },
  {
    id: 4,
    title: "Healthcare Management System",
    description: "Patient-centric platform streamlining healthcare workflows through intelligent design",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    tags: ["Healthcare", "System Design", "User Research"],
    year: "2023"
  },
  {
    id: 5,
    title: "Design System Architecture",
    description: "Scalable design system foundation powering consistent experiences across product lines",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    tags: ["Design Systems", "Architecture", "Leadership"],
    year: "2022"
  },
  {
    id: 6,
    title: "E-commerce Intelligence",
    description: "Smart shopping platform personalizing experiences through advanced machine learning",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    tags: ["E-commerce", "Personalization", "Conversion"],
    year: "2022"
  }
];

export default function Home() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.8]);
  
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const x = useSpring(0, springConfig);
  const ySpring = useSpring(0, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      x.set(e.clientX);
      ySpring.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [x, ySpring]);
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      projectType: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await fetch("/api/contacts", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "I'll get back to you as soon as possible.",
      });
      form.reset();
      queryClient.invalidateQueries({ queryKey: ["/api/contacts"] });
    },
    onError: () => {
      toast({
        title: "Failed to send message",
        description: "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    contactMutation.mutate(data);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-background text-foreground geometric-pattern relative">
      {/* Custom Cursor */}
      <motion.div
        className="fixed w-4 h-4 bg-white rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{ x, y: ySpring }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Hero Section */}
      <motion.section 
        id="home" 
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
        style={{ y, opacity, scale }}
      >
        {/* Morphing background blob */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 morphing-blob"
          animate={{ 
            x: [0, 100, -50, 0],
            y: [0, -100, 50, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Interactive geometric elements */}
        <div className="absolute inset-0 opacity-30">
          <motion.div 
            className="absolute top-20 left-20 w-32 h-32 border border-foreground/20 magnetic-hover"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            whileHover={{ scale: 1.2, borderColor: "rgba(255,255,255,0.5)" }}
          />
          <motion.div 
            className="absolute bottom-32 right-20 w-24 h-24 border border-foreground/20 magnetic-hover"
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            whileHover={{ scale: 1.3, borderColor: "rgba(255,255,255,0.5)" }}
          />
          <motion.div 
            className="absolute top-1/2 right-1/3 w-16 h-16 border border-foreground/20 liquid-effect"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </div>
        
        <motion.div 
          className="text-center z-10 max-w-5xl mx-auto px-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {/* Logo Integration */}
          <motion.div
            className="mb-8 flex justify-center"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
          >
            <motion.img 
              src="@assets/Logo black_1749711104405.png"
              alt="Karan Gadhave Logo" 
              className="h-24 w-auto filter invert"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </motion.div>
          
          <motion.div
            className="mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <span className="font-mono text-sm tracking-wider text-muted-foreground uppercase glitch-effect" data-text="Senior Product Designer">
              Senior Product Designer
            </span>
          </motion.div>
          
          <motion.h1 
            className="font-inter text-6xl md:text-9xl font-bold mb-8 text-glow text-reveal"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.7 }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.span 
              className="block"
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Karan
            </motion.span>
            <motion.span 
              className="block"
              whileHover={{ x: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Gadhave
            </motion.span>
          </motion.h1>
          
          <motion.div 
            className="font-inter text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Creating exceptional digital experiences through strategic design thinking and innovative solutions.
            <br />
            Specialized in AI integration and design systems.
          </motion.div>
          
          <motion.div 
            className="flex justify-center space-x-6 flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
          >
            <Button 
              onClick={() => scrollToSection('about')}
              className="bg-primary text-primary-foreground px-8 py-4 font-inter font-medium text-sm hover:bg-primary/90 transition-all border-glow"
            >
              Learn More
            </Button>
            <Button 
              variant="outline"
              onClick={() => scrollToSection('contact')}
              className="border-2 border-foreground/20 text-foreground px-8 py-4 font-inter font-medium text-sm hover:bg-foreground hover:text-background transition-all"
            >
              Get In Touch
            </Button>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="text-lg text-muted-foreground">↓</div>
        </motion.div>
      </motion.section>

      {/* Projects Section */}
      <section id="projects" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="font-mono text-sm tracking-wider text-muted-foreground uppercase mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              Selected Works
            </motion.div>
            <h2 className="font-inter text-4xl md:text-6xl font-bold text-foreground mb-6 text-glow">
              Project <span className="glitch-effect" data-text="Showcase">Showcase</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-inter">
              A collection of innovative projects demonstrating expertise in AI integration, 
              design systems, and strategic product development.
            </p>
          </motion.div>
          
          {/* Masonry Grid Layout */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="break-inside-avoid relative group cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="minimal-card rounded-2xl overflow-hidden relative">
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-auto object-cover transition-all duration-700"
                      whileHover={{ scale: 1.1 }}
                    />
                    
                    {/* Overlay Effect */}
                    <motion.div 
                      className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    >
                      <motion.div
                        className="text-center"
                        initial={{ y: 20, opacity: 0 }}
                        whileHover={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                      >
                        <div className="w-16 h-16 border-2 border-white rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-white text-xl">→</span>
                        </div>
                        <div className="font-mono text-sm text-white tracking-wider">
                          VIEW PROJECT
                        </div>
                      </motion.div>
                    </motion.div>
                  </div>
                  
                  {/* Project Info */}
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <motion.h3 
                        className="font-inter text-xl font-semibold text-foreground"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {project.title}
                      </motion.h3>
                      <span className="font-mono text-xs text-muted-foreground">
                        {project.year}
                      </span>
                    </div>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 font-inter">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <motion.span
                          key={tag}
                          className="px-3 py-1 text-xs font-mono text-muted-foreground border border-border/30 rounded-full"
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ 
                            delay: (index * 0.1) + (tagIndex * 0.05),
                            type: "spring",
                            stiffness: 200
                          }}
                          whileHover={{ 
                            scale: 1.1,
                            backgroundColor: "rgba(255, 255, 255, 0.1)",
                            borderColor: "rgba(255, 255, 255, 0.3)"
                          }}
                          viewport={{ once: true }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Unique corner accents */}
                  <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-white/20" />
                  <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-white/20" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div>
                <motion.div
                  className="font-mono text-sm tracking-wider text-muted-foreground uppercase mb-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  About Me
                </motion.div>
                <h2 className="font-inter text-4xl md:text-5xl font-bold text-foreground mb-8 text-glow">
                  Designing the Future of Digital Experiences
                </h2>
              </div>
              
              <div className="space-y-6 text-muted-foreground leading-relaxed font-inter text-lg">
                <p>
                  With four years of expertise in UI/UX design, I specialize in transforming complex ideas 
                  into intuitive digital products. My approach combines strategic thinking with innovative 
                  design solutions that drive business value.
                </p>
                <p>
                  I excel in user research, wireframing, design systems, and cutting-edge AI integration. 
                  As a design leader, I manage teams, oversee project timelines, and ensure alignment 
                  with product goals across multiple industries.
                </p>
              </div>
              
              <div className="grid grid-cols-3 gap-8 pt-8">
                <motion.div 
                  className="text-center"
                  whileHover={{ y: -4 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className="text-4xl font-inter font-bold text-foreground mb-2">4+</div>
                  <div className="text-sm font-mono text-muted-foreground tracking-wider">YEARS</div>
                </motion.div>
                <motion.div 
                  className="text-center"
                  whileHover={{ y: -4 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="text-4xl font-inter font-bold text-foreground mb-2">50+</div>
                  <div className="text-sm font-mono text-muted-foreground tracking-wider">PROJECTS</div>
                </motion.div>
                <motion.div 
                  className="text-center"
                  whileHover={{ y: -4 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="text-4xl font-inter font-bold text-foreground mb-2">15+</div>
                  <div className="text-sm font-mono text-muted-foreground tracking-wider">TEAMS LED</div>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative minimal-card rounded-xl overflow-hidden p-12">
                <div className="space-y-8">
                  <div className="space-y-4">
                    <h3 className="font-inter text-xl font-semibold text-foreground">Core Expertise</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        "AI Integration", "Design Systems", "User Research", "Team Leadership",
                        "Product Strategy", "Prototyping", "Data Visualization", "Cross-functional Collaboration"
                      ].map((skill, index) => (
                        <motion.div
                          key={skill}
                          className="text-sm font-mono text-muted-foreground py-2 px-3 border border-border/30 rounded"
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 }}
                          viewport={{ once: true }}
                        >
                          {skill}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="font-inter text-xl font-semibold text-foreground">Philosophy</h3>
                    <p className="text-muted-foreground font-inter leading-relaxed">
                      Design is not just about aesthetics—it's about solving complex problems with elegant solutions 
                      that enhance human experiences and drive meaningful outcomes.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Floating accent elements */}
              <motion.div 
                className="absolute -top-4 -right-4 w-16 h-16 border border-foreground/20 rounded-full flex items-center justify-center animate-float"
              >
                <span className="text-foreground text-xs font-mono">AI</span>
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-4 -left-4 w-12 h-12 border border-foreground/20 rounded flex items-center justify-center animate-float"
                style={{ animationDelay: '2s' }}
              >
                <span className="text-foreground text-xs font-mono">UX</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="font-mono text-sm tracking-wider text-muted-foreground uppercase mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              Let's Connect
            </motion.div>
            <h2 className="font-inter text-4xl md:text-5xl font-bold text-foreground mb-6 text-glow">
              Ready to Create Something Exceptional?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-inter">
              Let's discuss how strategic design and AI innovation can transform your next project.
            </p>
          </motion.div>
          
          <motion.div
            className="minimal-card p-12 rounded-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-inter font-medium text-foreground">Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your Name" 
                            className="bg-background border-border focus:border-foreground/50 transition-colors font-inter"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-inter font-medium text-foreground">Email</FormLabel>
                        <FormControl>
                          <Input 
                            type="email"
                            placeholder="your@email.com" 
                            className="bg-background border-border focus:border-foreground/50 transition-colors font-inter"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="projectType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-inter font-medium text-foreground">Project Type</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-background border-border focus:border-foreground/50 font-inter">
                            <SelectValue placeholder="Select project type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="ai-integration">AI Integration</SelectItem>
                          <SelectItem value="design-systems">Design Systems</SelectItem>
                          <SelectItem value="product-design">Product Design</SelectItem>
                          <SelectItem value="user-research">User Research</SelectItem>
                          <SelectItem value="consultation">Strategic Consultation</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-inter font-medium text-foreground">Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          rows={6}
                          placeholder="Tell me about your project and goals..." 
                          className="bg-background border-border focus:border-foreground/50 resize-none transition-colors font-inter"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  disabled={contactMutation.isPending}
                  className="w-full bg-primary text-primary-foreground py-4 rounded-lg font-inter font-medium hover:bg-primary/90 transition-all border-glow"
                >
                  {contactMutation.isPending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
            
            <div className="mt-12 pt-8 border-t border-border/30">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-sm font-mono text-muted-foreground mb-2">EMAIL</div>
                  <div className="font-inter font-medium">karan.gadhave@design.com</div>
                </div>
                <div>
                  <div className="text-sm font-mono text-muted-foreground mb-2">LINKEDIN</div>
                  <div className="font-inter font-medium">linkedin.com/in/karangadhave</div>
                </div>
                <div>
                  <div className="text-sm font-mono text-muted-foreground mb-2">PORTFOLIO</div>
                  <div className="font-inter font-medium">dribbble.com/karangadhave</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-border/20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="font-inter text-2xl font-bold mb-4 md:mb-0 text-glow">
              Karan Gadhave
            </div>
            <div className="text-center text-muted-foreground font-mono text-sm">
              © 2024 — Designed with precision and purpose
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}