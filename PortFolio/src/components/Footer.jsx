import React from 'react'
import {Link} from 'react-router-dom'
import { Button } from "./ui/button"
import { Code2, Github, Linkedin, Twitter } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background border-t py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and tagline */}
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="flex items-center space-x-2">
              <Code2 className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
                TechBridPlus
              </span>
            </Link>
            <p className="mt-2 text-sm text-muted-foreground text-center md:text-left">
              Bridging technology and innovation
            </p>
          </div>

          {/* Quick links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
                <Link 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social links and contact */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4 mb-4">
              <Button  aria-label="GitHub">
                <Github className="h-5 w-5" />
              </Button>
              <Button  aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button  aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
            <Button variant="outline">Contact Me</Button>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          © {currentYear} TechBridPlus. All rights reserved.
        </div>
      </div>
    </footer>
  )
}