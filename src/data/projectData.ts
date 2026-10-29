/**
 * Dữ liệu chính thức Khu Đô Thị Haven Living
 * Trích xuất từ tài liệu dự án (Loại bỏ mọi thông tin về Địa Ốc Á Châu)
 */

export interface GalleryItem {
  id: string;
  url: string;
  title: string;
  category: 'render' | 'actual' | 'map' | 'plan';
  caption: string;
}

export interface AmenityItem {
  icon: string;
  title: string;
  desc: string;
  time?: string;
  category: 'internal' | 'external';
}

export const PROJECT_DETAILS = {
  name: 'Haven Living',
  legalName: 'Khu nhà ở Bình Minh',
  slogan: 'Khu Đô Thị Sinh Thái – Kiến Tạo Giá Trị Sống Mới',
  tagline: 'Không gian sống xanh lý tưởng với quy hoạch bài bản, hạ tầng đồng bộ và tiềm năng tăng trưởng bền vững',
  developer: 'Công ty TNHH Tư Vấn Đầu Tư & Phát Triển Địa Ốc Bình Minh',
  location: 'TP. Hồ Chí Minh',
  scale: '193.319,7 m² (19,3 ha)',
  totalProducts: '1.305 sản phẩm',
  productTypes: 'Nhà phố hoàn thiện (1 trệt 2 lầu), Shophouse thương mại, Nhà ở xã hội',
  landArea: 'Đa dạng từ 60m² – 100m² (linh hoạt tới 120m²)',
  houseSpec: 'Nhà 1 trệt 2 lầu bàn giao hoàn thiện',
  expectedPrice: 'Chỉ từ 2,3 Tỷ đồng / căn nhà phố 1 trệt 2 lầu hoàn thiện',
  constructionDensity: '48% – 59,5% (dành tối đa diện tích cho cảnh quan cây xanh và tiện ích sinh thái)',
  legalStatus: 'Hoàn thiện minh bạch, sổ hồng sở hữu lâu dài',
  infrastructure: 'Điện âm 100%, nước máy tiêu chuẩn đô thị, đường trải nhựa 12m – 22m, vỉa hè rộng rợp bóng cây xanh',
  hotline: '0972 114 877',
  hotlineDisplay: '0972.114.877',
  zaloUrl: 'https://zalo.me/0972114877',
};

export const CORE_PILLARS = [
  {
    index: '01',
    title: 'Vị Trí Đắc Địa – Tâm Điểm Đô Thị',
    desc: 'Tọa lạc tại khu đông dân cư sầm uất với hạ tầng hiện đại, đón đầu làn sóng đô thị hóa mạnh mẽ và mở rộng trung tâm phát triển của khu vực.',
    highlight: 'Khu vực phát triển năng động bậc nhất',
  },
  {
    index: '02',
    title: 'Siêu Kết Nối Giao Thông Liên Vùng',
    desc: 'Nằm ngay giao điểm 3 tuyến huyết mạch: ĐT741, Vành Đai 4 liên kết TP.HCM – Bình Dương – Đồng Nai – Long An, và đường song hành đường sắt.',
    highlight: 'Giao thoa 3 trục giao thông trọng điểm',
  },
  {
    index: '03',
    title: 'Tiềm Năng Tăng Giá Vượt Trội',
    desc: 'Hưởng lợi trực tiếp từ tốc độ lấp đầy nhanh chóng của các đại khu công nghiệp VSIP 2, VSIP 2 Mở Rộng, KCN Mỹ Phước 3 với hàng chục vạn chuyên gia, kỹ sư.',
    highlight: 'Thặng dư giá trị & tính thanh khoản cao',
  },
  {
    index: '04',
    title: 'Sản Phẩm Hoàn Thiện – Giá Hợp Lý',
    desc: 'Nhà phố 1 trệt 2 lầu bàn giao hoàn thiện với mức giá chỉ từ 2,3 tỷ đồng. Cơ hội sở hữu nhà liền thổ khang trang vừa an cư vừa khai thác kinh doanh cho thuê.',
    highlight: 'Bàn giao hoàn thiện chỉ từ 2,3 tỷ',
  },
];

