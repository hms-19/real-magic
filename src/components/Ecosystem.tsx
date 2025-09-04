import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Ecosystem() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative z-10">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1744782211816-c5224434614f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBjaGFydHMlMjBkYXRhfGVufDF8fHx8MTc1NjgzMTg2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Financial charts and data visualization"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full backdrop-blur-sm"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-white/10 rounded-full backdrop-blur-sm"></div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
                Building the Future of Finance, Together
              </h2>
              <p className="text-xl text-blue-100 leading-relaxed">
                Our ecosystem connects traditional financial institutions with innovative blockchain technology, creating unprecedented opportunities for growth and innovation.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm">
                  🌐
                </div>
                <h3 className="font-semibold text-lg">Global Network</h3>
                <p className="text-blue-100 text-sm leading-relaxed">
                  Connected to financial institutions across 40+ countries
                </p>
              </div>

              <div className="space-y-3">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm">
                  💡
                </div>
                <h3 className="font-semibold text-lg">Innovation Hub</h3>
                <p className="text-blue-100 text-sm leading-relaxed">
                  Pioneering next-generation financial products and services
                </p>
              </div>

              <div className="space-y-3">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm">
                  🤝
                </div>
                <h3 className="font-semibold text-lg">Partnership Focus</h3>
                <p className="text-blue-100 text-sm leading-relaxed">
                  Collaborative approach with traditional and digital finance leaders
                </p>
              </div>

              <div className="space-y-3">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm">
                  🚀
                </div>
                <h3 className="font-semibold text-lg">Future Ready</h3>
                <p className="text-blue-100 text-sm leading-relaxed">
                  Built for the next decade of financial innovation
                </p>
              </div>
            </div>

            <div className="pt-6">
              <button className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors">
                Join Our Ecosystem
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}