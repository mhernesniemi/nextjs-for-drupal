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
import Notification from "components/notification/notification";
import ContentSection from "components/containers/content-section";
import Accordion from "components/accordion/accordion";
import Tabs from "components/tabs/tabs";
import Modal from "components/modal/modal";
import MobileMenu from "components/mobile-menu/mobile-menu";

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

      <ContentSection>
        <Heading level="h2" size="large">
          Mobile menu
        </Heading>
        <MobileMenu
          items={[
            { title: "Finnish", url: "#" },
            {
              title:
                "English English English English English English English English",
              url: "#",
            },
            { title: "Swedish", url: "#" },
            { title: "Finnish", url: "#" },
            { title: "English", url: "#" },
            {
              title:
                "SwedishSwedishSwedishSwedishSwedishSwedishSwedish Swedish Swedish",
              url: "#",
            },
            { title: "Finnish", url: "#" },
            { title: "English", url: "#" },
            { title: "Swedish", url: "#" },
            { title: "Finnish", url: "#" },
            { title: "English", url: "#" },
            { title: "Swedish", url: "#" },
            { title: "Finnish", url: "#" },
            { title: "English", url: "#" },
            { title: "Swedish", url: "#" },
            { title: "Finnish", url: "#" },
            { title: "English", url: "#" },
            { title: "Swedish", url: "#" },
            { title: "Finnish", url: "#" },
            { title: "English", url: "#" },
            { title: "Swedish", url: "#" },
            { title: "Finnish", url: "#" },
            { title: "English", url: "#" },
            { title: "Swedish", url: "#" },
            { title: "Finnish", url: "#" },
            { title: "English", url: "#" },
            { title: "Swedish", url: "#" },
            { title: "Finnish", url: "#" },
            { title: "English", url: "#" },
            { title: "Swedish", url: "#" },
            { title: "Finnish", url: "#" },
            { title: "English", url: "#" },
            { title: "Swedish", url: "#" },
          ]}
        />
      </ContentSection>

      <ContentSection>
        <Heading level="h2" size="large">
          Modal
        </Heading>
        <Modal title="Title" buttonText="Close">
          Your payment has been successfully submitted. We’ve sent you an email
          with all of the details of your order.
        </Modal>
      </ContentSection>

      <ContentSection>
        <Heading level="h2" size="large">
          Tabs
        </Heading>
        <Tabs
          items={[
            {
              title: "Accordion title number one",
              body: "With consumer awareness articles and documentaries frequently picking up on this topic, it's likely the case that retailers find it harder to get away with the more obvious ploys. We are becoming ever more savvy consumers and there's probably not a great deal that gets past us. But here's a few retail tricks to keep in mind when you are rushing around the weekly supermarket stock-up.",
            },
            {
              title: "Accordion title number two",
              body: "2 With consumer awareness articles and documentaries frequently picking up on this topic, it's likely the case that retailers find it harder to get away with the more obvious ploys. We are becoming ever more savvy consumers and there's probably not a great deal that gets past us. But here's a few retail tricks to keep in mind when you are rushing around the weekly supermarket stock-up.",
            },
            {
              title: "Accordion title number three",
              body: "3 With consumer awareness articles and documentaries frequently picking up on this topic, it's likely the case that retailers find it harder to get away with the more obvious ploys. We are becoming ever more savvy consumers and there's probably not a great deal that gets past us. But here's a few retail tricks to keep in mind when you are rushing around the weekly supermarket stock-up.",
            },
          ]}
        />
      </ContentSection>

      <ContentSection>
        <Heading level="h2" size="large">
          Accordion
        </Heading>
        <Accordion
          items={[
            {
              title: "Accordion title number one",
              body: "With consumer awareness articles and documentaries frequently picking up on this topic, it's likely the case that retailers find it harder to get away with the more obvious ploys. We are becoming ever more savvy consumers and there's probably not a great deal that gets past us. But here's a few retail tricks to keep in mind when you are rushing around the weekly supermarket stock-up.",
            },
            {
              title: "Accordion title number two",
              body: "With consumer awareness articles and documentaries frequently picking up on this topic, it's likely the case that retailers find it harder to get away with the more obvious ploys. We are becoming ever more savvy consumers and there's probably not a great deal that gets past us. But here's a few retail tricks to keep in mind when you are rushing around the weekly supermarket stock-up.",
            },
            {
              title: "Accordion title number three",
              body: "With consumer awareness articles and documentaries frequently picking up on this topic, it's likely the case that retailers find it harder to get away with the more obvious ploys. We are becoming ever more savvy consumers and there's probably not a great deal that gets past us. But here's a few retail tricks to keep in mind when you are rushing around the weekly supermarket stock-up.",
            },
          ]}
        />
      </ContentSection>

      <ContentSection>
        <Heading level="h2" size="large">
          Dropdown menu
        </Heading>
        <Dropdown
          label="Language"
          items={[
            { title: "Finnish", url: "#" },
            { title: "English", url: "#" },
            { title: "Swedish", url: "#" },
          ]}
        />
      </ContentSection>

      <ContentSection>
        <Heading level="h2" size="large">
          Notification
        </Heading>
        <Notification message="Change a few things up and try submitting again." />
        <Notification
          type="success"
          message="Success: Change a few things up and try submitting again."
        />
        <Notification
          type="error"
          message="Error: Change a few things up and try submitting again."
        />
        <Notification
          type="warning"
          message="Warning: Change a few things up and try submitting again."
        />
      </ContentSection>

      <ContentSection>
        <Heading level="h2" size="large">
          Select
        </Heading>
        <Select label="Label" />
      </ContentSection>

      <ContentSection>
        <Heading level="h2" size="large">
          Form button
        </Heading>
        <div className="flex flex-wrap gap-2 mb-5">
          <Button type="primary">Primary</Button>
          <Button type="secondary">Secondary</Button>
          <Button type="outlined">Outlined</Button>
          <Button type="disabled">Disabled</Button>
        </div>
      </ContentSection>

      <ContentSection>
        <Heading level="h2" size="large">
          Button as link
        </Heading>
        <div className="flex flex-wrap gap-2 mb-5">
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
      </ContentSection>

      <ContentSection>
        <Heading level="h2" size="large">
          Button with click event
        </Heading>
        <Button
          type="primary"
          clickEvent={() => {
            console.log("click");
          }}
        >
          Click
        </Button>
      </ContentSection>

      <ContentSection>
        <Heading level="h2" size="large">
          Heading
        </Heading>
        <Heading level="h1" size="xl">
          Heading XL
        </Heading>
        <Heading level="h2" size="large">
          Heading Large
        </Heading>
        <Heading level="h3" size="medium">
          Heading Medium
        </Heading>
        <Heading level="h4" size="small">
          Heading Small
        </Heading>
      </ContentSection>

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
