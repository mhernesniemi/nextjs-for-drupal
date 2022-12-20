import classNames from "classnames";

interface FieldsetProps {
  children: any;
  legend?: string;
  screenReadersOnly?: boolean;
}

export default function Fieldset({
  legend,
  children,
  screenReadersOnly,
}: FieldsetProps) {
  return (
    <fieldset>
      <legend
        className={classNames("mb-5", "font-bold", {
          "sr-only": screenReadersOnly,
        })}
      >
        {legend}
      </legend>
      <div>{children}</div>
    </fieldset>
  );
}
