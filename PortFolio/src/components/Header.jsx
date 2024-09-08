import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import  {Button}  from './ui/Button'
import { Menu, X, Code2, Sun, Moon } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    // Check for user's preference in localStorage or system preference
    const darkModePreference = localStorage.getItem('darkMode') || 
      window.matchMedia('(prefers-color-scheme: dark)').matches
    setIsDarkMode(darkModePreference === 'true' || darkModePreference === true)
  }, [])

  useEffect(() => {
    // Apply dark mode class to body
    document.body.classList.toggle('dark', isDarkMode)
    // Save preference to localStorage
    localStorage.setItem('darkMode', isDarkMode)
  }, [isDarkMode])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <header className="bg-background border-b sticky top-0 z-50 w-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Code2 className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
                TechBridPlus
              </span>
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link href="#about" className="text-muted-foreground hover:text-primary transition-colors">
              About
            </Link>
            <Link href="#projects" className="text-muted-foreground hover:text-primary transition-colors">
              Projects
            </Link>
            <Link href="#skills" className="text-muted-foreground hover:text-primary transition-colors">
              Skills
            </Link>
            <Link href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
          <div className="hidden md:flex items-center space-x-4">
            <Button onClick={toggleDarkMode}>
              {isDarkMode ? <Sun /> :<Moon />}
            </Button>
            <Button>Hire Me</Button>
          </div>
          <div className="md:hidden flex items-center space-x-4">
            <Button onClick={toggleDarkMode}>
              {isDarkMode ? <Sun /> :<Moon />}
            </Button>
            <button
              onClick={toggleMenu}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="#about" className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors">
              About
            </Link>
            <Link href="#projects" className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors">
              Projects
            </Link>
            <Link href="#skills" className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors">
              Skills
            </Link>
            <Link href="#contact" className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors">
              Contact
            </Link>
            <Button onClick={toggleDarkMode}>
              {isDarkMode ? <Sun /> :<Moon />}
            </Button>
            <div className="px-3 py-2">
              <Button className="w-full">Hire Me</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}