"use client";

import React, { useState } from "react";

const NewsletterSignupForm = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add your newsletter signup logic here, such as sending the email to your newsletter service
    console.log("Email:", email);
    // Reset the form field after submission if needed
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-8 ">
      <h3 className="text font-bold w-full  text-left">SIGN UP </h3>
      <div>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Enter your email"
          className=" r px-2 py-1 w-full rounded-none"
        />
      </div>
      <button
        type="submit"
        className="bg-black border text-white px-4 py-2 hover:bg-white hover:text-black text-sm "
      >
        Submit
      </button>
    </form>
  );
};

export default NewsletterSignupForm;
