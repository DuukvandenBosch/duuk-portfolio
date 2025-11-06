interface Props {
  title: string;
  children: React.ReactNode;
}

export default function CVSection({ title, children }: Props) {
  return (
    <section>
      <h3 className="text-xl font-semibold text-gray-800 mb-4">{title}</h3>
      {children}
    </section>
  );
}
