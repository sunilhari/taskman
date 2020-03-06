import React from "react";
import {
  Box,
  Heading,
  Editable,
  EditablePreview,
  EditableInput,
  IconButton,
  Flex
} from "@chakra-ui/core";

import { BoardContext } from "../../context";
function Task({ name, id, desc, parentId, ...rest }) {
  const [, dispatch] = BoardContext.useBoardContext();
  const task = {
    name,
    desc,
    id
  };

  const setName = name => {
    const payload = {
      sectionId: parentId,
      task: {
        ...task,
        name
      }
    };
    dispatch({
      type: BoardContext.BoardActions.UPDATE_TASK,
      payload
    });
  };
  const setDesc = desc =>
    dispatch({
      type: BoardContext.BoardActions.UPDATE_TASK,
      payload: {
        sectionId: parentId,
        task: {
          ...task,
          desc
        }
      }
    });
  const closeTask = () =>
    dispatch({
      type: BoardContext.BoardActions.CLOSE_TASK,
      payload: {
        sectionId: parentId,
        id
      }
    });
  return (
    <Box p={5} shadow="md" borderWidth="1px" {...rest}>
      <Flex alignItems="center" justifyContent="space-between" as="header">
        <Heading fontSize="md">
          <Editable
            defaultValue={name}
            display="inline-block"
            startWithEditView={true}
            onSubmit={setName}
          >
            <EditablePreview p="10px" overflowWrap="break-word" />
            <EditableInput p="10px" />
          </Editable>
        </Heading>
        <IconButton
          aria-label="Close Task"
          display="inline-block"
          icon="close"
          onClick={closeTask}
          variantColor="outline"
          color="black"
        />
      </Flex>
      <Editable defaultValue={desc} width="100%" onSubmit={setDesc}>
        <EditablePreview p="10px" />
        <EditableInput
          p="10px"
          as="textarea"
          overflowWrap="break-word"
          resize="horizontal"
        />
      </Editable>
    </Box>
  );
}

export default Task;
