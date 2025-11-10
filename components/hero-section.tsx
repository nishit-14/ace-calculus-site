import { Button } from "@/components/ui/button"
import { ArrowRight, Target, TrendingUp, Award } from "lucide-react"

export function HeroSection() {
  return (
    <section
      className="relative py-20 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url(/images/math-background.png)" }}
    >
      <div className="absolute inset-0 bg-white/80"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 mb-6">
            <span className="text-ace-blue">Aim</span> <span className="text-ace-green">Challenge</span>{" "}
            <span className="text-ace-blue">Excel</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Unlock your academic potential with personalized tutoring that helps you reach new heights of success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-ace-blue hover:bg-ace-blue/90 text-white">
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-ace-green text-ace-green hover:bg-ace-green hover:text-white bg-white/90"
            >
              Learn More
            </Button>
          </div>

          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="flex flex-col items-center">
              <div className="bg-ace-blue/10 p-4 rounded-full mb-4 backdrop-blur-sm">
                <Target className="h-8 w-8 text-ace-blue" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Targeted Learning</h3>
              <p className="text-gray-600 text-center">
                Personalized approach to address your specific learning needs and goals.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-ace-green/10 p-4 rounded-full mb-4 backdrop-blur-sm">
                <TrendingUp className="h-8 w-8 text-ace-green" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Proven Results</h3>
              <p className="text-gray-600 text-center">
                Track record of helping students achieve significant grade improvements.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-ace-blue/10 p-4 rounded-full mb-4 backdrop-blur-sm">
                <Award className="h-8 w-8 text-ace-blue" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Excellence Focused</h3>
              <p className="text-gray-600 text-center">
                Committed to helping you not just pass, but excel in your studies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
