import React from "react";
import { BoardContext } from "../../context";
import {
  Box,
  Editable,
  EditableInput,
  EditablePreview,
  Collapse,
  Flex,
  IconButton,
  Heading,
  Tooltip
} from "@chakra-ui/core";

import { Tasks, ColorPicker } from "../../components";

function Section({ section }) {
  const [open, setOpen] = React.useState(false);
  const { name, id, isDisabled, color, tasks = [] } = section;
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
  React.useEffect(() => {
    setOpen(true);
  }, [tasks]);
  const toggleSectionState = () => setOpen(!open);

  return (
    <Box
      mx="10px"
      my="10px"
      p="20px"
      width={["90%", "90%", "30%", "30%"]}
      minWidth={["90%", "90%", "30%", "30%"]}
      shadow="lg"
    >
      <Flex alignItems="center" justifyContent="space-between" as="header">
        <Tooltip label="Add a Task">
          <IconButton
            aria-label="Add a Task"
            icon="add"
            onClick={addTaskToSection}
            variantColor="brand"
          />
        </Tooltip>
        <Heading as="h2" size="lg" display="inline-block">
          <Editable
            defaultValue={name}
            onSubmit={updateSectionName}
            isDisabled={isDisabled}
            startWithEditView={false}
            textAlign="center"
            color={color}
          >
            <EditablePreview overflowWrap="break-word" />
            <EditableInput />
          </Editable>
        </Heading>
        {tasks.length > 0 ? (
          <IconButton
            aria-label={open ? "close section" : "open section"}
            display="inline-block"
            icon={open ? "chevron-up" : "chevron-down"}
            onClick={toggleSectionState}
            variantColor="brand"
          />
        ) : null}
      </Flex>

      <Collapse as="main" isOpen={open}>
        <Tasks tasks={tasks} parentId={id} />
      </Collapse>
      <Flex
        alignItems="center"
        justifyContent="space-between"
        as="footer"
        alignContent="center"
        mt="10px"
      >
        <ColorPicker sectionId={id} sectionColor={color} />
        <Tooltip label="Double Click to Delete this Section">
          <IconButton
            aria-label="delete section"
            display="inline-block"
            icon="delete"
            onDoubleClick={removeSection}
            variantColor="brand"
          />
        </Tooltip>
      </Flex>
    </Box>
  );
}

export default Section;
