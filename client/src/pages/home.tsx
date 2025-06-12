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
    title: "E-Commerce Revolution",
    description: "Complete mobile app redesign that increased conversion by 40%",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    tags: ["UI Design", "Prototyping"]
  },
  {
    title: "Analytics Dashboard",
    description: "Data visualization platform for enterprise clients",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    tags: ["Data Viz", "UX Research"]
  },
  {
    title: "Creative Portfolio",
    description: "Award-winning portfolio site for a design agency",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    tags: ["Web Design", "Animation"]
  },
  {
    title: "Wellness App",
    description: "Mindfulness app with focus on user retention",
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    tags: ["Mobile", "User Research"]
  },
  {
    title: "Brand Identity",
    description: "Complete rebrand for a fintech startup",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    tags: ["Branding", "Strategy"]
  },
  {
    title: "Design System 2.0",
    description: "Scalable design system for a SaaS platform",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    tags: ["Systems", "Documentation"]
  }
];

const designSkills = [
  { skill: "Figma", percentage: 95, color: "electric" as const },
  { skill: "Adobe Creative Suite", percentage: 90, color: "vibrant" as const },
  { skill: "Sketch", percentage: 85, color: "purple" as const },
];

const prototypingSkills = [
  { skill: "Framer", percentage: 92, color: "electric" as const },
  { skill: "Principle", percentage: 88, color: "vibrant" as const },
  { skill: "HTML/CSS", percentage: 80, color: "purple" as const },
];

const researchSkills = [
  { skill: "User Interviews", percentage: 95, color: "electric" as const },
  { skill: "Analytics", percentage: 85, color: "vibrant" as const },
  { skill: "A/B Testing", percentage: 90, color: "purple" as const },
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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <motion.div 
            className="absolute top-20 left-20 w-32 h-32 border-2 border-electric rounded-full"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-40 right-32 w-24 h-24 bg-vibrant/20 transform rotate-45"
            animate={{ y: [-20, 0, -20] }}
            transition={{ duration: 6, repeat: Infinity }}
          />
          <motion.div 
            className="absolute top-1/2 left-10 w-16 h-16 bg-purple/30 rounded-full"
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </div>
        
        <motion.div 
          className="text-center z-10 max-w-4xl mx-auto px-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="mb-8">
            <motion.h1 
              className="font-orbitron text-6xl md:text-8xl font-black mb-4 animate-glow"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <span className="text-electric">ALEX</span>{" "}
              <span className="text-vibrant">CHEN</span>
            </motion.h1>
            
            <motion.div 
              className="font-space text-xl md:text-2xl text-muted-foreground mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              UI/UX Designer & Creative Technologist
            </motion.div>
            
            <motion.div 
              className="flex justify-center space-x-4 mb-8 flex-wrap gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <span className="px-4 py-2 bg-dark-surface border border-electric/30 rounded-full text-sm">
                🎨 Design Systems
              </span>
              <span className="px-4 py-2 bg-dark-surface border border-vibrant/30 rounded-full text-sm">
                ⚡ Interaction Design
              </span>
              <span className="px-4 py-2 bg-dark-surface border border-purple/30 rounded-full text-sm">
                🚀 Prototyping
              </span>
            </motion.div>
          </div>
          
          <motion.div 
            className="flex justify-center space-x-6 flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <Button 
              onClick={() => scrollToSection('work')}
              className="bg-electric text-dark-primary px-8 py-3 rounded-full font-semibold hover:bg-electric/80 transition-all transform hover:scale-105"
            >
              View My Work
            </Button>
            <Button 
              variant="outline"
              onClick={() => scrollToSection('contact')}
              className="border-2 border-electric text-electric px-8 py-3 rounded-full font-semibold hover:bg-electric hover:text-dark-primary transition-all"
            >
              Get In Touch
            </Button>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <i className="fas fa-chevron-down text-2xl text-electric"></i>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="font-orbitron text-4xl md:text-5xl font-bold">
                <span className="text-electric">About</span> Me
              </h2>
              <div className="space-y-4 text-lg leading-relaxed">
                <p>
                  I'm a passionate UI/UX designer with 6+ years of experience crafting digital experiences 
                  that merge aesthetic beauty with functional excellence. My approach combines user-centered 
                  design principles with cutting-edge technology.
                </p>
                <p>
                  Specializing in design systems, prototyping, and interaction design, I help brands 
                  create memorable digital experiences that drive engagement and conversion.
                </p>
              </div>
              
              <div className="flex space-x-8">
                <motion.div 
                  className="text-center"
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="text-3xl font-bold text-electric">150+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </motion.div>
                <motion.div 
                  className="text-center"
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="text-3xl font-bold text-vibrant">6+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </motion.div>
                <motion.div 
                  className="text-center"
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="text-3xl font-bold text-purple">50+</div>
                  <div className="text-sm text-muted-foreground">Happy Clients</div>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-2xl overflow-hidden transform hover:scale-105 transition-transform duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                  alt="Creative workspace with design tools and sketches" 
                  className="w-full h-auto rounded-2xl" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-primary/60 to-transparent"></div>
              </div>
              
              <motion.div 
                className="absolute -top-6 -right-6 w-24 h-24 bg-electric/20 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div 
                className="absolute -bottom-6 -left-6 w-32 h-32 border-2 border-vibrant/30 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section id="work" className="py-20 bg-dark-surface/50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="text-electric">Work</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A collection of projects that showcase my approach to solving complex design challenges
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
            
            {/* Prototyping Skills */}
            <motion.div 
              className="bg-dark-surface/50 p-8 rounded-2xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-6">
                <i className="fas fa-code text-4xl text-vibrant mb-4"></i>
                <h3 className="font-space text-xl font-bold">Prototyping</h3>
              </div>
              <div className="space-y-4">
                {prototypingSkills.map((skill) => (
                  <SkillBar key={skill.skill} {...skill} />
                ))}
              </div>
            </motion.div>
            
            {/* Research Skills */}
            <motion.div 
              className="bg-dark-surface/50 p-8 rounded-2xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-6">
                <i className="fas fa-search text-4xl text-purple mb-4"></i>
                <h3 className="font-space text-xl font-bold">Research</h3>
              </div>
              <div className="space-y-4">
                {researchSkills.map((skill) => (
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
