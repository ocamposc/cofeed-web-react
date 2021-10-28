import './header.css';
import { Chat, Notifications, Person, Search } from '@mui/icons-material';

export default function Header() {
  return (
    <div className='headerContainer'>
      <div className='headerLeft'>
        <span className='logo'>Cofeed</span>
      </div>
      <div className='headerCenter'>
        <div className="searchbar">
          <Search className='searchIcon'/>
          <input placeholder="Search for a friend, post or video" className="searchInput" />
        </div>
      </div>
      <div className='headerRight'>
        <div className="headerLinks">
          <span className="headerLink">Homepage</span>
          <span className="headerLink">Timeline</span>
        </div>
        <div className="headerIcons">
          <div className="headerIconItem">
            <Person />
            <span className="headerIconBadge">1</span>
          </div>
          <div className="headerIconItem">
            <Chat />
            <span className="headerIconBadge">1</span>
          </div>
          <div className="headerIconItem">
            <Notifications />
            <span className="headerIconBadge">1</span>
          </div>
        </div>
        <img src="/assets/person/1.jpeg" alt="" className="headerProfileImg" />
      </div>
    </div>
  )
}
