import React, { useState } from "react";

function Learn() {
  const [name, setName] = useState("");

  const [submittedName, setSubmittedName] = useState("");

  const displayName = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedName(name);
    setName("");
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-center flex-row mt-72 gap-6 my-3"
      >
        <input
          type="text"
          value={name}
          maxLength="10"
          onChange={displayName}
          placeholder="Type here"
          className="input input-bordered input-primary w-full max-w-xs"
        />
        <button type="submit" className="btn btn-outline btn-primary">
          Submit
        </button>
      </form>
      {submittedName && <p className="text-center">Welcome {submittedName}</p>}
    </>
  );
}

export default Learn;
