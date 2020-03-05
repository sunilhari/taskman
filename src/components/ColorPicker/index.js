import React from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverHeader,
  PopoverBody,
  IconButton,
  SimpleGrid,
  Box
} from "@chakra-ui/core";
import { colors } from "../../config";
import { BoardContext } from "../../context";

function ColorPicker({ sectionId, sectionColor = "" }) {
  const [, dispatch] = BoardContext.useBoardContext();
  const [color, setColor] = React.useState(sectionColor);
  React.useEffect(() => {
    dispatch({
      type: BoardContext.BoardActions.UPDATE_SECTION,
      payload: {
        id: sectionId,
        color
      }
    });
  }, [color]);

  return (
    <Popover closeOnBlur={true} closeOnEsc={true}>
      <PopoverTrigger>
        <IconButton
          aria-label="Pick Color"
          icon="sun"
          color={color}
          variant=""
        />
      </PopoverTrigger>
      <PopoverContent zIndex={4}>
        <PopoverArrow />
        <PopoverHeader>Pick a Color!</PopoverHeader>
        <PopoverBody>
          <SimpleGrid columns={6} spacing={2}>
            {colors.map(({ label, color }, index) => (
              <Box
                as="button"
                bg={color}
                width="30px"
                height="30px"
                rounded="full"
                key={index}
                onClick={() => setColor(color)}
              />
            ))}
          </SimpleGrid>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}
export default ColorPicker;
