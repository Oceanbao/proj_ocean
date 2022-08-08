import React, { useState } from 'react'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5'

export default function AllPages({ pdf }: { pdf: any }) {
  const [numPages, setNumPages] = useState<number | null>(null)

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages)
  }

  return (
    <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
      {Array.from(new Array(numPages), (el, index) => (
        <Page key={`page_${index + 1}`} pageNumber={index + 1} />
      ))}
    </Document>
  )
}