export const SALES_POLICIES = [
  {
    id: 1,
    title: 'Chiết Khấu 5% – 10%',
    desc: 'Áp dụng trực tiếp theo giá trị hợp đồng, mang đến mức tiết kiệm ban đầu tối đa cho khách hàng mua đợt đầu.',
    badge: 'Ưu đãi lớn',
    icon: 'Percent',
  },
  {
    id: 2,
    title: 'Cam Kết Thuê Lại Trong 2 Năm',
    desc: 'Chủ đầu tư cam kết thuê lại ngay sau khi nhận bàn giao nhà, tạo nguồn thu nhập thụ động bền vững từ 10 - 15 triệu/tháng.',
    badge: 'Đảm bảo dòng tiền',
    icon: 'Key',
  },
  {
    id: 3,
    title: 'Hỗ Trợ Lãi Suất 8%/Năm Cố Định',
    desc: 'Gói hỗ trợ tài chính đặc biệt cố định lãi suất chỉ 8%/năm trong 2 năm đầu tiên, xóa tan nỗi lo biến động lãi suất thị trường.',
    badge: 'An tâm tài chính',
    icon: 'TrendingDown',
  },
  {
    id: 4,
    title: 'Ưu Đãi Thanh Toán Sớm',
    desc: 'Khách hàng có sẵn nguồn tài chính thanh toán nhanh nhận ngay mức sinh lời cao hơn lãi suất tiền gửi ngân hàng.',
    badge: 'Tối ưu vốn',
    icon: 'Coins',
  },
  {
    id: 5,
    title: 'Hỗ Trợ Hồ Sơ Vay Ngân Hàng',
    desc: 'Ngân hàng đối tác chiến lược hỗ trợ giải ngân đến 70% giá trị hợp đồng, thời hạn vay linh hoạt đến 25 năm, thẩm định nhanh chóng.',
    badge: 'Thủ tục 48h',
    icon: 'FileCheck2',
  },
];

