import Profile from "./components/Profile/Profile"
import userData from './components/Profile/userData.json'


const App = () => {
  return (
    <Profile data = {userData}/>
  )
}

export default App