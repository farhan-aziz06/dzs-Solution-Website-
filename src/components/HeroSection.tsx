import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5 py-20 px-6">
      {/* Hexagonal pattern background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-20 h-20 bg-primary/30 transform rotate-45 rounded-lg"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-primary/20 transform rotate-12 rounded-lg"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-primary/25 transform -rotate-12 rounded-lg"></div>
        <div className="absolute top-20 right-1/3 w-12 h-12 bg-primary/30 transform rotate-45 rounded-lg"></div>
        <div className="absolute bottom-32 right-10 w-18 h-18 bg-primary/20 transform rotate-12 rounded-lg"></div>
      </div>
      
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8">
          <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            Your trusted partner for{" "}
            <span className="text-primary">guaranteed software delivery</span>
          </h1>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            Cutting edge technologies in the hands of leading engineers, we design and develop
            the software that propels your unique software vision.
          </p>
          
          <div className="flex items-center space-x-4">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8">
              Get started
            </Button>
            <div className="w-12 h-6 bg-primary rounded-full"></div>
          </div>
        </div>
        
        <div className="relative">
          <div className="bg-card rounded-2xl p-8 shadow-lg border">
            <div className="flex items-center space-x-4 mb-4">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 bg-primary rounded-full border-2 border-background"></div>
                <div className="w-10 h-10 bg-accent rounded-full border-2 border-background"></div>
                <div className="w-10 h-10 bg-secondary rounded-full border-2 border-background"></div>
              </div>
              <div>
                <div className="flex text-yellow-400">⭐⭐⭐⭐⭐</div>
                <p className="text-sm text-muted-foreground">See Reviews</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;