export const CONNECTIVITY_MILESTONES = [
  {
    time: '3 Phút',
    place: 'Chợ Chánh Lưu, Bách Hóa Xanh, Trường Tiểu học & THCS',
    desc: 'Đầy đủ trường học từ mầm non đến trung học, chợ dân sinh mua sắm tươi ngon mỗi ngày.',
    type: 'essential',
  },
  {
    time: '4 Phút',
    place: 'UBND Phường, Trạm Y Tế, Trung Tâm Văn Hóa',
    desc: 'Giải quyết các thủ tục hành chính, dịch vụ công và chăm sóc y tế nhanh chóng thuận tiện.',
    type: 'admin',
  },
  {
    time: '5 Phút',
    place: 'Khu Công Nghiệp VSIP 2 & VSIP 2 Mở Rộng',
    desc: 'Thủ phủ công nghiệp công nghệ cao kiểu mẫu quy tụ hàng ngàn chuyên gia nước ngoài và lao động trí thức.',
    type: 'industrial',
  },
  {
    time: '7 Phút',
    place: 'Khu Công Nghiệp Mỹ Phước 3 & Đại Học Quốc Tế Miền Đông',
    desc: 'Cụm liên hợp đô thị – công nghiệp – dịch vụ hàng đầu vùng kinh tế trọng điểm phía Nam.',
    type: 'industrial',
  },
  {
    time: '8 Phút',
    place: 'Thành Phố Mới Bình Dương & TTTM Thế Giới (WTC)',
    desc: 'Trung tâm hành chính tập trung tỉnh, quảng trường ánh sáng, công viên trung tâm 75ha và chuỗi dịch vụ quốc tế.',
    type: 'metropolitan',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'hero-1',
    url: 'https://diaocachau.com.vn/media/photo/o42-663522.jpg',
    title: 'Cổng chào & Phối cảnh Khu Đô Thị Haven Living',
    category: 'render',
    caption: 'Khu đô thị sinh thái xanh kiểu mẫu với cổng chào bề thế và đại lộ rực rỡ bóng cây xanh mát.',
  },
  {
    id: 'hero-2',
    url: 'https://diaocachau.com.vn/media/photo/o42-524292.jpg',
    title: 'Dãy nhà phố thương mại hiện đại',
    category: 'render',
    caption: 'Kiến trúc nhà phố 1 trệt 2 lầu tinh tế, mặt tiền rộng thoáng, tối ưu kinh doanh và an cư.',
  },
  {
    id: 'hero-3',
    url: 'https://diaocachau.com.vn/media/photo/o42-859969.jpg',
    title: 'Công viên sinh thái trung tâm & Đường dạo bộ',
    category: 'render',
    caption: 'Mảng xanh mát lành ôm trọn không gian sống, nơi tái tạo năng lượng cho cả gia đình.',
  },
  {
    id: 'hero-4',
    url: 'https://diaocachau.com.vn/media/photo/o42-714050.jpg',
    title: 'Phối cảnh tổng thể từ trên cao',
    category: 'render',
    caption: 'Quy hoạch ô cờ thông thoáng 19,3 ha với mạng lưới đường nội khu 12m – 22m kết nối thuận tiện.',
  },
  {
    id: 'hero-5',
    url: 'https://diaocachau.com.vn/media/photo/o42-632593.jpg',
    title: 'Phố thương mại sầm uất ban ngày',
    category: 'render',
    caption: 'Nơi quy tụ chuỗi cà phê, nhà hàng, cửa hàng tiện ích phục vụ cộng đồng cư dân tinh hoa.',
  },
  {
    id: 'hero-6',
    url: 'https://diaocachau.com.vn/media/photo/o42-228213.jpg',
    title: 'Chi tiết kiến trúc mặt tiền nhà hoàn thiện',
    category: 'render',
    caption: 'Thiết kế hiện đại, ban công rộng phủ cây xanh, hệ cửa nhôm kính cao cấp đón sáng tự nhiên.',
  },
  {
    id: 'hero-7',
    url: 'https://diaocachau.com.vn/media/photo/o42-243938.jpg',
    title: 'Khu vui chơi trẻ em & Thể thao ngoài trời',
    category: 'render',
    caption: 'Không gian an toàn, kích thích phát triển thể chất và tinh thần cho con trẻ.',
  },
  {
    id: 'hero-8',
    url: 'https://diaocachau.com.vn/media/photo/o42-579615.jpg',
    title: 'Trục cảnh quan xanh xuyên suốt dự án',
    category: 'render',
    caption: 'Hệ thống cây xanh phân tầng cùng thảm cỏ xanh mướt mang đến bầu không khí trong lành.',
  },
  {
    id: 'hero-9',
    url: 'https://diaocachau.com.vn/media/photo/o42-909349.jpg',
    title: 'Khu đô thị lung linh về đêm',
    category: 'render',
    caption: 'Hệ thống chiếu sáng đô thị thông minh, điện âm an toàn tuyệt đối tạo cảnh quan tráng lệ.',
  },
  {
    id: 'hero-10',
    url: 'https://diaocachau.com.vn/media/photo/o42-975151.jpg',
    title: 'Shophouse giao thương nhộn nhịp',
    category: 'render',
    caption: 'Tiềm năng khai thác thương mại không giới hạn nhờ lượng cư dân nội khu và chuyên gia lân cận.',
  },
];

