import {Post} from './Post'

type ApiResults = {
  posts: Post[]
  moreResults: string
  endCursor: string
}

export {ApiResults}