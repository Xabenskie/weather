'use client'
import { MapPin, Thermometer } from 'lucide-react'

interface IWeatherCard {
	city: string
}

export function WeatherCard({ city }: IWeatherCard) {
	const response = fetch(
		'https://api.open-meteo.com/v1/forecast?latitude=55.7522&longitude=37.6156&hourly=temperature_2m'
	)
		.then(response => response.json())
		.then(data => {
			const weather = data.hourly.temperature_2m[12]
			return weather
		})

	return (
		<div className='bg-indigo-600 bg-opacity-25 w-1/4 h-96 rounded-xl -mt-20 absolute hover:-translate-y-4 transition-all'>
			<h2 className='p-5 flex text-2xl'>
				{city}
				<MapPin />
			</h2>
			<div className='flex justify-center mt-20'>
				<Thermometer size={45} />
				<h1 className='text-5xl flex' id='#weather'>
					{response}°C
				</h1>
			</div>
			<div className='ml-10 mt-10'>
				<h1 className='text-2xl'>{new Date().toLocaleDateString()}</h1>
			</div>
			<div className='ml-10 mt-10'>
				<h1 className='text-2xl'>Max Temperature today</h1>
			</div>
		</div>
	)
}
