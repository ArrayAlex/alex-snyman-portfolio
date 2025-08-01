const About = () => {
  const skills = [
    {
      category: "Frontend Development",
      technologies: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Responsive Design"],
      icon: "🎨"
    },
    {
      category: "Backend Development", 
      technologies: ["C#", ".NET Core", "API Development", "MongoDB", "Azure Services"],
      icon: "⚙️"
    },
    {
      category: "AI & Integration",
      technologies: ["Azure AI", "OpenAI", "Machine Learning", "Natural Language Processing"],
      icon: "🤖"
    },
    {
      category: "Tools & Platforms",
      technologies: ["Git", "Azure DevOps", "Docker", "Auth0", "Vite", "Node.js"],
      icon: "🛠️"
    }
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Passionate about building quality software that makes a difference.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* About Content */}
          <div className="fade-in-up">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Hi, I'm Alex 👋
            </h3>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
              <p>
                I'm a full stack developer who enjoys building things that live on the internet. 
                My journey started with curiosity about how websites work and evolved into a 
                passion for creating digital solutions.
              </p>
              <p>
                I specialize in React, .NET, and have experience with AI integration. 
                I believe in writing clean, maintainable code and creating intuitive user experiences 
                that solve real problems.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open source projects, or enjoying a good cup of coffee ☕
              </p>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="fade-in-up stagger-1">
            <h3 className="text-xl font-semibold text-gray-900 mb-8">Technologies I work with</h3>
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skillGroup, index) => (
                <div key={index} className="card">
                  <div className="flex items-center mb-3">
                    <span className="text-2xl mr-3">{skillGroup.icon}</span>
                    <h4 className="font-semibold text-gray-900">{skillGroup.category}</h4>
                  </div>
                  <div className="space-y-1">
                    {skillGroup.technologies.slice(0, 4).map((tech, techIndex) => (
                      <div key={techIndex} className="text-sm text-gray-600 flex items-center">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                        {tech}
                      </div>
                    ))}
                    {skillGroup.technologies.length > 4 && (
                      <div className="text-xs text-gray-500 mt-2">
                        +{skillGroup.technologies.length - 4} more
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About