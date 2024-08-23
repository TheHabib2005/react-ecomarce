interface Product {
  _id: string;
  title: string;
  description: string;
  features: string[];
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  reviews: {
    _id: string;
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
    reviewerEmail: string;
    reviewerPicture: string;
  }[];
  returnPolicy: string;
  images: {
    _id: string;
    big: string;
    small: string;
  }[];
  thumbnail: string;
}

export default Product;
