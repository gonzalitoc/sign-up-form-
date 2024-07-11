import '../styles/Home.css'
import imageDesktop from '../assets/images/illustration-sign-up-desktop.svg'
import iconList from '../assets/images/icon-list.svg'
import { ChangeEvent, FormEvent, useState } from 'react'

interface HomeProps {
  onSubscribe: (email: string) => void
}

function Home({ onSubscribe }: HomeProps) {
  const [email, setEmail] = useState('')
  const [error, setError] = useState(false)

  const validateEmail = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (validateEmail(email)) {
      onSubscribe(email)
      setEmail('')
      setError(false)
    } else {
      setError(true)
    }
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setEmail(event.target.value)
  }

  return (
    <section className="Home">
      <div className="container">
        <div className="content">
          <h2 className="title">Stay updated!</h2>
          <p className="paragraph">Join 60,000+ product managers receiving montlhy updates on:</p>
          <div className="item">
            <img className="icon" src={iconList} alt="checkbox icons" />
            <span>Product discovery and building what matters</span>
          </div>
          <div className="item">
            <img className="icon" src={iconList} alt="checkbox icons" />
            <span>Measuring to ensure updates are a success</span>
          </div>
          <div className="item">
            <img className="icon" src={iconList} alt="checkbox icons" />
            <span>And much more!</span>
          </div>
          <form action="" onSubmit={handleSubmit} className={`form ${error ? 'form--error' : ''}`}>
            <div className="form-item">
              <label className="label" htmlFor="email">
                Email address
              </label>
              <span className="span">Valid email required</span>
            </div>
            <input className="input" onChange={handleChange} value={email} id="email" placeholder="email@company.com" />
            <button className="button">Subscribe to monthly newsletter</button>
          </form>
        </div>
        <div className="content">
          <img className="image" src={imageDesktop} alt="Imagen de paginas" />
        </div>
      </div>
    </section>
  )
}

export default Home
