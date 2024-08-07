import React from "react";
import LoginForm from "./components/LoginForm";
import ImageSection from "./components/ImageSection";
import FormIcon from "./components/FormIcon";
import Register from "./components/Register";

function App() {
  return (
    <div className="flex justify-center gap-10">
    <div className="p-5 sm:p-8 flex flex-col gap-6 justify-center ">
      <div className="flex flex-col gap-3 text-center">
        <h1 className="font-bold text-5xl">Welcome Back!</h1>
        <h5 className="">
          Simplify your workflow and boost your productivity <br /> with Tuga's
          App. Get started for free.
        </h5>
      </div>

      <LoginForm />

      <FormIcon />

      <Register />

    </div>
      <ImageSection />
    </div>
  );
}

export default App;
