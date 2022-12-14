interface InfoboxProps {
  title: string;
  body: string;
}

export default function Infobox({ title, body }: InfoboxProps) {
  return (
    <div className="p-5 m-3 bg-orange-200">
      <div className="mb-5">Infobox</div>
      <div className="font-bold ">{title}</div>
      <div>{body}</div>
    </div>
  );
}
