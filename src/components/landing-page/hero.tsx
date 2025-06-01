"use client";

import { Button } from "@/components/ui/button";
import { Users, Brain, Trophy, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export function Hero() {
  const router = useRouter();
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
        <div className="absolute inset-0 opacity-30">
          {/* Floating geometric shapes */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-bounce opacity-60"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-lg rotate-45 animate-pulse opacity-70"></div>
          <div className="absolute bottom-32 left-20 w-24 h-24 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full animate-bounce delay-75 opacity-50"></div>
          <div className="absolute bottom-20 right-32 w-18 h-18 bg-gradient-to-r from-green-400 to-emerald-400 rounded-lg rotate-12 animate-pulse delay-100 opacity-60"></div>

          {/* Mathematical symbols */}
          <div className="absolute top-32 left-1/4 text-6xl font-bold text-purple-300 animate-float opacity-40">
            ≈
          </div>
          <div className="absolute bottom-40 right-1/4 text-5xl font-bold text-blue-300 animate-float delay-150 opacity-40">
            ∞
          </div>
          <div className="absolute top-1/2 left-16 text-4xl font-bold text-orange-300 animate-float delay-300 opacity-40">
            Σ
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent leading-tight">
            Solve Fermi Problems
            <span className="block text-4xl md:text-6xl">Together</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Join players worldwide in tackling fascinating estimation
            challenges. Think critically, collaborate creatively, and discover
            the power of
            <span className="font-semibold text-purple-600">
              {" "}
              back-of-the-envelope calculations
            </span>
            .
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              onClick={() => router.push("/create-room")}
              className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-lg px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <Users className="w-5 h-5 mr-2" />
              Create Room
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-4 border-2 border-purple-300 hover:bg-purple-50 transition-all duration-300"
            >
              Join Existing Room
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-purple-100">
              <Brain className="w-12 h-12 mx-auto mb-4 text-purple-500" />
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                Think Critically
              </h3>
              <p className="text-gray-600">
                Break down complex problems into manageable pieces
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-blue-100">
              <Users className="w-12 h-12 mx-auto mb-4 text-blue-500" />
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                Collaborate
              </h3>
              <p className="text-gray-600">
                Work together with players from around the world
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-indigo-100">
              <Trophy className="w-12 h-12 mx-auto mb-4 text-indigo-500" />
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                Compete
              </h3>
              <p className="text-gray-600">
                See who can get closest to the actual answer
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
