// components/AllSessionsMaterials.tsx
import Link from "next/link";

type Attachment = {
  id: string;
  filename: string;
  href?: string; // optional link to the file
};

type Session = {
  id: string;
  title: string;
  instructor: string;
  meta: string; // e.g. "1/15/2024 at 3:00 PM • 60 min • Virtual"
  attachments: Attachment[];
  downloadHref?: string; // optional "Download Materials" action URL
};

const sessions: Session[] = [
  {
    id: "s1",
    title: "Calculus",
    instructor: "Sarah Johnson",
    meta: "1/15/2024 at 3:00 PM • 60 min • Virtual",
    downloadHref: "#",
    attachments: [{ id: "a1", filename: "calculus-session-materials.pdf", href: "#" }],
  },
  {
    id: "s2",
    title: "Calculus",
    instructor: "Sarah Johnson",
    meta: "1/15/2024 at 3:00 PM • 60 min • Virtual",
    downloadHref: "#",
    attachments: [
      { id: "a2", filename: "calculus-session-materials.pdf", href: "#" },
      { id: "a3", filename: "calculus-session-materials.pdf", href: "#" },
    ],
  },
  {
    id: "s3",
    title: "Calculus",
    instructor: "Sarah Johnson",
    meta: "1/15/2024 at 3:00 PM • 60 min • Virtual",
    downloadHref: "#",
    attachments: [{ id: "a4", filename: "calculus-session-materials.pdf", href: "#" }],
  },
  {
    id: "s4",
    title: "Calculus",
    instructor: "Sarah Johnson",
    meta: "1/15/2024 at 3:00 PM • 60 min • Virtual",
    downloadHref: "#",
    attachments: [{ id: "a5", filename: "calculus-session-materials.pdf", href: "#" }],
  },
];

function DownloadIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 3v10m0 0 4-4m-4 4-4-4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

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

function PdfBadge() {
  return (
    <div className="flex h-8 w-8 items-center justify-center rounded-md bg-violet-50 text-violet-600 ring-1 ring-violet-100">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7l-5-5Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M14 2v5h5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

function AttachmentRow({ attachment }: { attachment: Attachment }) {
  const content = (
    <div className="flex items-center gap-3 rounded-lg bg-slate-50 px-3 py-2">
      <PdfBadge />
      <span className="truncate text-sm font-medium text-slate-700">{attachment.filename}</span>
    </div>
  );

  return (
    <div className="relative pl-3">
      {/* left accent bar */}
      <span
        aria-hidden="true"
        className="absolute left-0 top-0 h-full w-1 rounded-full bg-indigo-500"
      />
      {attachment.href ? (
        <a
          href={attachment.href}
          className="block rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-white"
        >
          {content}
        </a>
      ) : (
        content
      )}
    </div>
  );
}

function SessionItem({ session }: { session: Session }) {
  return (
    <section className="py-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-slate-600">
            <UsersIcon className="h-5 w-5" />
          </div>

          <div className="min-w-0">
            <h3 className="text-sm font-semibold text-slate-900">{session.title}</h3>
            <p className="text-xs text-slate-600">
              with <span className="font-medium">{session.instructor}</span>
            </p>
            <p className="mt-1 text-xs text-slate-500">{session.meta}</p>
          </div>
        </div>

        <div className="sm:pt-0">
          {session.downloadHref ? (
            <a
              href={session.downloadHref}
              className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
            >
              <DownloadIcon className="h-4 w-4" />
              Download Materials
            </a>
          ) : (
            <button
              type="button"
              className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
            >
              <DownloadIcon className="h-4 w-4" />
              Download Materials
            </button>
          )}
        </div>
      </div>

      <div className="mt-4 space-y-2">
        {session.attachments.map((a) => (
          <AttachmentRow key={a.id} attachment={a} />
        ))}
      </div>
    </section>
  );
}

export default function AllSessionsMaterials() {
  return (
    <div className="rounded-2xl bg-white ring-1 ring-slate-200 mb-12">
      <div className="flex items-center justify-between px-6 py-4">
        <h2 className="text-sm font-semibold text-slate-900">All Sessions Materials</h2>

        <Link
          href="#"
          className="text-xs font-medium text-slate-500 hover:text-slate-700"
        >
          See All
        </Link>
      </div>

      <div className="divide-y divide-slate-100 px-6">
        {sessions.map((s) => (
          <SessionItem key={s.id} session={s} />
        ))}
      </div>
    </div>
  );
}
