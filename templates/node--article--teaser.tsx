import Image from "next/image";
import Link from "next/link";
import { DrupalNode } from "next-drupal";

import { absoluteUrl, formatDate } from "lib/utils";
import Button from "components/button/button";

interface NodeArticleTeaserProps {
  node: DrupalNode;
}

export function NodeArticleTeaser({ node, ...props }: NodeArticleTeaserProps) {
  return (
    <article {...props}>
      <Link
        href={node.path.alias}
        passHref
        className="text-blue-600 no-underline hover:underline"
      >
        <h2 className="mb-4 text-4xl font-bold">{node.title}</h2>
      </Link>
      <div className="mb-4 text-gray-600">
        {node.uid?.display_name ? (
          <span>
            Posted by{" "}
            <span className="font-semibold">{node.uid?.display_name}</span>
          </span>
        ) : null}
        <span> - {formatDate(node.created)}</span>
      </div>
      {node.field_media_image && (
        <figure className="my-4">
          <Image
            src={absoluteUrl(node.field_media_image.field_media_image.uri.url)}
            width={768}
            height={480}
            alt="Decorative image"
          />
        </figure>
      )}
      <Button type="primary" url={node.path.alias}>
        Read article
      </Button>
    </article>
  );
}
