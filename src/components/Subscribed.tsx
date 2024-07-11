import iconSucess from '../assets/images/icon-success.svg'
import '../styles/Subscribed.css'

interface SubcribedProps {
  email: string
}

function Subscribed({ email }: SubcribedProps) {
  return (
    <section className="subscribed">
      <div>
        <img src={iconSucess} alt="checkbox icon" />
        <h2 className="titleSub">Thanks for subscribing!</h2>
        <p className="paragraphSub">
          A confirmation email has been sent to
          <span className="span"> {email}</span>. Please open it and click the button inside to confirm your
          subscription
        </p>
        <form>
          <button className="button" type="submit">
            Dismiss message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Subscribed
