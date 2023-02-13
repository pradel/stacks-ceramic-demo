/**
 * @generated SignedSource<<995990a6c03bcdf7a505e91816dfa795>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type TodoListQuery$variables = {};
export type TodoListQuery$data = {
  readonly viewer: {
    readonly id: string;
  } | null;
};
export type TodoListQuery = {
  response: TodoListQuery$data;
  variables: TodoListQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "CeramicAccount",
    "kind": "LinkedField",
    "name": "viewer",
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
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "TodoListQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "TodoListQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "73c7605d1524826618cf01ca07cd88d3",
    "id": null,
    "metadata": {},
    "name": "TodoListQuery",
    "operationKind": "query",
    "text": "query TodoListQuery {\n  viewer {\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "ab7bb1b84cfcd27133568dc8a5804ca6";

export default node;
