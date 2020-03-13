import Footer from './footer'
import Header from './header'

// komponen dengan header dan footer
export default function MainLayout({children}) {
	return <div className="layout">
		<Header />
		<div className="container">
			{children}
		</div>
		<Footer />

		<style jsx>{`
			.layout {
				align-items: center;
				display: flex;
				flex-direction: column;
				height: 100vh;
			}
			.container {
				background-color: lightyellow;
				flex: 1;
				width: 800px;
			}
		`}</style>
	</div>
}