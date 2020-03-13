import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
	return <div>
		<div className="menu">
			<div>
				<div>Informasi</div>
				<div>Tentang Kami</div>
				<div>Syarat Penggunaan</div>
				<div>Ketentuan privasi</div>
				<div>Kontak Kami</div>
				<div>Promo Bank</div>
			</div>
			<div>
				<div>Bantuan</div>
				<div>Bayar Ditempat</div>
				<div>Cara Pemesanan</div>
				<div>Ketentuan Pengembalian</div>
				<div>Ketentuan Pengiriman</div>
			</div>
			<div>
				<div>Ikuti Kami</div>
				<div>
					<FontAwesomeIcon icon={faFacebook} color="#475993" />
					Pacebook Page
				</div>
				<div>
					<FontAwesomeIcon icon={faTwitter} color="#76A9EA" />
					Twitter Page
				</div>
				<div>
					<FontAwesomeIcon icon={faInstagram} color="#C53561" />
					Instagram Page
				</div>
				<div>
					<FontAwesomeIcon icon={faWhatsapp} color="#55CD6C" />
					WhatsApp
				</div>
			</div>
		</div>
		<div>
			Copyright @ 2019 Forever New. All Rights Reserved. &nbsp; | &nbsp; Privacy &nbsp; | &nbsp; Terms and condition
		</div>

		<style jsx>{`
			.menu {
				align-items: center;
				background-color: lightblue;
				display: flex;
				justify-content: center;
				height: 200px;
				width: 100%;
			}
		`}</style>
	</div>
}