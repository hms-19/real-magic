import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

const products = [
  {
    name: "US Treasury Fund",
    yield: "4.2%",
    minimum: "$1,000",
    assetType: "Government Bond",
    description: "Diversified portfolio of US Treasury securities with institutional-grade liquidity.",
    risk: "Low"
  },
  {
    name: "Money Market Plus",
    yield: "3.8%",
    minimum: "$500",
    assetType: "Money Market",
    description: "High-yield money market fund with daily liquidity and capital preservation.",
    risk: "Very Low"
  },
  {
    name: "Corporate Bond Index",
    yield: "5.1%",
    minimum: "$2,500",
    assetType: "Corporate Bond",
    description: "Investment-grade corporate bonds from top-rated issuers globally.",
    risk: "Medium"
  },
  {
    name: "Real Estate Income",
    yield: "6.7%",
    minimum: "$5,000",
    assetType: "Real Estate",
    description: "Tokenized real estate investments with quarterly distributions.",
    risk: "Medium"
  }
];

export function Products() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Featured Tokenized Assets
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Access premium investment opportunities traditionally reserved for institutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <Card key={index} className="group hover:shadow-2xl hover:shadow-blue-100/50 hover:-translate-y-2 hover:scale-[1.02] transition-all duration-500 ease-out border-0 shadow-md cursor-pointer overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 via-blue-50/0 to-purple-50/0 group-hover:from-blue-50/30 group-hover:via-blue-50/20 group-hover:to-purple-50/30 transition-all duration-500 ease-out"></div>
              <CardHeader className="space-y-3 relative z-10">
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="text-xs group-hover:scale-105 transition-transform duration-300 ease-out">
                    {product.assetType}
                  </Badge>
                  <Badge 
                    variant={product.risk === 'Very Low' ? 'default' : product.risk === 'Low' ? 'secondary' : 'outline'}
                    className="text-xs group-hover:scale-105 transition-transform duration-300 ease-out"
                  >
                    {product.risk} Risk
                  </Badge>
                </div>
                <CardTitle className="text-lg group-hover:text-blue-600 transition-all duration-300 ease-out group-hover:scale-105 origin-left">
                  {product.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 relative z-10">
                <p className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {product.description}
                </p>
                
                <div className="space-y-2">
                  <div className="flex justify-between items-center group-hover:scale-105 transition-transform duration-300 ease-out">
                    <span className="text-sm text-gray-500">Yield</span>
                    <span className="font-semibold text-green-600 group-hover:text-green-500 transition-colors duration-300">{product.yield}</span>
                  </div>
                  <div className="flex justify-between items-center group-hover:scale-105 transition-transform duration-300 ease-out">
                    <span className="text-sm text-gray-500">Minimum</span>
                    <span className="font-semibold group-hover:text-gray-900 transition-colors duration-300">{product.minimum}</span>
                  </div>
                </div>

                <div className="pt-2">
                  <button className="w-full bg-blue-600 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/25 text-white py-2 px-4 rounded-lg transition-all duration-300 ease-out text-sm font-medium group-hover:scale-105 transform">
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