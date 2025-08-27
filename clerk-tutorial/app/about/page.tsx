"use client";

import { useUser } from "@clerk/nextjs";
import React from "react";

const page = () => {
  const { isSignedIn, user, isLoaded } = useUser();

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (!isSignedIn) {
    return <div>Sign in to view this page</div>;
  }

  return <div className="px-20">Hello {user.firstName}!</div>;
};

export default page;
