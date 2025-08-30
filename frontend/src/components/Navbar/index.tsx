import { Avatar, Box, Flex } from '@radix-ui/themes';

import styles from './styles.module.scss';

export default function Navbar() {
  return (
    <Flex className={styles.root} direction="row-reverse" p="3">
      <Box>
        <Avatar fallback="A" />
      </Box>
    </Flex>
  );
}
