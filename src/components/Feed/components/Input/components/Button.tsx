import { Dispatch, SetStateAction } from 'react'
import { getDownloadURL, ref, uploadString } from '@firebase/storage'
import {
	addDoc,
	collection,
	doc,
	serverTimestamp,
	updateDoc,
} from '@firebase/firestore'

import { db, storage } from '../../../../../../firebase'

interface ButtonProps {
	inputValue: string
	selectedFile: string | null
	loading: boolean
	setLoading: Dispatch<SetStateAction<boolean>>
	setInputValue: Dispatch<SetStateAction<string>>
	setSelectedFile: Dispatch<SetStateAction<string | null>>
	setShowEmojis: Dispatch<SetStateAction<boolean>>
}

const Button = ({
	inputValue,
	selectedFile,
	loading,
	setLoading,
	setInputValue,
	setSelectedFile,
	setShowEmojis,
}: ButtonProps) => {
	const sendPost = async () => {
		if (loading) return
		setLoading(true)

		const docRef = await addDoc(collection(db, 'posts'), {
			text: inputValue,
			timestamp: serverTimestamp(),
		})

		const imageRef = ref(storage, `posts/${docRef.id}/image`)

		if (selectedFile) {
			await uploadString(imageRef, selectedFile, 'data_url').then(async () => {
				const downloadURL = await getDownloadURL(imageRef)
				await updateDoc(doc(db, 'posts', docRef.id), {
					image: downloadURL,
				})
			})
		}

		setLoading(false)
		setInputValue('')
		setSelectedFile(null)
		setShowEmojis(false)
	}

	return (
		<button
			className='bg-[#1d9bf0] text-white rounded-full px-4 py-1.5 font-bold shadow-md hover:bg-[#1a8cd8] disabled:hover:bg-[#1d9bf0] disabled:opacity-50 disabled:cursor-default'
			disabled={!inputValue && !selectedFile}
			onClick={sendPost}
		>
			Tweet
		</button>
	)
}

export default Button
