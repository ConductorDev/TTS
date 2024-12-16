"use client";

import { useEffect, useRef } from "react";

export function TicketWidget() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const script = document.createElement("script");
    script.src = "https://cdn.tickettailor.com/js/widgets/min/widget.js";
    script.setAttribute("data-url", "https://www.tickettailor.com/all-tickets/thetrainstation/?ref=website_widget&show_search_filter=true&show_date_filter=true&show_sort=true");
    script.setAttribute("data-type", "inline");
    script.setAttribute("data-inline-minimal", "false");
    script.setAttribute("data-inline-show-logo", "false");
    script.setAttribute("data-inline-bg-fill", "true");
    script.setAttribute("data-inline-inherit-ref-from-url-param", "");
    script.setAttribute("data-inline-ref", "website_widget");

    containerRef.current.appendChild(script);

    return () => {
      if (containerRef.current && script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="tt-widget" 
      style={{ backgroundColor: 'hsl(var(--background))', color: 'white' }}
    >
      <div className="tt-widget-fallback">
        <p>
          <a
            href="https://www.tickettailor.com/all-tickets/thetrainstation/?ref=website_widget&show_search_filter=true&show_date_filter=true&show_sort=true"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'white' }}
          >
            Click here to buy tickets
          </a>
          <br />
          <small>
            <a
              href="https://www.tickettailor.com?rf=wdg_224170"
              className="tt-widget-powered"
              rel="noopener noreferrer"
              target="_blank"
              style={{ color: 'white' }}
            >
              Sell tickets online with Ticket Tailor
            </a>
          </small>
        </p>
      </div>
    </div>
  );
}