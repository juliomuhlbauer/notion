import React from "react";
import Head from "next/head";

import { getPageTitle, getAllPagesInSpace } from "notion-utils";
import { NotionAPI } from "notion-client";
import Render from "../lib/Render";

const isDev = process.env.NODE_ENV === "development" || !process.env.NODE_ENV;

const notion = new NotionAPI();

export async function getStaticProps(context) {
  const pageId = context.params.pageId;

  const recordMap = await notion.getPage(pageId);

  return {
    props: {
      recordMap,
    },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  if (isDev) {
    return {
      paths: [],
      fallback: true,
    };
  }

  const rootNotionPageId = "225d3e915426498e87e9fab706246e56";
  const rootNotionSpaceId = "df25ef0e-4d2f-4724-ac36-4b9d6c652980";

  const pages = await getAllPagesInSpace(
    rootNotionPageId,
    rootNotionSpaceId,
    notion.getPage.bind(notion)
  );

  const paths = Object.keys(pages).map((pageId) => `/${pageId}`);

  return {
    paths,
    fallback: true,
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
