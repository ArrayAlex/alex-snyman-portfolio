const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "TenancyAI Suite",
      subtitle: "AI-Powered Tenancy Assistant Platform",
      description: "A comprehensive three-part application system designed to revolutionize tenant support in New Zealand. Features include an intelligent AI chat assistant, responsive web interface, and comprehensive resource management.",
      longDescription: "Built as a complete ecosystem consisting of a React frontend with modern UI/UX, a robust C# .NET backend with AI integration, and a marketing website. The platform provides real-time tenancy advice, document management, and dispute resolution guidance using advanced AI technology.",
      technologies: ["React", "JavaScript", "C#", ".NET Core", "Azure AI", "Tailwind CSS", "MongoDB", "Auth0", "Azure DevOps"],
      features: [
        "Real-time AI chat assistance for tenancy queries",
        "Comprehensive NZ tenancy law resource library", 
        "Modern responsive design with mobile optimization",
        "Secure authentication and user management",
        "Full-text search capabilities across legal documents",
        "Multi-tenant architecture with role-based access"
      ],
      repositories: [
        { name: "Frontend Application", url: "https://github.com/ArrayAlex/tenancyai-front" },
        { name: "Backend API", url: "https://github.com/ArrayAlex/tenancyai-back" },
        { name: "Marketing Website", url: "https://github.com/ArrayAlex/tenancyai-website" }
      ],
      status: "Active Development",
      image: "🏠",
      color: "from-green-400 to-blue-500"
    },
    {
      id: 2,
      title: "AI CV Generator",
      subtitle: "Intelligent Resume Builder",
      description: "An innovative web application that leverages artificial intelligence to create professional, tailored resumes. Features dynamic content generation, multiple template options, and export capabilities.",
      longDescription: "A smart resume building platform that uses AI to analyze job descriptions and automatically generate relevant content. Built with vanilla JavaScript for optimal performance, featuring a clean interface and professional templates that adapt to different industries and career levels.",
      technologies: ["HTML5", "CSS3", "JavaScript", "AI Integration", "PDF Generation", "Responsive Design"],
      features: [
        "AI-powered content suggestions based on job descriptions",
        "Multiple professional templates with customization options",
        "Real-time preview and editing capabilities",
        "PDF export with high-quality formatting",
        "Mobile-responsive design for on-the-go editing",
        "Industry-specific content recommendations"
      ],
      repositories: [
        { name: "AI CV Generator", url: "https://github.com/ArrayAlex/AI-cv-gen" }
      ],
      status: "Production Ready",
      image: "📄",
      color: "from-purple-400 to-pink-500"
    }
  ]

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Some things I've built recently
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={project.id} className="fade-in-up">
              <div className="card h-full">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className="text-3xl mr-3">{project.image}</div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                      <p className="text-sm text-gray-500">{project.status}</p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    {project.repositories.map((repo, repoIndex) => (
                      <a
                        key={repoIndex}
                        href={repo.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-all"
                        title={repo.name}
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-gray-600 flex items-start">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 5).map((tech, techIndex) => (
                    <span key={techIndex} className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full font-medium">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 5 && (
                    <span className="text-xs px-3 py-1 bg-gray-100 text-gray-500 rounded-full">
                      +{project.technologies.length - 5}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects