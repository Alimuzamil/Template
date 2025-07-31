import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Header } from '@/components/layout/Header'
import { Button } from '@/components/ui/Button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card'
import {
  CheckCircle,
  Code,
  Palette,
  Zap,
  Shield,
  Smartphone,
} from 'lucide-react'

export default function LandingPage() {
  const features = [
    {
      icon: <Code className="h-8 w-8" />,
      title: 'TypeScript First',
      description:
        'Built with TypeScript for better developer experience and type safety.',
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: 'Modern UI',
      description:
        'Beautiful components with Tailwind CSS and dark mode support.',
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Lightning Fast',
      description:
        'Powered by Vite for instant hot reloading and optimized builds.',
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Production Ready',
      description: 'ESLint, Prettier, and Husky configured for code quality.',
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: 'Responsive',
      description: 'Mobile-first design that works beautifully on all devices.',
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: 'Best Practices',
      description: 'Follows modern React patterns and industry standards.',
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <motion.div
          className="text-center space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Modern React Template
          </motion.h1>
          <motion.p
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A production-ready React template with TypeScript, Tailwind CSS, and
            modern tooling. Start building amazing applications today.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button size="lg" asChild>
              <Link to="/signin">Get Started</Link>
            </Button>
            <Button variant="outline" size="lg">
              View Components
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Everything you need to build modern apps
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            This template includes all the tools and patterns you need for
            production-ready applications.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="border-0 shadow-lg h-full">
                <CardHeader>
                  <div className="text-primary mb-4">{feature.icon}</div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-muted rounded-lg p-8 md:p-12 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to get started?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of developers who are building amazing applications
            with this template.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/signin">Start Building</Link>
            </Button>
            <Button variant="ghost" size="lg">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-background">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-sm text-muted-foreground">
            <p>
              © 2024 Modern React Template. Built with ❤️ and modern tools.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
