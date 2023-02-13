import { TodoListQuery } from "@/__generated__/relay/TodoListQuery.graphql";
import { graphql, useLazyLoadQuery } from "react-relay";

export const TodoList = () => {
  const data = useLazyLoadQuery<TodoListQuery>(
    graphql`
      query TodoListQuery {
        viewer {
          id
        }
      }
    `,
    {}
  );

  console.log(data);

  return null;
};
