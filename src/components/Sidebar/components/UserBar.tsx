import { DotsHorizontalIcon } from '@heroicons/react/outline'
import { signOut } from 'next-auth/react'
import { useSession } from 'next-auth/react'

const UserBar = () => {
	const { data: session } = useSession()
	const userImg = session?.user.image || ''

	const handleSighOut = () => {
		signOut()
	}

	return (
		<div
			className='text-[#d9d9d9] flex items-center justify-center mt-auto hoverAnimation xl:ml-auto xl:-mr-5'
			onClick={handleSighOut}
		>
			<img src={userImg} alt='' className='h-10 w-10 rounded-full xl:mr-2.5' />
			<div className='hidden xl:inline leading-5'>
				<h4 className='font-bold'>{session?.user.name}</h4>
				<p className='text-[#6e767d]'>{session?.user.tag}</p>
			</div>
			<DotsHorizontalIcon className='h-5 hidden xl:inline ml-10' />
		</div>
	)
}

export default UserBar
