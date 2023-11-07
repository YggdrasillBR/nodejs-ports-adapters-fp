import { Tag } from './tag';
import { Profile } from './profile';

export type Article = {
  slug: string
  title: string
  description: string
  body: string,
  tagList: Tag[]
  createdAt: string
  updatedAt: string
  favorited: boolean
  favoritesCount: number,
  author: Profile
  }

  export type Articles = {
    articles = Articles[]
    articlesCount: number
    }
