import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useParams, Link } from 'wouter';
import { 
  ArrowLeft, 
  ExternalLink, 
  Heart, 
  Target, 
  Users, 
  Trophy,
  CheckCircle,
  ArrowRight,
  Lightbulb,
  Code2,
  Palette,
  Database,
  Zap,
  TrendingUp,
  Linkedin
} from 'lucide-react';
import LogoImage from "@assets/Logo white_1754674219191.png";

interface ProjectData {
  title: string;
  subtitle: string;
  description: string;
  detailedDescription: string;
  liveUrl: string;
  tags: string[];
  year: string;
  category: string;
  role: string;
  outcomes: string[];
  keyFeatures: string[];
  techStack: string[];
  process: string[];
  problem: string;
  goal: string;
  solution: string;
  learnings: string;
}

const projectsData: { [key: string]: ProjectData } = {
  'futurefirstfamilies': {
    title: "FutureFirstFamilies",
    subtitle: "Gamified Advocacy Website & Platform",
    description: "A civic engagement platform empowering parents to take monthly actions on educational reform through gamified, user-friendly design tailored for non-tech-savvy users.",
    detailedDescription: "Designed and developed the entire platform from ground up, combining gamification with advocacy to create an engaging experience that increased completed actions by 30% and achieved 4× higher user retention.",
    liveUrl: "https://futurefirstfamilies.com/",
    tags: ["Civic Engagement", "Gamification", "React", "UX Research", "Full-Stack"],
    year: "2024",
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
    techStack: ["Figma", "React", "JavaScript", "HubSpot API", "Responsive Design", "Accessibility"],
    process: [
      "Conducted interviews with advocacy organizers",
      "Created user flows and low-fidelity wireframes", 
      "Designed high-fidelity mockups and reusable design system",
      "Developed platform using React with modern tooling",
      "Integrated gamification, referrals, and accessibility features",
      "Tested and refined based on team feedback"
    ],
    problem: "Parents were overwhelmed by traditional advocacy tools that were text-heavy, form-based, and lacked guidance. This resulted in poor engagement, low action completion rates, and overall frustration.",
    goal: "To create a lightweight, engaging platform where users could take monthly actions easily, track their progress through points and milestones, participate in leaderboards and referral programs, and manage everything from a clean, guided dashboard.",
    solution: "Built a gamified civic engagement platform with intuitive navigation, milestone rewards, and simplified workflows specifically designed for non-tech-savvy users.",
    learnings: "This project reinforced the importance of building for non-tech-savvy users. Simplifying flows, reducing cognitive load, and gamifying progress can meaningfully boost engagement. It also allowed me to handle full design-to-code execution, sharpening both my design system and front-end skills."
  }
};

