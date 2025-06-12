import { motion, useScroll, useTransform } from "framer-motion";
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
    title: "AI-Powered Design System",
    description: "Next-generation design system with AI-driven component generation and automated documentation",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    tags: ["AI/ML", "Design Systems", "Automation"],
    year: "2024",
    category: "Product Design"
  },
  {
    id: 2,
    title: "Enterprise Analytics Dashboard",
    description: "Real-time analytics platform processing millions of data points with intuitive visualization",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    tags: ["Data Visualization", "Enterprise", "Real-time"],
    year: "2024",
    category: "Data & Analytics"
  },
  {
    id: 3,
    title: "Mobile Banking Revolution",
    description: "Complete mobile banking experience with biometric security and AI-powered financial insights",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    tags: ["Fintech", "Mobile", "Security"],
    year: "2023",
    category: "Mobile App"
  },
  {
    id: 4,
    title: "Healthcare Platform",
    description: "Comprehensive healthcare management system with telemedicine capabilities and patient portals",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    tags: ["Healthcare", "Telemedicine", "Portal"],
    year: "2023",
    category: "Web Platform"
  },
  {
    id: 5,
    title: "E-commerce Intelligence",
    description: "Smart shopping platform with personalization engine and predictive analytics",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    tags: ["E-commerce", "Personalization", "Analytics"],
    year: "2022",
    category: "E-commerce"
  },
  {
    id: 6,
    title: "Creative Collaboration Hub",
    description: "All-in-one creative workspace for distributed teams with real-time collaboration features",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    tags: ["Collaboration", "Creative", "Remote Work"],
    year: "2022",
    category: "Productivity"
  }
];

