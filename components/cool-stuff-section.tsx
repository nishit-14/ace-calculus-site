import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export function CoolStuffSection() {
  return (
    <section id="cool-stuff" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">Cool Stuff</h2>
        </div>

        <div className="space-y-16">
          {/* Hyperbolic Paraboloid Section */}
          <Card className="overflow-hidden shadow-lg">
            <CardContent className="p-0">
              <div className="bg-gradient-to-r from-purple-100 to-blue-100 p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div className="order-2 lg:order-1">
                    <h3 className="text-2xl md:text-3xl font-serif font-bold text-purple-800 mb-6 italic">
                      Can a point be both a maximum AND a minimum?
                    </h3>
                    <div className="space-y-4 text-lg text-gray-700">
                      <p className="font-semibold text-purple-700">Yes, think Pringle chips!!! 😋</p>
                      <p>
                        This beautiful 3-D graph here is a{" "}
                        <span className="font-semibold text-purple-800">Hyperbolic Paraboloid</span>, called a "saddle
                        curve." It has a minimum on the xz-plane, and a maximum on the yz-plane at the point indicated.
                      </p>
                      <p className="font-semibold text-ace-green text-xl">Multivariable Calc is cool!!</p>
                    </div>
                  </div>
                  <div className="order-1 lg:order-2 flex justify-center">
                    <div className="bg-white rounded-lg p-4 shadow-md">
                      <Image
                        src="/images/hyperbolic-paraboloid.png"
                        alt="Hyperbolic Paraboloid - 3D saddle curve showing maximum and minimum points"
                        width={400}
                        height={300}
                        className="w-full h-auto max-w-md"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Möbius Strip Section */}
          <Card className="overflow-hidden shadow-lg">
            <CardContent className="p-0">
              <div className="bg-gradient-to-r from-amber-100 to-orange-100 p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div className="flex justify-center">
                    <div className="bg-white rounded-lg p-4 shadow-md">
                      <Image
                        src="/images/mobius-strip-new.png"
                        alt="Möbius Strip - One-sided surface demonstrating infinity concept"
                        width={400}
                        height={300}
                        className="w-full h-auto max-w-md"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-serif font-bold text-blue-800 mb-6 italic">
                      The Mysterious Möbius
                    </h3>
                    <div className="space-y-4 text-lg text-gray-700">
                      <p className="font-semibold text-blue-700">
                        The intriguing Möbius surface that embodies the abstract concept of infinity in a tangible form.
                      </p>
                      <p>
                        This <span className="font-semibold text-blue-800">one-sided surface</span> remains in one piece
                        when split down the middle!
                      </p>
                      <p className="italic text-blue-600">
                        When you try to go forward, you ring sideways, and when you try to circle in, you find yourself
                        outside.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
