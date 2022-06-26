import { deleteDoc, doc } from '@firebase/firestore'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import { TrashIcon } from '@heroicons/react/outline'

import { db } from '../../firebase'

interface TrashProps {
	id: string
	componentId: string
	type: string
	postId?: string
}

const Trash = ({ id, componentId, type, postId }: TrashProps) => {
	const router = useRouter()
	const { data: session } = useSession()

	const deleteComment = async (e: React.MouseEvent) => {
		e.stopPropagation()

		if (type === 'posts') {
			deleteDoc(doc(db, 'posts', id))
			router.push('/')
		} else if (type === 'comments' && postId) {
			deleteDoc(doc(db, 'posts', postId, 'comments', id))
		}
	}

	return (
		<>
			{session?.user.uid === componentId ? (
				<div
					className='flex items-center space-x-1 group'
					onClick={deleteComment}
				>
					<div className='icon group-hover:bg-red-600/10'>
						<TrashIcon className='h-5 group-hover:text-red-600' />
					</div>
				</div>
			) : (
				<span className='opacity-0 w-9'></span>
			)}
		</>
	)
}

export default Trash
