import s from './Typing.module.css'
import cn from 'clsx'
import ReactTypingEffect from 'react-typing-effect'
import { useRef, useEffect } from 'react'

import { randHex } from '@components/loader/Loader'

const Typing = () => {
  const boxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const boxRefLocal = boxRef.current!

    function changeColor() {
      boxRefLocal.setAttribute('style', `--color-one: ${randHex()}; --color-two: ${randHex()}`)
    }

    const loop = setInterval(changeColor, 500)

    return () => clearInterval(loop)
  }, [])

  return (
    <div ref={boxRef}>
      <ReactTypingEffect
        className={cn(s.typing)}
        staticText="I"
        text={['create web apps.', 'write language content.', 'visualise data.']}
        speed={50}
        eraseSpeed={100}
        eraseDelay={3000}
        typingDelay={1000}
        // cursorRenderer={cursor => <h1>{cursor}</h1>}
        displayTextRenderer={(text, i) => {
          return (
            <h1>
              {text.split(' ').map((ss, i) => {
                const key = `${i}`
                let color = 'var(--color-one)'
                if (i === 0) color = 'var(--color-two)'
                return (
                  <span key={key} style={{ color }}>
                    {ss + ' '}
                  </span>
                )
              })}
            </h1>
          )
        }}
      />
    </div>
  )
}

export default Typing
