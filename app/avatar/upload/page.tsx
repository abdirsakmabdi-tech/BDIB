"use client";

import type { PutBlobResult } from "@vercel/blob";
import { useState, useRef, type FormEvent } from "react";
import Header from "@/components/Header";

export default function AvatarUploadPage() {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [blob, setBlob] = useState<PutBlobResult | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function onFileChange() {
    const file = inputFileRef.current?.files?.[0];
    setBlob(null);
    setError(null);

    if (previewUrl?.startsWith("blob:")) {
      URL.revokeObjectURL(previewUrl);
    }

    if (!file) {
      setPreviewUrl(null);
      setFileName(null);
      return;
    }

    setFileName(file.name);
    setPreviewUrl(URL.createObjectURL(file));
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);

    if (!inputFileRef.current?.files?.length) {
      setError("No file selected");
      return;
    }

    const file = inputFileRef.current.files[0];
    setUploading(true);

    try {
      const response = await fetch(
        `/api/avatar/upload?filename=${encodeURIComponent(file.name)}`,
        {
          method: "POST",
          body: file,
        },
      );

      const payload = await response.json();

      if (!response.ok) {
        throw new Error(payload?.error ?? "Upload failed");
      }

      setBlob(payload as PutBlobResult);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Upload failed");
    } finally {
      setUploading(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#f4f6f4]">
      <Header />

      <section
        aria-label="Avatar upload"
        className="px-6 py-12 sm:px-[6.5vw] sm:py-16 lg:py-20"
      >
        <article className="mx-auto grid max-w-6xl grid-cols-1 overflow-hidden lg:grid-cols-2">
          <div className="relative min-h-[280px] bg-[#e8ece8] sm:min-h-[360px] lg:min-h-[480px]">
            {previewUrl ? (
              // eslint-disable-next-line @next/next/no-img-element -- local blob: preview URLs
              <img
                src={previewUrl}
                alt={fileName ? `Preview of ${fileName}` : "Selected image preview"}
                className="absolute inset-0 h-full w-full object-cover"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center px-8">
                <p className="max-w-xs text-center text-[15px] leading-[1.6] text-pdib-text/55">
                  Choose an image to preview it here
                </p>
              </div>
            )}
          </div>

          <div className="flex items-center bg-pdib-primary/10 px-8 py-12 sm:px-12 sm:py-16 lg:px-14 lg:py-20">
            <div className="max-w-xl">
              <p className="text-[12px] font-bold tracking-[0.16em] text-pdib-primary uppercase sm:text-[13px]">
                Media
              </p>
              <h1 className="mt-3 font-sans text-[clamp(24px,2.6vw,34px)] leading-[1.2] font-medium tracking-tight text-pdib-title">
                Upload Your Avatar
              </h1>
              <p className="mt-5 text-[16px] leading-[1.7] text-pdib-text sm:mt-6 sm:text-[17px]">
                Select a JPEG, PNG, or WebP image, then upload it to your Vercel
                Blob store. After a successful upload you can open the stored
                file from this page.
              </p>

              <form onSubmit={onSubmit} className="mt-8 space-y-5">
                <label className="block">
                  <span className="sr-only">Choose image</span>
                  <input
                    name="file"
                    ref={inputFileRef}
                    type="file"
                    accept="image/jpeg, image/png, image/webp"
                    required
                    onChange={onFileChange}
                    className="block w-full cursor-pointer text-[14px] text-pdib-text file:mr-4 file:cursor-pointer file:border-0 file:bg-pdib-green file:px-4 file:py-2.5 file:font-sans file:text-[13px] file:font-semibold file:tracking-wide file:text-white file:uppercase hover:file:bg-pdib-green-hover"
                  />
                </label>

                {fileName && (
                  <p className="text-[14px] text-pdib-text/70">{fileName}</p>
                )}

                <button
                  type="submit"
                  disabled={uploading}
                  className="inline-flex items-center bg-pdib-green px-6 py-3 text-[13px] font-semibold tracking-[0.08em] text-white uppercase transition-colors hover:bg-pdib-green-hover disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {uploading ? "Uploading…" : "Upload"}
                </button>
              </form>

              {error && (
                <p className="mt-5 text-[15px] text-red-700" role="alert">
                  {error}
                </p>
              )}

              {blob && (
                <div className="mt-6 space-y-2 text-[16px] leading-[1.7] text-pdib-text sm:text-[17px]">
                  <p className="font-semibold text-pdib-title">Upload complete</p>
                  <a
                    href={`/api/avatar/view?pathname=${encodeURIComponent(blob.pathname)}`}
                    className="inline-flex text-pdib-green underline-offset-4 hover:underline"
                  >
                    View file
                  </a>
                </div>
              )}
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}
