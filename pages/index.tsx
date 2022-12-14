import React, { useState } from "react";
import Head from "next/head";
import { GetStaticPropsResult } from "next";
import { DrupalNode } from "next-drupal";
import { DrupalJsonApiParams } from "drupal-jsonapi-params";

import { drupal } from "lib/drupal";
import { Layout } from "templates/layout";
import { NodeArticleTeaser } from "templates/node--article--teaser";

import algoliasearch from "algoliasearch/lite";
import { InstantSearch, SearchBox, Hits } from "react-instantsearch-hooks-web";

import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

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

      <InstantSearch
        indexName="dev_drupal"
        searchClient={searchClient}
        searchFunction={function (search) {
          setQuery(search.state.query);
          search.search();
        }}
      >
        <SearchBox
          submitIconComponent={() => (
            <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
              <MagnifyingGlassIcon className="w-6 h-6 text-black" />
            </div>
          )}
          resetIconComponent={() => null}
          classNames={{
            root: "relative",
            form: "flex mb-3",
            input:
              "py-3 px-12 m-1 w-full border-2 border-gray-400 placeholder:text-black rounded",
          }}
          placeholder={"Quick search"}
        />
        {query && (
          <div className="p-2 border">
            <Hits
              hitComponent={(data: { hit: any }) => (
                <div>
                  <div className="py-1 my-1">
                    <Link href={data.hit.url}>{data.hit.title}</Link>
                  </div>
                </div>
              )}
            />
          </div>
        )}
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
        .addInclude([
          "field_media_image.field_media_image",
          "uid.user_picture",
          "field_paragraphs",
        ])
        .addFields("node--article", [
          "title",
          "path",
          "field_media_image",
          "status",
          "created",
          "field_paragraphs",
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
    revalidate: 10, // Activates ISR with 10 seconds period.
  };
}
