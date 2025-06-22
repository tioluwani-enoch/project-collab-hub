interface ButtonInterface {
  text: string;
  styling?: string; // Made optional in case you want a default style
}

export default function Button({ text, styling }: ButtonInterface) {
  const defaultStyle =
    "text-white bg-purple-800 hover:bg-purple-900 text-gold-400 font-semibold py-2 px-4 rounded-md border border-gold-400 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gold-400 transition duration-300";

  return <button className={`${defaultStyle} ${styling || ""}`}>{text}</button>;
}
