import { useState, MouseEvent, useRef, Dispatch, SetStateAction } from 'react'
import dynamic from 'next/dynamic'
import { EmojiHappyIcon } from '@heroicons/react/outline'
import { IEmojiData } from 'emoji-picker-react'

import { useClickOutside } from '../../../../../hooks/useOnClickOutside'

const Picker = dynamic(() => import('emoji-picker-react'), {
	ssr: false,
})

const hiddenFlags = {
	flags: false,
	animals_nature: false,
	food_drink: false,
	travel_places: false,
	activities: false,
	objects: false,
	symbols: false,
	recently_used: false,
}

interface EmojiPickerProps {
	showEmojis: boolean
	inputValue: string
	setShowEmojis: Dispatch<SetStateAction<boolean>>
	setInputValue: (value: string) => void
}

const EmojiPicker = ({
	inputValue,
	showEmojis,
	setShowEmojis,
	setInputValue,
}: EmojiPickerProps) => {
	const pickerRef = useRef(null)
	const iconRef = useRef(null)

	const onEmojiClick = (event: MouseEvent, data: IEmojiData) => {
		setShowEmojis(false)
		setInputValue(inputValue + data.emoji)
	}

	const closeEmojiBar = () => {
		setShowEmojis(false)
	}

	useClickOutside(pickerRef, iconRef, closeEmojiBar)

	return (
		<>
			<div
				className='icon relative'
				onClick={() => setShowEmojis(!showEmojis)}
				ref={iconRef}
			>
				<EmojiHappyIcon className='text-[#1d9bf0] h-[22px]' />
			</div>

			{showEmojis && (
				<div className='picker' ref={pickerRef}>
					<Picker onEmojiClick={onEmojiClick} groupVisibility={hiddenFlags} />
				</div>
			)}
		</>
	)
}

export default EmojiPicker
