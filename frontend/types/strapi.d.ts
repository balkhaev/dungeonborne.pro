import { Public } from "@strapi/types"

export type DocumentId = {
  documentId: string
}

export type Table<T> = T["attributes"] & DocumentId
