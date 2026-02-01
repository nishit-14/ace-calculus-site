"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calculator, Users, Clock, Calendar, Video, Award } from "lucide-react";

export function ClassesSection() {
  const calculusClasses = [
    {
      title: "AB Calculus",
      duration: "June 17th – August 10th, 2026",
      sessions: "16 classes of 1.5 hrs each",
      schedule: "Monday & Wednesday · 7:30 PM – 9:00 PM",
      fee: "$695",
      classSize: "Small class size strictly capped, so sign up early",
      officeHours: "Monday & Wednesday · 9:00 PM – 10:00 PM",
      features: [
        "Unit 1: Limits and Continuity Equations",
        "Unit 2: Differentiation - Definition and Properties",
        "Unit 3: Differentiation - Composite, Implicit and Inverse Functions",
        "Unit 4: Contextual Applications of Differentiation",
        "Unit 5: Analytical Applications of Differentiation",
      ],
    },
    {
      title: "BC Calculus",
      duration: "June 17th – August 10th, 2026",
      sessions: "16 classes of 1.5 hrs each",
      schedule: "Monday & Wednesday · 7:30 PM – 9:00 PM",
      fee: "$695",
      classSize: "Small class size strictly capped, so sign up early",
      officeHours: "Monday & Wednesday · 9:00 PM – 10:00 PM",
      features: [
        "Unit 1: Limits and Continuity Equations",
        "Unit 2: Differentiation - Definition and Properties",
        "Unit 3: Differentiation - Composite, Implicit and Inverse Functions",
        "Unit 4: Contextual Applications of Differentiation",
        "Unit 5: Analytical Applications of Differentiation",
      ],
    },
  ];

  return (
    <section id="classes" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
            AP Summer Calculus Classes
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive AP Calculus preparation with personalized attention
            and proven results.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {calculusClasses.map((classItem, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow duration-300 border-2 border-ace-blue/20 flex flex-col h-full"
            >
              <CardHeader className="bg-gradient-to-r from-ace-blue/5 to-ace-green/5">
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-lg bg-ace-blue/10">
                    <Calculator className="h-8 w-8 text-ace-blue" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-gray-900">
                      {classItem.title}
                    </CardTitle>
                    <p className="text-lg font-semibold text-ace-green">
                      {classItem.fee}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6 flex flex-col flex-grow">
                <div className="space-y-4 mb-6">
                  <div className="flex items-center space-x-3">
                    <Calendar className="h-5 w-5 text-ace-blue" />
                    <span className="text-gray-700">{classItem.duration}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-ace-blue" />
                    <span className="text-gray-700">{classItem.sessions}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-ace-blue" />
                    <span className="text-gray-700">{classItem.schedule}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="h-5 w-5 text-ace-blue" />
                    <span className="text-gray-700">{classItem.classSize}</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-ace-blue mt-0.5" />
                    <div className="text-gray-700">
                      <p className="font-semibold text-sm">
                        Prof's Office Hours:
                      </p>
                      <p className="text-sm">{classItem.officeHours}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 flex-grow">
                  <h4 className="font-semibold text-gray-900 flex items-center">
                    <Award className="h-5 w-5 text-ace-green mr-2" />
                    Course Content:
                  </h4>
                  <ul className="space-y-2">
                    {classItem.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-start space-x-2"
                      >
                        <div className="w-2 h-2 bg-ace-blue rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  className="w-full mt-6 bg-ace-blue hover:bg-ace-blue/90"
                  onClick={() => {
                    const contactSection = document.getElementById("contact");
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  Register Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Session Benefits */}
        <div className="bg-white rounded-lg p-8 shadow-sm">
          <h3 className="text-2xl font-serif font-semibold text-gray-900 mb-6 text-center">
            Why Choose Our AP Calculus Program?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-ace-blue/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-ace-blue" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Small Class Sizes
              </h4>
              <p className="text-gray-600 text-sm">
                Personalized attention for maximum learning
              </p>
            </div>
            <div className="text-center">
              <div className="bg-ace-green/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Video className="h-8 w-8 text-ace-green" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Class Recordings
              </h4>
              <p className="text-gray-600 text-sm">
                Review content anytime or catch up on missed classes
              </p>
            </div>
            <div className="text-center">
              <div className="bg-ace-blue/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Award className="h-8 w-8 text-ace-blue" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">AP Exam Prep</h4>
              <p className="text-gray-600 text-sm">
                Intensive bootcamp with full-length practice exams
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
