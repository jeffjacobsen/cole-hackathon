import AnimatedSection from '../components/ui/AnimatedSection'
import Card from '../components/ui/Card'
import Container from '../components/ui/Container'
import Badge from '../components/ui/Badge'
import { Sparkles, Zap, Star } from 'lucide-react'

export default function AnimatedSectionDemo() {
  return (
    <div className="min-h-screen bg-dark-950">
      {/* Hero - No animation */}
      <Container className="py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Scroll Animation Demo</h1>
          <p className="text-lg text-slate-400">
            Scroll down to see entrance animations trigger
          </p>
          <Badge variant="accent" icon={Sparkles} className="mt-4">
            Scroll to explore
          </Badge>
        </div>
      </Container>

      {/* Fade In Animation */}
      <AnimatedSection animation="fade" className="py-16 bg-dark-900/30">
        <Container>
          <Card variant="glass" padding="lg">
            <h2 className="text-3xl font-bold text-white mb-4">Fade In Animation</h2>
            <p className="text-slate-300">
              This section fades in when it enters the viewport. The fade animation is
              subtle and professional, perfect for general content sections.
            </p>
          </Card>
        </Container>
      </AnimatedSection>

      {/* Slide Up Animation */}
      <AnimatedSection animation="slideUp" className="py-16">
        <Container>
          <Card variant="glass" padding="lg">
            <h2 className="text-3xl font-bold text-white mb-4">Slide Up Animation</h2>
            <p className="text-slate-300">
              This section slides up from below as it enters view. Great for creating
              a sense of elevation and drawing attention to important content.
            </p>
          </Card>
        </Container>
      </AnimatedSection>

      {/* Slide Left Animation */}
      <AnimatedSection animation="slideLeft" className="py-16 bg-dark-900/30">
        <Container>
          <Card variant="glass" padding="lg">
            <h2 className="text-3xl font-bold text-white mb-4">Slide Left Animation</h2>
            <p className="text-slate-300">
              This section slides in from the right side. Useful for alternating
              content layouts or creating directional flow in your design.
            </p>
          </Card>
        </Container>
      </AnimatedSection>

      {/* Slide Right Animation */}
      <AnimatedSection animation="slideRight" className="py-16">
        <Container>
          <Card variant="glass" padding="lg">
            <h2 className="text-3xl font-bold text-white mb-4">Slide Right Animation</h2>
            <p className="text-slate-300">
              This section slides in from the left side. Perfect for creating
              symmetrical animations or alternating slide directions.
            </p>
          </Card>
        </Container>
      </AnimatedSection>

      {/* Scale Animation */}
      <AnimatedSection animation="scale" className="py-16 bg-dark-900/30">
        <Container>
          <Card variant="glass" padding="lg">
            <h2 className="text-3xl font-bold text-white mb-4">Scale In Animation</h2>
            <p className="text-slate-300">
              This section scales up from slightly smaller. Creates a popping effect
              that's great for highlighting featured content or CTAs.
            </p>
          </Card>
        </Container>
      </AnimatedSection>

      {/* Slow Speed */}
      <AnimatedSection animation="slideUp" speed="slow" className="py-16">
        <Container>
          <Card variant="glass" padding="lg">
            <h2 className="text-3xl font-bold text-white mb-4">
              Slow Animation Speed
              <Badge variant="warning" size="sm" className="ml-3">1s duration</Badge>
            </h2>
            <p className="text-slate-300">
              This animation takes 1 second to complete. Slower animations feel more
              dramatic and can be used for hero sections or important announcements.
            </p>
          </Card>
        </Container>
      </AnimatedSection>

      {/* Fast Speed */}
      <AnimatedSection animation="slideUp" speed="fast" className="py-16 bg-dark-900/30">
        <Container>
          <Card variant="glass" padding="lg">
            <h2 className="text-3xl font-bold text-white mb-4">
              Fast Animation Speed
              <Badge variant="success" size="sm" className="ml-3">0.3s duration</Badge>
            </h2>
            <p className="text-slate-300">
              This animation completes in 0.3 seconds. Fast animations feel snappy
              and are great for UI elements and interactive components.
            </p>
          </Card>
        </Container>
      </AnimatedSection>

      {/* With Delay */}
      <AnimatedSection animation="fade" delay={300} className="py-16">
        <Container>
          <Card variant="glass" padding="lg">
            <h2 className="text-3xl font-bold text-white mb-4">
              Animation with Delay
              <Badge variant="primary" size="sm" className="ml-3">300ms delay</Badge>
            </h2>
            <p className="text-slate-300">
              This animation has a 300ms delay before starting. Delays can be used
              to create sequential animations or choreograph multiple elements.
            </p>
          </Card>
        </Container>
      </AnimatedSection>

      {/* Staggered Children */}
      <AnimatedSection animation="fade" stagger={true} staggerDelay={150} className="py-16 bg-dark-900/30">
        <Container>
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Staggered Animation</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card variant="glass" padding="lg">
              <div className="flex items-center gap-3 mb-3">
                <Zap className="text-primary-400" size={24} />
                <h3 className="text-xl font-semibold text-white">Card 1</h3>
              </div>
              <p className="text-slate-300 text-sm">
                This card appears first in the stagger sequence.
              </p>
            </Card>
            <Card variant="glass" padding="lg">
              <div className="flex items-center gap-3 mb-3">
                <Star className="text-accent-400" size={24} />
                <h3 className="text-xl font-semibold text-white">Card 2</h3>
              </div>
              <p className="text-slate-300 text-sm">
                This card appears 150ms after the first one.
              </p>
            </Card>
            <Card variant="glass" padding="lg">
              <div className="flex items-center gap-3 mb-3">
                <Sparkles className="text-primary-400" size={24} />
                <h3 className="text-xl font-semibold text-white">Card 3</h3>
              </div>
              <p className="text-slate-300 text-sm">
                This card appears 150ms after the second one.
              </p>
            </Card>
          </div>
        </Container>
      </AnimatedSection>

      {/* Trigger Once = False */}
      <AnimatedSection
        animation="scale"
        triggerOnce={false}
        className="py-16"
      >
        <Container>
          <Card variant="glass" padding="lg">
            <h2 className="text-3xl font-bold text-white mb-4">
              Re-triggering Animation
              <Badge variant="accent" size="sm" className="ml-3">triggerOnce=false</Badge>
            </h2>
            <p className="text-slate-300 mb-4">
              This animation re-triggers every time you scroll past it. Scroll up and
              down to see it animate repeatedly.
            </p>
            <p className="text-slate-400 text-sm">
              Note: Most animations should use triggerOnce=true (default) for better
              UX, but re-triggering can be useful for scroll-dependent content.
            </p>
          </Card>
        </Container>
      </AnimatedSection>

      {/* Code Examples */}
      <Container className="py-16">
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-white text-center">Usage Examples</h2>

          <AnimatedSection animation="slideUp">
            <Card variant="glass" padding="lg">
              <h3 className="text-xl font-semibold text-white mb-4">Basic Usage</h3>
              <pre className="code-block p-4 overflow-x-auto text-sm">
{`import { AnimatedSection } from '@/components/ui'

// Simple fade in
<AnimatedSection animation="fade">
  <YourContent />
</AnimatedSection>

// Slide up with custom speed
<AnimatedSection animation="slideUp" speed="slow">
  <YourContent />
</AnimatedSection>

// With delay
<AnimatedSection animation="scale" delay={300}>
  <YourContent />
</AnimatedSection>

// Staggered children
<AnimatedSection stagger={true} staggerDelay={100}>
  <Card>Item 1</Card>
  <Card>Item 2</Card>
  <Card>Item 3</Card>
</AnimatedSection>`}
              </pre>
            </Card>
          </AnimatedSection>

          <AnimatedSection animation="slideUp" delay={200}>
            <Card variant="glass" padding="lg">
              <h3 className="text-xl font-semibold text-white mb-4">Props Reference</h3>
              <div className="space-y-4 text-sm">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-dark-800 rounded-lg">
                  <div className="font-semibold text-primary-400">animation</div>
                  <div className="md:col-span-2 text-slate-300">
                    <div className="mb-1">'fade' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scale'</div>
                    <div className="text-xs text-slate-500">Animation type (default: 'fade')</div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-dark-800 rounded-lg">
                  <div className="font-semibold text-primary-400">speed</div>
                  <div className="md:col-span-2 text-slate-300">
                    <div className="mb-1">'slow' | 'normal' | 'fast'</div>
                    <div className="text-xs text-slate-500">Animation duration (default: 'normal' - 0.6s)</div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-dark-800 rounded-lg">
                  <div className="font-semibold text-primary-400">delay</div>
                  <div className="md:col-span-2 text-slate-300">
                    <div className="mb-1">number (milliseconds)</div>
                    <div className="text-xs text-slate-500">Delay before animation starts (default: 0)</div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-dark-800 rounded-lg">
                  <div className="font-semibold text-primary-400">stagger</div>
                  <div className="md:col-span-2 text-slate-300">
                    <div className="mb-1">boolean</div>
                    <div className="text-xs text-slate-500">Stagger children animations (default: false)</div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-dark-800 rounded-lg">
                  <div className="font-semibold text-primary-400">staggerDelay</div>
                  <div className="md:col-span-2 text-slate-300">
                    <div className="mb-1">number (milliseconds)</div>
                    <div className="text-xs text-slate-500">Delay between staggered children (default: 100)</div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-dark-800 rounded-lg">
                  <div className="font-semibold text-primary-400">triggerOnce</div>
                  <div className="md:col-span-2 text-slate-300">
                    <div className="mb-1">boolean</div>
                    <div className="text-xs text-slate-500">Animation triggers only once (default: true)</div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-dark-800 rounded-lg">
                  <div className="font-semibold text-primary-400">threshold</div>
                  <div className="md:col-span-2 text-slate-300">
                    <div className="mb-1">number (0 to 1)</div>
                    <div className="text-xs text-slate-500">Percentage of element visible to trigger (default: 0.1)</div>
                  </div>
                </div>
              </div>
            </Card>
          </AnimatedSection>
        </div>
      </Container>

      {/* Spacer for more scrolling */}
      <div className="h-32"></div>
    </div>
  )
}
