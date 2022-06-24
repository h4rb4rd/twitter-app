import { XIcon } from '@heroicons/react/outline'

interface TextareaProps {
	inputValue: string
	selectedFile: string | null
	setInputValue: (value: string) => void
	setSelectedFile: (value: string | null) => void
}

const Textarea = ({
	selectedFile,
	inputValue,
	setInputValue,
	setSelectedFile,
}: TextareaProps) => {
	return (
		<div className={`${selectedFile && 'pb-7'} ${inputValue && 'space-y-2.5'}`}>
			<textarea
				value={inputValue}
				onChange={e => setInputValue(e.target.value)}
				placeholder="What's happening?"
				rows={2}
				className='bg-transparent outline-none text-[#d9d9d9] text-lg placeholder-gray-500 tracking-wide w-full min-h-[50px]'
			/>
			{/* select */}
			{selectedFile && (
				<div className='relative'>
					<div
						className='absolute w-8 h-8 bg-[#15181c] hover:bg-[#272c26] bg-opacity-75 rounded-full flex items-center justify-center top-1 left-1 cursor-pointer'
						onClick={() => setSelectedFile(null)}
					>
						<XIcon className='text-white h-5' />
					</div>
					<img
						src={selectedFile}
						alt=''
						className='rounded-2xl max-h-80 object-contain'
					/>
				</div>
			)}
		</div>
	)
}

export default Textarea
