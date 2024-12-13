import React from 'react';
import { Button } from '@/components/ui/button'

const categories = [
  'Development',
  'Business',
  'Finance & Accounting',
  'IT & Software',
  'Office Productivity',
  'Personal Development',
  'Design',
  'Marketing',
  'Lifestyle',
  'Photography & Video',
  'Health & Fitness',
  'Music',
]

export default function Categories() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Top Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((category, index) => (
            <Button key={index} variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white">
              {category}
            </Button>
          ))}
        </div>
      </div>
    </section>
  )
}
