"use client";

import { useRouter } from "next/navigation";
import { useProfile } from "@/app/(client)/(student-portal)/student-portal/profile/-components/context/profile-context";

function UsersIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M16 11a4 4 0 1 0-8 0 4 4 0 0 0 8 0Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M4 21a8 8 0 0 1 16 0"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function EditIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M14.5 6.5 17.5 9.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M6 18h3l9.5-9.5a2.1 2.1 0 0 0 0-3L17.5 4.5a2.1 2.1 0 0 0-3 0L5 14v4Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ProfileViewCard() {
  const router = useRouter();
  const { profile } = useProfile();
  if (!profile) return null;

  const [firstName, ...rest] = profile.name.split(" ");
  const lastName = rest.join(" ");

  return (
    <section className="rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
      {/* Header */}
      <div className="flex items-start justify-between gap-4 p-6">
        <div className="flex items-start gap-5">
          {/* Avatar */}
          <div className="relative h-16 w-16 overflow-hidden rounded-full bg-slate-100 ring-1 ring-slate-200">
            {profile.avatarDataUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={profile.avatarDataUrl}
                alt={`${profile.name} avatar`}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center text-slate-500">
                <UsersIcon className="h-6 w-6" />
              </div>
            )}
          </div>

          {/* Name + meta */}
          <div className="min-w-0">
            <h1 className="truncate text-2xl font-semibold text-slate-900">
              {firstName} <span className="text-slate-700">{lastName}</span>
            </h1>

            <div className="mt-1 space-y-1 text-sm text-slate-600">
              <p>{profile.designation}</p>
              <p>{profile.country}</p>
              <p>
                Total Booking:{" "}
                <span className="font-medium text-slate-700">
                  {profile.totalBooking}
                </span>
              </p>
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={() => router.push("/profile/edit")}
          className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          <EditIcon className="h-4 w-4" />
          Edit
        </button>
      </div>

      <div className="h-px w-full bg-slate-100" />

      {/* About */}
      <div className="p-6">
        <h2 className="text-base font-semibold text-slate-900">About</h2>
        <p className="mt-4 max-w-4xl text-sm leading-6 text-slate-600">
          {profile.about}
        </p>
      </div>

      <div className="h-px w-full bg-slate-100" />

      {/* Session Grades */}
      <div className="p-6">
        <h2 className="text-base font-semibold text-slate-900">
          Session Grades &amp; Levels
        </h2>
        <p className="mt-4 text-sm text-slate-700">{profile.sessionGrades}</p>
      </div>
    </section>
  );
}
