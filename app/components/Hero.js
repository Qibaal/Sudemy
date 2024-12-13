import React from 'react';
import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <section className="bg-blue-600 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Learn on your schedule</h1>
          <p className="text-xl mb-8">
            Study any topic, anytime. Explore thousands of courses for the low price of $12.99 each.
          </p>
          <Button className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3">
            Explore courses
          </Button>
        </div>
      </div>
    </section>
  )
}

