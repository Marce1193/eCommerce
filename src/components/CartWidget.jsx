import carrito from '../assets/carrito.png'

function CartWidget() {
	return (
		<>
			<img src={carrito} alt='carrito' />
			<span>0</span>
		</>
	)
}

export default CartWidget
