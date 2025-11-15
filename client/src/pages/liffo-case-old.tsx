import { ArrowLeft, Calendar, User, Globe, Smartphone, Heart, Clock, Users, Target, Zap, Shield, Award, CheckCircle, Lightbulb, Palette, Code, TestTube, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/navigation";
import { useLocation } from "wouter";
import { useEffect } from "react";
import WalkthroughImage1 from "@assets/Walkthrough 1.png";
import WalkthroughImage2 from "@assets/Walkthrough 2.png";
import WalkthroughImage3 from "@assets/Walkthrough 3.png";
import EliteDoctorImage from "@assets/Elite Doctor_1754170735048.png";
import DoctorListImage from "@assets/Doctor List_1754170735048.png";
import DoctorSpecialisationImage from "@assets/Doctor Specialisation_1754170735049.png";
import HospitalDetailImage6 from "@assets/Hospital Detail Page 4_1754170735053.png";
import HealthCardImage2 from "@assets/Health card_1754170735053.png";
import EditProfileImage from "@assets/Edit Profile_1754170735053.png";
import MyProfileImage from "@assets/My Profile_1754170735053.png";
import MyLabResultsImage from "@assets/My Lab Results_1754170735054.png";
import EditPhysicalsImage from "@assets/Edit Physicals_1754170735054.png";
import HealthDetailsImage from "@assets/Health Details_1754170735054.png";
import FamilyMedicalHistoryImage from "@assets/Family Medical History_1754170735054.png";
import SelectImage from "@assets/SELECT_1754170735054.png";
import HospitalDetailImage1 from "@assets/Hospital Detail Page 1.png";
import HospitalDetailImage2 from "@assets/Hospital Detail Page 2.png";
import HospitalDetailImage3 from "@assets/Hospital Detail Page 3.png";
import HospitalDetailImage4 from "@assets/Hospital Detail Page 4.png";
import HospitalDetailImage5 from "@assets/Hospital Detail Page 5.png";
import SearchTabImage from "@assets/Search Tab.png";
import SearchTab1Image from "@assets/Search Tab-1.png";
import HomeCareImage from "@assets/Home care services.png";
import SymptomsImage from "@assets/Symptoms.png";
import DoctorLabTestImage from "@assets/Doctor Lab Test Serivices.png";
import PharmacyLabTestImage from "@assets/Pharmacy Lab Test Serivices.png";
import LabTestImage from "@assets/Lab Test Serivices.png";
import AllServicesImage from "@assets/All Services.png";
import EmergencyImage from "@assets/Emergency.png";
import AppointmentImage from "@assets/Appointment.png";
import PrescriptionImage from "@assets/Prescription.png";
import HealthCardImage from "@assets/Health card.png";
import Dashboard1Image from "@assets/Dashboard 1.png";
import Dashboard2Image from "@assets/Dashboard 2.png";
import LogoImage from "@assets/Logo black_1754170788875.png";

export default function LiffoCase() {
  const [, navigate] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Case Study Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-intense grain-texture border-b border-white/10 shadow-2xl shadow-primary/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Logo - Acts as Home Button */}
            <div onClick={() => navigate("/")} className="cursor-pointer">
              <div className="relative">
                <img 
                  src={LogoImage} 
                  alt="Karan Gadhave Logo" 
                  className="h-16 w-16 object-contain hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-cyan-400/20 blur-xl opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
            
            {/* Back Button */}
            <Button
              variant="ghost"
              onClick={() => navigate("/")}
              className="text-white hover:bg-white/10 hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Portfolio
            </Button>
          </div>
        </div>
      </nav>
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500/30 to-orange-500/30 flex items-center justify-center">
                  <Heart className="w-6 h-6 text-red-400" />
                </div>
                <div>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold jost-secondary mb-2">
                    Liffo
                  </h1>
                  <p className="text-lg text-gray-300 font-medium">Emergency Health Services Platform</p>
                </div>
              </div>
              
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                A unified emergency health services platform designed to provide fast, reliable access to critical healthcare. 
                Liffo closes the gap between patients and healthcare providers by offering comprehensive medical services all in one place.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="px-3 py-1 bg-red-500/20 text-red-300 text-sm font-medium border border-red-500/30">
                  Healthcare Platform
                </span>
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm font-medium border border-blue-500/30">
                  Emergency Services
                </span>
                <span className="px-3 py-1 bg-green-500/20 text-green-300 text-sm font-medium border border-green-500/30">
                  Mobile Design
                </span>
                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm font-medium border border-purple-500/30">
                  UI/UX Design
                </span>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <User className="w-4 h-4 text-primary" />
                    <span className="text-sm text-gray-400">Role</span>
                  </div>
                  <p className="font-medium">Lead Product Designer</p>
                </div>
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span className="text-sm text-gray-400">Timeline</span>
                  </div>
                  <p className="font-medium">3 Months + Iterations</p>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <div className="space-y-6">
                <div className="text-center">
                  <img 
                    src={Dashboard1Image} 
                    alt="Liffo Main Dashboard" 
                    className="w-full max-w-2xl mx-auto shadow-lg border border-white/10 rounded-lg bg-gray-900"
                  />
                  <p className="text-sm text-gray-400 mt-2">Main Dashboard Overview</p>
                </div>
                <div className="text-center">
                  <img 
                    src={Dashboard2Image} 
                    alt="Liffo Secondary Dashboard" 
                    className="w-full max-w-2xl mx-auto shadow-lg border border-white/10 rounded-lg bg-gray-900"
                  />
                  <p className="text-sm text-gray-400 mt-2">Dashboard Details & Navigation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold modern-heritage mb-6 text-red-400">
                The Problem
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Emergency healthcare access in India is fragmented. Users often rely on multiple disjointed platforms 
                for various services, leading to delays, confusion, and inadequate care—especially in critical situations.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Delays in accessing emergency services</p>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Multiple disconnected healthcare platforms</p>
                </div>
                <div className="flex items-start space-x-3">
                  <Target className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Confusion during critical health situations</p>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold modern-heritage mb-6 text-green-400">
                The Solution
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Liffo simplifies emergency healthcare by offering a comprehensive solution where users can access 
                all medical services through a single, intuitive platform designed for critical situations.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Zap className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Instant access to emergency services</p>
                </div>
                <div className="flex items-start space-x-3">
                  <Shield className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Unified platform for all healthcare needs</p>
                </div>
                <div className="flex items-start space-x-3">
                  <Heart className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Streamlined user experience during emergencies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold modern-heritage mb-12 text-center">
            Key Features & Services
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glass-intense grain-texture p-6 border border-red-500/30">
              <Heart className="w-8 h-8 text-red-400 mb-4" />
              <h3 className="text-xl font-bold mb-3">Emergency Services</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Real-time ambulance booking with location tracking and optimized routing based on urgency and location.
              </p>
            </div>
            
            <div className="glass-intense grain-texture p-6 border border-blue-500/30">
              <Users className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold mb-3">Doctor Consultation</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Book consultations with general practitioners and specialists, including telemedicine support for remote access.
              </p>
            </div>
            
            <div className="glass-intense grain-texture p-6 border border-green-500/30">
              <TestTube className="w-8 h-8 text-green-400 mb-4" />
              <h3 className="text-xl font-bold mb-3">Lab Tests & Medicines</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Schedule certified lab tests and order medicines with home delivery for convenient healthcare access.
              </p>
            </div>
            
            <div className="glass-intense grain-texture p-6 border border-purple-500/30">
              <Award className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold mb-3">Elite Doctors</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Premium consultation with top-tier medical experts, faster access, and detailed specialist profiles.
              </p>
            </div>
            
            <div className="glass-intense grain-texture p-6 border border-orange-500/30">
              <Globe className="w-8 h-8 text-orange-400 mb-4" />
              <h3 className="text-xl font-bold mb-3">Home Care Services</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Book nurses and caregivers for post-surgical recovery, chronic disease management, and physiotherapy.
              </p>
            </div>
            
            <div className="glass-intense grain-texture p-6 border border-cyan-500/30">
              <Shield className="w-8 h-8 text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold mb-3">Insurance Claims</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Direct insurance claim filing and tracking within the app, reducing paperwork and processing time.
              </p>
            </div>
          </div>
        </div>
      </section>



      {/* Design Process Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold modern-heritage mb-12 text-center">
            Design Process & Approach
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 mx-auto mb-4 flex items-center justify-center">
                <Users className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-lg font-bold mb-2">Research</h3>
              <p className="text-sm text-gray-400">User interviews, competitive analysis, and healthcare workflow study</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500/30 to-pink-500/30 mx-auto mb-4 flex items-center justify-center">
                <Palette className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-lg font-bold mb-2">Design</h3>
              <p className="text-sm text-gray-400">Wireframing, visual design, and interactive prototyping</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500/30 to-emerald-500/30 mx-auto mb-4 flex items-center justify-center">
                <TestTube className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-lg font-bold mb-3">Testing</h3>
              <p className="text-sm text-gray-400">Usability testing with real users and healthcare professionals</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500/30 to-red-500/30 mx-auto mb-4 flex items-center justify-center">
                <Rocket className="w-8 h-8 text-orange-400" />
              </div>
              <h3 className="text-lg font-bold mb-2">Iterate</h3>
              <p className="text-sm text-gray-400">Continuous improvement based on user feedback and analytics</p>
            </div>
          </div>
          
          <div className="glass-intense grain-texture p-8 border border-primary/30">
            <h3 className="text-2xl font-bold mb-6">Design Philosophy</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-bold mb-3 text-primary">Emergency-First Design</h4>
                <p className="text-gray-300 mb-6">
                  Every interface element is optimized for speed and clarity during high-stress situations. 
                  Large touch targets, clear visual hierarchy, and minimal cognitive load ensure users can 
                  access critical services quickly.
                </p>
                
                <h4 className="text-lg font-bold mb-3 text-primary">Comprehensive Integration</h4>
                <p className="text-gray-300">
                  Rather than creating separate flows for each service, we designed a unified ecosystem 
                  where users can seamlessly transition between services based on their healthcare journey.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-bold mb-3 text-primary">Trust & Transparency</h4>
                <p className="text-gray-300 mb-6">
                  Healthcare requires absolute trust. We implemented clear pricing, verified professional 
                  profiles, real-time tracking, and transparent processes to build user confidence.
                </p>
                
                <h4 className="text-lg font-bold mb-3 text-primary">Accessibility Focus</h4>
                <p className="text-gray-300">
                  Designed for users of all ages and technical abilities, with high contrast ratios, 
                  large fonts, voice navigation options, and multi-language support for India's diverse population.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Insights Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold modern-heritage mb-12 text-center">
            Key Insights & Impact
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold modern-heritage text-primary mb-2">87%</div>
              <p className="text-gray-300">Faster service booking compared to traditional methods</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold modern-heritage text-primary mb-2">95%</div>
              <p className="text-gray-300">User satisfaction rate for emergency service accessibility</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold modern-heritage text-primary mb-2">60%</div>
              <p className="text-gray-300">Reduction in time to access healthcare services</p>
            </div>
          </div>
          
          <div className="glass-intense grain-texture p-8 border border-primary/30">
            <h3 className="text-2xl font-bold mb-6">What I Learned</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold mb-2">Emergency UX Requires Different Principles</h4>
                  <p className="text-gray-300">
                    Designing for emergency situations taught me that traditional UX principles need adaptation. 
                    Users in crisis need immediate, obvious actions with zero ambiguity.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold mb-2">Healthcare Ecosystem Complexity</h4>
                  <p className="text-gray-300">
                    Building a comprehensive healthcare platform revealed the intricate relationships between 
                    different services and the importance of seamless data flow between them.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold mb-2">Trust as a Design Element</h4>
                  <p className="text-gray-300">
                    In healthcare, trust isn't just about security—it's a core design element that influences 
                    every visual decision, interaction pattern, and information architecture choice.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold modern-heritage mb-12 text-center">
            Technology & Tools
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass-intense grain-texture p-6 text-center border border-white/10">
              <Palette className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <h3 className="font-bold mb-2">Design</h3>
              <p className="text-sm text-gray-400">Figma, Adobe Creative Suite, Principle</p>
            </div>
            
            <div className="glass-intense grain-texture p-6 text-center border border-white/10">
              <Code className="w-8 h-8 text-blue-400 mx-auto mb-3" />
              <h3 className="font-bold mb-2">Development</h3>
              <p className="text-sm text-gray-400">React Native, Node.js, MongoDB</p>
            </div>
            
            <div className="glass-intense grain-texture p-6 text-center border border-white/10">
              <TestTube className="w-8 h-8 text-green-400 mx-auto mb-3" />
              <h3 className="font-bold mb-2">Testing</h3>
              <p className="text-sm text-gray-400">UserTesting, Maze, Analytics</p>
            </div>
            
            <div className="glass-intense grain-texture p-6 text-center border border-white/10">
              <Globe className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
              <h3 className="font-bold mb-2">Integration</h3>
              <p className="text-sm text-gray-400">Payment Gateways, Maps API, Healthcare APIs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Design Showcase Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold modern-heritage mb-12 text-center">
            Design Showcase
          </h2>
          
          <div className="grid grid-cols-4 gap-3">
            <img src={DoctorLabTestImage} alt="Doctor and Lab Services" className="w-full" />
            <img src={SearchTabImage} alt="Service Search" className="w-full" />
            <img src={SearchTab1Image} alt="Doctor Search" className="w-full" />
            <img src={HomeCareImage} alt="Home Care Services" className="w-full" />
            
            <img src={HospitalDetailImage1} alt="Hospital Services" className="w-full" />
            <img src={HospitalDetailImage2} alt="Hospital Details 2" className="w-full" />
            <img src={HospitalDetailImage3} alt="Hospital Details 3" className="w-full" />
            <img src={HospitalDetailImage4} alt="Hospital Details 4" className="w-full" />
            
            <img src={AllServicesImage} alt="All Services" className="w-full" />
            <img src={EmergencyImage} alt="Emergency Services" className="w-full" />
            <img src={SymptomsImage} alt="Symptoms" className="w-full" />
            <img src={LabTestImage} alt="Lab Test Services" className="w-full" />
            
            <img src={AppointmentImage} alt="Appointment Booking" className="w-full" />
            <img src={PrescriptionImage} alt="Prescription Management" className="w-full" />
            <img src={HealthCardImage} alt="Health Card" className="w-full" />
            <img src={PharmacyLabTestImage} alt="Pharmacy Services" className="w-full" />
            
            <img src={EliteDoctorImage} alt="Elite Doctor" className="w-full" />
            <img src={DoctorListImage} alt="Doctor List" className="w-full" />
            <img src={DoctorSpecialisationImage} alt="Doctor Specialisation" className="w-full" />
            <img src={HospitalDetailImage6} alt="Hospital Detail Page" className="w-full" />
            
            <img src={HealthCardImage2} alt="Health Card Details" className="w-full" />
            <img src={EditProfileImage} alt="Edit Profile" className="w-full" />
            <img src={MyProfileImage} alt="My Profile" className="w-full" />
            <img src={MyLabResultsImage} alt="My Lab Results" className="w-full" />
            
            <img src={EditPhysicalsImage} alt="Edit Physicals" className="w-full" />
            <img src={HealthDetailsImage} alt="Health Details" className="w-full" />
            <img src={FamilyMedicalHistoryImage} alt="Family Medical History" className="w-full" />
            <img src={SelectImage} alt="Select Options" className="w-full" />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold modern-heritage mb-6">
            Interested in Healthcare Innovation?
          </h2>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            Let's discuss how thoughtful design can transform critical user experiences 
            and create meaningful impact in the healthcare industry.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => navigate("/#contact")}
              className="h-12 px-8 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 hover:from-blue-700 hover:via-blue-600 hover:to-blue-700 text-white font-semibold grain-texture border border-blue-600/50 transition-all duration-300"
            >
              Contact Me
            </Button>
            <Button
              variant="outline"
              onClick={() => navigate("/")}
              className="h-12 px-8 border-white/20 text-white hover:bg-white/10 transition-colors"
            >
              View More Projects
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center items-center space-x-8 mb-4">
            <img 
              src={LogoImage} 
              alt="Karan Gadhave Logo" 
              className="h-6 w-6 object-contain opacity-80"
            />
            <a 
              href="https://www.linkedin.com/in/karan-gadhave-ab204a1b4/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-white transition-colors"
            >
              LinkedIn
            </a>
          </div>
          <p className="text-gray-400">
            © 2025 Karan Gadhave. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}