import { Footer } from "@mantine/core";
import { BrandInstagram, BrandYoutube, BrandTwitter } from "tabler-icons-react";
import { Group, ActionIcon } from "@mantine/core";

export default function CustomizedFooter() {
  return (
    <Footer height={60} p="md" sx={{ position: "absolute", bottom: 0 }}>
      <Group spacing="xs" position="center" noWrap>
        <ActionIcon size="lg" variant="default" radius="xl">
          <BrandTwitter size={18} />
        </ActionIcon>
        <ActionIcon size="lg" variant="default" radius="xl">
          <BrandYoutube size={18} color={"white"} />
        </ActionIcon>
        <ActionIcon size="lg" variant="default" radius="xl">
          <BrandInstagram size={18} />
        </ActionIcon>
      </Group>
    </Footer>
  );
}
