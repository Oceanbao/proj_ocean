import cn from 'clsx'
import s from './RotateSqaure.module.css'

export const RotateSquare = () => {
  return (
    <div className={cn(s.rotation)}>
      <div className={cn(s.loader)}>
        <div className="top-[-100%] left-[-2px] origin-bottom-right before:!bg-[#ff0]"></div>
        <div className="right-[-100%] top-[-2px] origin-bottom-left before:!bg-[#0f0]"></div>
        <div className="bottom-[-100%] left-[2px] origin-top-left before:!bg-[#ff4786]"></div>
        <div className="left-[-100%] top-[2px] origin-top-right before:!bg-[#2da2ff]"></div>
      </div>
    </div>
  )
}

export const RotateSquareAlt = () => {
  return (
    <div className={cn(s.rotationAlt)}>
      <div className={cn(s.loaderAlt)}>
        <div className="left-[-100%] top-[2px] origin-top-right before:!bg-[#D44848]"></div>
        <div className="top-[-100%] left-[-2px] origin-bottom-right before:!bg-[#002FA7]"></div>
        <div className="right-[-100%] top-[-2px] origin-bottom-left before:!bg-[#FBD26A]"></div>
        <div className="bottom-[-100%] left-[2px] origin-top-left before:!bg-[#492D22]"></div>
      </div>
    </div>
  )
}
