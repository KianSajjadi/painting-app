import manufacturers_placeholder from '../assets/manufacturers-placeholder.jpg'

type Manufacturer = {
  id: number;
  name: string;
};

// Placeholder - will get this from db at some point
const manufacturers: Manufacturer[] = [
  {id: 0, name: "Vallejo"},
  {id: 1, name: "Pro Acryl"},
  {id: 2, name: "Badger"}
]

export default function Manufacturers() {
  return (
    <div>
      <h1 style={{
        fontSize: 30,
        position: "fixed",
        top: 60,
        left: 275,
        }}>
          Manufacturers
      </h1>
      <p>This page probably shouldn't exist</p>
      
      <table style={{
        position: "fixed",
        top: 150,
        left: 275,
        right: 0,
      }}>
        <thead>
          <tr style={{}}>
            <th style={{}}>ID</th>
            <th style={{}}>Name</th>
          </tr>
        </thead>
        <tbody>
          {manufacturers.map((m) => (
            <tr key={m.id}>
              <td style={{}}>{m.id}</td>
              <td style={{}}>{m.name}</td> 
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}