interface LiftupProps {
  content: string;
}

export default function Liftup({ content }: LiftupProps) {
  return (
    <div className="p-5 m-3 bg-violet-200">
      <div className="font-bold">Liftup</div>
      <div>{content}</div>
    </div>
  );
}
