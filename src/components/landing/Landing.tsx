import cn from 'clsx'
import s from './Landing.module.css'

import Typing from './typing'

// #002FA7
// #FBD26A
// #470024
// #01847F
// #492D22
// #003153
// #D44848

const Landing = () => {
  return (
    <div className={cn(s.root)}>
      <Typing />
    </div>
  )
}

export default Landing
