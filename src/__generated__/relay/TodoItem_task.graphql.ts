/**
 * @generated SignedSource<<c149264f85050ca90367644a575b9c98>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type TodoItem_task$data = {
  readonly completed: boolean;
  readonly id: string;
  readonly title: string;
  readonly " $fragmentType": "TodoItem_task";
};
export type TodoItem_task$key = {
  readonly " $data"?: TodoItem_task$data;
  readonly " $fragmentSpreads": FragmentRefs<"TodoItem_task">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "TodoItem_task",
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
  "type": "Task",
  "abstractKey": null
};

(node as any).hash = "2d950dceb4006f90266a376a3c874d7a";

export default node;
