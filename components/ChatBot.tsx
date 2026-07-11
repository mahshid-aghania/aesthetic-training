"use client";

import { useState, useRef, useEffect } from "react";
import { X, Send, MessageCircle, ChevronRight, Sparkles } from "lucide-react";

// ── Knowledge base ──────────────────────────────────────────────────────────

const COURSES = [
  {
    key: "plasma-prp",
    title: "Plasma PRP",
    duration: "2 Days",
    level: "Intermediate",
    description:
      "Master platelet-rich plasma therapy for facial rejuvenation, hair restoration, and skin healing. Covers blood-draw techniques, PRP preparation protocols, injection methods, and sterility standards.",
  },
  {
    key: "botox-filler",
    title: "Botox & Filler",
    duration: "5 Days",
    level: "All Levels",
    description:
      "Comprehensive neurotoxin and dermal filler training covering facial anatomy, product selection, advanced injection techniques, and complication management. Suitable for all experience levels.",
  },
  {
    key: "medical-aesthetician",
    title: "Medical Aesthetician",
    duration: "8 Weeks",
    level: "Beginner",
    description:
      "Foundational program in skincare science, chemical peels, dermaplaning, and professional client consultation. Perfect for those starting their aesthetics career.",
  },
  {
    key: "laser-technician",
    title: "Laser Technician",
    duration: "4 Weeks",
    level: "Intermediate",
    description:
      "Industry-recognized certification in laser hair removal, skin rejuvenation, and safety protocols. Covers laser physics, Fitzpatrick skin typing, and compliance requirements.",
  },
  {
    key: "microneedling",
    title: "Microneedling",
    duration: "2 Days",
    level: "Intermediate",
    description:
      "Advanced collagen induction therapy for skin rejuvenation and scar treatment. Includes device operation, depth protocols, PRP combination techniques, and aftercare management.",
  },
  {
    key: "micropigmentation",
    title: "Micropigmentation",
    duration: "5 Days",
    level: "Beginner",
    description:
      "Professional permanent makeup covering brow mapping, lip blush, eyeliner, color theory, machine techniques, and touch-up protocols.",
  },
  {
    key: "skin-care",
    title: "Skin Care",
    duration: "4 Weeks",
    level: "Beginner",
    description:
      "Comprehensive skincare training in facial techniques, product chemistry, treatment planning, and home care protocols for a variety of skin conditions.",
  },
  {
    key: "butt-lift",
    title: "Non-Surgical Butt Lift",
    duration: "2 Days",
    level: "Advanced",
    description:
      "Advanced body contouring using vacuum therapy and radiofrequency technologies. Covers client assessment, treatment protocols, and safety standards.",
  },
  {
    key: "aesthetic-diploma",
    title: "Aesthetic Diploma",
    duration: "16 Weeks",
    level: "Comprehensive",
    description:
      "Our flagship program covering the full spectrum of medical aesthetics — all core treatments, business fundamentals, clinical practicum, and career placement support. The most complete path to a professional career.",
  },
  {
    key: "advanced-laser-technician",
    title: "Advanced Medical Laser Technician",
    duration: "6 Weeks",
    level: "Advanced",
    description:
      "Advanced certification across multiple laser modalities, complex case management, combination therapies, and advanced safety protocols.",
  },
  {
    key: "medical-aesthetic",
    title: "Medical Aesthetic Specialist",
    duration: "12 Weeks",
    level: "Advanced",
    description:
      "Elite certification for practitioners seeking mastery in injectable techniques, device expertise, comprehensive treatment planning, and patient management.",
  },
];

const BOOKING_URL = "https://zibamedicalaesthetics.janeapp.com/";

const COURSE_ALIASES: Record<string, string> = {
  "advanced laser": "advanced-laser-technician",
  "laser technician": "laser-technician",
  "flagship diploma": "aesthetic-diploma",
  "medical aesthetic specialist": "medical-aesthetic",
};

