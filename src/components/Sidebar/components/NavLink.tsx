import { useRouter } from 'next/router'

interface NavLinkProps {
	Icon: (props: React.ComponentProps<'svg'>) => JSX.Element
	text: string
	active?: boolean
}

const NavLink = ({ Icon, text, active }: NavLinkProps) => {
	const router = useRouter()

	return (
		<div
			className={`text-[#d9d9d9] flex items-center justify-center xl:justify-start text-xl space-x-3 hoverAnimation ${
				active && 'font-bold'
			}`}
			onClick={() => active && router.push('/')}
		>
			<Icon className='h-7' />
			<span className='hidden xl:inline'>{text}</span>
		</div>
	)
}

export default NavLink
