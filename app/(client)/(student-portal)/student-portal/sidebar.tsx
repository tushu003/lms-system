"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Calendar, FileText, User } from "lucide-react";

const menuItems = [
  {
    label: "Bookings",
    href: "/student-portal/bookings",
    icon: Calendar,
  },
  {
    label: "Session Materials",
    href: "/student-portal/session-materials",
    icon: FileText,
  },
  {
    label: "Profile",
    href: "/student-portal/profile",
    icon: User,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 p-4">
      <div className="rounded-2xl mt-4 bg-white p-4 space-y-1">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition
                ${
                  isActive
                    ? "bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow"
                    : "text-gray-600 hover:bg-gray-300"
                }
              `}
            >
              <Icon size={18} />
              <span className="text-sm font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </aside>
  );
}
