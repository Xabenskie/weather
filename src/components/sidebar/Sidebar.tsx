'use client'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export function Sidebar() {
	const [dateState, setDateState] = useState(new Date())

	useEffect(() => {
		setInterval(() => setDateState(new Date()), 10000)
	}, [])

	const { push } = useRouter()
	return (
		<div className='flex p-5 justify-between w-full h-20 mt-10 mb-10 text-3xl'>
			<div className='flex flex-col'>
				<h1
					className='text-6xl font-semibold ml-16 cursor-pointer hover:opacity-35 transition-all'
					onClick={e => {
						push('/')
						e.preventDefault()
					}}
				>
					WeatherMe
				</h1>
				<h1 className='text-xl ml-96 cursor-default'>
					{dateState.toLocaleString('en-US', {
						hour: 'numeric',
						minute: 'numeric',
						hour12: true,
					})}
				</h1>
			</div>
		</div>
	)
}
