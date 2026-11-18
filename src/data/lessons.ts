export type Lesson = {
  id: string;
  unitId: string;
  title: string;
  description: string;
  icon: string;
  content: string[];
  exercises: Exercise[];
  quiz: QuizQuestion[];
};

export type Exercise = {
  id: string;
  title: string;
  type: "dragdrop" | "matching" | "fillblank" | "click";
  content: string;
  options?: string[];
  answer: string | string[];
  explanation: string;
};

export type QuizQuestion = {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
};

export type Unit = {
  id: string;
  title: string;
  description: string;
  icon: string;
  lessons: string[];
};

export const UNITS: Unit[] = [
  {
    id: "unit1",
    title: "Máy tính và thiết bị ngoại vi",
    description: "Hiểu về máy tính, bộ xử lý, bộ nhớ và các thiết bị ngoại vi",
    icon: "💻",
    lessons: ["lesson1-1", "lesson1-2", "lesson1-3"],
  },
  {
    id: "unit2",
    title: "Hệ điều hành Windows",
    description: "Sử dụng Windows: màn hình Desktop, taskbar, cửa sổ, tệp tin và thư mục",
    icon: "🪟",
    lessons: ["lesson2-1", "lesson2-2", "lesson2-3"],
  },
  {
    id: "unit3",
    title: "Soạn thảo văn bản",
    description: "Sử dụng Word để soạn thảo, định dạng văn bản và chèn hình ảnh",
    icon: "📝",
    lessons: ["lesson3-1", "lesson3-2", "lesson3-3"],
  },
  {
    id: "unit4",
    title: "Trang tính",
    description: "Sử dụng Excel: ô, bảng, công thức đơn giản và biểu đồ",
    icon: "📊",
    lessons: ["lesson4-1", "lesson4-2", "lesson4-3"],
  },
  {
    id: "unit5",
    title: "Trình chiếu",
    description: "Sử dụng PowerPoint để tạo bài trình chiếu với trang và hoạt ảnh",
    icon: "🎯",
    lessons: ["lesson5-1", "lesson5-2", "lesson5-3"],
  },
  {
    id: "unit6",
    title: "Internet và an toàn trên mạng",
    description: "Truy cập Internet, tìm kiếm thông tin và bảo vệ an toàn khi lên mạng",
    icon: "🌐",
    lessons: ["lesson6-1", "lesson6-2", "lesson6-3"],
  },
];

