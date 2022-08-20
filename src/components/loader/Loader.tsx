import cn from 'clsx'
import s from './Loader.module.css'
import { useRef, useEffect } from 'react'

const randomColor = () => {
  return '#' + (((1 << 24) * Math.random()) | 0).toString(16)
}

function ChanelRand() {
  return Math.floor(Math.random() * (256 + 1))
}
function rgbRand() {
  return [ChanelRand(), ChanelRand(), ChanelRand()]
}
function rgbToHex(rgb: number[]) {
  return ((1 << 24) + (rgb[0] << 16) + (rgb[1] << 8) + rgb[2]).toString(16).slice(1)
}
function colorRand() {
  return rgbToHex(rgbRand())
}

export const randHex = () => '#' + colorRand()
const randRGB = () => 'rgb(' + ChanelRand() + ',' + ChanelRand() + ',' + ChanelRand() + ')'

const Loader = () => {
  const boxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const boxRefLocal = boxRef.current!

    function changeColor() {
      boxRefLocal.setAttribute('style', `--color-square-start: ${randHex()}; --color-square-end: ${randHex()}`)
    }

    const loop = setInterval(changeColor, 1500)

    return () => clearInterval(loop)
  }, [])

  return (
    <div ref={boxRef} className={cn(s.loading)}>
      <div className={cn(s.loadingCenter)}>
        <div className={cn(s.loadingAbsolute)}>
          <div className={cn(s.object, s.objectOne)}></div>
          <div className={cn(s.object, s.objectTwo)}></div>
          <div className={cn(s.object, s.objectThree)}></div>
          <div className={cn(s.object, s.objectFour)}></div>
        </div>
      </div>
    </div>
  )
}

export default Loader
