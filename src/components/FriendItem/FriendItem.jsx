import './FriendItem.css'

const FriendItem = ({avatar, name, isOnline}) => {
    
  return (
    <div className='friend-item-container'>
        <img src={avatar} alt="Avatar" width="48" className='friend-image'/>
        <p className='friend-name'>{name}</p>
        {/* <p className='friend-status'>{isOnline.toString() === "true" ? "Online" : "Offline"}</p> */}
        {isOnline.toString() === "true" ? <p className='friend-status-online'>Online</p> : <p className='friend-status-offline'>Offline</p>}
    </div>

  )
}

export default FriendItem