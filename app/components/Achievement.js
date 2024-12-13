'use client'

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Trophy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Achievement({ name, description, condition }) {
  const [unlocked, setUnlocked] = useState(false);
  const { toast } = useToast();

  const checkAchievement = () => {
    if (condition()) {
      setUnlocked(true);
      toast({
        title: "Achievement Unlocked!",
        description: `You've earned the "${name}" achievement!`,
      });
    } else {
      toast({
        title: "Achievement Not Unlocked",
        description: "Keep trying! You haven't met the conditions yet.",
        variant: "destructive",
      });
    }
  };

  return (
    <div
      className={`flex items-center justify-between p-4 rounded-lg ${
        unlocked ? "bg-blue-100" : "bg-gray-100"
      }`}
    >
      <div className="flex items-center">
        <Trophy
          className={`w-8 h-8 ${
            unlocked ? "text-yellow-500" : "text-gray-400"
          } mr-4`}
        />
        <div>
          <h3 className="font-semibold">{name}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>
      <Button onClick={checkAchievement} variant={unlocked ? "outline" : "default"}>
        {unlocked ? "Unlocked" : "Check"}
      </Button>
    </div>
  );
}
