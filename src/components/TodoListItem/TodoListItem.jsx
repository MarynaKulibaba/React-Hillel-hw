import PropTypes from "prop-types";
import { Badge, Box, GridItem } from "@chakra-ui/react";

const TodoListItem = ({ title, description }) => {
  return (
    <GridItem>
      <Box borderWidth="1px" p={2}>
        <Badge borderRadius="full" px="2" colorScheme="teal">
          {title}
        </Badge>
        <Box
          color="gray.500"
          fontWeight="semibold"
          letterSpacing="wide"
          fontSize="xs"
          textTransform="uppercase"
          ml="2"
        >
          {description}
        </Box>
      </Box>
    </GridItem>
  );
};

TodoListItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default TodoListItem;
