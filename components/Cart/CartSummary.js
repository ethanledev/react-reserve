import { Button, Segment, Divider } from 'semantic-ui-react'
import { useEffect, useState } from 'react';
import calculateCartTotal from '../../utils/calculateCartTotal'
import StripeCheckout from 'react-stripe-checkout';

function CartSummary({ products, handleCheckout, success }) {
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
      <StripeCheckout
        stripeKey='pk_test_51JXxLUGgZjV4jYKFcFdPhfcgG3tUl2zTDtEgraELAxHrJz4edHitcuh8eXnV3oYnHcyKLVRmdzHKHMLOjqzNvzmP00xJGFdwAu'
        name='React Reserve'
        amount={stripeAmount}
        image={products.length > 0 ? products[0].product.mediaUrl : ''}
        currency='USD'
        shippingAddress={true}
        billingAddress={true}
        zipCode={true}
        token={handleCheckout}
        triggerEvent='onClick'
      >
        <Button icon='cart' 
        disabled={isCartEmpty || success}  
        color='teal' floated='right' content='Checkout'/>
      </StripeCheckout>
    </Segment>
  </>
}

export default CartSummary;
