import Container from '../components/ui/Container'
import Card from '../components/ui/Card'

export default function ContainerDemo() {
  return (
    <div className="min-h-screen bg-dark-950 py-16">
      {/* Page Header - using Container */}
      <Container size="xl" className="mb-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Container Component Demo</h1>
          <p className="text-lg text-slate-400">
            Responsive layout containers with max-width constraints
          </p>
        </div>
      </Container>

      {/* Demo Sections */}
      <div className="space-y-16">
        {/* Small Container */}
        <div>
          <Container size="xl" className="mb-4">
            <h2 className="text-2xl font-bold text-white">Small (max-w-2xl)</h2>
            <p className="text-slate-400 text-sm">Perfect for blog posts and narrow content</p>
          </Container>
          <Container size="sm">
            <Card variant="glass" padding="lg">
              <p className="text-slate-300 leading-relaxed">
                This is a small container with a max-width of 2xl (672px). It's ideal for
                text-heavy content like blog posts, articles, or documentation where you want
                to maintain optimal line length for readability. The centered layout keeps
                the content focused and easy to follow.
              </p>
            </Card>
          </Container>
        </div>

        {/* Medium Container */}
        <div>
          <Container size="xl" className="mb-4">
            <h2 className="text-2xl font-bold text-white">Medium (max-w-4xl)</h2>
            <p className="text-slate-400 text-sm">Good for forms and moderate content</p>
          </Container>
          <Container size="md">
            <Card variant="glass" padding="lg">
              <div className="space-y-4">
                <p className="text-slate-300">
                  This is a medium container with a max-width of 4xl (896px). It provides
                  more horizontal space than the small container, making it suitable for
                  forms, settings pages, or content that needs a bit more breathing room.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-primary-500/10 p-4 rounded-lg border border-primary-500/20">
                    <p className="text-primary-400 text-sm">Example Content Block</p>
                  </div>
                  <div className="bg-accent-500/10 p-4 rounded-lg border border-accent-500/20">
                    <p className="text-cyan-400 text-sm">Example Content Block</p>
                  </div>
                </div>
              </div>
            </Card>
          </Container>
        </div>

        {/* Large Container */}
        <div>
          <Container size="xl" className="mb-4">
            <h2 className="text-2xl font-bold text-white">Large (max-w-6xl)</h2>
            <p className="text-slate-400 text-sm">Great for dashboards and data-rich layouts</p>
          </Container>
          <Container size="lg">
            <Card variant="glass" padding="lg">
              <div className="space-y-4">
                <p className="text-slate-300">
                  This is a large container with a max-width of 6xl (1152px). Perfect for
                  dashboards, data tables, or any content that benefits from wider layouts.
                </p>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-emerald-500/10 p-4 rounded-lg border border-emerald-500/20">
                    <p className="text-emerald-400 text-sm">Dashboard Widget</p>
                  </div>
                  <div className="bg-amber-500/10 p-4 rounded-lg border border-amber-500/20">
                    <p className="text-amber-400 text-sm">Dashboard Widget</p>
                  </div>
                  <div className="bg-rose-500/10 p-4 rounded-lg border border-rose-500/20">
                    <p className="text-rose-400 text-sm">Dashboard Widget</p>
                  </div>
                </div>
              </div>
            </Card>
          </Container>
        </div>

        {/* Extra Large Container (Default) */}
        <div>
          <Container size="xl" className="mb-4">
            <h2 className="text-2xl font-bold text-white">Extra Large (max-w-7xl) - Default</h2>
            <p className="text-slate-400 text-sm">The default size for most layouts</p>
          </Container>
          <Container size="xl">
            <Card variant="glass" padding="lg">
              <div className="space-y-4">
                <p className="text-slate-300">
                  This is an extra large container with a max-width of 7xl (1280px). This is
                  the default size and works well for most general layouts, providing a good
                  balance between content width and white space.
                </p>
                <div className="grid grid-cols-4 gap-4">
                  <div className="bg-primary-500/10 p-4 rounded-lg border border-primary-500/20">
                    <p className="text-primary-400 text-sm text-center">1</p>
                  </div>
                  <div className="bg-primary-500/10 p-4 rounded-lg border border-primary-500/20">
                    <p className="text-primary-400 text-sm text-center">2</p>
                  </div>
                  <div className="bg-primary-500/10 p-4 rounded-lg border border-primary-500/20">
                    <p className="text-primary-400 text-sm text-center">3</p>
                  </div>
                  <div className="bg-primary-500/10 p-4 rounded-lg border border-primary-500/20">
                    <p className="text-primary-400 text-sm text-center">4</p>
                  </div>
                </div>
              </div>
            </Card>
          </Container>
        </div>

        {/* Full Width Container */}
        <div>
          <Container size="xl" className="mb-4">
            <h2 className="text-2xl font-bold text-white">Full Width (no constraint)</h2>
            <p className="text-slate-400 text-sm">Takes up all available space</p>
          </Container>
          <Container size="full">
            <Card variant="glass" padding="lg">
              <p className="text-slate-300 mb-4">
                This is a full-width container with no max-width constraint. It spans the
                entire viewport width (minus padding). Useful for hero sections, full-width
                images, or designs that need to utilize all available horizontal space.
              </p>
              <div className="h-32 bg-gradient-to-r from-primary-500/20 via-accent-500/20 to-primary-500/20 rounded-lg flex items-center justify-center">
                <p className="text-white font-medium">Full Width Gradient</p>
              </div>
            </Card>
          </Container>
        </div>

        {/* Without Padding */}
        <div>
          <Container size="xl" className="mb-4">
            <h2 className="text-2xl font-bold text-white">Without Padding</h2>
            <p className="text-slate-400 text-sm">When you need edge-to-edge content</p>
          </Container>
          <Container size="lg" padding={false}>
            <Card variant="glass" padding="lg">
              <p className="text-slate-300">
                This container has padding={'{false}'}, which removes the responsive horizontal
                padding. This is useful when you want your content to extend to the edges
                on smaller screens, or when you're nesting containers and want to control
                padding at a different level.
              </p>
            </Card>
          </Container>
        </div>

        {/* Nested Containers */}
        <div>
          <Container size="xl" className="mb-4">
            <h2 className="text-2xl font-bold text-white">Nested Containers</h2>
            <p className="text-slate-400 text-sm">Containers can be nested for complex layouts</p>
          </Container>
          <Container size="xl">
            <Card variant="glass" padding="lg">
              <h3 className="text-lg font-semibold text-white mb-4">Outer Container (XL)</h3>
              <Container size="md" padding={false}>
                <div className="bg-primary-500/10 p-6 rounded-lg border border-primary-500/20">
                  <p className="text-primary-400 text-center">
                    Inner Container (MD) - Nested within the outer container
                  </p>
                </div>
              </Container>
            </Card>
          </Container>
        </div>

        {/* Code Examples */}
        <Container size="xl">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-white text-center">Usage Examples</h2>

            <Card variant="glass" padding="lg">
              <h3 className="text-xl font-semibold text-white mb-4">Basic Usage</h3>
              <pre className="code-block p-4 overflow-x-auto text-sm">
{`import { Container } from '@/components/ui'

// Default (XL) container with padding
<Container>
  <h1>Your Content</h1>
</Container>

// Small container
<Container size="sm">
  <article>Blog post content...</article>
</Container>

// Full width without padding
<Container size="full" padding={false}>
  <img src="hero.jpg" alt="Full width hero" />
</Container>`}
              </pre>
            </Card>

            <Card variant="glass" padding="lg">
              <h3 className="text-xl font-semibold text-white mb-4">Props Reference</h3>
              <div className="space-y-4 text-sm">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-dark-800 rounded-lg">
                  <div className="font-semibold text-primary-400">size</div>
                  <div className="md:col-span-2 text-slate-300">
                    <div className="mb-1">'sm' | 'md' | 'lg' | 'xl' | 'full'</div>
                    <div className="text-xs text-slate-500">
                      Max-width constraint (default: 'xl')
                      <ul className="mt-1 ml-4 list-disc">
                        <li>sm: 672px (max-w-2xl)</li>
                        <li>md: 896px (max-w-4xl)</li>
                        <li>lg: 1152px (max-w-6xl)</li>
                        <li>xl: 1280px (max-w-7xl)</li>
                        <li>full: no constraint</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-dark-800 rounded-lg">
                  <div className="font-semibold text-primary-400">padding</div>
                  <div className="md:col-span-2 text-slate-300">
                    <div className="mb-1">boolean (default: true)</div>
                    <div className="text-xs text-slate-500">
                      Apply responsive horizontal padding (px-4 sm:px-6 lg:px-8)
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-dark-800 rounded-lg">
                  <div className="font-semibold text-primary-400">className</div>
                  <div className="md:col-span-2 text-slate-300">
                    <div className="mb-1">string (optional)</div>
                    <div className="text-xs text-slate-500">
                      Additional CSS classes to apply
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </div>
    </div>
  )
}
