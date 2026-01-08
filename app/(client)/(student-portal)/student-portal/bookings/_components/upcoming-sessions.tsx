"use client";
import React, { useState } from "react";
import { Calendar, Clock, Video, MapPin } from "lucide-react";

interface Session {
  id: string;
  title: string;
  subtitle?: string;
  instructor: string;
  date: string;
  time: string;
  mode: "Virtual" | "In-Person";
  meetingLink?: string;
  description?: string;
  status: "upcoming" | "rescheduled";
}

const UpcomingSessions: React.FC = () => {
  const [sessions] = useState<Session[]>([
    {
      id: "1",
      title: "Calculus",
      subtitle: "Recorded Session",
      instructor: "with Dr. Jessica Miller",
      date: "1/1/2024",
      time: "3:30 PM",
      mode: "Virtual",
      meetingLink: "zoom.us/j/123456789?pwd=abcd123",
      status: "upcoming",
    },
    {
      id: "2",
      title: "Calculus",
      instructor: "with Dr. Jessica Miller",
      date: "1/1/2024",
      time: "3:30 PM",
      mode: "Virtual",
      meetingLink: "zoom.us/j/987654321?pwd=xyz789",
      status: "upcoming",
    },
    {
      id: "3",
      title: "Calculus",
      instructor: "with Dr. Jessica Miller",
      date: "1/1/2024",
      time: "3:30",
      mode: "Virtual",
      description:
        "I apologize, but under the circumstances, I must require that I be made aware of the relevant documentation.",
      status: "rescheduled",
    },
    {
      id: "4",
      title: "English Literature",
      instructor: "with Ms. Rachel Carson",
      date: "2/1/2024",
      time: "4:00 PM",
      mode: "In-Person",
      status: "upcoming",
    },
    {
      id: "5",
      title: "Calculus",
      subtitle: "Rescheduled Request",
      instructor: "with Dr. Jessica Miller",
      date: "1/1/2024",
      time: "3:30 PM",
      mode: "Virtual",
      status: "upcoming",
    },
  ]);

  const [selectedSession, setSelectedSession] = useState<string | null>(null);
  const [showRescheduleModal, setShowRescheduleModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [rescheduleSessionId, setRescheduleSessionId] = useState<string | null>(null);
  const [rescheduleData, setRescheduleData] = useState({
    rating: 0,
    name: "",
    comments: ""
  });

  const handleJoinSession = (sessionId: string, meetingLink?: string) => {
    setSelectedSession(sessionId);
    if (meetingLink) {
      alert(`Joining session: ${meetingLink}`);
    }
  };

  const handleReschedule = (sessionId: string) => {
    setRescheduleSessionId(sessionId);
    setShowRescheduleModal(true);
    setRescheduleData({ rating: 0, name: "", comments: "" });
  };

  const handleCancel = (sessionId: string) => {
    if (confirm("Are you sure you want to cancel this session?")) {
      alert(`Session ${sessionId} cancelled`);
    }
  };

  const handleSubmitReschedule = () => {
    if (rescheduleData.rating === 0 || !rescheduleData.name || !rescheduleData.comments) {
      alert("Please fill all fields");
      return;
    }
    
    // Save to state (localStorage alternative for artifacts)
    const savedData = {
      sessionId: rescheduleSessionId,
      ...rescheduleData,
      timestamp: new Date().toISOString()
    };
    
    console.log("Reschedule data saved:", savedData);
    
    setShowRescheduleModal(false);
    setShowSuccessModal(true);
    
    setTimeout(() => {
      setShowSuccessModal(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-[#1E293B]">
            Upcoming Sessions
          </h1>
          <div className="flex items-center gap-2 text-sm text-[#1E293B]">
            <span className="font-medium">All</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>

        {/* Sessions List */}
        <div className="space-y-4">
          {sessions.map((session) => (
            <div
              key={session.id}
              className={`bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 p-6 border ${
                session.status === "rescheduled"
                  ? "border-pink-200 bg-pink-50/30"
                  : "border-gray-100"
              }`}
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#6366F1] to-[#A855F7] rounded-xl flex items-center justify-center">
                    📚
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-lg font-semibold text-[#1E293B]">
                          {session.title}
                        </h3>
                        {session.subtitle && (
                          <span
                            className={`text-xs px-2 py-1 rounded-full ${
                              session.subtitle.includes("Recorded")
                                ? "bg-blue-100 text-blue-700"
                                : "bg-red-100 text-red-700"
                            }`}
                          >
                            {session.subtitle}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-600">
                        {session.instructor}
                      </p>
                    </div>

                    {/* Date & Time Info */}
                    <div className="text-right space-y-1">
                      <div className="flex items-center gap-1.5 text-sm text-gray-600">
                        <Calendar className="w-4 h-4" />
                        <span>{session.date}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-sm text-gray-600">
                        <Clock className="w-4 h-4" />
                        <span>
                          {session.time} • {session.mode}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Meeting Link */}
              {session.meetingLink && (
                <div className="mb-3 ">
                  <a
                    href={`https://${session.meetingLink}`}
                    className="text-sm flex items-center gap-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Join Link: 
                    <p className="text-blue-600 hover:text-blue-700 hover:underline">
                      {session.meetingLink}
                    </p>
                  </a>
                </div>
              )}

              {/* Description for rescheduled */}
              {session.description && (
                <div className="mb-4 p-3 bg-pink-50 border border-pink-100 rounded-lg">
                  <p className="text-sm text-gray-700">{session.description}</p>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex items-center gap-3">
                {session.status === "rescheduled" ? (
                  <>
                    <button
                      onClick={() => handleReschedule(session.id)}
                      className="px-6 py-2 bg-gradient-to-r from-[#6366F1] to-[#A855F7] hover:from-purple-600 hover:to-purple-700 text-white rounded-lg font-medium text-sm shadow-md hover:shadow-lg transition-all duration-200"
                    >
                      Reschedule
                    </button>
                    <button
                      onClick={() => handleCancel(session.id)}
                      className="px-6 py-2 bg-white hover:bg-gray-50 text-gray-700 rounded-lg font-medium text-sm border border-gray-200 transition-all duration-200"
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() =>
                        handleJoinSession(session.id, session.meetingLink)
                      }
                      className="px-6 py-2 bg-gradient-to-r from-[#6366F1] to-[#A855F7] hover:from-purple-600 hover:to-purple-700 text-white rounded-lg font-medium text-sm shadow-md hover:shadow-lg transition-all duration-200"
                    >
                      Join Session
                    </button>
                    <button
                      onClick={() => handleReschedule(session.id)}
                      className="px-6 py-2 bg-white hover:bg-gray-50 text-gray-700 rounded-lg font-medium text-sm border border-gray-200 transition-all duration-200"
                    >
                      Reschedule
                    </button>
                    <button
                      onClick={() => handleCancel(session.id)}
                      className="px-6 py-2 bg-white hover:bg-gray-50 text-gray-700 rounded-lg font-medium text-sm border border-gray-200 transition-all duration-200"
                    >
                      Cancel
                    </button>
                  </>
                )}
              </div>

              {/* Selected Indicator */}
              {selectedSession === session.id && (
                <div className="mt-4 ml-16 p-3 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-sm text-green-700 font-medium">
                    ✓ Session selected - preparing to join...
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Empty State (if no sessions) */}
        {sessions.length === 0 && (
          <div className="text-center py-16">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              No upcoming sessions
            </h3>
            <p className="text-gray-500">
              Your scheduled sessions will appear here
            </p>
          </div>
        )}
      </div>

      {/* Reschedule Modal */}
      {showRescheduleModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-6">Share Your Feedback</h2>
            
            {/* Rating */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Rate your session <span className="text-red-500">*</span>
              </label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => setRescheduleData({...rescheduleData, rating: star})}
                    className={`w-10 h-10 rounded-lg border-2 flex items-center justify-center font-semibold transition-all ${
                      rescheduleData.rating >= star
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
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                value={rescheduleData.name}
                onChange={(e) => setRescheduleData({...rescheduleData, name: e.target.value})}
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            {/* Comments */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Comments <span className="text-red-500">*</span>
              </label>
              <textarea
                placeholder="Write your comments here"
                value={rescheduleData.comments}
                onChange={(e) => setRescheduleData({...rescheduleData, comments: e.target.value})}
                rows={4}
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
              />
            </div>

            {/* Buttons */}
            <div className="space-y-3">
              <button
                onClick={handleSubmitReschedule}
                className="w-full py-3 bg-gradient-to-r from-[#6366F1] to-[#A855F7] hover:from-purple-600 hover:to-purple-700 text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-200"
              >
                Submit Feedback
              </button>
              <button
                onClick={() => setShowRescheduleModal(false)}
                className="w-full py-3 bg-white hover:bg-gray-50 text-gray-700 rounded-lg font-medium border border-gray-200 transition-all duration-200"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-sm p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Feedback Submitted!</h3>
            <p className="text-gray-600">Your reschedule request has been saved successfully.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default UpcomingSessions;