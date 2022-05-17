import prisma from "$lib/prisma"
import type { RequestHandler } from "@sveltejs/kit"

export const get: RequestHandler = async () => {
  const books = await prisma.book.findMany()
  return {
    body: books,
  }
}
