/**
 * @generated SignedSource<<c76db08dc6609317a98416781bbfc105>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type TodoListQuery$variables = {};
export type TodoListQuery$data = {
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
};
export type TodoListQuery = {
  response: TodoListQuery$data;
  variables: TodoListQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "cursor",
  "storageKey": null
},
v3 = {
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
v4 = [
  {
    "kind": "Literal",
    "name": "last",
    "value": 10
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "TodoListQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "CeramicAccount",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          (v0/*: any*/),
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
                      (v0/*: any*/),
                      {
                        "args": null,
                        "kind": "FragmentSpread",
                        "name": "TodoItem_task"
                      },
                      (v1/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v2/*: any*/)
                ],
                "storageKey": null
              },
              (v3/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "TodoListQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "CeramicAccount",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          {
            "alias": null,
            "args": (v4/*: any*/),
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
                      (v0/*: any*/),
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
                      },
                      (v1/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v2/*: any*/)
                ],
                "storageKey": null
              },
              (v3/*: any*/)
            ],
            "storageKey": "taskList(last:10)"
          },
          {
            "alias": null,
            "args": (v4/*: any*/),
            "filters": null,
            "handle": "connection",
            "key": "TodoList_taskList",
            "kind": "LinkedHandle",
            "name": "taskList"
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "29ed57ab0c7e018ef5beaf063a74b900",
    "id": null,
    "metadata": {
      "connection": [
        {
          "count": null,
          "cursor": null,
          "direction": "backward",
          "path": [
            "viewer",
            "taskList"
          ]
        }
      ]
    },
    "name": "TodoListQuery",
    "operationKind": "query",
    "text": "query TodoListQuery {\n  viewer {\n    id\n    taskList(last: 10) {\n      edges {\n        node {\n          id\n          ...TodoItem_task\n          __typename\n        }\n        cursor\n      }\n      pageInfo {\n        hasPreviousPage\n        startCursor\n      }\n    }\n  }\n}\n\nfragment TodoItem_task on Task {\n  id\n  title\n  completed\n}\n"
  }
};
})();

(node as any).hash = "a43c5b9bfae8c9e5b9a3ccd08e608108";

export default node;
