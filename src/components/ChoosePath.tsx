import { Edit, ArrowRight, FileText, Target, Search } from 'lucide-react';
import { Card } from './ui/card';

interface ChoosePathProps {
  profileData: { name: string; email: string };
  onPathSelect: (path: 'build' | 'upload') => void;
}

export function ChoosePath({ profileData, onPathSelect }: ChoosePathProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl text-white mb-4">
            Hi {profileData.name}! Let's Find Your Dream Internship.
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Fill in your details and we'll help you create a professional resume 
            while finding the perfect internship matches.
          </p>
        </div>

        {/* Choices */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Option 1: Build Resume First */}
          <Card 
            className="bg-gray-800/50 border-gray-700 hover:border-blue-400/50 transition-all duration-300 cursor-pointer group hover:shadow-2xl hover:shadow-blue-500/10 transform hover:scale-105 p-8"
            onClick={() => onPathSelect('build')}
          >
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-500/30 transition-colors duration-300">
                <Edit className="text-blue-400 group-hover:text-blue-300" size={36} />
              </div>
              
              <h2 className="text-white text-2xl mb-4 group-hover:text-blue-100 transition-colors duration-300">
                Build My Resume
              </h2>
              
              <p className="text-gray-400 mb-6 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                Start by creating a professional resume from scratch with our smart builder.
              </p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center text-gray-300 justify-center">
                  <FileText size={16} className="mr-2 text-blue-400" />
                  <span className="text-sm">Professional resume builder</span>
                </div>
                <div className="flex items-center text-gray-300 justify-center">
                  <Target size={16} className="mr-2 text-blue-400" />
                  <span className="text-sm">Personalized recommendations</span>
                </div>
              </div>
              
              <div className="bg-blue-500 hover:bg-blue-400 text-white px-6 py-3 rounded-xl inline-flex items-center transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/25">
                Get Started
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={18} />
              </div>
            </div>
          </Card>

          {/* Option 2: Find Internships Directly */}
          <Card 
            className="bg-gray-800/50 border-gray-700 hover:border-blue-400/50 transition-all duration-300 cursor-pointer group hover:shadow-2xl hover:shadow-blue-500/10 transform hover:scale-105 p-8"
            onClick={() => onPathSelect('upload')}
          >
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-500/30 transition-colors duration-300">
                <Search className="text-blue-400 group-hover:text-blue-300" size={36} />
              </div>
              
              <h2 className="text-white text-2xl mb-4 group-hover:text-blue-100 transition-colors duration-300">
                Find Internships Now
              </h2>
              
              <p className="text-gray-400 mb-6 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                 Enter details and we'll find internship matches for you instantly.
              </p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center text-gray-300 justify-center">
                  <FileText size={16} className="mr-2 text-blue-400" />
                  <span className="text-sm">Enter your details</span>
                </div>
                <div className="flex items-center text-gray-300 justify-center">
                  <Target size={16} className="mr-2 text-blue-400" />
                  <span className="text-sm">Get instant recommendations</span>
                </div>
              </div>
              
              <div className="bg-blue-500 hover:bg-blue-400 text-white px-6 py-3 rounded-xl inline-flex items-center transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/25">
                Search
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={18} />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}