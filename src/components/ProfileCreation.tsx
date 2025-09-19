import { useState } from 'react';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Button } from './ui/button';
import { ArrowRight, User } from 'lucide-react';

interface ProfileCreationProps {
  onContinue: (profileData: { name: string; email: string }) => void;
}

export function ProfileCreation({ onContinue }: ProfileCreationProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name.trim() && formData.email.trim()) {
      onContinue(formData);
    }
  };

  const isFormValid = formData.name.trim() && formData.email.trim();

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <User className="text-blue-400" size={36} />
          </div>
          <h1 className="text-3xl text-white mb-4">
            Welcome to Resumate
          </h1>
          <p className="text-gray-400">
            Let's start by getting to know you better
          </p>
        </div>

        {/* Profile Form */}
        <Card className="bg-gray-800/50 border-gray-700 p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label className="text-gray-300">Full Name</Label>
              <Input
                type="text"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                className="bg-gray-900/50 border-gray-600 text-white placeholder-gray-400 focus:border-blue-400 mt-2"
                required
              />
            </div>

            <div>
              <Label className="text-gray-300">Email Address</Label>
              <Input
                type="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                className="bg-gray-900/50 border-gray-600 text-white placeholder-gray-400 focus:border-blue-400 mt-2"
                required
              />
            </div>

            <Button
              type="submit"
              disabled={!isFormValid}
              className="w-full bg-blue-500 hover:bg-blue-400 disabled:bg-gray-600 disabled:cursor-not-allowed text-white py-3 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/25 group"
            >
              Continue
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={18} />
            </Button>
          </form>
        </Card>

        <div className="text-center mt-6">
          <p className="text-gray-500 text-sm">
            We'll use this information to personalize your experience
          </p>
        </div>
      </div>
    </div>
  );
}