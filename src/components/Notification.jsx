const Notification = ({ icon, text }) => {
  return (
    <div className='notification'>
      <span className='icon'>{icon}</span>
      <span>{text}</span>
    </div>
  )
}

export default Notification