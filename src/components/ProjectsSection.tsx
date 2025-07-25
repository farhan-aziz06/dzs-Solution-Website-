const ProjectsSection = () => {
  const projects = [
    {
      title: "Global Creative Strategy for Public Affairs",
      category: "AI Integrated Workflow Product",
      team: "Team",
      bg: "bg-gray-900",
      image: "📊"
    },
    {
      title: "Movie Streaming Platform",
      category: "AI Integrated Workflow Product", 
      team: "Team",
      bg: "bg-gray-800",
      image: "🎬"
    },
    {
      title: "Visual Designer Portfolio",
      category: "AI Integrated Workflow Product",
      team: "Team", 
      bg: "bg-purple-900",
      image: "🎨"
    },
    {
      title: "Network Infrastructure",
      category: "AI Integrated Workflow Product",
      team: "Team",
      bg: "bg-blue-900", 
      image: "🌐"
    }
  ];

  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Our Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We can help deliver the perfect product from concepts to launch, 
            delivering world-class experiences in design and security.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {projects.map((project, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="bg-card rounded-2xl overflow-hidden shadow-lg border hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                <div className={`${project.bg} h-48 flex items-center justify-center text-6xl`}>
                  {project.image}
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-muted-foreground">{project.team}</span>
                      <div className="flex -space-x-1">
                        <div className="w-6 h-6 bg-primary rounded-full border border-background"></div>
                        <div className="w-6 h-6 bg-accent rounded-full border border-background"></div>
                        <div className="w-6 h-6 bg-secondary rounded-full border border-background"></div>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Than Just Services */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">More Than Just Services</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We go beyond basic services—offering long-term support, flexible payment, expert teams, and scalable 
            solutions. Everything is designed to not just business needs, growth, and long-term success for our clients.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-card rounded-2xl p-8 shadow-lg border">
            <h3 className="text-xl font-semibold text-foreground mb-4">Affordable Services</h3>
            <p className="text-muted-foreground mb-6">
              We believe great technology shouldn't come with a hefty price tag. Our pricing is transparent, competitive, 
              and designed to match your team needs. Whether you're a startup or enterprise, we scale to fit your budget.
            </p>
            <div className="relative h-20 flex items-center justify-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-white text-2xl">
                $
              </div>
            </div>
          </div>

          <div className="bg-card rounded-2xl p-8 shadow-lg border">
            <h3 className="text-xl font-semibold text-foreground mb-4">Scalable Solutions</h3>
            <p className="text-muted-foreground mb-6">
              We don't just build for today—we build for growth. Our designs, workflows, and IT tools are designed to scaling 
              with your needs. Good you maintain your first step, and we're built to scale with you.
            </p>
            <div className="relative h-20 flex items-center justify-center">
              <div className="flex space-x-2">
                <div className="w-4 h-4 bg-purple-400 rounded transform rotate-45"></div>
                <div className="w-6 h-6 bg-purple-500 rounded transform rotate-45"></div>
                <div className="w-8 h-8 bg-purple-600 rounded transform rotate-45"></div>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-2xl p-8 shadow-lg border">
            <h3 className="text-xl font-semibold text-foreground mb-4">Flexible Payment Plans</h3>
            <p className="text-muted-foreground mb-6">
              We understand that every business has different cash flow dynamics. Self-payments, 
              milestone-based billing or subscription models—choose what works best for your business cycle and 
              budget.
            </p>
            <div className="relative h-20 flex items-center justify-center">
              <div className="w-20 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white font-bold">
                CARD
              </div>
            </div>
          </div>

          <div className="bg-card rounded-2xl p-8 shadow-lg border">
            <h3 className="text-xl font-semibold text-foreground mb-4">Lifetime Support</h3>
            <p className="text-muted-foreground mb-6">
              Our relationship doesn't end at project delivery. We offer ongoing support, updates, 
              and maintenance to keep your software running. Think of us as your trusted technology 
              partner for life.
            </p>
            <div className="relative h-20 flex items-center justify-center">
              <div className="w-16 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-2xl">
                ∞
              </div>
            </div>
          </div>

          <div className="bg-card rounded-2xl p-8 shadow-lg border">
            <h3 className="text-xl font-semibold text-foreground mb-4">Expert Match</h3>
            <p className="text-muted-foreground mb-6">
              You get matched with the right experts from our trusted network. Every developer, 
              designer, or strategist is working on Choise for excellence. We're strict about talent, 
              software team and talent quality, so you don't have to be.
            </p>
            <div className="relative h-20 flex items-center justify-center">
              <div className="flex space-x-2">
                <div className="w-3 h-16 bg-purple-400 rounded"></div>
                <div className="w-3 h-12 bg-purple-500 rounded"></div>
                <div className="w-3 h-20 bg-purple-600 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;