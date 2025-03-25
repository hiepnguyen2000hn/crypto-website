"use client";

import { LineChart, Line, ResponsiveContainer } from "recharts";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Box, Globe, Users } from "lucide-react";
import { Header } from "@/components/header";

const data = [
  { value: 100 },
  { value: 200 },
  { value: 150 },
  { value: 300 },
  { value: 250 },
  { value: 400 },
  { value: 350 },
  { value: 500 },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#030711] text-white">
      <Header />
      
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-600/20 via-transparent to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Skylaa is where Blockchain<br />meets the real world
          </h1>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            A revolutionary platform that bridges the gap between blockchain technology and everyday applications
          </p>
          <div className="flex gap-4 justify-center">
            <Button className="bg-violet-600 hover:bg-violet-700">Get Started</Button>
            <Button variant="outline">Learn More</Button>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-900 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4">Network Performance</h3>
            <div className="h-[200px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#8b5cf6"
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="bg-gray-900 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4">Transaction Volume</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-400">Total Transactions</p>
                <p className="text-3xl font-bold">461,000 TPS</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Average Block Time</p>
                <p className="text-3xl font-bold">~500ms</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Start developing blockchain now</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-gray-900 border-gray-800 p-6">
            <Box className="w-12 h-12 text-violet-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Smart Contracts</h3>
            <p className="text-gray-400">Build and deploy secure smart contracts with our advanced tooling</p>
          </Card>
          <Card className="bg-gray-900 border-gray-800 p-6">
            <Globe className="w-12 h-12 text-violet-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Global Network</h3>
            <p className="text-gray-400">Access a worldwide network of nodes and validators</p>
          </Card>
          <Card className="bg-gray-900 border-gray-800 p-6">
            <Users className="w-12 h-12 text-violet-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Community</h3>
            <p className="text-gray-400">Join a thriving ecosystem of developers and users</p>
          </Card>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-t from-violet-600/20 via-transparent to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to get started?</h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Join thousands of developers building the future of blockchain technology
          </p>
          <Button className="bg-violet-600 hover:bg-violet-700">
            Start Building <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}