import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Services = () => {
  const services = [
    {
      title: "Generative Intelligence (AI)",
      description: "Advanced machine learning solutions that harness the power of artificial intelligence to automate processes, enhance decision-making, and drive innovation across your business operations.",
      features: [
        "AI Strategy Development",
        "Custom AI Model Training", 
        "Natural Language Processing",
        "Computer Vision Solutions",
        "Predictive Analytics"
      ],
      gradient: "bg-gradient-to-br from-purple-500 via-purple-600 to-indigo-700"
    },
    {
      title: "App Development", 
      description: "End-to-end mobile application development services that bring your ideas to life with cutting-edge technology, intuitive design, and seamless user experiences across all platforms.",
      features: [
        "iOS App Development",
        "Android App Development",
        "Cross-platform Solutions",
        "App Store Optimization",
        "Maintenance & Support"
      ],
      gradient: "bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-700"
    },
    {
      title: "Web Development",
      description: "Comprehensive web development solutions that combine modern design principles with robust functionality to create websites that not only look amazing but perform exceptionally.",
      features: [
        "Frontend Development",
        "Backend Development", 
        "E-commerce Solutions",
        "CMS Development",
        "API Integration"
      ],
      gradient: "bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-600"
    },
    {
      title: "UI/UX Design",
      description: "User-centered design services that focus on creating intuitive, engaging, and accessible digital experiences that delight users and drive business results.",
      features: [
        "User Research & Analysis",
        "Wireframing & Prototyping",
        "Visual Design",
        "Usability Testing", 
        "Design Systems"
      ],
      gradient: "bg-gradient-to-br from-purple-500 via-pink-500 to-rose-600"
    }
  ];

  const teamMembers = [
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face", 
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Services
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We offer comprehensive digital solutions to help your business thrive in the modern landscape
            </p>
          </div>

          <div className="space-y-8">
            {services.map((service, index) => (
              <div key={index} className="bg-card rounded-3xl overflow-hidden shadow-lg border">
                <div className={`h-48 ${service.gradient} relative`}>
                  <div className="absolute inset-0 bg-black/10"></div>
                </div>
                
                <div className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    {service.title}
                  </h2>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <Badge key={featureIndex} variant="secondary" className="text-sm">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex flex-col justify-between">
                      <div className="flex -space-x-2 mb-6">
                        {teamMembers.map((member, memberIndex) => (
                          <div key={memberIndex} className="w-10 h-10 rounded-full border-2 border-background overflow-hidden">
                            <img src={member} alt="Team member" className="w-full h-full object-cover" />
                          </div>
                        ))}
                      </div>
                      
                      <Button className="self-start">
                        Learn More
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;