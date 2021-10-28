import './leftbar.css';
import {
  RssFeed,
  Chat,
  PlayCircleFilledOutlined,
  Group,
  Bookmark,
  HelpOutline,
} from '@mui/icons-material';

export default function Leftbar() {
  return (
    <div className='leftbar'>
      <div className="leftbarWrapper">
        <ul className="leftbarList">
          <li className="leftbarListItem">
            <RssFeed className='leftbarIcon'/>
            <span className="leftbarIconText">Feed</span>
          </li>
          <li className="leftbarListItem">
            <Chat className='leftbarIcon'/>
            <span className="leftbarIconText">Chats</span>
          </li>
          <li className="leftbarListItem">
            <PlayCircleFilledOutlined className="leftbarIcon" />
            <span className="leftbarIconText">Videos</span>
          </li>
          <li className="leftbarListItem">
            <Group className="leftbarIcon" />
            <span className="leftbarIconText">Groups</span>
          </li>
          <li className="leftbarListItem">
            <Bookmark className="leftbarIcon" />
            <span className="leftbarIconText">Bookmarks</span>
          </li>
          <li className="leftbarListItem">
            <HelpOutline className="leftbarIcon" />
            <span className="leftbarIconText">Questions</span>
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
