import { TodoItem_task$key } from "@/__generated__/relay/TodoItem_task.graphql";
import { Checkbox, Group, Stack, TextInput, Title } from "@mantine/core";
import { graphql, useFragment } from "react-relay";

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

  console.log(task);

  return (
    <Group>
      <Checkbox checked={task.completed} />
      <TextInput value={task.title} />
    </Group>
  );
};
