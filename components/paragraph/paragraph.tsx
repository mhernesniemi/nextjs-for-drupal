import Infobox from "components/infobox/infobox";
import Liftup from "components/liftup/liftup";

interface ParagraphProps {
  fields: any;
}

export default function Paragraph({ fields }: ParagraphProps) {
  return (
    <>
      {fields.type === "paragraph--infobox" && (
        <Infobox title={fields.field_title} body={fields.field_body} />
      )}
      {fields.type === "paragraph--liftup" && (
        <Liftup content={fields.field_content} />
      )}
    </>
  );
}
