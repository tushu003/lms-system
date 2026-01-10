'use client';

import { useState } from 'react';
import { Star } from "lucide-react";

type Session = {
  id: number;
  title: string;
  tutor: string;
  date: string;
  duration: string;
  price: number;
  rating?: number;
  showFeedback?: boolean;
};

const sessions: Session[] = [
  {
    id: 1,
    title: 'Physics',
    tutor: 'Prof. David Kim',
    date: '1/10/2024 at 2:00 PM',
    duration: '60 min',
    price: 55,
    showFeedback: true,
  },
  {
    id: 2,
    title: 'Algebra',
    tutor: 'Dr. Jessica Miller',
    date: '1/8/2024 at 3:00 PM',
    duration: '60 min',
    price: 60,
    rating: 3,
  },
  {
    id: 3,
    title: 'Essay Writing',
    tutor: 'Ms. Rachel Adams',
    date: '1/5/2024 at 4:00 PM',
    duration: '90 min',
    price: 75,
    rating: 4,
  },
];

export default function SessionHistory() {
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [feedbackSessionId, setFeedbackSessionId] = useState<number | null>(null);
  const [feedbackData, setFeedbackData] = useState({
    rating: 0,
    name: "",
    comments: ""
  });

  const handleGiveFeedback = (sessionId: number) => {
    setFeedbackSessionId(sessionId);
    setShowFeedbackModal(true);
    setFeedbackData({ rating: 0, name: "", comments: "" });
  };

  const handleSubmitFeedback = () => {
    if (feedbackData.rating === 0 || !feedbackData.name || !feedbackData.comments) {
      alert("Please fill all fields");
      return;
    }
    
    const savedData = {
      type: "session_feedback",
      sessionId: feedbackSessionId,
      ...feedbackData,
      timestamp: new Date().toISOString()
    };
    
    // In your Next.js app, use: 
    // const existingFeedback = JSON.parse(localStorage.getItem('sessionFeedback') || '[]');
    // existingFeedback.push(savedData);
    // localStorage.setItem('sessionFeedback', JSON.stringify(existingFeedback));
    
    console.log("Feedback data saved:", savedData);
    
    setShowFeedbackModal(false);
    setShowSuccessModal(true);
    
    setTimeout(() => {
      setShowSuccessModal(false);
    }, 3000);
  };

  return (
    <div className="max-w-3xl mb-18 relative">
      <h2 className="mb-4 mt-4 text-lg font-semibold text-gray-900">
        Session History
      </h2>

      <div className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
        {sessions.map((session, index) => (
          <div
            key={session.id}
            className={`flex items-center justify-between px-5 py-4 ${
              index !== sessions.length - 1 ? 'border-b border-gray-100' : ''
            } ${showFeedbackModal || showSuccessModal ? 'blur-sm' : ''}`}
          >
            {/* Left */}
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-md bg-gradient-to-r from-[#6366F1] to-[#A855F7] flex items-center justify-center text-white font-bold">
                
              </div>

              <div>
                <p className="font-medium text-gray-900">
                  {session.title}
                </p>
                <p className="text-sm text-gray-500">
                  with {session.tutor}
                </p>
                <p className="mt-1 text-xs text-gray-400">
                  {session.date} • {session.duration}
                </p>
              </div>
            </div>

            {/* Right */}
            <div className="flex flex-col items-end gap-2">
              {session.rating !== undefined && (
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`h-4 w-4 ${
                        star <= session.rating!
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
              )}

              {session.showFeedback && (
                <button 
                  onClick={() => handleGiveFeedback(session.id)}
                  className="rounded-md border border-gray-200 px-3 py-1 text-sm text-gray-600 hover:bg-gray-50 transition-colors"
                >
                  Give Feedback
                </button>
              )}

              <span className="font-medium text-gray-900">
                ${session.price}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Feedback Modal */}
      {showFeedbackModal && (
        <div className="absolute inset-0 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 border border-gray-200">
            <h2 className="text-xl font-bold text-gray-800 mb-3">Share Your Feedback</h2>
            
            {/* Rating */}
            <div className="mb-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Rate your session <span className="text-red-500">*</span>
              </label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => setFeedbackData({...feedbackData, rating: star})}
                    className={`w-10 h-10 rounded-lg border-2 flex items-center justify-center font-semibold transition-all ${
                      feedbackData.rating >= star
                        ? "bg-gradient-to-r from-[#6366F1] to-[#A855F7] text-white border-transparent"
                        : "bg-white text-gray-400 border-gray-200 hover:border-purple-300"
                    }`}
                  >
                    {star}
                  </button>
                ))}
              </div>
            </div>

            {/* Name */}
            <div className="mb-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                value={feedbackData.name}
                onChange={(e) => setFeedbackData({...feedbackData, name: e.target.value})}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            {/* Comments */}
            <div className="mb-3">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Comments <span className="text-red-500">*</span>
              </label>
              <textarea
                placeholder="Write your comments here"
                value={feedbackData.comments}
                onChange={(e) => setFeedbackData({...feedbackData, comments: e.target.value})}
                rows={4}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
              />
            </div>

            {/* Buttons */}
            <div className="space-y-2">
              <button
                onClick={handleSubmitFeedback}
                className="w-full py-2 bg-gradient-to-r from-[#6366F1] to-[#A855F7] hover:from-purple-600 hover:to-purple-700 text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-200"
              >
                Submit Feedback
              </button>
              <button
                onClick={() => setShowFeedbackModal(false)}
                className="w-full py-2 bg-white hover:bg-gray-50 text-gray-700 rounded-lg font-medium border border-gray-200 transition-all duration-200"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="absolute inset-0 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-8 text-center border border-gray-200">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Feedback Submitted!</h3>
            <p className="text-gray-600">Your feedback has been saved successfully.</p>
          </div>
        </div>
      )}
    </div>
  );
}