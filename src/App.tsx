import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { LandingPage } from './components/LandingPage';
import { ChoosePath } from './components/ChoosePath';
//import { ResumeUpload } from './components/ResumeUpload';
import { ResumeBuilder } from './components/ResumeBuilder';
import { InternshipRecommendations } from './components/InternshipRecommendations';
import { AboutPage } from './components/AboutPage';
import { InternshipDetailsForm } from './components/InternshipDetailsForm';

interface ProfileData {
  name: string;
  email: string;
}

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [profileData, setProfileData] = useState<ProfileData>({ name: "Student", email: "student@example.com" });
  const [selectedPath, setSelectedPath] = useState<'upload' | 'build' | null>(null);

  const handleGetStarted = () => {
    setCurrentPage('choose-path');
  };

  const handlePathSelect = (path: 'upload' | 'build') => {
    setSelectedPath(path);
    if (path === 'upload') {
      setCurrentPage('internship-details-form');
    } else {
      setCurrentPage('resume-builder');
    }
  };

  const handleInternshipFormSubmit = () => {
    setCurrentPage('internships');
  };

  const handleResumeSubmit = () => {
    setCurrentPage('internships');
  };

  const handleUploadComplete = () => {
    setCurrentPage('internships');
  };

  const handleNavigation = (page: string) => {
    if (page === 'internships') {
      setCurrentPage('internship-details-form');
    } else {
      setCurrentPage(page);
    }
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <LandingPage onGetStarted={handleGetStarted} />;
      case 'choose-path':
        return profileData ? (
          <ChoosePath profileData={profileData} onPathSelect={handlePathSelect} />
        ) : (
          <LandingPage onGetStarted={handleGetStarted} />
        );
      case 'internship-details-form':
        return <InternshipDetailsForm onFormSubmit={handleInternshipFormSubmit} />;
      
      case 'resume-builder':
        return <ResumeBuilder onSubmit={handleResumeSubmit} />;
      case 'internships':
        return <InternshipRecommendations />;
      case 'about':
        return <AboutPage />;
      default:
        return <LandingPage onGetStarted={handleGetStarted} />;
    }
  };

  const showNavigation = !['choose-path', 'internship-details-form'].includes(currentPage);

  return (
    <div className="min-h-screen bg-black text-white dark">
      {showNavigation && (
        <Navigation currentPage={currentPage} onPageChange={handleNavigation} />
      )}
      <main>{renderCurrentPage()}</main>
    </div>
  );
}

