import { DocumentData } from '@firebase/firestore'

import Comments from './components/Comments'
import Likes from '../../../Likes'
import Trash from '../../../Trash'

interface IconsProps {
	id: string
	postPage?: string
	post: DocumentData | undefined
}

const Icons = ({ id, postPage, post }: IconsProps) => {
	return (
		<div
			className={`text-[#6e767d] flex justify-between w-10/12 ${
				postPage && 'mx-auto'
			} pl-2`}
		>
			<Likes id={id} type='posts' />
			<Comments id={id} />
			<Trash id={id} componentId={post?.id} type='posts' />
		</div>
	)
}

export default Icons
