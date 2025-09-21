import { ExternalLink, MapPin, Clock, Star } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

const mockInternships = [
  {
    id: 1,
    title: "Software Engineering Intern",
    company: "TechCorp",
    location: "San Francisco, CA",
    type: "Remote",
    keywords: ["JavaScript", "React", "Node.js"],
    description: "Join our engineering team to build scalable web applications and gain hands-on experience with modern technologies.",
    matchScore: 95
  },
  {
    id: 2,
    title: "Data Science Intern",
    company: "DataFlow Analytics",
    location: "New York, NY",
    type: "Hybrid",
    keywords: ["Python", "Machine Learning", "SQL"],
    description: "Work with our data science team to analyze large datasets and build predictive models for business insights.",
    matchScore: 88
  },
  {
    id: 3,
    title: "Frontend Developer Intern",
    company: "DesignLab",
    location: "Austin, TX",
    type: "On-site",
    keywords: ["React", "TypeScript", "UI/UX"],
    description: "Create beautiful and responsive user interfaces while collaborating with our design and product teams.",
    matchScore: 92
  },
  {
    id: 4,
    title: "Mobile App Development Intern",
    company: "AppVenture",
    location: "Seattle, WA",
    type: "Remote",
    keywords: ["React Native", "iOS", "Android"],
    description: "Develop cross-platform mobile applications and contribute to our growing suite of consumer apps.",
    matchScore: 85
  },
  {
    id: 5,
    title: "Cloud Engineering Intern",
    company: "CloudFirst Solutions",
    location: "Denver, CO",
    type: "Hybrid",
    keywords: ["AWS", "DevOps", "Docker"],
    description: "Learn cloud infrastructure and deployment practices while working on enterprise-scale applications.",
    matchScore: 78
  }
];

export function InternshipRecommendations() {
  const handleApplyNow = (internship: typeof mockInternships[0]) => {
    // A custom alert box should be used instead of the native `alert()`
    // For now, we will log the action to the console.
    console.log(`Applying for ${internship.title} at ${internship.company}!`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl text-white mb-4">
            Your Personalized Internship Recommendations
          </h1>
          <p className="text-gray-400 text-lg">
            Based on your skills and interests, here are the top matches for you
          </p>
        </div>

        {/* Results Summary */}
        <div className="bg-gray-800/50 rounded-2xl border border-gray-700 p-6 mb-8">
          <div className="grid md:grid-cols-1 gap-6 text-center">
            <div>
              
              <div className="text-gray-300">Here are your top 5 internship recommendations</div>
            </div>
          </div>
        </div>

        {/* Internship Cards */}
        <div className="grid gap-6">
          {mockInternships.map((internship) => (
            <Card key={internship.id} className="bg-gray-800/50 border-gray-700 hover:border-blue-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 transform hover:scale-[1.02]">
              <div className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4">
                  <div className="mb-4 lg:mb-0">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl text-white">{internship.title}</h3>
                      <div className="flex items-center text-blue-400 bg-blue-400/10 px-2 py-1 rounded-full">
                        <Star size={14} className="mr-1" />
                        <span className="text-sm">{internship.matchScore}% match</span>
                      </div>
                    </div>
                    <p className="text-gray-300 text-lg">{internship.company}</p>
                    <div className="flex items-center text-gray-400 mt-1">
                      <MapPin size={16} className="mr-1" />
                      <span className="mr-4">{internship.location}</span>
                      <Clock size={16} className="mr-1" />
                      <span>{internship.type}</span>
                    </div>
                  </div>
                  
                  <Button 
                    onClick={() => handleApplyNow(internship)}
                    className="bg-blue-500 hover:bg-blue-400 text-white transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
                  >
                    Apply Now
                    <ExternalLink size={16} className="ml-2" />
                  </Button>
                </div>

                <p className="text-gray-300 mb-4 leading-relaxed">
                  {internship.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {internship.keywords.map((keyword, index) => (
                    <Badge 
                      key={index} 
                      variant="secondary"
                      className="bg-blue-500/10 text-blue-400 border border-blue-400/20 hover:bg-blue-500/20 transition-colors duration-200"
                    >
                      {keyword}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Load More Section */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            className="bg-transparent border-gray-600 text-gray-300 hover:bg-gray-800/50 hover:border-blue-400/50 hover:text-blue-400 transition-all duration-300"
          >
            Load More Recommendations
          </Button>
        </div>
      </div>
    </div>
  );
}