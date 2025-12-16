'use client'

import { useState, useRef, useEffect } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import { ChevronLeft, ChevronRight, X, ZoomIn, ZoomOut } from 'lucide-react'
import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'

// Set worker source
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`

interface MenuPDFViewerProps {
  pdfUrl: string
  onClose: () => void
}

export default function MenuPDFViewer({ pdfUrl, onClose }: MenuPDFViewerProps) {
  const [numPages, setNumPages] = useState<number>(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [scale, setScale] = useState(1.0)

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages)
  }

  const nextPage = () => {
    if (currentPage < numPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const zoomIn = () => {
    setScale((prev) => Math.min(prev + 0.2, 2.0))
  }

  const zoomOut = () => {
    setScale((prev) => Math.max(prev - 0.2, 0.6))
  }

  return (
    <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center">
      {/* Header Controls */}
      <div className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-black/80 to-transparent z-10">
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

      {/* PDF Viewer Container */}
      <div className="relative flex items-center justify-center w-full h-full pt-20 pb-24 overflow-auto">
        <Document
          file={pdfUrl}
          onLoadSuccess={onDocumentLoadSuccess}
          loading={
            <div className="text-accent text-center">
              <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-accent mx-auto mb-4"></div>
              <p>Loading menu...</p>
            </div>
          }
          error={
            <div className="text-red-500 text-center">
              <p>Failed to load menu PDF.</p>
              <p className="text-sm mt-2">Please try again later.</p>
            </div>
          }
        >
          <div className="bg-white shadow-2xl">
            <Page
              pageNumber={currentPage}
              scale={scale}
              renderTextLayer={true}
              renderAnnotationLayer={true}
            />
          </div>
        </Document>

        {/* Navigation Buttons */}
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-4 rounded-full bg-accent/20 hover:bg-accent/40 text-accent transition-all disabled:opacity-30 disabled:cursor-not-allowed shadow-xl"
          aria-label="Previous page"
        >
          <ChevronLeft size={32} />
        </button>

        <button
          onClick={nextPage}
          disabled={currentPage >= numPages}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-4 rounded-full bg-accent/20 hover:bg-accent/40 text-accent transition-all disabled:opacity-30 disabled:cursor-not-allowed shadow-xl"
          aria-label="Next page"
        >
          <ChevronRight size={32} />
        </button>
      </div>

      {/* Footer - Page Counter */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
        <div className="text-center text-text-light">
          Page {currentPage} of {numPages}
        </div>
      </div>
    </div>
  )
}
