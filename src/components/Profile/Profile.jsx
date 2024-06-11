import "./Profile.css"

const Profile = ({data: {username, tag, location, avatar, stats: {followers, views, likes}}}) => {
    // console.log(avatar);
  return (
    <div>
        <div>
            <img src={avatar} alt="Coluege" className="worker-image" />
            <p className="name">{username}</p>
            <p className="description">{tag}</p>
            <p className="description">{location}</p>
        </div>
        <ul>
            <li className="list-item">
                <span className="stats-desc">Followers</span>
                <span className="stats">{followers}</span>
            </li>
            <li className="list-item">
                <span className="stats-desc">Views</span>
                <span className="stats">{views}</span>
            </li>
            <li className="list-item">
                <span className="stats-desc">Likes</span>
                <span className="stats">{likes}</span>
            </li>
        </ul>
    </div>

  )
}

export default Profile