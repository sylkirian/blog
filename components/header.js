import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faCircle, faSearch, faShoppingBag, faUser } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
	return <div className="header">
		<div>
			<LayeredIcon icon={faFacebookF} />
			<LayeredIcon icon={faTwitter} />
			<LayeredIcon icon={faInstagram} />
			<LayeredIcon icon={faWhatsapp} />
		</div>
		<div>
			<FontAwesomeIcon icon={faSearch} />
			<FontAwesomeIcon icon={faUser} /> Login / Daftar
			<FontAwesomeIcon icon={faShoppingBag} /> Keranjang (0)
		</div>

		<style jsx>{`
			.header {
				display: flex;
				justify-content: space-between;
				width: 800px;
			}
		`}</style>
	</div>
}

function LayeredIcon({icon}) {
	return <span className="fa-layers fa-fw">
		<FontAwesomeIcon icon={faCircle} transform="grow-6" color="lightgrey" />
		<FontAwesomeIcon icon={icon} transform="shrink-3" />
	</span>
}