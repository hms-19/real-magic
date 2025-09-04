import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Where Real Finance Meets the
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  {" "}Open Economy
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Transform traditional assets into digital opportunities. Access institutional-grade investments through our secure, regulated platform.
              </p>
            </div>

            {/* Partner Logos */}
            <div className="space-y-4">
              <p className="text-sm text-gray-500 uppercase tracking-wide">Trusted by leading institutions</p>
              <div className="flex items-center space-x-8 opacity-60">
                <div className="text-gray-400 font-semibold hover:text-gray-600 hover:scale-110 transition-all duration-300 ease-out cursor-pointer">Goldman Sachs</div>
                <div className="text-gray-400 font-semibold hover:text-gray-600 hover:scale-110 transition-all duration-300 ease-out cursor-pointer">JPMorgan</div>
                <div className="text-gray-400 font-semibold hover:text-gray-600 hover:scale-110 transition-all duration-300 ease-out cursor-pointer">BlackRock</div>
                <div className="text-gray-400 font-semibold hover:text-gray-600 hover:scale-110 transition-all duration-300 ease-out cursor-pointer">Vanguard</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group bg-blue-600 hover:bg-blue-700 hover:shadow-2xl hover:shadow-blue-500/40 hover:scale-105 text-white px-8 py-6 text-lg transition-all duration-300 ease-out transform">
                <span className="group-hover:scale-105 transition-transform duration-300 ease-out">Start Investing</span>
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 ease-out" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
              <Button size="lg" variant="outline" className="group border-blue-600 text-blue-600 hover:bg-blue-50 hover:border-blue-700 hover:shadow-lg hover:shadow-blue-500/20 hover:scale-105 px-8 py-6 text-lg transition-all duration-300 ease-out transform">
                <span className="group-hover:scale-105 transition-transform duration-300 ease-out">Book a Call</span>
                <svg className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform duration-300 ease-out" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative group">
            <div className="relative z-10">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1535448674466-81707cbfe0f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGhhbmRzaGFrZSUyMHBhcnRuZXJzaGlwfGVufDF8fHx8MTc1Njg2MDc4NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Modern finance technology"
                className="w-full h-auto rounded-2xl shadow-2xl group-hover:shadow-3xl group-hover:scale-105 transition-all duration-500 ease-out cursor-pointer"
                loading="eager"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-100 rounded-full opacity-50 group-hover:opacity-70 group-hover:scale-125 group-hover:-translate-y-2 group-hover:translate-x-2 transition-all duration-500 ease-out"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-100 rounded-full opacity-50 group-hover:opacity-70 group-hover:scale-125 group-hover:translate-y-2 group-hover:-translate-x-2 transition-all duration-500 ease-out"></div>
          </div>
        </div>
      </div>
    </section>
  );
}