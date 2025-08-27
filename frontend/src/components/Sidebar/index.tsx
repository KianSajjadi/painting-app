import { NavLink } from "react-router-dom";
import { Flex, Text, Button} from "@radix-ui/themes";
import { useState } from "react"
import styles from "./styles.module.scss"

type Link = {
  path: string;
  text: string;
  icon_path: string;
}

const home = {path: "/", text: "Paintman", icon_path: "P"}

const links: Link[] = [
  {path: "/paints", text: "Paints", icon_path: "p"},
  {path: "/schemes", text: "Schemes", icon_path: "s"},
  {path: "/manufacturers", text: "Manufacterers", icon_path: "m"},
  {path: "/settings", text: "Settings", icon_path: "S"}
]

function sidebarLinkClassName({ isActive }: { isActive: boolean }) {
  return isActive ? [styles.sidebarLink, styles.sidebarLinkActive].join(" ") : styles.sidebarLink;
}

function collapsinator(link: Link, collapsed: boolean) {
  return collapsed ? link.icon_path : link.text
}

export default function Sidebar() {
  const [collapsed, setCollapsed]= useState(false);

  return (
    <Flex direction="column" gap="3" className={styles.root}>
      <NavLink to="/" className={sidebarLinkClassName}>
        <Text size="4" color="cyan">{collapsinator(home, collapsed)}</Text>
      </NavLink>
      {links.map((link) => (
        <NavLink to={link.path} className={sidebarLinkClassName}>
          <Text size="2" color="cyan">
            {collapsinator(link, collapsed)}
          </Text>
        </NavLink>
      ))}
      <Button className={styles.sidebarCollapseButton} onClick={() => setCollapsed((c) => !c)}>{collapsed ? "→" : "←"}</Button>
    </Flex>
  );
}