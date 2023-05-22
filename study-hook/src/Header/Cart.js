import React from "react";
import useUser from "../useUser";

export default function Cart() {
  const { user } = useUser({});

  return <div>{user?.name} Cart</div>;
}
