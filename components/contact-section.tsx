"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail } from "lucide-react";
import { toast } from "sonner"; // ✅ use sonner toast

export function ContactSection() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: any) {
    e.preventDefault();
    setLoading(true);

    const data = {
      parentFullName: e.target.parentFullName.value,
      parentPhone: e.target.parentPhone.value,
      parentEmail: e.target.parentEmail.value,
      studentFullName: e.target.studentFullName.value,
      currentSchool: e.target.currentSchool.value,
      studentGradeLevel: e.target.studentGradeLevel.value,
      apCourseEnrollment: e.target.apCourseEnrollment.value,
      additionalInfo: e.target.additionalInfo.value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      setLoading(false);

      if (!res.ok) {
        toast.error(
          "❌ There was an issue sending your inquiry. Please try again."
        );
        return;
      }

      toast.success("✅ Inquiry Sent! Your message has been delivered.");
      e.target.reset();
    } catch (err) {
      console.error(err);
      toast.error("⚠️ Something went wrong. Please try again later.");
      setLoading(false);
    }
  }

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
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="parentFullName"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Parent Full Name<span className="text-red-600">*</span>
                  </label>
                  <Input id="parentFullName" required />
                </div>

                <div>
                  <label
                    htmlFor="parentPhone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Parent Phone Number<span className="text-red-600">*</span>
                  </label>
                  <Input id="parentPhone" type="tel" required />
                </div>

                <div>
                  <label
                    htmlFor="parentEmail"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Parent Email Address<span className="text-red-600">*</span>
                  </label>
                  <Input id="parentEmail" type="email" required />
                </div>

                <div>
                  <label
                    htmlFor="studentFullName"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Student Full Name<span className="text-red-600">*</span>
                  </label>
                  <Input id="studentFullName" required />
                </div>

                <div>
                  <label
                    htmlFor="currentSchool"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Current School<span className="text-red-600">*</span>
                  </label>
                  <Input id="currentSchool" required />
                </div>

                <div>
                  <label
                    htmlFor="studentGradeLevel"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Student Grade Level<span className="text-red-600">*</span>
                  </label>
                  <Input id="studentGradeLevel" required />
                </div>

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

                <div>
                  <label
                    htmlFor="additionalInfo"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Additional Information (Optional)
                  </label>
                  <Textarea id="additionalInfo" rows={4} />
                </div>

                <Button
                  disabled={loading}
                  className="w-full bg-ace-blue hover:bg-ace-blue/90"
                >
                  {loading ? "Sending..." : "Submit Inquiry"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
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
