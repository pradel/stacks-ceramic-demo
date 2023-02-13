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
          taskList(last: 10) @connection(key: "TodoList_taskList") {
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

  return (
    <>
      <Title>My todos</Title>
      <Stack>
        {data.viewer?.taskList?.edges?.map((edge) => (
          <TodoItem key={edge?.node?.id} task={edge!.node!} />
        ))}
        <AddListItem />
      </Stack>
    </>
  );
};
