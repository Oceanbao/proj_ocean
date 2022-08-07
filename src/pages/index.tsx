import dynamic from 'next/dynamic'

const DynViewer = dynamic(() => import('@components/demo/Demo'), {
  ssr: false,
})

export default DynViewer
