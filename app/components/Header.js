"use client";
import React from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Search, ShoppingCart, User } from "lucide-react";

export default function Header() {
    return (
        <header className="bg-white shadow-sm">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold text-blue-600">
                    Sudemy
                </Link>
                <div className="flex-1 max-w-xl mx-4">
                    <div className="relative">
                        <Input
                            type="text"
                            placeholder="Search for courses"
                            className="pl-10"
                        />
                        <Search
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                            size={20}
                        />
                    </div>
                </div>
                <nav className="hidden md:flex items-center space-x-4">
                    <Link href="/cart">
                        <ShoppingCart
                            className="text-gray-600 hover:text-blue-600"
                            size={24}
                        />
                    </Link>
                    <Link href="/profile">
                        <User
                            className="text-gray-600 hover:text-blue-600"
                            size={24}
                        />
                    </Link>
                </nav>
            </div>
        </header>
    );
}
