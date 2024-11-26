import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

// Set up the worker for PDF.js
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

interface PDFViewerProps {
  pdfUrl: string;
  onClose: () => void;
}

export const PDFViewer: React.FC<PDFViewerProps> = ({ pdfUrl, onClose }) => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  const goToPrevPage = () => {
    setPageNumber(prev => Math.max(1, prev - 1));
  };

  const goToNextPage = () => {
    setPageNumber(prev => Math.min(numPages || prev, prev + 1));
  };

  const zoomIn = () => {
    setScale(prev => Math.min(2, prev + 0.1));
  };

  const zoomOut = () => {
    setScale(prev => Math.max(0.5, prev - 0.1));
  };

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullScreen(true);
    } else {
      document.exitFullscreen();
      setIsFullScreen(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex flex-col">
      {/* Header */}
      <div className="bg-white p-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-800"
          >
            ✕
          </button>
          <div className="text-gray-600">
            Page {pageNumber} of {numPages}
          </div>
        </div>
        <div className="flex items-center space-x-4">
          {/* Zoom Controls */}
          <button
            onClick={zoomOut}
            className="p-2 text-gray-600 hover:text-gray-800"
            title="Zoom Out"
          >
            🔍-
          </button>
          <span className="text-gray-600">{Math.round(scale * 100)}%</span>
          <button
            onClick={zoomIn}
            className="p-2 text-gray-600 hover:text-gray-800"
            title="Zoom In"
          >
            🔍+
          </button>
          {/* Full Screen Toggle */}
          <button
            onClick={toggleFullScreen}
            className="p-2 text-gray-600 hover:text-gray-800"
            title="Toggle Full Screen"
          >
            {isFullScreen ? '⤓' : '⤢'}
          </button>
        </div>
      </div>

      {/* PDF Content */}
      <div className="flex-1 overflow-auto flex items-center justify-center">
        <Document
          file={pdfUrl}
          onLoadSuccess={onDocumentLoadSuccess}
          loading={
            <div className="text-white flex items-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mr-2"></div>
              Loading PDF...
            </div>
          }
          error={
            <div className="text-red-500">
              Failed to load PDF. Please try again later.
            </div>
          }
        >
          <Page
            pageNumber={pageNumber}
            scale={scale}
            renderTextLayer={true}
            renderAnnotationLayer={true}
          />
        </Document>
      </div>

      {/* Footer Navigation */}
      <div className="bg-white p-4 flex justify-center space-x-4">
        <button
          onClick={goToPrevPage}
          disabled={pageNumber <= 1}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Previous
        </button>
        <button
          onClick={goToNextPage}
          disabled={pageNumber >= (numPages || 1)}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div>
    </div>
  );
};