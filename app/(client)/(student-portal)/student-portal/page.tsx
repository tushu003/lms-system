import React from "react";
import SessionHistory from "./bookings/_components/session-history";
import UpcomingSessions from "./bookings/_components/upcoming-sessions";

export default function StudnetPortal() {
  return <div>
    <UpcomingSessions />
    <SessionHistory />
    
  </div>;
}
