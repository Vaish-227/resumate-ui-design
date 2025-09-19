import { useState } from 'react';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { Eye, Sparkles } from 'lucide-react';

interface ResumeBuilderProps {
  onSubmit: () => void;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  education: string;
  university: string;
  graduationYear: string;
  skills: string;
  certifications: string;
  interests: string;
  goals: string;
}

export function ResumeBuilder({ onSubmit }: ResumeBuilderProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    education: '',
    university: '',
    graduationYear: '',
    skills: '',
    certifications: '',
    interests: '',
    goals: ''
  });

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    onSubmit();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl text-white mb-4">
            Build Your Perfect Resume
          </h1>
          <p className="text-gray-400 text-lg">
            Fill in your details and watch your resume come to life
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Form Section */}
          <div className="space-y-6">
            <Card className="bg-gray-800/50 border-gray-700 p-6">
              <h2 className="text-white text-xl mb-4 flex items-center">
                <Sparkles className="mr-2 text-blue-400" size={20} />
                Personal Information
              </h2>
              <div className="space-y-4">
                <div>
                  <Label className="text-gray-300">Full Name</Label>
                  <Input
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="bg-gray-900/50 border-gray-600 text-white placeholder-gray-400 focus:border-blue-400"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label className="text-gray-300">Email</Label>
                    <Input
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="bg-gray-900/50 border-gray-600 text-white placeholder-gray-400 focus:border-blue-400"
                    />
                  </div>
                  <div>
                    <Label className="text-gray-300">Phone</Label>
                    <Input
                      placeholder="(555) 123-4567"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="bg-gray-900/50 border-gray-600 text-white placeholder-gray-400 focus:border-blue-400"
                    />
                  </div>
                </div>
              </div>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700 p-6">
              <h2 className="text-white text-xl mb-4">Education</h2>
              <div className="space-y-4">
                <div>
                  <Label className="text-gray-300">Degree</Label>
                  <Input
                    placeholder="e.g., Bachelor of Science in Computer Science"
                    value={formData.education}
                    onChange={(e) => handleInputChange('education', e.target.value)}
                    className="bg-gray-900/50 border-gray-600 text-white placeholder-gray-400 focus:border-blue-400"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label className="text-gray-300">University</Label>
                    <Input
                      placeholder="University Name"
                      value={formData.university}
                      onChange={(e) => handleInputChange('university', e.target.value)}
                      className="bg-gray-900/50 border-gray-600 text-white placeholder-gray-400 focus:border-blue-400"
                    />
                  </div>
                  <div>
                    <Label className="text-gray-300">Graduation Year</Label>
                    <Input
                      placeholder="2025"
                      value={formData.graduationYear}
                      onChange={(e) => handleInputChange('graduationYear', e.target.value)}
                      className="bg-gray-900/50 border-gray-600 text-white placeholder-gray-400 focus:border-blue-400"
                    />
                  </div>
                </div>
              </div>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700 p-6">
              <h2 className="text-white text-xl mb-4">Skills & Experience</h2>
              <div className="space-y-4">
                <div>
                  <Label className="text-gray-300">Technical Skills</Label>
                  <Textarea
                    placeholder="e.g., Python, JavaScript, React, SQL, Machine Learning..."
                    value={formData.skills}
                    onChange={(e) => handleInputChange('skills', e.target.value)}
                    className="bg-gray-900/50 border-gray-600 text-white placeholder-gray-400 focus:border-blue-400 min-h-[80px]"
                  />
                </div>
                <div>
                  <Label className="text-gray-300">Certifications</Label>
                  <Textarea
                    placeholder="e.g., AWS Certified Cloud Practitioner, Google Data Analytics Certificate..."
                    value={formData.certifications}
                    onChange={(e) => handleInputChange('certifications', e.target.value)}
                    className="bg-gray-900/50 border-gray-600 text-white placeholder-gray-400 focus:border-blue-400 min-h-[60px]"
                  />
                </div>
              </div>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700 p-6">
              <h2 className="text-white text-xl mb-4">Interests & Goals</h2>
              <div className="space-y-4">
                <div>
                  <Label className="text-gray-300">Interests</Label>
                  <Textarea
                    placeholder="e.g., Web Development, Data Science, Mobile Apps, AI/ML..."
                    value={formData.interests}
                    onChange={(e) => handleInputChange('interests', e.target.value)}
                    className="bg-gray-900/50 border-gray-600 text-white placeholder-gray-400 focus:border-blue-400 min-h-[60px]"
                  />
                </div>
                <div>
                  <Label className="text-gray-300">Career Goals</Label>
                  <Textarea
                    placeholder="e.g., Looking for software engineering internships to gain hands-on experience..."
                    value={formData.goals}
                    onChange={(e) => handleInputChange('goals', e.target.value)}
                    className="bg-gray-900/50 border-gray-600 text-white placeholder-gray-400 focus:border-blue-400 min-h-[80px]"
                  />
                </div>
              </div>
            </Card>

            <Button
              onClick={handleSubmit}
              className="w-full bg-blue-500 hover:bg-blue-400 text-white py-3 text-lg transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/25"
            >
              Generate Resume & Suggestions
            </Button>
          </div>

          {/* Live Preview Section */}
          <div className="lg:sticky lg:top-24">
            <Card className="bg-black border-gray-700 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-white text-xl">Live Preview</h2>
                <Eye className="text-blue-400" size={20} />
              </div>
              
              <div className="bg-white rounded-lg p-6 text-black min-h-[600px] shadow-2xl">
                <div className="border-b-2 border-gray-200 pb-4 mb-4">
                  <h1 className="text-2xl font-bold text-gray-800">
                    {formData.name || 'Your Name'}
                  </h1>
                  <div className="text-gray-600 mt-2">
                    {formData.email && <div>{formData.email}</div>}
                    {formData.phone && <div>{formData.phone}</div>}
                  </div>
                </div>

                {(formData.education || formData.university) && (
                  <div className="mb-4">
                    <h2 className="text-lg font-semibold text-gray-800 mb-2">Education</h2>
                    <div className="text-gray-700">
                      {formData.education && <div className="font-medium">{formData.education}</div>}
                      {formData.university && (
                        <div>
                          {formData.university}
                          {formData.graduationYear && ` • Class of ${formData.graduationYear}`}
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {formData.skills && (
                  <div className="mb-4">
                    <h2 className="text-lg font-semibold text-gray-800 mb-2">Skills</h2>
                    <div className="text-gray-700">{formData.skills}</div>
                  </div>
                )}

                {formData.certifications && (
                  <div className="mb-4">
                    <h2 className="text-lg font-semibold text-gray-800 mb-2">Certifications</h2>
                    <div className="text-gray-700">{formData.certifications}</div>
                  </div>
                )}

                {formData.interests && (
                  <div className="mb-4">
                    <h2 className="text-lg font-semibold text-gray-800 mb-2">Interests</h2>
                    <div className="text-gray-700">{formData.interests}</div>
                  </div>
                )}

                {formData.goals && (
                  <div>
                    <h2 className="text-lg font-semibold text-gray-800 mb-2">Career Goals</h2>
                    <div className="text-gray-700">{formData.goals}</div>
                  </div>
                )}

                {!formData.name && !formData.email && !formData.education && (
                  <div className="text-center text-gray-400 mt-20">
                    <Eye className="mx-auto mb-4 opacity-50" size={48} />
                    <p>Start filling out the form to see your resume preview</p>
                  </div>
                )}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}