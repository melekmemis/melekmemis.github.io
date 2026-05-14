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
];
