import { useState } from 'react';
import { Mail, Phone, Linkedin, ChevronDown, ChevronUp } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

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
      role: "Lead Product Designer",
      period: "Apr 2022 – Present",
      location: "India",
      achievements: [
        "Led end-to-end product design for complex web platforms, including user-facing products, admin systems, and internal tools",
        "Owned UX architecture and workflow design, simplifying multi-step, role-based processes across products",
        "Designed and shipped integrated platforms involving authentication, CRM/forms, analytics, automations, and admin controls",
        "Built and maintained scalable design systems to improve consistency, accessibility, and long-term product maintainability",
        "Worked closely with product managers, engineers, and founders as a hands-on individual contributor from discovery to delivery"
      ]
    },
    {
      company: "Pepper Penny Finance Pvt. Ltd",
      role: "UI UX Designer",
      period: "Jun 2021 – Mar 2022",
      location: "India",
      achievements: [
        "Designed core product experiences for a stock trading and learning platform, including dashboards, comparisons, and content flows",
        "Owned UX and UI for web and mobile surfaces, supporting successful product launch and early adoption",
        "Delivered high-volume interface work under tight timelines, enabling rapid iteration and validation"
      ]
    },
    {
      company: "DBM Infotech Pvt. Ltd",
      role: "UI UX Designer",
      period: "Mar 2021 – Jun 2021",
      location: "Pune, India",
      achievements: [
        "Designed end-to-end UX and UI for a mobile application, owning user flows and interface execution from concept to release",
        "Collaborated with product owners and developers to translate business requirements into clear, usable designs"
      ]
    }
  ];

  const earlyExperience = [
    {
      company: "FarmiGO",
      role: "UI UX Design Intern",
      period: "Oct 2020 – Dec 2020",
      location: "India",
      achievements: [
        "Designed the end-to-end UX and UI for a mobile application, conducting user interviews and translating research insights into structured flows and high-fidelity prototypes"
      ]
    }
  ];

  const coreSkills = [
    "Product Design (B2B & Consumer SaaS)",
    "UX Architecture & Information Architecture",
    "Interaction Design & Workflow Design",
    "User Research & Usability Testing",
    "Design Systems & Component Libraries",
    "Web & Mobile UI Design",
    "Prototyping (Figma)",
    "Cross-functional Collaboration (PM & Engineering)"
  ];

  const certifications = [
    { name: "UX/UI Bootcamp", issuer: "Designwings" },
    { name: "Web & Mobile Design", issuer: "Udemy" }
  ];

  return (
    <section id="resume" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold albert-sans-medium mb-6 text-white">
            Resume
          </h2>
          <p className="text-lg text-white/80 jost-secondary max-w-3xl mx-auto mb-8">
            Product Designer with 5+ years of experience designing complex web and mobile products, including user-facing platforms, admin systems, and internal tools. Strong background in UX architecture, workflow-heavy systems, and scalable design systems.
          </p>
          <div className="flex flex-wrap gap-4 justify-center items-center">
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
          <h3 className="text-2xl font-bold albert-sans-medium mb-8 text-white">Work Experience</h3>
          <div className="space-y-6">
            {workExperience.map((job, index) => (
              <Card key={index} className="bg-white/5 border-white/10 p-6">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div className="mb-2 lg:mb-0">
                    <h4 className="text-xl font-bold jost-secondary text-primary mb-1">{job.role}</h4>
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
                    <span className="jost-secondary">Key Responsibilities</span>
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

        {/* Early Experience */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold albert-sans-medium mb-8 text-white">Early Experience</h3>
          <div className="space-y-6">
            {earlyExperience.map((job, index) => (
              <Card key={index} className="bg-white/5 border-white/10 p-6">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div className="mb-2 lg:mb-0">
                    <h4 className="text-xl font-bold jost-secondary text-primary mb-1">{job.role}</h4>
                    <p className="text-lg font-semibold jost-secondary text-white">{job.company}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-white/80 jost-secondary">{job.period}</p>
                    <p className="text-white/60 text-sm jost-secondary">{job.location}</p>
                  </div>
                </div>
                <ul className="space-y-2 text-white/85 jost-secondary">
                  {job.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-primary mt-1.5 text-xs">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>

        {/* Core Skills */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold albert-sans-medium mb-8 text-white">Core Skills</h3>
          <div className="flex flex-wrap gap-3">
            {coreSkills.map((skill, index) => (
              <Badge key={index} variant="outline" className="border-primary/30 text-white/90 jost-secondary px-4 py-2 text-sm">
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        {/* Education & Certifications */}
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold albert-sans-medium mb-6 text-white">Education</h3>
            <Card className="bg-white/5 border-white/10 p-6">
              <h4 className="text-lg font-bold jost-secondary text-primary mb-2">Bachelor of Arts in History</h4>
              <p className="text-white jost-secondary mb-1">Yashwantrao Chavan Maharashtra Open University</p>
              <p className="text-white/60 jost-secondary text-sm">2016 – 2019</p>
            </Card>
          </div>
          <div>
            <h3 className="text-2xl font-bold albert-sans-medium mb-6 text-white">Certificates</h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <Card key={index} className="bg-white/5 border-white/10 p-4">
                  <h4 className="text-lg font-bold jost-secondary text-primary mb-1">{cert.name}</h4>
                  <p className="text-white/80 jost-secondary text-sm">{cert.issuer}</p>
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
