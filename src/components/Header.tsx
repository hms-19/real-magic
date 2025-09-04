import { Button } from "./ui/button";

export function Header() {
  return (
    <header className="w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center">
              <img 
                src={'/logo.png'} 
                alt="Real Magic" 
                className="h-8 w-auto hover:scale-105 transition-transform duration-300 ease-out cursor-pointer"
              />
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#solutions" className="text-gray-600 hover:text-gray-900 transition-colors">
              Solutions
            </a>
            <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">
              About
            </a>
            <a href="#insights" className="text-gray-600 hover:text-gray-900 transition-colors">
              Insights
            </a>
            <a href="#capitalx" className="text-gray-600 hover:text-gray-900 transition-colors">
              CapitalX
            </a>
          </nav>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="hidden sm:inline-flex">
              Log In
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}