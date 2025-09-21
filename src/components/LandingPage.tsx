import { ArrowRight, Users, Zap, Target } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Card } from './ui/card';

interface LandingPageProps {
  onGetStarted: () => void;
}

export function LandingPage({ onGetStarted }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white mb-6 leading-tight">
              Unlock Your Career. {' '}
              <span className="text-blue-400">Find Your Perfect Internship.</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0">
              InternBuzz creates your resume and recommends internships tailored to your skills and goals.
            </p>
            
            <button
              onClick={onGetStarted}
              className="group bg-blue-500 hover:bg-blue-400 text-white px-8 py-4 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 inline-flex items-center"
            >
              Get Started
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={20} />
            </button>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-400/20 blur-3xl rounded-full"></div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1519337364444-c5eeec430101?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwbGFwdG9wJTIwcmVzdW1lJTIwbWluaW1hbCUyMGlsbHVzdHJhdGlvbnxlbnwxfHx8fDE3NTc5NDY3MTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Student working on laptop"
                className="relative w-96 h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl text-white mb-4">
            Why Choose InternBuzz?
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We combine AI-powered resume building with personalized internship matching
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105">
            <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6">
              <Zap className="text-blue-400" size={24} />
            </div>
            <h3 className="text-white text-xl mb-4">Smart Resume Builder</h3>
            <p className="text-gray-400">
              AI-powered suggestions and real-time preview to create professional resumes in minutes.
            </p>
          </Card>
          
          <Card className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105">
            <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6">
              <Target className="text-blue-400" size={24} />
            </div>
            <h3 className="text-white text-xl mb-4">Personalized Matching</h3>
            <p className="text-gray-400">
              Get internship recommendations that match your skills, interests, and career goals perfectly.
            </p>
          </Card>
          
          <Card className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105">
            <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6">
              <Users className="text-blue-400" size={24} />
            </div>
            <h3 className="text-white text-xl mb-4">Student-Focused</h3>
            <p className="text-gray-400">
              Built specifically for students with templates and opportunities designed for early-career success.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
