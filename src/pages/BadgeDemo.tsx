import Badge from '../components/ui/Badge'
import { CheckCircle, AlertTriangle, XCircle, Info, Star, Zap, Tag } from 'lucide-react'

export default function BadgeDemo() {
  return (
    <div className="min-h-screen bg-dark-950 py-16">
      <div className="container-custom space-y-24">
        {/* Demo Title */}
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Badge Component Demo</h1>
          <p className="text-lg text-slate-400">
            Explore color variants, sizes, and configurations
          </p>
        </div>

        {/* Color Variants */}
        <div className="glass p-12 rounded-2xl">
          <h2 className="text-2xl font-bold text-white mb-6">Color Variants</h2>
          <div className="flex flex-wrap gap-4">
            <Badge variant="primary">Primary</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="accent">Accent</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="error">Error</Badge>
            <Badge variant="neutral">Neutral</Badge>
          </div>
        </div>

        {/* Size Variants */}
        <div className="glass p-12 rounded-2xl">
          <h2 className="text-2xl font-bold text-white mb-6">Size Variants</h2>
          <div className="flex flex-wrap items-center gap-4">
            <Badge variant="primary" size="sm">Small</Badge>
            <Badge variant="primary" size="md">Medium</Badge>
            <Badge variant="primary" size="lg">Large</Badge>
          </div>
        </div>

        {/* With Icons */}
        <div className="glass p-12 rounded-2xl">
          <h2 className="text-2xl font-bold text-white mb-6">With Icons</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-sm text-slate-400 mb-2">Left Icon</h3>
              <div className="flex flex-wrap gap-3">
                <Badge variant="success" icon={CheckCircle}>Completed</Badge>
                <Badge variant="warning" icon={AlertTriangle}>Warning</Badge>
                <Badge variant="error" icon={XCircle}>Failed</Badge>
                <Badge variant="primary" icon={Info}>Information</Badge>
                <Badge variant="accent" icon={Star}>Featured</Badge>
                <Badge variant="secondary" icon={Zap}>New</Badge>
              </div>
            </div>

            <div>
              <h3 className="text-sm text-slate-400 mb-2">Right Icon</h3>
              <div className="flex flex-wrap gap-3">
                <Badge variant="success" icon={CheckCircle} iconPosition="right">Verified</Badge>
                <Badge variant="primary" icon={Tag} iconPosition="right">Tagged</Badge>
              </div>
            </div>
          </div>
        </div>

        {/* Status Dots */}
        <div className="glass p-12 rounded-2xl">
          <h2 className="text-2xl font-bold text-white mb-6">Status Indicators (Dots)</h2>
          <div className="flex flex-wrap gap-4">
            <Badge variant="success" dot>Online</Badge>
            <Badge variant="warning" dot>Away</Badge>
            <Badge variant="error" dot>Offline</Badge>
            <Badge variant="primary" dot>Active</Badge>
            <Badge variant="neutral" dot>Inactive</Badge>
          </div>
        </div>

        {/* All Sizes with Icons */}
        <div className="glass p-12 rounded-2xl">
          <h2 className="text-2xl font-bold text-white mb-6">Sizes with Icons</h2>
          <div className="flex flex-wrap items-center gap-4">
            <Badge variant="accent" size="sm" icon={Star}>Small</Badge>
            <Badge variant="accent" size="md" icon={Star}>Medium</Badge>
            <Badge variant="accent" size="lg" icon={Star}>Large</Badge>
          </div>
        </div>

        {/* Real-World Examples */}
        <div className="glass p-12 rounded-2xl">
          <h2 className="text-2xl font-bold text-white mb-8">Real-World Usage Examples</h2>

          <div className="space-y-8">
            {/* Blog Post Tags */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Blog Post Tags</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="neutral" icon={Tag} size="sm">React</Badge>
                <Badge variant="neutral" icon={Tag} size="sm">TypeScript</Badge>
                <Badge variant="neutral" icon={Tag} size="sm">Web Development</Badge>
                <Badge variant="neutral" icon={Tag} size="sm">Tutorial</Badge>
                <Badge variant="accent" icon={Star} size="sm">Featured</Badge>
              </div>
            </div>

            {/* Task Status */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Task Status Indicators</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="text-slate-400 w-40">Build Homepage:</span>
                  <Badge variant="success" icon={CheckCircle} size="sm">Complete</Badge>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-slate-400 w-40">API Integration:</span>
                  <Badge variant="warning" icon={AlertTriangle} size="sm">In Progress</Badge>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-slate-400 w-40">Testing:</span>
                  <Badge variant="neutral" size="sm">Pending</Badge>
                </div>
              </div>
            </div>

            {/* User Status */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">User Status</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="text-slate-400 w-40">John Doe</span>
                  <Badge variant="success" dot size="sm">Online</Badge>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-slate-400 w-40">Jane Smith</span>
                  <Badge variant="warning" dot size="sm">Away</Badge>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-slate-400 w-40">Bob Johnson</span>
                  <Badge variant="error" dot size="sm">Offline</Badge>
                </div>
              </div>
            </div>

            {/* Notification Counts */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Notification Badges</h3>
              <div className="flex gap-6">
                <div className="flex items-center gap-2">
                  <span className="text-slate-400">Messages</span>
                  <Badge variant="error" size="sm">12</Badge>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-slate-400">Notifications</span>
                  <Badge variant="primary" size="sm">3</Badge>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-slate-400">Updates</span>
                  <Badge variant="accent" size="sm">5</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Code Examples */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-white text-center">Usage Examples</h2>

          <div className="glass p-8 rounded-2xl">
            <h3 className="text-xl font-semibold text-white mb-4">Basic Usage</h3>
            <pre className="code-block p-4 overflow-x-auto text-sm">
{`import { Badge } from '@/components/ui'
import { CheckCircle } from 'lucide-react'

// Simple badge
<Badge variant="primary">New</Badge>

// With icon
<Badge variant="success" icon={CheckCircle}>
  Completed
</Badge>

// Status indicator
<Badge variant="success" dot>Online</Badge>`}
            </pre>
          </div>

          <div className="glass p-8 rounded-2xl">
            <h3 className="text-xl font-semibold text-white mb-4">Props Reference</h3>
            <div className="space-y-4 text-sm">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-dark-800 rounded-lg">
                <div className="font-semibold text-primary-400">variant</div>
                <div className="md:col-span-2 text-slate-300">
                  <div className="mb-1">'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'error' | 'neutral'</div>
                  <div className="text-xs text-slate-500">Color variant (default: 'neutral')</div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-dark-800 rounded-lg">
                <div className="font-semibold text-primary-400">size</div>
                <div className="md:col-span-2 text-slate-300">
                  <div className="mb-1">'sm' | 'md' | 'lg'</div>
                  <div className="text-xs text-slate-500">Size variant (default: 'md')</div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-dark-800 rounded-lg">
                <div className="font-semibold text-primary-400">icon</div>
                <div className="md:col-span-2 text-slate-300">
                  <div className="mb-1">IconComponent (optional)</div>
                  <div className="text-xs text-slate-500">Lucide React icon component</div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-dark-800 rounded-lg">
                <div className="font-semibold text-primary-400">iconPosition</div>
                <div className="md:col-span-2 text-slate-300">
                  <div className="mb-1">'left' | 'right' (default: 'left')</div>
                  <div className="text-xs text-slate-500">Icon placement</div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-dark-800 rounded-lg">
                <div className="font-semibold text-primary-400">dot</div>
                <div className="md:col-span-2 text-slate-300">
                  <div className="mb-1">boolean (default: false)</div>
                  <div className="text-xs text-slate-500">Show status indicator dot</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
