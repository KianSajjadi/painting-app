import { Form, Tabs } from "radix-ui";
import { TextField, Button } from "@radix-ui/themes"
import { Plus } from "lucide-react"
import { type NewPaint } from "../.."
import styles from "./styles.module.scss"

const fields = [
  {element_name: "colour_name", field_name: "Colour Name", required: true, error_message: "Enter a colour name", type: "string"},
  {element_name: "manufacturer", field_name: "Manufacturer", required: true, error_message: "Enter a manufacturer", type: "string"},
  {element_name: "range", field_name: "Range", required: false, error_message: "", type: "string"},
  {element_name: "vessel", field_name: "Vessel", required: true, error_message: "Enter a vessel type", type: "string"},
  {element_name: "sku", field_name: "SKU", required: false, error_message: "", type: "number"},
  {element_name: "opacity", field_name: "Opacity", required: false, error_message: "", type: "number"},
]

function AddPaintDetailsForm({ onAdd }: { onAdd: (p: NewPaint) => void }) {
  return (
    <Form.Root
      onSubmit={(e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const str = (k: string) => (data.get(k)?.toString().trim() || "")
        const opt = (k: string) => {
          const v = data.get(k)?.toString().trim();
          return v ? v : undefined;
        }
        const num  = (k: string) => {
          const v = data.get(k)?.toString().trim();
          return v ? Number(v) : undefined;
        }
        
        const new_paint: NewPaint = {
          colour_name: str("colour_name"),
          manufacturer: str("manufacturer"),
          vessel: str("vessel"),
          range: opt("range"),
          sku: opt("sku"),
          opacity: num("opacity"),
        }
        onAdd(new_paint);
        console.log([...new FormData(e.currentTarget).entries()]);
        (e.currentTarget as HTMLFormElement).reset();
      }}
    >
      {fields.map((field) => (
        <Form.Field name={field.element_name} key={field.element_name}>
          <Form.Label className={styles.formLabel}>
            {field.field_name}
          </Form.Label>
          <Form.Control asChild className={styles.formControl}>
            <TextField.Root placeholder={field.required ? "Required" + " " + field.type: "Optional" + " " + field.type} required={field.required} key={field.element_name} className={styles.textFieldRoot}>
              <TextField.Slot className={styles.textFieldSlot}>
                <Plus size={15}/>
              </TextField.Slot>
            </TextField.Root>
          </Form.Control>
        </Form.Field>
      ))}
      <Form.Submit asChild>
        <Button mt="3" variant="soft">Add Paint</Button>
      </Form.Submit>
    </Form.Root>
  )
}

export default function AddPaint({ onAdd }: { onAdd: (p: NewPaint) => void }) {
  return (
    <Tabs.Root>
      <Tabs.List>
        <Tabs.Trigger value="details">
          Details
        </Tabs.Trigger>
        <Tabs.Trigger value="img-upload">
          Image
        </Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="details" className={styles.detailsTab}>
        <AddPaintDetailsForm onAdd={onAdd} />
      </Tabs.Content>
    </Tabs.Root>
  );
}