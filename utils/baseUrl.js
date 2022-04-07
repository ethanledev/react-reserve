const baseUrl =
  process.env.NODE_ENV === 'production'
  ? 'https://react-reserve-hieuhmle.vercel.app'
  : 'http://localhost:3000'

export default baseUrl