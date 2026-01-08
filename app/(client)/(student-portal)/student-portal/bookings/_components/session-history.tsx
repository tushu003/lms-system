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
