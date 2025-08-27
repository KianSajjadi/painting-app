import { Table, Text } from "@radix-ui/themes"

type Paint = {
  colour_name: string;
  manufacturer: string;
  vessel: string;
  range?: string;
  opacity?: number;
  sku?: string;
};

type Column = keyof Paint

// Placeholder - will get this from db at some point
const paints: Paint[] = [
  {colour_name:"hexed lichen", manufacturer: "Vallejo", vessel: "dropper", range: "game colour"},
  {colour_name:"black", manufacturer: "Vallejo", vessel: "dropper", range: "model colour"},
  {colour_name:"hexed lichen", manufacturer: "Vallejo", vessel: "dropper", range: "game colour"},
  {colour_name:"hexed lichen", range: "game colour", manufacturer: "Vallejo", vessel: "dropper"},
  {colour_name:"hexed lichen", manufacturer: "Vallejo", vessel: "dropper", range: "game colour"},
]

const columns: Column[] = [
  "colour_name", "manufacturer", "vessel", "range", "sku", "opacity"
]

export default function Paints() {
  return (
    <Table.Root size="3">
      <Table.Header>
        <Table.Row>
        {columns.map((column) => (
            <Table.ColumnHeaderCell>
              <Text>{column}</Text>
            </Table.ColumnHeaderCell>
        ))}
      </Table.Row>
      </Table.Header>
      <Table.Body>
        {paints.map((paint) => (
          <Table.Row>
            {columns.map((column) => (
              <Table.Cell key={column}>{paint[column]}</Table.Cell>
            ))}
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  )
}