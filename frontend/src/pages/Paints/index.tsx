import { Table, Text } from "@radix-ui/themes"

type Paint = {
  colour_name: string;
  manufacturer: string;
  vessel: string;
  range?: string;
  opacity?: number;
  sku?: string;
};

// Placeholder - will get this from db at some point
const paints: Paint[] = [
  {colour_name:"hexed lichen", manufacturer: "Vallejo", vessel: "dropper", range: "game colour"},
  {colour_name:"black", manufacturer: "Vallejo", vessel: "dropper", range: "model colour"},
  {colour_name:"hexed lichen", manufacturer: "Vallejo", vessel: "dropper", range: "game colour"},
  {colour_name:"hexed lichen", manufacturer: "Vallejo", vessel: "dropper", range: "game colour"},
  {colour_name:"hexed lichen", manufacturer: "Vallejo", vessel: "dropper", range: "game colour"},
]

export default function Paints() {
  return (
    <Table.Root size="3">
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell><Text>Colour Name</Text></Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell><Text>Manufacturer</Text></Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell><Text>Vessel Type</Text></Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell><Text>Range</Text></Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell><Text>Opacity</Text></Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell><Text></Text>SKU</Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {paints.map((paint) => (
          <Table.Row>
            {Object.entries(paint).map(([key, value]) => (
              <Table.Cell key={key}>{value}</Table.Cell>
            ))}
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  )
}