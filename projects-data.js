window.projectData = [
  {
    "id": "fcu-pdb",
    "title": "FCU + PDB Kart",
    "status": "Tamamlandı",
    "statusClass": "status-done",
    "icon": "🔲",
    "description": "Kendi tasarımım olan FCU + PDB kartı. Uçuş kontrol ve güç dağıtımını tek bir stack üzerinde birleştirmektedir. Güç hatları, MCU çevresel birimleri ve sensör bağlantıları dikkate alınarak 30.5 x 30.5 mm montaj standardı ile uyumlu olacak şekilde sıfırdan PCB tasarımı yapılmıştır.",
    "tags": ["Altium Designer", "STM32", "PCB Design"],
    "links": [
      { "label": "FCU Altium Files", "url": "https://github.com/melekmemis/kdFCU" }, { "label": "PDB Altium Files", "url": "https://github.com/melekmemis/kdPDB" }
    ],
    "process": [
      { "text": "Proje tasarımına sistem gereksinimlerini belirleyerek başladım. Mevcut uçuş kontrol kartlarını inceleyerek sektörde kullanılan mimarileri ve komponent seçimlerini analiz ettim. Güç dağıtımı, MCU yerleşimi ve sensör entegrasyonu gibi temel sistem ihtiyaçlarını netleştirerek blok diyagram tasarımına geçtim.", "image": "fcuPdbP/blockD.jpg" },
      { "text": "Blok diyagramın ardından şematik tasarım aşamasına geçtim. Gerekli komponentler için kütüphane oluşturup eksik parçaları tamamladım, uygun olanlarda hazır kütüphaneleri kullandım. Şematik yapıyı MCU, güç dağıtımı ve çevresel birimler olarak modüllere ayırdım. Çift MCU kullanımı için, uyumsuz pin senaryolarında jumper tabanlı switch yapısı tasarladım.", "images": ["fcuPdbP/switchB.jpg", "fcuPdbP/bd1.jpg", "fcuPdbP/bd2.jpg", "fcuPdbP/bd3.jpg"] },
      { "text": "Şematik tamamlandıktan sonra PCB layout aşamasına geçtim. Komponent yerleşimlerini üretici önerileri ve EMI/akım yolu optimizasyonlarını dikkate alarak gerçekleştirdim. Güç ve sinyal hatlarını mümkün olduğunca ayrıştırarak akım yoğun yolları kısa ve kontrollü olacak şekilde tasarladım.", "images": ["fcuPdbP/kdFCU.png", "fcuPdbP/kdFCUb.png"] },
      { "text": "PDB tasarımında farklı voltaj seviyeleri için 5V ve seçilebilir 9V/12V çıkış yapısı oluşturdum. Ayrıca sistemin güç tüketimini izleyebilmek için voltaj ve akım ölçüm desteği ekledim. FCU ile uyumlu çalışacak şekilde güç hatlarını ayrı domainlerde yapılandırdım.", "images": ["fcuPdbP/pdbbd1.jpg", "fcuPdbP/kdPDB.png"] },
      { "text": "PCB tasarımlarının ardından montaj için gerekli standoff yüksekliğini belirledim ve kartın stack yapısına uygun şekilde mekanik yerleşimi tamamladım.", "image": "fcuPdbP/videoCover/assem.png" }
    ],
    "images": ["fcuPdbP/1.png", "fcuPdbP/2.png", "fcuPdbP/3.png",
      { "url": "fcuPdbP/ATkdFCUstack.mp4", "poster": "fcuPdbP/videoCover/assem.png" }
    ]
  },
  {
    "id": "real-time-autopilot",
    "title": "Gerçek Zamanlı Otopilot",
    "status": "Aktif Geliştirme",
    "statusClass": "status-active",
    "icon": "🛸",
    "description": "Kaynakları sınırlı sistemler için bağımsız bir otopilot yazılımı. Sensör füzyonu, kontrol döngüleri ve görev planlama dahil.",
    "tags": ["C", "FreeRTOS", "MAVLink", "EKF", "PID"],
    "links": [],
    "process": [
      "FreeRTOS üzerinde görev hiyerarşisinin kurulması",
      "IMU verileri için Complementary ve EKF filtre uygulamaları",
      "PID kontrol döngülerinin tune edilmesi",
      "MAVLink protokolü entegrasyonu"
    ],
    "images": ["resim.png"]
  },
  {
    "id": "stm32-flight-control",
    "title": "STM32 Tabanlı Uçuş Kontrol Algoritması",
    "status": "Tamamlandı",
    "statusClass": "status-done",
    "icon": "🚀",
    "description": "Roket Yarışması için FreeRTOS tabanlı bir uçuş kontrol algoritması geliştirdim. Sistem tek çekirdekli MCU üzerinde gerçek zamanlı olarak attitude kontrol yapmakta ve kontroller sonucu uygun zamanda paraşüt sistemlerini aktifleştirme amacıyla geliştirildi.",
    "tags": ["BNO055", "STM32", "FreeRTOS", "NMEA ayrıştırma", "LoRa RF"],
    "links": [
      { "label": "GitHub", "url": "https://github.com/melekmemis/UKBAlgFreeRTOS" }
    ],
    "process": [
      "Roket dikey hız ve irtifa kestirimi algoritmaları",
      "Paraşüt ayrılma mantığının state-machine olarak kurgulanması",
      "Yer istasyonu için LoRa üzerinden telemetri paketi tasarımı"
    ],
    "images": []
  },
  {
    "id": "cubesat-software",
    "title": "CubeSat Yazılım Geliştirme",
    "status": "Geliştiriliyor",
    "statusClass": "status-dev",
    "icon": "🛰️",
    "description": "CubeSat projesi kapsamında ADCS, haberleşme ve kartlar arası iletişim altyapısını geliştiriyorum. Reaction wheel tabanlı yön kontrolü ve yer istasyonu ile veri aktarımı üzerine çalışıyorum.",
    "tags": ["CubeSat", "ADCS", "CAN", "STM32"],
    "links": [],
    "process": [
      "ADCS kontrol algoritmalarının C ortamına aktarılması",
      "OBC ve alt sistemler arası CAN-Bus haberleşme protokolü",
      "Hata ayıklama ve watchdog sistemleri"
    ],
    "images": []
  },
  {
    "id": "autonomous-rover",
    "title": "Otonom Rover (Tübitak 2209-A)",
    "status": "Aktif",
    "statusClass": "status-active",
    "icon": "🤖",
    "description": "LiDAR tabanlı haritalandırma, yön tayini ve robotik kol ile numune toplama görevlerini gerçekleştirebilen modüler bir keşif platformudur.",
    "tags": ["Lidar", "Grid Mapping", "Ters Kinematik", "STM32"],
    "links": [],
    "process": [
      "Lidar verilerinin işlenmesi ve 2D harita oluşturma",
      "A* algoritması ile yol planlama",
      "6 eksenli robotik kol için ters kinematik çözümleri"
    ],
    "images": []
  }
];
