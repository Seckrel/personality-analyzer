import { Timeline, Button, ThemeIcon, Image, List } from "@mantine/core";
import { AccordionContent, AccordionTitle } from "../utils/accordion.utils";
import { CircleCheck } from "tabler-icons-react";
import { useModals } from "@mantine/modals";

function UseSteps({ steps }) {
  const modals = useModals();

  const openContextModal = (src, alt, type) =>
    modals.openContextModal("demonstration", {
      title: "Gallery",
      innerProps: {
        src: src,
        alt: alt,
        type: type,
      },
    });

  return (
    <>
      <Timeline>
        {steps.map((step, idx) => (
          <Timeline.Item
            key={idx}
            title={AccordionTitle(step.title, 5)}
            bulletSize={24}
            bullet={
              <ThemeIcon
                size={22}
                variant="gradient"
                gradient={{ from: "lime", to: "cyan" }}
                radius="xl"
              >
                <step.icon size={14} />
              </ThemeIcon>
            }
          >
            {idx === 2 ? (
              <video width={600} height={200} src={step.imgSrc} controls />
            ) : (
              <Image
                width={600}
                onClick={() => openContextModal(step.imgSrc, step.alt, "image")}
                height={200}
                radius="md"
                src={step.imgSrc}
                alt={step.alt}
                fit={"contain"}
              />
            )}
            <List
              spacing="xs"
              size="sm"
              center
              icon={
                <ThemeIcon color="blue" size={24} radius="xl">
                  <CircleCheck size={16} />
                </ThemeIcon>
              }
            >
              {step.contents.map((content, idx) => (
                <List.Item key={idx}>
                  <AccordionContent
                    text={content}
                    transformation={"capitalize"}
                  />
                </List.Item>
              ))}
            </List>
          </Timeline.Item>
        ))}
      </Timeline>
    </>
  );
}

export default UseSteps;
