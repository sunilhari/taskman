import React from "react";
import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Button
} from "@chakra-ui/core";

function AddSection() {
  return (
    <FormControl w="50%" as="form">
      <FormLabel htmlFor="add-section" color="brand.600">
        Add New Section
      </FormLabel>
      <Input
        type="text"
        id="add-section"
        aria-describedby="add-section-helper-text"
        color="brand.400"
      />
      <FormHelperText id="add-section-helper-text" color="brand.300">
        Use this to add new section to the board.
      </FormHelperText>
      <Button mt={4} variantColor="teal" type="submit">
        Submit
      </Button>
    </FormControl>
  );
}

export default AddSection;
