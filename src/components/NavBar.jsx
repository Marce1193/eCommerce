import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import CartWidget from './CartWidget'

function NavBar() {
	return (
		<>
			<Navbar bg='dark' data-bs-theme='dark'>
				<Container>
					<Navbar.Brand href='#home'>Ecommerce</Navbar.Brand>
					<Nav className='me-auto'>
						<Nav.Link href='#home'>Home</Nav.Link>
						<Nav.Link href='#features'>Features</Nav.Link>
						<Nav.Link href='#pricing'>Pricing</Nav.Link>
					</Nav>
				</Container>
				<CartWidget />
			</Navbar>
		</>
	)
}

export default NavBar
