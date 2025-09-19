import { Users, Target, Zap, Heart, Award, Briefcase } from 'lucide-react';
import { Card } from './ui/card';

export function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl text-white mb-6">
            About Resumate
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            We're on  a mission to help students bridge the gap between education and their dream careers. 
            Resumate combines AI-powered resume building with personalized internship matching to give 
            students the best chance at landing their ideal opportunities.
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <Card className="bg-gray-800/50 border-gray-700 p-8">
            <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6">
              <Target className="text-blue-400" size={24} />
            </div>
            <h2 className="text-white text-2xl mb-4">Our Mission</h2>
            <p className="text-gray-300 leading-relaxed">
              To democratize career opportunities for students by providing intelligent tools that 
              create professional resumes and connect them with internships that match their unique 
              skills and aspirations.
            </p>
          </Card>

          <Card className="bg-gray-800/50 border-gray-700 p-8">
            <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6">
              <Heart className="text-blue-400" size={24} />
            </div>
            <h2 className="text-white text-2xl mb-4">Our Values</h2>
            <p className="text-gray-300 leading-relaxed">
              We believe every student deserves equal access to career opportunities. Our platform 
              is built with inclusivity, innovation, and student success at its core, ensuring 
              that talent is recognized regardless of background.
            </p>
          </Card>
        </div>

        {/* How It Works */}
        <div className="mb-16">
          <h2 className="text-white text-3xl text-center mb-12">How Resumate Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="text-blue-400" size={28} />
              </div>
              <h3 className="text-white text-xl mb-4">1. Build Your Profile</h3>
              <p className="text-gray-400">
                Enter your education, skills, and career goals. Our AI analyzes your information 
                to create a professional resume.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="text-blue-400" size={28} />
              </div>
              <h3 className="text-white text-xl mb-4">2. Get Matched</h3>
              <p className="text-gray-400">
                Our intelligent algorithm analyzes thousands of internship opportunities 
                to find the perfect matches for your profile.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Briefcase className="text-blue-400" size={28} />
              </div>
              <h3 className="text-white text-xl mb-4">3. Apply & Succeed</h3>
              <p className="text-gray-400">
                Apply to internships with confidence using your professionally crafted resume 
                and personalized recommendations.
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <Card className="bg-gray-800/50 border-gray-700 p-8 mb-16">
          <h2 className="text-white text-2xl text-center mb-8">Making a Difference</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl text-blue-400 mb-2">10K+</div>
              <div className="text-gray-300">Resumes Created</div>
            </div>
            <div>
              <div className="text-3xl text-blue-400 mb-2">5K+</div>
              <div className="text-gray-300">Students Helped</div>
            </div>
            <div>
              <div className="text-3xl text-blue-400 mb-2">500+</div>
              <div className="text-gray-300">Partner Companies</div>
            </div>
            <div>
              <div className="text-3xl text-blue-400 mb-2">85%</div>
              <div className="text-gray-300">Success Rate</div>
            </div>
          </div>
        </Card>

        {/* Team */}
        <div className="text-center">
          <h2 className="text-white text-3xl mb-6">Built for Students, by Students</h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Resumate was founded by a team of students who experienced firsthand the challenges 
            of breaking into competitive internship markets. We understand the struggle of crafting 
            the perfect resume and finding opportunities that truly match your skills and interests.
          </p>
          <div className="mt-8">
            <div className="inline-flex items-center text-blue-400 bg-blue-400/10 px-6 py-3 rounded-full">
              <Award className="mr-2" size={20} />
              <span>Winner - Best Student Innovation Award 2024</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}