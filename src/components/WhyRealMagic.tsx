import { ImageWithFallback } from "./figma/ImageWithFallback";

const benefits = [
  {
    title: "Institutional-Grade Assets",
    description: "Access the same high-quality investments used by major financial institutions, now available through tokenization.",
    icon: "🏛️"
  },
  {
    title: "Fully Regulated",
    description: "Operating under strict regulatory oversight with full compliance across all jurisdictions and asset classes.",
    icon: "🛡️"
  },
  {
    title: "Transparent & Secure",
    description: "Blockchain-based transparency with bank-level security protocols protecting your investments 24/7.",
    icon: "🔒"
  },
  {
    title: "Experienced Team",
    description: "Led by veterans from Goldman Sachs, BlackRock, and top-tier blockchain companies with decades of combined experience.",
    icon: "👥"
  }
];

export function WhyRealMagic() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Why Choose Real Magic?
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                We bridge traditional finance and digital innovation with unmatched expertise and security.
              </p>
            </div>

            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center text-xl group-hover:shadow-lg transition-shadow">
                    {benefit.icon}
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg text-gray-900 group-hover:text-blue-600 transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <button className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors">
                Get Started Today
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1630487656049-6db93a53a7e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjB0ZWFtJTIwbWVldGluZ3xlbnwxfHx8fDE3NTY4Njk1NzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Corporate team meeting"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full opacity-60"></div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full opacity-60"></div>
          </div>
        </div>
      </div>
    </section>
  );
}