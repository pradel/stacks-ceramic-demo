/**
 * @generated SignedSource<<c65ca076fcb4061eb0016cd3c0939b2e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type CreateTaskInput = {
  clientMutationId?: string | null;
  content: TaskInput;
};
export type TaskInput = {
  completed: boolean;
  title: string;
};
export type AddListItemCreateTaskMutation$variables = {
  input: CreateTaskInput;
};
export type AddListItemCreateTaskMutation$data = {
  readonly createTask: {
    readonly clientMutationId: string | null;
    readonly document: {
      readonly completed: boolean;
      readonly id: string;
      readonly title: string;
    };
  } | null;
};
export type AddListItemCreateTaskMutation = {
  response: AddListItemCreateTaskMutation$data;
  variables: AddListItemCreateTaskMutation$variables;
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
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "CreateTaskPayload",
    "kind": "LinkedField",
    "name": "createTask",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "clientMutationId",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Task",
        "kind": "LinkedField",
        "name": "document",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
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
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "AddListItemCreateTaskMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AddListItemCreateTaskMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "b90915d18d3e853d80916c3374b3775d",
    "id": null,
    "metadata": {},
    "name": "AddListItemCreateTaskMutation",
    "operationKind": "mutation",
    "text": "mutation AddListItemCreateTaskMutation(\n  $input: CreateTaskInput!\n) {\n  createTask(input: $input) {\n    clientMutationId\n    document {\n      id\n      title\n      completed\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "faf8d4bad8fb63fee357654b29c309bc";

export default node;
