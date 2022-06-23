import Image from 'next/image'

import NavBar from './components/NavBar'
import UserBar from './components/UserBar'

const Sidebar = () => {
	return (
		<div className='hidden sm:flex flex-col items-center xl:items-start xl:w-[340px] p-2 fixed h-full'>
			<div className='flex items-center justify-center w-14 h-14 hoverAnimation p-0 xl:ml-24'>
				<Image src='https://rb.gy/ogau5a' width={30} height={30} />
			</div>
			<NavBar />
			<button className='hidden xl:inline ml-auto bg-[#1d9bf0] text-white rounded-full w-56 h-[52px] text-lg font-bold shadow-md hover:bg-[#1a8cd8]'>
				Tweet
			</button>
			<UserBar />
		</div>
	)
}

export default Sidebar
