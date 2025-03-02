import { Category } from '../types';

export const testCategories: Category[] = [
  {
    id: 'test-category',
    name: 'Test Category',
    description: 'Test description',
    nominees: [
      {
        id: 'test1',
        name: 'Test Nominee 1',
        movie: 'Test Movie 1',
        description: 'Test description 1'
      },
      {
        id: 'test2',
        name: 'Test Nominee 2',
        movie: 'Test Movie 2',
        description: 'Test description 2'
      }
    ]
  }
]; 