import React from 'react'

const SwipeDetector = ({onRightSwipe, onLeftSwipe,children,disabled=false}) => {
const [touchStart, setTouchStart] = useState(null)
const [touchEnd, setTouchEnd] = useState(null)

const minSwipeDistance = 30 

const onTouchStart = (e) => {
  setTouchEnd(null) 
  setTouchStart(e.targetTouches[0].clientX)
}

const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX)

const onTouchEnd = () => {
  if (!touchStart || !touchEnd || disabled) return
  const distance = touchStart - touchEnd
  const isLeftSwipe = distance > minSwipeDistance
  if(isLeftSwipe) return onLeftSwipe()
  const isRightSwipe = distance < -minSwipeDistance
  if (isRightSwipe) return onRightSwipe()
}
  return (
    <div onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>{children}</div>
  )
}

export default SwipeDetector