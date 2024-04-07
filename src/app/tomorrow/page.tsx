import { SITE_NAME } from '@/constants/seo.constants'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: `${SITE_NAME}`,
	description: 'Weather tomorrow',
}

export default function TomorrowPage() {
	return <div></div>
}
