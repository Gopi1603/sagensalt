'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, X, ZoomIn, ZoomOut, Download } from 'lucide-react'

interface SimplePDFViewerProps {
  pdfUrl: string
  onClose: () => void
}

export default function SimplePDFViewer({ pdfUrl, onClose }: SimplePDFViewerProps) {
  const [scale, setScale] = useState(1.0)

  const zoomIn = () => {
    setScale((prev) => Math.min(prev + 0.2, 2.0))
  }

  const zoomOut = () => {
    setScale((prev) => Math.max(prev - 0.2, 0.6))
  }

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = pdfUrl
    link.download = 'sage-n-salt-menu.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="fixed inset-0 z-[100] bg-black/95 flex flex-col">
      {/* Header Controls */}
      <div className="flex-none p-4 bg-gradient-to-b from-black/80 to-transparent">
        <div className="container-custom flex items-center justify-between">
          <div className="text-accent font-heading text-2xl">Menu</div>
          
          <div className="flex items-center gap-4">
            {/* Zoom Controls */}
            <button
              onClick={zoomOut}
              className="p-2 rounded-lg bg-accent/20 hover:bg-accent/30 text-accent transition-colors"
              aria-label="Zoom out"
            >
              <ZoomOut size={20} />
            </button>
            <span className="text-text-light text-sm">{Math.round(scale * 100)}%</span>
            <button
              onClick={zoomIn}
              className="p-2 rounded-lg bg-accent/20 hover:bg-accent/30 text-accent transition-colors"
              aria-label="Zoom in"
            >
              <ZoomIn size={20} />
            </button>

            {/* Download Button */}
            <button
              onClick={handleDownload}
              className="p-2 rounded-lg bg-accent/20 hover:bg-accent/30 text-accent transition-colors"
              aria-label="Download menu"
            >
              <Download size={20} />
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-accent/20 hover:bg-accent/30 text-accent transition-colors"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* PDF Viewer - Using native browser PDF viewer */}
      <div className="flex-1 overflow-auto p-4">
        <div className="flex justify-center" style={{ transform: `scale(${scale})`, transformOrigin: 'top center' }}>
          <iframe
            src={`${pdfUrl}#toolbar=0&navpanes=0&scrollbar=1`}
            className="w-full max-w-4xl h-[calc(100vh-120px)] bg-white shadow-2xl rounded-lg"
            title="Menu PDF"
          />
        </div>
      </div>

      {/* Instructions */}
      <div className="flex-none p-4 bg-gradient-to-t from-black/80 to-transparent">
        <div className="text-center text-text-light text-sm">
          <p>Scroll to view all pages • Use zoom controls to adjust size</p>
        </div>
      </div>
    </div>
  )
}
