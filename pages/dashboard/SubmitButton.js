import { Square, ArrowUp } from "lucide-react";

export function SubmitButton({ isGenerating }) {
  return (
    <button
      type="submit"
      className={`p-2 rounded-r-md transition-colors ${
        isGenerating
          ? "bg-gray-500 cursor-not-allowed"
          : "bg-primary hover:bg-opacity-90"
      }`}
      disabled={isGenerating}
    >
      {isGenerating ? (
        <Square className="w-6 h-6 text-white animate-spin" />
      ) : (
        <ArrowUp className="w-6 h-6 text-white" />
      )}
    </button>
  );
}
