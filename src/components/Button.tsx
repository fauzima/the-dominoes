export default function Button({ text }: { text: string }) {
  return (
    <div className="hover:bg-accent w-24 rounded-full bg-primary py-1 text-center text-white transition-colors ease-in-out sm:w-32">
      {text}
    </div>
  );
}
