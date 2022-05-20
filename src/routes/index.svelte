<script lang="ts" context="module">
  import type { Book } from "@prisma/client"
  import type { Load } from "@sveltejs/kit"

  export const load: Load = async ({ fetch }) => {
    const response = await fetch("/books")

    if (response.ok) {
      const books = await response.json()
      return {
        props: { books },
      }
    }
  }
</script>

<script lang="ts">
  export let books: Book[]
</script>

<div class="p-4">
  <div class="grid grid-cols-2 gap-2">
    {#each books as book}
      <div class="p-3 border rounded border-neutral-300 flex flex-col">
        <span class="font-bold">{book.title}</span>
        <span class="text-neutral-500">{book.author}</span>
      </div>
    {/each}
  </div>
</div>
