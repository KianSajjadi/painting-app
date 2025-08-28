import { Form } from "radix-ui";
import { TextField, Button } from "@radix-ui/themes"
import { Plus } from "lucide-react"
import { type NewPaint } from "../../Paints"
import styles from "./styles.module.scss"

const fields = [
  {element_name: "colour_name", field_name: "Colour Name", required: true, error_message: "Enter a colour name", type: "string"},
  {element_name: "manufacturer", field_name: "Manufacturer", required: true, error_message: "Enter a manufacturer", type: "string"},
  {element_name: "range", field_name: "Range", required: false, error_message: "", type: "string"},
  {element_name: "vessel", field_name: "Vessel", required: true, error_message: "Enter a vessel type", type: "string"},
  {element_name: "sku", field_name: "SKU", required: false, error_message: "", type: "number"},
  {element_name: "opacity", field_name: "Opacity", required: false, error_message: "", type: "number"},
]

export default function AddPaint({ onAdd }: { onAdd: (p: NewPaint) => void }) {
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
          <Form.Control asChild>
            <TextField.Root placeholder={field.required ? "Required" + " " + field.type: "Optional" + " " + field.type} required={field.required} key={field.element_name}>
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
  );
}

    //     <Form.Field name={field.element_name} className={styles.paintField}>
    //       <Form.Label asChild>
    //         <Text className={styles.fieldName}>{field.field_name}</Text>
    //       </Form.Label>
    //         <TextField.Root key={field.element_name} required={field.required} placeholder={field.required ? "Required" : "Optional"}>
    //         <TextField.Slot>
    //           <Plus size={16} aria-hidden />
    //         </TextField.Slot>
    //         <Form.Control asChild type="">
    //             <TextField.Slot>
    //             </TextField.Slot>
    //         </Form.Control>
    //       </TextField.Root>
    //       <Form.Message match="valueMissing" asChild>
    //         <Text color="red">{field.error_message}</Text>
    //       </Form.Message>
    //     </Form.Field>
    //   ))}
    //   <Form.Submit asChild>
    //     <Button mt="3" variant="soft">Add Paint</Button>
    //   </Form.Submit>
    // </Form.Root>