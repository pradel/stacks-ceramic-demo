import { AddListItemCreateTaskMutation } from "@/__generated__/relay/AddListItemCreateTaskMutation.graphql";
import { Group, TextInput } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import { useState } from "react";
import { graphql, useMutation } from "react-relay";

export const AddListItem = () => {
  const [title, setTitle] = useState<string>("");

  const [commit] = useMutation<AddListItemCreateTaskMutation>(
    graphql`
      mutation AddListItemCreateTaskMutation($input: CreateTaskInput!) {
        createTask(input: $input) {
          clientMutationId
          document {
            id
            ...TodoItem_task
          }
          # TODO use updater instead of this
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
      }
    `
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (title && title !== "") {
      commit({
        variables: {
          input: {
            content: {
              title: title,
              completed: false,
            },
          },
        },
        onCompleted: (data, errors) => {
          setTitle("");
        },
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Group>
        <TextInput
          placeholder="Add list item"
          icon={<IconPlus size={14} />}
          name="title"
          style={{ width: "100%" }}
          value={title}
          onChange={(e) => setTitle(e.currentTarget.value)}
        />
      </Group>
    </form>
  );
};
