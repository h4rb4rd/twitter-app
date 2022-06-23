import { DotsHorizontalIcon } from '@heroicons/react/outline'

const UserBar = () => {
	return (
		<div
			className='text-[#d9d9d9] flex items-center justify-center mt-auto hoverAnimation xl:ml-auto xl:-mr-5'
			onClick={() => console.log('signOut')}
		>
			<img
				src='https://lh3.googleusercontent.com/ogw/ADea4I6He6BMbmqmLPhRRBOm6zUel9Bl6vfa0Y2P0AJm=s32-c-mo'
				alt=''
				className='h-10 w-10 rounded-full xl:mr-2.5'
			/>
			<div className='hidden xl:inline leading-5'>
				<h4 className='font-bold'>User</h4>
				<p className='text-[#6e767d]'>@usertag</p>
			</div>
			<DotsHorizontalIcon className='h-5 hidden xl:inline ml-10' />
		</div>
	)
}

export default UserBar