export default function ProjectDetail() {
  const params = useParams();
  const projectId = params.id || 'futurefirstfamilies';
  const project = projectsData[projectId];

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen bg-background text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4 modern-heritage">Project Not Found</h1>
          <Link href="/">
            <Button>Back to Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 grain-texture">
          <div className="absolute inset-0 bg-gradient-to-br from-background/98 via-background/95 to-background/98" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/15 blur-3xl animate-pulse" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Link href="/">
              <Button variant="ghost" className="text-white/80 hover:text-white hover:bg-white/10">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Portfolio
              </Button>
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Project Info */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-6">
                <Badge className="bg-primary/20 text-primary border-primary/30 mb-4">
                  {project.category}
                </Badge>
                <h1 className="text-4xl md:text-6xl font-normal mb-4 glow-text modern-heritage">
                  {project.title.toUpperCase()}
                </h1>
                <p className="text-xl text-primary/80 font-light mb-6 jost-secondary">
                  {project.subtitle.toUpperCase()}
                </p>
                <p className="text-lg text-white/80 leading-relaxed mb-8 jost-secondary">
                  {project.detailedDescription}
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button 
                  onClick={() => window.open(project.liveUrl, '_blank')}
                  className="text-white font-semibold px-8 py-3 cta-button grain-texture"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Live Site
                </Button>
              </div>
            </motion.div>

            {/* Project Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <Card className="relative aspect-[4/3] bg-gradient-to-br from-primary/30 via-cyan-400/20 to-emerald-400/25 overflow-hidden glass-card grain-texture">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="w-24 h-24 bg-gradient-to-br from-primary/40 to-blue-500/40 flex items-center justify-center backdrop-blur-sm">
                      <Heart className="w-12 h-12 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary/60 animate-pulse" />
                    <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-blue-500/60 animate-pulse delay-300" />
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 glass-card grain-texture h-full">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-red-500/20 flex items-center justify-center mr-4">
                    <Target className="w-6 h-6 text-red-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-white modern-heritage">The Problem</h2>
                </div>
                <p className="text-white/80 leading-relaxed jost-secondary">
                  {project.problem}
                </p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 glass-card grain-texture h-full">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-green-500/20 flex items-center justify-center mr-4">
                    <Lightbulb className="w-6 h-6 text-green-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-white modern-heritage">The Solution</h2>
                </div>
                <p className="text-white/80 leading-relaxed mb-4 jost-secondary">
                  {project.solution}
                </p>
                <div className="pt-4 border-t border-white/10">
                  <h4 className="text-sm font-semibold text-primary mb-2">GOAL</h4>
                  <p className="text-white/70 text-sm leading-relaxed jost-secondary">
                    {project.goal}
                  </p>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* My Role & Process */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold glow-text mb-4 modern-heritage">My Role & Process</h2>
            <p className="text-lg text-white/80 max-w-3xl mx-auto jost-secondary">
              End-to-end ownership from research to deployment
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Role */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 glass-card grain-texture">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary/20 flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-white modern-heritage">My Role</h3>
                </div>
                <p className="text-white/80 text-lg font-medium mb-4 jost-secondary">{project.role}</p>
                <div className="flex flex-wrap gap-2">
                  {['UI/UX Designer', 'UX Research', 'Design System', 'Frontend Dev', 'User Testing'].map((skill) => (
                    <Badge key={skill} className="bg-primary/10 text-primary/90 border-primary/30">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            </motion.div>

            {/* Process */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 glass-card grain-texture">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-500/20 flex items-center justify-center mr-4">
                    <ArrowRight className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white modern-heritage">Process</h3>
                </div>
                <div className="space-y-3">
                  {project.process.map((step, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary/20 text-primary text-xs font-bold flex items-center justify-center mt-0.5">
                        {index + 1}
                      </div>
                      <p className="text-white/80 text-sm leading-relaxed flex-1 jost-secondary">{step}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold glow-text mb-4 modern-heritage">Key Features</h2>
            <p className="text-lg text-white/80 max-w-3xl mx-auto jost-secondary">
              Innovative solutions designed for maximum user engagement
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.keyFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 glass-card grain-texture hover:glass-intense transition-all duration-300">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-primary" />
                    </div>
                    <p className="text-white/85 text-sm leading-relaxed jost-secondary">{feature}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results & Impact */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold glow-text mb-4 modern-heritage">Results & Impact</h2>
            <p className="text-lg text-white/80 max-w-3xl mx-auto jost-secondary">
              Measurable outcomes that drove real change
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.outcomes.map((outcome, index) => {
              const icons = [Trophy, Target, TrendingUp, Users, CheckCircle, Lightbulb];
              const IconComponent = icons[index % icons.length];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-8 glass-card grain-texture hover:glass-intense transition-all duration-300 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-blue-500/20 mx-auto mb-4 flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <p className="text-white/90 font-medium leading-relaxed jost-secondary">{outcome}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 relative">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold glow-text mb-4 modern-heritage">Technology Stack</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 glass-card grain-texture">
              <div className="flex flex-wrap gap-3 justify-center">
                {project.techStack.map((tech, index) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <Badge className="bg-primary/10 text-primary/90 border-primary/30 px-4 py-2 text-sm">
                      {tech}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Learnings */}
      <section className="py-16 relative">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="p-10 glass-intense grain-texture">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/25 to-white/20 mx-auto mb-4 flex items-center justify-center">
                  <Lightbulb className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-3xl font-bold glow-text mb-4 modern-heritage">What I Learned</h2>
              </div>
              <blockquote className="text-center">
                <p className="text-white/90 leading-relaxed text-lg italic mb-6 jost-secondary">
                  "{project.learnings}"
                </p>
              </blockquote>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-8 modern-heritage">
              Ready to see more projects?
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/#contact">
                <Button className="h-12 sm:h-14 text-white font-semibold px-8 cta-button grain-texture">
                  <Heart className="w-4 h-4 mr-2" />
                  Contact Me
                </Button>
              </Link>
              <Button 
                onClick={() => window.open(project.liveUrl, '_blank')}
                variant="outline"
                className="h-12 sm:h-14 border-white/20 text-white hover:bg-white/10 px-8"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Visit Live Site
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border/30">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="flex justify-center items-center space-x-8 mb-6">
            <img 
              src={LogoImage} 
              alt="Karan Gadhave Logo" 
              className="h-8 w-8 object-contain opacity-80"
            />
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