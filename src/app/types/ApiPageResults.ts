import {Post} from './Post'

type ApiPageResults = {
  posts: Post[]
  moreResults: string
  endCursor: string
}

export {ApiPageResults}