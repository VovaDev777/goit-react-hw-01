import FriendsList from "./components/FriendsList/FriendsList"
import Profile from "./components/Profile/Profile"
import userData from './components/Profile/userData.json'
import friendsList from './components/FriendsList/friends.json'
import transactionData from './components/TransactionHistory/transactionData.json'
import TransactionHistory from "./components/TransactionHistory/TransactionHistory"


const App = () => {
  return (
    <>
    <Profile data = {userData} />
    <FriendsList friends = {friendsList} />
    <TransactionHistory items = {transactionData} />
    </>
  )
}

export default App