import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const solutions = [
  {
    title: "Tokenize",
    description: "Transform traditional assets into digital tokens with full regulatory compliance and institutional-grade security.",
    features: [
      "Asset Digitization",
      "Regulatory Compliance",
      "Smart Contract Integration",
      "Fractional Ownership"
    ],
    icon: "🔄"
  },
  {
    title: "Invest",
    description: "Access premium investment opportunities with lower minimums and enhanced liquidity through our tokenized platform.",
    features: [
      "Diversified Portfolios",
      "Lower Entry Points",
      "24/7 Trading",
      "Real-time Analytics"
    ],
    icon: "📈"
  },
  {
    title: "Advise",
    description: "Get expert guidance from our team of financial professionals to optimize your tokenized asset portfolio.",
    features: [
      "Portfolio Optimization",
      "Risk Management",
      "Market Insights",
      "Personalized Strategy"
    ],
    icon: "🎯"
  }
];

export function Solutions() {
  return (
    <section id="solutions" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Complete Solutions for Modern Finance
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From asset tokenization to investment management, we provide end-to-end solutions for the digital economy
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <Card key={index} className="group hover:shadow-2xl hover:shadow-blue-100/30 hover:-translate-y-3 hover:scale-[1.02] transition-all duration-500 ease-out border-0 shadow-lg cursor-pointer overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 via-transparent to-purple-50/0 group-hover:from-blue-50/40 group-hover:to-purple-50/40 transition-all duration-500 ease-out"></div>
              <CardHeader className="space-y-4 text-center relative z-10">
                <div className="mx-auto w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center text-2xl group-hover:scale-125 group-hover:rotate-6 group-hover:from-blue-200 group-hover:to-purple-200 transition-all duration-500 ease-out shadow-md group-hover:shadow-lg">
                  {solution.icon}
                </div>
                <CardTitle className="text-2xl group-hover:text-blue-600 transition-all duration-300 ease-out group-hover:scale-105">
                  {solution.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 relative z-10">
                <p className="text-gray-600 leading-relaxed text-center group-hover:text-gray-700 transition-colors duration-300">
                  {solution.description}
                </p>
                
                <div className="space-y-3">
                  {solution.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3 group-hover:translate-x-1 transition-transform duration-300 ease-out" style={{transitionDelay: `${featureIndex * 50}ms`}}>
                      <div className="w-2 h-2 bg-blue-600 rounded-full group-hover:scale-150 group-hover:bg-blue-500 transition-all duration-300 ease-out"></div>
                      <span className="text-sm text-gray-700 group-hover:text-gray-900 transition-colors duration-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <button className="w-full border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white hover:shadow-lg hover:shadow-blue-500/25 py-3 px-4 rounded-lg transition-all duration-300 ease-out font-medium group-hover:scale-105 transform">
                    Learn More
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}