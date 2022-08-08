import dynamic from 'next/dynamic'

const DynViewer = dynamic(() => import('@components/demo'), {
  ssr: false,
})

export default DynViewer
