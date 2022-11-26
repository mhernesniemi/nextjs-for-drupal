import React, { useState } from "react";
import Head from "next/head";
import { GetStaticPropsResult } from "next";
import { DrupalNode } from "next-drupal";
import { DrupalJsonApiParams } from "drupal-jsonapi-params";

import { drupal } from "lib/drupal";
import { Layout } from "components/layout";
import { NodeArticleTeaser } from "components/node--article--teaser";

import algoliasearch from "algoliasearch/lite";
import { InstantSearch, SearchBox, Hits } from "react-instantsearch-hooks-web";

interface IndexPageProps {
  nodes: DrupalNode[];
}

const searchClient = algoliasearch(
  "58NWKEWOD3",
  "d6294d58b80ff92aac3326e8c616b3fb"
);

export default function IndexPage({ nodes }: IndexPageProps) {
  const [query, setQuery] = useState("");

  return (
    <Layout>
      <Head>
        <title>Next.js for Drupal</title>
        <meta
          name="description"
          content="A Next.js site powered by a Drupal backend."
        />
      </Head>

      <h2>Search</h2>
      <InstantSearch
        indexName="dev_drupal"
        searchClient={searchClient}
        searchFunction={function (search) {
          setQuery(search.state.query);
          search.search();
        }}
      >
        <SearchBox />
        {query && <Hits />}
      </InstantSearch>

      <div>
        <h1 className="mb-10 text-6xl font-black">Latest Articles</h1>
        {nodes?.length ? (
          nodes.map((node) => (
            <div key={node.id}>
              <NodeArticleTeaser node={node} />
              <hr className="my-20" />
            </div>
          ))
        ) : (
          <p className="py-4">No nodes found</p>
        )}
      </div>
    </Layout>
  );
}

export async function getStaticProps(
  context
): Promise<GetStaticPropsResult<IndexPageProps>> {
  // Fetch all articles sorted by the user.
  const nodes = await drupal.getResourceCollectionFromContext<DrupalNode[]>(
    "node--article",
    context,
    {
      params: new DrupalJsonApiParams()
        .addInclude(["field_media_image.field_media_image", "uid.user_picture"])
        .addFields("node--article", [
          "title",
          "path",
          "field_media_image",
          "status",
          "created",
        ])
        .addFields("media--image", ["field_media_image"])
        .addFields("file--file", ["uri", "resourceIdObjMeta"])
        .addSort("created", "DESC")
        .getQueryObject(),
    }
  );

  return {
    props: {
      nodes,
    },
    revalidate: 10, // Activates ISR with max once in 10 seconds.
  };
}