export const ACTUAL_PROGRESS_PHOTOS = [
  {
    id: 'actual-1',
    url: 'https://diaocachau.com.vn/media/uploads/uploads/1785985332331-1555873565258844850-g46859_X2.jpg',
    title: 'Hạ tầng đường nhựa & vỉa hè hoàn thiện',
    desc: 'Đường nội khu đã trải nhựa bằng phẳng, vỉa hè rộng rãi trồng cây xanh bóng mát.',
  },
  {
    id: 'actual-2',
    url: 'https://diaocachau.com.vn/media/uploads/uploads/dji_0629.jpg',
    title: 'Toàn cảnh đại dự án nhìn từ Flycam',
    desc: 'Khu đất bằng phẳng, quy hoạch phân khu rõ ràng, kết nối trực tiếp các trục đường lớn.',
  },
  {
    id: 'actual-3',
    url: 'https://diaocachau.com.vn/media/uploads/uploads/1785985331877-1555873565258844850-g46859.jpg',
    title: 'Hệ thống ngầm hóa điện nước & trụ chiếu sáng',
    desc: 'Hạ tầng kỹ thuật điện âm và hệ thống cấp thoát nước tiêu chuẩn cao đã hoàn thành.',
  },
  {
    id: 'actual-4',
    url: 'https://diaocachau.com.vn/media/uploads/uploads/dji_0634.jpg',
    title: 'Kết nối mạng lưới đường nhựa liên thông',
    desc: 'Hệ thống giao thông nội bộ kết nối thẳng ra trục chính ĐT741 và các khu dân cư hiện hữu.',
  },
  {
    id: 'actual-5',
    url: 'https://diaocachau.com.vn/media/uploads/uploads/z8023566034227-256fd23a2eb27e4cf6458a826.jpg',
    title: 'Tiến độ thi công các dãy nhà thực tế',
    desc: 'Công nhân và máy móc thi công khẩn trương đảm bảo tiến độ bàn giao đúng cam kết.',
  },
  {
    id: 'actual-6',
    url: 'https://diaocachau.com.vn/media/uploads/uploads/dji-0618_m9.jpg',
    title: 'Góc nhìn hạ tầng vùng và tiện ích bao quanh',
    desc: 'Vị trí bao bọc bởi khu dân cư sung túc, gần kề các khu công nghiệp trọng điểm.',
  },
];

export const MAP_IMAGES = {
  overviewBanner: 'https://diaocachau.com.vn/media/uploads/uploads/2a.png',
  locationMap: 'https://diaocachau.com.vn/media/uploads/uploads/7b.png',
  amenitiesMap: 'https://diaocachau.com.vn/media/uploads/uploads/chatgpt%20image%2014_52_29%2022%20thg%207,%202026.png',
  masterPlan: 'https://diaocachau.com.vn/media/uploads/uploads/s%C6%A1%20%C4%91%E1%BB%93%20haven%20living.jpg',
  policyBanner: 'https://diaocachau.com.vn/media/uploads/uploads/chatgpt%20image%2010_20_04%2011%20thg%207,%202026.png',
};

export const FAQ_LIST = [
  {
    q: 'Dự án Haven Living đã có đầy đủ pháp lý chưa?',
    a: 'Dự án đã hoàn thiện pháp lý minh bạch, được cơ quan nhà nước có thẩm quyền phê duyệt chính thức. Toàn bộ hạ tầng điện âm, nước máy, đường giao thông đã hoàn thiện và đủ điều kiện pháp lý chuyển nhượng với sổ hồng riêng sở hữu lâu dài.',
  },
  {
    q: 'Mức giá 2,3 tỷ đồng đã bao gồm nhà xây dựng hoàn thiện chưa?',
    a: 'Đúng vậy. Mức giá chỉ từ 2,3 tỷ đồng là mức giá trọn gói cho căn nhà phố 1 trệt 2 lầu bàn giao hoàn thiện cơ bản từ ngoài vào trong, vật liệu xây dựng cao cấp, sẵn sàng dọn vào ở hoặc cho thuê sinh lời ngay.',
  },
  {
    q: 'Chính sách cam kết thuê lại 2 năm được thực hiện như thế nào?',
    a: 'Ngay sau khi nhận bàn giao nhà, khách hàng có thể ký hợp đồng ủy thác cho thuê với chủ đầu tư để nhận dòng tiền thụ động ổn định cam kết từ 10 - 15 triệu/tháng trong suốt 24 tháng liên tục.',
  },
  {
    q: 'Ngân hàng nào bảo lãnh và cho vay tại Haven Living?',
    a: 'Dự án có sự đồng hành của các ngân hàng thương mại uy tín hàng đầu, hỗ trợ cho vay tối đa 70% giá trị hợp đồng trong thời hạn lên đến 20 - 25 năm, cùng chính sách ưu đãi lãi suất chỉ 8%/năm trong 2 năm đầu.',
  },
];
