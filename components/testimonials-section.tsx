import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Irvington HS Student",
      text: "AP scores came out today and I am ecstatic to tell you that I was able to get a five on Calc BC and a sub score of five for AB. Thank you for an amazing year and wonderful conversations during office hours; I had a great time learning and working through those concepts with you.",
      result: "AP Calc BC: 5",
    },
    {
      name: "EVHS Student",
      text: "I got a 5 on all my exams including Calc. Thank you so much, I really couldn't have done it without you. I hope you can help my sister when the time comes, she's as smart as me if not more :)",
      result: "AP Calc: 5",
    },
    {
      name: "St Francis HS Parent",
      text: "Soo happy to share with you she got a 5 in Calc AB. Thank you so much for all your help! Very grateful and truly appreciate all your efforts with teaching her!",
      result: "AP Calc AB: 5",
    },
    {
      name: "Monta Vista HS Parent",
      text: "Krish was able to secure 5 in AP Cal AB with your guidance. Thank you so much",
      result: "AP Calc AB: 5",
    },
    {
      name: "FUSD Parent",
      text: "My daughter scored 5 on her Ap cal bc. It's all your and Raymond's efforts to pull it off the last few months. Thank you so much",
      result: "AP Calc BC: 5",
    },
    {
      name: "St Francis HS Student",
      text: "I just wanted to thank you for all of your help last year in Calc AB. I got a 5 on the exam and I could not have done it without your help! I look forward to more Calc BC classes this year!",
      result: "AP Calc AB: 5",
    },
    {
      name: "Sri Sasubilli",
      text: "The classes during summer helped him to get A grade in his first semester as the material she prepared/covered in summer gave an initial kickstart so my son and the kids found the first semester a breeze. Her office hours helped him to become more confident. I haven't seen any tutor before like Gayatri.",
      result: "A Grade",
    },
    {
      name: "MSJHS Parent",
      text: "Gayathri was an amazing source of support for my daughter through her calculus AB class. She explained complex concepts simply and provided tools for the kids to support their learning. In addition to regular scheduled classes, Gayathri provided office hours which my daughter found very useful.",
      result: "Strong Support",
    },
    {
      name: "MVHS Parent",
      text: "She brings in a wealth of knowledge not only as a college math professor but also as a parent with kids in college herself. She starts the coursework in summer, giving the students confidence as they start their class at school. I would highly recommend Gayathri for AP calculus classes.",
      result: "Highly Recommended",
    },
    {
      name: "DVHS Student",
      text: "Your exceptional teaching and commitment helped me. Your expertise in calculus and your ability to convey complex concepts in an accessible and engaging manner were instrumental in my success. Thank you for being an inspiring and dedicated teacher.",
      result: "AP Success",
    },
    {
      name: "DVHS Student",
      text: "Thanks to your guidance and assistance, I was able to get a 5 on the exam. You were always there to answer my questions after class and provide clarity whenever I needed it. I appreciate the extra time and effort you put for helping not just me, but all your students.",
      result: "AP Calc AB: 5",
    },
  ]

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">Student Success Stories</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Real results from real students and parents who experienced the ACE difference in AP Calculus preparation.
          </p>
          <div className="mt-4">
            <a
              href="https://www.ratemyprofessors.com/professor/2253763"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-ace-blue hover:text-ace-blue-dark transition-colors"
            >
              Check me out on RateMyProfessors.com →
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-4 italic flex-grow text-sm leading-relaxed">
                  "{testimonial.text}"
                </blockquote>
                <div className="flex justify-between items-end mt-auto">
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{testimonial.name}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-ace-green text-sm">{testimonial.result}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
