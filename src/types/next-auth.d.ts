import NextAuth from 'next-auth'

declare module 'next-auth' {
	interface Session {
		user: {
			name: string | null | undefined
			image: string | null | undefined
			tag: string | null | undefined
			uid: string | undefined
		}
	}
}

export interface IFollowResults {
	userImg: string
	username: string
	tag: string
}

export interface ITrendingResults {
	heading: string
	description: string
	img: string
	tags: string[]
}
