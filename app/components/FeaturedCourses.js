import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

import FinancialThumbnail from "@/public/coursesComponents/financial.png";
import MLThumbnail from "@/public/coursesComponents/machine-learning.png";
import WebThumbnail from "@/public/coursesComponents/web-dev.png";

const courses = [
    {
        id: 1,
        title: "Complete Web Development Bootcamp",
        instructor: "Dr. Angela Yu",
        rating: 4.7,
        students: 125000,
        price: 12.99,
        image: WebThumbnail,
    },
    {
        id: 2,
        title: "Machine Learning A-Z™: Hands-On Python & R In Data Science",
        instructor: "Kirill Eremenko, Hadelin de Ponteves",
        rating: 4.5,
        students: 98000,
        price: 12.99,
        image: MLThumbnail,
    },
    {
        id: 3,
        title: "The Complete Financial Analyst Course 2023",
        instructor: "365 Careers",
        rating: 4.6,
        students: 75000,
        price: 12.99,
        image: FinancialThumbnail,
    },
];

export default function FeaturedCourses() {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8">Featured Courses</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {courses.map((course) => (
                        <Card key={course.id} className="overflow-hidden">
                            <Link href={`/courses/${course.id}`}>
                                <Image
                                    src={course.image}
                                    alt={course.title}
                                    className="w-full object-cover"
                                    width={192}
                                />
                                <CardHeader>
                                    <CardTitle className="text-lg">
                                        {course.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-gray-500 mb-2">
                                        {course.instructor}
                                    </p>
                                    <div className="flex items-center mb-2">
                                        <span className="text-yellow-400 font-bold mr-1">
                                            {course.rating}
                                        </span>
                                        <Star className="text-yellow-400 w-4 h-4 fill-current" />
                                        <span className="text-sm text-gray-500 ml-1">
                                            ({course.students.toLocaleString()})
                                        </span>
                                    </div>
                                </CardContent>
                                <CardFooter className="flex justify-between items-center">
                                    <span className="font-bold">
                                        ${course.price.toFixed(2)}
                                    </span>
                                    <Badge variant="secondary">
                                        Bestseller
                                    </Badge>
                                </CardFooter>
                            </Link>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
