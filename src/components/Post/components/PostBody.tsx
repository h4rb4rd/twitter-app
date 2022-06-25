import { DocumentData } from 'firebase/firestore'
import { DotsHorizontalIcon } from '@heroicons/react/outline'
import Moment from 'react-moment'

interface PostBodyProps {
	post: DocumentData
	postPage?: string
}

const PostBody = ({ post, postPage }: PostBodyProps) => {
	return (
		<div className={`flex ${!postPage && 'justify-between'}`}>
			{postPage && (
				<img
					src={post?.userImg}
					alt='Profile Pic'
					className='h-11 w-11 rounded-full mr-4'
				/>
			)}
			<div className='text-[#6e767d]'>
				<div className='inline-block group'>
					<h4
						className={`font-bold text-[15px] sm:text-base text-[#d9d9d9] group-hover:underline ${
							!postPage && 'inline-block'
						}`}
					>
						{post?.username}
					</h4>
					<span className={`text-sm sm:text-[15px] ${!postPage && 'ml-1.5'}`}>
						@{post?.tag}
					</span>
				</div>
				·&nbsp;
				<span className='hover:underline text-sm sm:text-[15px]'>
					<Moment fromNow>{post?.timestamp?.toDate()}</Moment>
				</span>
				{!postPage && (
					<p className='text-[#d9d9d9] text-[15px] sm:text-base mt-0.5'>
						{post?.text}
					</p>
				)}
			</div>
			<div className='icon group flex-shrink-0 ml-auto'>
				<DotsHorizontalIcon className='h-5 text-[#6e767d] group-hover:text-[#1d9bf0]' />
			</div>
		</div>
	)
}

export default PostBody
