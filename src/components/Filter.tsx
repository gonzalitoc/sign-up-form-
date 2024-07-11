import { useState } from 'react'
import Home from './Home'
import Subscribed from './Subscribed'

function Filter() {
  const [subscribedEmail, setSubscribedEmail] = useState('')
  const [changeState, setChangeState] = useState(false)

  const handleSubscribe = (email: string) => {
    setSubscribedEmail(email)
    setChangeState(true)
  }

  return (
    <>
      {!changeState && <Home onSubscribe={handleSubscribe} />}
      {changeState && <Subscribed email={subscribedEmail} />}
    </>
  )
}

export default Filter
