import Button from '../components/ui/Button'
import { Download, ArrowRight, Trash2, Settings, Check } from 'lucide-react'

export default function ButtonDemo() {
  return (
    <div className="min-h-screen bg-dark-950 py-12">
      <div className="container-custom">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">
          Button Component Demo
        </h1>

        <div className="max-w-5xl mx-auto space-y-12">
          {/* Variants */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-6">Variants</h2>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary">Primary Button</Button>
              <Button variant="secondary">Secondary Button</Button>
              <Button variant="ghost">Ghost Button</Button>
              <Button variant="outline">Outline Button</Button>
            </div>
          </section>

          {/* Sizes */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-6">Sizes</h2>
            <div className="flex flex-wrap items-center gap-4">
              <Button size="sm">Small</Button>
              <Button size="md">Medium</Button>
              <Button size="lg">Large</Button>
            </div>
          </section>

          {/* With Icons */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-6">With Icons</h2>
            <div className="flex flex-wrap gap-4">
              <Button icon={Download} iconPosition="left">
                Download
              </Button>
              <Button variant="secondary" icon={ArrowRight} iconPosition="right">
                Next
              </Button>
              <Button variant="ghost" icon={Settings}>
                Settings
              </Button>
              <Button variant="outline" icon={Check}>
                Confirm
              </Button>
            </div>
          </section>

          {/* Icon Only */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-6">Icon Only</h2>
            <div className="flex flex-wrap gap-4">
              <Button icon={Download} aria-label="Download" />
              <Button variant="ghost" icon={Settings} aria-label="Settings" />
              <Button variant="outline" icon={Trash2} size="sm" aria-label="Delete" />
            </div>
          </section>

          {/* States */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-6">States</h2>
            <div className="flex flex-wrap gap-4">
              <Button>Normal</Button>
              <Button disabled>Disabled</Button>
              <Button loading>Loading</Button>
              <Button loading icon={Download}>
                Processing
              </Button>
            </div>
          </section>

          {/* Full Width */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-6">Full Width</h2>
            <div className="space-y-4 max-w-md">
              <Button fullWidth>Full Width Primary</Button>
              <Button fullWidth variant="secondary" icon={ArrowRight} iconPosition="right">
                Continue
              </Button>
            </div>
          </section>

          {/* Size Variants Combination */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-6">
              Size + Variant Combinations
            </h2>
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-4">
                <Button variant="primary" size="sm">
                  Small Primary
                </Button>
                <Button variant="secondary" size="sm">
                  Small Secondary
                </Button>
                <Button variant="ghost" size="sm">
                  Small Ghost
                </Button>
                <Button variant="outline" size="sm">
                  Small Outline
                </Button>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <Button variant="primary" size="lg" icon={Download}>
                  Large Primary
                </Button>
                <Button variant="secondary" size="lg" icon={ArrowRight} iconPosition="right">
                  Large Secondary
                </Button>
                <Button variant="ghost" size="lg">
                  Large Ghost
                </Button>
              </div>
            </div>
          </section>

          {/* Interactive Demo */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-6">
              Interactive (Hover & Click Me!)
            </h2>
            <div className="glass rounded-lg p-8">
              <p className="text-dark-300 mb-6">
                Try hovering and clicking these buttons to see the smooth transitions and interactive states:
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  onClick={() => alert('Primary clicked!')}
                  icon={Check}
                >
                  Click Me
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => alert('Secondary clicked!')}
                  icon={ArrowRight}
                  iconPosition="right"
                >
                  Or Me
                </Button>
                <Button
                  variant="ghost"
                  onClick={() => alert('Ghost clicked!')}
                >
                  Or Even Me
                </Button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
