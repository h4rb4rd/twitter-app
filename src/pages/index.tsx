import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import {
	ClientSafeProvider,
	getProviders,
	getSession,
	LiteralUnion,
	useSession,
} from 'next-auth/react'

import Feed from '../components/Feed'
import Sidebar from '../components/Sidebar'
import Login from '../components/Login'
import { BuiltInProviderType } from 'next-auth/providers'

interface HomeProps {
	providers: Record<
		LiteralUnion<BuiltInProviderType, string>,
		ClientSafeProvider
	> | null
}
const Home = ({ providers }: HomeProps) => {
	const { data: session } = useSession()

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

				{/* Modal */}
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
