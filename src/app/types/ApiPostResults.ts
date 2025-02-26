import {Post} from './Post'

type ApiPostResults = {
  post: Post[]
  moreResults: string
  endCursor: string
}

export {ApiPostResults}