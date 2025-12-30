export type MenuItem = {
  id: string;
  name: string;
  price: number;
  category: string;
  description?: string;
  isVeg: boolean;
  isChefSpecial?: boolean;
  image?: string;
};

export const menuItems: MenuItem[] = [
  // Soups
  { id: "s1", name: "Hot & Sour", price: 169, category: "Soups", description: "Classic Chinese soup with tangy and spicy flavors", isVeg: true, image: "/DSC_5171.JPG" },
  { id: "s2", name: "Lemon Coriander", price: 169, category: "Soups", description: "Refreshing soup with zesty lemon and fresh coriander", isVeg: true, image: "/DSC_5179.JPG" },
  { id: "s3", name: "Cream Of Tomato", price: 189, category: "Soups", description: "Rich and creamy tomato soup with herbs", isVeg: true, image: "/DSC_5205.JPG" },
  { id: "s4", name: "Roasted Almond Broccoli", price: 249, category: "Soups", description: "Creamy broccoli soup with roasted almond garnish", isVeg: true, isChefSpecial: true, image: "/DSC_5299.JPG" },

  // Salads
  { id: "sl1", name: "Tossed Salad", price: 199, category: "Salads", description: "Fresh mixed greens with house dressing", isVeg: true, image: "/DSC_3829.JPG" },
  { id: "sl2", name: "Veg Caesar Salad", price: 249, category: "Salads", description: "Crispy romaine lettuce with Caesar dressing and croutons", isVeg: true, image: "/image 3.jpg" },
  { id: "sl3", name: "Greek Salad", price: 299, category: "Salads", description: "Mediterranean salad with feta cheese and olives", isVeg: true, image: "/image 4.jpg" },
  { id: "sl4", name: "Macaroni Salad", price: 319, category: "Salads", description: "Creamy macaroni with vegetables", isVeg: true, image: "/DSC_5171.JPG" },

  // Appetizers
  { id: "a1", name: "Stuffed Pao Slider", price: 199, category: "Appetizers", description: "Mini Indian bread sliders with spiced filling", isVeg: true, image: "/DSC_5179.JPG" },
  { id: "a2", name: "Salsa Nachos", price: 249, category: "Appetizers", description: "Crispy nachos with fresh salsa", isVeg: true, image: "/DSC_5205.JPG" },
  { id: "a3", name: "Cheese Nachos", price: 279, category: "Appetizers", description: "Loaded nachos with melted cheese", isVeg: true, image: "/DSC_5299.JPG" },
  { id: "a4", name: "Bruschetta", price: 279, category: "Appetizers", description: "Toasted bread with tomato basil topping", isVeg: true, image: "/DSC_3829.JPG" },
  { id: "a5", name: "Veg Delight Tacos", price: 279, category: "Appetizers", description: "Soft tacos filled with seasoned vegetables", isVeg: true, image: "/image 3.jpg" },
  { id: "a6", name: "Vanabella Jungle Chaat", price: 289, category: "Appetizers", description: "Our signature street food fusion creation", isVeg: true, isChefSpecial: true, image: "/image 4.jpg" },
  { id: "a7", name: "Mozzarella Cigars", price: 299, category: "Appetizers", description: "Crispy rolls stuffed with mozzarella cheese", isVeg: true, image: "/DSC_5171.JPG" },

  // Small Bites
  { id: "sb1", name: "Salted Fries", price: 139, category: "Small Bites", description: "Classic golden fries with salt", isVeg: true, image: "/DSC_5179.JPG" },
  { id: "sb2", name: "Peri Peri Fries", price: 169, category: "Small Bites", description: "Spicy fries with peri peri seasoning", isVeg: true, image: "/DSC_5205.JPG" },
  { id: "sb3", name: "Cheese Balls", price: 199, category: "Small Bites", description: "Crispy fried cheese balls", isVeg: true, image: "/DSC_5299.JPG" },
  { id: "sb4", name: "Chef Special Fries", price: 229, category: "Small Bites", description: "Loaded fries with chef's secret toppings", isVeg: true, isChefSpecial: true, image: "/DSC_3829.JPG" },
  { id: "sb5", name: "Cheese Garlic Bread", price: 239, category: "Small Bites", description: "Toasted bread with cheese and garlic butter", isVeg: true, image: "/image 3.jpg" },
  { id: "sb6", name: "Nuggets", price: 249, category: "Small Bites", description: "Crispy golden vegetable nuggets", isVeg: true, image: "/image 4.jpg" },

  // Sandwich/Burger
  { id: "sb7", name: "Mexican Mayo Sandwich", price: 199, category: "Sandwich/Burger", description: "Grilled sandwich with Mexican spices and mayo", isVeg: true, image: "/DSC_5171.JPG" },
  { id: "sb8", name: "Tandoori Vegetable Sandwich", price: 199, category: "Sandwich/Burger", description: "Grilled vegetables with tandoori marinade", isVeg: true, image: "/DSC_5179.JPG" },
  { id: "sb9", name: "Tandoori Paneer Sandwich", price: 219, category: "Sandwich/Burger", description: "Indian cottage cheese with tandoori spices", isVeg: true, image: "/DSC_5205.JPG" },
  { id: "sb10", name: "Chef Special Sandwich", price: 229, category: "Sandwich/Burger", description: "Chef's unique creation with premium ingredients", isVeg: true, isChefSpecial: true, image: "/DSC_5299.JPG" },
  { id: "sb11", name: "Aloo Tikki Burger", price: 189, category: "Sandwich/Burger", description: "Spiced potato patty burger with veggies", isVeg: true, image: "/DSC_3829.JPG" },
  { id: "sb12", name: "Veggie Burger", price: 199, category: "Sandwich/Burger", description: "Classic veggie patty with fresh toppings", isVeg: true, image: "/image 3.jpg" },
  { id: "sb13", name: "Tandoori Paneer Burger", price: 229, category: "Sandwich/Burger", description: "Tandoori paneer patty with mint chutney", isVeg: true, image: "/image 4.jpg" },

  // Pizza
  { id: "p1", name: "Margherita Pizza", price: 265, category: "Pizza", description: "Classic pizza with tomato sauce, mozzarella and basil", isVeg: true, image: "/DSC_5171.JPG" },
  { id: "p2", name: "Cheese Corn Pizza", price: 290, category: "Pizza", description: "Loaded with sweet corn and extra cheese", isVeg: true, image: "/DSC_5179.JPG" },
  { id: "p3", name: "Veg Delight Pizza", price: 299, category: "Pizza", description: "Assorted fresh vegetables on cheese base", isVeg: true, image: "/DSC_5205.JPG" },
  { id: "p4", name: "BBQ Veggies Pizza", price: 319, category: "Pizza", description: "Smoky BBQ vegetables with cheese", isVeg: true, image: "/DSC_5299.JPG" },
  { id: "p5", name: "BBQ Paneer Pizza", price: 339, category: "Pizza", description: "BBQ marinated paneer cubes with peppers", isVeg: true, image: "/DSC_3829.JPG" },
  { id: "p6", name: "Tandoori Paneer Pizza", price: 339, category: "Pizza", description: "Tandoori spiced paneer with onions", isVeg: true, image: "/image 3.jpg" },
  { id: "p7", name: "Exotic Pizza", price: 349, category: "Pizza", description: "Premium toppings with special sauce", isVeg: true, image: "/image 4.jpg" },

  // Pasta
  { id: "pa1", name: "Alfredo Pasta (Penne)", price: 319, category: "Pasta", description: "Creamy white sauce pasta with herbs", isVeg: true, image: "/DSC_5171.JPG" },
  { id: "pa2", name: "Penne Rosa Pasta", price: 319, category: "Pasta", description: "Pink sauce pasta with tomato and cream", isVeg: true, image: "/DSC_5179.JPG" },
  { id: "pa3", name: "Arrabbiata Pasta", price: 329, category: "Pasta", description: "Spicy red sauce pasta with garlic", isVeg: true, image: "/DSC_5205.JPG" },
  { id: "pa4", name: "Aglio O Olio (Spaghetti)", price: 329, category: "Pasta", description: "Classic Italian garlic and olive oil pasta", isVeg: true, image: "/DSC_5299.JPG" },
  { id: "pa5", name: "Pesto Perfection", price: 349, category: "Pasta", description: "Basil pesto sauce with pine nuts", isVeg: true, isChefSpecial: true, image: "/DSC_3829.JPG" },

  // Wraps
  { id: "w1", name: "Grilled Veggie Wrap", price: 349, category: "Wraps", description: "Grilled seasonal vegetables in tortilla", isVeg: true, image: "/image 3.jpg" },
  { id: "w2", name: "Peri Peri Paneer Wrap", price: 379, category: "Wraps", description: "Spicy peri peri paneer with sauces", isVeg: true, image: "/image 4.jpg" },
  { id: "w3", name: "Tandoori Paneer Wrap", price: 389, category: "Wraps", description: "Tandoori marinated paneer wrap", isVeg: true, image: "/DSC_5171.JPG" },
  { id: "w4", name: "Chef Special Wrap", price: 399, category: "Wraps", description: "Exclusive wrap with premium ingredients", isVeg: true, isChefSpecial: true, image: "/DSC_5179.JPG" },

  // Beverages
  { id: "b1", name: "Americano", price: 89, category: "Beverages", description: "Classic espresso with hot water", isVeg: true, image: "/DSC_5205.JPG" },
  { id: "b2", name: "Lemon Tea", price: 99, category: "Beverages", description: "Refreshing tea infused with lemon", isVeg: true, image: "/DSC_5299.JPG" },
  { id: "b3", name: "Masala Tea", price: 109, category: "Beverages", description: "Indian spiced tea with aromatic herbs", isVeg: true, image: "/DSC_3829.JPG" },
  { id: "b4", name: "Hot Coffee", price: 109, category: "Beverages", description: "Freshly brewed hot coffee", isVeg: true, image: "/image 3.jpg" },
  { id: "b5", name: "Hot Chocolate", price: 169, category: "Beverages", description: "Rich hot chocolate with marshmallows", isVeg: true, image: "/image 4.jpg" },

  // Coolers
  { id: "c1", name: "Fresh Lime Soda", price: 149, category: "Coolers", description: "Fizzy lime soda with mint", isVeg: true, image: "/DSC_5171.JPG" },
  { id: "c2", name: "Lemon Ice Tea", price: 189, category: "Coolers", description: "Chilled tea with lemon flavor", isVeg: true, image: "/DSC_5179.JPG" },
  { id: "c3", name: "Peach Ice Tea", price: 189, category: "Coolers", description: "Refreshing peach-flavored iced tea", isVeg: true, image: "/DSC_5205.JPG" },
  { id: "c4", name: "Kiwi Mojito", price: 189, category: "Coolers", description: "Tropical kiwi mojito with fresh mint", isVeg: true, image: "/DSC_5299.JPG" },
  { id: "c5", name: "Cold Coffee", price: 189, category: "Coolers", description: "Chilled coffee with ice cream", isVeg: true, image: "/DSC_3829.JPG" },
  { id: "c6", name: "Cold Chocolate Frappe", price: 199, category: "Coolers", description: "Blended chocolate with ice", isVeg: true, image: "/image 3.jpg" },
  { id: "c7", name: "Strawberry Lemonade", price: 199, category: "Coolers", description: "Sweet strawberry with tangy lemon", isVeg: true, image: "/image 4.jpg" },
  { id: "c8", name: "Basil Lemonade", price: 219, category: "Coolers", description: "Herbal basil infused lemonade", isVeg: true, image: "/DSC_5171.JPG" },

  // Mocktails
  { id: "m1", name: "Orange Sunrise", price: 149, category: "Mocktails", description: "Citrus blend with orange juice", isVeg: true, image: "/DSC_5179.JPG" },
  { id: "m2", name: "Spicy Guava Chilli", price: 159, category: "Mocktails", description: "Sweet guava with spicy kick", isVeg: true, image: "/DSC_5205.JPG" },
  { id: "m3", name: "Beach Ride", price: 169, category: "Mocktails", description: "Tropical fruit mix", isVeg: true, image: "/DSC_5299.JPG" },
  { id: "m4", name: "Sex On the Beach", price: 199, category: "Mocktails", description: "Fruity peachy paradise", isVeg: true, image: "/DSC_3829.JPG" },
  { id: "m5", name: "Berry Blossom", price: 219, category: "Mocktails", description: "Mixed berry explosion", isVeg: true, image: "/image 3.jpg" },
  { id: "m6", name: "Blue Redry Punch", price: 229, category: "Mocktails", description: "Blue curacao flavored punch", isVeg: true, image: "/image 4.jpg" },
  { id: "m7", name: "Virgin Pink Lady", price: 249, category: "Mocktails", description: "Elegant pink grapefruit blend", isVeg: true, image: "/DSC_5171.JPG" },

  // Shakes
  { id: "sh1", name: "Blueberry Shake", price: 349, category: "Shakes", description: "Thick blueberry milkshake", isVeg: true, image: "/DSC_5179.JPG" },
  { id: "sh2", name: "Strawberry Shake", price: 379, category: "Shakes", description: "Fresh strawberry milkshake", isVeg: true, image: "/DSC_5205.JPG" },
  { id: "sh3", name: "Nutella Shake", price: 389, category: "Shakes", description: "Indulgent Nutella chocolate shake", isVeg: true, image: "/DSC_5299.JPG" },
  { id: "sh4", name: "Oreo Shake", price: 389, category: "Shakes", description: "Cookies and cream shake", isVeg: true, image: "/DSC_3829.JPG" },
  { id: "sh5", name: "Biscoff Shake", price: 399, category: "Shakes", description: "Caramelized cookie shake", isVeg: true, image: "/image 3.jpg" },
  { id: "sh6", name: "Kit Kat Shake", price: 399, category: "Shakes", description: "Chocolate wafer shake", isVeg: true, image: "/image 4.jpg" },

  // Desserts
  { id: "d1", name: "Ice Cream (1 Scoop)", price: 60, category: "Desserts", description: "Single scoop of premium ice cream", isVeg: true, image: "/DSC_5171.JPG" },
  { id: "d2", name: "Ice Cream (2 Scoops)", price: 100, category: "Desserts", description: "Double scoop ice cream", isVeg: true, image: "/DSC_5179.JPG" },
  { id: "d3", name: "Chocolate Sandwich", price: 159, category: "Desserts", description: "Ice cream sandwich with chocolate wafers", isVeg: true, image: "/DSC_5205.JPG" },
  { id: "d4", name: "Hot Brownie", price: 199, category: "Desserts", description: "Warm chocolate brownie", isVeg: true, image: "/DSC_5299.JPG" },
  { id: "d5", name: "French Toast", price: 219, category: "Desserts", description: "Sweet French toast with syrup", isVeg: true, image: "/DSC_3829.JPG" },
  { id: "d6", name: "Sizzling Brownie", price: 269, category: "Desserts", description: "Hot brownie with ice cream on sizzler", isVeg: true, image: "/image 3.jpg" },
  { id: "d7", name: "Pan Cake", price: 289, category: "Desserts", description: "Fluffy pancakes with toppings", isVeg: true, image: "/image 4.jpg" },

  // Add-ons
  { id: "ad1", name: "Water Bottle", price: 30, category: "Add-ons", description: "Packaged drinking water", isVeg: true, image: "/DSC_5171.JPG" },
  { id: "ad2", name: "Cookie", price: 30, category: "Add-ons", description: "Freshly baked cookie", isVeg: true, image: "/DSC_5179.JPG" },
  { id: "ad3", name: "Cheese Dip", price: 30, category: "Add-ons", description: "Creamy cheese dip", isVeg: true, image: "/DSC_5205.JPG" },
  { id: "ad4", name: "Chipotle Dip", price: 30, category: "Add-ons", description: "Smoky chipotle sauce", isVeg: true, image: "/DSC_5299.JPG" },
  { id: "ad5", name: "Cheese Slice", price: 30, category: "Add-ons", description: "Extra cheese slice", isVeg: true, image: "/DSC_3829.JPG" },
];

export const categories = [
  "All",
  "Soups",
  "Salads",
  "Appetizers",
  "Small Bites",
  "Sandwich/Burger",
  "Pizza",
  "Pasta",
  "Wraps",
  "Beverages",
  "Coolers",
  "Mocktails",
  "Shakes",
  "Desserts",
  "Add-ons"
];
