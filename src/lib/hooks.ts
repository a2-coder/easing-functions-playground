import { useCallback, useEffect, useState } from "react";

/**
 * Hook to copy text to clipboard
 */
export function useCopyToClipboard() {
  const [copied, setCopied] = useState(false);
  const copy = useCallback((text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }, []);
  return { copy, copied };
}

/**
 * Hook to get the bounding rect of an element
 * @param ref - The ref to the element to observe
 * @returns The bounding rect of the element
 */
export function useBoundingRect(ref: React.RefObject<HTMLElement | null>) {
  const [rect, setRect] = useState<DOMRectReadOnly | null>(null);
  useEffect(() => {
    if (ref.current) {
      // create a resize observer
      const observer = new ResizeObserver((entries) => {
        const entry = entries[0];
        if (entry.contentRect) {
          setRect(entry.contentRect);
        }
      });
      observer.observe(ref.current);
      return () => {
        observer.disconnect();
      };
    }
  }, [ref]);
  return rect;
}
