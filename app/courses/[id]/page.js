'use client';

import React, { useState } from 'react';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Achievement from '@/app/components/Achievement';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';

export default function CoursePage() {
  const [progress, setProgress] = useState(0)

  const incrementProgress = () => {
    setProgress((prev) => Math.min(prev + 10, 100))
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Complete Web Development Bootcamp</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="bg-white shadow rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Course Progress</h2>
              <Progress value={progress} className="w-full mb-4" />
              <p className="text-sm text-gray-500 mb-4">{progress}% completed</p>
              <Button onClick={incrementProgress}>Continue Learning</Button>
            </div>
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">Course Achievements</h2>
              <div className="space-y-4">
                <Achievement 
                  name="Fast Learner" 
                  description="Complete 25% of the course in one day" 
                  condition={() => progress >= 25}
                />
                <Achievement 
                  name="Halfway There" 
                  description="Reach 50% course completion" 
                  condition={() => progress >= 50}
                />
                <Achievement 
                  name="Course Master" 
                  description="Complete the entire course" 
                  condition={() => progress === 100}
                />
              </div>
            </div>
          </div>
          <div>
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">Course Details</h2>
              <ul className="space-y-2">
                <li><strong>Instructor:</strong> Dr. Angela Yu</li>
                <li><strong>Duration:</strong> 65 hours</li>
                <li><strong>Lectures:</strong> 615</li>
                <li><strong>Level:</strong> Beginner to Advanced</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}