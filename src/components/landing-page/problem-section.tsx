import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Users, TrendingUp } from "lucide-react";

const sampleProblems = [
  {
    title: "Pizza Delivery Challenge",
    description:
      "How many pizzas are delivered in New York City on a typical Friday night?",
    difficulty: "Beginner",
    estimatedTime: "10-15 min",
    players: "2-6",
    category: "Urban Planning",
    color: "from-orange-400 to-red-400",
  },
  {
    title: "Library Books Mystery",
    description:
      "How many words are there in all the books in your local library?",
    difficulty: "Intermediate",
    estimatedTime: "15-20 min",
    players: "3-8",
    category: "Information",
    color: "from-green-400 to-blue-400",
  },
  {
    title: "Smartphone Screen Time",
    description:
      "How many hours does the average person spend looking at their phone per year?",
    difficulty: "Beginner",
    estimatedTime: "8-12 min",
    players: "2-5",
    category: "Technology",
    color: "from-purple-400 to-pink-400",
  },
  {
    title: "Global Coffee Consumption",
    description:
      "How many coffee beans are consumed worldwide in a single day?",
    difficulty: "Advanced",
    estimatedTime: "20-30 min",
    players: "4-10",
    category: "Economics",
    color: "from-amber-400 to-orange-400",
  },
  {
    title: "Ocean Plastic Problem",
    description: "How much plastic waste enters the ocean every minute?",
    difficulty: "Intermediate",
    estimatedTime: "15-25 min",
    players: "3-7",
    category: "Environment",
    color: "from-cyan-400 to-blue-400",
  },
  {
    title: "Space Station Speed",
    description:
      "How fast would you need to throw a baseball to reach the International Space Station?",
    difficulty: "Advanced",
    estimatedTime: "25-35 min",
    players: "3-6",
    category: "Physics",
    color: "from-indigo-400 to-purple-400",
  },
];

function getDifficultyColor(difficulty: string) {
  switch (difficulty) {
    case "Beginner":
      return "bg-green-100 text-green-700";
    case "Intermediate":
      return "bg-yellow-100 text-yellow-700";
    case "Advanced":
      return "bg-red-100 text-red-700";
    default:
      return "bg-gray-100 text-gray-700";
  }
}

export function ProblemsSection() {
  return (
    <section id="problems" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Sample Problems
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get a taste of the fascinating challenges waiting for you. Each
            problem is designed to spark curiosity and creative thinking.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sampleProblems.map((problem, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-0 overflow-hidden"
            >
              <div className={`h-2 bg-gradient-to-r ${problem.color}`}></div>
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start mb-2">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(problem.difficulty)}`}
                  >
                    {problem.difficulty}
                  </span>
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                    {problem.category}
                  </span>
                </div>
                <CardTitle className="text-xl group-hover:text-purple-600 transition-colors">
                  {problem.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6 line-clamp-3">
                  {problem.description}
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-2" />
                    {problem.estimatedTime}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="w-4 h-4 mr-2" />
                    {problem.players} players
                  </div>
                </div>

                <Button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 transition-all duration-300">
                  Try This Problem
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-purple-300 hover:bg-purple-50 px-8 py-4 text-lg"
          >
            <TrendingUp className="w-5 h-5 mr-2" />
            View All Problems
          </Button>
        </div>
      </div>
    </section>
  );
}
