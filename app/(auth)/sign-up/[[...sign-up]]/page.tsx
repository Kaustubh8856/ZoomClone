import { SignUp } from "@clerk/nextjs";
import React from "react";

const SignUpPage = () => {
  return (
    <main className="flex w-full items-center h-screen justify-center">
      <SignUp />
    </main>
  );
};

export default SignUpPage;
