import { DocumentData } from 'firebase/firestore'
import { useRouter } from 'next/router'

import Icons from './components/Icons'
import PostBody from './components/PostBody'

interface PostProps {
	id: string
	post: DocumentData | undefined
	postPage?: string
}

const Post = ({ id, post, postPage }: PostProps) => {
	const router = useRouter()

	return (
		<div
			className='p-3 flex cursor-pointer border-b border-gray-700'
			onClick={() => router.push(`/${id}`)}
		>
			{!postPage && (
				<img
					src={post?.userImg}
					alt=''
					className='h-11 w-11 rounded-full mr-4'
				/>
			)}
			<div className='flex flex-col space-y-2 w-full'>
				<PostBody post={post} postPage={postPage} />
				{postPage && (
					<p className='text-[#d9d9d9] mt-0.5 text-xl'>{post?.text}</p>
				)}
				<img
					src={post?.image}
					alt=''
					className='rounded-2xl max-h-[700px] object-cover mr-2'
				/>
				<Icons id={id} post={post} postPage={postPage} />
			</div>
		</div>
	)
}

export default Post
