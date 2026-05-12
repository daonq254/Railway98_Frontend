import React from "react";
import CreateButton from "../Components/Account/CreateButton";
import ResultForm from "./../Components/Account/ResultForm";

function AccountContainer(props) {
  return (
    <div>
      <CreateButton />
      <ResultForm />
    </div>
  );
}

export default AccountContainer;
