import FriendItem from '../FriendItem/FriendItem'
import './FriendsList.css'


const FriendsList = ({friends}) => {
    
  return (
    <ul className='friend-list'>
        
        {friends.map(friend => (
        <li key = {friend.id} className='friend-list-item'>
            <FriendItem 
                avatar = {friend.avatar}
                name = {friend.name}
                isOnline = {friend.isOnline}
            /> 
        </li>
        ))}
        
    </ul> 
  )
}

export default FriendsList