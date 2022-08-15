import cn from 'clsx'
import s from './Loader.module.css'

const Loader = () => {
  return (
    <div className={cn(s.loading)}>
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
