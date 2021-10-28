import './leftbar.css';
import {
  Chat,
  Bookmark,
  Home,
  Person,
  Settings,
} from '@mui/icons-material';

export default function Leftbar() {
  return (
    <div className='leftbar'>
      <div className="leftbarWrapper">
        <ul className="leftbarList">
          <li className="leftbarListItem">
            <Home className='leftbarIcon'/>
            <span className="leftbarIconText">Home</span>
          </li>
          <li className="leftbarListItem">
            <Chat className='leftbarIcon'/>
            <span className="leftbarIconText">Messages</span>
          </li>
          <li className="leftbarListItem">
            <Person className="leftbarIcon" />
            <span className="leftbarIconText">Profile</span>
          </li>
          <li className="leftbarListItem">
            <Bookmark className="leftbarIcon" />
            <span className="leftbarIconText">Saved Post</span>
          </li>
          <li className="leftbarListItem">
            <Settings className="leftbarIcon" />
            <span className="leftbarIconText">Settings</span>
          </li>
        </ul>
        <button className="leftbarButton">Show  more</button>
        <hr className="leftbarHr" />
        <ul className="leftbarFriendList">
          <li className="leftbarFriend">
            <img src="/assets/person/2.jpeg" alt="" className="leftbarFriendImg" />
            <span className="leftbarFriendName">Sherlock Holmes</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
