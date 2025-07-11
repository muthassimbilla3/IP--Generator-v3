import React from 'react';
import { Upload, CheckCircle } from 'lucide-react';

interface UploadProgressModalProps {
  isOpen: boolean;
  progress: number;
  isComplete: boolean;
  fileName?: string;
}

const UploadProgressModal: React.FC<UploadProgressModalProps> = ({
  isOpen,
  progress,
  isComplete,
  fileName
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl transform transition-all">
        <div className="text-center">
          {/* Icon */}
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 mb-6">
            {isComplete ? (
              <CheckCircle className="h-8 w-8 text-green-600 animate-bounce" />
            ) : (
              <Upload className="h-8 w-8 text-blue-600 animate-pulse" />
            )}
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            {isComplete ? '🎉 আপলোড সম্পন্ন!' : '📤 ফাইল আপলোড হচ্ছে...'}
          </h3>

          {/* Message */}
          <p className="text-gray-600 mb-6">
            {isComplete 
              ? 'আপনার ফাইল সফলভাবে আপলোড হয়েছে!'
              : 'আপলোড হতে একটু সময় লাগবে দয়া করে অপেক্ষা করুন'
            }
          </p>

          {/* File Name */}
          {fileName && (
            <div className="bg-gray-50 rounded-lg p-3 mb-6">
              <p className="text-sm text-gray-700">
                <span className="font-medium">ফাইল:</span> {fileName}
              </p>
            </div>
          )}

          {/* Progress Bar */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700">অগ্রগতি</span>
              <span className="text-sm font-bold text-blue-600">{Math.round(progress)}%</span>
            </div>
            
            {/* Progress Bar Container */}
            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden shadow-inner">
              <div 
                className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-500 ease-out relative overflow-hidden"
                style={{ width: `${progress}%` }}
              >
                {/* Animated shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-pulse"></div>
                
                {/* Moving shine bar */}
                {!isComplete && (
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-300 to-transparent opacity-50 animate-[shimmer_2s_infinite]"></div>
                )}
              </div>
            </div>
          </div>

          {/* Loading Animation */}
          {!isComplete && (
            <div className="flex justify-center items-center space-x-2">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
              </div>
              <span className="text-sm text-gray-500 ml-3 animate-pulse">প্রক্রিয়াকরণ চলছে...</span>
            </div>
          )}

          {/* Success Message */}
          {isComplete && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="flex items-center justify-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <p className="text-green-800 font-medium">আপলোড সফল হয়েছে!</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Custom CSS for shimmer animation */}
      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
};

export default UploadProgressModal;