'use client';

import { StarIcon } from "lucide-react";
import { GrStarOutline } from "react-icons/gr";

// import { StarIcon } from '@heroicons/react/24/solid';
// import { StarIcon as StarOutline } from '@heroicons/react/24/outline';

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
    <div className="max-w-3xl mb-18">
      <h2 className="mb-4 mt-4 text-lg font-semibold text-gray-900">
        Session History
      </h2>

      <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
        {sessions.map((session, index) => (
          <div
            key={session.id}
            className={`flex items-center justify-between px-5 py-4 ${
              index !== sessions.length - 1 ? 'border-b border-gray-100' : ''
            }`}
          >
            {/* Left */}
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-md bg-gray-300" />

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
            <div className="">
              {session.rating !== undefined && (
                <div className="flex mb-2">
                  {[1, 2, 3, 4, 5].map((star) =>
                    star <= session.rating! ? (
                      <StarIcon
                        key={star}
                        className="h-4 w-4 text-yellow-400"
                      />
                    ) : (
                      <GrStarOutline
                        key={star}
                        className="h-4 w-4 text-gray-300"
                      />
                    )
                  )}
                </div>
              )}

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

              {session.showFeedback && (
                <button className="rounded-md border border-gray-200 px-3 py-1 text-sm text-gray-600 hover:bg-gray-50">
                  Give Feedback
                </button>
              )}

              <span className="font-medium text-gray-900 ml-12 mt-4">
                ${session.price}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
