import { MutableRefObject, useEffect } from 'react'

export const useClickOutside = (
	pickerRef: MutableRefObject<HTMLElement | null>,
	iconRef: MutableRefObject<HTMLElement | null>,
	handler: () => void
) => {
	useEffect(() => {
		const listener = (event: MouseEvent | TouchEvent) => {
			if (
				event.target instanceof HTMLElement &&
				(!pickerRef?.current || pickerRef?.current?.contains(event.target))
			) {
				return
			} else if (
				event.target instanceof SVGElement &&
				(!iconRef?.current || iconRef?.current?.contains(event.target))
			) {
				return
			}

			handler()
		}

		document.addEventListener('mousedown', listener)
		document.addEventListener('touchstart', listener)

		return () => {
			document.removeEventListener('mousedown', listener)
			document.removeEventListener('touchstart', listener)
		}
	}, [pickerRef, iconRef, handler])
}
