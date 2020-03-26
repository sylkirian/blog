import App from 'next/app'
import { appWithTranslation } from '../i18n'
import '../styles/style.css'

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css' // Import the CSS
config.autoAddCss = false // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

function MyApp({ Component, pageProps }) {
	return <Component {...pageProps} />
}

MyApp.getInitialProps = async (appContext) => {
	const appProps = await App.getInitialProps(appContext)
	return { ...appProps }
}

export default appWithTranslation(MyApp)