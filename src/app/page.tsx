import { db } from "@/db";
import Link from "next/link";

export default async function Home() {

  const snippets = await db.snippet.findMany();
  const renderSnippets = snippets.map((snippet) => {
    return (
      <Link
        key={snippet.id}
        className="flex justify-between items-center p-2 border rounded"
        href={`/snippets/${snippet.id}`}
      >
        <div>
          {snippet.title}
        </div>
        <div>
          View
        </div>
      </Link>
    )
  })

  return (
    <>
      <div className="flex m-2 justify-between items-center">
        <h1 className="text-xl font-bold">
          Snippets
        </h1>
        <Link
          className="border p-2 rounded"
          href='/snippets/new'
        >
          New
        </Link>
      </div>
      <div className="flex flex-col gap-2">
        {renderSnippets}
      </div>
    </>
  );
}
