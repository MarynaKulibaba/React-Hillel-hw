import {
  TableContainer,
  Table,
  Th,
  Thead,
  Tr,
  Tbody,
  Td,
  PopoverTrigger,
  Button,
  PopoverContent,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  Popover,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import { Fragment } from "react";

const CustomTable = ({ headers, content, actions: Actions }) => {
  const createTD = (content) => {
    if (!content || content.length < 20) {
      return <Td>{content}</Td>;
    }

    return (
      <Td>
        <Popover>
          <PopoverTrigger>
            <Button>{content.substring(0, 15) + "..."}</Button>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverCloseButton />
            <PopoverHeader>Info:</PopoverHeader>
            <PopoverBody>{content}</PopoverBody>
          </PopoverContent>
        </Popover>
      </Td>
    );
  };

  return (
    <TableContainer>
      <Table variant="simple">
        <Thead bg={"#ccc"}>
          <Tr>
            {headers &&
              headers.map((item) => {
                return <Th key={item.key}>{item.title}</Th>;
              })}
            {Actions && <Th>Actions</Th>}
          </Tr>
        </Thead>
        <Tbody>
          {content &&
            content.map((content) => {
              return (
                <Tr key={content.id}>
                  {headers.map((header) => {
                    return (
                      <Fragment key={header.key}>
                        {createTD(content[header.key])}
                      </Fragment>
                    );
                  })}
                  {Actions && (
                    <Td>
                      <Actions data={content} />
                    </Td>
                  )}
                </Tr>
              );
            })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

CustomTable.propTypes = {
  headers: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.any.isRequired,
      key: PropTypes.string.isRequired,
    }),
  ),
  content: PropTypes.arrayOf(PropTypes.any).isRequired,
  actions: PropTypes.func,
};

export default CustomTable;
