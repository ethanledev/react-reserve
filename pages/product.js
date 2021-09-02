import axios from "axios";
import ProductSummary from '../components/Product/ProductSummary'
import ProductAttribute from '../components/Product/ProductAttributes'

function Product({ product }) {
  return (
    <>
      <ProductSummary {...product}/>
      <ProductAttribute {...product}/>
    </>
  )
}

Product.getInitialProps = async ({ query: { _id } }) => {
  const url = 'http://localhost:3000/api/product'
  const payload = { params: { _id } }
  const response = await axios.get(url, payload)
  return { product: response.data } 
}

export default Product;
