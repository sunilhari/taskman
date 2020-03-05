import React from "react";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton
} from "@chakra-ui/core";

function AppAlert({ title, desc }) {
  return (
    <Alert status="error">
      <AlertIcon />
      <AlertTitle mr={2}>{title}</AlertTitle>
      <AlertDescription>{desc}</AlertDescription>
    </Alert>
  );
}

export default AppAlert;
