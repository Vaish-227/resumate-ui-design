import { useState } from 'react';

import { Card } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { Sparkles } from 'lucide-react';

interface ResumeBuilderProps {
  onSubmit: () => void;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  location: string;
  preferredLocation: string;
  education: string;
  university: string;
  graduationYear: string;
  skills: string;
  experience: string;
  languages: string;
}

export function ResumeBuilder({ onSubmit }: ResumeBuilderProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    location: '',
    preferredLocation: '',
    education: '',
    university: '',
    graduationYear: '',
    skills: '',
    experience: '',
    languages: '',
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
            Tell Us About Yourself to Find the Perfect Internship
          </h1>
          <p className="text-gray-400 text-lg">
            Your details will be used to generate your resume and match you with great opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-8">
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
                      placeholder="+91 12345-67890"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="bg-gray-900/50 border-gray-600 text-white placeholder-gray-400 focus:border-blue-400"
                    />
                  </div>
                </div>

                <div>
                  <Label className="text-gray-300">Location</Label>
                  <Input
                    placeholder="Enter your city, state"
                    value={formData.location}
                    onChange={(e) => handleInputChange('location', e.target.value)}
                    className="bg-gray-900/50 border-gray-600 text-white placeholder-gray-400 focus:border-blue-400"
                  />
                </div>
              </div>
              <div>
                <Label className="text-gray-300">Preferred Location</Label>
                <Input
                  placeholder='Enter your preferred city or state'
                  value={formData.preferredLocation}
                  onChange={(e) => handleInputChange('preferredLocation', e.target.value)}
                  className="bg-gray-900/50 border-gray-600 text-white placeholder-gray-400 focus:border-blue-400"
                />
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
                  <Label className="text-gray-300">Skills</Label>
                  <Textarea
                    placeholder="e.g., MS office, advanced excel..."
                    value={formData.skills}
                    onChange={(e) => handleInputChange('skills', e.target.value)}
                    className="bg-gray-900/50 border-gray-600 text-white placeholder-gray-400 focus:border-blue-400 min-h-[80px]"
                  />
                </div>
                <div>
                  <Label className="text-gray-300">Experience</Label>
                  <Textarea
                    placeholder="e.g., Past 2 years..."
                    value={formData.experience}
                    onChange={(e) => handleInputChange('experience', e.target.value)}
                    className="bg-gray-900/50 border-gray-600 text-white placeholder-gray-400 focus:border-blue-400 min-h-[60px]"
                  />
                </div>
                <div>
                  <Label className="text-gray-300">Languages</Label>
                  <Textarea
                    placeholder="e.g., English , Hindi , Marathi..."
                    value={formData.languages}
                    onChange={(e) => handleInputChange('languages', e.target.value)}
                    className="bg-gray-900/50 border-gray-600 text-white placeholder-gray-400 focus:border-blue-400 min-h-[60px]"
                  />
                </div>
              </div>
            </Card>

            {/* ✅ Download Resume Button Only */}
            <Button
              onClick={() => {
                const element = document.createElement("a");
                const file = new Blob(
                  [
                    `Resume\n
Name: ${formData.name}\n
Email: ${formData.email}\n
Phone: ${formData.phone}\n
Location: ${formData.location}\n
Preferred Location: ${formData.preferredLocation}\n
Education: ${formData.education}\n
University: ${formData.university}\n
Graduation Year: ${formData.graduationYear}\n
Skills: ${formData.skills}\n
Experience: ${formData.experience}\n
Languages: ${formData.languages}\n
                    `,
                  ],
                  { type: "text/plain" }
                );
                element.href = URL.createObjectURL(file);
                element.download = "resume.txt";
                document.body.appendChild(element);
                element.click();
              }}
              className="w-full mt-3 bg-green-500 hover:bg-green-400 text-white py-3 text-lg transition-all duration-300 hover:shadow-xl hover:shadow-green-500/25"
            >
              Download My Resume
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
