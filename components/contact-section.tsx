import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ready to start your journey to academic excellence? Let's discuss
            how we can help your child succeed in AP Calculus.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">
                Send a Message
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Parent Full Name */}
              <div>
                <label
                  htmlFor="parentFullName"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Parent Full Name<span className="text-red-600">*</span>
                </label>
                <Input
                  id="parentFullName"
                  placeholder="Full name of parent"
                  required
                />
              </div>

              {/* Parent Phone Number */}
              <div>
                <label
                  htmlFor="parentPhone"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Parent Phone Number<span className="text-red-600">*</span>
                </label>
                <Input
                  id="parentPhone"
                  type="tel"
                  placeholder="(555) 123-4567"
                  required
                />
              </div>

              {/* Parent Email Address */}
              <div>
                <label
                  htmlFor="parentEmail"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Parent Email Address<span className="text-red-600">*</span>
                </label>
                <Input
                  id="parentEmail"
                  type="email"
                  placeholder="parent.email@example.com"
                  required
                />
              </div>

              {/* Student Full Name */}
              <div>
                <label
                  htmlFor="studentFullName"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Student Full Name<span className="text-red-600">*</span>
                </label>
                <Input
                  id="studentFullName"
                  placeholder="Full name of student"
                  required
                />
              </div>

              {/* Current School */}
              <div>
                <label
                  htmlFor="currentSchool"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Current School<span className="text-red-600">*</span>
                </label>
                <Input id="currentSchool" placeholder="School name" required />
              </div>

              {/* Student Grade Level */}
              <div>
                <label
                  htmlFor="studentGradeLevel"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Student Grade Level<span className="text-red-600">*</span>
                </label>
                <Input
                  id="studentGradeLevel"
                  placeholder="Example: 10th Grade"
                  required
                />
              </div>

              {/* AP Course Enrollment */}
              <div>
                <label
                  htmlFor="apCourseEnrollment"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  AP Course Enrollment<span className="text-red-600">*</span>
                </label>
                <select
                  id="apCourseEnrollment"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-ace-blue focus:border-ace-blue"
                >
                  <option value="">Select a Course</option>
                  <option value="AB Calculus">AB Calculus</option>
                  <option value="BC Calculus">BC Calculus</option>
                  <option value="Other">Other (please specify below)</option>
                </select>
              </div>

              {/* Additional Information */}
              <div>
                <label
                  htmlFor="additionalInfo"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Additional Information (Optional)
                </label>
                <Textarea
                  id="additionalInfo"
                  placeholder="Anything else you’d like to add..."
                  rows={4}
                />
              </div>

              <Button className="w-full bg-ace-blue hover:bg-ace-blue/90">
                Submit Inquiry
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-ace-green/10 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-ace-green" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
                    <p className="text-gray-600">+1 (408) 680-6027</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-ace-blue/10 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-ace-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                    <p className="text-gray-600">gc95014@gmail.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
