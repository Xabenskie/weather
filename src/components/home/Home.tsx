import { WeatherCard } from '../ui/card/WeatherCard'
import { WeatherCardByTime } from '../ui/card/WeatherCardByTime'

export function Home() {
	return (
		<div className='flex justify-center mt-48'>
			<WeatherCard city='Moscow' />
			<div className='mt-80'>
				<WeatherCardByTime />
			</div>
		</div>
	)
}
