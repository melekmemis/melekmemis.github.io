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
      { "label": "GitHub", "url": "https://github.com/melekmemis/kdFCU" }
    ],
    "process": [
      { "text": "Sürece sistem gereksinimlerini belirleyerek başladım, mevcut uçuş kontrol kartlarını inceleyerek araştırmaya devam ettim, piyasadaki ürünlerde kullanılan komponentleri, özelliklerini detaylıca inceledim. Araştırmalarımın ardından komponentlerimi belirleyerek bir sistem blok diyagramı hazırladım.", "image": "fcuPdbP/blockD.jpg" },
      { "text": "Ardından şematikleri hazırlamaya başladım gerekli komponentler için kütüphaneleri oluşturdum ve bazı komponentler için de hazır kütüphaneler kullandım. Şematiklerimi MCU, komponentler ve konnektörler olarak üçe böldüm, Çift MCU desteği için uyumlu olmayan pinlerde atlama direnci ile switch yapısı kurdum.", "images": ["fcuPdbP/switchB.jpg", "fcuPdbP/bd1.jpg", "fcuPdbP/bd2.jpg", "fcuPdbP/bd3.jpg"] },
      { "text": "Şematiklerin tamamlanmasının ardından layout'a geçtim komponent yerleimlerini üreticilerin önerilerine EMI performansına dikkat ederek yerleştirdim.", "video": "fcuPdbP/ATkdFCUstack.avi" },
      { "text": "Aynı adımları PDB tasarımında da uyguladım sistemi hem 5V çıkış hem de 12V/9V arasında geçiş yapılbilecek bir şekilde tasarladım, aynı zamanda voltaj ve akım ölçümü desteği de ekledim.", "images": ["fcuPdbP/pdbbd1.jpg", "fcuPdbP/bd1.jpg"] }
    ],
    "images": ["resim2.png"], "video": "fcuPdbP/ATkdFCUstack.mp4"
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
