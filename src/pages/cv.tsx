import SinglePage from '@components/resume/Resume'

const pdfEng = '/oceancv_eng.pdf'
const pdfChn = '/oceancv_chn.pdf'

import { useEffect, useState } from 'react'

const Viewer = () => {
  const [width, setWidth] = useState<number>(0)

  useEffect(() => {
    const scale = 0.95
    setWidth(window.innerWidth * scale)
  }, [])

  return (
    <div className="h-screen lg:h-full w-screen lg:w-full overflow-hidden bg-[#000]">
      <SinglePage pdfEng={pdfEng} pdfChn={pdfChn} width={width} />
    </div>
  )
}

export default Viewer
