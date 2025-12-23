"use client";
import React, { useState } from 'react';
import { Calendar, Clock, Video, MapPin } from 'lucide-react';

interface Session {
  id: string;
  title: string;
  subtitle?: string;
  instructor: string;
  date: string;
  time: string;
  mode: 'Virtual' | 'In-Person';
  meetingLink?: string;
  description?: string;
  status: 'upcoming' | 'rescheduled';
}

const UpcomingSessions: React.FC = () => {
  const [sessions] = useState<Session[]>([
    {
      id: '1',
      title: 'Calculus',
      subtitle: 'Recorded Session',
      instructor: 'with Dr. Jessica Miller',
      date: '1/1/2024',
      time: '3:30 PM',
      mode: 'Virtual',
      meetingLink: 'zoom.us/j/123456789?pwd=abcd123',
      status: 'upcoming'
    },
    {
      id: '2',
      title: 'Calculus',
      instructor: 'with Dr. Jessica Miller',
      date: '1/1/2024',
      time: '3:30 PM',
      mode: 'Virtual',
      meetingLink: 'zoom.us/j/987654321?pwd=xyz789',
      status: 'upcoming'
    },
    {
      id: '3',
      title: 'Calculus',
      instructor: 'with Dr. Jessica Miller',
      date: '1/1/2024',
      time: '3:30',
      mode: 'Virtual',
      description: 'I apologize, but under the circumstances, I must require that I be made aware of the relevant documentation.',
      status: 'rescheduled'
    },
    {
      id: '4',
      title: 'English Literature',
      instructor: 'with Ms. Rachel Carson',
      date: '2/1/2024',
      time: '4:00 PM',
      mode: 'In-Person',
      status: 'upcoming'
    },
    {
      id: '5',
      title: 'Calculus',
      subtitle: 'Rescheduled Request',
      instructor: 'with Dr. Jessica Miller',
      date: '1/1/2024',
      time: '3:30 PM',
      mode: 'Virtual',
      status: 'upcoming'
    }
  ]);

  const [selectedSession, setSelectedSession] = useState<string | null>(null);

  const handleJoinSession = (sessionId: string, meetingLink?: string) => {
    setSelectedSession(sessionId);
    if (meetingLink) {
      alert(`Joining session: ${meetingLink}`);
    }
  };

  const handleReschedule = (sessionId: string) => {
    alert(`Reschedule modal opened for session ${sessionId}`);
  };

  const handleCancel = (sessionId: string) => {
    if (confirm('Are you sure you want to cancel this session?')) {
      alert(`Session ${sessionId} cancelled`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
            Upcoming Sessions
          </h1>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span className="font-medium">All</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        {/* Sessions List */}
        <div className="space-y-4">
          {sessions.map((session) => (
            <div
              key={session.id}
              className={`bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 p-6 border ${
                session.status === 'rescheduled' 
                  ? 'border-pink-200 bg-pink-50/30' 
                  : 'border-gray-100'
              }`}
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {session.title.charAt(0)}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-lg font-semibold text-gray-800">
                          {session.title}
                        </h3>
                        {session.subtitle && (
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            session.subtitle.includes('Recorded') 
                              ? 'bg-blue-100 text-blue-700'
                              : 'bg-red-100 text-red-700'
                          }`}>
                            {session.subtitle}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-600">{session.instructor}</p>
                    </div>

                    {/* Date & Time Info */}
                    <div className="text-right space-y-1">
                      <div className="flex items-center gap-1.5 text-sm text-gray-600">
                        <Calendar className="w-4 h-4" />
                        <span>{session.date}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-sm text-gray-600">
                        <Clock className="w-4 h-4" />
                        <span>{session.time} • {session.mode}</span>
                      </div>
                    </div>
                  </div>

                  {/* Meeting Link */}
                  {session.meetingLink && (
                    <div className="mb-3">
                      <a
                        href={`https://${session.meetingLink}`}
                        className="text-sm text-blue-600 hover:text-blue-700 hover:underline flex items-center gap-1"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Video className="w-3.5 h-3.5" />
                        {session.meetingLink}
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
                    {session.status === 'rescheduled' ? (
                      <>
                        <button
                          onClick={() => handleReschedule(session.id)}
                          className="px-6 py-2 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white rounded-lg font-medium text-sm shadow-md hover:shadow-lg transition-all duration-200"
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
                          onClick={() => handleJoinSession(session.id, session.meetingLink)}
                          className="px-6 py-2 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white rounded-lg font-medium text-sm shadow-md hover:shadow-lg transition-all duration-200"
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
                </div>
              </div>

              {/* Selected Indicator */}
              {selectedSession === session.id && (
                <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
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
    </div>
  );
};

export default UpcomingSessions;