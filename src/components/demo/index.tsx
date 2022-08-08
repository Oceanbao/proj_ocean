import { usePDF } from '@react-pdf/renderer'

import PageWrap from './PageWrap'
// import AllPages from './AllPage'
import SinglePage from './SinglePage'
import { useEffect, useState } from 'react'

const Viewer = () => {
  const [instance, _updateInstance] = usePDF({ document: PageWrap })
  const [width, setWidth] = useState<number>(0)

  useEffect(() => {
    const scale = 0.95
    setWidth(window.innerWidth * scale)
  }, [])

  return (
    <div className="h-screen w-screen overflow-auto">
      {instance.loading && <div>Loading...</div>}
      {instance.error && <div>ERROR</div>}
      {/* {instance.url && <AllPages pdf={instance.url} />} */}
      {instance.url && (
        <>
          <SinglePage pdf={instance.url} width={width} />
        </>
      )}
    </div>
  )
}

export default Viewer
