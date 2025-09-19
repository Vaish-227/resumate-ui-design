import { Upload, Edit, ArrowRight, FileText, Target } from 'lucide-react';
import { Card } from './ui/card';

interface ChoosePathProps {
  profileData: { name: string; email: string };
  onPathSelect: (path: 'upload' | 'build') => void;
}

export function ChoosePath({ profileData, onPathSelect }: ChoosePathProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl text-white mb-4">
            Hi {profileData.name}! Choose Your Path
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            How would you like to get started? We'll help you find the perfect internships either way.
          </p>
        </div>

        {/* Path Options */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Option A: Upload Resume */}
          <Card 
            className="bg-gray-800/50 border-gray-700 hover:border-blue-400/50 transition-all duration-300 cursor-pointer group hover:shadow-2xl hover:shadow-blue-500/10 transform hover:scale-105 p-8"
            onClick={() => onPathSelect('upload')}
          >
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-500/30 transition-colors duration-300">
                <Upload className="text-blue-400 group-hover:text-blue-300" size={36} />
              </div>
              
              <h2 className="text-white text-2xl mb-4 group-hover:text-blue-100 transition-colors duration-300">
                Upload Your Resume
              </h2>
              
              <p className="text-gray-400 mb-6 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                Already have a resume? Upload it and we'll analyze your skills and experience 
                to recommend the best internship opportunities for you.
              </p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center text-gray-300 justify-center">
                  <FileText size={16} className="mr-2 text-blue-400" />
                  <span className="text-sm">AI-powered resume analysis</span>
                </div>
                <div className="flex items-center text-gray-300 justify-center">
                  <Target size={16} className="mr-2 text-blue-400" />
                  <span className="text-sm">Instant internship matching</span>
                </div>
              </div>
              
              <div className="bg-blue-500 hover:bg-blue-400 text-white px-6 py-3 rounded-xl inline-flex items-center transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/25">
                Get Started
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={18} />
              </div>
            </div>
          </Card>

          {/* Option B: Build Resume */}
          <Card 
            className="bg-gray-800/50 border-gray-700 hover:border-blue-400/50 transition-all duration-300 cursor-pointer group hover:shadow-2xl hover:shadow-blue-500/10 transform hover:scale-105 p-8"
            onClick={() => onPathSelect('build')}
          >
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-500/30 transition-colors duration-300">
                <Edit className="text-blue-400 group-hover:text-blue-300" size={36} />
              </div>
              
              <h2 className="text-white text-2xl mb-4 group-hover:text-blue-100 transition-colors duration-300">
                Build Your Resume
              </h2>
              
              <p className="text-gray-400 mb-6 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                Don't have a resume yet? No problem! Fill in your details and we'll help you 
                create a professional resume while finding perfect internship matches.
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
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-12">
          <p className="text-gray-500">
            Don't worry, you can always switch between these options later
          </p>
        </div>
      </div>
    </div>
  );
}