import Image, { StaticImageData } from "next/image";

interface Props {
  name: string;
  title: string;
  age: number;
  imageUrl: StaticImageData;
}

export default function CVHeader({ name, title, age, imageUrl }: Props) {
  return (
    <div className="flex items-center gap-6 p-8">
      <div className="w-24 h-24 relative rounded-full overflow-hidden bg-gray-100 border">
        <Image src={imageUrl} alt={name} fill style={{ objectFit: "cover" }} />
      </div>
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">{name}</h1>
        <p className="text-gray-600">{title} • Age {age}</p>
      </div>
    </div>
  );
}