export default function Home() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  const categories = ["All", "Product Design", "Data & Analytics", "Mobile App", "Web Platform", "E-commerce", "Productivity"];
  
  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

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
    <div ref={containerRef} className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Custom Cursor */}
      <div 
        className="custom-cursor"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
        }}
      />
      
      {/* Hero Section */}
      <motion.section 
        id="home" 
        className="min-h-screen flex items-center justify-center relative"
        style={{ y, opacity }}
      >
        {/* Background gradient mesh */}
        <div className="absolute inset-0 gradient-mesh opacity-50" />
        <div className="absolute inset-0 grid-dots opacity-30" />
        
        {/* Floating elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute top-20 left-20 w-32 h-32 border border-border/30 rounded-lg animate-spin-slow"
          />
          <motion.div 
            className="absolute bottom-32 right-20 w-24 h-24 border border-border/30 rounded-full animate-float"
          />
          <motion.div 
            className="absolute top-1/2 right-1/3 w-16 h-16 border border-border/30 animate-pulse-slow"
          />
        </div>
        
        <div className="container mx-auto px-6 text-center z-10">
          {/* Logo */}
          <motion.div
            className="mb-12 flex justify-center"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img 
              src="@assets/Logo black_1749711104405.png"
              alt="Karan Gadhave Logo" 
              className="h-20 w-auto filter invert opacity-90 hover:opacity-100 transition-opacity"
            />
          </motion.div>
          
          {/* Title */}
          <div className="space-y-6 max-w-4xl mx-auto">
            <motion.div
              className="reveal-text stagger-1"
            >
              <span className="font-mono text-sm tracking-wider text-muted-foreground uppercase">
                Senior Product Designer & AI Innovator
              </span>
            </motion.div>
            
            <motion.h1 
              className="font-inter text-5xl md:text-7xl lg:text-8xl font-bold text-gradient reveal-text stagger-2"
            >
              Karan Gadhave
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed reveal-text stagger-3"
            >
              Crafting exceptional digital experiences through strategic design thinking, 
              AI innovation, and human-centered solutions.
            </motion.p>
          </div>
          
          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center mt-12 reveal-text stagger-4"
          >
            <Button 
              onClick={() => scrollToSection('projects')}
              size="lg"
              className="hover-lift bg-primary text-primary-foreground font-medium"
            >
              View My Work
            </Button>
            <Button 
              onClick={() => scrollToSection('contact')}
              variant="outline"
              size="lg"
              className="hover-lift border-border hover:bg-accent"
            >
              Get In Touch
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <section id="projects" className="py-24 relative">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.div
              className="reveal-text"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="font-mono text-sm tracking-wider text-muted-foreground uppercase mb-4 block">
                Featured Work
              </span>
              <h2 className="font-inter text-4xl md:text-5xl font-bold text-gradient mb-6">
                Selected Projects
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A showcase of innovative solutions spanning AI integration, enterprise platforms, 
                and user-centered design systems.
              </p>
            </motion.div>
          </div>
          
          {/* Category Filter */}
          <motion.div 
            className="flex flex-wrap gap-3 justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-mono text-sm transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-card border border-border text-muted-foreground hover:text-foreground hover:border-border/80'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
          
          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="glass-card rounded-2xl overflow-hidden hover-lift group cursor-pointer"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6,
                  delay: index * 0.1
                }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-lg">→</span>
                      </div>
                      <span className="font-mono text-sm">View Project</span>
                    </div>
                  </div>
                </div>
                
                {/* Project Info */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-inter text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <span className="font-mono text-xs text-muted-foreground">
                      {project.year}
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-mono bg-accent/50 text-accent-foreground rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div>
                <span className="font-mono text-sm tracking-wider text-muted-foreground uppercase mb-4 block">
                  About Me
                </span>
                <h2 className="font-inter text-4xl md:text-5xl font-bold text-gradient mb-6">
                  Designing Tomorrow's Digital Experiences
                </h2>
              </div>
              
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  With four years of specialized expertise in UI/UX design, I transform complex challenges 
                  into intuitive digital solutions. My approach combines strategic design thinking with 
                  cutting-edge AI integration to create products that drive meaningful business outcomes.
                </p>
                <p>
                  As a design leader, I excel in user research, system architecture, and cross-functional 
                  collaboration. I've successfully led teams through product launches, managed design systems 
                  at scale, and pioneered AI-enhanced design workflows that improve efficiency by 40%.
                </p>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8">
                {[
                  { number: "4+", label: "Years Experience" },
                  { number: "50+", label: "Projects Delivered" },
                  { number: "15+", label: "Team Members Led" }
                ].map((stat, index) => (
                  <motion.div 
                    key={stat.label}
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="text-3xl font-bold text-foreground mb-2">{stat.number}</div>
                    <div className="text-sm font-mono text-muted-foreground">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            {/* Skills & Philosophy */}
            <motion.div 
              className="glass-card p-8 rounded-2xl"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="font-inter text-2xl font-semibold text-foreground mb-6">
                Core Expertise
              </h3>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  "AI Integration", "Design Systems", "User Research", "Team Leadership",
                  "Product Strategy", "Prototyping", "Data Visualization", "Cross-functional Collaboration"
                ].map((skill, index) => (
                  <motion.div
                    key={skill}
                    className="text-sm font-mono text-muted-foreground py-2 px-3 bg-accent/30 rounded border border-border/30"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
              
              <div className="border-t border-border/30 pt-6">
                <h4 className="font-inter text-lg font-semibold text-foreground mb-4">
                  Design Philosophy
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  Great design is invisible. It seamlessly bridges human needs with technological 
                  possibilities, creating experiences that feel natural, intuitive, and delightful. 
                  I believe in data-driven decisions, user-centered approaches, and the power of 
                  AI to augment human creativity.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="font-mono text-sm tracking-wider text-muted-foreground uppercase mb-4 block">
                Let's Connect
              </span>
              <h2 className="font-inter text-4xl md:text-5xl font-bold text-gradient mb-6">
                Ready to Create Something Exceptional?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Let's discuss how strategic design and AI innovation can transform your next project.
              </p>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div
              className="glass-card p-8 rounded-2xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-medium text-foreground">Name</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Your Name" 
                              className="bg-background border-border focus:border-primary transition-colors"
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
                          <FormLabel className="font-medium text-foreground">Email</FormLabel>
                          <FormControl>
                            <Input 
                              type="email"
                              placeholder="your@email.com" 
                              className="bg-background border-border focus:border-primary transition-colors"
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
                        <FormLabel className="font-medium text-foreground">Project Type</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-background border-border focus:border-primary">
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
                        <FormLabel className="font-medium text-foreground">Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            rows={6}
                            placeholder="Tell me about your project and goals..." 
                            className="bg-background border-border focus:border-primary resize-none transition-colors"
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
                    className="w-full bg-primary text-primary-foreground py-4 font-medium hover:bg-primary/90 transition-all hover-lift"
                  >
                    {contactMutation.isPending ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
              
              {/* Contact Info */}
              <div className="mt-12 pt-8 border-t border-border/30">
                <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div>
                    <div className="font-mono text-xs text-muted-foreground mb-2">EMAIL</div>
                    <div className="font-medium">karan.gadhave@design.com</div>
                  </div>
                  <div>
                    <div className="font-mono text-xs text-muted-foreground mb-2">LINKEDIN</div>
                    <div className="font-medium">linkedin.com/in/karangadhave</div>
                  </div>
                  <div>
                    <div className="font-mono text-xs text-muted-foreground mb-2">PORTFOLIO</div>
                    <div className="font-medium">dribbble.com/karangadhave</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-border/30">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="font-inter text-2xl font-bold text-gradient mb-4 md:mb-0">
              Karan Gadhave
            </div>
            <div className="text-center text-muted-foreground font-mono text-sm">
              © 2024 — Designed with precision and innovation
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}