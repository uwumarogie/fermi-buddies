import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import Link from "next/link";

export function Header() {
  return (
    <header className="relative z-10 px-6 py-4">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">F</span>
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            FermiPlay
          </span>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          <Link
            href="#about"
            className="text-gray-600 hover:text-purple-600 transition-colors"
          >
            About
          </Link>
          <Link
            href="#problems"
            className="text-gray-600 hover:text-purple-600 transition-colors"
          >
            Sample Problems
          </Link>
          <Link
            href="#features"
            className="text-gray-600 hover:text-purple-600 transition-colors"
          >
            Features
          </Link>
        </div>

        <div className="flex items-center space-x-3">
          <Button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600">
            <Play className="w-4 h-4 mr-2" />
            Play Now
          </Button>
        </div>
      </nav>
    </header>
  );
}
