import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  const stats = [
    { number: "35+", label: "Completed Projects", description: "Successfully delivered projects across various industries" },
    { number: "3+", label: "Years Experience", description: "Years of excellence in software development and design" },
    { number: "15+", label: "Happy Clients", description: "Satisfied clients who trust our expertise and solutions" }
  ];

  const teamMembers = [
    {
      name: "Paul Smith",
      role: "Lead Developer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      skills: ["React", "Node.js", "TypeScript"]
    },
    {
      name: "Paul Smith",
      role: "UI/UX Designer", 
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      skills: ["Figma", "Sketch", "Prototyping"]
    },
    {
      name: "Paul Smith",
      role: "Full Stack Developer",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face", 
      skills: ["Python", "React", "AWS"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          {/* About Us Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              About us
            </h1>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              We are a dedicated team of software developers, designers, and strategists passionate about creating 
              digital solutions that make a difference. With years of experience and a commitment to excellence, 
              we transform ideas into powerful, user-friendly applications that drive business success.
            </p>
          </div>

          {/* Vision to Value Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-foreground text-center mb-4">
              From Vision to Value
            </h2>
            <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-12">
              Our journey is defined by turning complex challenges into elegant solutions. We believe in the power 
              of technology to transform businesses and create lasting impact in the digital world.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-5xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {stat.label}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {stat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Client Success Stories */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Client success stories.
            </h2>
            <p className="text-muted-foreground mb-12 max-w-3xl">
              Our success is measured by the success of our clients. Here are some testimonials from businesses 
              that have transformed their operations with our solutions.
            </p>

            <div className="bg-card rounded-2xl p-8 border max-w-4xl">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-1">
                  <p className="text-muted-foreground mb-4 italic">
                    "Working with this team has been incredible. They took our complex requirements and delivered 
                    a solution that exceeded our expectations. The attention to detail and technical expertise 
                    is unmatched."
                  </p>
                  <div className="flex items-center gap-2 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge variant="secondary">CEO</Badge>
                    <span className="font-semibold text-foreground">Ronald Richards</span>
                  </div>
                </div>
                <div className="w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0">
                  <img 
                    src="https://images.unsplash.com/photo-1556157382-97eda2d62296?w=200&h=200&fit=crop&crop=face" 
                    alt="Ronald Richards" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div>
            <h2 className="text-3xl font-bold text-foreground text-center mb-4">
              Together we build, together we rise.
            </h2>
            <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-12">
              Meet the talented individuals who make our success possible. Our diverse team brings together 
              expertise, creativity, and passion to deliver exceptional results.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="text-center">
                  <div className="w-48 h-48 mx-auto mb-6 rounded-3xl overflow-hidden bg-gradient-to-br from-purple-500 to-indigo-600 p-1">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover rounded-3xl"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {member.name}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {member.role}
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;