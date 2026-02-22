"use client";

import { useState } from "react";
import {
  Terminal,
  TypingAnimation,
  AnimatedSpan,
} from "@/components/ui/terminal";
import { Button } from "@/components/ui/button";
import { Send, X } from "lucide-react";
import { siteConfig } from "@/config/site";
import SectionHeading from "@/components/section-heading";

// TODO Store in DB

export default function Contact() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [step, setStep] = useState<number>(0); // 0: email, 1: name, 2: message, 3: review
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  const canSend = email.trim().length > 3 && message.trim().length > 4;

  const onSubmit = async (e: React.FormEvent) => {

    e.preventDefault();
    if (!canSend) return;
    try {
      setStatus("sending");
      window.location.href = `mailto:${siteConfig.email}?subject=Portfolio%20Contact%20from%20${encodeURIComponent(
        name || "Anonymous",
      )}&body=${encodeURIComponent(message)}%0A%0Afrom:%20${encodeURIComponent(email)}`;
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  const onReset = () => {
    setStep(0);
    setEmail("");
    setName("");
    setMessage("");
    setStatus("idle");
  };

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setStep((step) => step + 1);
    }
  };

  return (
    <SectionHeading
      id="contact"
      text="Contact"
      className="px-4 py-12 md:px-8 md:py-16"
    >
      <div className="absolute inset-0 size-full">
        <div className="before:bg-border after:bg-border relative h-full w-full before:absolute before:top-1/2 before:left-0 before:h-0.5 before:w-full after:absolute after:top-0 after:left-1/2 after:h-full after:w-0.5" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Contact Info Cards */}
        <div className="mb-8 grid gap-4 md:grid-cols-2">
          {/* Email Card */}
          <a
            href={`mailto:${siteConfig.email}`}
            className="bg-muted/30 group relative overflow-hidden rounded-xl border-2 p-6 transition-all hover:border-emerald-400/50 hover:shadow-lg hover:shadow-emerald-400/10"
          >
            <div className="relative z-10">
              <div className="mb-3 flex items-center gap-3">
                <div className="bg-emerald-400/10 rounded-lg border-2 border-emerald-400/30 p-3">
                  <Send className="h-5 w-5 text-emerald-400" />
                </div>
                <div>
                  <h3 className="font-semibold">Email Me</h3>
                  <p className="text-muted-foreground text-xs">Quick response guaranteed</p>
                </div>
              </div>
              <p className="font-mono text-sm text-emerald-400">{siteConfig.email}</p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
          </a>

          {/* Phone Card */}
          <a
            href="tel:+919733064817"
            className="bg-muted/30 group relative overflow-hidden rounded-xl border-2 p-6 transition-all hover:border-sky-400/50 hover:shadow-lg hover:shadow-sky-400/10"
          >
            <div className="relative z-10">
              <div className="mb-3 flex items-center gap-3">
                <div className="bg-sky-400/10 rounded-lg border-2 border-sky-400/30 p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-sky-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">Call Me</h3>
                  <p className="text-muted-foreground text-xs">Let&apos;s discuss your project</p>
                </div>
              </div>
              <p className="font-mono text-sm text-sky-400">+91 9733064817</p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-sky-400/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
          </a>
        </div>

        <div className="">
          <form onSubmit={onSubmit} className="w-full">
            <Terminal className="max-h-none w-full max-w-none">
              {step >= 0 && (
                <>
                  {" "}
                  {/* Q1 */}
                  <div className="text-foreground/90 flex items-start gap-2 font-mono">
                    <span className="text-emerald-400">$</span>
                    <TypingAnimation startOnView duration={26}>
                      Hey there! 👋 Let&apos;s build something intelligent together. What&apos;s your email?
                    </TypingAnimation>
                  </div>
                  {/* A1 */}
                  <AnimatedSpan className="grid gap-2">
                    <div className="flex items-center gap-2 font-mono">
                      <span className="text-emerald-400">↪</span>
                      <input
                        type="email"
                        required
                        placeholder="you@domain.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onKeyDown={handleEnter}
                        disabled={status === "sending" || status === "sent"}
                        autoComplete="email"
                        className="border-foreground/20 text-foreground placeholder:text-foreground/40 w-full rounded-md border bg-transparent px-3 py-2 outline-none focus:border-emerald-400/60 focus:ring-2 focus:ring-emerald-400/30"
                      />
                    </div>
                  </AnimatedSpan>
                </>
              )}

              {step >= 1 && (
                <>
                  {/* Q2 */}
                  <div className="text-foreground/90 flex items-start gap-2 font-mono">
                    <span className="text-sky-400">$</span>
                    <TypingAnimation duration={26}>
                      Perfect! And what should I call you?
                    </TypingAnimation>
                  </div>

                  {/* A2 */}
                  <AnimatedSpan className="grid gap-2">
                    <div className="flex items-center gap-2 font-mono">
                      <span className="text-sky-400">↪</span>
                      <input
                        type="text"
                        placeholder="Your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        onKeyDown={handleEnter}
                        autoComplete="name"
                        className="border-foreground/20 text-foreground placeholder:text-foreground/40 w-full rounded-md border bg-transparent px-3 py-2 outline-none focus:border-sky-400/60 focus:ring-2 focus:ring-sky-400/30"
                      />
                    </div>
                  </AnimatedSpan>
                </>
              )}

              {/* Q3 */}
              {step >= 2 && (
                <>
                  <div className="text-foreground/90 flex items-start gap-2 font-mono">
                    <span className="text-amber-400">$</span>
                    <TypingAnimation duration={26}>
                      Awesome! Got an AI project in mind? Tell me about it—chatbot, RAG app, or something else?
                    </TypingAnimation>
                  </div>

                  {/* A3 */}
                  <AnimatedSpan className="grid gap-2">
                    <div className="flex items-start gap-2 font-mono">
                      <span className="mt-2 text-amber-400">↪</span>
                      <textarea
                        required
                        rows={4}
                        placeholder="e.g., 'Need a RAG-based chatbot for customer support' or 'Looking to integrate AI into our product'..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="border-foreground/20 text-foreground placeholder:text-foreground/40 w-full resize-y rounded-md border bg-transparent px-3 py-2 outline-none focus:border-amber-400/60 focus:ring-2 focus:ring-amber-400/30"
                      />
                    </div>
                  </AnimatedSpan>
                  {/* Footer actions */}
                  <AnimatedSpan className="mt-2">
                    <div className="border-foreground/20 border-t border-dashed pt-4">
                      <div className="flex items-center justify-end gap-2">
                        <Button
                          type="button"
                          variant="outline"
                          onClick={onReset}
                          className="border-foreground/20 bg-foreground/5 hover:bg-foreground/10 font-mono text-xs"
                        >
                          <X className="mr-1 h-3.5 w-3.5" />
                          Cancel
                        </Button>
                        <Button
                          type="submit"
                          disabled={
                            message.trim().length < 4 || status === "sending"
                          }
                          className="border-foreground/20 bg-primary/10 text-foreground hover:bg-primary/20 border-2 font-mono text-xs disabled:cursor-not-allowed disabled:opacity-60"
                        >
                          <Send className="mr-1 h-3.5 w-3.5" />
                          {status === "sending"
                            ? "Sending…"
                            : status === "sent"
                              ? "Sent!"
                              : "Send"}
                        </Button>
                      </div>
                    </div>
                  </AnimatedSpan>
                </>
              )}

              {status === "sent" && (
                <AnimatedSpan className="font-mono text-emerald-400/90">
                  ✓ Message redirected.
                </AnimatedSpan>
              )}
              {status === "error" && (
                <AnimatedSpan className="font-mono text-red-400/90">
                  ⚠ Something went wrong. Please try again.
                </AnimatedSpan>
              )}
            </Terminal>
          </form>
        </div>
      </div>
    </SectionHeading>
  );
}
