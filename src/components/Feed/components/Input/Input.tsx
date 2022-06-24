import { useRef, useState, ChangeEvent } from 'react'

import Textarea from './components/Textarea'
import Icons from './components/Icons'
import Button from './components/Button'

const Input = () => {
	const [loading, setLoading] = useState(false)
	const [selectedFile, setSelectedFile] = useState<string | null>(null)
	const [inputValue, setInputValue] = useState('')
	const [showEmojis, setShowEmojis] = useState(false)

	const filePickerRef = useRef<null | HTMLInputElement>(null)

	const addImageToPost = (e: ChangeEvent<HTMLInputElement>) => {
		const reader = new FileReader()

		if (e.target && e.target.files) {
			reader.readAsDataURL(e.target.files[0])
		}

		reader.onload = readerEvent => {
			if (readerEvent.target && typeof readerEvent.target.result === 'string')
				setSelectedFile(readerEvent.target.result)
		}
	}

	return (
		<div
			className={`border-b border-gray-700 p-3 flex space-x-3 overflow-y-scroll scrollbar-hide ${
				loading && 'opacity-60'
			}`}
		>
			<img
				src='https://lh3.googleusercontent.com/ogw/ADea4I6He6BMbmqmLPhRRBOm6zUel9Bl6vfa0Y2P0AJm=s32-c-mo'
				alt=''
				className='h-11 w-11 rounded-full cursor-pointer'
			/>
			<div className='divide-y divide-gray-700 w-full'>
				<Textarea
					selectedFile={selectedFile}
					inputValue={inputValue}
					setInputValue={setInputValue}
					setSelectedFile={setSelectedFile}
				/>
				{!loading && (
					<div className='flex items-center justify-between pt-2.5'>
						<Icons
							showEmojis={showEmojis}
							filePickerRef={filePickerRef}
							inputValue={inputValue}
							setShowEmojis={setShowEmojis}
							addImageToPost={addImageToPost}
							setInputValue={setInputValue}
						/>
						<Button
							inputValue={inputValue}
							selectedFile={selectedFile}
							loading={loading}
							setLoading={setLoading}
							setInputValue={setInputValue}
							setSelectedFile={setSelectedFile}
							setShowEmojis={setShowEmojis}
						/>
					</div>
				)}
			</div>
		</div>
	)
}

export default Input
