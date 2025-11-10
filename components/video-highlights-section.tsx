export function VideoHighlightsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 items-start">
          {/* Course Highlights */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 font-serif text-center md:text-left">
              Course Highlights
            </h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <p className="text-gray-700 leading-relaxed">
                  Small class size for more personalized attention
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <p className="text-gray-700 leading-relaxed">
                  Focus on School Test Prep AND AP Exam Prep
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <p className="text-gray-700 leading-relaxed">
                  6-week AP Bootcamp for intense prep prior to AP exam
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <p className="text-gray-700 leading-relaxed">
                  Prof's Office Hours for 1-1 support which students find
                  incredibly useful
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <p className="text-gray-700 leading-relaxed">
                  Class Recordings posted after every class so students can
                  review content or catch up missed content
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <p className="text-gray-700 leading-relaxed">
                  Canvas Course access to students AND parents
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
