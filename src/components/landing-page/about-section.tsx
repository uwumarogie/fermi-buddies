import { Calculator, Users, Lightbulb, Target } from "lucide-react";

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-r from-purple-600 to-blue-600"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What are Fermi Problems?
          </h2>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
            Named after physicist Enrico Fermi, these are estimation problems
            designed to teach dimensional analysis, approximation, and the
            importance of clearly identifying your assumptions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center group">
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 mb-4 group-hover:bg-white/30 transition-all duration-300">
              <Calculator className="w-16 h-16 mx-auto text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Estimation
            </h3>
            <p className="text-purple-100">
              Learn to make reasonable approximations with limited information
            </p>
          </div>

          <div className="text-center group">
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 mb-4 group-hover:bg-white/30 transition-all duration-300">
              <Lightbulb className="w-16 h-16 mx-auto text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Creative Thinking
            </h3>
            <p className="text-purple-100">
              Approach problems from multiple angles and perspectives
            </p>
          </div>

          <div className="text-center group">
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 mb-4 group-hover:bg-white/30 transition-all duration-300">
              <Users className="w-16 h-16 mx-auto text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Collaboration
            </h3>
            <p className="text-purple-100">
              Share ideas and learn from different problem-solving approaches
            </p>
          </div>

          <div className="text-center group">
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 mb-4 group-hover:bg-white/30 transition-all duration-300">
              <Target className="w-16 h-16 mx-auto text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Accuracy</h3>
            <p className="text-purple-100">
              Get surprisingly close to real answers using logical reasoning
            </p>
          </div>
        </div>

        <div className="mt-16 bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Example Problem
            </h3>
            <div className="bg-white/20 rounded-2xl p-6 max-w-2xl mx-auto">
              <p className="text-lg text-white font-medium mb-4">
                "How many piano tuners are there in Chicago?"
              </p>
              <p className="text-purple-100 text-sm">
                This classic Fermi problem teaches you to break down complex
                questions into smaller, manageable pieces using logical
                assumptions and basic math.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
