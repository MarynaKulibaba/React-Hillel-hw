import BaseTemplate from "../../templates/BaseTemplate";
import TodoListForm from "../../components/TodoListForm";
import { cloneDeep } from "lodash";
import { v4 as uuidv4 } from "uuid";
import { useEffect, useRef, useState } from "react";
import localStorageService from "../../utils/functions";
import { useNavigate } from "react-router-dom";
import routeNames from "../../router/routeNames";
import { useToast } from "@chakra-ui/react";
const CreateTodoItem = () => {
  const [todoItems, setTodoItems] = useState(localStorageService.getData());
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const timerId = useRef();
  const redirect = useNavigate();
  const { homePage: homePageRoute } = routeNames;
  const toast = useToast();
  const handleSubmit = (data, resetForm) => {
    setIsLoading(true);

    const todoItemsCopy = cloneDeep(todoItems);
    const dataCopy = cloneDeep(data);
    dataCopy.id = uuidv4();

    timerId.current = setTimeout(() => {
      try {
        const savedItem = localStorageService.saveItem(dataCopy);
        todoItemsCopy.push(savedItem);

        setTodoItems(todoItemsCopy);
        timerId.current = null;
        redirect(homePageRoute);
        toast({
          title: `Item Created: ${savedItem.title}`,
          description: savedItem.description,
          status: "success",
          duration: 4000,
          isClosable: true,
          position: "top-right",
        });
      } catch (error) {
        setIsError(true);
        toast({
          title: `Error!`,
          description: "Error! Try again later.",
          status: "error",
          duration: 3000,
          isClosable: false,
          position: "top-right",
        });
      } finally {
        setIsLoading(false);
        resetForm();
      }
    }, 1000);
  };

  useEffect(() => {
    return () => {
      if (timerId.current) clearTimeout(timerId.current);
    };
  }, []);

  return (
    <BaseTemplate
      titleText={"Create new Todo Item"}
      className="create-todo-item-page"
    >
      <TodoListForm
        onSubmit={handleSubmit}
        isLoading={isLoading}
        disabled={isError}
      />
    </BaseTemplate>
  );
};

export default CreateTodoItem;
