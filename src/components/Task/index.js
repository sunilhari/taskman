import React from "react";
import {
  Box,
  Heading,
  Text,
  Editable,
  EditablePreview,
  EditableInput
} from "@chakra-ui/core";

function Task({ name, desc, ...rest }) {
  return (
    <Box p={5} shadow="md" borderWidth="1px" {...rest}>
      <Heading fontSize="md">
        <Editable
          defaultValue={name}
          as="h1"
          display="inline-block"
          startWithEditView={true}
        >
          <EditablePreview p="10px" />
          <EditableInput p="10px" />
        </Editable>
      </Heading>
      <Text mt={4}>
        <Editable defaultValue={desc} as="p" display="inline-block">
          <EditablePreview p="10px" />
          <EditableInput
            p="10px"
            width="100%"
            as="textarea"
            overflowWrap="break-word"
          />
        </Editable>
      </Text>
    </Box>
  );
}

export default Task;
