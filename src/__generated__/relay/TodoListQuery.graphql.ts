/**
 * @generated SignedSource<<d8d5a68c53fc4fe9bdd8a3caced57074>>
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
v1 = [
  {
    "kind": "Literal",
    "name": "first",
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
            "alias": null,
            "args": (v1/*: any*/),
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
            "storageKey": "taskList(first:10)"
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
            "args": (v1/*: any*/),
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
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": "taskList(first:10)"
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "835b591c7c7c15c6d9a6b8445b5f911c",
    "id": null,
    "metadata": {},
    "name": "TodoListQuery",
    "operationKind": "query",
    "text": "query TodoListQuery {\n  viewer {\n    id\n    taskList(first: 10) {\n      edges {\n        node {\n          id\n          ...TodoItem_task\n        }\n      }\n    }\n  }\n}\n\nfragment TodoItem_task on Task {\n  id\n  title\n  completed\n}\n"
  }
};
})();

(node as any).hash = "35f3e42892e02e0d73d90601751e1da4";

export default node;
