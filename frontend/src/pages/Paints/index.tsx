import { Table, Text, Button, Card } from "@radix-ui/themes"
import styles from "./styles.module.scss"
import { useState, useRef } from "react"
import AddPaintCard from "./components/AddPaintCard"
import AddPaintImageCard from "./components/AddPaintImageCard"

export type Paint = {
  id: number;
  colour_name: string;
  manufacturer: string;
  vessel: string;
  range?: string;
  opacity?: number;
  sku?: string;
};

export type NewPaint = Omit<Paint, "id">;

type Column = keyof Paint

// Placeholder - will get this from db at some point
const initial_paints: Paint[] = [
  {id: 0, colour_name:"black", manufacturer: "Vallejo", vessel: "dropper", range: "model colour"},
  {id: 1, colour_name:"hexed lichen", manufacturer: "Vallejo", vessel: "dropper", range: "game colour"},
  {id: 2, colour_name:"beasty brown", manufacturer: "Vallejo", vessel: "dropper", range: "game colour"},
  {id: 3, colour_name:"sick green", range: "game colour", manufacturer: "Vallejo", vessel: "dropper"},
  {id: 4, colour_name:"golden yellow", manufacturer: "Vallejo", vessel: "dropper", range: "game colour"},
  {id: 5, colour_name:"Matte Black", manufacturer: "Rustoleum", vessel: "Spray Can", range: "2x Coverage"},
]

const columns: Column[] = [
  "id", "colour_name", "range", "manufacturer", "vessel", "sku", "opacity"
]

const better_column_names: Record<Column, string> = {
  id: "ID",
  colour_name: "Colour Name",
  manufacturer: "Manufacturer",
  vessel: "Vessel",
  range: "Range",
  sku: "SKU",
  opacity: "Opacity"
};

export default function Paints() {
  const [paints, setPaints] = useState<Paint[]>(initial_paints);
  const [open, setOpen] = useState(false);

  const nextIdRef = useRef(
    paints.length ? Math.max(...paints.map(x => x.id)) + 1 : 1
  );

  const handleAdd = (p: NewPaint) => {
    const with_id: Paint = {id: nextIdRef.current++, ...p };
    setPaints(prev => [with_id, ...prev]);
    setOpen(false);
  };

  return (
    <>
      <AddPaintCard open={open} setOpen={setOpen} handleAdd={handleAdd} />
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