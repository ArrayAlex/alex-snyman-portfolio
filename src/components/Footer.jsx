const Footer = () => {
  const currentYear = new Date().getFullYear()

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="col-span-2 md:col-span-1">
              <h3 className="text-2xl font-bold mb-4">Alex Snyman</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Full Stack Developer passionate about creating innovative solutions 
                with modern technologies and AI integration.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/ArrayAlex" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="GitHub Profile"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {[
                  { name: 'Home', id: 'hero' },
                  { name: 'About', id: 'about' },
                  { name: 'Projects', id: 'projects' },
                  { name: 'Contact', id: 'contact' }
                ].map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Projects */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Featured Projects</h4>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="https://github.com/ArrayAlex/tenancyai-front" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    TenancyAI Suite
                  </a>
                </li>
                <li>
                  <a 
                    href="https://github.com/ArrayAlex/AI-cv-gen" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    AI CV Generator
                  </a>
                </li>
              </ul>
            </div>

            {/* Skills */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Core Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {['React', 'C#', 'JavaScript', '.NET', 'AI Integration', 'Azure'].map((skill) => (
                  <span 
                    key={skill}
                    className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Alex Snyman. All rights reserved.
            </div>
            <div className="text-gray-400 text-sm">
              Built with React, Tailwind CSS, and ❤️
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer