import { TodoListQuery } from "@/__generated__/relay/TodoListQuery.graphql";
import { Stack, Title } from "@mantine/core";
import { graphql, useLazyLoadQuery } from "react-relay";
import { AddListItem } from "./AddListItem";
import { TodoItem } from "./TodoItem";

export const TodoList = () => {
  const data = useLazyLoadQuery<TodoListQuery>(
    graphql`
      query TodoListQuery {
        viewer {
          id
          taskList(first: 10) {
            edges {
              node {
                id
                ...TodoItem_task
              }
            }
          }
        }
      }
    `,
    {}
  );

  console.log(data);

  return (
    <>
      <Title>My todos</Title>
      <Stack>
        {data.viewer &&
          data.viewer.taskList!.edges!.map((edge) => (
            <TodoItem key={edge?.node?.id} task={edge!.node!} />
          ))}
        <AddListItem />
      </Stack>
    </>
  );
};
