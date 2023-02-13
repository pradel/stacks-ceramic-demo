/**
 * @generated SignedSource<<52e8733195d12baaa1ef00f6d477d0d5>>
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
      readonly id: string;
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
    "cacheID": "15e4f39d0e1bc0fbc30b7f413f3dca42",
    "id": null,
    "metadata": {},
    "name": "AddListItemCreateTaskMutation",
    "operationKind": "mutation",
    "text": "mutation AddListItemCreateTaskMutation(\n  $input: CreateTaskInput!\n) {\n  createTask(input: $input) {\n    clientMutationId\n    document {\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "3190c21f9c2d48de8b20c6350d516124";

export default node;
