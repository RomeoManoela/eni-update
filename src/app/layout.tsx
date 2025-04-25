'use client'

import './globals.css'
import React, { useEffect, useRef } from 'react'
import Header from '@/ui/Header'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const binaryRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Création des particules binaires
    if (binaryRef.current) {
      const container = binaryRef.current
      const containerWidth = window.innerWidth

      // Vider le conteneur avant d'ajouter de nouveaux éléments
      container.innerHTML = ''

      // Créer des particules binaires
      for (let i = 0; i < 50; i++) {
        const span = document.createElement('span')
        const size = Math.random() * 12 + 8
        const posX = Math.floor(Math.random() * containerWidth)
        const delay = Math.random() * 10
        const duration = Math.random() * 10 + 10

        span.textContent = Math.random() > 0.5 ? '1' : '0'
        span.style.left = `${posX}px`
        span.style.fontSize = `${size}px`
        span.style.animationDuration = `${duration}s`
        span.style.animationDelay = `${delay}s`

        container.appendChild(span)
      }
    }
  }, [])

  return (
    <html lang='fr'>
      <body className='code-background bg-[#001100] text-white'>
        <div className='circuit-grid fixed inset-0 z-[-3]'></div>
        <div
          ref={binaryRef}
          className='binary-particles pointer-events-none fixed inset-0 z-[-2] overflow-hidden'
        ></div>
        <div className='scan-effect pointer-events-none fixed inset-0 z-[-1]'></div>

        <div className='relative min-h-screen'>
          <Header />
          <main className='relative z-10'>{children}</main>
        </div>
      </body>
    </html>
  )
}
