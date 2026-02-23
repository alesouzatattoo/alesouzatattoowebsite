/* ============================================================
   ACCORDION SECTION — Expandable content sections
   Design: Dark Studio Aesthetic — cyan accents
   ============================================================ */

import { useState } from "react";

interface AccordionItem {
  title: string;
  content: React.ReactNode;
}

interface AccordionSectionProps {
  items: AccordionItem[];
}

export default function AccordionSection({ items }: AccordionSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-2">
      {items.map((item, i) => (
        <div
          key={i}
          className="card-glow rounded-lg overflow-hidden"
          style={{ transition: "all 0.3s ease" }}
        >
          <button
            className="w-full flex items-center justify-between p-5 text-left"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          >
            <span
              style={{
                fontFamily: "'Cinzel', serif",
                color: openIndex === i ? "#00d4e8" : "rgba(255,255,255,0.8)",
                fontSize: "0.9rem",
                fontWeight: 600,
                letterSpacing: "0.05em",
                transition: "color 0.3s ease",
              }}
            >
              {item.title}
            </span>
            <span
              style={{
                color: "#00d4e8",
                fontSize: "1.2rem",
                transform: openIndex === i ? "rotate(45deg)" : "rotate(0deg)",
                transition: "transform 0.3s ease",
                display: "inline-block",
              }}
            >
              +
            </span>
          </button>
          {openIndex === i && (
            <div
              className="px-5 pb-5"
              style={{
                fontFamily: "'Raleway', sans-serif",
                color: "rgba(255,255,255,0.75)",
                fontSize: "0.875rem",
                lineHeight: "1.7",
              }}
            >
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