const QUICK_REPLY_LINKS: Record<string, string> = {
  "Book a consultation": BOOKING_URL,
  "Open booking page": BOOKING_URL,
  "Contact page": "/contact",
};

// ── Intent matching ──────────────────────────────────────────────────────────

interface Message {
  role: "bot" | "user";
  text: string;
  quickReplies?: string[];
}

type Course = (typeof COURSES)[number];

function courseReply(course: Course): Message {
  return {
    role: "bot",
    text: `**${course.title}**\n\n📅 Duration: ${course.duration}\n🎓 Level: ${course.level}\n\n${course.description}\n\nWould you like to enroll or learn more?`,
    quickReplies: ["How to enroll?", "See all courses", "Book a consultation", "Location & contact"],
  };
}

function findCourse(input: string): Course | undefined {
  const q = input.toLowerCase().trim();

  for (const [alias, key] of Object.entries(COURSE_ALIASES)) {
    if (q.includes(alias)) {
      return COURSES.find((c) => c.key === key);
    }
  }

  const exact = COURSES.find((c) => c.title.toLowerCase() === q);
  if (exact) return exact;

  const byKey = COURSES.find((c) => q.includes(c.key));
  if (byKey) return byKey;

  const sorted = [...COURSES].sort((a, b) => b.title.length - a.title.length);
  for (const course of sorted) {
    const title = course.title.toLowerCase();
    if (q.includes(title)) return course;

    const keywords = course.title.toLowerCase().split(/\s+/).filter((kw) => kw.length > 3);
    const matched = keywords.filter((kw) => new RegExp(`\\b${kw}\\b`).test(q));
    if (matched.length >= Math.ceil(keywords.length * 0.75)) {
      return course;
    }
  }

  return undefined;
}

