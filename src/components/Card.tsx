import Image from "next/image";

interface CardProps {
  title: string;
  description: string;
  image: string;
  borderColor: string;
}

export default function Card({
  title,
  description,
  image,
  borderColor,
}: CardProps) {
  return (
    <div
      className={`flex flex-col gap-2 p-6 h-60 rounded-lg bg-white border-t-4 shadow-custom ${borderColor}`}
    >
      <h1 className="text-xl font-semibold text-secondary-veryDarkBlue">
        {title}
      </h1>
      <p className="text-sm text-secondary-darkGrayishBlue w-4/5">
        {description}
      </p>
      <div className="flex h-full w-full justify-end items-end">
        <div>
          <Image src={image} alt={title} width={64} height={64} />
        </div>
      </div>
    </div>
  );
}
