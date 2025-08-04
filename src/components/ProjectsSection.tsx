import React from 'react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "",
      category: "AI Integrated Workflow Product",
      team: ["/girl.svg", "/girl1.svg", "/boy.svg"],
      image: "/fig1.svg",
      bgColor: "bg-gradient-to-br from-blue-400 to-blue-600",
      badge: "AI"
    },
    {
      title: "",
      category: "AI Integrated Workflow Product", 
      team: ["/girl1.svg", "/boy.svg", "/girl.svg"],
      image: "/fig2.svg",
      bgColor: "bg-gradient-to-br from-gray-800 to-gray-900",
      badge: "Web"
    },
    {
      title: "",
      category: "AI Integrated Workflow Product",
      team: ["/boy.svg", "/girl.svg", "/girl1.svg"],
      image: "/fig3.svg",
      bgColor: "bg-gradient-to-br from-gray-900 to-black",
      badge: "App"
    },
    {
      title: "", 
      category: "AI Integrated Workflow Product",
      team: ["/girl1.svg", "/girl.svg", "/boy.svg"],
      image: "/fig4.svg",
      bgColor: "bg-gradient-to-br from-blue-900 to-blue-950",
      badge: "AI"
    }
  ];

  return (
    <section className="pt-10 pb-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl font-semi-bold text-gray-900 mb-4">Our Projects</h2>
          <p className="text-gray-500 text-lg max-w-2xl">
            We craft bold digital solutions that drive growth. From concept to launch, 
            solving real-world problems with precision and creativity.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="group cursor-pointer">
              {/* Image Container with Gradient Background */}
              <div className={`relative ${project.bgColor} rounded-3xl aspect-[5/3] flex items-center justify-center overflow-hidden mb-4 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1`}>
                <div className="relative w-full h-full flex items-center justify-center">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>

              {/* Project Info - Transparent background */}
              <div className="px-2">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="bg-gray-900 text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg">
                      {project.badge}
                    </span>
                    <span className="text-gray-900 text-xs font-medium">
                      AI Integrated Workflow Product
                    </span>
                  </div>
                  <div className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full">
                    <span className="text-gray-500 text-xs">by Team</span>
                    <div className="flex -space-x-2">
                      {project.team.map((member, i) => (
                        <div 
                          key={i}
                          className="w-6 h-6 rounded-full border-2 border-white bg-gray-300 flex items-center justify-center overflow-hidden"
                        >
                          <img
                            src={member}
                            alt={`Team member ${i + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 leading-tight">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Services Section */}
        <div className="mt-24">
          {/* Services Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">More Than Just Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We go beyond basic services—offering long-term support, flexible payments, expert teams, and scalable 
              solutions. Everything is designed to meet your business needs, growth, and long-term success.
            </p>
          </div>

          {/* Service Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Affordable Services</h3>
              <p className="text-gray-600 mb-6">
                We believe great technology shouldn't come with a hefty price tag. Our pricing is transparent, competitive, 
                and designed to match your team needs. Whether you're a startup or enterprise, we scale to fit your budget.
              </p>
              <div className="relative h-20 flex items-center justify-center">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  $
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Scalable Solutions</h3>
              <p className="text-gray-600 mb-6">
                We don't just build for today—we build for growth. Our designs, workflows, and IT tools are created to scale 
                with your evolving needs.
              </p>
              <div className="relative h-20 flex items-center justify-center">
                <div className="flex space-x-2">
                  <div className="w-4 h-4 bg-purple-400 rounded transform rotate-45"></div>
                  <div className="w-6 h-6 bg-purple-500 rounded transform rotate-45"></div>
                  <div className="w-8 h-8 bg-purple-600 rounded transform rotate-45"></div>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Flexible Payment Plans</h3>
              <p className="text-gray-600 mb-6">
                We understand that every business has different cash flow dynamics. Self-payments, 
                milestone-based billing or subscription models—choose what works best for your business cycle and 
                budget.
              </p>
              <div className="relative h-20 flex items-center justify-center">
                <div className="w-20 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                  CARD
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Lifetime Support</h3>
              <p className="text-gray-600 mb-6">
                Our relationship doesn't end at project delivery. We offer ongoing support, updates, 
                and maintenance to keep your software running. Think of us as your trusted technology 
                partner for life.
              </p>
              <div className="relative h-20 flex items-center justify-center">
                <div className="w-16 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  ∞
                </div>
              </div>
            </div>

            {/* Card 5 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Expert Match</h3>
              <p className="text-gray-600 mb-6">
                Get matched with the right experts from our trusted network. Every developer, 
                designer, or strategist is committed to excellence. We're strict about quality, 
                so you don't have to be.
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
      </div>
    </section>
  );
};

export default ProjectsSection;