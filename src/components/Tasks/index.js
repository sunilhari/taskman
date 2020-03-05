import React from "react";
import { Stack } from "@chakra-ui/core";
import { Task } from "../../components";

function Tasks({ tasks, parentId }) {
  return (
    <Stack spacing={8} marginTop="10px">
      {tasks.map((task, index) => {
        return <Task {...task} parentId={parentId} key={index} />;
      })}
    </Stack>
  );
}

export default Tasks;
