import React from "react";
import { Stack, Button } from "@chakra-ui/core";
import { Task } from "../../components";
import { BoardContext } from "../../context";

function Tasks({ tasks }) {
  return (
    <Stack spacing={8} marginTop="10px">
      {tasks.map((task, index) => {
        return <Task {...task} key={index} />;
      })}
    </Stack>
  );
}

export default Tasks;
