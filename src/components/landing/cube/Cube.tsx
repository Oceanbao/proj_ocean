import { useRef, useEffect } from 'react'
import cn from 'clsx'
import s from './Cube.module.css'
import { gsap, Power2, Power3, Elastic } from 'gsap'

const Cube = () => {
  const reactRef = useRef<HTMLDivElement>(null)
  const vanillaRef = useRef<HTMLDivElement>(null)
  const angularRef = useRef<HTMLDivElement>(null)
  const vueRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let boxToCenter: HTMLDivElement, boxesToReset, dotColor

    const reaBox = reactRef.current!
    const vanBox = vanillaRef.current!
    const angBox = angularRef.current!
    const vueBox = vueRef.current!

    // Center React
    function centerReact() {
      if (boxToCenter !== reaBox) {
        boxToCenter = reaBox
        boxesToReset = [vanBox, angBox, vueBox]
        dotColor = 'rgb(' + getComputedStyle(document.documentElement).getPropertyValue('--blue') + ')'
        animateBoxes(boxToCenter, boxesToReset, dotColor)
      }
    }

    // Center Vanilla
    function centerVanilla() {
      if (boxToCenter !== vanBox) {
        boxToCenter = vanBox
        boxesToReset = [reaBox, angBox, vueBox]
        dotColor = 'rgb(' + getComputedStyle(document.documentElement).getPropertyValue('--orange') + ')'
        animateBoxes(boxToCenter, boxesToReset, dotColor)
      }
    }

    // Center Vue
    function centerVue() {
      if (boxToCenter !== vueBox) {
        boxToCenter = vueBox
        boxesToReset = [vanBox, angBox, reaBox]
        dotColor = 'rgb(' + getComputedStyle(document.documentElement).getPropertyValue('--green') + ')'
        animateBoxes(boxToCenter, boxesToReset, dotColor)
      }
    }

    // Center Angular
    function centerAngular() {
      if (boxToCenter !== angBox) {
        boxToCenter = angBox
        boxesToReset = [vanBox, reaBox, vueBox]
        dotColor = 'rgb(' + getComputedStyle(document.documentElement).getPropertyValue('--red') + ')'
        animateBoxes(boxToCenter, boxesToReset, dotColor)
      }
    }

    // Set animating function
    // @ts-ignore
    function animateBoxes(boxToCenter, boxesToReset, dotColor) {
      const tl = gsap.timeline()
      tl.addLabel('start')

      // Animate box to center
      tl.to(boxToCenter, { duration: 0.2, scale: 0.55 }, 'start')
      tl.to(boxToCenter, { duration: 0.7, left: '0', bottom: '0', ease: Power3.easeIn })
      tl.to(boxToCenter, { duration: 0.7, scale: 0.8, ease: Elastic.easeOut })
      tl.to('html', { duration: 0.2, '--dot-color': dotColor }, '-=.7')

      // Call function to reset other boxes
      resetBoxes(boxesToReset)
    }

    // @ts-ignore
    function resetBoxes(boxesToReset) {
      // Loop over all the boxes that it should reset, check which box it is, and animate accordingly
      for (let i = 0; i < boxesToReset.length; i++) {
        if (boxesToReset[i].classList.contains(s.react)) {
          gsap
            .timeline()
            .to(boxesToReset[i], { duration: 0.6, scale: 0.5, left: '0', bottom: '150px', ease: Power2.easeOut })
        } else if (boxesToReset[i].classList.contains(s.vanilla)) {
          gsap
            .timeline()
            .to(
              boxesToReset[i],
              { duration: 0.6, scale: 0.5, left: '150px', bottom: '0', ease: Power2.easeOut },
              'start'
            )
        } else if (boxesToReset[i].classList.contains(s.angular)) {
          gsap
            .timeline()
            .to(
              boxesToReset[i],
              { duration: 0.6, scale: 0.5, left: '0', bottom: '-150px', ease: Power2.easeOut },
              'start'
            )
        } else if (boxesToReset[i].classList.contains(s.vue)) {
          gsap
            .timeline()
            .to(
              boxesToReset[i],
              { duration: 0.6, scale: 0.5, left: '-150px', bottom: '0', ease: Power2.easeOut },
              'start'
            )
        }
      }
    }

    // Setup eventlisteners
    reaBox.addEventListener('click', function () {
      centerReact()
    })
    vanBox.addEventListener('click', function () {
      centerVanilla()
    })
    vueBox.addEventListener('click', function () {
      centerVue()
    })
    angBox.addEventListener('click', function () {
      centerAngular()
    })
  }, [])

  return (
    <div className={cn(s.root)}>
      <div className={cn(s.dotsContainer)}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={cn(s.cubeContainer)}>
        <div ref={reactRef} className={cn(s.react)}>
          <div className={cn(s.cubeBox)}>
            <div className={cn(s.cubeSide, s.cubeFront)}></div>
            <div className={cn(s.cubeSide, s.cubeBack)}></div>
            <div className={cn(s.cubeSide, s.cubeLeft)}></div>
            <div className={cn(s.cubeSide, s.cubeRight)}></div>
            <div className={cn(s.cubeSide, s.cubeTop)}></div>
            <div className={cn(s.cubeSide, s.cubeBottom)}></div>
          </div>
        </div>
        <div ref={vanillaRef} className={cn(s.vanilla)}>
          <div className={cn(s.cubeBox)}>
            <div className={cn(s.cubeSide, s.cubeFront)}></div>
            <div className={cn(s.cubeSide, s.cubeBack)}></div>
            <div className={cn(s.cubeSide, s.cubeLeft)}></div>
            <div className={cn(s.cubeSide, s.cubeRight)}></div>
            <div className={cn(s.cubeSide, s.cubeTop)}></div>
            <div className={cn(s.cubeSide, s.cubeBottom)}></div>
          </div>
        </div>
        <div ref={vueRef} className={cn(s.vue)}>
          <div className={cn(s.cubeBox)}>
            <div className={cn(s.cubeSide, s.cubeFront)}></div>
            <div className={cn(s.cubeSide, s.cubeBack)}></div>
            <div className={cn(s.cubeSide, s.cubeLeft)}></div>
            <div className={cn(s.cubeSide, s.cubeRight)}></div>
            <div className={cn(s.cubeSide, s.cubeTop)}></div>
            <div className={cn(s.cubeSide, s.cubeBottom)}></div>
          </div>
        </div>
        <div ref={angularRef} className={cn(s.angular)}>
          <div className={cn(s.cubeBox)}>
            <div className={cn(s.cubeSide, s.cubeFront)}></div>
            <div className={cn(s.cubeSide, s.cubeBack)}></div>
            <div className={cn(s.cubeSide, s.cubeLeft)}></div>
            <div className={cn(s.cubeSide, s.cubeRight)}></div>
            <div className={cn(s.cubeSide, s.cubeTop)}></div>
            <div className={cn(s.cubeSide, s.cubeBottom)}></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cube
