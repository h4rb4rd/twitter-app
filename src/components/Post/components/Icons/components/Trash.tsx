import { deleteDoc, doc, DocumentData } from '@firebase/firestore'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import { SwitchHorizontalIcon, TrashIcon } from '@heroicons/react/outline'

import { db } from '../../../../../../firebase'

interface TrashProps {
	id: string
	post: DocumentData
}

const Trash = ({ id, post }: TrashProps) => {
	const { data: session } = useSession()
	const router = useRouter()

	return (
		<>
			{session?.user.uid === post?.id ? (
				<div
					className='flex items-center space-x-1 group'
					onClick={e => {
						e.stopPropagation()
						deleteDoc(doc(db, 'posts', id))
						router.push('/')
					}}
				>
					<div className='icon group-hover:bg-red-600/10'>
						<TrashIcon className='h-5 group-hover:text-red-600' />
					</div>
				</div>
			) : (
				<div className='flex items-center space-x-1 group'>
					<div className='icon group-hover:bg-green-500/10'>
						<SwitchHorizontalIcon className='h-5 group-hover:text-green-500' />
					</div>
				</div>
			)}
		</>
	)
}

export default Trash
