export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'breakfast' | 'sandwich' | 'traditional' | 'frfr' | 'traditional_lunch' | 'wrap' | 'fish' | 'egg' | 'pizza' | 'chicken' | 'burger' | 'salad' | 'extra';
  image: string;
  isAvailable: boolean;
  amharicName?: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
} 