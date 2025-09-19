import { useState, useRef } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Upload, FileText, Check, AlertCircle } from 'lucide-react';

interface ResumeUploadProps {
  profileData: { name: string; email: string };
  onUploadComplete: () => void;
}

export function ResumeUpload({ profileData, onUploadComplete }: ResumeUploadProps) {
  const [uploadStatus, setUploadStatus] = useState<'idle' | 'uploading' | 'success' | 'error'>('idle');
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedFile(file);
      handleUpload(file);
    }
  };

  const handleUpload = async (file: File) => {
    setUploadStatus('uploading');
    
    // Simulate upload process
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Simulate success (in real app, you'd handle actual upload)
    setUploadStatus('success');
  };

  const handleAnalyzeResume = () => {
    onUploadComplete();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl text-white mb-4">
            Upload Your Resume
          </h1>
          <p className="text-gray-400 text-lg">
            Upload your resume and we'll analyze it to find the best internship matches
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Upload Section */}
          <Card className="bg-gray-800/50 border-gray-700 p-8">
            <h2 className="text-white text-xl mb-6">Select Your Resume</h2>
            
            {uploadStatus === 'idle' || uploadStatus === 'error' ? (
              <div
                className="border-2 border-dashed border-gray-600 hover:border-blue-400 rounded-xl p-12 text-center cursor-pointer transition-all duration-300 group"
                onClick={() => fileInputRef.current?.click()}
              >
                <Upload className="text-gray-400 group-hover:text-blue-400 mx-auto mb-4 transition-colors duration-300" size={48} />
                <p className="text-gray-300 mb-2">Click to upload your resume</p>
                <p className="text-gray-500 text-sm">PDF, DOC, or DOCX files accepted</p>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileSelect}
                  className="hidden"
                />
              </div>
            ) : uploadStatus === 'uploading' ? (
              <div className="text-center p-12">
                <div className="w-16 h-16 border-4 border-blue-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-white mb-2">Analyzing your resume...</p>
                <p className="text-gray-400 text-sm">This may take a few moments</p>
              </div>
            ) : (
              <div className="text-center p-12">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="text-green-400" size={32} />
                </div>
                <p className="text-white mb-2">Resume uploaded successfully!</p>
                <p className="text-gray-400 text-sm mb-6">We've analyzed your skills and experience</p>
                <Button
                  onClick={handleAnalyzeResume}
                  className="bg-blue-500 hover:bg-blue-400 text-white px-6 py-3 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/25"
                >
                  View Internship Recommendations
                </Button>
              </div>
            )}

            {uploadedFile && (
              <div className="mt-6 p-4 bg-gray-900/50 rounded-lg">
                <div className="flex items-center">
                  <FileText className="text-blue-400 mr-3" size={20} />
                  <div>
                    <p className="text-white">{uploadedFile.name}</p>
                    <p className="text-gray-400 text-sm">
                      {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                </div>
              </div>
            )}
          </Card>

          {/* Tips Section */}
          <Card className="bg-gray-800/50 border-gray-700 p-8">
            <h2 className="text-white text-xl mb-6">Resume Tips</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <p className="text-gray-300 mb-1">Clear Format</p>
                  <p className="text-gray-400 text-sm">Use a clean, readable format with clear section headings</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <p className="text-gray-300 mb-1">Skills Section</p>
                  <p className="text-gray-400 text-sm">Include technical skills and programming languages</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <p className="text-gray-300 mb-1">Education Details</p>
                  <p className="text-gray-400 text-sm">Include your degree, university, and graduation year</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <p className="text-gray-300 mb-1">Projects & Experience</p>
                  <p className="text-gray-400 text-sm">Highlight relevant projects and any work experience</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-blue-500/10 rounded-lg border border-blue-400/20">
              <div className="flex items-start">
                <AlertCircle className="text-blue-400 mr-3 mt-0.5 flex-shrink-0" size={16} />
                <div>
                  <p className="text-blue-300 text-sm">
                    Our AI will analyze your resume to extract skills, experience, and education 
                    to match you with the most relevant internship opportunities.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}