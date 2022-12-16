import React from "react";
import Head from "next/head";
import { GetStaticPropsResult } from "next";
import { DrupalNode } from "next-drupal";
import { DrupalJsonApiParams } from "drupal-jsonapi-params";
import { drupal } from "lib/drupal";
import { Layout } from "templates/layout";
import { NodeArticleTeaser } from "templates/node--article--teaser";
import Button from "components/button/button";
import Heading from "components/heading/heading";
import Select from "components/forms/select";
import Dropdown from "components/dropdown/dropdown";
import QuickSearch from "components/quick-search/quick-search";

interface IndexPageProps {
  nodes: DrupalNode[];
}

export default function IndexPage({ nodes }: IndexPageProps) {
  return (
    <Layout>
      <Head>
        <title>Next.js for Drupal</title>
        <meta
          name="description"
          content="A Next.js site powered by a Drupal backend."
        />
      </Head>

      <QuickSearch />

      <Heading level="h2" size="large">
        Select
      </Heading>

      <Select label="Label" />

      <Heading level="h2" size="large">
        Dropdown
      </Heading>

      <Dropdown />

      <Heading level="h2" size="large">
        Form button
      </Heading>

      <div className="flex gap-2 mb-5">
        <Button type="primary">Primary</Button>
        <Button type="secondary">Secondary</Button>
        <Button type="outlined">Outlined</Button>
        <Button type="disabled">Disabled</Button>
      </div>

      <Heading level="h2" size="large">
        Button as link
      </Heading>

      <div className="flex gap-2 mb-5">
        <Button url="#" type="primary">
          Primary
        </Button>
        <Button url="#" type="secondary">
          Secondary
        </Button>
        <Button url="#" type="outlined">
          Outlined
        </Button>
        <Button url="#" type="disabled">
          Disabled
        </Button>
      </div>

      <Heading level="h2" size="large">
        Heading
      </Heading>

      <Heading level="h1" size="xl">
        Heading
      </Heading>
      <Heading level="h2" size="large">
        Heading
      </Heading>
      <Heading level="h3" size="medium">
        Heading
      </Heading>
      <Heading level="h4" size="small">
        Heading
      </Heading>

      <div>
        <Heading level="h1" size="xl">
          Latest Articles
        </Heading>
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
