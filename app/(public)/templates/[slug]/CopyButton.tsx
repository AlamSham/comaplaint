'use client';

import { useState } from 'react';

interface CopyButtonProps {
  content: string;
  slug: string;
}

export default function CopyButton({ content, slug }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(content);
      setCopied(true);
      
      // Increment download count
      await fetch(`/api/templates/${slug}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ incrementDownload: true }),
      });

      setTimeout(() => setCopied(false), 3000);
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  const handlePrint = () => {
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Complaint Letter - ShikayatKaro</title>
          <style>
            body { font-family: sans-serif; padding: 40px; line-height: 1.6; color: #111; }
            h1 { font-size: 18px; margin-bottom: 20px; border-bottom: 2px solid #047857; padding-bottom: 10px; }
            pre { font-family: inherit; white-space: pre-wrap; word-break: break-word; font-size: 14px; }
            .footer { margin-top: 40px; font-size: 11px; color: #666; border-top: 1px solid #ddd; padding-top: 10px; }
          </style>
        </head>
        <body>
          <h1>ShikayatKaro — Consumer Complaint Format</h1>
          <pre>${content}</pre>
          <div class="footer">Generated via ShikayatKaro (https://shikayatkaro.com) • Free Legal Complaint Format</div>
          <script>
            window.onload = function() {
              window.print();
            };
          </script>
        </body>
      </html>
    `);
    printWindow.document.close();
  };

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={handleCopy}
        className={`px-4 py-2.5 rounded-lg text-sm font-semibold transition flex items-center gap-1.5 ${
          copied
            ? 'bg-emerald-700 text-white'
            : 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-sm'
        }`}
      >
        {copied ? '✓ Copied!' : '📋 Copy Text'}
      </button>
      <button
        onClick={handlePrint}
        className="px-4 py-2.5 rounded-lg text-sm font-semibold bg-stone-900 text-white hover:bg-stone-800 transition shadow-sm flex items-center gap-1.5"
      >
        📄 Download PDF / Print
      </button>
    </div>
  );
}
