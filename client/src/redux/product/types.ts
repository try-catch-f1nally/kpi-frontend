export type ProductType = 'iphone' | 'ipad' | 'airPods' | 'watch' | 'mac';

export const productTypeMap = {
  ['iphone']: 'iPhones',
  ['ipad']: 'iPads',
  ['airPods']: 'AirPods',
  ['watch']: 'Apple Watches',
  ['mac']: 'Mac'
}

export interface GetProductsQuery {
  productType?: ProductType;
  model?: string;
  memory?: 64 | 128 | 256 | 512 | 1024;
  color?: string;
  sort?: 'rating' | 'price' | '-price' | 'new';
  search?: string;
  page?: number;
  limit?: number;
}

export type GetProductQuery = string;

export interface ProductCardData {
  name: string;
  imgName: string;
  rating: number;
  reviewsAmount: number;
  price: number;
  oldPrice?: number;
  link: string;
}

export interface Review {
  _id: string;
  authorId?: string;
  authorName: string;
  rating: number;
  comment: string;
  date: Date;
}

export interface ProductData {
  _id: string;
  productType: ProductType;
  images: Array<string>;
  name: string;
  price: number;
  oldPrice?: number;
  model: string;
  memory: number;
  color: string;
  availableMemories: Array<number>;
  availableColors: Array<string>;
  article: number;
  rating: number;
  videoLink: string;
  characteristics: Array<[string, string]>;
  saleStartDate: Date;
  reviews: Review[]
}
