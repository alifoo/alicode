'use client';
import React, { useEffect, useRef } from 'react';

interface WindowWithHLJS extends Window {
  hljs?: {
    highlightElement: (element: HTMLElement) => void;
  };
}

interface SyntaxHighlightedCodeProps {
  className?: string;
  children?: React.ReactNode;
}

const SyntaxHighlightedCode: React.FC<SyntaxHighlightedCodeProps> = (props) => {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // Cast window to WindowWithHLJS to inform TypeScript about the hljs property
    const windowWithHLJS = window as WindowWithHLJS;

    if (ref.current && props.className?.includes('lang-') && windowWithHLJS.hljs) {
      windowWithHLJS.hljs.highlightElement(ref.current);

      // hljs won't reprocess the element unless this attribute is removed
      ref.current.removeAttribute('data-highlighted');
    }
  }, [props.className, props.children]);

  return <code {...props} ref={ref} />;
};

export default SyntaxHighlightedCode;
