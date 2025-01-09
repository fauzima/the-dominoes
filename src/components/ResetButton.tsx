export default function ResetButton({ text }: { text: string }) {
    return (
      <div className="hover:bg-accent w-24 rounded-full bg-secondary py-2 text-center text-white transition-colors ease-in-out hover:duration-150 sm:w-32">
        {text}
      </div>
    );
  }
  