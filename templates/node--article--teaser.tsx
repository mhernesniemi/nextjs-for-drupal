import Image from "next/image";
import Link from "next/link";
import { DrupalNode } from "next-drupal";

import { absoluteUrl, formatDate } from "lib/utils";
import Button from "components/button/button";

interface NodeArticleTeaserProps {
  node: DrupalNode;
}

export function NodeArticleTeaser({ node, ...props }: NodeArticleTeaserProps) {
  console.log("Drupal node", node);

  return (
    <div {...props}>
      <h2 className="mb-4 text-3xl font-bold">Node id: {node.id}</h2>
    </div>
  );
}
