import MainLayout from '../components/mainlayout'
import Head from 'next/head'
import { i18n, withTranslation } from '../i18n'

function Home() {
	return <MainLayout>
		<Head>
			<title>Blog</title>
		</Head>
		<div>
			AAA
		</div>
	</MainLayout>
}

export default withTranslation('common')(Home)