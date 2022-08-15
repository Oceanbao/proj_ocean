import Image from 'next/image'
import Link from 'next/link'
import cn from 'clsx'
import s from './Landing.module.css'

import Typing from './typing'
import Loader from '@components/loader'

// #002FA7
// #FBD26A
// #470024
// #01847F
// #492D22
// #003153
// #D44848

const Laughing = () => {
  return (
    <div className="fixed top-[2vh] left-[4vw] lg:left-[1vw] ">
      <Image src="/laughing.svg" width={40} height={40} layout="fixed" className="rounded-full" />
    </div>
  )
}

const Landing = () => {
  return (
    <section className={cn(s.root)}>
      <Laughing />
      <Loader />
      <p className="text-white h-[10vh]">(en train de consruire...)</p>
      <p className="text-white">
        Hi, Ocean here.{' '}
        <Link href="/cv">
          <a className="text-[#0070f3]">(CV)</a>
        </Link>
      </p>
      <Typing />
    </section>
  )
}

export default Landing
