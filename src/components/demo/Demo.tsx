import { PDFViewer, PDFDownloadLink, BlobProvider } from '@react-pdf/renderer'

import Resume from './resume'
import PageWrap from './PageWrap'

const Viewer = () => {
  return (
    <div className="">
      {/* <PDFDownloadLink document={<Document />} fileName="document.pdf" className=""> */}
      {/*   {({ blob, url, loading, error }) => loading ? 'Loading...' : 'Download now!'} */}
      {/* </PDFDownloadLink> */}
      <BlobProvider document={<PageWrap />}>
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
