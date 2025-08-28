import { Form } from "radix-ui";
import { Text } from "@radix-ui/themes"

export default function AddPaint() {
  return (
    <Form.Root>
      <Form.Field name="Paint">
        <div>
          <Form.Label>
            Test
          </Form.Label>
        </div>
      </Form.Field>
      <Form.Message>
        <Text>Added paint</Text>
      </Form.Message>
    </Form.Root>
  )
}