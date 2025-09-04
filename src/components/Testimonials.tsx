import { Card, CardContent } from "./ui/card";

const testimonials = [
  {
    quote: "Real Magic has revolutionized how we approach asset tokenization. Their platform provides the security and compliance we need while opening new investment opportunities.",
    author: "Sarah Chen",
    title: "Chief Investment Officer",
    company: "Metropolitan Capital",
    avatar: "SC"
  },
  {
    quote: "The tokenization process was seamless and the team's expertise in regulatory compliance gave us complete confidence in the platform.",
    author: "Michael Rodriguez",
    title: "Portfolio Manager",
    company: "Apex Investment Group",
    avatar: "MR"
  },
  {
    quote: "Finally, a platform that bridges traditional finance with blockchain innovation without compromising on security or regulatory standards.",
    author: "Dr. Emily Watson",
    title: "Head of Digital Assets",
    company: "Global Financial Services",
    avatar: "EW"
  }
];

const partners = [
  "KPMG", "Deloitte", "Coinbase", "Circle", "Chainlink", "ConsenSys"
];

export function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Partners */}
        <div className="text-center mb-16">
          <h3 className="text-lg font-semibold text-gray-900 mb-8">Trusted Partners</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {partners.map((partner, index) => (
              <div key={index} className="text-gray-500 font-semibold text-lg hover:text-gray-700 hover:scale-110 transition-all duration-300 ease-out cursor-pointer">
                {partner}
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Voices from Industry Leaders
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See what financial institutions and industry experts say about Real Magic
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="group border-0 shadow-lg hover:shadow-2xl hover:shadow-blue-100/20 hover:-translate-y-2 hover:scale-[1.02] transition-all duration-500 ease-out cursor-pointer overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-purple-50/0 group-hover:from-blue-50/30 group-hover:to-purple-50/30 transition-all duration-500 ease-out"></div>
                <CardContent className="p-8 space-y-6 relative z-10">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-1 text-yellow-400 group-hover:scale-110 transition-transform duration-300 ease-out">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 fill-current group-hover:rotate-12 transition-transform duration-300 ease-out" style={{transitionDelay: `${i * 50}ms`}} viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <blockquote className="text-gray-700 leading-relaxed italic group-hover:text-gray-800 transition-colors duration-300">
                      "{testimonial.quote}"
                    </blockquote>
                  </div>
                  
                  <div className="flex items-center space-x-4 pt-4 border-t border-gray-100 group-hover:border-gray-200 transition-colors duration-300">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-blue-500/30 transition-all duration-300 ease-out">
                      {testimonial.avatar}
                    </div>
                    <div className="group-hover:translate-x-1 transition-transform duration-300 ease-out">
                      <div className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">{testimonial.author}</div>
                      <div className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">{testimonial.title}</div>
                      <div className="text-sm text-gray-500 group-hover:text-gray-600 transition-colors duration-300">{testimonial.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}