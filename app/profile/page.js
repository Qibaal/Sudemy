"use client";

import { React, useState } from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Trophy, Book, Calendar, Clock } from "lucide-react";

const achievements = [
    {
        id: 1,
        name: "First Course Completed",
        description: "Complete your first course",
        icon: <Trophy className="w-6 h-6 text-yellow-500" />,
        unlocked: true,
    },
    {
        id: 2,
        name: "Knowledge Seeker",
        description: "Complete 5 courses",
        icon: <Book className="w-6 h-6 text-blue-500" />,
        unlocked: false,
    },
    {
        id: 3,
        name: "30-Day Streak",
        description: "Log in for 30 consecutive days",
        icon: <Calendar className="w-6 h-6 text-green-500" />,
        unlocked: false,
    },
    {
        id: 4,
        name: "Speed Learner",
        description: "Complete a course in less than a week",
        icon: <Clock className="w-6 h-6 text-purple-500" />,
        unlocked: false,
    },
];

export default function Profile() {
    const [unlockedAchievements, setUnlockedAchievements] = useState(
        achievements.filter((a) => a.unlocked)
    );

    const unlockRandomAchievement = () => {
        const lockedAchievements = achievements.filter((a) => !a.unlocked);
        if (lockedAchievements.length > 0) {
            const randomIndex = Math.floor(
                Math.random() * lockedAchievements.length
            );
            const newUnlockedAchievement = {
                ...lockedAchievements[randomIndex],
                unlocked: true,
            };
            setUnlockedAchievements([
                ...unlockedAchievements,
                newUnlockedAchievement,
            ]);
        }
    };

    const Badge = ({ children, className = '' }) => {
      return (
          <span 
              className={`px-2 py-1 text-xs font-semibold bg-gray-200 rounded ${className}`}
          >
              {children}
          </span>
      );
  };

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-8">User Profile</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="md:col-span-2">
                        <h2 className="text-2xl font-semibold mb-4">
                            Your Progress
                        </h2>
                        <div className="bg-white shadow rounded-lg p-6">
                            <div className="mb-4">
                                <h3 className="text-lg font-medium mb-2">
                                    Current Course: Web Development Bootcamp
                                </h3>
                                <Progress value={65} className="w-full" />
                                <p className="text-sm text-gray-500 mt-2">
                                    65% completed
                                </p>
                            </div>
                            <div>
                                <h3 className="text-lg font-medium mb-2">
                                    Overall Progress
                                </h3>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <p className="text-sm text-gray-500">
                                            Courses Completed
                                        </p>
                                        <p className="text-2xl font-bold">3</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">
                                            Total Learning Hours
                                        </p>
                                        <p className="text-2xl font-bold">27</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">
                            Achievements
                        </h2>
                        <div className="bg-white shadow rounded-lg p-6">
                            <div className="grid grid-cols-2 gap-4">
                                {achievements.map((achievement) => (
                                    <div
                                        key={achievement.id}
                                        className={`flex flex-col items-center p-2 rounded-lg ${
                                            achievement.unlocked
                                                ? "bg-blue-100"
                                                : "bg-gray-100"
                                        }`}
                                    >
                                        {achievement.icon}
                                        <p className="text-sm font-medium mt-2">
                                            {achievement.name}
                                        </p>
                                        {achievement.unlocked && (
                                            <Badge
                                                variant="secondary"
                                                className="mt-1"
                                            >
                                                Unlocked
                                            </Badge>
                                        )}
                                    </div>
                                ))}
                            </div>
                            <Button
                                onClick={unlockRandomAchievement}
                                className="w-full mt-4"
                            >
                                Unlock Random Achievement
                            </Button>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
