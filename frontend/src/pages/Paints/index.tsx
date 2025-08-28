import { Table, Text, Box } from "@radix-ui/themes";
import { ScrollArea } from "radix-ui";
import { useState, useRef } from "react";
import AddPaintCard from "./components/AddPaint";
import styles from "./styles.module.scss"

export type Paint = {
  id: number;
  colour_name: string;
  manufacturer: string;
  vessel: string;
  range?: string;
  opacity?: number;
  sku?: string;
  image_path?: string;
};

export type NewPaint = Omit<Paint, "id">;

type Column = keyof Paint;

// Placeholder - will get this from db at some point
const initial_paints: Paint[] = [
  {
    id: 0,
    colour_name: "Coal Black",
    manufacturer: "Monument Hobbies",
    vessel: "dropper",
    range: "Pro Acryl",
    image_path: ""
  },
  {
    id: 1,
    colour_name: "hexed lichen",
    manufacturer: "Vallejo",
    vessel: "dropper",
    range: "game colour",
  },
  {
    id: 2,
    colour_name: "beasty brown",
    manufacturer: "Vallejo",
    vessel: "dropper",
    range: "game colour",
  },
  {
    id: 3,
    colour_name: "sick green",
    range: "game colour",
    manufacturer: "Vallejo",
    vessel: "dropper",
  },
  {
    id: 4,
    colour_name: "golden yellow",
    manufacturer: "Vallejo",
    vessel: "dropper",
    range: "game colour",
  },
  {
    id: 5,
    colour_name: "Matte Black",
    manufacturer: "Rustoleum",
    vessel: "Spray Can",
    range: "2x Coverage",
  },
];

const columns: Column[] = [
  "id",
  "colour_name",
  "range",
  "manufacturer",
  "vessel",
  "sku",
  "opacity",
  "image",
];

const better_column_names: Record<Column, string> = {
  id: "ID",
  colour_name: "Colour Name",
  manufacturer: "Manufacturer",
  vessel: "Vessel",
  range: "Range",
  sku: "SKU",
  opacity: "Opacity",
};

export default function Paints() {
  const [paints, setPaints] = useState<Paint[]>(initial_paints);
  const [open, setOpen] = useState(false);

  const nextIdRef = useRef(
    paints.length ? Math.max(...paints.map((x) => x.id)) + 1 : 1,
  );

  const handleAdd = (p: NewPaint) => {
    const with_id: Paint = { id: nextIdRef.current++, ...p };
    setPaints((prev) => [with_id, ...prev]);
    setOpen(false);
  };

  return (
    <>
      <ScrollArea.Root className={styles.scrollAreaRoot}>
        <ScrollArea.Viewport className={styles.scrollAreaViewport}> 
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
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar orientation="horizontal" className={styles.scrollAreaScrollBar}>
          <ScrollArea.Thumb className={styles.scrollAreaThumb}/>
        </ScrollArea.Scrollbar>
        <ScrollArea.Scrollbar orientation="vertical" className={styles.scrollAreaScrollBar}>
          <ScrollArea.Thumb className={styles.scrollAreaThumb}/>
        </ScrollArea.Scrollbar>
        <ScrollArea.Corner className={styles.scrollAreaCorner}/>
        <Box className={styles.addPaintBox}><AddPaintCard open={open} setOpen={setOpen} handleAdd={handleAdd} /></Box>
      </ScrollArea.Root>
    </>
  );
}
