import React from "react";
import Head from "next/head";

function posts() {
  return (
    <>
      <Head>
        <title>Posts</title>
        <meta
          name="description"
          content="Ethan is an apprentice applications developer at a company called PebblePad."
        />
      </Head>
      <div>This is the posts page</div>
    </>
  );
}

export default posts;
