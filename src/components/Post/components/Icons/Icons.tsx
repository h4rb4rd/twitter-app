import { DocumentData } from '@firebase/firestore'

import Comments from './components/Comments'
import Likes from './components/Likes'
import Trash from './components/Trash'

interface IconsProps {
	id: string
	postPage?: string
	post: DocumentData
}

const Icons = ({ id, postPage, post }: IconsProps) => {
	return (
		<div
			className={`text-[#6e767d] flex justify-between w-10/12 ${
				postPage && 'mx-auto'
			}`}
		>
			<Comments id={id} />
			<Likes id={id} />
			<Trash id={id} post={post} />
		</div>
	)
}

export default Icons
