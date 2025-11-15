import { useState } from 'react';
import { Download, Mail, Phone, Linkedin, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import resumePDF from '@assets/Karan Gadhave CV_1754656812100.pdf';

const ResumeSection = () => {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const workExperience = [
    {
      company: "Team Pumpkin",
      role: "UI UX Designer Manager",
      period: "Apr 2022 - Present",
      location: "Remote, India",
      achievements: [
        "Pioneered the design of Acedboard, a project management tool, driving a 35% increase in user satisfaction and a 40% boost in task efficiency through innovative, user-centric design",
        "Led the end-to-end design of Aeroplane, a business-oriented social media platform, achieving a 25% rise in user engagement and a 20% improvement in task completion with optimized workflows and streamlined interfaces",
        "Solely created and designed cutting-edge health platforms for Healthsignz and MYMEDIC B2B2C Digital Health, delivering seamless web and mobile experiences",
        "Demonstrated deep expertise in UI/UX design, user research, and information architecture, crafting intuitive wireframes, interactive prototypes, and cohesive user journeys",
        "Excelled in managing and mentoring a design team, ensuring the delivery of high-impact, user-focused solutions within strict deadlines"
      ]
    },
    {
      company: "WeInvest Pepperpenny",
      role: "UI UX Designer",
      period: "Jun 2021 - Nov 2021",
      location: "Remote, India",
      achievements: [
        "Designed core features for StockMarketBox like broker comparison, market tickers, courses, and blog",
        "Successfully launched Stockmarketbox.com, boosting online presence",
        "Created custom illustrations and animations, increasing user engagement by 20%, and designed 30+ mobile trading app interfaces in 3 months"
      ]
    },
    {
      company: "DBM Infotech PVT LTD",
      role: "UI UX Designer",
      period: "Mar 2021 - Jun 2021",
      location: "Pune, India",
      achievements: [
        "Led the design for Teach Max mobile application",
        "Worked on various redesign projects from websites to mobile application including company website"
      ]
    }
  ];

  const internships = [
    {
      company: "Credence Analytics",
      role: "UI UX Designer Intern",
      period: "Jan 2022 - Mar 2022",
      location: "Remote, India",
      achievements: [
        "Redesigned iDeal, iDeal Wealth and Fund, Mercury, and CashTrea, achieving a 30% improvement in user satisfaction and a 25% increase in usability",
        "Redesigned company website, resulting in a 47% growth in visitors and a 20% increase in lead generation"
      ]
    },
    {
      company: "FarmiGO",
      role: "UI UX Designer Intern",
      period: "Oct 2020 - Dec 2020",
      location: "Remote, India",
      achievements: [
        "Designed both UX and UI with a deep focus on enhancing user experience through extensive research and 20 user interviews, ensuring data-driven design decisions",
        "Applied advanced problem-solving skills to deliver optimal and intuitive design solutions, addressing user pain points effectively",
        "Spearheaded the app design process from initial research to high-fidelity prototypes in just two months, showcasing agility and expertise in fast-paced environments",
        "Conducted comprehensive research, including user interviews and feedback analysis, to inform a seamless and user-friendly product experience"
      ]
    }
  ];

  const designSkills = [
    "Prototyping", "Figma", "User Experience Design", "Agile Methodologies", 
    "Design Strategy", "Visual and UI Design Skills", "User Journeys", "Heuristic Analysis",
    "UI Design", "A/B Testing", "UX Design", "User Testing", "User Flows", "User Research and Analysis",
    "User Research", "Information Architecture", "Typography", "Wireframing"
  ];

  const technicalSkills = [
    "Figma", "Sketch", "Adobe XD", "Axure RP"
  ];

  const softSkills = [
    "Strong Leadership", "Coordination Skills", "Adaptability", "Creative Problem Solving",
    "Empathy", "Critical Thinking", "Communication & Collaboration", "Time Management"
  ];

  const certifications = [
    { name: "UX/UI Bootcamp", issuer: "Designwings UX/UI School", date: "Mar 2022" },
    { name: "Complete Web & Mobile Designer", issuer: "Udemy", date: "Feb 2024" },
    { name: "UI/UX Design", issuer: "Internshala", date: "Aug 2020" }
  ];

  return (
    <section id="resume" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-normal modern-heritage mb-6 bg-gradient-to-r from-primary via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Resume
          </h2>
          <p className="text-lg text-white/80 jost-secondary max-w-2xl mx-auto mb-8">
            Senior Product Designer with expertise in crafting intuitive UI/UX for web and mobile platforms. 
            Passionate about building elegant, user-focused digital products that balance form and function.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              className="bg-primary hover:bg-primary/90 text-white px-6 py-3"
              onClick={() => window.open(resumePDF, '_blank')}
            >
              <Download className="w-5 h-5 mr-2" />
              Download PDF
            </Button>
            <div className="flex flex-wrap gap-4 justify-center text-sm text-white/70">
              <a href="mailto:gadhavekaran@gmail.com" className="flex items-center gap-1 hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                gadhavekaran@gmail.com
              </a>
              <span className="flex items-center gap-1">
                <Phone className="w-4 h-4" />
                +91 7744074265
              </span>
              <a href="https://linkedin.com/in/karan-gadhave" className="flex items-center gap-1 hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-4 h-4" />
                karan-gadhave
              </a>
            </div>
          </div>
        </div>

        {/* Work Experience */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold modern-heritage mb-8">Work Experience</h3>
          <div className="space-y-6">
            {workExperience.map((job, index) => (
              <Card key={index} className="bg-white/5 border-white/10 p-6">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div className="mb-2 lg:mb-0">
                    <h4 className="text-xl font-bold modern-heritage text-primary mb-1">{job.role}</h4>
                    <p className="text-lg font-semibold jost-secondary text-white">{job.company}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-white/80 jost-secondary">{job.period}</p>
                    <p className="text-white/60 text-sm jost-secondary">{job.location}</p>
                  </div>
                </div>
                <div>
                  <button
                    onClick={() => toggleSection(`work-${index}`)}
                    className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-3"
                  >
                    <span className="jost-secondary">Key Achievements</span>
                    {expandedSections[`work-${index}`] ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                  {expandedSections[`work-${index}`] && (
                    <ul className="space-y-2 text-white/85 jost-secondary">
                      {job.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-primary mt-1.5 text-xs">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Internship Experience */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold modern-heritage mb-8">Internship Experience</h3>
          <div className="space-y-6">
            {internships.map((internship, index) => (
              <Card key={index} className="bg-white/5 border-white/10 p-6">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div className="mb-2 lg:mb-0">
                    <h4 className="text-xl font-bold modern-heritage text-primary mb-1">{internship.role}</h4>
                    <p className="text-lg font-semibold jost-secondary text-white">{internship.company}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-white/80 jost-secondary">{internship.period}</p>
                    <p className="text-white/60 text-sm jost-secondary">{internship.location}</p>
                  </div>
                </div>
                <div>
                  <button
                    onClick={() => toggleSection(`internship-${index}`)}
                    className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-3"
                  >
                    <span className="jost-secondary">Key Achievements</span>
                    {expandedSections[`internship-${index}`] ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                  {expandedSections[`internship-${index}`] && (
                    <ul className="space-y-2 text-white/85 jost-secondary">
                      {internship.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-primary mt-1.5 text-xs">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold modern-heritage mb-8">Skills</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xl font-bold modern-heritage mb-4 text-primary">Design Skills</h4>
              <div className="flex flex-wrap gap-2">
                {designSkills.map((skill, index) => (
                  <Badge key={index} variant="outline" className="border-primary/30 text-white/80 jost-secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-xl font-bold modern-heritage mb-4 text-primary">Technical Skills</h4>
              <div className="flex flex-wrap gap-2">
                {technicalSkills.map((skill, index) => (
                  <Badge key={index} variant="outline" className="border-primary/30 text-white/80 jost-secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-xl font-bold modern-heritage mb-4 text-primary">Soft Skills</h4>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((skill, index) => (
                  <Badge key={index} variant="outline" className="border-primary/30 text-white/80 jost-secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Education & Certifications */}
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold modern-heritage mb-6">Education</h3>
            <Card className="bg-white/5 border-white/10 p-6">
              <h4 className="text-lg font-bold modern-heritage text-primary mb-2">Bachelor of Arts in History</h4>
              <p className="text-white jost-secondary mb-1">Yashwantrao Chavan Maharashtra Open University</p>
              <p className="text-white/60 jost-secondary text-sm">2016 - 2019 • Barshi, India</p>
            </Card>
          </div>
          <div>
            <h3 className="text-2xl font-bold modern-heritage mb-6">Certifications</h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <Card key={index} className="bg-white/5 border-white/10 p-4">
                  <h4 className="text-lg font-bold modern-heritage text-primary mb-1">{cert.name}</h4>
                  <p className="text-white/80 jost-secondary text-sm">{cert.issuer}</p>
                  <p className="text-white/60 jost-secondary text-xs">Issued: {cert.date}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;