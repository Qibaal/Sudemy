"use client"
import { React, useEffect, useState } from 'react';
import { useRouter } from "next/navigation";
import { isUserLoggedIn } from "@/helper/checkAuth";

import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import Footer from "@/app/components/Footer";
import FeaturedCourses from "@/app/components/FeaturedCourses";
import Categories from "@/app/components/Categories";

export default function Home() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      const checkAuthentication = async () => {
        const loggedIn = isUserLoggedIn();
        
        if (!loggedIn) {
          router.push("/signin");
        }
        
        setIsLoading(false);
      };
  
      checkAuthentication();
    }, [router]);

    if (isLoading) {
      return <div></div>;
    }
    
    return (
        <div className="min-h-screen flex flex-col">
            <Header/>
            <main>
                <Hero />
                <FeaturedCourses />
                <Categories />
            </main>
            <Footer />
        </div>
    );
}
