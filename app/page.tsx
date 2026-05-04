import BookCard from "@/components/BookCard";
import { sampleBooks } from "@/lib/constants";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <main className="wrapper container pt-8 pb-12">
      <section className="pt-28 mb-10 md:mb-16 overflow-hidden rounded-[2rem] bg-[var(--bg-secondary)] px-6 py-8 shadow-soft-lg sm:px-10 sm:py-12 lg:px-14 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr_0.85fr] lg:items-center">
          <div className="space-y-6 text-[var(--text-primary)]">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--text-secondary)]">
              Your Library
            </p>
            <h1 className="max-w-xl text-4xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-5xl">
              Convert your books into interactive AI conversations.
            </h1>
            <p className="max-w-lg text-base leading-8 text-[var(--text-secondary)] sm:text-lg">
              Listen, learn, and discuss your favorite reads from one warm,
              welcoming library workspace.
            </p>
            <button className="inline-flex rounded-full bg-[var(--text-primary)] px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-[var(--color-brand-hover)]">
              + Add new book
            </button>
          </div>

          <div className="relative flex justify-center px-4">
            <div className="absolute inset-x-0 top-1/2 h-[280px] -translate-y-1/2 rounded-[2rem] bg-[var(--bg-primary)] shadow-soft-sm" />
            <div className="relative z-10 w-full max-w-[420px]">
              <Image
                src="/assets/hero-illustration.png"
                alt="Vintage books and globe illustration"
                width={700}
                height={700}
                className="w-full rounded-[2rem] object-cover"
              />
            </div>
          </div>

          <aside className="rounded-[2rem] bg-white p-6 shadow-soft-md border border-[var(--border-medium)] sm:p-8">
            <div className="space-y-6">
              <div className="space-y-1">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--text-secondary)]">
                  Getting started
                </p>
                <h2 className="text-2xl font-semibold text-[var(--text-primary)]">
                  Start reading in three easy steps
                </h2>
              </div>

              <div className="space-y-4">
                {[
                  {
                    number: "1",
                    title: "Upload PDF",
                    description: "Add your book file",
                  },
                  {
                    number: "2",
                    title: "AI Processing",
                    description: "We analyze the content",
                  },
                  {
                    number: "3",
                    title: "Voice Chat",
                    description: "Discuss with AI",
                  },
                ].map((step) => (
                  <div
                    key={step.number}
                    className="flex gap-4 rounded-3xl bg-[var(--accent-light)] p-4"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-base font-semibold text-[var(--text-primary)] shadow-soft-sm">
                      {step.number}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[var(--text-primary)]">
                        {step.title}
                      </p>
                      <p className="text-sm leading-6 text-[var(--text-secondary)]">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <div className="library-books-grid">
        {sampleBooks.map((book) => (
          <BookCard
            key={book._id}
            title={book.title}
            author={book.author}
            coverURL={book.coverURL}
            slug={book.slug}
          />
        ))}
      </div>
    </main>
  );
};

export default page;
