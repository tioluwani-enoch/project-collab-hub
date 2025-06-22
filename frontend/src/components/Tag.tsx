interface TagProps {
  text: string;
}

export default function Tag({ text }: TagProps) {
  return (
    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium shadow-sm border border-purple-200">
      {text}
    </span>
  );
}
