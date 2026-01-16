import './App.css'

// Section components (to be built)
// import Navigation from './components/Navigation'
// import Hero from './components/sections/Hero'
// import ToolsSection from './components/sections/ToolsSection'
// import DesignSection from './components/sections/DesignSection'
// import StrategySection from './components/sections/StrategySection'
// import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-dark-950">
      {/* Navigation - sticky header */}
      {/* <Navigation /> */}

      <main>
        {/* Hero Section */}
        <section id="hero" className="min-h-screen flex items-center justify-center">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="text-gradient-animated">Built by AI.</span>
              <br />
              <span className="text-white">You're looking at it.</span>
            </h1>
            <p className="text-lg md:text-xl text-dark-300 max-w-2xl mx-auto mb-8">
              A meta landing page that showcases how to build beautiful frontends
              with AI coding agents. The page itself is proof of the process.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {['React', 'Vite', 'TypeScript', 'Tailwind', 'Claude'].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-full glass text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Tools Section - placeholder */}
        <section id="tools" className="section-padding">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="text-gradient">The Tools</span>
            </h2>
            <p className="text-dark-400 text-center">Tools section coming soon...</p>
          </div>
        </section>

        {/* Design Section - placeholder */}
        <section id="design" className="section-padding bg-dark-900/50">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="text-gradient">Prompting for Design</span>
            </h2>
            <p className="text-dark-400 text-center">Design section coming soon...</p>
          </div>
        </section>

        {/* Strategy Section - placeholder */}
        <section id="strategy" className="section-padding">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="text-gradient">The Process</span>
            </h2>
            <p className="text-dark-400 text-center">Strategy section coming soon...</p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-dark-800">
        <div className="container-custom text-center">
          <p className="text-dark-400">
            Built with AI for the Mini Hackathon Challenge
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
