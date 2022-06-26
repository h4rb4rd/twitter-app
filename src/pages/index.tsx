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
import { IFollowResults, ITrendingResults } from '../types/next-auth'
import Widgets from '../components/Widgets'

interface HomeProps {
	providers: Record<
		LiteralUnion<BuiltInProviderType, string>,
		ClientSafeProvider
	> | null

	trendingResults: ITrendingResults[]
	followResults: IFollowResults[]
}
const Home = ({ providers, trendingResults, followResults }: HomeProps) => {
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
				<Widgets
					trendingResults={trendingResults}
					followResults={followResults}
				/>

				{isOpen && <Modal />}
			</main>
		</>
	)
}

export const getServerSideProps: GetServerSideProps = async context => {
	const providers = await getProviders()
	const session = await getSession(context)

	const trendingResults = await fetch('https://jsonkeeper.com/b/NKEV').then(
		res => res.json()
	)
	const followResults = await fetch('https://jsonkeeper.com/b/WWMJ').then(res =>
		res.json()
	)

	return {
		props: {
			providers,
			session,
			trendingResults,
			followResults,
		},
	}
}

export default Home
