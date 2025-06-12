import { motion } from "framer-motion";
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
import { apiRequest } from "@/lib/queryClient";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  projectType: z.string().min(1, "Please select a project type"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function Home() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  
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
    <div className="min-h-screen bg-background text-foreground geometric-pattern">
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Floating geometric elements */}
        <div className="absolute inset-0 opacity-20">
          <motion.div 
            className="absolute top-20 left-20 w-32 h-32 border border-foreground/10"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div 
            className="absolute bottom-32 right-20 w-24 h-24 border border-foreground/10"
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          />
          <motion.div 
            className="absolute top-1/2 right-1/3 w-16 h-16 border border-foreground/10"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </div>
        
        <motion.div 
          className="text-center z-10 max-w-4xl mx-auto px-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <span className="font-mono text-sm tracking-wider text-muted-foreground uppercase">
              Senior Product Designer
            </span>
          </motion.div>
          
          <motion.h1 
            className="font-inter text-6xl md:text-8xl font-bold mb-8 text-glow"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
          >
            <span className="block">Karan</span>
            <span className="block">Gadhave</span>
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