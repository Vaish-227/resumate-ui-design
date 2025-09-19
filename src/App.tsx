import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { LandingPage } from './components/LandingPage';
import { ProfileCreation } from './components/ProfileCreation';
import { ChoosePath } from './components/ChoosePath';
import { ResumeUpload } from './components/ResumeUpload';
import { ResumeBuilder } from './components/ResumeBuilder';
import { InternshipRecommendations } from './components/InternshipRecommendations';
import { AboutPage } from './components/AboutPage';

interface ProfileData {
  name: string;
  email: string;
}

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [profileData, setProfileData] = useState<ProfileData | null>(null);
  const [selectedPath, setSelectedPath] = useState<'upload' | 'build' | null>(null);

  const handleGetStarted = () => {
    setCurrentPage('profile-creation');
  };

  const handleProfileComplete = (data: ProfileData) => {
    setProfileData(data);
    setCurrentPage('choose-path');
  };

  const handlePathSelect = (path: 'upload' | 'build') => {
    setSelectedPath(path);
    if (path === 'upload') {
      setCurrentPage('resume-upload');
    } else {
      setCurrentPage('resume-builder');
    }
  };

  const handleResumeSubmit = () => {
    setCurrentPage('internships');
  };

  const handleUploadComplete = () => {
    setCurrentPage('internships');
  };

  // Navigation handler - reset flow for main nav items
  const handleNavigation = (page: string) => {
    if (page === 'home') {
      // Reset the flow when going back to home
      setProfileData(null);
      setSelectedPath(null);
    } else if (page === 'resume-builder' && !profileData) {
      // If trying to access resume builder directly without profile, start onboarding
      setCurrentPage('profile-creation');
      return;
    } else if (page === 'internships' && !profileData) {
      // If trying to access internships directly without profile, start onboarding
      setCurrentPage('profile-creation');
      return;
    }
    setCurrentPage(page);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <LandingPage onGetStarted={handleGetStarted} />;
      case 'profile-creation':
        return <ProfileCreation onContinue={handleProfileComplete} />;
      case 'choose-path':
        return profileData ? (
          <ChoosePath profileData={profileData} onPathSelect={handlePathSelect} />
        ) : (
          <ProfileCreation onContinue={handleProfileComplete} />
        );
      case 'resume-upload':
        return profileData ? (
          <ResumeUpload profileData={profileData} onUploadComplete={handleUploadComplete} />
        ) : (
          <ProfileCreation onContinue={handleProfileComplete} />
        );
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

  // Show navigation only for certain pages
  const showNavigation = !['profile-creation', 'choose-path', 'resume-upload'].includes(currentPage);

  return (
    <div className="min-h-screen bg-black text-white dark">
      {showNavigation && (
        <Navigation currentPage={currentPage} onPageChange={handleNavigation} />
      )}
      <main>{renderCurrentPage()}</main>
    </div>
  );
}