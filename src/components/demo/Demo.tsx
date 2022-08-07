import React, { useState } from 'react'
import { PDFViewer, PDFDownloadLink, BlobProvider } from '@react-pdf/renderer'

import Resume from './resume'
import PageWrap from './PageWrap'

const DEMO = {
  resume: Resume,
  pageWrap: PageWrap,
}

type TDEMO = keyof typeof DEMO

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex flex-1 p-[1em] z-[500] items-center justify-center">{children}</div>
}

const Viewer = () => {
  const [example, setExample] = useState<TDEMO>('pageWrap')

  console.log(example)

  const handleExampleChange = (e: any) => {
    console.log('CHANGING')
    setExample(e.target.dataset.name)
  }

  const Document = DEMO[example]

  return (
    <div className="">
      <h2>Examples</h2>

      <ul>
        {Object.keys(DEMO).map(value => (
          <li key={value} data-name={value} role="presentation" onClick={handleExampleChange}>
            {value}
          </li>
        ))}
      </ul>

      {/* <PDFDownloadLink document={<Document />} fileName="document.pdf" className=""> */}
      {/*   {({ blob, url, loading, error }) => loading ? 'Loading...' : 'Download now!'} */}
      {/* </PDFDownloadLink> */}
      <BlobProvider document={<Document />}>
        {({ blob, url, loading, error }) => {
          if (loading) return <div>Rendering...</div>
          // if (!loading && url) return <a href={url} download> - Download PDF</a>
          if (!loading && url) return <a onClick={() => window.open(url)}> - Open PDF</a>
          if (error) return <div>Error</div>
        }}
      </BlobProvider>
    </div>
  )
}

export default Viewer
