import { useState } from 'react';
import { Sparkles, Languages, Code, Globe, Target, ArrowRight } from 'lucide-react';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';

interface InternshipDetailsFormProps {
  onFormSubmit: () => void;
}

interface FormData {
  major: string;
  skills: string;
  interests: string;
  preferredLocation: string;
  languages: string;
}

export function InternshipDetailsForm({ onFormSubmit }: InternshipDetailsFormProps) {
  const [formData, setFormData] = useState<FormData>({
    major: '',
    skills: '',
    interests: '',
    preferredLocation: '',
    languages: '',
  });

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    // You can add validation logic here before submitting
    onFormSubmit();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl text-white mb-4">
            Find Your Internship Matches
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Tell us more about your preferences and we'll find opportunities just for you.
          </p>
        </div>

        {/* Form Section */}
        <div className="space-y-6">
          <Card className="bg-gray-800/50 border-gray-700 p-6">
            <h2 className="text-white text-xl mb-4 flex items-center">
              <Sparkles className="mr-2 text-blue-400" size={20} />
              Your Interests & Skills
            </h2>
            <div className="space-y-4">
              <div>
                <Label className="text-gray-300">Major</Label>
                <Input
                  placeholder="e.g., Computer Science, Mechanical Engineering"
                  value={formData.major}
                  onChange={(e) => handleInputChange('major', e.target.value)}
                  className="bg-gray-900/50 border-gray-600 text-white placeholder-gray-400 focus:border-blue-400"
                />
              </div>
              <div>
                <Label className="text-gray-300">Skills</Label>
                <Textarea
                  placeholder="e.g., Python, JavaScript, Figma, Data Analysis..."
                  value={formData.skills}
                  onChange={(e) => handleInputChange('skills', e.target.value)}
                  className="bg-gray-900/50 border-gray-600 text-white placeholder-gray-400 focus:border-blue-400"
                />
              </div>
              <div>
                <Label className="text-gray-300">Interests</Label>
                <Textarea
                  placeholder="e.g., Web Development, Machine Learning, UI/UX Design..."
                  value={formData.interests}
                  onChange={(e) => handleInputChange('interests', e.target.value)}
                  className="bg-gray-900/50 border-gray-600 text-white placeholder-gray-400 focus:border-blue-400"
                />
              </div>
            </div>
          </Card>
          
          <Card className="bg-gray-800/50 border-gray-700 p-6">
            <h2 className="text-white text-xl mb-4 flex items-center">
              <Globe className="mr-2 text-blue-400" size={20} />
              Your Preferences
            </h2>
            <div className="space-y-4">
              <div>
                <Label className="text-gray-300">Preferred Location</Label>
                <Input
                  placeholder="e.g., Remote, New York, NY, San Francisco, CA"
                  value={formData.preferredLocation}
                  onChange={(e) => handleInputChange('preferredLocation', e.target.value)}
                  className="bg-gray-900/50 border-gray-600 text-white placeholder-gray-400 focus:border-blue-400"
                />
              </div>
              <div>
                <Label className="text-gray-300">Languages</Label>
                <Input
                  placeholder="e.g., English, Spanish, French"
                  value={formData.languages}
                  onChange={(e) => handleInputChange('languages', e.target.value)}
                  className="bg-gray-900/50 border-gray-600 text-white placeholder-gray-400 focus:border-blue-400"
                />
              </div>
            </div>
          </Card>

          <Button
            onClick={handleSubmit}
            className="w-full bg-blue-500 hover:bg-blue-400 text-white py-3 text-lg transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/25"
          >
            Find My Matches
            <ArrowRight className="ml-2" size={20} />
          </Button>
        </div>
      </div>
    </div>
  );
}