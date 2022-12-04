import React from "react";
import { BadList } from "./BadList";
import { EntryList } from "./EntryList";

export const ListArea = () => {
  return (
    <div>
      <EntryList />
      <BadList />
    </div>
  );
};
