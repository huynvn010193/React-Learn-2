import React from "react";
import useUser from "../useUser";

export default function Navigation() {
  const { user } = useUser({});

  return <div>{user?.name} Navigation</div>;
}
