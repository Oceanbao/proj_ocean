import s from './Typing.module.css'
import cn from 'clsx'
import ReactTypingEffect from 'react-typing-effect'

const Typing = () => {
  return (
    <ReactTypingEffect
      className={cn(s.typing)}
      staticText="Hi, I'm Ocean. I'm a"
      text={['web developer.', 'danguage geek.', 'data visualiser.']}
      speed={50}
      eraseSpeed={100}
      eraseDelay={3000}
      typingDelay={1000}
      // cursorRenderer={cursor => <h1>{cursor}</h1>}
      displayTextRenderer={(text, i) => {
        return (
          <h1>
            {text.split('').map((char, i) => {
              const key = `${i}`
              return (
                <span key={key} style={{ color: '#FBD26A' }}>
                  {char}
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
