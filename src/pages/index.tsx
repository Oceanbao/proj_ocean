import SinglePage from '@components/SinglePage'

const PDF = '/oceancv_eng.pdf'

import { useEffect, useState } from 'react'

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

const Viewer = () => {
  const [width, setWidth] = useState<number>(0)

  useEffect(() => {
    const scale = 0.98
    setWidth(window.innerWidth * scale)
  }, [])

  return (
    <div className="h-screen w-screen overflow-auto">
      <SinglePage pdf={PDF} width={width} />
    </div>
  )
}

export default Viewer
