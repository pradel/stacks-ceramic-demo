import { TodoItemUpdateTaskMutation } from "@/__generated__/relay/TodoItemUpdateTaskMutation.graphql";
import { TodoItem_task$key } from "@/__generated__/relay/TodoItem_task.graphql";
import { Checkbox, Group, Text } from "@mantine/core";
import { graphql, useFragment, useMutation } from "react-relay";

export const TodoItem = (props: { task: TodoItem_task$key }) => {
  const task = useFragment(
    graphql`
      fragment TodoItem_task on Task {
        id
        title
        completed
      }
    `,
    props.task
  );

  const [commit] = useMutation<TodoItemUpdateTaskMutation>(
    graphql`
      mutation TodoItemUpdateTaskMutation($input: UpdateTaskInput!) {
        updateTask(input: $input) {
          document {
            id
            ...TodoItem_task
          }
        }
      }
    `
  );

  return (
    <Group>
      <Checkbox
        checked={task.completed}
        onChange={(e) =>
          commit({
            variables: {
              input: {
                id: task.id,
                content: {
                  completed: e.currentTarget.checked,
                },
              },
            },
          })
        }
      />
      <Text>{task.title}</Text>
    </Group>
  );
};
