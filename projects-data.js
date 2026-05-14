window.projectData = [
  {
    "id": "fcu-pdb",
    "title": "STM32 Tabanlı FCU + 6S PDB Stack",
    "status": "Tamamlandı",
    "statusClass": "status-done",
    "icon": "🔲",
    "description": "AT-kdFCU, 216 MHz'de çalışan ARM Cortex-M7 işlemci üzerine inşa edilmiş, çift IMU mimarisi (BMI088 + ICM-42688-P), CAN bus, 5 UART, microSD kayıt ve 8 PWM çıkışıyla donatılmış bir uçuş kontrol kartıdır. AT-kdPDB ise 6S girişten regüle 5V ve seçilebilir 9V/12V Vx hattı üreten, INA240A1 tabanlı akım ölçümü içeren güç dağıtım kartıdır. İki kart stack mimarisinde birleşerek güç ve sensör devrelerini elektromanyetik açıdan birbirinden yalıtır. Her iki kart da 30.5×30.5 mm standart montaj ölçüsüne uygundur ve bağımsız olarak da kullanılabilir.",
    "tags": ["Altium Designer", "STM32", "PCB Design"],
    "links": [
      { "label": "FCU Altium Files", "url": "https://github.com/melekmemis/kdFCU" }, { "label": "PDB Altium Files", "url": "https://github.com/melekmemis/kdPDB" }
    ],
    "process": [
      { "text": "Mevcut uçuş kontrolcülerini inceleyerek başladım — çoğunun güç ve sinyal devrelerini aynı karta sıkıştırdığını, bunun da EMI kaynaklı sensör gürültüsüne yol açtığını gördüm. Bu yüzden FCU ve PDB'yi ayrı kartlara bölen stack mimarisini tercih ettim. Sistem gereksinimlerini 6S LiPo, 8 ESC çıkışı, çift IMU ve telemetri olarak belirleyip blok diyagrama geçtim.", "image": "fcuPdbP/blockD.jpg" },
      { "text": "Şematik tasarımında FCU'yu MCU, güç ve çevresel birimler olarak üç sheet'e böldüm. Çift IMU mimarisinde (BMI088 + ICM-42688-P) her sensörün bağımsız SPI hattında çalışması için pin atamasını STM32F765'in timer ve DMA kısıtlamaları gözetilerek yaptım. Kütüphane olmayan bileşenler için footprint ve sembol sıfırdan oluşturdum.", "images": ["fcuPdbP/switchB.jpg", "fcuPdbP/bd1.jpg", "fcuPdbP/bd2.jpg", "fcuPdbP/bd3.jpg"] },
      { "text": "Layout aşamasında güç düzlemini sinyal katmanlarından ayırdım. IMU'ların MCU'ya fiziksel yakınlığını korurken güç bileşenlerini kartın alt bölgesinde topladım. Akım yoğun izler için genişlik hesabı yaparak ESC ve güç girişi hatlarını boyutlandırdım.", "images": ["fcuPdbP/kdFCU.png", "fcuPdbP/kdFCUb.png"] },
      { "text": "PDB'de 6S girişinden 5V (FCU için) ve seçilebilir 9V/12V (kamera/VTX için) çıkış üretmek üzere iki ayrı buck dönüştürücü kullandım. Sistem güç tüketimini izlemek için INA240A1 tabanlı shunt akım ölçümü ve direnç bölücü voltaj ölçümü ekledim. Güç domainlerini FCU ile uyumlu şekilde ayrıştırdım.", "images": ["fcuPdbP/pdbbd1.jpg", "fcuPdbP/kdPDB.png"] },
      { "text": "Her iki kart da 30.5×30.5 mm standart montaj ölçüsünde tasarlandı. Stack yüksekliği standoff seçimiyle 22.2 mm olarak belirlendi — konnektörlerin ve USB Type-C'nin stack içinde erişilebilir kalmasına dikkat ettim.", "image": "fcuPdbP/videoCover/assem.png" },
      { "text": "Son olarak gerber dosyaları ve BOM çıkarıldı, üretim için hazır hale getirildi. Proje fiziksel üretim planlanmaksızın konsept ve tasarım aşamasında tamamlandı." }
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
