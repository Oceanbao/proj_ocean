import React, { useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'

pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.js'

/*
KLEIN BLUE
#002FA7
R0 G47 B167

SCHONBRUNNER GELB
#FBD26A
251 210 106

BURGRUNDY RED
#470024
71 0 36

MARRS GREEN
#01847F
1 132 127

VANDYKE BROWN
#492D22
73 45 34

PRUSSIAN BLUE
#003153
0 49 83

TITIAN RED
#D44848
212 72 72
*/

const Loading = () => {
  return (
    <div className="absolute top-[5%] left-[50%] translate-x-[-50%]">
      {Array.from(Array(5).keys()).map((item, i) => (
        <div key={i} className="w-[80vw] h-20 border-2 rounded-md mx-auto">
          <div className="flex animate-pulse flex-row items-center h-full justify-center space-x-5">
            <div className="w-[18vw] bg-gray-300 h-12 rounded-full "></div>
            <div className="flex flex-col space-y-3">
              <div className="w-[58vw] bg-gray-300 h-6 rounded-md "></div>
              <div className="w-[58vw] bg-gray-300 h-6 rounded-md "></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

const Spinner = () => <div className="spinnerBox"></div>

export default function SinglePage({ pdf, width }: { pdf: any; width: number }) {
  const [numPages, setNumPages] = useState<number | null>(null)
  const [pageNumber, setPageNumber] = useState(1) //setting 1 to show fisrt page

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages)
    setPageNumber(1)
  }

  function changePage(offset: number) {
    setPageNumber(prevPageNumber => prevPageNumber + offset)
  }

  function previousPage() {
    if (pageNumber > 1) changePage(-1)
  }

  function nextPage() {
    if (pageNumber < numPages!) changePage(1)
  }

  return (
    <>
      <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess} loading={<Spinner />}>
        <Page width={width} pageNumber={pageNumber} />
      </Document>

      <div className="flex gap-2 justify-around items-center flex-wrap mb-2">
        <div className="flex gap-2">
          <button className="rounded-md px-2 py-2 text-[#470024] bg-[#FBD26A]" type="button">
            {'\u4e2d'}
          </button>
          <button className="rounded-md px-2 py-2 text-[#470024] bg-[#FBD26A]" type="button">
            {'EN'}
          </button>
        </div>

        <div className="flex flex-col justify-center items-center gap-2">
          <p className="text-center">
            Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
          </p>
          <div className="flex gap-2">
            <span className="cursor-pointer bg-[#002FA7] text-[#FBD26A] rounded-md p-1" onClick={previousPage}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 inline-block"
                fill="currentColor"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </span>
            <span className="cursor-pointer bg-[#002FA7] text-[#FBD26A] rounded-md p-1" onClick={nextPage}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 inline-block"
                fill="currentColor"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </div>
        </div>

        <button
          className="rounded-md px-2 py-2 text-[#470024] bg-[#FBD26A]"
          type="button"
          onClick={() => window.open(pdf)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </>
  )
}
