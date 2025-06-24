import type { MenuItem, Category } from '../types/menu';

export const menuItems: MenuItem[] = [
  {
    id: '1',
    name: 'Pancake',
    amharicName: 'ፓንኬክ',
    description: 'Sweet pancake topped with honey and chocolate syrup',
    price: 200,
    category: 'breakfast',
    image: 'https://i.ytimg.com/vi/l3hUCPpFn-k/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAdRpjH3tJ580j6VcgJbBqfRf31SQ',
    isAvailable: true
  },
  {

    id: '2',
    name: 'Normal Ful',
    amharicName: 'ኖርማል ፉል',
    description: 'Fava beans mashed and seasoned with garlic, onions, tomatoes, green chili, avocado and served with bread',
    price: 200,
    category: 'breakfast',
    image: 'https://thishealthytable.com/wp-content/uploads/2023/01/ful-medames-recipe.jpg',
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
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA7pjqPTrstex0t2us1q-zslyl4MYKHkJXtE3CO2r0i6t5i4D7Dc_42kRzfl7tG6ZPvtE&usqp=CAU',
    isAvailable: true
  },
  {
    id: '5',
    name: 'Vegetable Sandwich',
    amharicName: 'አትክልት ሳንድች',
    description: 'Fresh tomatoes, crisp cucumbers, shredded lettuce, red onions, and creamy avocado, layered between slices of toasted multigrain bread',
    price: 280,
    category: 'sandwich',
    image: 'https://c.files.bbci.co.uk/94C2/production/_104128083_gettyimages-957729100.jpg',
    isAvailable: true
  },
  {
    id: '6',
    name: 'Normal Chechebsa',
    amharicName: 'ኖርማል ጨጨቡሳ',
    description: 'Pan-toasted flatbread (kita) mixed with spiced butter and a touch of spicy Habesha chili pepper powder for a spicy flavor served with honey.',
    price: 200,
    category: 'breakfast',
    image: 'https://i.ytimg.com/vi/ukg_SqgpioQ/maxresdefault.jpg',
    isAvailable: true
  },
  {
    id: '7',
    name: 'Special Chechebsa',
    amharicName: 'ስፔሻል ጨጨቡሳ',
    description: 'Pan-toasted flatbread (kita) mixed with spiced butter and a touch of Habesha chili pepper powder for a spicy taste served with honey, egg, yogurt.',
    price: 250,
    category: 'breakfast',
    image: 'https://i.ytimg.com/vi/0FPKsL5NXUo/maxresdefault.jpg',
    isAvailable: true
  },
  {
    id: '8',
    name: 'Fetira',
    amharicName: 'ጢፈራ',
    description: 'Pan-fried layered flatbread served plain with a touch of honey.',
    price: 200,
    category: 'breakfast',
    image: 'https://img.cdn4dd.com/p/fit=cover,width=1200,height=1200,format=auto,quality=90/media/photosV2/8c45e943-c26d-4a63-a20b-7a3b90ffe93a-retina-large.jpg',
    isAvailable: true
  },
  {
    id: '9',
    name: 'Special Fetira',
    amharicName: 'ስፔሻል ፈጢራ',
    description: 'Pan-fried layered flatbread served plain with egg and a touch of honey.',
    price: 250,
    category: 'breakfast',
    image: 'https://brownie.qr.digitalconstruct.io/wp-content/uploads/2023/05/special-fetira.jpg',
    isAvailable: true
  },
  {
    id: '10',
    name: 'Breakfast Combo',
    amharicName: 'የቁርስ ኮምቦ',
    description: 'Scrambled egg, avocado, hot dog/chicken, toasted potato, rice, salad, bread, ketchup, mayonnaise.',
    price: 500,
    category: 'breakfast',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVywhv7RrldtEyejDrarteLMxCHh6JxgfFpg&s',
    isAvailable: true
  },
  {
    id: '11',
    name: 'Egg Sandwich',
    amharicName: 'አንቁላል ሳንዱች',
    description: 'Fluffy scrambled or sliced boiled eggs layered with crisp lettuce, juicy tomatoes, and a touch of creamy mayo or mustard, served on toasted bread.',
    price: 320,
    category: 'sandwich',
    image: 'https://i.ytimg.com/vi/Mncc0-L5cfY/maxresdefault.jpg',
    isAvailable: true
  },
  {
    id: '12',
    name: 'Special Egg Sandwich',
    amharicName: 'ስፔሻል አንቁላል ሳንዱች',
    description: 'Creamy scrambled eggs folded with herbs and melted cheese, topped with sliced avocado, caramelized onions, tomatoes and a touch of mayo. Served on toasted bread.',
    price: 350,
    category: 'sandwich',
    image: 'https://www.simplyrecipes.com/thmb/5KEzbHplXxqFntM-jqrI0QdExR4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Easy-Egg-Salad-Sandwich-LEAD-22-8ecbb89abda34a84b649ff4c44bab525.JPG',
    isAvailable: true
  },
  {
    id: '13',
    name: 'Meat Lovers Sandwich',
    amharicName: 'ስጋ ሳንዱች',
    description: 'Grilled beef layered with caramelized onions, melted cheese, and crisp lettuce on a toasted baguette. Finished with mustard sauce.',
    price: 360,
    category: 'sandwich',
    image: 'https://i.ytimg.com/vi/oTBUAshELi0/maxresdefault.jpg',
    isAvailable: true
  },
  {
    id: '14',
    name: 'Chicken Sandwich',
    amharicName: 'ዶሮ ሳንዱች',
    description: 'Grilled chicken breast, seasoned with herbs and spices, served on toasted bread with crisp lettuce, ripe tomatoes, and red onions. Finished with mayo.',
    price: 380,
    category: 'sandwich',
    image: 'https://images.ctfassets.net/uexfe9h31g3m/2754DDIghqFOk7hIgodpyl/389cb9bad927e20a75d24fa31c363127/J13645_Quorn_Fakeaway_Sandwich_v1_4-3_Wide_copy.jpg?w=768&h=512&fm=webp&fit=thumb&q=90',
    isAvailable: true
  },
  {
    id: '15',
    name: 'Club Sandwich',
    amharicName: 'ክለብ ሳንዱች',
    description: 'Triple-decker delight stacked with layers of savory ham and cheese, crispy bacon, and a perfectly cooked egg. Complemented by fresh lettuce, tomatoes, and creamy mayo, all tucked between toasted bread slices.',
    price: 400,
    category: 'sandwich',
    image: 'https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/club_sandwich_16496_16x9.jpg',
    isAvailable: true
  },
  {
    id: '16',
    name: 'Tuna Sandwich',
    amharicName: 'ቱና ሳንዱች',
    description: 'Flaked tuna, mayo, and herbs, layered with crisp lettuce, juicy tomatoes, and sliced cucumbers on toasted bread.',
    price: 360,
    category: 'sandwich',
    image: 'https://www.allrecipes.com/thmb/E7ehTpHsFO_cPCz3dFR6v3bbcgE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/272787-avocado-tuna-salad-DDMFS-4x3-9b7495ca719048498243c1c82d075a27.jpg',
    isAvailable: true
  },
  {
    id: '17',
    name: 'Sabeh Special Sandwich',
    amharicName: 'ስፔሻል ሳንዱች',
    description: 'Steak grilled to perfection, topped with sautéed onions, bell peppers, and melted provolone or cheddar cheese. Served on a toasted baguette.',
    price: 450,
    category: 'sandwich',
    image: 'https://www.southernliving.com/thmb/UW4kKKL-_M3WgP7pkL6Pb6lwcgM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Ham_Sandwich_011-1-49227336bc074513aaf8fdbde440eafe.jpg',
    isAvailable: true
  },
  {
    id: '18',
    name: 'Tibes',
    amharicName: 'ጥብስ',
    description: 'Soft Beef, onion, tomato, pepper, enjera',
    price: 400,
    category: 'traditional',
    image: 'https://i.ytimg.com/vi/q-Vc_oERqeo/maxresdefault.jpg',
    isAvailable: true
  },
  {
    id: '19',
    name: 'Special Tibes',
    amharicName: 'ስፔሻል ጥብስ',
    description: 'Tibes, salad, scramble egg, enjera',
    price: 500,
    category: 'traditional',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMozuDxd_7DHj1DT2pLunCXr5dTFVQHSrgZg&s',
    isAvailable: true
  },
  {
    id: '20',
    name: 'Kitefo',
    amharicName: 'ክትፎ',
    description: 'Beef, ayeb, gomen tibes, kocho, አንጀራ',
    price: 1200,
    category: 'traditional',
    image: 'https://img.sewasew.com/definitions/fad1f8155e3f436aa75a4d6fbe94fb1a_512_296',
    isAvailable: true
  },
  {
    id: '21',
    name: 'Dulet',
    amharicName: 'ዱለት',
    description: 'Minced beef, onion, pepper, enjera',
    price: 250,
    category: 'traditional',
    image: 'https://i.ytimg.com/vi/tNkdUWotGMU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLC5GvTX72VTGg8Y0XYf60AzIjSxvg',
    isAvailable: true
  },
  {
    id: '22',
    name: 'Special Dulet',
    amharicName: 'ስፔሻል ዱለት',
    description: 'Minced beef, Habesha cheese, scramble egg, onion, pepper, enjera',
    price: 350,
    category: 'traditional',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfi6-uoF3nCGq0REAODDzfuY5RGzgYZ_aSqA&s',
    isAvailable: true
  },
  {
    id: '23',
    name: 'Msr be Sga',
    amharicName: 'ምስር በ ስጋ',
    description: 'Lentil, beef, tomato sauce, boiled egg, ayeb, enjera',
    price: 300,
    category: 'traditional',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJbUqUV4s7ISrhpzHScZ2-lysTZIdRUaANpA&s',
    isAvailable: true
  },
  {
    id: '24',
    name: 'Bozena',
    amharicName: 'ቦዘና',
    description: 'Beef stew',
    price: 300,
    category: 'traditional',
    image: 'https://media-cdn.tripadvisor.com/media/photo-s/1b/5e/94/b2/siga-wot-beef-tender.jpg',
    isAvailable: true
  },
  {
    id: '25',
    name: 'Kuanta',
    amharicName: 'ቃንጣ',
    description: 'Tomato sauce, kuanta, boiled egg, ayeb, enjera',
    price: 300,
    category: 'traditional',
    image: 'https://i.ytimg.com/vi/lDz7o1FMpAE/maxresdefault.jpg',
    isAvailable: true
  },
  {
    id: '26',
    name: 'Traditional Combo',
    amharicName: 'ኮምቦ',
    description: 'Key wet, alcha mnchet, tibes, dulet, lebleb, ayeb, boiled egg, gomen besga, enjera',
    price: 400,
    category: 'traditional',
    image: 'https://babisbistro.com/wp-content/uploads/2023/08/Fasting-Traditional-Combo.jpg',
    isAvailable: true
  },
  {
    id: '27',
    name: 'Sabeh Special Combo',
    amharicName: 'ሳቤህ ስፔሻል ኮምቦ',
    description: 'A generous platter featuring your choice of fish dishes with rice, salad, awaze sauce, and injera.',
    price: 700,
    category: 'traditional',
    image: 'https://eu2.contabostorage.com/9fb5e9b9c9dd4928933e6c1b6d324508%3Afirma/2023/09/StockAmba.com-Ethiopian-Fasting-Combo-5338.jpg',
    isAvailable: true
  },
  {
    id: '28',
    name: 'Normal Enjera Frfr',
    amharicName: 'ፍርፍር',
    description: 'Torn injera mixed with spiced sauce',
    price: 200,
    category: 'frfr',
    image: 'https://i.ytimg.com/vi/9zSJX3xZWT4/maxresdefault.jpg',
    isAvailable: true
  },
  {
    id: '29',
    name: 'Kuanta Frfr',
    amharicName: 'ቋንጣ ፍርፍር',
    description: 'Dried beef mixed with torn injera and spiced sauce',
    price: 280,
    category: 'frfr',
    image: 'https://i.ytimg.com/vi/bjI1vS3Nt38/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDZKd5-Aa2fMusnMtDH1i8AvdMWyg',
    isAvailable: true
  },
  {
    id: '30',
    name: 'Beef Frfr',
    amharicName: 'ስጋ ፍርፍር',
    description: 'Beef mixed with torn injera and spiced sauce',
    price: 280,
    category: 'frfr',
    image: 'https://i.ytimg.com/vi/2knrkrbs1HY/sddefault.jpg',
    isAvailable: true
  },
  {
    id: '31',
    name: 'Drkosh Frfr',
    amharicName: 'ድርቆሽ ፍርፍር',
    description: 'Dried injera mixed with spiced sauce',
    price: 220,
    category: 'frfr',
    image: 'https://i.ytimg.com/vi/56at2uTk584/maxresdefault.jpg',
    isAvailable: true
  },
  {
    id: '32',
    name: 'Tuna Frfr',
    amharicName: 'ቱና ፍርፍር',
    description: 'Tuna mixed with torn injera and spiced sauce',
    price: 280,
    category: 'frfr',
    image: 'https://i.ytimg.com/vi/vB4dIhoEnLs/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCWcBHWvGmq9-dn9NsqELWEneFY2Q',
    isAvailable: true
  },
  {
    id: '33',
    name: 'Fasting Combo (Frfr)',
    amharicName: 'የፆም ኮምቦ',
    description: 'A combo of fasting frfr items',
    price: 380,
    category: 'frfr',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSATyyE_6eT0qBd3rML1uE-S_JBXDdSv_McbA&s',
    isAvailable: true
  },
  {
    id: '34',
    name: 'Special Frfr Combo',
    amharicName: 'ስፔሻል ኮምቦ',
    description: 'A special combo of frfr items',
    price: 450,
    category: 'frfr',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGK_N8ECtVsIq1RGu1VT2Q3Lmq6tOROyxbgQ&s',
    isAvailable: true
  },
  {
    id: '35',
    name: 'Shro / Tegabino',
    amharicName: 'ሽሮ/ ተጋብኖ',
    description: 'Chickpea stew',
    price: 200,
    category: 'traditional_lunch',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUMbYHlCGKqJaa0hixKNIidm1NaIBbkXPGQQ&s',
    isAvailable: true
  },
  {
    id: '36',
    name: 'Special Shro',
    amharicName: 'ስፔሻል ሽሮ',
    description: 'Shiro sauce, beef, boiled egg, enjera',
    price: 250,
    category: 'traditional_lunch',
    image: 'https://i.ytimg.com/vi/H0eapAPu9CE/maxresdefault.jpg',
    isAvailable: true
  },
  {
    id: '37',
    name: 'Lentel Stew',
    amharicName: 'ምስር',
    description: 'Lentil stew',
    price: 200,
    category: 'traditional_lunch',
    image: 'https://i.ytimg.com/vi/0GDVdsIuqD0/maxresdefault.jpg',
    isAvailable: true
  },
  {
    id: '38',
    name: 'Gomen Tibs',
    amharicName: 'ጎመን',
    description: 'Collard greens tibs',
    price: 180,
    category: 'traditional_lunch',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYreuVoK8Lo7Q_7CKI7ogg1_i3AMZh82cuDA&s',
    isAvailable: true
  },
  {
    id: '39',
    name: 'Half Half',
    amharicName: 'ሃፍ ሃፍ',
    description: 'Half of two traditional dishes',
    price: 250,
    category: 'traditional_lunch',
    image: 'data:image/jpeg;base64,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',
    isAvailable: true
  },
  {
    id: '40',
    name: 'Vegetables Wrap',
    amharicName: 'አትክልት ራፕ',
    description: 'A colorful mix of crisp lettuce, julienned carrots, cucumbers, bell peppers, wrapped in a soft tortilla and drizzled with veg mayo.',
    price: 300,
    category: 'wrap',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzDHd_U2ziKCQw_-QtxHcxoVjLCqE1UHLN6g&s',
    isAvailable: true
  },
  {
    id: '41',
    name: 'Falafel Wrap',
    amharicName: 'ፈላፍል ራፕ',
    description: 'Falafel wrapped in warm pita with crunchy lettuce, juicy tomatoes, cucumber, red onions. Finished with creamy tahini sauce.',
    price: 320,
    category: 'wrap',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMeEZjGUXQd-TTH2oZ-EujJM6igKBCKuWUWA&s',
    isAvailable: true
  },
  {
    id: '42',
    name: 'Chicken Wrap',
    amharicName: 'ዶሮ ራፕ',
    description: 'Grilled chicken breast wrapped in a soft tortilla with fresh lettuce, ripe tomatoes, crunchy cucumbers, finished with mayo or yogurt sauce.',
    price: 400,
    category: 'wrap',
    image: 'https://thecookingfoodie.com/wp-content/uploads/2024/08/240864_d1-jpg-500x500.jpg',
    isAvailable: true
  },
  {
    id: '43',
    name: 'Tuna Wrap',
    amharicName: 'ቱና ራፕ',
    description: 'Flaky tuna mixed with light mayo, herbs, and lemon, wrapped in a soft tortilla with crunchy lettuce, cucumbers, cherry tomatoes, red onions, finished with spicy sauce.',
    price: 380,
    category: 'wrap',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThubkhq3XFsSJf8nyqzrALBTv3EhoWjC8kYA&s',
    isAvailable: true
  },
  {
    id: '44',
    name: 'Crisp Chicken Wrap',
    description: 'Golden-fried chicken strips with crunchy coating, wrapped in a soft tortilla alongside crisp lettuce, juicy tomatoes, tangy pickles, finished with spicy mayo.',
    price: 500,
    category: 'wrap',
    image: 'https://cdn.shopify.com/s/files/1/1785/5627/files/appeal_of_crispy_chicken_wrap_1000x.jpg?v=1720144667',
    isAvailable: true
  },
  {
    id: '45',
    name: 'Sabeh Special Wrap',
    amharicName: 'ስፔሻል ራፕ',
    description: 'Strips of grilled beef wrapped in a warm tortilla with crisp lettuce, tomatoes, sautéed onions, bell peppers, finished with spicy mayo.',
    price: 450,
    category: 'wrap',
    image: 'https://countrycafe.ie/cdn/shop/files/home-01.webp?v=1699916530',
    isAvailable: true
  },
  {
    id: '46',
    name: 'Fish Cotelet',
    amharicName: 'ከተሌት',
    description: 'Fried patty of flaked fish, served with salad and rice. Comes with a side of spicy awaze sauce and injera or bread.',
    price: 400,
    category: 'fish',
    image: 'https://i.ytimg.com/vi/KtJt2qcoM8s/maxresdefault.jpg',
    isAvailable: true
  },
  {
    id: '47',
    name: 'Fish Gulash',
    amharicName: 'ጉሏሽ',
    description: 'Flaked fish slow-cooked in a stew of tomatoes, onions, garlic, and berbere spice. Served with injera or bread.',
    price: 400,
    category: 'fish',
    image: 'https://i.ytimg.com/vi/Lr9Ysam1UuI/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCmRbIylG6Tpal7YbIAjvEyOmyFSA',
    isAvailable: true
  },
  {
    id: '48',
    name: 'Grilled Fish',
    amharicName: 'ግሪል አሳ',
    description: 'Filleted fish grilled to perfection over an open flame. Crispy outside, tender and flaky inside. Served with injera and spicy awaze dipping sauce.',
    price: 500,
    category: 'fish',
    image: 'https://i.ytimg.com/vi/1LtXG6CQmZc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCbMu7GyfwSnB6RykccN6eacF_b8w',
    isAvailable: true
  },
  {
    id: '49',
    name: 'Fish Lebleb',
    amharicName: 'አሳ ለብለብ',
    description: 'Grilled fish simmered in a warm, mildly spiced sauce of onions, garlic, tomatoes, green peppers, and a touch of berbere or mitmita. Served with injera or bread.',
    price: 350,
    category: 'fish',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRF7Ijcg_yF8Q_bPOQZiSCJCs52A2dmNml7w&s',
    isAvailable: true
  },
  {
    id: '50',
    name: 'Sabeh Special Fish Combo',
    amharicName: 'ሳቤህ ስፔሻል ኮምቦ',
    description: 'A generous platter featuring your choice of fish dishes with rice, salad, awaze sauce, and injera.',
    price: 700,
    category: 'fish',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRybjC2yjdB7HCesDN-qUWxnzYhytj_qxvvuQ&s',
    isAvailable: true
  },
  {
    id: '51',
    name: 'Scramble Egg',
    amharicName: 'አንቁላል ፍርፍር',
    description: 'Scrambled eggs, infused with aromatic berbere spices, sautéed onions, tomatoes, and green chilies. Served with pieces of torn injera or bread.',
    price: 250,
    category: 'egg',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRybjC2yjdB7HCesDN-qUWxnzYhytj_qxvvuQ&s',
    isAvailable: true
  },
  {
    id: '52',
    name: 'Omelette',
    amharicName: 'ኦምሌት',
    description: 'Fluffy eggs cooked and filled with fresh vegetables, cheese, and herbs. Served with toast.',
    price: 300,
    category: 'egg',
    image: 'https://joyfoodsunshine.com/wp-content/uploads/2022/07/best-omelette-recipe-1.jpg',
    isAvailable: true
  },
  {
    id: '53',
    name: 'Egg with Avocado',
    amharicName: 'አንቁላል በ አበካዶ',
    description: 'Fried eggs served with creamy sliced avocado on toasted bread. Topped with a sprinkle of chili flakes.',
    price: 280,
    category: 'egg',
    image: 'https://www.allrecipes.com/thmb/8NccFzsaq0_OZPDKmf7Yee-aG78=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AvocadoToastwithEggFranceC4x3-bb87e3bbf1944657b7db35f1383fabdb.jpg',
    isAvailable: true
  },
  {
    id: '54',
    name: 'Egg with Tomato Sauce',
    amharicName: 'አንቁላል ስልስ',
    description: 'Fluffy scrambled eggs gently cooked with sautéed onions, fresh tomatoes, and green chili peppers. Served with warm injera or fresh bread.',
    price: 280,
    category: 'egg',
    image: 'https://feastinthyme.com/wp-content/uploads/2020/01/20200107_easy-baked-eggs-panel-2f-sq.jpg',
    isAvailable: true
  },
  {
    id: '55',
    name: 'Egg with Meat',
    amharicName: 'አንቁላል በ ስጋ',
    description: 'A hearty blend of scrambled eggs and tender, spiced beef, cooked with sautéed onions, ripe tomatoes, and green chili peppers. Served with injera or bread.',
    price: 300,
    category: 'egg',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS41tH21DZnqUwrDxVpuaGOmPafkRSt2eIA6g&s',
    isAvailable: true
  },
  {
    id: '56',
    name: 'Egg Toast',
    amharicName: 'ቶስት',
    description: 'Golden toasted bread topped with perfectly cooked scrambled eggs.',
    price: 250,
    category: 'egg',
    image: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2023/09/egg-toast-recipe.jpg',
    isAvailable: true
  },
  {
    id: '57',
    name: 'Shakshuka',
    amharicName: 'ሻክሹካ',
    description: 'Eggs gently poached in a robust, spiced tomato and bell pepper sauce. Served hot in the pan with warm bread for dipping.',
    price: 350,
    category: 'egg',
    image: 'https://ebtshopper.com/wp-content/uploads/2023/02/shakshuka-538-primary.jpg',
    isAvailable: true
  },
  {
    id: '58',
    name: 'Margherita Pizza (M)',
    price: 450,
    category: 'pizza',
    image: 'https://cookingitalians.com/wp-content/uploads/2024/11/Margherita-Pizza.jpg',
    description: 'Tomato sauce, mozzarella cheese, fragrant basil leaves',
    isAvailable: true
  },
  {
    id: '59',
    name: 'Margherita Pizza (L)',
    price: 550,
    category: 'pizza',
    image: 'https://cookingitalians.com/wp-content/uploads/2024/11/Margherita-Pizza.jpg',
    description: 'Tomato sauce, mozzarella cheese, fragrant basil leaves',
    isAvailable: true
  },
  {
    id: '60',
    name: 'Meat Lovers Pizza (M)',
    price: 450,
    category: 'pizza',
    image: 'https://www.perfectitaliano.com.au/content/dam/perfectitaliano-aus/recipe/0_desktop/Desktop-BBQ-Meat-Lovers-21.jpg',
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
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzPKBTODfDSx_sO208fzYs1w5R2HPFAzzOrw&s',
    description: 'Flaky tuna, sliced onions, juicy tomatoes, and melty mozzarella cheese',
    isAvailable: true
  },
  {
    id: '63',
    name: 'Ala Tuna Pizza (L)',
    price: 500,
    category: 'pizza',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzPKBTODfDSx_sO208fzYs1w5R2HPFAzzOrw&s',
    description: 'Flaky tuna, sliced onions, juicy tomatoes, and melty mozzarella cheese',
    isAvailable: true
  },
  {
    id: '64',
    name: 'Veg Pizza (M)',
    price: 380,
    category: 'pizza',
    image: 'https://www.vegrecipesofindia.com/wp-content/uploads/2020/11/pizza-recipe-2-500x500.jpg',
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
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8iAOZL2jApMGaIX04s7_Ojb9KFDaNuhoPKQ&s',
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
    image: 'https://www.iheartnaptime.net/wp-content/uploads/2023/04/Pepperoni-Pizza-Recipe-I-Heart-Naptime-500x500.jpg',
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
    image: 'https://www.allrecipes.com/thmb/q8JObkHyrsfhHz5sQ0aZ9PtIkd8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/244766-perfect-every-time-pizza-or-calzone-dough-ddmfs-3X4-0575-25f1e03c60634becbaa392fd0c992dbd.jpg',
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
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfzEeGFt3ijf4LE0Jsp3ZuSwVXtgsy7g-WKA&s',
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
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwGIKu-X7z5mIZITgpqCQoKTlv4c-mtz2iqw&s',
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
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW1rwzJrFKiD17BaCtHD8er9YQCkSc8dNDUA&s',
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
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXC8fMTa32c61dJ4Ds8aZZHI3DXLEFKIgXhQ&s',
    description: 'Flakes of tuna, tomatoes, onions',
    isAvailable: true
  },
  {
    id: '80',
    name: 'Sabeh Special Tuna',
    price: 600,
    category: 'pizza',
    image: 'https://www.onegirlonekitchen.com/wp-content/uploads/2023/01/best-tuna-sandwich-no-mayo-featured-1.jpg',
    description: 'Special tuna pizza with unique ingredients',
    isAvailable: true
  },
  {
    id: '81',
    name: 'Full Arrosto Chicken',
    price: 1400,
    category: 'chicken',
    image: 'https://image.jimcdn.com/app/cms/image/transf/dimension=4000x3000:format=jpg/path/s552b8759839fb1e8/image/i2d71bd249aa67ca1/version/1633844406/italian-roast-chicken-pollo-arrosto-breast-or-thigh-symbol-of-marriage-promise.jpg',
    description: 'A whole chicken perfectly roasted to golden-brown perfection, served with a side of roasted vegetables, rice, and pita.',
    isAvailable: true
  },
  {
    id: '82',
    name: 'Half Arrosto Chicken',
    price: 700,
    category: 'chicken',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwz_0KEz__tSIVeJqr_UAadZfYSlzGCo7D7g&s',
    description: 'A half chicken perfectly roasted to golden-brown perfection, served with a side of roasted vegetables, rice, and pita.',
    isAvailable: true
  },
  {
    id: '83',
    name: 'Chicken Wing',
    price: 550,
    category: 'chicken',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk-5Zcd6B5P1QrHWX_4KD-wl9wCAu6-pKZWw&s',
    description: 'Chicken wings fried to crispy perfection. Bursting with bold, spicy, and smoky flavors, served with a side of cooling yogurt dip or injera bread.',
    isAvailable: true
  },
  {
    id: '84',
    name: 'Chicken Crisp with Rice and Chips',
    price: 600,
    category: 'chicken',
    image: 'https://popmenucloud.com/cdn-cgi/image/width%3D600%2Cheight%3D600%2Cfit%3Dscale-down%2Cformat%3Dauto%2Cquality%3D60/srtcfqdz/8a505036-43ed-41f0-b89d-c6c1f68aabbd.jpg',
    description: 'Crispy chicken seasoned to perfection and fried until irresistibly crunchy, served with a side of rice and fries. Served with hot sauces.',
    isAvailable: true
  },
  {
    id: '85',
    name: 'Beef Burger',
    price: 400,
    category: 'burger',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvprxcM2KkmglxdY7kk7IqnO_LMhA-DGsa_w&s',
    description: 'Grilled beef perfection, topped with fresh lettuce, ripe tomatoes, onions, and cheese.',
    isAvailable: true
  },
  {
    id: '86',
    name: 'Cheese Burger',
    price: 430,
    category: 'burger',
    image: 'https://www.jmob.ie/wp-content/uploads/2025/01/314a_Bundys-PlainOpt02Extra-cheese_crop.jpg',
    description: 'Grilled beef, topped with melted cheese, crisp lettuce, fresh tomatoes, and onions, served with house sauce.',
    isAvailable: true
  },
  {
    id: '87',
    name: 'Chicken Burger',
    price: 480,
    category: 'burger',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa72xwP3fyWh_ve4SZYhAyeEfUX3ZUL0ITqw&s',
    description: 'Crispy-fried chicken breast served on a toasted bun with fresh lettuce, tomatoes, onions, and house sauce.',
    isAvailable: true
  },
  {
    id: '88',
    name: 'Ham Burger',
    price: 480,
    category: 'burger',
    image: 'https://assets.epicurious.com/photos/57c5c6d9cf9e9ad43de2d96e/16:9/w_1280,c_limit/the-ultimate-hamburger.jpg?mbid=social_retweet',
    description: 'Beef patty grilled, served on a toasted bun with crisp lettuce, fresh tomatoes, onions, and house sauce.',
    isAvailable: true
  },
  {
    id: '89',
    name: 'Double Burger',
    price: 500,
    category: 'burger',
    image: 'https://www.kitchensanctuary.com/wp-content/uploads/2021/05/Double-Cheeseburger-tall1-44.webp',
    description: 'Two juicy grilled beef patties stacked high with melted cheese, fresh lettuce, tomatoes, onions, and our signature sauce.',
    isAvailable: true
  },
  {
    id: '90',
    name: 'Fasting Burger',
    price: 350,
    category: 'burger',
    image: 'https://media.istockphoto.com/id/495204032/photo/fresh-tasty-burger.jpg?s=612x612&w=0&k=20&c=k6X_gSHlo-WdKsqTnfBjoEbjdhrlz6RNhUs23ivpIxk=',
    description: 'Chickpea-lentil patty seasoned with berbere, layered with crisp lettuce, tomatoes, onions, and creamy avocado spread, all tucked inside a toasted vegan bun.',
    isAvailable: true
  },
  {
    id: '91',
    name: 'Sabeh Special Burger',
    price: 559,
    category: 'burger',
    image: 'https://thumbs.dreamstime.com/z/burger-splashes-toppings-seasonings-including-rocket-lettuce-special-sauce-sesame-bun-sea-salt-crystals-cheddar-335622308.jpg',
    description: 'Special burger with unique ingredients',
    isAvailable: true
  },
  {
    id: '92',
    name: 'Normal Salad',
    amharicName: 'ሳላድ',
    price: 250,
    category: 'salad',
    image: 'https://thesaladtable.com.au/cdn/shop/articles/Salad.jpeg?v=1497738553',
    description: 'Lettuce, cucumber, tomato, onion, and carrot topped with Sabeh sauce. Served with pita bread.',
    isAvailable: true
  },
  {
    id: '93',
    name: 'Chicken Salad',
    amharicName: 'ዶሮ ሳላድ',
    price: 350,
    category: 'salad',
    image: 'https://www.closetcooking.com/wp-content/uploads/2012/06/BBQ-Chicken-Salad-1200-7689.jpg',
    description: 'Grilled chicken, lettuce, cucumber, tomato, onion, and carrot, topped with Sabeh sauce. Served with pita bread.',
    isAvailable: true
  },
  {
    id: '94',
    name: 'Tuna Salad',
    amharicName: 'ቱና ሳላድ',
    price: 300,
    category: 'salad',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiVFgT9zi-XQkVEYvFL-Bld2FkGhqwbiq9HQ&s',
    description: 'Flaked tuna, crisp lettuce, cucumber, tomato, onion, carrot, and sweet corn, topped with Sabeh sauce. Served with pita bread.',
    isAvailable: true
  },
  {
    id: '95',
    name: 'Beef Salad',
    amharicName: 'ስጋ ሳላድ',
    price: 300,
    category: 'salad',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPKhdZ7kFaCjnAYeMNaPyNGSsN6jrGO4IewQ&s',
    description: 'Grilled beef, lettuce, cucumber, tomato, onion, carrot, and pepper, topped with Sabeh sauce. Served with pita bread.',
    isAvailable: true
  },
  {
    id: '96',
    name: 'Sabeh Special Mixed Salad',
    amharicName: 'ስፖሻል ሳላድ',
    price: 450,
    category: 'salad',
    image: 'https://images.immediate.co.uk/production/volatile/sites/30/2022/04/Crunchy-topped-salad-95567c8.jpg',
    description: 'A vibrant combination of chicken, beef, tuna, and vegetables, all topped with Sabeh\'s signature sauce. Served with pita bread.',
    isAvailable: true
  },
  {
    id: '97',
    name: 'Cheese (Extra)',
    price: 50,
    category: 'extra',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTJXvb0c2wFPoK2DPGwsFx8J_N5fRi1pC56g&s',
    description: 'Extra cheese',
    isAvailable: true
  },
  {
    id: '98',
    name: 'Injera (Extra)',
    price: 20,
    category: 'extra',
    image: 'https://assets.epicurious.com/photos/620a779402c6f8194056c30c/4:3/w_4868,h_3651,c_limit/Injera_RECIPE_021022_27807.jpg',
    description: 'Extra injera',
    isAvailable: true
  },
  {
    id: '99',
    name: 'Mayo (Extra)',
    price: 50,
    category: 'extra',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmem3CMGuDJ48sC3cLFfOBysblisWe-RdHyw&s',
    description: 'Extra mayonnaise',
    isAvailable: true
  },
  {
    id: '100',
    name: 'Bread (Extra)',
    price: 20,
    category: 'extra',
    image: 'https://www.chopstickchronicles.com/wp-content/uploads/2020/05/Shokupan-Update-2020-42-500x500.jpg',
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