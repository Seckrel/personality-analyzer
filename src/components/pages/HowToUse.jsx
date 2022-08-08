import {
  Accordion,
  List,
  ThemeIcon,
  Image,
  AspectRatio,
} from "@mantine/core";
import { USE_STEPS } from "../../constants/HowToUse";
import { CircleCheck, CircleX } from "tabler-icons-react";
import UseSteps from "../UseSteps";
import { AccordionContent, AccordionTitle } from "../../utils/accordion.utils";
import { ModalsProvider } from "@mantine/modals";

const GalleryModal = ({ _, __, innerProps }) => {
  const modalBody = (src, alt, type) => {
    if (type === "image") {
      return (
        <AspectRatio ratio={16 / 9}>
          <Image
            sx={{
              maxWidth: "100%",
              height: "auto",
            }}
            radius="md"
            src={src}
            alt={alt}
          />
        </AspectRatio>
      );
    } else {
      <video src={src} alt={alt} controls />;
    }
  };
  return <>{modalBody(innerProps.src, innerProps.alt, innerProps.type)}</>;
};

function HowToUse() {
  const [knowMe, useSteps] = USE_STEPS;

  return (
    <Accordion>
      <Accordion.Item label={AccordionTitle(knowMe.title)}>
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
          {knowMe.contents.map((content, idx) => (
            <List.Item key={idx}>
              <AccordionContent text={content} transformation={"capitalize"} />
            </List.Item>
          ))}
          {knowMe.isNots.map((isNot, idx) => (
            <List.Item
              key={idx}
              icon={
                <ThemeIcon color="red" size={24} radius="xl">
                  <CircleX size={16} />
                </ThemeIcon>
              }
            >
              <AccordionContent text={isNot} transformation={"uppercase"} />
            </List.Item>
          ))}
        </List>
      </Accordion.Item>
      <Accordion.Item label={AccordionTitle(useSteps.title)}>
        <ModalsProvider
          modalProps={{ size: "60%" }}
          modals={{ demonstration: GalleryModal }}
        >
          <UseSteps steps={useSteps.steps} />
        </ModalsProvider>
      </Accordion.Item>
    </Accordion>
  );
}

export default HowToUse;
