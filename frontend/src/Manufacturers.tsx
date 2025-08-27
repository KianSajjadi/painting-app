import manufacturers_placeholder from './assets/manufacturers-placeholder.jpg'
import { Link } from 'react-router-dom'

export default function Manufacturers() {
  return (
    <>
      <img src={manufacturers_placeholder} />
      <div></div>
      <Link to="/"> Homepage </Link>
    </>
  )
}