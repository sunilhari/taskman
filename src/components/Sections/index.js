import React from "react";
import { Flex, Button, Box } from "@chakra-ui/core";
import { Section } from "../../components";
import { BoardContext } from "../../context";

function Sections() {
  const [state, dispatch] = BoardContext.useBoardContext();
  const addSection = () =>
    dispatch({
      type: BoardContext.BoardActions.ADD_SECTION,
      payload: {
        section: {
          name: "Section",
          isDisabled: false
        }
      }
    });
  return (
    <Box boxSizing="border-box">
      <Button color="brand.500" onClick={addSection}>
        Add Section
      </Button>
      <Flex
        justifyContent={["center", "center", "flex-start", "flex-start"]}
        alignItems={["center", "center", "flex-start", "flex-start"]}
        flexDirection={["column", "column", "row", "row"]}
        flexWrap={["wrap", "wrap", "nowrap", "nowrap"]}
        overflow="auto"
      >
        {state.sections.map((section, index) => {
          return <Section section={section} key={index} />;
        })}
      </Flex>
    </Box>
  );
}

export default Sections;
