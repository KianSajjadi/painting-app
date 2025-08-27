type Paint = {
  id: number;
  name: string;
  manufacturer: string;
  range: string;
};

// Placeholder - will get this from db at some point
const paints: Paint[] = [
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
          Paints
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
          {paints.map((m) => (
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