function getReply(input: string): Message {
  const q = input.toLowerCase();

  // Greetings
  if (/^(hi|hello|hey|good morning|good afternoon|good evening|yo|hiya|howdy)/i.test(q)) {
    return {
      role: "bot",
      text: "Hello! Welcome to Ziba Aesthetics Training Institute. I'm here to help you find the perfect program for your career in medical aesthetics. What would you like to know?",
      quickReplies: ["See all courses", "Which course suits me?", "Admissions process", "Location & contact"],
    };
  }

  // All courses list
  if (/see all courses|show me all courses|all courses|all programs|what do you offer|what courses|what programs|what training/i.test(q)) {
    const list = COURSES.map((c) => `• **${c.title}** — ${c.duration} (${c.level})`).join("\n");
    return {
      role: "bot",
      text: `We offer 11 professional programs:\n\n${list}\n\nAsk me about any specific course for full details.`,
      quickReplies: ["Aesthetic Diploma", "Botox & Filler", "Laser Technician", "Medical Aesthetician"],
    };
  }

  // Individual course matching
  const course = findCourse(q);
  if (course) {
    return courseReply(course);
  }

  // Book a consultation
  if (/consult|book a|schedule|appointment|open booking/i.test(q)) {
    return {
      role: "bot",
      text: "You can book a free consultation with our admissions team to discuss programs, pricing, and start dates.\n\n📅 **Online Booking:** zibamedicalaesthetics.janeapp.com\n📋 **Contact Form:** /contact\n\nWe'll help match you with the right program for your goals.",
      quickReplies: ["Open booking page", "See all courses", "How to enroll?", "Contact page"],
    };
  }

  // 2-day intensive courses
  if (/2-day|2 day|two day|two-day/i.test(q)) {
    return {
      role: "bot",
      text: "Our 2-day intensive courses are perfect if you want to add a skill quickly:\n\n• **Plasma PRP** — facial rejuvenation and hair restoration\n• **Microneedling** — collagen induction and scar treatment\n• **Non-Surgical Butt Lift** — body contouring with RF technology\n\nEach course includes hands-on training and certification.",
      quickReplies: ["Plasma PRP", "Microneedling", "Non-Surgical Butt Lift", "How to enroll?"],
    };
  }

  // Beginner / starter
  if (/beginner|i'm a beginner|im a beginner|no experience|first time|getting started/i.test(q)) {
    return {
      role: "bot",
      text: "Great question! For those new to aesthetics, we recommend starting with one of these beginner-friendly programs:\n\n• **Medical Aesthetician** (8 Weeks) — ideal foundation\n• **Skin Care** (4 Weeks) — clinical skincare essentials\n• **Micropigmentation** (5 Days) — permanent makeup\n\nFor the most complete start, our **Aesthetic Diploma** (16 Weeks) covers everything.",
      quickReplies: ["Medical Aesthetician", "Aesthetic Diploma", "Skin Care", "How to enroll?"],
    };
  }

  // Advanced / experienced
  if (/advanced|experienced|already practicing|upgrade|i'm experienced|im experienced/i.test(q)) {
    return {
      role: "bot",
      text: "For experienced practitioners looking to advance, we offer:\n\n• **Medical Aesthetic Specialist** (12 Weeks) — injectable and device mastery\n• **Advanced Medical Laser Technician** (6 Weeks) — multi-platform laser\n• **Non-Surgical Butt Lift** (2 Days) — body contouring\n• **Plasma PRP** (2 Days) — regenerative therapy",
      quickReplies: ["Medical Aesthetic Specialist", "Advanced Laser", "Non-Surgical Butt Lift", "Book a consultation"],
    };
  }

  // Laser
  if (/laser/i.test(q)) {
    return {
      role: "bot",
      text: "We offer two laser programs:\n\n• **Laser Technician** (4 Weeks, Intermediate) — hair removal, skin rejuvenation, safety compliance\n• **Advanced Medical Laser Technician** (6 Weeks, Advanced) — multi-platform training, complex cases, combination therapies\n\nWhich level interests you?",
      quickReplies: ["Laser Technician", "Advanced Laser", "How to enroll?", "See all courses"],
    };
  }

  // Duration / time
  if (/how long|duration|time|weeks|days|weekend/i.test(q)) {
    return {
      role: "bot",
      text: "Our programs range from intensive weekend courses to comprehensive multi-week diplomas:\n\n⚡ **2-Day Courses:** Plasma PRP, Microneedling, Non-Surgical Butt Lift\n📆 **5-Day Courses:** Botox & Filler, Micropigmentation\n📚 **4–8 Week:** Skin Care, Laser Technician, Medical Aesthetician\n🎓 **12–16 Week:** Medical Aesthetic Specialist, Aesthetic Diploma\n\nShort on time? Our 2-day intensives are a great way to add a skill quickly.",
      quickReplies: ["2-day courses", "Flagship Diploma", "Botox & Filler", "Book a consultation"],
    };
  }

  // Enrollment / how to register
  if (/enroll|register|apply|sign up|how do i|admission|admissions|join/i.test(q)) {
    return {
      role: "bot",
      text: "Enrolling is simple:\n\n1️⃣ Browse our programs at /courses\n2️⃣ Book a free consultation with our admissions team\n3️⃣ Complete your application and choose a start date\n4️⃣ Secure your spot with a deposit\n\nOur admissions team is happy to guide you through the process and help match you with the right program.",
      quickReplies: ["Book a consultation", "See all courses", "Location & contact", "Which course suits me?"],
    };
  }

  // Certification / diploma / accredited
  if (/certif|diploma|accredit|credential|recognised|recognized/i.test(q)) {
    return {
      role: "bot",
      text: "All Ziba Aesthetics programs award industry-recognized certifications upon completion. Our courses are designed to meet Ontario professional standards and prepare you for real-world practice.\n\nThe **Aesthetic Diploma** (16 Weeks) is our most comprehensive credential, covering all major treatment modalities plus business and clinical practicum.",
      quickReplies: ["Aesthetic Diploma", "How to enroll?", "Book a consultation", "See all courses"],
    };
  }

  // Location / address / where
  if (/location|where|address|toronto|thornhill|north york|gta|map|find you/i.test(q)) {
    return {
      role: "bot",
      text: "We're conveniently located in the GTA, serving Toronto, Thornhill, and North York.\n\nFor your specific location details or to schedule a campus visit, please reach out through our contact page or book a consultation — our admissions team will share all location details.",
      quickReplies: ["Book a consultation", "Contact page", "How to enroll?", "See all courses"],
    };
  }

  // Contact / phone / email
  if (/contact|phone|email|call|reach|get in touch/i.test(q)) {
    return {
      role: "bot",
      text: "You can reach us through:\n\n📋 **Contact Form:** Visit our /contact page\n📅 **Book a Consultation:** Schedule a free call with our admissions team\n🌐 **Online Booking:** zibamedicalaesthetics.janeapp.com\n\nOur team typically responds within 1 business day.",
      quickReplies: ["Book a consultation", "See all courses", "Which course suits me?"],
    };
  }

  // Price / cost / fee / tuition
  if (/price|cost|fee|tuition|how much|afford|payment|financing/i.test(q)) {
    return {
      role: "bot",
      text: "Tuition varies by program length and type. We offer flexible payment options and financing plans to make your education accessible.\n\nFor accurate, up-to-date pricing for the program you're interested in, please book a free consultation — our admissions team will walk you through all options.",
      quickReplies: ["Book a consultation", "See all courses", "How to enroll?"],
    };
  }

  // Which course / recommend / suggest / help choose
  if (/which|recommend|suggest|help me choose|not sure|right for me|best for|fit for/i.test(q)) {
    return {
      role: "bot",
      text: "I'd love to help you find the right fit! A few quick questions:\n\n🔹 Are you new to aesthetics or already practicing?\n🔹 Are you interested in injectables, skincare, lasers, or permanent makeup?\n🔹 How much time can you dedicate — a weekend, a few weeks, or a full program?\n\nOr book a free consultation and our admissions team will do a full career assessment with you.",
      quickReplies: ["I'm a beginner", "I'm experienced", "Show me all courses", "Book a consultation"],
    };
  }

  // Thanks / goodbye
  if (/thank|thanks|bye|goodbye|that's all|that is all/i.test(q)) {
    return {
      role: "bot",
      text: "You're very welcome! It was a pleasure helping you. We look forward to being part of your aesthetics journey. Feel free to chat anytime — good luck! 💫",
      quickReplies: ["See all courses", "Book a consultation"],
    };
  }

  // Fallback
  return {
    role: "bot",
    text: "I'm not sure I caught that — I'm best at answering questions about our programs, admissions, and location. Here are some things I can help with:",
    quickReplies: ["See all courses", "Which course suits me?", "How to enroll?", "Location & contact"],
  };
}

