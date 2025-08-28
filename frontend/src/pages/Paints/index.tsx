import { Table, Text, Button } from "@radix-ui/themes"
import AddPaint from "../components/AddPaint"

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

const better_column_names: Record<Column, string> = {
  colour_name: "Colour Name",
  manufacturer: "Manufacturer",
  vessel: "Vessel",
  range: "Range",
  sku: "SKU",
  opacity: "Opacity"
};

export default function Paints() {
  return (
    <>
      <Button onClick={AddPaint}>
        <Text>Add Paint</Text>
      </Button>
      <Table.Root size="3">
        <Table.Header>
          <Table.Row>
          {columns.map((column) => (
              <Table.ColumnHeaderCell key={column}>
                  <Text>{better_column_names[column]}</Text>
              </Table.ColumnHeaderCell>
          ))}
        </Table.Row>
        </Table.Header>
        <Table.Body>
          {paints.map((paint, i) => (
            <Table.Row key={i}>
              {columns.map((column) => (
                <Table.Cell key={column}>{paint[column]}</Table.Cell>
              ))}
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </>
  )
}