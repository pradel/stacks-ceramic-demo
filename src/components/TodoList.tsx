import { TodoListQuery } from "@/__generated__/relay/TodoListQuery.graphql";
import { Stack, Title } from "@mantine/core";
import { graphql, useLazyLoadQuery } from "react-relay";
import { AddListItem } from "./AddListItem";

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
                title
                completed
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
        <AddListItem />
      </Stack>
    </>
  );
};
