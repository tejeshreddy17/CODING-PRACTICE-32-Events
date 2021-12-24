// Write your code here
import './index.css'

const ActiveEventRegistration = props => {
  const {status} = props

  switch (status) {
    case 'YET_TO_REGISTER':
      return (
        <div className="registration-status-card">
          <img
            alt="yet to register"
            className="registration-status"
            src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
          />
          <p className="registration-heading">
            A live performance brings so much to your relationship with dance
          </p>
          <button className="register-button">Register Here</button>
        </div>
      )

    case 'REGISTERED':
      return (
        <div className="registration-status-card">
          <img
            alt="registered"
            className="registration-status"
            src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
          />
          <h1 className="registration-heading">
            You have already registered for the event
          </h1>
        </div>
      )
    case 'REGISTRATIONS_CLOSED':
      return (
        <div className="registration-status-card">
          <img
            alt="registrations closed"
            className="registration-status"
            src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
          />
          <h1 className="registration-heading">
            Registrations Are Closed Now!
          </h1>
          <p className="registration-heading">Stay tuned. We will reopen</p>
        </div>
      )
    default:
      return (
        <div className="registration-status-card">
          <p className="registration-heading">
            Click on an event, to view its registration details
          </p>
        </div>
      )
  }
}
export default ActiveEventRegistration
