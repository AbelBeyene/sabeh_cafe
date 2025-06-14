import type { MenuItem, Category } from '../types/menu';

export const menuItems: MenuItem[] = [
  {
    id: '1',
    name: 'Pancake',
    amharicName: 'ፓንኬክ',
    description: 'Sweet pancake topped with honey and chocolate syrup',
    price: 200,
    category: 'breakfast',
    image: 'https://images.unsplash.com/photo-1528207776546-365bb10ee283',
    isAvailable: true
  },
  {
    id: '2',
    name: 'Normal Ful',
    amharicName: 'ኖርማል ፉል',
    description: 'Fava beans mashed and seasoned with garlic, onions, tomatoes, green chili, avocado and served with bread',
    price: 200,
    category: 'breakfast',
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554',
    isAvailable: true
  },
  {
    id: '3',
    name: 'Special Ful',
    amharicName: 'ስፔሻል ፉል',
    description: 'Fava beans with special seasoning and toppings',
    price: 250,
    category: 'breakfast',
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554',
    isAvailable: true
  },
  {
    id: '4',
    name: 'Chqna Tibes',
    amharicName: 'ጭቅና ጥቡስ',
    description: 'Tender beef, onion, tomato, pepper, awaze, enjera',
    price: 500,
    category: 'traditional',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947',
    isAvailable: true
  },
  {
    id: '5',
    name: 'Vegetable Sandwich',
    amharicName: 'አትክልት ሳንድች',
    description: 'Fresh tomatoes, crisp cucumbers, shredded lettuce, red onions, and creamy avocado, layered between slices of toasted multigrain bread',
    price: 280,
    category: 'sandwich',
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af',
    isAvailable: true
  },
  {
    id: '6',
    name: 'Normal Chechebsa',
    amharicName: 'ኖርማል ጨጨቡሳ',
    description: 'Pan-toasted flatbread (kita) mixed with spiced butter and a touch of spicy Habesha chili pepper powder for a spicy flavor served with honey.',
    price: 200,
    category: 'breakfast',
    image: 'https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5',
    isAvailable: true
  },
  {
    id: '7',
    name: 'Special Chechebsa',
    amharicName: 'ስፔሻል ጨጨቡሳ',
    description: 'Pan-toasted flatbread (kita) mixed with spiced butter and a touch of Habesha chili pepper powder for a spicy taste served with honey, egg, yogurt.',
    price: 250,
    category: 'breakfast',
    image: 'https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5',
    isAvailable: true
  },
  {
    id: '8',
    name: 'Fetira',
    amharicName: 'ፈጢራ',
    description: 'Pan-fried layered flatbread served plain with a touch of honey.',
    price: 200,
    category: 'breakfast',
    image: 'https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5',
    isAvailable: true
  },
  {
    id: '9',
    name: 'Special Fetira',
    amharicName: 'ስፔሻል ፈጢራ',
    description: 'Pan-fried layered flatbread served plain with egg and a touch of honey.',
    price: 250,
    category: 'breakfast',
    image: 'https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5',
    isAvailable: true
  },
  {
    id: '10',
    name: 'Breakfast Combo',
    amharicName: 'የቁርስ ኮምቦ',
    description: 'Scrambled egg, avocado, hot dog/chicken, toasted potato, rice, salad, bread, ketchup, mayonnaise.',
    price: 500,
    category: 'breakfast',
    image: 'https://images.unsplash.com/photo-1504754527488-ad09c316719b',
    isAvailable: true
  },
  {
    id: '11',
    name: 'Egg Sandwich',
    amharicName: 'አንቁላል ሳንዱች',
    description: 'Fluffy scrambled or sliced boiled eggs layered with crisp lettuce, juicy tomatoes, and a touch of creamy mayo or mustard, served on toasted bread.',
    price: 320,
    category: 'sandwich',
    image: 'https://images.unsplash.com/photo-1571216664539-c5c671758652',
    isAvailable: true
  },
  {
    id: '12',
    name: 'Special Egg Sandwich',
    amharicName: 'ስፔሻል አንቁላል ሳንዱች',
    description: 'Creamy scrambled eggs folded with herbs and melted cheese, topped with sliced avocado, caramelized onions, tomatoes and a touch of mayo. Served on toasted bread.',
    price: 350,
    category: 'sandwich',
    image: 'https://images.unsplash.com/photo-1571216664539-c5c671758652',
    isAvailable: true
  },
  {
    id: '13',
    name: 'Meat Lovers Sandwich',
    amharicName: 'ስጋ ሳንዱች',
    description: 'Grilled beef layered with caramelized onions, melted cheese, and crisp lettuce on a toasted baguette. Finished with mustard sauce.',
    price: 360,
    category: 'sandwich',
    image: 'https://images.unsplash.com/photo-1552526848-185489000a6a',
    isAvailable: true
  },
  {
    id: '14',
    name: 'Chicken Sandwich',
    amharicName: 'ዶሮ ሳንዱች',
    description: 'Grilled chicken breast, seasoned with herbs and spices, served on toasted bread with crisp lettuce, ripe tomatoes, and red onions. Finished with mayo.',
    price: 380,
    category: 'sandwich',
    image: 'https://images.unsplash.com/photo-1562911248-1bf97171d3d6',
    isAvailable: true
  },
  {
    id: '15',
    name: 'Club Sandwich',
    amharicName: 'ክለብ ሳንዱች',
    description: 'Triple-decker delight stacked with layers of savory ham and cheese, crispy bacon, and a perfectly cooked egg. Complemented by fresh lettuce, tomatoes, and creamy mayo, all tucked between toasted bread slices.',
    price: 400,
    category: 'sandwich',
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af',
    isAvailable: true
  },
  {
    id: '16',
    name: 'Tuna Sandwich',
    amharicName: 'ቱና ሳንዱች',
    description: 'Flaked tuna, mayo, and herbs, layered with crisp lettuce, juicy tomatoes, and sliced cucumbers on toasted bread.',
    price: 360,
    category: 'sandwich',
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af',
    isAvailable: true
  },
  {
    id: '17',
    name: 'Sabeh Special Sandwich',
    amharicName: 'ስፔሻል ሳንዱች',
    description: 'Steak grilled to perfection, topped with sautéed onions, bell peppers, and melted provolone or cheddar cheese. Served on a toasted baguette.',
    price: 450,
    category: 'sandwich',
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af',
    isAvailable: true
  },
  {
    id: '18',
    name: 'Tibes',
    amharicName: 'ጥብስ',
    description: 'Soft Beef, onion, tomato, pepper, enjera',
    price: 400,
    category: 'traditional',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947',
    isAvailable: true
  },
  {
    id: '19',
    name: 'Special Tibes',
    amharicName: 'ስፔሻል ጥብስ',
    description: 'Tibes, salad, scramble egg, enjera',
    price: 500,
    category: 'traditional',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947',
    isAvailable: true
  },
  {
    id: '20',
    name: 'Kitefo',
    amharicName: 'ክትፎ',
    description: 'Beef, ayeb, gomen tibes, kocho, አንጀራ',
    price: 1200,
    category: 'traditional',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947',
    isAvailable: true
  },
  {
    id: '21',
    name: 'Dulet',
    amharicName: 'ዱለት',
    description: 'Minced beef, onion, pepper, enjera',
    price: 250,
    category: 'traditional',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947',
    isAvailable: true
  },
  {
    id: '22',
    name: 'Special Dulet',
    amharicName: 'ስፔሻል ዱለት',
    description: 'Minced beef, Habesha cheese, scramble egg, onion, pepper, enjera',
    price: 350,
    category: 'traditional',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947',
    isAvailable: true
  },
  {
    id: '23',
    name: 'Msr be Sga',
    amharicName: 'ምስር በ ስጋ',
    description: 'Lentil, beef, tomato sauce, boiled egg, ayeb, enjera',
    price: 300,
    category: 'traditional',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947',
    isAvailable: true
  },
  {
    id: '24',
    name: 'Bozena',
    amharicName: 'ቦዘና',
    description: 'Beef stew',
    price: 300,
    category: 'traditional',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947',
    isAvailable: true
  },
  {
    id: '25',
    name: 'Kuanta',
    amharicName: 'ቃንጣ',
    description: 'Tomato sauce, kuanta, boiled egg, ayeb, enjera',
    price: 300,
    category: 'traditional',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947',
    isAvailable: true
  },
  {
    id: '26',
    name: 'Traditional Combo',
    amharicName: 'ኮምቦ',
    description: 'Key wet, alcha mnchet, tibes, dulet, lebleb, ayeb, boiled egg, gomen besga, enjera',
    price: 400,
    category: 'traditional',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947',
    isAvailable: true
  },
  {
    id: '27',
    name: 'Sabeh Special Combo',
    amharicName: 'ሳቤህ ስፔሻል ኮምቦ',
    description: 'A generous platter featuring your choice of fish dishes with rice, salad, awaze sauce, and injera.',
    price: 700,
    category: 'traditional',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947',
    isAvailable: true
  },
  {
    id: '28',
    name: 'Normal Enjera Frfr',
    amharicName: 'ፍርፍር',
    description: 'Torn injera mixed with spiced sauce',
    price: 200,
    category: 'frfr',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a',
    isAvailable: true
  },
  {
    id: '29',
    name: 'Kuanta Frfr',
    amharicName: 'ቋንጣ ፍርፍር',
    description: 'Dried beef mixed with torn injera and spiced sauce',
    price: 280,
    category: 'frfr',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a',
    isAvailable: true
  },
  {
    id: '30',
    name: 'Beef Frfr',
    amharicName: 'ስጋ ፍርፍር',
    description: 'Beef mixed with torn injera and spiced sauce',
    price: 280,
    category: 'frfr',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a',
    isAvailable: true
  },
  {
    id: '31',
    name: 'Drkosh Frfr',
    amharicName: 'ድርቆሽ ፍርፍር',
    description: 'Dried injera mixed with spiced sauce',
    price: 220,
    category: 'frfr',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a',
    isAvailable: true
  },
  {
    id: '32',
    name: 'Tuna Frfr',
    amharicName: 'ቱና ፍርፍር',
    description: 'Tuna mixed with torn injera and spiced sauce',
    price: 280,
    category: 'frfr',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a',
    isAvailable: true
  },
  {
    id: '33',
    name: 'Fasting Combo (Frfr)',
    amharicName: 'የፆም ኮምቦ',
    description: 'A combo of fasting frfr items',
    price: 380,
    category: 'frfr',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a',
    isAvailable: true
  },
  {
    id: '34',
    name: 'Special Frfr Combo',
    amharicName: 'ስፔሻል ኮምቦ',
    description: 'A special combo of frfr items',
    price: 450,
    category: 'frfr',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a',
    isAvailable: true
  },
  {
    id: '35',
    name: 'Shro / Tegabino',
    amharicName: 'ሽሮ/ ተጋብኖ',
    description: 'Chickpea stew',
    price: 200,
    category: 'traditional_lunch',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947',
    isAvailable: true
  },
  {
    id: '36',
    name: 'Special Shro',
    amharicName: 'ስፔሻል ሽሮ',
    description: 'Shiro sauce, beef, boiled egg, enjera',
    price: 250,
    category: 'traditional_lunch',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947',
    isAvailable: true
  },
  {
    id: '37',
    name: 'Lentel Stew',
    amharicName: 'ምስር',
    description: 'Lentil stew',
    price: 200,
    category: 'traditional_lunch',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947',
    isAvailable: true
  },
  {
    id: '38',
    name: 'Gomen Tibs',
    amharicName: 'ጎመን',
    description: 'Collard greens tibs',
    price: 180,
    category: 'traditional_lunch',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947',
    isAvailable: true
  },
  {
    id: '39',
    name: 'Half Half',
    amharicName: 'ሃፍ ሃፍ',
    description: 'Half of two traditional dishes',
    price: 250,
    category: 'traditional_lunch',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947',
    isAvailable: true
  },
  {
    id: '40',
    name: 'Vegetables Wrap',
    amharicName: 'አትክልት ራፕ',
    description: 'A colorful mix of crisp lettuce, julienned carrots, cucumbers, bell peppers, wrapped in a soft tortilla and drizzled with veg mayo.',
    price: 300,
    category: 'wrap',
    image: 'https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5',
    isAvailable: true
  },
  {
    id: '41',
    name: 'Falafel Wrap',
    amharicName: 'ፈላፍል ራፕ',
    description: 'Falafel wrapped in warm pita with crunchy lettuce, juicy tomatoes, cucumber, red onions. Finished with creamy tahini sauce.',
    price: 320,
    category: 'wrap',
    image: 'https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5',
    isAvailable: true
  },
  {
    id: '42',
    name: 'Chicken Wrap',
    amharicName: 'ዶሮ ራፕ',
    description: 'Grilled chicken breast wrapped in a soft tortilla with fresh lettuce, ripe tomatoes, crunchy cucumbers, finished with mayo or yogurt sauce.',
    price: 400,
    category: 'wrap',
    image: 'https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5',
    isAvailable: true
  },
  {
    id: '43',
    name: 'Tuna Wrap',
    amharicName: 'ቱና ራፕ',
    description: 'Flaky tuna mixed with light mayo, herbs, and lemon, wrapped in a soft tortilla with crunchy lettuce, cucumbers, cherry tomatoes, red onions, finished with spicy sauce.',
    price: 380,
    category: 'wrap',
    image: 'https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5',
    isAvailable: true
  },
  {
    id: '44',
    name: 'Crisp Chicken Wrap',
    description: 'Golden-fried chicken strips with crunchy coating, wrapped in a soft tortilla alongside crisp lettuce, juicy tomatoes, tangy pickles, finished with spicy mayo.',
    price: 500,
    category: 'wrap',
    image: 'https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5',
    isAvailable: true
  },
  {
    id: '45',
    name: 'Sabeh Special Wrap',
    amharicName: 'ስፔሻል ራፕ',
    description: 'Strips of grilled beef wrapped in a warm tortilla with crisp lettuce, tomatoes, sautéed onions, bell peppers, finished with spicy mayo.',
    price: 450,
    category: 'wrap',
    image: 'https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5',
    isAvailable: true
  },
  {
    id: '46',
    name: 'Fish Cotelet',
    amharicName: 'ከተሌት',
    description: 'Fried patty of flaked fish, served with salad and rice. Comes with a side of spicy awaze sauce and injera or bread.',
    price: 400,
    category: 'fish',
    image: 'https://images.unsplash.com/photo-1579730623631-f5b1d0e5',
    isAvailable: true
  },
  {
    id: '47',
    name: 'Fish Gulash',
    amharicName: 'ጉሏሽ',
    description: 'Flaked fish slow-cooked in a stew of tomatoes, onions, garlic, and berbere spice. Served with injera or bread.',
    price: 400,
    category: 'fish',
    image: 'https://images.unsplash.com/photo-1579730623631-f5b1d0e5',
    isAvailable: true
  },
  {
    id: '48',
    name: 'Grilled Fish',
    amharicName: 'ግሪል አሳ',
    description: 'Filleted fish grilled to perfection over an open flame. Crispy outside, tender and flaky inside. Served with injera and spicy awaze dipping sauce.',
    price: 500,
    category: 'fish',
    image: 'https://images.unsplash.com/photo-1579730623631-f5b1d0e5',
    isAvailable: true
  },
  {
    id: '49',
    name: 'Fish Lebleb',
    amharicName: 'አሳ ለብለብ',
    description: 'Grilled fish simmered in a warm, mildly spiced sauce of onions, garlic, tomatoes, green peppers, and a touch of berbere or mitmita. Served with injera or bread.',
    price: 350,
    category: 'fish',
    image: 'https://images.unsplash.com/photo-1579730623631-f5b1d0e5',
    isAvailable: true
  },
  {
    id: '50',
    name: 'Sabeh Special Fish Combo',
    amharicName: 'ሳቤህ ስፔሻል ኮምቦ',
    description: 'A generous platter featuring your choice of fish dishes with rice, salad, awaze sauce, and injera.',
    price: 700,
    category: 'fish',
    image: 'https://images.unsplash.com/photo-1579730623631-f5b1d0e5',
    isAvailable: true
  },
  {
    id: '51',
    name: 'Scramble Egg',
    amharicName: 'አንቁላል ፍርፍር',
    description: 'Scrambled eggs, infused with aromatic berbere spices, sautéed onions, tomatoes, and green chilies. Served with pieces of torn injera or bread.',
    price: 250,
    category: 'egg',
    image: 'https://images.unsplash.com/photo-1588655610260-e448375e2f7b',
    isAvailable: true
  },
  {
    id: '52',
    name: 'Omelette',
    amharicName: 'ኦምሌት',
    description: 'Fluffy eggs cooked and filled with fresh vegetables, cheese, and herbs. Served with toast.',
    price: 300,
    category: 'egg',
    image: 'https://images.unsplash.com/photo-1588655610260-e448375e2f7b',
    isAvailable: true
  },
  {
    id: '53',
    name: 'Egg with Avocado',
    amharicName: 'አንቁላል በ አበካዶ',
    description: 'Fried eggs served with creamy sliced avocado on toasted bread. Topped with a sprinkle of chili flakes.',
    price: 280,
    category: 'egg',
    image: 'https://images.unsplash.com/photo-1588655610260-e448375e2f7b',
    isAvailable: true
  },
  {
    id: '54',
    name: 'Egg with Tomato Sauce',
    amharicName: 'አንቁላል ስልስ',
    description: 'Fluffy scrambled eggs gently cooked with sautéed onions, fresh tomatoes, and green chili peppers. Served with warm injera or fresh bread.',
    price: 280,
    category: 'egg',
    image: 'https://images.unsplash.com/photo-1588655610260-e448375e2f7b',
    isAvailable: true
  },
  {
    id: '55',
    name: 'Egg with Meat',
    amharicName: 'አንቁላል በ ስጋ',
    description: 'A hearty blend of scrambled eggs and tender, spiced beef, cooked with sautéed onions, ripe tomatoes, and green chili peppers. Served with injera or bread.',
    price: 300,
    category: 'egg',
    image: 'https://images.unsplash.com/photo-1588655610260-e448375e2f7b',
    isAvailable: true
  },
  {
    id: '56',
    name: 'Egg Toast',
    amharicName: 'ቶስት',
    description: 'Golden toasted bread topped with perfectly cooked scrambled eggs.',
    price: 250,
    category: 'egg',
    image: 'https://images.unsplash.com/photo-1588655610260-e448375e2f7b',
    isAvailable: true
  },
  {
    id: '57',
    name: 'Shakshuka',
    amharicName: 'ሻክሹካ',
    description: 'Eggs gently poached in a robust, spiced tomato and bell pepper sauce. Served hot in the pan with warm bread for dipping.',
    price: 350,
    category: 'egg',
    image: 'https://images.unsplash.com/photo-1588655610260-e448375e2f7b',
    isAvailable: true
  },
  {
    id: '58',
    name: 'Margherita Pizza (M)',
    price: 450,
    category: 'pizza',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0c64c',
    description: 'Tomato sauce, mozzarella cheese, fragrant basil leaves',
    isAvailable: true
  },
  {
    id: '59',
    name: 'Margherita Pizza (L)',
    price: 550,
    category: 'pizza',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0c64c',
    description: 'Tomato sauce, mozzarella cheese, fragrant basil leaves',
    isAvailable: true
  },
  {
    id: '60',
    name: 'Meat Lovers Pizza (M)',
    price: 450,
    category: 'pizza',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0c64c',
    description: 'Savory beef, spicy sausage, crispy bacon, and pepperoni, all layered over melted mozzarella and tomato sauce',
    isAvailable: true
  },
  {
    id: '61',
    name: 'Meat Lovers Pizza (L)',
    price: 550,
    category: 'pizza',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0c64c',
    description: 'Savory beef, spicy sausage, crispy bacon, and pepperoni, all layered over melted mozzarella and tomato sauce',
    isAvailable: true
  },
  {
    id: '62',
    name: 'Ala Tuna Pizza (M)',
    price: 400,
    category: 'pizza',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0c64c',
    description: 'Flaky tuna, sliced onions, juicy tomatoes, and melty mozzarella cheese',
    isAvailable: true
  },
  {
    id: '63',
    name: 'Ala Tuna Pizza (L)',
    price: 500,
    category: 'pizza',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0c64c',
    description: 'Flaky tuna, sliced onions, juicy tomatoes, and melty mozzarella cheese',
    isAvailable: true
  },
  {
    id: '64',
    name: 'Veg Pizza (M)',
    price: 380,
    category: 'pizza',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0c64c',
    description: 'Mix of fresh vegetables including bell peppers, onions, tomatoes, mushrooms, and black olives, tomato sauce and mozzarella',
    isAvailable: true
  },
  {
    id: '65',
    name: 'Veg Pizza (L)',
    price: 480,
    category: 'pizza',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0c64c',
    description: 'Mix of fresh vegetables including bell peppers, onions, tomatoes, mushrooms, and black olives, tomato sauce and mozzarella',
    isAvailable: true
  },
  {
    id: '66',
    name: 'Chicken Pizza (M)',
    price: 500,
    category: 'pizza',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0c64c',
    description: 'Grilled chicken, fresh tomatoes, and red onions, mozzarella and tomato sauce, crust',
    isAvailable: true
  },
  {
    id: '67',
    name: 'Chicken Pizza (L)',
    price: 600,
    category: 'pizza',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0c64c',
    description: 'Grilled chicken, fresh tomatoes, and red onions, mozzarella and tomato sauce, crust',
    isAvailable: true
  },
  {
    id: '68',
    name: 'Pepperoni Pizza (M)',
    price: 450,
    category: 'pizza',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0c64c',
    description: 'Slices of spicy pepperoni, melted mozzarella, and rich tomato sauce on a crisp crust',
    isAvailable: true
  },
  {
    id: '69',
    name: 'Pepperoni Pizza (L)',
    price: 550,
    category: 'pizza',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0c64c',
    description: 'Slices of spicy pepperoni, melted mozzarella, and rich tomato sauce on a crisp crust',
    isAvailable: true
  },
  {
    id: '70',
    name: 'Calzone Pizza (M)',
    price: 500,
    category: 'pizza',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0c64c',
    description: 'A folded Italian classic stuffed with mozzarella, ricotta cheese, and your choice of savory fillings like pepperoni, sausage, or vegetables',
    isAvailable: true
  },
  {
    id: '71',
    name: 'Calzone Pizza (L)',
    price: 600,
    category: 'pizza',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0c64c',
    description: 'A folded Italian classic stuffed with mozzarella, ricotta cheese, and your choice of savory fillings like pepperoni, sausage, or vegetables',
    isAvailable: true
  },
  {
    id: '72',
    name: 'Turkish Pizza (Lahmacun) (M)',
    price: 450,
    category: 'pizza',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0c64c',
    description: 'A thin, crispy flatbread topped with a flavorful mix of minced lamb or beef, tomatoes, onions, and aromatic spices',
    isAvailable: true
  },
  {
    id: '73',
    name: 'Turkish Pizza (Lahmacun) (L)',
    price: 550,
    category: 'pizza',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0c64c',
    description: 'A thin, crispy flatbread topped with a flavorful mix of minced lamb or beef, tomatoes, onions, and aromatic spices',
    isAvailable: true
  },
  {
    id: '74',
    name: 'Pesto Pizza (M)',
    price: 450,
    category: 'pizza',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0c64c',
    description: 'Basil pesto sauce, mozzarella, sun-dried tomatoes, and a sprinkle of parmesan cheese',
    isAvailable: true
  },
  {
    id: '75',
    name: 'Pesto Pizza (L)',
    price: 550,
    category: 'pizza',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0c64c',
    description: 'Basil pesto sauce, mozzarella, sun-dried tomatoes, and a sprinkle of parmesan cheese',
    isAvailable: true
  },
  {
    id: '76',
    name: 'Fasting Pizza (M)',
    price: 360,
    category: 'pizza',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0c64c',
    description: 'Tomato sauce, a colorful mix of vegetables like bell peppers, onions, mushrooms',
    isAvailable: true
  },
  {
    id: '77',
    name: 'Fasting Pizza (L)',
    price: 460,
    category: 'pizza',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0c64c',
    description: 'Tomato sauce, a colorful mix of vegetables like bell peppers, onions, mushrooms',
    isAvailable: true
  },
  {
    id: '78',
    name: 'Tuna Pizza (M)',
    price: 380,
    category: 'pizza',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0c64c',
    description: 'Flakes of tuna, tomatoes, onions',
    isAvailable: true
  },
  {
    id: '79',
    name: 'Tuna Pizza (L)',
    price: 480,
    category: 'pizza',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0c64c',
    description: 'Flakes of tuna, tomatoes, onions',
    isAvailable: true
  },
  {
    id: '80',
    name: 'Sabeh Special Tuna',
    price: 600,
    category: 'pizza',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0c64c',
    description: 'Special tuna pizza with unique ingredients',
    isAvailable: true
  },
  {
    id: '81',
    name: 'Full Arrosto Chicken',
    price: 1400,
    category: 'chicken',
    image: 'https://images.unsplash.com/photo-1546069901-d05510b37060',
    description: 'A whole chicken perfectly roasted to golden-brown perfection, served with a side of roasted vegetables, rice, and pita.',
    isAvailable: true
  },
  {
    id: '82',
    name: 'Half Arrosto Chicken',
    price: 700,
    category: 'chicken',
    image: 'https://images.unsplash.com/photo-1546069901-d05510b37060',
    description: 'A half chicken perfectly roasted to golden-brown perfection, served with a side of roasted vegetables, rice, and pita.',
    isAvailable: true
  },
  {
    id: '83',
    name: 'Chicken Wing',
    price: 550,
    category: 'chicken',
    image: 'https://images.unsplash.com/photo-1546069901-d05510b37060',
    description: 'Chicken wings fried to crispy perfection. Bursting with bold, spicy, and smoky flavors, served with a side of cooling yogurt dip or injera bread.',
    isAvailable: true
  },
  {
    id: '84',
    name: 'Chicken Crisp with Rice and Chips',
    price: 600,
    category: 'chicken',
    image: 'https://images.unsplash.com/photo-1546069901-d05510b37060',
    description: 'Crispy chicken seasoned to perfection and fried until irresistibly crunchy, served with a side of rice and fries. Served with hot sauces.',
    isAvailable: true
  },
  {
    id: '85',
    name: 'Beef Burger',
    price: 400,
    category: 'burger',
    image: 'https://images.unsplash.com/photo-1568901346379-d586d345b1de',
    description: 'Grilled beef perfection, topped with fresh lettuce, ripe tomatoes, onions, and cheese.',
    isAvailable: true
  },
  {
    id: '86',
    name: 'Cheese Burger',
    price: 430,
    category: 'burger',
    image: 'https://images.unsplash.com/photo-1568901346379-d586d345b1de',
    description: 'Grilled beef, topped with melted cheese, crisp lettuce, fresh tomatoes, and onions, served with house sauce.',
    isAvailable: true
  },
  {
    id: '87',
    name: 'Chicken Burger',
    price: 480,
    category: 'burger',
    image: 'https://images.unsplash.com/photo-1568901346379-d586d345b1de',
    description: 'Crispy-fried chicken breast served on a toasted bun with fresh lettuce, tomatoes, onions, and house sauce.',
    isAvailable: true
  },
  {
    id: '88',
    name: 'Ham Burger',
    price: 480,
    category: 'burger',
    image: 'https://images.unsplash.com/photo-1568901346379-d586d345b1de',
    description: 'Beef patty grilled, served on a toasted bun with crisp lettuce, fresh tomatoes, onions, and house sauce.',
    isAvailable: true
  },
  {
    id: '89',
    name: 'Double Burger',
    price: 500,
    category: 'burger',
    image: 'https://images.unsplash.com/photo-1568901346379-d586d345b1de',
    description: 'Two juicy grilled beef patties stacked high with melted cheese, fresh lettuce, tomatoes, onions, and our signature sauce.',
    isAvailable: true
  },
  {
    id: '90',
    name: 'Fasting Burger',
    price: 350,
    category: 'burger',
    image: 'https://images.unsplash.com/photo-1568901346379-d586d345b1de',
    description: 'Chickpea-lentil patty seasoned with berbere, layered with crisp lettuce, tomatoes, onions, and creamy avocado spread, all tucked inside a toasted vegan bun.',
    isAvailable: true
  },
  {
    id: '91',
    name: 'Sabeh Special Burger',
    price: 559,
    category: 'burger',
    image: 'https://images.unsplash.com/photo-1568901346379-d586d345b1de',
    description: 'Special burger with unique ingredients',
    isAvailable: true
  },
  {
    id: '92',
    name: 'Normal Salad',
    amharicName: 'ሳላድ',
    price: 250,
    category: 'salad',
    image: 'https://images.unsplash.com/photo-1546069901-d05510b37060',
    description: 'Lettuce, cucumber, tomato, onion, and carrot topped with Sabeh sauce. Served with pita bread.',
    isAvailable: true
  },
  {
    id: '93',
    name: 'Chicken Salad',
    amharicName: 'ዶሮ ሳላድ',
    price: 350,
    category: 'salad',
    image: 'https://images.unsplash.com/photo-1546069901-d05510b37060',
    description: 'Grilled chicken, lettuce, cucumber, tomato, onion, and carrot, topped with Sabeh sauce. Served with pita bread.',
    isAvailable: true
  },
  {
    id: '94',
    name: 'Tuna Salad',
    amharicName: 'ቱና ሳላድ',
    price: 300,
    category: 'salad',
    image: 'https://images.unsplash.com/photo-1546069901-d05510b37060',
    description: 'Flaked tuna, crisp lettuce, cucumber, tomato, onion, carrot, and sweet corn, topped with Sabeh sauce. Served with pita bread.',
    isAvailable: true
  },
  {
    id: '95',
    name: 'Beef Salad',
    amharicName: 'ስጋ ሳላድ',
    price: 300,
    category: 'salad',
    image: 'https://images.unsplash.com/photo-1546069901-d05510b37060',
    description: 'Grilled beef, lettuce, cucumber, tomato, onion, carrot, and pepper, topped with Sabeh sauce. Served with pita bread.',
    isAvailable: true
  },
  {
    id: '96',
    name: 'Sabeh Special Mixed Salad',
    amharicName: 'ስፖሻል ሳላድ',
    price: 450,
    category: 'salad',
    image: 'https://images.unsplash.com/photo-1546069901-d05510b37060',
    description: 'A vibrant combination of chicken, beef, tuna, and vegetables, all topped with Sabeh\'s signature sauce. Served with pita bread.',
    isAvailable: true
  },
  {
    id: '97',
    name: 'Cheese (Extra)',
    price: 50,
    category: 'extra',
    image: 'https://images.unsplash.com/photo-1546069901-d05510b37060',
    description: 'Extra cheese',
    isAvailable: true
  },
  {
    id: '98',
    name: 'Injera (Extra)',
    price: 20,
    category: 'extra',
    image: 'https://images.unsplash.com/photo-1546069901-d05510b37060',
    description: 'Extra injera',
    isAvailable: true
  },
  {
    id: '99',
    name: 'Mayo (Extra)',
    price: 50,
    category: 'extra',
    image: 'https://images.unsplash.com/photo-1546069901-d05510b37060',
    description: 'Extra mayonnaise',
    isAvailable: true
  },
  {
    id: '100',
    name: 'Bread (Extra)',
    price: 20,
    category: 'extra',
    image: 'https://images.unsplash.com/photo-1546069901-d05510b37060',
    description: 'Extra bread',
    isAvailable: true
  }
];

