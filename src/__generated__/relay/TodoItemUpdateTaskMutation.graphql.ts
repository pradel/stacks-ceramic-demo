/**
 * @generated SignedSource<<cce11f16139711a6dda4893c6581c4c3>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type UpdateTaskInput = {
  clientMutationId?: string | null;
  content: PartialTaskInput;
  id: string;
  options?: UpdateOptionsInput | null;
};
export type PartialTaskInput = {
  completed?: boolean | null;
  title?: string | null;
};
export type UpdateOptionsInput = {
  replace?: boolean | null;
  version?: any | null;
};
export type TodoItemUpdateTaskMutation$variables = {
  input: UpdateTaskInput;
};
export type TodoItemUpdateTaskMutation$data = {
  readonly updateTask: {
    readonly document: {
      readonly id: string;
      readonly " $fragmentSpreads": FragmentRefs<"TodoItem_task">;
    };
  } | null;
};
export type TodoItemUpdateTaskMutation = {
  response: TodoItemUpdateTaskMutation$data;
  variables: TodoItemUpdateTaskMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "TodoItemUpdateTaskMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateTaskPayload",
        "kind": "LinkedField",
        "name": "updateTask",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Task",
            "kind": "LinkedField",
            "name": "document",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "TodoItem_task"
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "TodoItemUpdateTaskMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateTaskPayload",
        "kind": "LinkedField",
        "name": "updateTask",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Task",
            "kind": "LinkedField",
            "name": "document",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "title",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "completed",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "ac81b5aa9f38e9e4c29ab49eee140c95",
    "id": null,
    "metadata": {},
    "name": "TodoItemUpdateTaskMutation",
    "operationKind": "mutation",
    "text": "mutation TodoItemUpdateTaskMutation(\n  $input: UpdateTaskInput!\n) {\n  updateTask(input: $input) {\n    document {\n      id\n      ...TodoItem_task\n    }\n  }\n}\n\nfragment TodoItem_task on Task {\n  id\n  title\n  completed\n}\n"
  }
};
})();

(node as any).hash = "07f398b5652408d76b523a0f194cb4a5";

export default node;
