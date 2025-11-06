interface Props {
  skill: string;
}

export default function SkillBadge({ skill }: Props) {
  return (
    <span className="px-3 py-1 text-sm rounded-full border text-gray-700">
      {skill}
    </span>
  );
}
