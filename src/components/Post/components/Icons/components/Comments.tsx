import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { ChatIcon } from '@heroicons/react/outline'
import {
	collection,
	onSnapshot,
	orderBy,
	query,
	DocumentData,
	QueryDocumentSnapshot,
} from '@firebase/firestore'

import { modalState } from '../../../../../atoms/modalAtom'
import { postIdState } from '../../../../../atoms/postAtom'
import { db } from '../../../../../../firebase'

interface CommentsProps {
	id: string
}

const Comments = ({ id }: CommentsProps) => {
	const [isOpen, setIsOpen] = useRecoilState(modalState)
	const [postId, setPostId] = useRecoilState(postIdState)
	const [comments, setComments] = useState<
		QueryDocumentSnapshot<DocumentData>[]
	>([])

	useEffect(
		() =>
			onSnapshot(
				query(
					collection(db, 'posts', id, 'comments'),
					orderBy('timestamp', 'desc')
				),
				snapshot => setComments(snapshot.docs)
			),
		[db, id]
	)

	return (
		<div
			className='flex items-center space-x-1 group'
			onClick={e => {
				e.stopPropagation()
				setPostId(id)
				setIsOpen(true)
			}}
		>
			<div className='icon group-hover:bg-[#1d9bf0] group-hover:bg-opacity-10'>
				<ChatIcon className='h-5 group-hover:text-[#1d9bf0]' />
			</div>
			{comments.length > 0 && (
				<span className='group-hover:text-[#1d9bf0] text-sm'>
					{comments.length}
				</span>
			)}
		</div>
	)
}

export default Comments
