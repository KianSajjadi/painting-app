import { Button, Flex, Text } from '@radix-ui/themes';
import { Brush, ChevronLeft, ChevronRight, PaintBucket, Palette, PersonStanding, Settings } from 'lucide-react';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './styles.module.scss';

type Link = {
  path: string;
  text: string;
  icon: React.ReactNode;
};

const home = { path: '/', text: 'Paintman', icon: <Brush size={25} /> };

const links: Link[] = [
  { path: '/paints', text: 'Paints', icon: <PaintBucket size={20} className={styles.icon}/> },
  { path: '/schemes', text: 'Schemes', icon: <Palette size={20} className={styles.icon}/> },
  { path: '/models', text: 'Models', icon: <PersonStanding size={20} className={styles.icon}/> },
  { path: '/settings', text: 'Settings', icon: <Settings size={20} className={styles.icon}/> },
];

function sidebarLinkClassName({ isActive }: { isActive: boolean }) {
  return isActive ? [styles.sidebarLink, styles.sidebarLinkActive].join(' ') : styles.sidebarLink;
}

function collapsinator(link: Link, collapsed: boolean) {
  return (
    <Text size={link.text == 'Paintman' ? '5' : '3'} align="center">
      {link.icon} {!collapsed && link.text}
    </Text>
  );
}

const expandButton = <ChevronRight size={25} />;
const collapseButton = <ChevronLeft size={25} />;

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Flex direction="column" gap="3" className={styles.root}>
      <NavLink to="/" className={sidebarLinkClassName}>
        {collapsinator(home, collapsed)}
      </NavLink>
      {links.map((link) => (
        <NavLink to={link.path} className={sidebarLinkClassName} key={link.path}>
          {collapsinator(link, collapsed)}
        </NavLink>
      ))}
      <Button className={styles.sidebarCollapseButton} onClick={() => setCollapsed((c) => !c)}>
        {collapsed ? expandButton : collapseButton}
      </Button>
    </Flex>
  );
}
