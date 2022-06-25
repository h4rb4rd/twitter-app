import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { HeartIcon } from '@heroicons/react/outline'
import {
	HeartIcon as HeartIconFilled,
	ChatIcon as ChatIconFilled,
} from '@heroicons/react/solid'

import {
	collection,
	deleteDoc,
	doc,
	onSnapshot,
	setDoc,
	DocumentData,
	QueryDocumentSnapshot,
} from '@firebase/firestore'

import { db } from '../../../../../../firebase'

interface LikesProps {
	id: string
}

const Likes = ({ id }: LikesProps) => {
	const { data: session } = useSession()
	const [liked, setLiked] = useState(false)
	const [likes, setLikes] = useState<QueryDocumentSnapshot<DocumentData>[]>([])

	useEffect(
		() =>
			onSnapshot(collection(db, 'posts', id, 'likes'), snapshot =>
				setLikes(snapshot.docs)
			),
		[db, id]
	)

	useEffect(
		() =>
			setLiked(likes.findIndex(like => like.id === session?.user?.uid) !== -1),
		[likes]
	)

	const likePost = async () => {
		if (liked) {
			if (session && session.user.uid) {
				await deleteDoc(doc(db, 'posts', id, 'likes', session?.user.uid))
			}
		} else {
			if (session && session.user.uid) {
				await setDoc(doc(db, 'posts', id, 'likes', session?.user.uid), {
					username: session?.user.name,
				})
			}
		}
	}

	return (
		<div
			className='flex items-center space-x-1 group'
			onClick={e => {
				e.stopPropagation()
				likePost()
			}}
		>
			<div className='icon group-hover:bg-pink-600/10'>
				{liked ? (
					<HeartIconFilled className='h-5 text-pink-600' />
				) : (
					<HeartIcon className='h-5 group-hover:text-pink-600' />
				)}
			</div>
			{likes.length > 0 && (
				<span
					className={`group-hover:text-pink-600 text-sm ${
						liked && 'text-pink-600'
					}`}
				>
					{likes.length}
				</span>
			)}
		</div>
	)
}

export default Likes
