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
  {colour_name:"hexed_lichen", manufacturer: "Vallejo", vessel: "dropper", range: "model colour"}
]

export default function Paints() {
  return (
    <Table.Root>
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell><Text>Colour Name</Text></Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>
    </Table.Root>
  )
}