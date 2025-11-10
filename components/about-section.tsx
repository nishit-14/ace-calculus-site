import Image from "next/image"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">About Me</h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Professor Image */}
            <div className="flex-shrink-0">
              <Image
                src="/images/professor.jpg"
                alt="Professor"
                width={256}
                height={320}
                className="rounded-lg shadow-lg object-cover"
              />
            </div>

            {/* About Text Box */}
            <div className="flex-1 bg-gray-50 border-2 border-gray-200 rounded-lg p-8">
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  I have taught various levels of Higher Math in India, Australia, Singapore and California. I am
                  tenured faculty at a California Community College, and also Math Lecturer at a well-known 4-year
                  California private university in the Bay Area. I am an experienced IB Educator as well, so my teaching
                  approach is one of inquiry-based "Concept driving Content".
                </p>

                <p>Calculus is my specialty, which I have been teaching for more than 2 decades.</p>

                <div className="pt-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">My goals for students:</h3>
                  <div className="space-y-3">
                    <p>
                      The crossover from the analytical thinking of Trigonometry and Algebra to the Conceptual thinking
                      required of Calculus, can be challenging for kids, and my goal is to help make students
                      Math-confident and excited about learning this wonderful subject.
                    </p>

                    <p>
                      Calculus is where Beauty, Elegance, Logic and Truth all converge in one glorious whole, and my
                      goal is to inspire students to be lifelong learners and appreciate the wonder that is Calculus.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
