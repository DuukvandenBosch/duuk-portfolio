interface Props {
  position: string;
  company: string;
  period: string;
  responsibilities: string[];
  current?: boolean;
}

export default function ExperienceItem({ position, company, period, responsibilities, current }: Props) {
  return (
    <div className="p-4 border rounded-md mb-3">
      <div className="flex justify-between items-start">
        <div>
          <h4 className="font-semibold text-gray-900">{position}</h4>
          <p className="text-sm text-gray-600">{company}</p>
        </div>
        <span className="text-sm text-gray-500">
          {period}{current ? " • current" : ""}
        </span>
      </div>
      <ul className="mt-2 list-disc list-inside text-gray-700 text-sm">
        {responsibilities.map((r, i) => (
          <li key={i}>{r}</li>
        ))}
      </ul>
    </div>
  );
}
