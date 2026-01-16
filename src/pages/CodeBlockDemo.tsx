import { CodeBlock } from '../components/ui'

export default function CodeBlockDemo() {
  const exampleCode = `// Example: React Component with Hooks
import { useState, useEffect } from 'react'

interface User {
  id: number
  name: string
  email: string
}

export default function UserProfile() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await fetch('/api/user')
        const data = await response.json()
        setUser(data)
      } catch (error) {
        console.error('Failed to fetch user:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchUser()
  }, [])

  if (loading) return <div>Loading...</div>
  if (!user) return <div>No user found</div>

  return (
    <div className="user-profile">
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  )
}`

  const simpleExample = `const greeting = "Hello, World!"
console.log(greeting)

function add(a, b) {
  return a + b
}

const result = add(5, 3)`

  return (
    <div className="min-h-screen bg-dark-950 py-12">
      <div className="container-custom">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">
          CodeBlock Component Demo
        </h1>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Full Featured Example */}
          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Full Featured (with filename, line numbers, copy button)
            </h2>
            <CodeBlock
              code={exampleCode}
              language="typescript"
              filename="UserProfile.tsx"
              showLineNumbers={true}
              showCopyButton={true}
            />
          </div>

          {/* Simple Example */}
          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Simple (no filename, with line numbers)
            </h2>
            <CodeBlock
              code={simpleExample}
              language="javascript"
              showLineNumbers={true}
              showCopyButton={true}
            />
          </div>

          {/* Minimal Example */}
          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Minimal (no line numbers, no copy button)
            </h2>
            <CodeBlock
              code={simpleExample}
              language="javascript"
              showLineNumbers={false}
              showCopyButton={false}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
