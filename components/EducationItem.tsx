interface Props {
  degree: string;
  institution: string;
  location: string;
  period: string;
  description: string;
  current?: boolean;
}

export default function EducationItem({ degree, institution, location, period, description, current }: Props) {
  return (
    <div className="p-4 border rounded-md mb-3">
      <div className="flex justify-between items-start">
        <div>
          <h4 className="font-semibold text-gray-900">{degree}</h4>
          <p className="text-sm text-gray-600">
            {institution} — {location}
          </p>
        </div>
        <span className="text-sm text-gray-500">
          {period}{current ? " • current" : ""}
        </span>
      </div>
      <p className="mt-2 text-gray-700 text-sm">{description}</p>
    </div>
  );
}
