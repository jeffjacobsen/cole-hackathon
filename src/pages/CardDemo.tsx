import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import { Code, Zap, Shield, Users } from 'lucide-react'

export default function CardDemo() {
  return (
    <div className="min-h-screen bg-dark-950 py-12">
      <div className="container-custom">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">
          Card Component Demo
        </h1>

        <div className="max-w-6xl mx-auto space-y-12">
          {/* Variants */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-6">Variants</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card variant="default">
                <h3 className="text-xl font-bold text-white mb-2">Default Card</h3>
                <p className="text-dark-300">
                  Standard card with dark background and subtle border.
                </p>
              </Card>

              <Card variant="glass">
                <h3 className="text-xl font-bold text-white mb-2">Glass Card</h3>
                <p className="text-dark-300">
                  Glass-morphism effect with backdrop blur and transparency.
                </p>
              </Card>

              <Card variant="elevated">
                <h3 className="text-xl font-bold text-white mb-2">Elevated Card</h3>
                <p className="text-dark-300">
                  Enhanced shadow for depth and elevation.
                </p>
              </Card>
            </div>
          </section>

          {/* Padding Options */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-6">Padding Options</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card padding="none" variant="glass">
                <div className="p-4">
                  <h3 className="text-lg font-bold text-white mb-2">No Padding</h3>
                  <p className="text-sm text-dark-300">Padding: none</p>
                </div>
              </Card>

              <Card padding="sm" variant="glass">
                <h3 className="text-lg font-bold text-white mb-2">Small</h3>
                <p className="text-sm text-dark-300">Padding: sm (p-4)</p>
              </Card>

              <Card padding="md" variant="glass">
                <h3 className="text-lg font-bold text-white mb-2">Medium</h3>
                <p className="text-sm text-dark-300">Padding: md (p-6)</p>
              </Card>

              <Card padding="lg" variant="glass">
                <h3 className="text-lg font-bold text-white mb-2">Large</h3>
                <p className="text-sm text-dark-300">Padding: lg (p-8)</p>
              </Card>
            </div>
          </section>

          {/* With Header and Footer */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-6">Header & Footer</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card
                variant="glass"
                padding="md"
                header={
                  <div className="flex items-center gap-3">
                    <Code className="w-6 h-6 text-primary-400" />
                    <h3 className="text-xl font-bold text-white">Card with Header</h3>
                  </div>
                }
              >
                <p className="text-dark-300 mb-4">
                  This card has a header section that's separated from the content with a border.
                </p>
                <p className="text-dark-400 text-sm">
                  Perfect for cards that need a title or icon at the top.
                </p>
              </Card>

              <Card
                variant="glass"
                padding="md"
                header={
                  <h3 className="text-xl font-bold text-white">Full Card</h3>
                }
                footer={
                  <div className="flex justify-end gap-3">
                    <Button variant="ghost" size="sm">
                      Cancel
                    </Button>
                    <Button size="sm">Confirm</Button>
                  </div>
                }
              >
                <p className="text-dark-300">
                  This card has both header and footer sections, great for dialogs or forms.
                </p>
              </Card>
            </div>
          </section>

          {/* Hover Effects */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-6">
              Hover Effects (Hover Over These!)
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card variant="default" hover>
                <div className="flex items-center gap-3 mb-3">
                  <Zap className="w-8 h-8 text-accent-400" />
                  <h3 className="text-xl font-bold text-white">Fast</h3>
                </div>
                <p className="text-dark-300">
                  Lightning-fast performance with instant feedback.
                </p>
              </Card>

              <Card variant="glass" hover>
                <div className="flex items-center gap-3 mb-3">
                  <Shield className="w-8 h-8 text-primary-400" />
                  <h3 className="text-xl font-bold text-white">Secure</h3>
                </div>
                <p className="text-dark-300">
                  Built with security best practices from the ground up.
                </p>
              </Card>

              <Card variant="elevated" hover>
                <div className="flex items-center gap-3 mb-3">
                  <Users className="w-8 h-8 text-accent-400" />
                  <h3 className="text-xl font-bold text-white">Collaborative</h3>
                </div>
                <p className="text-dark-300">
                  Work together seamlessly with your team.
                </p>
              </Card>
            </div>
          </section>

          {/* Feature Cards */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-6">Feature Cards</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card
                variant="glass"
                padding="lg"
                hover
                header={
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-white">Premium Plan</h3>
                    <span className="px-3 py-1 rounded-full bg-primary-500/20 text-primary-300 text-sm font-semibold">
                      Popular
                    </span>
                  </div>
                }
                footer={
                  <Button fullWidth>Get Started</Button>
                }
              >
                <div className="space-y-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-white">$29</span>
                    <span className="text-dark-400">/month</span>
                  </div>
                  <ul className="space-y-2 text-dark-300">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary-400" />
                      Unlimited projects
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary-400" />
                      Advanced analytics
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary-400" />
                      Priority support
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary-400" />
                      Custom integrations
                    </li>
                  </ul>
                </div>
              </Card>

              <Card
                variant="default"
                padding="lg"
                hover
                header={
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-white">Enterprise</h3>
                    <span className="px-3 py-1 rounded-full bg-accent-500/20 text-accent-300 text-sm font-semibold">
                      Custom
                    </span>
                  </div>
                }
                footer={
                  <Button fullWidth variant="secondary">Contact Sales</Button>
                }
              >
                <div className="space-y-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-white">Custom</span>
                  </div>
                  <ul className="space-y-2 text-dark-300">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent-400" />
                      Everything in Premium
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent-400" />
                      Dedicated support team
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent-400" />
                      SLA guarantees
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent-400" />
                      On-premise deployment
                    </li>
                  </ul>
                </div>
              </Card>
            </div>
          </section>

          {/* Content Card Example */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-6">Content Cards</h2>
            <Card variant="glass" padding="lg">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white">
                  Building Beautiful UIs with AI
                </h3>
                <p className="text-dark-300 leading-relaxed">
                  AI-powered development tools are transforming how we build user interfaces.
                  With the right prompts and workflows, you can create production-quality
                  components in a fraction of the time it would take manually.
                </p>
                <p className="text-dark-300 leading-relaxed">
                  The key is understanding how to communicate design intent effectively and
                  leveraging the strengths of modern AI agents for code generation, styling,
                  and verification.
                </p>
                <div className="flex gap-3 pt-4">
                  <Button size="sm">Learn More</Button>
                  <Button variant="ghost" size="sm">
                    View Examples
                  </Button>
                </div>
              </div>
            </Card>
          </section>
        </div>
      </div>
    </div>
  )
}
