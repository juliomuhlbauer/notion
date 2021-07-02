import React from "react";
import Head from "next/head";

import { getPageTitle } from "notion-utils";
import { NotionAPI } from "notion-client";

import Render from "../lib/Render";

const notion = new NotionAPI();

export async function getStaticProps() {
  const pageId = "225d3e915426498e87e9fab706246e56";
  const recordMap = await notion.getPage(pageId);

  return {
    props: {
      recordMap,
    },
    revalidate: 10,
  };
}

export default function NotionPage({ recordMap }) {
  if (!recordMap) {
    return null;
  }

  const title = getPageTitle(recordMap);

  return (
    <>
      <Head>
        <meta name="description" content="Júlio's Notion" />
        <title>{title}</title>
      </Head>

      <Render recordMap={recordMap} />
    </>
  );
}
