import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Contact us</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a question? Want to learn about our process to learn from we 
            can help you get started on your project.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Process Steps */}
          <div className="bg-card rounded-2xl p-8 shadow-lg border">
            <h3 className="text-xl font-bold text-card-foreground mb-6">Our Product development Process</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                  01
                </div>
                <div>
                  <h4 className="font-semibold text-card-foreground mb-2">Research</h4>
                  <p className="text-muted-foreground text-sm">
                    We dive deep to understand your vision, market trends, and competitive landscape to ensure 
                    we build your next-best business plan and platform.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                  02
                </div>
                <div>
                  <h4 className="font-semibold text-card-foreground mb-2">Requirements</h4>
                  <p className="text-muted-foreground text-sm">
                    We document specifications, user stories, and functionality details that will guide every decision.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                  03
                </div>
                <div>
                  <h4 className="font-semibold text-card-foreground mb-2">Design</h4>
                  <p className="text-muted-foreground text-sm">
                    Phase creating beautiful interfaces (UI) and perform user experience behaviors that are 
                    seamless for your users and align with your brand.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                  04
                </div>
                <div>
                  <h4 className="font-semibold text-card-foreground mb-2">Implementation</h4>
                  <p className="text-muted-foreground text-sm">
                    Our expert developers transform designs into functional, scalable software using best practices, 
                    in both back-end, infrastructure and scalable.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">First Name</label>
                <Input placeholder="Enter your first name" className="w-full" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Last Name</label>
                <Input placeholder="Enter your last name" className="w-full" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Email</label>
              <Input type="email" placeholder="Enter your email" className="w-full" />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Phone</label>
              <Input type="tel" placeholder="+1 (555) 000-0000" className="w-full" />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Tell us about your project</label>
              <Textarea 
                placeholder="Describe your project..." 
                className="w-full h-32 resize-none"
              />
            </div>

            <div className="flex items-center space-x-4">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8">
                Send Message →
              </Button>
              <Button variant="outline" className="px-8">
                Book Call
              </Button>
            </div>

            <p className="text-xs text-muted-foreground">
              By clicking send we will set your company & continue us with website.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;