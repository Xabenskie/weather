'use client'
export function WeatherCardByTime() {
	const response = fetch(
		'https://api.open-meteo.com/v1/forecast?latitude=55.7522&longitude=37.6156&hourly=temperature_2m'
	)
		.then(response => response.json())
		.then(data => {
			const morning = data.hourly.temperature_2m[8] as string
			const afternoon = data.hourly.temperature_2m[14] as string
			const evening = data.hourly.temperature_2m[18] as string
			const night = data.hourly.temperature_2m[22] as string
			return (
				<div className='flex justify-between '>
					<div className='bg-sky-500 w-96 h-40 flex flex-col text-center justify-center items-center rounded-xl text-2xl m-10 bg-opacity-25 hover:-translate-y-4 transition-all'>
						<h1 className='text-3xl mb-4'>Morning</h1>
						<p className='mb-4'>{morning}°C</p>
						{new Date().toDateString()}
					</div>
					<div className='bg-sky-500 bg-opacity-25 w-96 h-40 flex flex-col text-center justify-center items-center rounded-xl text-2xl m-10 hover:-translate-y-4 transition-all'>
						<h1 className='text-3xl mb-4'>Afternoon</h1>
						<p className='mb-4'>{afternoon}°C</p>
						{new Date().toDateString()}
					</div>
					<div className='bg-sky-500 bg-opacity-25 w-96 h-40 flex flex-col text-center justify-center items-center rounded-xl text-2xl m-10 hover:-translate-y-4 transition-all'>
						<h1 className='text-3xl mb-4'>Evening</h1>
						<p className='mb-4'>{evening}°C</p>
						{new Date().toDateString()}
					</div>
					<div className='bg-sky-500 bg-opacity-25 w-96 h-40 flex flex-col text-center justify-center items-center rounded-xl text-2xl m-10 hover:-translate-y-4 transition-all'>
						<h1 className='text-3xl mb-4'>Night</h1>
						<p className='mb-4'>{night}°C</p>
						{new Date().toDateString()}
					</div>
				</div>
			)
		})

	return <div>{response}</div>
}
