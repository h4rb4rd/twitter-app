import { ChangeEvent, Dispatch, MutableRefObject, SetStateAction } from 'react'
import { PhotographIcon } from '@heroicons/react/outline'

import EmojiPicker from '../../../../EmojiPicker'

interface IconsProps {
	showEmojis: boolean
	filePickerRef: MutableRefObject<HTMLInputElement | null>
	inputValue: string
	setShowEmojis: Dispatch<SetStateAction<boolean>>
	addImageToPost: (e: ChangeEvent<HTMLInputElement>) => void
	setInputValue: Dispatch<SetStateAction<string>>
}

const Icons = ({
	filePickerRef,
	inputValue,
	showEmojis,
	setShowEmojis,
	addImageToPost,
	setInputValue,
}: IconsProps) => {
	return (
		<div className='flex items-center'>
			<div className='icon' onClick={() => filePickerRef.current?.click()}>
				<PhotographIcon className='text-[#1d9bf0] h-[22px]' />
				<input
					type='file'
					ref={filePickerRef}
					hidden
					onChange={addImageToPost}
				/>
			</div>
			<EmojiPicker
				inputValue={inputValue}
				showEmojis={showEmojis}
				setShowEmojis={setShowEmojis}
				setInputValue={setInputValue}
			/>
		</div>
	)
}

export default Icons
