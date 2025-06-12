import { motion } from "framer-motion";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { PortfolioCard } from "@/components/portfolio-card";
import { SkillBar } from "@/components/skill-bar";

const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  projectType: z.string().min(1, "Please select a project type"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const portfolioProjects = [
  {
    title: "AI-Powered Design Assistant",
    description: "Revolutionary design tool that leverages machine learning to automate repetitive tasks and enhance creative workflows",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    tags: ["AI/ML", "Product Design", "Innovation"]
  },
  {
    title: "Enterprise Analytics Platform",
    description: "Comprehensive data visualization suite that transforms complex datasets into actionable business insights",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    tags: ["Data Visualization", "Enterprise UX", "Dashboard Design"]
  },
  {
    title: "Mobile Banking Revolution",
    description: "Next-generation fintech app that redefined digital banking with intuitive AI-driven user experiences",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    tags: ["Fintech", "Mobile Design", "AI Integration"]
  },
  {
    title: "Healthcare Management System",
    description: "Patient-centric platform that streamlines healthcare workflows through intelligent design and automation",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    tags: ["Healthcare", "System Design", "User Research"]
  },
  {
    title: "Design System Architecture",
    description: "Scalable design system foundation that powers consistent experiences across multiple product lines",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    tags: ["Design Systems", "Architecture", "Leadership"]
  },
  {
    title: "AI-Enhanced E-commerce",
    description: "Intelligent shopping platform that personalizes user experiences through advanced machine learning algorithms",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    tags: ["E-commerce", "AI Personalization", "Conversion Optimization"]
  }
];

const designSkills = [
  { skill: "Design Systems", percentage: 95, color: "indigo" as const },
  { skill: "User Research", percentage: 92, color: "emerald" as const },
  { skill: "Prototyping", percentage: 88, color: "gold" as const },
];

const technicalSkills = [
  { skill: "AI/ML Integration", percentage: 85, color: "indigo" as const },
  { skill: "Data Visualization", percentage: 90, color: "emerald" as const },
  { skill: "Design Leadership", percentage: 93, color: "gold" as const },
];

const managementSkills = [
  { skill: "Team Leadership", percentage: 94, color: "indigo" as const },
  { skill: "Strategic Planning", percentage: 89, color: "emerald" as const },
  { skill: "Cross-functional Collaboration", percentage: 91, color: "gold" as const },
];

export default function Home() {
  const { toast } = useToast();
  
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
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to send message. Please try again.",
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
    <div className="min-h-screen sophisticated-grid">
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Floating background elements */}
        <div className="absolute inset-0 opacity-30">
          <motion.div 
            className="absolute top-20 left-20 w-32 h-32 rounded-full border border-accent-indigo/20"
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 90, 180, 270, 360]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div 
            className="absolute bottom-32 right-20 w-24 h-24 bg-gradient-to-br from-accent-emerald/10 to-accent-gold/10 rounded-lg"
            animate={{ 
              y: [-10, 10, -10],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div 
            className="absolute top-1/3 right-1/4 w-16 h-16 bg-accent-gold/10 rounded-full"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ duration: 6, repeat: Infinity }}
          />
        </div>
        
        <motion.div 
          className="text-center z-10 max-w-6xl mx-auto px-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-12">
            <motion.div
              className="mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="font-dm-mono text-accent-indigo text-sm tracking-wider uppercase">
                Senior Product Designer & AI Innovator
              </span>
            </motion.div>
            
            <motion.h1 
              className="font-playfair text-6xl md:text-8xl font-bold mb-8 text-shadow-elegant"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <span className="gradient-text animate-gradient-shift">Karan</span>
              <br />
              <span className="text-foreground">Gadhave</span>
            </motion.h1>
            
            <motion.div 
              className="font-inter text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-4xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Transforming complex challenges into intuitive digital experiences through 
              strategic design thinking, AI innovation, and data-driven insights.
            </motion.div>
            
            <motion.div 
              className="flex justify-center space-x-4 mb-10 flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <div className="elegant-card px-6 py-3 bg-card/80 backdrop-blur-elegant rounded-full">
                <span className="font-inter text-sm font-medium text-accent-indigo">AI Integration</span>
              </div>
              <div className="elegant-card px-6 py-3 bg-card/80 backdrop-blur-elegant rounded-full">
                <span className="font-inter text-sm font-medium text-accent-emerald">Design Systems</span>
              </div>
              <div className="elegant-card px-6 py-3 bg-card/80 backdrop-blur-elegant rounded-full">
                <span className="font-inter text-sm font-medium text-accent-gold">Team Leadership</span>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            className="flex justify-center space-x-6 flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
          >
            <Button 
              onClick={() => scrollToSection('work')}
              className="bg-primary text-primary-foreground px-8 py-4 font-inter font-medium text-sm hover:bg-primary/90 transition-all transform hover:scale-105 cursor-pointer"
            >
              View Portfolio
            </Button>
            <Button 
              variant="outline"
              onClick={() => scrollToSection('contact')}
              className="border-2 border-primary text-primary px-8 py-4 font-inter font-medium text-sm hover:bg-primary hover:text-primary-foreground transition-all cursor-pointer"
            >
              Get In Touch
            </Button>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ 
            y: [0, -8, 0]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="text-lg text-muted-foreground">↓</div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 relative bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div>
                <motion.div
                  className="font-dm-mono text-accent-indigo text-sm tracking-wider uppercase mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  Professional Profile
                </motion.div>
                <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Designing the Future of 
                  <span className="gradient-text"> Digital Experiences</span>
                </h2>
              </div>
              
              <div className="space-y-6 text-muted-foreground leading-relaxed font-inter">
                <p>
                  As a skilled Senior Product Designer with four years of experience, I excel in UI/UX design, 
                  transforming ideas into intuitive digital products. My expertise spans user research, wireframing, 
                  design systems, and cutting-edge AI integration.
                </p>
                <p>
                  I take a strategic, data-driven approach to problem-solving, consistently delivering high-quality 
                  results that drive business value. As a UI/UX manager, I lead design teams, manage project timelines, 
                  and ensure alignment with product goals, making me uniquely positioned to create impactful digital experiences.
                </p>
              </div>
              
              <div className="grid grid-cols-3 gap-6">
                <motion.div 
                  className="elegant-card text-center p-6 bg-card/80 rounded-lg"
                  whileHover={{ y: -4 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className="text-3xl font-playfair font-bold text-accent-indigo mb-2">4+</div>
                  <div className="text-xs font-inter text-muted-foreground">Years Experience</div>
                </motion.div>
                <motion.div 
                  className="elegant-card text-center p-6 bg-card/80 rounded-lg"
                  whileHover={{ y: -4 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="text-3xl font-playfair font-bold text-accent-emerald mb-2">50+</div>
                  <div className="text-xs font-inter text-muted-foreground">Projects Delivered</div>
                </motion.div>
                <motion.div 
                  className="elegant-card text-center p-6 bg-card/80 rounded-lg"
                  whileHover={{ y: -4 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="text-3xl font-playfair font-bold text-accent-gold mb-2">15+</div>
                  <div className="text-xs font-inter text-muted-foreground">Team Members Led</div>
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
              <div className="relative elegant-card rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                  alt="Professional designer working on AI-powered interfaces" 
                  className="w-full h-auto rounded-xl" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </div>
              
              {/* Floating accent elements */}
              <motion.div 
                className="absolute -top-4 -right-4 w-16 h-16 bg-accent-indigo/10 border border-accent-indigo/30 rounded-full flex items-center justify-center backdrop-blur-md"
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.05, 1]
                }}
                transition={{ 
                  rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                  scale: { duration: 4, repeat: Infinity }
                }}
              >
                <span className="text-accent-indigo text-xs font-dm-mono">AI</span>
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-accent-emerald/10 border border-accent-emerald/30 rounded-lg flex items-center justify-center backdrop-blur-md"
                animate={{ 
                  y: [-3, 3, -3],
                  opacity: [0.8, 1, 0.8]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <span className="text-accent-emerald text-xs font-dm-mono">UX</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section id="work" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="font-jetbrains text-neon-pink text-sm tracking-[0.2em] uppercase mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              {'>> Portfolio_Database.exe'}
            </motion.div>
            <h2 className="font-righteous text-5xl md:text-6xl font-bold mb-6">
              <span className="text-neon-cyan">PROJECT</span>
              <br />
              <span className="text-neon-yellow">ARCHIVE</span>
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto font-poppins leading-relaxed">
              [DATA_STREAM_ACTIVE] A neural network of digital experiences crafted to merge 
              human psychology with cybernetic precision. Each project represents a node 
              in the expanding matrix of user-centered design.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioProjects.map((project, index) => (
              <PortfolioCard
                key={project.title}
                title={project.title}
                description={project.description}
                image={project.image}
                tags={project.tags}
                index={index}
              />
            ))}
          </div>
        </div>
        
        {/* Background grid effect */}
        <div className="absolute inset-0 cyber-grid opacity-5" />
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-4">
              My <span className="text-electric">Skills</span>
            </h2>
            <p className="text-xl text-muted-foreground">Tools and technologies I use to bring ideas to life</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Design Skills */}
            <motion.div 
              className="bg-dark-surface/50 p-8 rounded-2xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-6">
                <i className="fas fa-palette text-4xl text-electric mb-4"></i>
                <h3 className="font-space text-xl font-bold">Design</h3>
              </div>
              <div className="space-y-4">
                {designSkills.map((skill) => (
                  <SkillBar key={skill.skill} {...skill} />
                ))}
              </div>
            </motion.div>
            
            {/* Technical Skills */}
            <motion.div 
              className="elegant-card p-8 bg-card/80 rounded-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-8">
                <div className="w-12 h-12 bg-accent-emerald/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-accent-emerald text-xl">⚡</span>
                </div>
                <h3 className="font-playfair text-xl font-semibold text-foreground">Technical Expertise</h3>
              </div>
              <div className="space-y-6">
                {technicalSkills.map((skill) => (
                  <SkillBar key={skill.skill} {...skill} />
                ))}
              </div>
            </motion.div>
            
            {/* Management Skills */}
            <motion.div 
              className="elegant-card p-8 bg-card/80 rounded-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-8">
                <div className="w-12 h-12 bg-accent-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-accent-gold text-xl">👥</span>
                </div>
                <h3 className="font-playfair text-xl font-semibold text-foreground">Leadership</h3>
              </div>
              <div className="space-y-6">
                {managementSkills.map((skill) => (
                  <SkillBar key={skill.skill} {...skill} />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-dark-surface/50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-4">
              Let's <span className="text-electric">Connect</span>
            </h2>
            <p className="text-xl text-muted-foreground">Ready to create something amazing together?</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div>
                <h3 className="font-space text-2xl font-bold mb-6">Get In Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <i className="fas fa-envelope text-electric text-xl"></i>
                    <span>alex.chen@design.com</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <i className="fas fa-phone text-vibrant text-xl"></i>
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <i className="fas fa-map-marker-alt text-purple text-xl"></i>
                    <span>San Francisco, CA</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-space text-xl font-bold mb-4">Follow Me</h3>
                <div className="flex space-x-4">
                  {[
                    { icon: "fab fa-dribbble", color: "border-electric/30 hover:bg-electric" },
                    { icon: "fab fa-behance", color: "border-vibrant/30 hover:bg-vibrant" },
                    { icon: "fab fa-linkedin", color: "border-purple/30 hover:bg-purple" },
                    { icon: "fab fa-twitter", color: "border-electric/30 hover:bg-electric" },
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href="#"
                      className={`w-12 h-12 bg-dark-surface border rounded-full flex items-center justify-center hover:text-dark-primary transition-all ${social.color}`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <i className={social.icon}></i>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your Name" 
                            className="bg-dark-surface border-muted focus:border-electric"
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
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input 
                            type="email"
                            placeholder="your@email.com" 
                            className="bg-dark-surface border-muted focus:border-electric"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="projectType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Project Type</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-dark-surface border-muted focus:border-electric">
                              <SelectValue placeholder="Select project type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="ui-ux">UI/UX Design</SelectItem>
                            <SelectItem value="web-design">Web Design</SelectItem>
                            <SelectItem value="mobile-app">Mobile App</SelectItem>
                            <SelectItem value="branding">Branding</SelectItem>
                            <SelectItem value="consultation">Consultation</SelectItem>
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
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            rows={4}
                            placeholder="Tell me about your project..." 
                            className="bg-dark-surface border-muted focus:border-electric resize-none"
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
                    className="w-full bg-electric text-dark-primary py-3 rounded-lg font-semibold hover:bg-electric/80 transition-all transform hover:scale-105"
                  >
                    {contactMutation.isPending ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="font-orbitron text-xl font-bold mb-4 md:mb-0">
              <span className="text-electric">Alex</span> Chen
            </div>
            <div className="text-center text-muted-foreground">
              © 2024 Alex Chen. Crafted with passion and precision.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
