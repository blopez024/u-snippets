'use client'
import type { Snippet } from "@prisma/client"

interface SnippetEditFormProps {
    snippet: Snippet
}

export default function SnippetEditForm({ snippet }: SnippetEditFormProps) {

    return (
        <>
            Client component has snippet with title {snippet.title}
        </>
    )

}