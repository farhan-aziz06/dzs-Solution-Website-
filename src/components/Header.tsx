import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full py-4 px-6 flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <div className="text-xl font-bold text-foreground">Logo</div>
      </div>
      
      <nav className="hidden md:flex items-center space-x-8">
        <a href="/" className="text-foreground hover:text-primary transition-colors">Home</a>
        <a href="/services" className="text-foreground hover:text-primary transition-colors">Services</a>
        <a href="/about" className="text-foreground hover:text-primary transition-colors">About</a>
        <a href="/contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
      </nav>
      
      <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6">
        Get started
      </Button>
    </header>
  );
};

export default Header;