import Head from 'next/head'
import type { GetServerSideProps } from 'next'
import {
	ClientSafeProvider,
	getProviders,
	getSession,
	LiteralUnion,
	useSession,
} from 'next-auth/react'

import { BuiltInProviderType } from 'next-auth/providers'
import Feed from '../components/Feed'
import Login from '../components/Login'
import Modal from '../components/Modal'
import { modalState } from '../atoms/modalAtom'
import Sidebar from '../components/Sidebar'
import { useRecoilState } from 'recoil'

interface HomeProps {
	providers: Record<
		LiteralUnion<BuiltInProviderType, string>,
		ClientSafeProvider
	> | null
}
const Home = ({ providers }: HomeProps) => {
	const { data: session } = useSession()
	const [isOpen, setIsOpen] = useRecoilState(modalState)

	if (!session) return <Login providers={providers} />

	return (
		<>
			<Head>
				<title>Twitter</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className='min-h-screen flex max-w-[1500px] mx-auto'>
				<Sidebar />
				<Feed />
				{/* Widgets */}

				{isOpen && <Modal />}
			</main>
		</>
	)
}

export const getServerSideProps: GetServerSideProps = async context => {
	const providers = await getProviders()
	const session = await getSession(context)

	return {
		props: {
			providers,
			session,
		},
	}
}

export default Home