export const LESSONS: Lesson[] = [
  {
    id: "lesson1-1",
    unitId: "unit1",
    title: "Máy tính là gì?",
    description: "Giới thiệu về máy tính và vai trò của nó trong cuộc sống",
    icon: "🖥️",
    content: [
      "Máy tính là một thiết bị điện tử giúp chúng ta xử lý thông tin nhanh và chính xác.",
      "Máy tính bao gồm hai phần chính: phần cứng và phần mềm.",
      "Phần cứng là những thiết bị bạn có thể vuốt ve được: màn hình, bàn phím, chuột, máy in.",
      "Phần mềm là những chương trình chạy trên máy tính: Windows, Word, Excel, trình duyệt web.",
    ],
    exercises: [
      {
        id: "ex1-1-1",
        title: "Phân loại phần cứng và phần mềm",
        type: "click",
        content: "Chọn những thiết bị là phần cứng của máy tính:",
        options: ["Màn hình", "Windows", "Bàn phím", "Word", "Chuột", "Excel"],
        answer: ["Màn hình", "Bàn phím", "Chuột"],
        explanation: "Màn hình, bàn phím, chuột là phần cứng. Windows, Word, Excel là phần mềm.",
      },
    ],
    quiz: [
      {
        id: "q1-1-1",
        question: "Máy tính bao gồm bao nhiêu phần chính?",
        options: ["1 phần", "2 phần", "3 phần", "4 phần"],
        correctAnswer: 1,
        explanation: "Máy tính bao gồm 2 phần chính: phần cứng và phần mềm.",
      },
      {
        id: "q1-1-2",
        question: "Điều nào sau đây là phần cứng?",
        options: ["Windows", "Màn hình", "Microsoft Word", "Trình duyệt Chrome"],
        correctAnswer: 1,
        explanation: "Màn hình là thiết bị phần cứng, còn lại là phần mềm.",
      },
    ],
  },
  {
    id: "lesson1-2",
    unitId: "unit1",
    title: "Bộ xử lý và bộ nhớ",
    description: "CPU là não bộ, bộ nhớ lưu trữ thông tin của máy tính",
    icon: "🧠",
    content: [
      "Bộ xử lý (CPU) là não bộ của máy tính, thực hiện các phép tính và xử lý dữ liệu.",
      "Bộ nhớ RAM lưu trữ tạm thời thông tin khi máy tính đang hoạt động.",
      "Ổ cứng (HDD/SSD) lưu trữ thông tin vĩnh viễn même khi tắt máy.",
      "Sem càng cao, máy tính càng chạy nhanh và mượt mà.",
    ],
    exercises: [
      {
        id: "ex1-2-1",
        title: "Nhập từ khóa đúng",
        type: "fillblank",
        content: "CPU là chữ viết tắt của từ gì?",
        answer: "Central Processing Unit",
        explanation: "CPU viết tắt của Central Processing Unit, nghĩa là bộ xử lý trung tâm.",
      },
    ],
    quiz: [
      {
        id: "q1-2-1",
        question: "CPU là gì trong máy tính?",
        options: ["Não bộ", "Màn hình", "Bàn phím", "Máy in"],
        correctAnswer: 0,
        explanation: "CPU được gọi là não bộ của máy tính, xử lý mọi phép tính.",
      },
    ],
  },
  {
    id: "lesson1-3",
    unitId: "unit1",
    title: "Thiết bị ngoại vi",
    description: "Màn hình, bàn phím, chuột, máy in, loa, micro",
    icon: "🖱️",
    content: [
      "Thiết bị ngoại vi là các thiết bị gắn thêm vào máy tính để hỗ trợ nhập xuất dữ liệu.",
      "Thiết bị nhập liệu: bàn phím, chuột, micro, máy quét.",
      "Thiết bị xuất liệu: màn hình, máy in, loa.",
      "Thiết bị nhập xuất: màn hình cảm ứng, ổ đĩa di động USB.",
    ],
    exercises: [
      {
        id: "ex1-3-1",
        title: "Kết nối thiết bị",
        type: "matching",
        content: "Kết nối thiết bị với chức năng của nó:",
        options: ["Bàn phím - Nhập văn bản", "Máy in - In tài liệu ra giấy", "Loa - Phát âm thanh"],
        answer: ["Bàn phím - Nhập văn bản", "Máy in - In tài liệu ra giấy", "Loa - Phát âm thanh"],
        explanation: "Bàn phím dùng để nhập, máy in dùng để in, loa dùng để phát âm thanh.",
      },
    ],
    quiz: [
      {
        id: "q1-3-1",
        question: "Thiết bị nào dùng để in tài liệu ra giấy?",
        options: ["Màn hình", "Máy in", "Chuột", "Loa"],
        correctAnswer: 1,
        explanation: "Máy in là thiết bị dùng để in tài liệu ra giấy.",
      },
    ],
  },
  {
    id: "lesson2-1",
    unitId: "unit2",
    title: "Giao diện Windows",
    description: "Desktop, taskbar, nút Start, biểu tượng trên màn hình",
    icon: "🖼️",
    content: [
      "Màn hình Desktop là giao diện chính khi bạn bật máy tính Windows.",
      "Taskbar là thanh nhiệm vụ ở dưới cùng màn hình, chứa nút Start và các biểu tượng.",
      "Nút Start dùng để mở các chương trình và tắt máy tính.",
      "Biểu tượng trên Desktop là cách nhanh để mở chương trình hoặc tệp tin.",
    ],
    exercises: [
      {
        id: "ex2-1-1",
        title: "Xác định thành phần",
        type: "click",
        content: "Chọn thành phần nằm trên Taskbar:",
        options: ["Nút Start", "Hộp tìm kiếm", "Biểu tượng chương trình", "Đồng hồ hệ thống"],
        answer: ["Nút Start", "Hộp tìm kiếm", "Biểu tượng chương trình", "Đồng hồ hệ thống"],
        explanation: "Tất cả đều là thành phần của Taskbar trong Windows.",
      },
    ],
    quiz: [
      {
        id: "q2-1-1",
        question: "Taskbar nằm ở vị trí nào của màn hình?",
        options: ["Trên cùng", "Dưới cùng", "Bên trái", "Bên phải"],
        correctAnswer: 1,
        explanation: "Taskbar mặc định nằm ở dưới cùng màn hình Windows.",
      },
    ],
  },
  {
    id: "lesson2-2",
    unitId: "unit2",
    title: "Cửa sổ và thao tác cơ bản",
    description: "Mở, đóng, thu nhỏ, phông to cửa sổ; di chuyển cửa sổ",
    icon: "🪟",
    content: [
      "Cửa sổ là khung hiển thị nội dung của một chương trình.",
      "Nút thu nhỏ (–) sends cửa sổ xuống Taskbar.",
      "Nút phông to (□) mở cửa sổ đầy màn hình.",
      "Nút đóng (X) tắt cửa sổ và thoát chương trình.",
    ],
    exercises: [
      {
        id: "ex2-2-1",
        title: "Nút điều khiển cửa sổ",
        type: "matching",
        content: "Kết nối nút với chức năng:",
        options: ["Nút X - Đóng cửa sổ", "Nút - - Thu nhỏ cửa sổ", "Nút □ - Phông to cửa sổ"],
        answer: ["Nút X - Đóng cửa sổ", "Nút - - Thu nhỏ cửa sổ", "Nút □ - Phông to cửa sổ"],
        explanation: "Mỗi nút có chức năng điều khiển cửa sổ khác nhau.",
      },
    ],
    quiz: [
      {
        id: "q2-2-1",
        question: "Nút nào dùng để tắt cửa sổ hoàn toàn?",
        options: ["Thu nhỏ", "Phông to", "Đóng", "Khôi phục"],
        correctAnswer: 2,
        explanation: "Nút Đóng (X) dùng để tắt cửa sổ hoàn toàn.",
      },
    ],
  },
  {
    id: "lesson2-3",
    unitId: "unit2",
    title: "Tệp tin và thư mục",
    description: "Tạo, đổi tên, xóa, sao chép tệp tin và thư mục",
    icon: "📁",
    content: [
      "Tệp tin là đơn vị lưu trữ dữ liệu: văn bản, ảnh, âm thanh, video.",
      "Thư mục dùng để nhóm các tệp tin có liên quan với nhau.",
      "Nhấn phải chuột vào tệp tin để đổi tên, sao chép hoặc xóa.",
      "Thùng rác lưu trữ các tệp tin đã xóa tạm thời trước khi xóa vĩnh viễn.",
    ],
    exercises: [
      {
        id: "ex2-3-1",
        title: "Phân loại tệp tin",
        type: "click",
        content: "Chọn những tệp tin là văn bản:",
        options: ["baitap.docx", "hinhanh.jpg", "nhac.mp3", "video.mp4", "vanban.txt"],
        answer: ["baitap.docx", "vanban.txt"],
        explanation: "Các tệp có phần mở rộng .docx và .txt là tệp văn bản.",
      },
    ],
    quiz: [
      {
        id: "q2-3-1",
        question: "Thùng rác dùng để làm gì?",
        options: ["Lưu tệp tin vĩnh viễn", "Lưu tệp tin đã xóa tạm thời", "Mở chương trình", "Tìm kiếm tệp tin"],
        correctAnswer: 1,
        explanation: "Thùng rác lưu các tệp tin đã xóa để bạn có thể khôi phục lại.",
      },
    ],
  },
  {
    id: "lesson3-1",
    unitId: "unit3",
    title: "Giới thiệu Microsoft Word",
    description: "Mở Word, ribbon, thanh công cụ, nhập văn bản cơ bản",
    icon: "📄",
    content: [
      "Microsoft Word là phần mềm soạn thảo văn bản phổ biến nhất.",
      "Ribbon là thanh chứa các tab: Trang chủ, Chèn, Bố cục, Tham khảo, v.v.",
      "Bạn có thể nhập văn bản, định dạng chữ in đậm, in nghiêng, gạch chân.",
      "Lưu tài liệu bằng phím tắt Ctrl + S.",
    ],
    exercises: [
      {
        id: "ex3-1-1",
        title: "Phím tắt Word",
        type: "matching",
        content: "Kết nối phím tắt với chức năng:",
        options: ["Ctrl + S - Lưu tài liệu", "Ctrl + C - Sao chép", "Ctrl + V - Dán", "Ctrl + Z - Hoàn tác"],
        answer: ["Ctrl + S - Lưu tài liệu", "Ctrl + C - Sao chép", "Ctrl + V - Dán", "Ctrl + Z - Hoàn tác"],
        explanation: "Các phím tắt phổ biến trong Word và phần mềm văn phòng.",
      },
    ],
    quiz: [
      {
        id: "q3-1-1",
        question: "Phím tắt lưu tài liệu trong Word là gì?",
        options: ["Ctrl + P", "Ctrl + S", "Ctrl + O", "Ctrl + N"],
        correctAnswer: 1,
        explanation: "Ctrl + S là phím tắt lưu tài liệu trong Word.",
      },
    ],
  },
  {
    id: "lesson3-2",
    unitId: "unit3",
    title: "Định dạng văn bản",
    description: "Phông chữ, cỡ chữ, màu chữ, căn lề, đánh đầu dòng",
    icon: "🔤",
    content: [
      "Chọn văn bản trước khi định dạng.",
      "Cỡ chữ xác định kích thước của các ký tự.",
      "Màu chữ giúp làm nổi bật nội dung quan trọng.",
      "Căn lề căn trái, căn giữa, căn phải, căn đều giúp bố trí văn bản neat.",
    ],
    exercises: [
      {
        id: "ex3-2-1",
        title: "Căn lề văn bản",
        type: "click",
        content: "Chọn cách căn lề phù hợp cho tiêu đề:",
        options: ["Căn trái", "Căn giữa", "Căn phải", "Căn đều"],
        answer: ["Căn giữa"],
        explanation: "Tiêu đề thường được căn giữa để nổi bật và đẹp mắt.",
      },
    ],
    quiz: [
      {
        id: "q3-2-1",
        question: "Cỡ chữ 14 lớn hơn cỡ chữ 12?",
        options: ["Đúng", "Sai"],
        correctAnswer: 0,
        explanation: "Cỡ chữ số càng lớn, chữ càng to. 14 lớn hơn 12.",
      },
    ],
  },
  {
    id: "lesson3-3",
    unitId: "unit3",
    title: "Chèn hình ảnh và bảng",
    description: "Chèn ảnh vào văn bản, tạo bảng đơn giản",
    icon: "🖼️",
    content: [
      "Tab Chèn dùng để chèn hình ảnh vào tài liệu Word.",
      "Bạn có thể kéo kéo góc ảnh để thay đổi kích thước.",
      "Bảng giúp sắp xếp dữ liệu theo hàng và cột.",
      "Tab Bố cục dùng để chỉnh sửa bảng sau khi chèn.",
    ],
    exercises: [
      {
        id: "ex3-3-1",
        title: "Chèn bảng",
        type: "click",
        content: "Tab nào dùng để chèn bảng vào tài liệu?",
        options: ["Trang chủ", "Chèn", "Bố cục", "Tham khảo"],
        answer: ["Chèn"],
        explanation: "Tab Chèn chứa lệnh chèn bảng, hình ảnh, hình dạng vào tài liệu.",
      },
    ],
    quiz: [
      {
        id: "q3-3-1",
        question: "Tab nào chứa lệnh Chèn hình ảnh?",
        options: ["Trang chủ", "Chèn", "Bố cục", "Tham khảo"],
        correctAnswer: 1,
        explanation: "Tab Chèn chứa lệnh chèn hình ảnh vào tài liệu.",
      },
    ],
  },
  {
    id: "lesson4-1",
    unitId: "unit4",
    title: "Giới thiệu Microsoft Excel",
    description: "Mở Excel, ô, hàng, cột, trang tính, sổ làm việc",
    icon: "📊",
    content: [
      "Microsoft Excel là phần mềm tính toán và tạo bảng dữ liệu.",
      "Ô là đơn vị nhỏ nhất trong Excel, có địa chỉ như A1, B2, C3.",
      "Hàng chạy theo chiều ngang, cột chạy theo chiều dọc.",
      "Sổ làm việc là file Excel chứa nhiều trang tính.",
    ],
    exercises: [
      {
        id: "ex4-1-1",
        title: "Địa chỉ ô",
        type: "fillblank",
        content: "Ô ở hàng 5, cột C có địa chỉ là gì?",
        answer: "C5",
        explanation: "Địa chỉ ô ghi theo cột trước, hàng sau: C5.",
      },
    ],
    quiz: [
      {
        id: "q4-1-1",
        question: "Ô trong Excel có địa chỉ dạng gì?",
        options: ["Hàng-Cột", "Cột-Hàng", "Số-Chữ", "Chữ-Số"],
        correctAnswer: 1,
        explanation: "Địa chỉ ô ghi theo cột (chữ) trước, hàng (số) sau, ví dụ A1.",
      },
    ],
  },
  {
    id: "lesson4-2",
    unitId: "unit4",
    title: "Nhập dữ liệu và công thức",
    description: "Nhập số, văn bản, công thức đơn giản SUM, AVERAGE",
    icon: "🧮",
    content: [
      "Công thức trong Excel luôn bắt đầu bằng dấu bằng (=).",
      "Hàm SUM tính tổng của một vùng ô.",
      "Hàm AVERAGE tính trung bình cộng của các số.",
      "Kéo.Fill handle để sao chép công thức xuống các ô dưới.",
    ],
    exercises: [
      {
        id: "ex4-2-1",
        title: "Công thức tổng",
        type: "fillblank",
        content: "Hàm tính tổng trong Excel là gì?",
        answer: "SUM",
        explanation: "Hàm SUM(A1:A5) tính tổng từ ô A1 đến A5.",
      },
    ],
    quiz: [
      {
        id: "q4-2-1",
        question: "Công thức Excel bắt đầu bằng ký tự gì?",
        options: ["+", "=", "-", "*"],
        correctAnswer: 1,
        explanation: "Tất cả công thức trong Excel bắt đầu bằng dấu bằng (=).",
      },
    ],
  },
  {
    id: "lesson4-3",
    unitId: "unit4",
    title: "Tạo biểu đồ đơn giản",
    description: "Biểu đồ cột, biểu đồ đường, biểu đồ tròn",
    icon: "📈",
    content: [
      "Biểu đồ giúp trực quan hóa dữ liệu trong bảng tính.",
      "Biểu đồ cột so sánh các giá trị khác nhau.",
      "Biểu đồ đường thể hiện xu hướng thay đổi theo thời gian.",
      "Biểu đồ tròn thể hiện tỷ lệ phần trăm của từng phần.",
    ],
    exercises: [
      {
        id: "ex4-3-1",
        title: "Loại biểu đồ",
        type: "click",
        content: "Biểu đồ nào thể hiện tỷ lệ phần trăm?",
        options: ["Biểu đồ cột", "Biểu đồ đường", "Biểu đồ tròn", "Biểu đồ thanh"],
        answer: ["Biểu đồ tròn"],
        explanation: "Biểu đồ tròn dùng để thể hiện tỉ lệ phần trăm của từng phần trong tổng thể.",
      },
    ],
    quiz: [
      {
        id: "q4-3-1",
        question: "Biểu đồ nào dùng để so sánh giá trị?",
        options: ["Biểu đồ tròn", "Biểu đồ cột", "Biểu đồ hình ảnh", "Biểu đồ rải rác"],
        correctAnswer: 1,
        explanation: "Biểu đồ cột dùng để so sánh các giá trị khác nhau một cách trực quan.",
      },
    ],
  },
  {
    id: "lesson5-1",
    unitId: "unit5",
    title: "Giới thiệu Microsoft PowerPoint",
    description: "Mở PowerPoint, slide, bố cục trang, tema",
    icon: "🎯",
    content: [
      "Microsoft PowerPoint dùng để tạo bài trình chiếu (presentation).",
      "Mỗi trang trong PowerPoint gọi là một slide.",
      "Bố cục slide决定 cách sắp xếp tiêu đề và nội dung.",
      "Tema thay đổi màu sắc và phông chữ cho toàn bộ bài trình chiếu.",
    ],
    exercises: [
      {
        id: "ex5-1-1",
        title: "Slide là gì?",
        type: "click",
        content: "Slide trong PowerPoint là gì?",
        options: ["Một trang trình chiếu", "Một đoạn văn bản", "Một bảng tính", "Một bức ảnh"],
        answer: ["Một trang trình chiếu"],
        explanation: "Slide là một trang trong bài trình chiếu PowerPoint.",
      },
    ],
    quiz: [
      {
        id: "q5-1-1",
        question: "PowerPoint dùng để làm gì?",
        options: ["Soạn thảo văn bản", "Tính toán", "Tạo bài trình chiếu", "Vẽ hình"],
        correctAnswer: 2,
        explanation: "PowerPoint là phần mềm tạo bài trình chiếu.",
      },
    ],
  },
  {
    id: "lesson5-2",
    unitId: "unit5",
    title: "Chèn nội dung vào slide",
    description: "Chèn văn bản, hình ảnh, hình dạng, SmartArt",
    icon: "🖼️",
    content: [
      "Tab Chèn dùng để thêm hình ảnh, hình dạng vào slide.",
      "SmartArt giúp tạo sơ đồ trình bày ý tưởng.",
      "Bạn có thể kéo kéo để thay đổi kích thước đối tượng trên slide.",
      "Nhấn phải chuột để định dạng đối tượng đã chèn.",
    ],
    exercises: [
      {
        id: "ex5-2-1",
        title: "Chèn hình ảnh",
        type: "click",
        content: "Tab nào dùng để chèn hình ảnh vào slide?",
        options: ["Trang chủ", "Chèn", "Thiết kế", "Trình chiếu"],
        answer: ["Chèn"],
        explanation: "Tab Chèn chứa lệnh chèn hình ảnh, hình dạng, biểu đồ vào slide.",
      },
    ],
    quiz: [
      {
        id: "q5-2-1",
        question: "SmartArt dùng để làm gì?",
        options: ["Chèn ảnh", "Tạo sơ đồ", "Chèn âm thanh", "Thiết lập hoạt ảnh"],
        correctAnswer: 1,
        explanation: "SmartArt dùng để tạo các sơ đồ trình bày ý tưởng trực quan.",
      },
    ],
  },
  {
    id: "lesson5-3",
    unitId: "unit5",
    title: "Hoạt ảnh và chuyển trang",
    description: "Thêm hoạt ảnh cho đối tượng, hiệu ứng chuyển slide",
    icon: "✨",
    content: [
      "Hoạt ảnh tạo hiệu ứng khi đối tượng xuất hiện trên slide.",
      "Chuyển trang là hiệu ứng khi chuyển từ slide này sang slide khác.",
      "Tab Chuyển trang dùng để cài đặt hiệu ứng chuyển slide.",
      "Tab Hoạt ảnh dùng để cài đặt hiệu ứng cho đối tượng trong slide.",
    ],
    exercises: [
      {
        id: "ex5-3-1",
        title: "Hoạt ảnh",
        type: "click",
        content: "Tab nào dùng để thêm hiệu ứng chuyển slide?",
        options: ["Hoạt ảnh", "Chuyển trang", "Chèn", "Trang chủ"],
        answer: ["Chuyển trang"],
        explanation: "Tab Chuyển trang dùng để cài đặt hiệu ứng giữa các slide.",
      },
    ],
    quiz: [
      {
        id: "q5-3-1",
        question: "Hoạt ảnh áp dụng cho đối tượng nào?",
        options: ["Toàn bộ bài trình chiếu", "Đối tượng trong slide", "Chỉ tiêu đề", "Chỉ hình ảnh"],
        correctAnswer: 1,
        explanation: "Hoạt ảnh áp dụng cho từng đối tượng (văn bản, hình ảnh, hình dạng) trong slide.",
      },
    ],
  },
  {
    id: "lesson6-1",
    unitId: "unit6",
    title: "Internet và trình duyệt web",
    description: "Trang web, trình duyệt, thanh địa chỉ, tìm kiếm thông tin",
    icon: "🌐",
    content: [
      "Internet là mạng lưới kết nối hàng tỷ máy tính trên toàn thế giới.",
      "Trình duyệt web (Chrome, Edge, Firefox) dùng để truy cập trang web.",
      "Thanh địa chỉ dùng để nhập địa chỉ trang web (URL).",
      "Công cụ tìm kiếm (Google, Bing) giúp bạn tìm thông tin trên Internet.",
    ],
    exercises: [
      {
        id: "ex6-1-1",
        title: "Trình duyệt web",
        type: "click",
        content: "Điều nào sau đây là trình duyệt web?",
        options: ["Chrome", "Word", "Excel", "PowerPoint"],
        answer: ["Chrome"],
        explanation: "Chrome là trình duyệt web, còn lại là phần mềm văn phòng.",
      },
    ],
    quiz: [
      {
        id: "q6-1-1",
        question: "URL là gì?",
        options: ["Địa chỉ trang web", "Loại virus", "Phần mềm antivirus", "Loại tệp tin"],
        correctAnswer: 0,
        explanation: "URL là địa chỉ duy nhất của một trang web trên Internet.",
      },
    ],
  },
  {
    id: "lesson6-2",
    unitId: "unit6",
    title: "Tìm kiếm thông tin an toàn",
    description: "Sử dụng Google, lọc kết quả, đánh giá nguồn tin",
    icon: "🔍",
    content: [
      "Nhập từ khóa vào ô tìm kiếm để tìm thông tin trên Google.",
      "Sử dụng dấu ngoặc kép để tìm cụm từ chính xác.",
      "Kiểm tra ngày viết bài và tác giả để đánh giá nguồn tin.",
      "Không tin vào mọi thông tin trên Internet mà không kiểm tra.",
    ],
    exercises: [
      {
        id: "ex6-2-1",
        title: "Tìm kiếm từ khóa",
        type: "fillblank",
        content: "Công cụ tìm kiếm phổ biến nhất thế giới là gì?",
        answer: "Google",
        explanation: "Google là công cụ tìm kiếm phổ biến nhất trên thế giới.",
      },
    ],
    quiz: [
      {
        id: "q6-2-1",
        question: "Nên làm gì trước khi tin một thông tin trên Internet?",
        options: ["Tin ngay", "Kiểm tra nguồn tin", "Chia sẻ ngay", "Bỏ qua"],
        correctAnswer: 1,
        explanation: "Luôn kiểm tra nguồn tin, tác giả và ngày viết trước khi tin thông tin trên Internet.",
      },
    ],
  },
  {
    id: "lesson6-3",
    unitId: "unit6",
    title: "An toàn trên mạng",
    description: "Mật khẩu mạnh, không chia sẻ thông tin cá nhân, nhận diện lừa đảo",
    icon: "🔒",
    content: [
      "Mật khẩu mạnh bao gồm chữ hoa, chữ thường, số và ký tự đặc biệt.",
      "Không chia sẻ mật khẩu, địa chỉ, số điện thoại với người lạ trên mạng.",
      "Không nhấp vào link lạ hoặc tải file từ nguồn không rõ ràng.",
      "Báo cho bố mẹ hoặc giáo viên khi gặp tình huống bất thường trên mạng.",
    ],
    exercises: [
      {
        id: "ex6-3-1",
        title: "Mật khẩu mạnh",
        type: "click",
        content: "Mật khẩu nào là an toàn nhất?",
        options: ["123456", "matkhau", "Abc@123!xyz", "tenban"],
        answer: ["Abc@123!xyz"],
        explanation: "Mật khẩu mạnh có kết hợp chữ hoa, chữ thường, số và ký tự đặc biệt.",
      },
    ],
    quiz: [
      {
        id: "q6-3-1",
        question: "Khi gặp link lạ trên mạng bạn nên làm gì?",
        options: ["Nhấp vào ngay", "Không nhấp và báo cho lớn", "Chia sẻ cho bạn bè", "Tải file về"],
        correctAnswer: 1,
        explanation: "Không nhấp vào link lạ, hãy báo cho bố mẹ hoặc giáo viên biết.",
      },
    ],
  },
];

export const getLessonById = (id: string): Lesson | undefined => {
  return LESSONS.find((l) => l.id === id);
};

export const getLessonsByUnit = (unitId: string): Lesson[] => {
  return LESSONS.filter((l) => l.unitId === unitId);
};

export const getUnitById = (id: string): Unit | undefined => {
  return UNITS.find((u) => u.id === id);
};
