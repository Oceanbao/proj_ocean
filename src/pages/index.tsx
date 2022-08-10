import SinglePage, { Spinner } from '@components/SinglePage'

const PDF = '/oceancv_eng.pdf'

import { useEffect, useState } from 'react'

const Viewer = () => {
  const [width, setWidth] = useState<number>(0)

  useEffect(() => {
    const scale = 0.95
    setWidth(window.innerWidth * scale)
  }, [])

  return (
    <div className="h-screen w-screen overflow-auto">
      <SinglePage pdf={PDF} width={width} />
    </div>
  )
}

export default Viewer
