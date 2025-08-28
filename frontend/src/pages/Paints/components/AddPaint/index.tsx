import { Dialog, Button, Text } from "@radix-ui/themes";
import { Plus, X } from "lucide-react";
import styles from "./styles.module.scss";
import { type NewPaint } from "../..";
import AddPaintCard from "../AddPaintCard";

type addButtonProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  handleAdd: (p: NewPaint) => void;
};

export default function AddPaint(props: addButtonProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button className={styles.addPaintButton} variant="soft">
          <Plus />
        </Button>
      </Dialog.Trigger>
        <Dialog.Content>
          <Dialog.Title><Text>Add Paint</Text></Dialog.Title>
          <Dialog.Description>
            <Text>Add paint description</Text>
          </Dialog.Description>
          <AddPaintCard onAdd={props.handleAdd} />
					<Dialog.Close>
						<Button className={styles.closeDialogButton} variant="soft"><X /></Button>
					</Dialog.Close>
        </Dialog.Content>
    </Dialog.Root>
  );
}


    // <Dialog.Root open={props.open} onOpenChange={props.setOpen}>
    //   <Dialog.Trigger asChild>
    //     <Button className={styles.addPaintButton} variant="soft">
    //       <Plus />
    //     </Button>
    //   </Dialog.Trigger>
    //   <Dialog.Content className={styles.popoverContent}>
    //     <AddPaintCard onAdd={props.handleAdd} />
    //   </Dialog.Content>
    // </Dialog.Root>