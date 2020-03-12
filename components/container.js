import Footer from './footer'
import Header from './header'

export default function Container({children}) {
	return <div className="layout">
		<div className="container">
			<Header />
			{children}
		</div>
		<Footer />

		<style jsx>{`
			.layout {
				justify-content: center;
				display: flex;
				min-height: 100vh;
			}
			.container {
				background-color: lightyellow;
				width: 800px;
			}
		`}</style>
	</div>
}