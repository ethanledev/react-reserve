import { Button, Segment, Divider } from 'semantic-ui-react'
import { useEffect, useState } from 'react';
import calculateCartTotal from '../../utils/calculateCartTotal'

function CartSummary({ products }) {
  const [isCartEmpty, setCartEmpty] = useState(false)
  const [cartAmount, setCartAmount] = useState(0)
  const [stripeAmount, setStipeAmount] = useState(0)

  useEffect(() => {
    const { cartTotal, stripeTotal } = calculateCartTotal(products)
    setCartAmount(cartTotal)
    setStipeAmount(stripeTotal)
    if (products.length === 0) {
      setCartEmpty(true)
    }
  }, [products])

  return <>
    <Divider/>
    <Segment clearing size='large'>
      <strong>Sub total:</strong> ${cartAmount}
      <Button icon='cart' 
      disabled={isCartEmpty}  
      color='teal' floated='right' content='Checkout'/>
    </Segment>
  </>
}

export default CartSummary;
