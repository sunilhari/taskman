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
      <Button mt={4} variantColor="teal" type="submit">
        Submit
      </Button>
    </FormControl>
  );
}

export default AddSection;
