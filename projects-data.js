window.projectData = [
  {
    "id": "fcu-pdb",
    "title": "STM32 Tabanlı FCU + 6S PDB Stack",
    "status": "Tamamlandı",
    "statusClass": "status-done",
    "icon": "🔲",
    "description": "216 MHz hızında çalışan ARM Cortex-M7 tabanlı bir uçuş kontrol kartı geliştirdim. Kart üzerinde çift IMU mimarisi olarak BMI088 ve ICM-42688-P kullandım. Bunun yanında CAN bus haberleşmesi, 5 adet UART hattı, microSD veri kaydı ve 8 PWM çıkışı gibi özellikler yer alıyor. Güç dağıtım tarafında geliştirdiğim AT-kdPDB ise 6S girişten regüle 5V ve seçilebilir 9V/12V Vx hattı üretiyor. Ayrıca INA240A1 tabanlı akım ölçümü ile sistemin güç tüketimini izleyebiliyor. İki kartı stack mimarisinde tasarlayarak güç ve sensör devrelerini elektromanyetik açıdan birbirinden ayırmayı hedefledim. Böylece özellikle IMU ve hassas sensör tarafında oluşabilecek gürültüyü azaltmayı amaçladım. Her iki kart da 30.5×30.5 mm standart montaj ölçülerine uygun olacak şekilde tasarlandı ve bağımsız olarak kullanılabilecek yapıda geliştirildi.",
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
    "id": "stm32-flight-control",
    "title": "STM32 Tabanlı Uçuş Kontrol Algoritması",
    "status": "Tamamlandı",
    "statusClass": "status-done",
    "icon": "🚀",
    "description": "Teknofest Roket Yarışması için STM32F407 tabanlı, FreeRTOS çalışan gerçek zamanlı bir uçuş kontrol yazılımı geliştirdim. Sistem; IMU, barometre ve GPS verilerini aynı anda işleyerek uçuş fazlarını takip ediyor, uygun anda drogue ve ana paraşütü tetikliyor. Sensör verileri LoRa üzerinden yer istasyonuna aktarılıyor ve aynı zamanda SD karta kaydediliyor.",
    "tags": ["STM32F407", "FreeRTOS", "BNO055", "MS5611", "NMEA", "LoRa", "DMA", "Kalman", "C"],
    "links": [
      { "label": "GitHub", "url": "https://github.com/melekmemis/UKBAlgFreeRTOS" }
    ],
    "process": [
      {
        "text": "Projede temel hedefim tek çekirdekli STM32 üzerinde birden fazla sensörü aynı anda stabil şekilde çalıştırabilmekti. Bunun için FreeRTOS kullanarak IMU, barometre, GPS, LoRa haberleşmesi, yer istasyonu iletişimi, SD kart kayıt sistemi ve uçuş durum kontrolü için ayrı task yapıları oluşturdum. Böylece sistem bloklanmadan gerçek zamanlı çalışabiliyor."
      },
      {
        "text": "GPS verisini klasik polling yöntemi yerine DMA + UART Idle Line Detection ile aldım. HAL_UARTEx_ReceiveToIdle_DMA kullanarak veri geldiğinde interrupt üzerinden ilgili taskı uyandırıyorum. Bu yapı CPU yükünü ciddi şekilde azalttı ve veri kaybını önledi. Gelen NMEA verilerinden enlem, boylam, irtifa ve uydu bilgilerini ayrıştırdım.",
        "video": "rocketP/dma_i2c_demo.mp4"
      },
      {
        "text": "Sensör verilerindeki gürültüyü azaltmak için ivme, gyro, açı, basınç ve irtifa dahil tüm verileri ayrı ayrı Kalman filtresinden geçirdim. Her sensör için farklı Q ve R parametreleri ayarlayarak sistemin hem daha stabil hem de daha hızlı tepki vermesini hedefledim. Özellikle yanlış paraşüt tetiklemelerini önlemek bu noktada önemliydi."
      },
      {
        "text": "Uçuş algoritması tarafında bir durum makinesi yapısı kullandım. Liftoff, burnout, apogee tespiti, drogue ve ana paraşüt tetikleme gibi tüm uçuş fazları belirli koşullarla kontrol ediliyor. Her durum bir status byte içinde bitfield olarak tutuluyor ve yer istasyonuna gönderiliyor. Böylece uçuş sırasında hangi aşamada olunduğu anlık takip edilebiliyor.",
        "video": "rocketP/comm_test.mp4"
      },
      {
        "text": "Yer istasyonu haberleşmesi için kendi binary veri protokolümü tasarladım. Sensör verileri belirli byte paketleri halinde LoRa üzerinden gönderiliyor. Yer istasyonu tarafında ise C# Windows Forms ile geliştirdiğim arayüz gelen verileri ayrıştırıp gerçek zamanlı grafik olarak gösteriyor.",
        "video": "rocketP/ground_station.mp4"
      },
      {
        "text": "Uçuş boyunca tüm veriler FATFS kullanılarak SD karta kaydediliyor. İniş tamamlandıktan sonra sistem dosyayı güvenli şekilde kapatıyor. Böylece ani güç kesilmelerinde veri kaybı yaşanmaması hedeflendi."
      }
    ],
    "images": [
      { "url": "rocketP/dma_i2c_demo.mp4" },
      { "url": "rocketP/comm_test.mp4" },
      { "url": "rocketP/ground_station.mp4" }
    ]
  }
];