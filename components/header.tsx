"use client";

import { Button } from "@/components/ui/button";
import { Cuboid as Cube } from "lucide-react";
import Link from "next/link";

export function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-[#030711]/80 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Cube className="h-8 w-8 text-violet-500" />
              <span className="text-xl font-bold">Skylaa</span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#" className="text-gray-300 hover:text-white">Products</Link>
            <Link href="#" className="text-gray-300 hover:text-white">Solutions</Link>
            <Link href="#" className="text-gray-300 hover:text-white">Developers</Link>
            <Link href="#" className="text-gray-300 hover:text-white">About</Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="hidden md:inline-flex">Sign In</Button>
            <Button className="bg-violet-600 hover:bg-violet-700">Get Started</Button>
          </div>
        </div>
      </div>
    </header>
  );
}