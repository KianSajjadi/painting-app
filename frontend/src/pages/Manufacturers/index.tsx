import manufacturers_placeholder from '../assets/manufacturers-placeholder.jpg'

type Manufacturer = {
  id: number;
  name: string;
};

// Placeholder - will get this from db at some point
export default function Manufacturers() {
  return (
      <img src={manufacturers_placeholder} />
  )
}