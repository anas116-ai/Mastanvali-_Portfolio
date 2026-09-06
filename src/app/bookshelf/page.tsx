import { BookshelfScene } from "@/shaders/bookshelf/BookshelfScene";
import "@/shaders/threeui.css";

export default function BookshelfPage() {
  return (
    <main className="w-full h-screen bg-[#050811] overflow-hidden flex flex-col items-center justify-center">
      <div className="shader-frame w-full h-full">
        <BookshelfScene />
      </div>
    </main>
  );
}
