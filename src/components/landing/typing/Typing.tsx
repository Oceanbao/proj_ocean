import s from './Typing.module.css'
import cn from 'clsx'
import ReactTypingEffect from 'react-typing-effect'

const Typing = () => {
  return (
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
              let color = '#F038FF'
              if (i === 0) color = '#FF4136'
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
  )
}

export default Typing
