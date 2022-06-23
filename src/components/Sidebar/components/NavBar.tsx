import { HomeIcon } from '@heroicons/react/solid'
import {
	HashtagIcon,
	BellIcon,
	InboxIcon,
	BookmarkIcon,
	ClipboardListIcon,
	UserIcon,
	DotsCircleHorizontalIcon,
} from '@heroicons/react/outline'

import NavLink from './NavLink'

const NavBar = () => {
	return (
		<nav className='space-y-2.5 mt-4 mb-2.5 xl:ml-24'>
			<NavLink text='Home' Icon={HomeIcon} active />
			<NavLink text='Explore' Icon={HashtagIcon} />
			<NavLink text='Notifications' Icon={BellIcon} />
			<NavLink text='Messages' Icon={InboxIcon} />
			<NavLink text='Bookmarks' Icon={BookmarkIcon} />
			<NavLink text='Lists' Icon={ClipboardListIcon} />
			<NavLink text='Profile' Icon={UserIcon} />
			<NavLink text='More' Icon={DotsCircleHorizontalIcon} />
		</nav>
	)
}

export default NavBar
