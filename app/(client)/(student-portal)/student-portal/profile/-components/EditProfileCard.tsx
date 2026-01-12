"use client";

import { useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Profile, useProfile } from "@/context/profile-context";

function BackIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M15 6 9 12l6 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CameraIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M9 7 10.2 5.6A2 2 0 0 1 11.7 5h.6a2 2 0 0 1 1.5.6L15 7h2a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-7a3 3 0 0 1 3-3h2Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M12 17a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <label className="text-sm font-medium text-slate-700">{children}</label>;
}

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={[
        "mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900",
        "placeholder:text-slate-400 shadow-sm",
        "focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-white",
        props.className ?? "",
      ].join(" ")}
    />
  );
}

function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      className={[
        "mt-3 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900",
        "placeholder:text-slate-400 shadow-sm",
        "focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-white",
        props.className ?? "",
      ].join(" ")}
    />
  );
}

async function fileToDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(new Error("Failed to read file"));
    reader.onload = () => resolve(String(reader.result));
    reader.readAsDataURL(file);
  });
}

export default function EditProfileCard() {
  const router = useRouter();
  const { profile, updateProfile } = useProfile();

  const [form, setForm] = useState<Profile>(() => profile);
  const [saving, setSaving] = useState(false);

  const fileRef = useRef<HTMLInputElement | null>(null);

  const canSave = useMemo(() => {
    return (
      form.name.trim().length > 0 &&
      form.designation.trim().length > 0 &&
      form.country.trim().length > 0
    );
  }, [form]);

  const onPickAvatar = () => fileRef.current?.click();

  const onAvatarChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const dataUrl = await fileToDataUrl(file);
    setForm((p) => ({ ...p, avatarDataUrl: dataUrl }));
  };

  const onSave = async () => {
    if (!canSave) return;
    setSaving(true);
    try {
      updateProfile(form);
      router.push("/profile");
    } finally {
      setSaving(false);
    }
  };

  return (
    <section className="rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
      {/* Top bar */}
      <div className="flex items-center justify-between p-6">
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => router.back()}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-50 text-slate-700 ring-1 ring-slate-200 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            aria-label="Go back"
          >
            <BackIcon className="h-5 w-5" />
          </button>

          <h1 className="text-lg font-semibold text-slate-900">Edit Profile</h1>
        </div>

        <button
          type="button"
          onClick={onSave}
          disabled={!canSave || saving}
          className={[
            "rounded-xl px-5 py-2.5 text-sm font-semibold shadow-sm transition",
            "focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",
            !canSave || saving
              ? "cursor-not-allowed bg-slate-200 text-slate-500"
              : "bg-black text-white hover:bg-slate-900",
          ].join(" ")}
        >
          {saving ? "Saving..." : "Save"}
        </button>
      </div>

      <div className="h-px w-full bg-slate-100" />

      {/* Form body */}
      <div className="p-6">
        {/* Avatar */}
        <div className="mb-6">
          <div className="relative h-20 w-20 overflow-hidden rounded-2xl bg-slate-100 ring-1 ring-slate-200">
            {form.avatarDataUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={form.avatarDataUrl}
                alt="Avatar preview"
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center text-slate-500">
                <CameraIcon className="h-6 w-6" />
              </div>
            )}

            {/* Camera overlay button */}
            <button
              type="button"
              onClick={onPickAvatar}
              className="absolute inset-0 flex items-center justify-center bg-black/0 text-white transition hover:bg-black/30 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              aria-label="Change avatar"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-black/40">
                <CameraIcon className="h-5 w-5" />
              </div>
            </button>

            <input
              ref={fileRef}
              type="file"
              accept="image/*"
              onChange={onAvatarChange}
              className="hidden"
            />
          </div>
        </div>

        {/* Name */}
        <div>
          <Label>Name</Label>
          <Input
            value={form.name}
            onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
            placeholder="Full name"
          />
        </div>

        {/* Designation + Country */}
        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <Label>Designation</Label>
            <Input
              value={form.designation}
              onChange={(e) => setForm((p) => ({ ...p, designation: e.target.value }))}
              placeholder="e.g. Student"
            />
          </div>

          <div>
            <Label>Country</Label>
            <Input
              value={form.country}
              onChange={(e) => setForm((p) => ({ ...p, country: e.target.value }))}
              placeholder="e.g. New York. USA"
            />
          </div>
        </div>
      </div>

      <div className="h-px w-full bg-slate-100" />

      {/* About section */}
      <div className="p-6">
        <h2 className="text-base font-semibold text-slate-900">About</h2>
        <Textarea
          rows={5}
          value={form.about}
          onChange={(e) => setForm((p) => ({ ...p, about: e.target.value }))}
        />
      </div>

      <div className="h-px w-full bg-slate-100" />

      {/* Session Grades */}
      <div className="p-6">
        <h2 className="text-base font-semibold text-slate-900">
          Session Grades &amp; Levels
        </h2>
        <Input
          className="mt-4"
          value={form.sessionGrades}
          onChange={(e) => setForm((p) => ({ ...p, sessionGrades: e.target.value }))}
          placeholder="e.g. High School (Grades 9—12)"
        />
      </div>
    </section>
  );
}
