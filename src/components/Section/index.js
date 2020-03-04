import React from "react";
import { BoardContext } from "../../context";
import {
  Box,
  Editable,
  EditableInput,
  EditablePreview,
  CloseButton,
  Flex,
  IconButton,
  Heading
} from "@chakra-ui/core";

import { Tasks } from "../../components";
function Section({ section }) {
  const { name, id, isDisabled, tasks = [] } = section;
  const [, dispatch] = BoardContext.useBoardContext();
  const updateSectionName = name => {
    dispatch({
      type: BoardContext.BoardActions.UPDATE_SECTION,
      payload: {
        name,
        id: id
      }
    });
  };
  const removeSection = () =>
    dispatch({
      type: BoardContext.BoardActions.REMOVE_SECTION,
      payload: {
        id: id
      }
    });
  const addTaskToSection = () =>
    dispatch({
      type: BoardContext.BoardActions.ADD_TASK,
      payload: {
        task: {
          name: "Task 1",
          isDisabled: false
        },
        id: id
      }
    });
  return (
    <Box
      border="solid black 1px"
      mx="10px"
      my="10px"
      p="20px"
      minWidth={["90%", "90%", "30%", "30%"]}
    >
      <Flex alignItems="center" justifyContent="space-between" as="header">
        <IconButton
          aria-label="Add a Task"
          icon="add"
          onClick={addTaskToSection}
          variant=""
          variantColor="brand.300"
        />
        <Heading as="h2" size="lg">
          <Editable
            defaultValue={name}
            as="h1"
            onSubmit={updateSectionName}
            isDisabled={isDisabled}
            display="inline-block"
            startWithEditView={true}
          >
            <EditablePreview />
            <EditableInput />
          </Editable>
        </Heading>
        <IconButton
          aria-label="delete section"
          display="inline-block"
          icon="delete"
          onClick={removeSection}
          variant=""
          variantColor="brand.300"
        />
      </Flex>

      <main>
        <Tasks tasks={tasks} parentId={id} />
      </main>
    </Box>
  );
}

export default Section;