// ── Helpers ──────────────────────────────────────────────────────────────────

function formatText(text: string) {
  return text.split("\n").map((line, i) => {
    const formatted = line
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/^(•\s)/, '<span class="text-[#8B6F4E]">•</span> ');
    return (
      <span key={i} className="block" dangerouslySetInnerHTML={{ __html: formatted || "&nbsp;" }} />
    );
  });
}

// ── Component ────────────────────────────────────────────────────────────────

const WELCOME: Message = {
  role: "bot",
  text: "Hi! I'm the Ziba Aesthetics virtual assistant. I can help you explore our 11 professional training programs, guide you through admissions, or answer any questions about the institute.",
  quickReplies: ["See all courses", "Which course suits me?", "Admissions process", "Location & contact"],
};

export default function ChatBot() {
  const [open, setOpen]         = useState(false);
  const [messages, setMessages] = useState<Message[]>([WELCOME]);
  const [input, setInput]       = useState("");
  const [typing, setTyping]     = useState(false);
  const [unread, setUnread]     = useState(1);
  const [showTeaser, setShowTeaser] = useState(false);
  const bottomRef               = useRef<HTMLDivElement>(null);
  const inputRef                = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  useEffect(() => {
    if (open) {
      setUnread(0);
      setShowTeaser(false);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [open]);

  useEffect(() => {
    if (sessionStorage.getItem("ziba-chat-teaser-dismissed")) return;
    const timer = setTimeout(() => setShowTeaser(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  function dismissTeaser() {
    setShowTeaser(false);
    sessionStorage.setItem("ziba-chat-teaser-dismissed", "1");
  }

  function openChat() {
    setOpen(true);
    dismissTeaser();
  }

  function sendMessage(text: string) {
    const trimmed = text.trim();
    if (!trimmed) return;

    const userMsg: Message = { role: "user", text: trimmed };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setTyping(true);

    setTimeout(() => {
      const reply = getReply(trimmed);
      setTyping(false);
      setMessages((prev) => [...prev, reply]);

      const link = QUICK_REPLY_LINKS[trimmed];
      if (link) {
        setTimeout(() => {
          if (link.startsWith("http")) {
            window.open(link, "_blank", "noopener,noreferrer");
          } else {
            window.location.href = link;
          }
        }, 400);
      }
    }, 700 + Math.random() * 400);
  }

  return (
    <div className="fixed bottom-0 right-0 z-[9999] pointer-events-none">
      {/* Proactive welcome notification */}
      {showTeaser && !open && (
        <div
          className="pointer-events-auto absolute bottom-24 right-6 w-[min(320px,calc(100vw-48px))] rounded-2xl border shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-500"
          style={{ borderColor: "oklch(0.88 0.018 70)", background: "oklch(0.99 0.008 75)" }}
        >
          <div className="px-4 py-3 flex items-center justify-between" style={{ background: "oklch(0.32 0.045 55)" }}>
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full flex items-center justify-center" style={{ background: "oklch(0.68 0.095 70)" }}>
                <Sparkles size={12} className="text-white" />
              </div>
              <p className="text-[12px] font-semibold text-white">Ziba Assistant</p>
            </div>
            <button
              onClick={dismissTeaser}
              aria-label="Dismiss notification"
              className="text-white/60 hover:text-white transition-colors"
            >
              <X size={16} />
            </button>
          </div>
          <button onClick={openChat} className="w-full text-left px-4 py-3 hover:bg-black/[0.02] transition-colors">
            <p className="text-[13px] leading-relaxed" style={{ color: "oklch(0.32 0.045 55)" }}>
              {WELCOME.text}
            </p>
            <p className="text-[11px] font-medium mt-2 flex items-center gap-1" style={{ color: "oklch(0.68 0.095 70)" }}>
              Tap to chat <ChevronRight size={12} />
            </p>
          </button>
        </div>
      )}

      {/* Floating button */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Open chat assistant"
        className="pointer-events-auto absolute bottom-6 right-6 w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95"
        style={{ background: "oklch(0.32 0.045 55)" }}
      >
        {!open && (
          <span
            className="absolute inset-0 rounded-full animate-ping opacity-30"
            style={{ background: "oklch(0.68 0.095 70)" }}
          />
        )}
        {open ? (
          <X size={22} className="text-[#f5f3ef] relative" />
        ) : (
          <MessageCircle size={22} className="text-[#f5f3ef] relative" />
        )}
        {!open && unread > 0 && (
          <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#C4956A] text-white text-[10px] font-bold flex items-center justify-center ring-2 ring-white">
            {unread}
          </span>
        )}
      </button>

      {/* Chat window */}
      <div
        className={`pointer-events-auto absolute bottom-24 right-6 w-[360px] max-w-[calc(100vw-24px)] flex flex-col rounded-2xl overflow-hidden shadow-2xl border transition-all duration-300 origin-bottom-right ${
          open ? "opacity-100 scale-100" : "opacity-0 scale-95 invisible"
        }`}
        style={{ height: 560, borderColor: "oklch(0.88 0.018 70)", background: "oklch(0.99 0.008 75)" }}
      >
        {/* Header */}
        <div className="px-5 py-4 flex items-center justify-between shrink-0" style={{ background: "oklch(0.32 0.045 55)" }}>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: "oklch(0.68 0.095 70)" }}>
              <Sparkles size={15} className="text-white" />
            </div>
            <div>
              <p className="text-[13px] font-semibold text-white leading-none">Ziba Assistant</p>
              <p className="text-[10px] mt-0.5" style={{ color: "oklch(0.88 0.018 70)" }}>Medical Aesthetics Training</p>
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[10px] text-white/60">Online</span>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 scroll-smooth">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
              <div className="max-w-[85%]">
                {msg.role === "bot" && (
                  <div
                    className="text-[13px] leading-relaxed px-4 py-3 rounded-2xl rounded-tl-sm"
                    style={{ background: "oklch(0.93 0.015 70)", color: "oklch(0.32 0.045 55)" }}
                  >
                    {formatText(msg.text)}
                  </div>
                )}
                {msg.role === "user" && (
                  <div
                    className="text-[13px] leading-relaxed px-4 py-3 rounded-2xl rounded-tr-sm text-white"
                    style={{ background: "oklch(0.32 0.045 55)" }}
                  >
                    {msg.text}
                  </div>
                )}
                {/* Quick replies */}
                {msg.role === "bot" && msg.quickReplies && (
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {msg.quickReplies.map((qr) => (
                      <button
                        key={qr}
                        onClick={() => sendMessage(qr)}
                        className="text-[11px] font-medium px-3 py-1.5 rounded-full border transition-all duration-150 hover:border-[#C4956A] hover:text-[#8B6F4E] flex items-center gap-1"
                        style={{ borderColor: "oklch(0.88 0.018 70)", color: "oklch(0.52 0.035 55)", background: "oklch(0.99 0.008 75)" }}
                      >
                        {qr} <ChevronRight size={10} />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}

          {/* Typing indicator */}
          {typing && (
            <div className="flex justify-start">
              <div className="px-4 py-3 rounded-2xl rounded-tl-sm flex items-center gap-1.5" style={{ background: "oklch(0.93 0.015 70)" }}>
                {[0, 1, 2].map((d) => (
                  <span
                    key={d}
                    className="w-1.5 h-1.5 rounded-full animate-bounce"
                    style={{ background: "oklch(0.52 0.035 55)", animationDelay: `${d * 0.15}s` }}
                  />
                ))}
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        {/* Input */}
        <div className="px-4 py-3 border-t shrink-0" style={{ borderColor: "oklch(0.88 0.018 70)" }}>
          <form
            onSubmit={(e) => { e.preventDefault(); sendMessage(input); }}
            className="flex items-center gap-2"
          >
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about our courses..."
              className="flex-1 text-[13px] px-4 py-2.5 rounded-full border outline-none transition-all"
              style={{
                borderColor: "oklch(0.88 0.018 70)",
                background: "oklch(0.965 0.012 75)",
                color: "oklch(0.32 0.045 55)",
              }}
              onFocus={(e) => (e.target.style.borderColor = "oklch(0.68 0.095 70)")}
              onBlur={(e) => (e.target.style.borderColor = "oklch(0.88 0.018 70)")}
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="w-9 h-9 rounded-full flex items-center justify-center transition-all disabled:opacity-30 hover:scale-105"
              style={{ background: "oklch(0.32 0.045 55)" }}
            >
              <Send size={14} className="text-white" />
            </button>
          </form>
          <p className="text-center text-[10px] mt-2" style={{ color: "oklch(0.65 0.03 60)" }}>
            Powered by Ziba Aesthetics Training Institute
          </p>
        </div>
      </div>
    </div>
  );
}
