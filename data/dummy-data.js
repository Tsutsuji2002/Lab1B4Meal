export const CATEGORIES = [
  { id: 'c1', title: 'Ý', color: '#f5428d' },
  { id: 'c2', title: 'Nhanh & Dễ', color: '#f54242' },
  { id: 'c3', title: 'Hamburger', color: '#f5a442' },
  { id: 'c4', title: 'Đức', color: '#f5d142' },
  { id: 'c5', title: 'Nhẹ & Thơm Ngon', color: '#368dff' },
  { id: 'c6', title: 'Thế Giới', color: '#41d95d' },
  { id: 'c7', title: 'Bữa Sáng', color: '#9eecff' },
  { id: 'c8', title: 'Châu Á', color: '#b9ffb0' },
  { id: 'c9', title: 'Pháp', color: '#ffc7ff' },
  { id: 'c10', title: 'Mùa Hè', color: '#47fced' }
];

export const MEALS = [
  {
    id: 'm1',
    categoryIds: ['c1', 'c2'],
    title: 'Mì Ý với Sốt Cà Chua',
    affordability: 'phải chăng',
    complexity: 'đơn giản',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg',
    duration: 20,
    ingredients: [
      '4 quả cà chua',
      '1 muỗng canh dầu ô liu',
      '1 củ hành',
      '250g mì spaghetti',
      'gia vị',
      'phô mai (tùy chọn)'
    ],
    steps: [
      'Cắt nhỏ cà chua và hành.',
      'Đun sôi nước - thêm muối khi nước sôi.',
      'Cho mì spaghetti vào nước sôi - khoảng 10 đến 12 phút.',
      'Trong khi đó, đun nóng dầu ô liu và thêm hành đã cắt.',
      'Sau 2 phút, thêm cà chua, muối, tiêu và các gia vị khác.',
      'Sốt sẽ hoàn thành khi mì đã chín.',
      'Thêm phô mai lên trên món ăn đã hoàn thành nếu bạn thích.'
    ],
    isGlutenFree: false,
    isVegan: true,
    isVegetarian: true,
    isLactoseFree: true
  },
  {
    id: 'm2',
    categoryIds: ['c2'],
    title: 'Bánh Mì Hawaii',
    affordability: 'phải chăng',
    complexity: 'đơn giản',
    imageUrl: 'https://cdn.pixabay.com/photo/2018/07/11/21/51/toast-3532016_1280.jpg',
    duration: 10,
    ingredients: [
      '1 lát bánh mì trắng',
      '1 lát giăm bông',
      '1 lát dứa',
      '1-2 lát phô mai',
      'bơ'
    ],
    steps: [
      'Phết bơ một bên của bánh mì trắng.',
      'Xếp giăm bông, dứa và phô mai lên bánh mì.',
      'Nướng bánh trong khoảng 10 phút ở 200°C.'
    ],
    isGlutenFree: false,
    isVegan: false,
    isVegetarian: false,
    isLactoseFree: false
  },
  {
    id: 'm6',
    categoryIds: ['c1'],
    title: 'Pizza Margherita',
    affordability: 'phải chăng',
    complexity: 'đơn giản',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c8/Pizza_Margherita_stu_spivack.jpg',
    duration: 30,
    ingredients: [
      '1 đế bánh pizza',
      '200g sốt cà chua',
      '200g phô mai mozzarella',
      'Lá basil tươi'
    ],
    steps: [
      'Phết sốt cà chua lên đế bánh pizza.',
      'Rắc phô mai mozzarella lên trên.',
      'Nướng pizza ở 220°C trong khoảng 15 phút.',
      'Thêm lá basil tươi trước khi phục vụ.'
    ],
    isGlutenFree: false,
    isVegan: true,
    isVegetarian: true,
    isLactoseFree: false
  },
  {
    id: 'm11',
    categoryIds: ['c1'],
    title: 'Risotto Nấm',
    affordability: 'phức tạp',
    complexity: 'trung bình',
    imageUrl: 'https://thanhnien.mediacdn.vn/Uploaded/2014/saigonamthuc.thanhnien.com.vn/Pictures201310/Tan_Nhan/com_risotto.jpg',
    duration: 35,
    ingredients: [
      '200g gạo risotto',
      '100g nấm tươi',
      '1 củ hành',
      '50g phô mai Parmesan',
      '1 ly rượu vang trắng'
    ],
    steps: [
      'Xào hành và nấm trong dầu ô liu.',
      'Thêm gạo risotto và khuấy đều.',
      'Thêm rượu vang trắng và đun cho đến khi cạn.',
      'Từ từ thêm nước dùng cho đến khi gạo chín.',
      'Rắc phô mai Parmesan trước khi phục vụ.'
    ],
    isGlutenFree: false,
    isVegan: true,
    isVegetarian: false,
    isLactoseFree: true
  },
  {
    id: 'm7',
    categoryIds: ['c2', 'c7'],
    title: 'Bánh Mì Nướng Phô Mai',
    affordability: 'phải chăng',
    complexity: 'đơn giản',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Croque_monsieur.jpg/1200px-Croque_monsieur.jpg',
    duration: 8,
    ingredients: [
      '2 lát bánh mì',
      '2 lát phô mai',
      'Bơ'
    ],
    steps: [
      'Phết bơ lên mặt ngoài của bánh mì.',
      'Xếp phô mai giữa 2 lát bánh mì.',
      'Nướng bánh trên chảo đến khi vàng đều.'
    ],
    isGlutenFree: true,
    isVegan: false,
    isVegetarian: false,
    isLactoseFree: true
  },
  {
    id: 'm12',
    categoryIds: ['c2', 'c7'],
    title: 'Trứng Chiên',
    affordability: 'phải chăng',
    complexity: 'đơn giản',
    imageUrl: 'https://bizweb.dktcdn.net/100/004/714/articles/cach-chien-trung-cuc-ngon-1.png?v=1638954578213',
    duration: 5,
    ingredients: [
      '2 quả trứng',
      '1 muỗng canh dầu ăn',
      'Muối và tiêu'
    ],
    steps: [
      'Đập trứng vào chảo nóng với dầu ăn.',
      'Chiên cho đến khi lòng đỏ còn lỏng.',
      'Rắc muối và tiêu trước khi phục vụ.'
    ],
    isGlutenFree: true,
    isVegan: false,
    isVegetarian: false,
    isLactoseFree: true
  },
  {
    id: 'm4',
    categoryIds: ['c3'],
    title: 'Hamburger Bò',
    affordability: 'phải chăng',
    complexity: 'đơn giản',
    imageUrl: 'https://pasgo.vn/Upload/anh-blog/cach-lam-hamburger-bo-cuc-don-gian-chi-trong-3-buoc-400-43970593394.webp',
    duration: 15,
    ingredients: [
      '1 miếng thịt bò',
      '1 chiếc bánh hamburger',
      'Rau xà lách',
      'Cà chua',
      'Sốt mayonnaise'
    ],
    steps: [
      'Nướng miếng thịt bò cho đến khi chín.',
      'Đặt thịt lên bánh hamburger.',
      'Thêm rau xà lách, cà chua và sốt mayonnaise.'
    ],
    isGlutenFree: false,
    isVegan: false,
    isVegetarian: false,
    isLactoseFree: false
  },
  {
    id: 'm8',
    categoryIds: ['c3', 'c6'],
    title: 'Hamburger Gà',
    affordability: 'phải chăng',
    complexity: 'đơn giản',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Chicken-Tatsuta.jpg/800px-Chicken-Tatsuta.jpg',
    duration: 20,
    ingredients: [
      '1 miếng thịt gà',
      '1 chiếc bánh hamburger',
      'Xà lách, cà chua',
      'Sốt mayonnaise'
    ],
    steps: [
      'Nướng miếng thịt gà.',
      'Đặt thịt vào bánh hamburger.',
      'Thêm rau và sốt mayonnaise.'
    ],
    isGlutenFree: false,
    isVegan: false,
    isVegetarian: false,
    isLactoseFree: false
  },
  {
    id: 'm13',
    categoryIds: ['c3'],
    title: 'Cheeseburger',
    affordability: 'phải chăng',
    complexity: 'đơn giản',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/Cheeseburger.jpg',
    duration: 18,
    ingredients: [
      '1 miếng thịt bò',
      '1 lát phô mai',
      '1 chiếc bánh hamburger',
      'Xà lách, cà chua'
    ],
    steps: [
      'Nướng miếng thịt bò.',
      'Đặt phô mai lên miếng thịt khi gần chín.',
      'Đặt thịt và phô mai vào bánh hamburger.',
      'Thêm xà lách và cà chua.'
    ],
    isGlutenFree: false,
    isVegan: false,
    isVegetarian: false,
    isLactoseFree: false
  },
  {
    id: 'm14',
    categoryIds: ['c4', 'c7'],
    title: 'Xúc Xích Đức',
    affordability: 'phải chăng',
    complexity: 'đơn giản',
    imageUrl: 'https://vcdn1-dulich.vnecdn.net/2019/07/19/xuc-xich-duc-1-1561774336-4146-4593-9898-1563497471.png?w=460&h=0&q=100&dpr=2&fit=crop&s=XvbjnL0cQHZnSqLkCPh35Q',
    duration: 25,
    ingredients: [
      '2 cây xúc xích Đức',
      'Bánh mì',
      'Sốt mù tạt'
    ],
    steps: [
      'Nướng xúc xích cho đến khi chín vàng.',
      'Đặt xúc xích vào bánh mì và thêm mù tạt.'
    ],
    isGlutenFree: false,
    isVegan: false,
    isVegetarian: false,
    isLactoseFree: false
  }
];