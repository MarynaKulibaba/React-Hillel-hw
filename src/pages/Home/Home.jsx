import BaseTemplate from "../../templates/BaseTemplate";
import {
  Button,
  Grid,
  GridItem,
  Stack,
  Wrap,
  WrapItem,
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogCloseButton,
  AlertDialogOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { DeleteIcon, EditIcon, ViewIcon, AddIcon } from "@chakra-ui/icons";
import localStorageService from "./../../utils/functions";
import { useNavigate } from "react-router-dom";
import routeNames from "../../router/routeNames";
import { useToast } from "@chakra-ui/react";
import CustomTable from "../../components/CustomTable";

const Home = () => {
  const [todoItems, setTodoItems] = useState(localStorageService.getData());
  const redirect = useNavigate();
  const [todoItemToRemove, setTodoItemToRemove] = useState(null);
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();

  const tableHeader = [
    { title: "ID", key: "id" },
    { title: "Title", key: "title" },
    { title: "Description", key: "description" },
    { title: "Status", key: "status" },
  ];

  const TableActions = ({ data }) => {
    return (
      <Stack spacing={2} direction="row" align="center">
        <>
          <Button colorScheme="teal" size="sm">
            <EditIcon />
          </Button>
          <Button colorScheme="purple" size="sm">
            <ViewIcon />
          </Button>
        </>
        <Button
          onClick={() => handleRemoveTodo(data.id)}
          colorScheme="red"
          size="sm"
        >
          <DeleteIcon />
        </Button>
      </Stack>
    );
  };
  const goToCreateTodoItem = () => {
    redirect(routeNames.createTodoItem);
  };

  const handleRemoveTodo = (todoId) => {
    const todoItem = todoItems.find(({ id }) => todoId === id);
    setTodoItemToRemove(todoItem);
    onOpen();
  };

  const removeFromDB = () => {
    try {
      const freshData = localStorageService.removeTodoItem(todoItemToRemove.id);

      toast({
        title: `Item removed: ${todoItemToRemove.title}`,
        description: todoItemToRemove.description,
        status: "success",
        duration: 4000,
        isClosable: true,
        position: "top-right",
      });

      setTodoItemToRemove(null);
      setTodoItems(freshData);
    } catch (e) {
      toast({
        title: `Error!`,
        description: "Error! Try again later.",
        status: "error",
        duration: 3000,
        isClosable: false,
        position: "top-right",
      });
    }
  };

  return (
    <BaseTemplate className={"home-page"} titleText="TODO LIST">
      <Grid templateColumns="repeat(1, 1fr)" gap={6}>
        <GridItem w="100%" h="10">
          <Wrap>
            <WrapItem>
              <Button
                onClick={goToCreateTodoItem}
                colorScheme="purple"
                leftIcon={<AddIcon />}
                size="sm"
                mb="2"
              >
                Add new item
              </Button>
            </WrapItem>
          </Wrap>
          <CustomTable
            headers={tableHeader}
            content={todoItems}
            actions={TableActions}
          />
        </GridItem>
      </Grid>

      {todoItemToRemove && (
        <AlertDialog
          motionPreset="slideInBottom"
          leastDestructiveRef={cancelRef}
          onClose={onClose}
          isOpen={isOpen}
          isCentered
        >
          <AlertDialogOverlay />

          <AlertDialogContent>
            <AlertDialogHeader>
              Removing TodoItem - {todoItemToRemove.title}
            </AlertDialogHeader>
            <AlertDialogCloseButton />
            <AlertDialogBody>
              Are you sure you want to delete todo item -{" "}
              {todoItemToRemove.title}
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                No
              </Button>
              <Button onClick={removeFromDB} colorScheme="red" ml={3}>
                Yes
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      )}
    </BaseTemplate>
  );
};

export default Home;
