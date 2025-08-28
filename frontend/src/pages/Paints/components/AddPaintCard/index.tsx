import { Popover } from "radix-ui"
import { Button, Card } from "@radix-ui/themes"
import { Plus } from "lucide-react"
import styles from "./styles.module.scss"
import { type NewPaint } from "../.."
import AddPaint from "../AddPaint"

type PopoverButton = {
  open: boolean;
  setOpen: (open: boolean) => void;
  handleAdd: (p: NewPaint) => void;
}

export default function AddPaintCard(props: PopoverButton) {
  return (
    <Popover.Root open={props.open} onOpenChange={props.setOpen}>
      <Popover.Trigger asChild>
        <Button className={styles.addPaintButton} variant="soft"><Plus /></Button>
      </Popover.Trigger>
      <Popover.Content className={styles.popoverContent}>
        <Card className={styles.popoverCard}><AddPaint onAdd={props.handleAdd}/></Card>
      </Popover.Content>
    </Popover.Root>
  )
}