export const categories: Category[] = [
  {
    id: 'breakfast',
    name: 'Breakfast',
    icon: '🍳'
  },
  {
    id: 'sandwich',
    name: 'Sandwiches',
    icon: '🥪'
  },
  {
    id: 'traditional',
    name: 'Traditional',
    icon: '🥘'
  },
  {
    id: 'frfr',
    name: 'Frfr Corner',
    icon: '🍲'
  },
  {
    id: 'traditional_lunch',
    name: 'Traditional Lunch Corner',
    icon: '🍽️'
  },
  {
    id: 'wrap',
    name: 'Wraps',
    icon: '🌯'
  },
  {
    id: 'fish',
    name: 'Fish Corner',
    icon: '🐟'
  },
  {
    id: 'egg',
    name: 'Egg Corner',
    icon: '🥚'
  },
  {
    id: 'pizza',
    name: 'Pizza Corner',
    icon: '🍕'
  },
  {
    id: 'chicken',
    name: 'Chicken Corner',
    icon: '🍗'
  },
  {
    id: 'burger',
    name: 'Burger Corner',
    icon: '🍔'
  },
  {
    id: 'salad',
    name: 'Salad Corner',
    icon: '🥗'
  },
  {
    id: 'extra',
    name: 'Extra',
    icon: '➕'
  }
]; 