// Write your code here
import './index.css'

const EventItem = props => {
  const {eventdetails, displayingEvent, isActive} = props

  const {id, imageUrl, name, location, registrationStatus} = eventdetails
  const onclickingEvent = () => {
    displayingEvent(registrationStatus, id)
  }
  return (
    <li>
      <button type="button" className="button-item">
        <img
          onClick={onclickingEvent}
          alt="event"
          src={imageUrl}
          className={
            isActive ? 'image-styling selected-image' : 'image-styling'
          }
        />
        <p className="heading">{name}</p>
        <p className="description">{location}</p>
      </button>
    </li>
  )
}
export default EventItem
