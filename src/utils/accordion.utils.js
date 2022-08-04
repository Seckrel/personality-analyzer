import { Text, Title } from "@mantine/core";

const AccordionContent = ({ text, transformation }) => (
  <Text transform={transformation}>{text}</Text>
);

const AccordionTitle = (text, order = 3) => (
  <Title order={order}>
    <Text transform={"capitalize"}>{text}</Text>
  </Title>
);

export { AccordionContent, AccordionTitle };
