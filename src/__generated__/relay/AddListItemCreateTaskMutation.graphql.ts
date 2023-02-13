/**
 * @generated SignedSource<<23841532f47c6fc55e4e6217f0beef57>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
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
      readonly " $fragmentSpreads": FragmentRefs<"TodoItem_task">;
    };
    readonly viewer: {
      readonly id: string;
      readonly taskList: {
        readonly edges: ReadonlyArray<{
          readonly node: {
            readonly id: string;
            readonly " $fragmentSpreads": FragmentRefs<"TodoItem_task">;
          } | null;
        } | null> | null;
      } | null;
    } | null;
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
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "clientMutationId",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v4 = {
  "args": null,
  "kind": "FragmentSpread",
  "name": "TodoItem_task"
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "cursor",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "concreteType": "PageInfo",
  "kind": "LinkedField",
  "name": "pageInfo",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "hasPreviousPage",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "startCursor",
      "storageKey": null
    }
  ],
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "completed",
  "storageKey": null
},
v10 = [
  {
    "kind": "Literal",
    "name": "last",
    "value": 10
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "AddListItemCreateTaskMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateTaskPayload",
        "kind": "LinkedField",
        "name": "createTask",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Task",
            "kind": "LinkedField",
            "name": "document",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "CeramicAccount",
            "kind": "LinkedField",
            "name": "viewer",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              {
                "alias": "taskList",
                "args": null,
                "concreteType": "TaskConnection",
                "kind": "LinkedField",
                "name": "__TodoList_taskList_connection",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "TaskEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Task",
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          (v3/*: any*/),
                          (v4/*: any*/),
                          (v5/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v6/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v7/*: any*/)
                ],
                "storageKey": null
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
    "name": "AddListItemCreateTaskMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateTaskPayload",
        "kind": "LinkedField",
        "name": "createTask",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Task",
            "kind": "LinkedField",
            "name": "document",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              (v8/*: any*/),
              (v9/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "CeramicAccount",
            "kind": "LinkedField",
            "name": "viewer",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              {
                "alias": null,
                "args": (v10/*: any*/),
                "concreteType": "TaskConnection",
                "kind": "LinkedField",
                "name": "taskList",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "TaskEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Task",
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          (v3/*: any*/),
                          (v8/*: any*/),
                          (v9/*: any*/),
                          (v5/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v6/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v7/*: any*/)
                ],
                "storageKey": "taskList(last:10)"
              },
              {
                "alias": null,
                "args": (v10/*: any*/),
                "filters": null,
                "handle": "connection",
                "key": "TodoList_taskList",
                "kind": "LinkedHandle",
                "name": "taskList"
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
    "cacheID": "71176675c7ec34367f4e1af8d7b95912",
    "id": null,
    "metadata": {
      "connection": [
        {
          "count": null,
          "cursor": null,
          "direction": "backward",
          "path": [
            "createTask",
            "viewer",
            "taskList"
          ]
        }
      ]
    },
    "name": "AddListItemCreateTaskMutation",
    "operationKind": "mutation",
    "text": "mutation AddListItemCreateTaskMutation(\n  $input: CreateTaskInput!\n) {\n  createTask(input: $input) {\n    clientMutationId\n    document {\n      id\n      ...TodoItem_task\n    }\n    viewer {\n      id\n      taskList(last: 10) {\n        edges {\n          node {\n            id\n            ...TodoItem_task\n            __typename\n          }\n          cursor\n        }\n        pageInfo {\n          hasPreviousPage\n          startCursor\n        }\n      }\n    }\n  }\n}\n\nfragment TodoItem_task on Task {\n  id\n  title\n  completed\n}\n"
  }
};
})();

(node as any).hash = "afbea7e6ae073719c86920dedfa99cdb";

export default node;
