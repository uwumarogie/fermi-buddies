import {
  Zap,
  Globe,
  Award,
  MessageCircle,
  BarChart3,
  Shield,
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Real-time Collaboration",
    description:
      "Work together with players worldwide in real-time. Share ideas, debate approaches, and learn from each other.",
    color: "text-yellow-500",
  },
  {
    icon: Globe,
    title: "Global Community",
    description:
      "Connect with problem solvers from every corner of the world. Different perspectives lead to better solutions.",
    color: "text-blue-500",
  },
  {
    icon: Award,
    title: "Competitive Scoring",
    description:
      "Earn points for accuracy, creativity, and collaboration. Climb the leaderboards and showcase your skills.",
    color: "text-purple-500",
  },
  {
    icon: MessageCircle,
    title: "Built-in Chat",
    description:
      "Communicate seamlessly with your team using our integrated chat system. Voice and text options available.",
    color: "text-green-500",
  },
  {
    icon: BarChart3,
    title: "Progress Tracking",
    description:
      "Monitor your improvement over time. See which types of problems you excel at and where to focus.",
    color: "text-orange-500",
  },
  {
    icon: Shield,
    title: "Safe Environment",
    description:
      "Enjoy a moderated, respectful community where learning and curiosity are always encouraged.",
    color: "text-indigo-500",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Why Choose FermiPlay?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the most engaging way to develop your estimation and
            problem-solving skills while connecting with curious minds
            worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-3xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className={`w-8 h-8 ${feature.color}`} />
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-purple-600 transition-colors">
                {feature.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-8 md:p-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Challenge Your Mind?
            </h3>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Join thousands of players who are already sharpening their
              problem-solving skills and having fun while doing it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 font-semibold px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors text-lg">
                Start Playing Now
              </button>
              <button className="border-2 border-white text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-colors text-lg">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
