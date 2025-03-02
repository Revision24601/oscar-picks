export interface Profile {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string;
}

export interface Category {
  id: string;
  name: string;
  description?: string;
  nominees: Nominee[];
}

export interface Nominee {
  id: string;
  name: string;
  movie: string;
  imageUrl?: string;
  posterUrl?: string;
  description?: string;
  role?: string;
}

export interface Pick {
  id: string;
  profileId: string;
  categoryId: string;
  nomineeId: string;
  timestamp: string;
}

export interface OscarPicks {
  [categoryId: string]: Pick;
} 