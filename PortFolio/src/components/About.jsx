import React, { useEffect, useRef } from 'react'
// import Image from 'next/image'

const images = [
  { src: '/placeholder.svg?height=400&width=300', alt: 'Image 1' },
  { src: '/placeholder.svg?height=400&width=300', alt: 'Image 2' },
  { src: '/placeholder.svg?height=400&width=300', alt: 'Image 3' },
  { src: '/placeholder.svg?height=400&width=300', alt: 'Image 4' },
]

export default function About() {
  const observerRef = useRef(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-image')
          } else {
            entry.target.classList.remove('animate-image')
          }
        })
      },
      { threshold: 0.5 }
    )

    const images = document.querySelectorAll('.scroll-animate')
    images.forEach((img) => observerRef.current.observe(img))

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center">About TechBridPlus</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-6">
            <p className="text-lg">
              TechBridPlus is at the forefront of bridging technology and innovation. We are passionate about creating solutions that make a difference in people's lives and businesses.
            </p>
            <p className="text-lg">
              Our team of experts brings together years of experience in various tech domains, allowing us to tackle complex challenges with creativity and precision.
            </p>
            <p className="text-lg">
              At TechBridPlus, we believe in the power of continuous learning and adaptation. The tech world is ever-evolving, and so are we.
            </p>
          </div>
          
          <div className="relative h-[400px]">
            {images.map((image, index) => (
              <div
                key={index}
                className={`scroll-animate absolute inset-0 transition-all duration-1000 ease-in-out ${
                  index % 2 === 0 ? 'left-0' : 'right-0'
                }`}
                style={{
                  transform: `translateY(${index * 25}%)`,
                  opacity: 1 - index * 0.2,
                }}
              >
                {/* <Image
                  src={image.src}
                  alt={image.alt}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg shadow-lg"
                /> */}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 space-y-8">
          <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
          <p className="text-lg">
            Our mission is to empower businesses and individuals with cutting-edge technology solutions that drive growth, efficiency, and innovation. We strive to be the bridge that connects visionary ideas with practical, impactful implementations.
          </p>
          
          <h2 className="text-3xl font-semibold mb-4">Our Values</h2>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>Innovation: We constantly push the boundaries of what's possible.</li>
            <li>Integrity: We believe in transparent and ethical practices in all our endeavors.</li>
            <li>Collaboration: We foster a culture of teamwork and open communication.</li>
            <li>Excellence: We are committed to delivering high-quality solutions that exceed expectations.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}