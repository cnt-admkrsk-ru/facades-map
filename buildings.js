const buildings = [
  {
    "address": "ул. Ленина, 131",
    "number": "131",
    "coords": [
      56.012073,
      92.84896
    ],
    "status": "yellow",
    "photo": "lenina-131",
    "problem": "в ремонте 2026"
  },
  {
    "address": "ул. Ленина, 129",
    "number": "129",
    "coords": [
      56.012113,
      92.849877
    ],
    "status": "green",
    "photo": "lenina-129",
    "problem": "МКД"
  },
  {
    "address": "ул. Ленина, 127",
    "number": "127",
    "coords": [
      56.011736,
      92.850667
    ],
    "status": "green",
    "photo": "lenina-127",
    "problem": "МКД"
  },
  {
    "address": "ул. Ленина, 125",
    "number": "125",
    "coords": [
      56.012174,
      92.851736
    ],
    "status": "green",
    "photo": "lenina-125",
    "problem": "Администрация Кр.кр"
  },
  {
    "address": "ул. Ленина, 123д",
    "number": "123д",
    "coords": [
      56.01213,
      92.8522
    ],
    "status": "green",
    "photo": "lenina-123d",
    "problem": "Зак. собрание Кр.кр"
  },
  {
    "address": "ул. Ленина, 123а",
    "number": "123а",
    "coords": [
      56.012234,
      92.852886
    ],
    "status": "green",
    "photo": "lenina-123a",
    "problem": "Администрация Кр.кр"
  },
  {
    "address": "ул. Ленина, 123",
    "number": "123",
    "coords": [
      56.01236,
      92.85427
    ],
    "status": "green",
    "photo": "lenina-123",
    "problem": "МКД"
  },
  {
    "address": "ул. Ленина, 122",
    "number": "122",
    "coords": [
      56.012536,
      92.848844
    ],
    "status": "green",
    "photo": "lenina-122",
    "problem": "МКД"
  },
  {
    "address": "ул. Ленина, 121",
    "number": "121",
    "coords": [
      56.012431,
      92.855303
    ],
    "status": "green",
    "photo": "lenina-121",
    "problem": "МКД"
  },
  {
    "address": "ул. Ленина, 120",
    "number": "120",
    "coords": [
      56.012702,
      92.849401
    ],
    "status": "green",
    "photo": "lenina-120",
    "problem": "МКД"
  },
  {
    "address": "ул. Ленина, 119",
    "number": "119",
    "coords": [
      56.012063,
      92.856659
    ],
    "status": "green",
    "photo": "lenina-119",
    "problem": "МКД"
  },
  {
    "address": "ул. Ленина, 118а",
    "number": "118а",
    "coords": [
      56.013024,
      92.853066
    ],
    "status": "green",
    "photo": "lenina-118a",
    "problem": "МКД"
  },
  {
    "address": "ул. Ленина, 118",
    "number": "118",
    "coords": [
      56.012642,
      92.85055
    ],
    "status": "green",
    "photo": "lenina-118",
    "problem": "МКД"
  },
  {
    "address": "ул. Ленина, 117",
    "number": "117",
    "coords": [
      56.012526,
      92.8578
    ],
    "status": "yellow",
    "photo": "lenina-117",
    "problem": "КГАУ. Требуется локальный ремонт. В плане на 2027 год."
  },
  {
    "address": "ул. Ленина, 116",
    "number": "116",
    "coords": [
      56.012798,
      92.85391
    ],
    "status": "green",
    "photo": "lenina-116",
    "problem": "МКД"
  },
  {
    "address": "ул. Ленина, 115",
    "number": "115",
    "coords": [
      56.012682,
      92.858824
    ],
    "status": "yellow",
    "photo": "lenina-115",
    "problem": "МДК. Ремонт на 2027 год."
  },
  {
    "address": "ул. Ленина, 114",
    "number": "114",
    "coords": [
      56.012883,
      92.855599
    ],
    "status": "green",
    "photo": "lenina-114",
    "problem": "МКД"
  },
  {
    "address": "ул. Ленина, 113а",
    "number": "113а",
    "coords": [
      56.012697,
      92.859183
    ],
    "status": "green",
    "photo": "lenina-113a",
    "problem": "Офисное здание со множеством собственником"
  },
  {
    "address": "ул. Ленина, 113",
    "number": "113",
    "coords": [
      56.012587,
      92.859731
    ],
    "status": "green",
    "photo": "lenina-113",
    "problem": "Офисное здание со множеством собственником"
  },
  {
    "address": "ул. Ленина, 112",
    "number": "112",
    "coords": [
      56.012984,
      92.856991
    ],
    "status": "yellow",
    "photo": "lenina-112",
    "problem": "МКД. В ремонте в 2026 году."
  },
  {
    "address": "ул. Ленина, 111",
    "number": "111",
    "coords": [
      56.012627,
      92.860701
    ],
    "status": "green",
    "photo": "lenina-111",
    "problem": "Офисное здание со множеством собственником"
  },
  {
    "address": "ул. Ленина, 110",
    "number": "110",
    "coords": [
      56.012989,
      92.857935
    ],
    "status": "yellow",
    "photo": "lenina-110",
    "problem": "МКД. Ремонт на 2027 год."
  },
  {
    "address": "ул. Ленина, 108",
    "number": "108",
    "coords": [
      56.013044,
      92.858914
    ],
    "status": "yellow",
    "photo": "lenina-108",
    "problem": "ОКН. Служба по ГООКН Кр.кр. В ремонте в 2026 году."
  },
  {
    "address": "ул. Ленина, 104",
    "number": "104",
    "coords": [
      56.01316,
      92.859794
    ],
    "status": "green",
    "photo": "lenina-104",
    "problem": ""
  },
  {
    "address": "ул. Ленина, 102",
    "number": "102",
    "coords": [
      56.013155,
      92.860944
    ],
    "status": "green",
    "photo": "lenina-102",
    "problem": "МКД"
  },
  {
    "address": "ул. Ленина, 100",
    "number": "100",
    "coords": [
      56.013618,
      92.861088
    ],
    "status": "green",
    "photo": "lenina-100",
    "problem": ""
  },
  {
    "address": "ул. Ленина, 97",
    "number": "97",
    "coords": [
      56.012768,
      92.86186
    ],
    "status": "green",
    "photo": "lenina-97",
    "problem": "МКД"
  },
  {
    "address": "ул. Ленина, 95",
    "number": "95",
    "coords": [
      56.012899,
      92.862893
    ],
    "status": "green",
    "photo": "lenina-95",
    "problem": "МКД"
  },
  {
    "address": "ул. Ленина, 92",
    "number": "92",
    "coords": [
      56.013382,
      92.862768
    ],
    "status": "green",
    "photo": "lenina-92",
    "problem": "МКД"
  },
  {
    "address": "ул. Ленина, 91",
    "number": "91",
    "coords": [
      56.012914,
      92.864295
    ],
    "status": "green",
    "photo": "lenina-91",
    "problem": "МКД"
  },
  {
    "address": "ул. Ленина, 90",
    "number": "90",
    "coords": [
      56.013608,
      92.864897
    ],
    "status": "green",
    "photo": "lenina-90",
    "problem": "Стадион Локомотив"
  },
  {
    "address": "ул. Ленина, 88",
    "number": "88",
    "coords": [
      56.013432,
      92.866873
    ],
    "status": "green",
    "photo": "lenina-88",
    "problem": "ЦСП Русал"
  },
  {
    "address": "ул. Ленина, 86",
    "number": "86",
    "coords": [
      56.013467,
      92.86716
    ],
    "status": "yellow",
    "photo": "lenina-86",
    "problem": "ОКН. ООО «ПОЛЯРНАЯ ЭКСПЕДИЦИОННАЯ КОМПАНИЯ». В плане на 2027 год."
  },
  {
    "address": "ул. Ленина, 84",
    "number": "84",
    "coords": [
      56.013528,
      92.867583
    ],
    "status": "green",
    "photo": "lenina-84",
    "problem": "ОКН. ООО «ПОЛЯРНАЯ ЭКСПЕДИЦИОННАЯ КОМПАНИЯ»."
  },
  {
    "address": "ул. Ленина, 80",
    "number": "80",
    "coords": [
      56.013673,
      92.868337
    ],
    "status": "green",
    "photo": "lenina-80",
    "problem": "СГУ им. Решетнева"
  },
  {
    "address": "ул. Ленина, 79",
    "number": "79",
    "coords": [
      56.013125,
      92.866999
    ],
    "status": "green",
    "photo": "lenina-79",
    "problem": "ОКН. Детская худ.школа."
  },
  {
    "address": "ул. Ленина, 76 стр. 3",
    "number": "76 стр. 3",
    "coords": [
      56.013628,
      92.869056
    ],
    "status": "green",
    "photo": "lenina-76-3",
    "problem": ""
  },
  {
    "address": "ул. Ленина, 76",
    "number": "76",
    "coords": [
      56.013628,
      92.869379
    ],
    "status": "green",
    "photo": "lenina-76",
    "problem": "ОКН. Частная соб. Худ.школа Вагнер"
  },
  {
    "address": "ул. Ленина, 74",
    "number": "74",
    "coords": [
      56.013653,
      92.86973
    ],
    "status": "red",
    "photo": "lenina-74",
    "problem": "ОКН. Частная соб. ТЦ Абалаковых. Финансирование отсутствует."
  },
  {
    "address": "ул. Ленина, 74 стр. 2",
    "number": "74 стр. 2",
    "coords": [
      56.013804,
      92.870044
    ],
    "status": "green",
    "photo": "lenina-74-2",
    "problem": ""
  },
  {
    "address": "ул. Ленина, 73",
    "number": "73",
    "coords": [
      56.012868,
      92.868005
    ],
    "status": "green",
    "photo": "lenina-73",
    "problem": "СибГУ им. Решетнева. Столовая"
  },
  {
    "address": "ул. Ленина, 72",
    "number": "72",
    "coords": [
      56.013799,
      92.87034
    ],
    "status": "yellow",
    "photo": "lenina-72",
    "problem": "АО \"Исторический квартал\" В плане до 2028 года."
  },
  {
    "address": "ул. Ленина, 71",
    "number": "71",
    "coords": [
      56.012954,
      92.868858
    ],
    "status": "green",
    "photo": "lenina-71",
    "problem": "СибГУ им. Решетнева."
  },
  {
    "address": "ул. Ленина, 70",
    "number": "70",
    "coords": [
      56.013855,
      92.871634
    ],
    "status": "yellow",
    "photo": "lenina-70",
    "problem": "Требуется локальный ремонт. ДОМ.РФ выставляет объект на торги. Бывшее здание СибГУ"
  },
  {
    "address": "ул. Ленина, 69",
    "number": "69",
    "coords": [
      56.013341,
      92.870673
    ],
    "status": "yellow",
    "photo": "lenina-69",
    "problem": "СибГУ им. Решетнева. Требуется локальный ремонт."
  },
  {
    "address": "ул. Ленина, 68",
    "number": "68",
    "coords": [
      56.013834,
      92.87246
    ],
    "status": "green",
    "photo": "lenina-68",
    "problem": "МКД"
  },
  {
    "address": "ул. Ленина, 67",
    "number": "67",
    "coords": [
      56.013422,
      92.871481
    ],
    "status": "yellow",
    "photo": "lenina-67",
    "problem": "ОКН. АО \"Исторический квартал\" В плане до 2028 года."
  },
  {
    "address": "ул. Ленина, 66",
    "number": "66",
    "coords": [
      56.01391,
      92.872981
    ],
    "status": "green",
    "photo": "lenina-66",
    "problem": "Литературный музей Астафьева"
  },
  {
    "address": "ул. Ленина, 63",
    "number": "63",
    "coords": [
      56.013211,
      92.872272
    ],
    "status": "green",
    "photo": "lenina-63",
    "problem": "Общежитие СибГТУ."
  },
  {
    "address": "ул. Ленина, 64",
    "number": "64",
    "coords": [
      56.014061,
      92.87388
    ],
    "status": "green",
    "photo": "lenina-64",
    "problem": "Военный комиссариат Кр.кр."
  },
  {
    "address": "ул. Ленина, 62",
    "number": "62",
    "coords": [
      56.014046,
      92.874212
    ],
    "status": "red",
    "photo": "lenina-62",
    "problem": "ОКН. ФГУП ГПСС УСС по Кр.кр. Требуется локальный ремонт нижней части фасада. Реставрация была в 2019 году."
  },
  {
    "address": "ул. Ленина, 61",
    "number": "61",
    "coords": [
      56.013266,
      92.872954
    ],
    "status": "green",
    "photo": "lenina-61",
    "problem": "Общежитие СибГТУ."
  },
  {
    "address": "ул. Ленина, 60",
    "number": "60",
    "coords": [
      56.014001,
      92.875236
    ],
    "status": "green",
    "photo": "lenina-60",
    "problem": ""
  },
  {
    "address": "ул. Ленина, 59",
    "number": "59",
    "coords": [
      56.013497,
      92.873736
    ],
    "status": "yellow",
    "photo": "lenina-59",
    "problem": "ОКН. Пожарная часть 1. В плане на 2027 год."
  },
  {
    "address": "ул. Ленина, 58",
    "number": "58",
    "coords": [
      56.014091,
      92.876458
    ],
    "status": "yellow",
    "photo": "lenina-58",
    "problem": "ОКН. АО \"Исторический квартал\". В плане до 2028 года."
  },
  {
    "address": "ул. Ленина, 56",
    "number": "56",
    "coords": [
      56.014157,
      92.876907
    ],
    "status": "green",
    "photo": "lenina-56",
    "problem": "Частная соб. Торговый магазин"
  },
  {
    "address": "ул. Ленина, 54",
    "number": "54",
    "coords": [
      56.014313,
      92.877671
    ],
    "status": "red",
    "photo": "lenina-54",
    "problem": "Нежилое помещение в составе МКД"
  },
  {
    "address": "ул. Ленина, 49",
    "number": "49",
    "coords": [
      56.013583,
      92.875236
    ],
    "status": "green",
    "photo": "lenina-49",
    "problem": "МКД"
  },
  {
    "address": "ул. Ленина, 46",
    "number": "46",
    "coords": [
      56.014323,
      92.879144
    ],
    "status": "green",
    "photo": "lenina-46",
    "problem": "Частная соб. Бывший банк ВТБ."
  },
  {
    "address": "ул. Сурикова, 28",
    "number": "28",
    "coords": [
      56.013695,
      92.876353
    ],
    "status": "green",
    "photo": "syrikova-28",
    "problem": "Нежилое здание. Гидрометеорология"
  },
  {
    "address": "ул. Ленина, 43",
    "number": "43",
    "coords": [
      56.013714,
      92.877186
    ],
    "status": "green",
    "photo": "lenina-43",
    "problem": "МКД"
  },
  {
    "address": "ул. Ленина, 41",
    "number": "41",
    "coords": [
      56.013578,
      92.877796
    ],
    "status": "green",
    "photo": "lenina-41",
    "problem": "Нежилое здание. ЦРМПиООС"
  },
  {
    "address": "ул. Ленина, 37",
    "number": "37",
    "coords": [
      56.013533,
      92.879054
    ],
    "status": "green",
    "photo": "lenina-37",
    "problem": "Нежилое здание. Банк АТБ."
  },
  {
    "address": "ул. Ленина, 35 стр. 2",
    "number": "35 стр. 2",
    "coords": [
      56.013839,
      92.879539
    ],
    "status": "green",
    "photo": "lenina-35-2",
    "problem": ""
  },
  {
    "address": "ул. Ленина, 35",
    "number": "35",
    "coords": [
      56.013779,
      92.880653
    ],
    "status": "green",
    "photo": "lenina-35",
    "problem": "Нежилое здание. КТО РНП работ.угольной промышленности"
  },
  {
    "address": "ул. Ленина, 34",
    "number": "34",
    "coords": [
      56.014353,
      92.880276
    ],
    "status": "green",
    "photo": "lenina-34",
    "problem": "МКД"
  },
  {
    "address": "ул. Ленина, 32",
    "number": "32",
    "coords": [
      56.014388,
      92.881767
    ],
    "status": "yellow",
    "photo": "lenina-32",
    "problem": "Общежитие СибГТУ. Требуется локальный ремонт нижней части фасада"
  },
  {
    "address": "ул. Ленина, 29",
    "number": "29",
    "coords": [
      56.01397,
      92.881462
    ],
    "status": "green",
    "photo": "lenina-29",
    "problem": "МКД"
  },
  {
    "address": "ул. Ленина, 28",
    "number": "28",
    "coords": [
      56.014519,
      92.883734
    ],
    "status": "green",
    "photo": "lenina-28",
    "problem": "МКД"
  },
  {
    "address": "ул. Ленина, 26",
    "number": "26",
    "coords": [
      56.014685,
      92.886214
    ],
    "status": "green",
    "photo": "lenina-26",
    "problem": "МКД"
  },
  {
    "address": "ул. Ленина, 25",
    "number": "25",
    "coords": [
      56.014071,
      92.882935
    ],
    "status": "green",
    "photo": "lenina-25",
    "problem": "МКД"
  },
  {
    "address": "ул. Ленина, 24",
    "number": "24",
    "coords": [
      56.014896,
      92.887983
    ],
    "status": "green",
    "photo": "lenina-24",
    "problem": "МКД"
  },
  {
    "address": "ул. Ленина, 23",
    "number": "23",
    "coords": [
      56.014051,
      92.883564
    ],
    "status": "green",
    "photo": "lenina-23",
    "problem": "МКД"
  },
  {
    "address": "ул. Ленина, 22",
    "number": "22",
    "coords": [
      56.015596,
      92.889681
    ],
    "status": "green",
    "photo": "lenina-22",
    "problem": "СГИИ им.Хворостовского"
  },
  {
    "address": "ул. Ленина, 21",
    "number": "21",
    "coords": [
      56.01391,
      92.884031
    ],
    "status": "green",
    "photo": "lenina-21",
    "problem": "МКД"
  },
  {
    "address": "ул. Ленина, 20-16",
    "number": "20-16",
    "coords": [
      56.015329,
      92.891073
    ],
    "status": "green",
    "photo": "lenina-20",
    "problem": "МКД"
  },
  {
    "address": "ул. Ленина, 15",
    "number": "15",
    "coords": [
      56.014197,
      92.886303
    ],
    "status": "red",
    "photo": "lenina-15",
    "problem": "Благовещенская церковь"
  },
  {
    "address": "ул. Ленина, 13",
    "number": "13",
    "coords": [
      56.014378,
      92.886968
    ],
    "status": "green",
    "photo": "lenina-13",
    "problem": "МКД"
  },
  {
    "address": "ул. Ленина, 11",
    "number": "11",
    "coords": [
      56.014403,
      92.887525
    ],
    "status": "green",
    "photo": "lenina-11",
    "problem": "МКД"
  },
  {
    "address": "ул. Ленина, 5а",
    "number": "5а",
    "coords": [
      56.014182,
      92.889007
    ],
    "status": "green",
    "photo": "lenina-5а",
    "problem": "МКД"
  },
  {
    "address": "ул. Ленина, 3а",
    "number": "3а",
    "coords": [
      56.014267,
      92.889573
    ],
    "status": "red",
    "photo": "lenina-3а",
    "problem": "ОКН. Частная соб. Требуется капитальный ремонт. Финансирование отсутствует."
  },
  {
    "address": "ул. Сурикова, 12",
    "number": "12",
    "coords": [
      56.010191,
      92.877177
    ],
    "status": "green",
    "photo": "syrikova-12",
    "problem": "Нежилое здание. ИОНЕССИ"
  },
  {
    "address": "ул. Сурикова, 19",
    "number": "19",
    "coords": [
      56.010478,
      92.87635
    ],
    "status": "green",
    "photo": "syrikova-73",
    "problem": "Нежилое здание. Муз.школа"
  },
  {
    "address": "ул. Карла Маркса, 56",
    "number": "56",
    "coords": [
      56.010926,
      92.875748
    ],
    "status": "yellow",
    "photo": "marksa-56",
    "problem": "МКД"
  },
  {
    "address": "ул. Карла Маркса, 52",
    "number": "52",
    "coords": [
      56.010976,
      92.876898
    ],
    "status": "green",
    "photo": "marksa-52",
    "problem": "Нежилое здание. АО \"Исторический квартал\""
  },
  {
    "address": "ул. Карла Маркса, 49",
    "number": "49",
    "coords": [
      56.010604,
      92.880069
    ],
    "status": "green",
    "photo": "marksa-49",
    "problem": "МКД"
  },
  {
    "address": "ул. Карла Маркса, 48",
    "number": "48",
    "coords": [
      56.011374,
      92.877823
    ],
    "status": "green",
    "photo": "marksa-48",
    "problem": "Нежилое здание со множеством собственников."
  },
  {
    "address": "ул. Карла Маркса, 47",
    "number": "47",
    "coords": [
      56.010725,
      92.882602
    ],
    "status": "green",
    "photo": "marksa-47",
    "problem": "МКД"
  },
  {
    "address": "ул. Карла Маркса, 45",
    "number": "45",
    "coords": [
      56.010926,
      92.883761
    ],
    "status": "green",
    "photo": "marksa-45",
    "problem": "Нежилое здание. ККЦ со СПИД"
  },
  {
    "address": "ул. Карла Маркса, 44а",
    "number": "44а",
    "coords": [
      56.011092,
      92.878686
    ],
    "status": "green",
    "photo": "marksa-44a",
    "problem": "Нежилое здание. Кцпрои."
  },
  {
    "address": "ул. Карла Маркса, 43",
    "number": "43",
    "coords": [
      56.01086,
      92.884516
    ],
    "status": "green",
    "photo": "marksa-43",
    "problem": "Нежилое здание. Краевая больница 2"
  },
  {
    "address": "ул. Карла Маркса, 42",
    "number": "42",
    "coords": [
      56.011137,
      92.87988
    ],
    "status": "yellow",
    "photo": "marksa-42",
    "problem": "ОКН. ФБУ \"ТФ геологической информации по Сиб.округу\" В ремонте в 2026 году."
  },
  {
    "address": "ул. Карла Маркса, 42/1",
    "number": "42/1",
    "coords": [
      56.011092,
      92.879198
    ],
    "status": "green",
    "photo": "marksa-42-1",
    "problem": ""
  },
  {
    "address": "ул. Карла Маркса, 41",
    "number": "41",
    "coords": [
      56.010921,
      92.88669
    ],
    "status": "green",
    "photo": "marksa-41",
    "problem": "Нежилое здание. Частная соб."
  },
  {
    "address": "ул. Карла Маркса, 40",
    "number": "40",
    "coords": [
      56.011162,
      92.880437
    ],
    "status": "yellow",
    "photo": "marksa-40",
    "problem": "ОКН. Малоэтажный расселенный жилой дом"
  },
  {
    "address": "ул. Карла Маркса, 38",
    "number": "38",
    "coords": [
      56.011208,
      92.881057
    ],
    "status": "green",
    "photo": "marksa-38",
    "problem": "ОКН. Частная соб. Салон штор."
  },
  {
    "address": "ул. Карла Маркса, 37",
    "number": "37",
    "coords": [
      56.010921,
      92.88669
    ],
    "status": "green",
    "photo": "marksa-37",
    "problem": "Нежилое здание. Центр доп.образования детей."
  },
  {
    "address": "ул. Карла Маркса, 36",
    "number": "36",
    "coords": [
      56.011223,
      92.881758
    ],
    "status": "yellow",
    "photo": "marksa-36",
    "problem": "ОКН. Музей Сурикова. В 2027 году проект. На июнь 2028 год ремонт фасада и кровли."
  },
  {
    "address": "ул. Карла Маркса, 34",
    "number": "34",
    "coords": [
      56.011243,
      92.882306
    ],
    "status": "green",
    "photo": "marksa-34",
    "problem": "МКД"
  },
  {
    "address": "ул. Карла Маркса, 30",
    "number": "30",
    "coords": [
      56.011293,
      92.883411
    ],
    "status": "red",
    "photo": "marksa-30",
    "problem": "Частная соб. Требуется снос или ремонт."
  },
  {
    "address": "ул. Карла Маркса, 28",
    "number": "28",
    "coords": [
      56.011382,
      92.883918
    ],
    "status": "yellow",
    "photo": "marksa-28",
    "problem": "ОКН. АО \"Русал\" Ремонт на 2027 год."
  },
  {
    "address": "ул. Карла Маркса, 26",
    "number": "26",
    "coords": [
      56.011338,
      92.884246
    ],
    "status": "green",
    "photo": "marksa-26",
    "problem": "Нежилое здание. Банк Синара."
  },
  {
    "address": "ул. Карла Маркса, 24а",
    "number": "24а",
    "coords": [
      56.011414,
      92.884722
    ],
    "status": "green",
    "photo": "marksa-24a",
    "problem": "Нежилое здание. Банк Сбербанк."
  },
  {
    "address": "ул. Карла Маркса, 24",
    "number": "24",
    "coords": [
      56.011379,
      92.885163
    ],
    "status": "yellow",
    "photo": "marksa-24",
    "problem": "ОКН. АО \"Русал\" Ремонт на 2027 год."
  },
  {
    "address": "ул. Карла Маркса, 22",
    "number": "22",
    "coords": [
      56.011404,
      92.885809
    ],
    "status": "yellow",
    "photo": "marksa-22",
    "problem": "ОКН. АО \"Русал\" Ремонт на 2027 год."
  },
  {
    "address": "ул. Карла Маркса, 21",
    "number": "21",
    "coords": [
      56.011057,
      92.88943
    ],
    "status": "green",
    "photo": "marksa-21",
    "problem": "МКД"
  },
  {
    "address": "ул. Карла Маркса, 19",
    "number": "19",
    "coords": [
      56.010845,
      92.89137
    ],
    "status": "green",
    "photo": "marksa-19",
    "problem": "МКД"
  },
  {
    "address": "ул. Карла Маркса, 14",
    "number": "14",
    "coords": [
      56.011877,
      92.888307
    ],
    "status": "green",
    "photo": "marksa-14",
    "problem": "МКД"
  },
  {
    "address": "ул. Карла Маркса, 14а",
    "number": "14а",
    "coords": [
      56.011736,
      92.888882
    ],
    "status": "green",
    "photo": "marksa-14a",
    "problem": "МКД"
  },
  {
    "address": "ул. Карла Маркса, 8а",
    "number": "8а",
    "coords": [
      56.011877,
      92.888307
    ],
    "status": "green",
    "photo": "marksa-8а",
    "problem": "МКД"
  },
  {
    "address": "ул. Карла Маркса, 6",
    "number": "6",
    "coords": [
      56.011731,
      92.891954
    ],
    "status": "green",
    "photo": "marksa-6",
    "problem": "ОКН. Нежилое здание. Гос. краевой архив."
  },
  {
    "address": "ул. Горького, 6",
    "number": "6",
    "coords": [
      56.010226,
      92.85002
    ],
    "status": "green",
    "photo": "gorcogo-6",
    "problem": "Нежилое здание. АО \"РЖД\""
  },
  {
    "address": "пр. Мира, 114",
    "number": "114",
    "coords": [
      56.011087,
      92.849122
    ],
    "status": "yellow",
    "photo": "mira-114",
    "problem": "МКД"
  },
  {
    "address": "пр. Мира, 112",
    "number": "112",
    "coords": [
      56.011661,
      92.852401
    ],
    "status": "green",
    "photo": "mira-112",
    "problem": "МКД"
  },
  {
    "address": "пр. Мира, 110",
    "number": "110",
    "coords": [
      56.011661,
      92.852401
    ],
    "status": "green",
    "photo": "mira-110",
    "problem": "Нежилое здание. Администрация Губернатора Кр.кр."
  },
  {
    "address": "пр. Мира, 108",
    "number": "108",
    "coords": [
      56.011419,
      92.854252
    ],
    "status": "green",
    "photo": "mira-108",
    "problem": "ОКН. Нежилое здание. Бывший ЦНТИ. Соб-ник ООО \"Вегас\""
  },
  {
    "address": "пр. Мира, 106/1",
    "number": "106/1",
    "coords": [
      56.011454,
      92.854853
    ],
    "status": "green",
    "photo": "mira-106-1",
    "problem": ""
  },
  {
    "address": "пр. Мира, 106",
    "number": "106",
    "coords": [
      56.011479,
      92.8555
    ],
    "status": "green",
    "photo": "mira-106",
    "problem": "МКД"
  },
  {
    "address": "пр. Мира, 104",
    "number": "104",
    "coords": [
      56.012018,
      92.856659
    ],
    "status": "green",
    "photo": "mira-104",
    "problem": "МКД"
  },
  {
    "address": "пр. Мира, 102а",
    "number": "102а",
    "coords": [
      56.011545,
      92.857351
    ],
    "status": "green",
    "photo": "mira-102a",
    "problem": "Нежилое здание. Частная соб."
  },
  {
    "address": "пр. Мира, 102",
    "number": "102",
    "coords": [
      56.011671,
      92.857845
    ],
    "status": "green",
    "photo": "mira-102",
    "problem": "Нежилое здание. Кр.кр. организация проф.работ.связи"
  },
  {
    "address": "пр. Мира, 100",
    "number": "100",
    "coords": [
      56.01163,
      92.859345
    ],
    "status": "green",
    "photo": "mira-100",
    "problem": "МКД"
  },
  {
    "address": "пр. Мира, 99",
    "number": "99",
    "coords": [
      56.010664,
      92.849248
    ],
    "status": "green",
    "photo": "mira-99",
    "problem": "ОКН. Красноярский госпиталь"
  },
  {
    "address": "пр. Мира, 98",
    "number": "98",
    "coords": [
      56.011681,
      92.860576
    ],
    "status": "green",
    "photo": "mira-98",
    "problem": "ОКН. Нежилое здание  со множеством собственников."
  },
  {
    "address": "пр. Мира, 96",
    "number": "96",
    "coords": [
      56.011761,
      92.86186
    ],
    "status": "yellow",
    "photo": "mira-96",
    "problem": "ОКН. Нежилое здание  со множеством собственников. Ремонт на 2027 год."
  },
  {
    "address": "пр. Мира, 94",
    "number": "94",
    "coords": [
      56.011786,
      92.86283
    ],
    "status": "green",
    "photo": "mira-94",
    "problem": "Нежилое здание  со множеством собственников."
  },
  {
    "address": "пр. Мира, 93",
    "number": "93",
    "coords": [
      56.010664,
      92.854934
    ],
    "status": "green",
    "photo": "mira-93",
    "problem": "ОКН. Президентский фонд культурных инициатив"
  },
  {
    "address": "пр. Мира, 91а",
    "number": "91а",
    "coords": [
      56.01086,
      92.856156
    ],
    "status": "green",
    "photo": "mira-91a",
    "problem": "МКД"
  },
  {
    "address": "пр. Мира, 91",
    "number": "91",
    "coords": [
      56.01086,
      92.856156
    ],
    "status": "green",
    "photo": "mira-91",
    "problem": "МКД"
  },
  {
    "address": "пр. Мира, 90",
    "number": "90",
    "coords": [
      56.011872,
      92.864367
    ],
    "status": "red",
    "photo": "mira-90",
    "problem": "ОКН. КГАУ ИММиО. Требуется локальный ремонт. Финансирование отсутствует."
  },
  {
    "address": "пр. Мира, 89",
    "number": "89",
    "coords": [
      56.011157,
      92.857809
    ],
    "status": "green",
    "photo": "mira-89",
    "problem": "Нежилое здание со множеством собственников."
  },
  {
    "address": "пр. Мира, 87",
    "number": "87",
    "coords": [
      56.011127,
      92.858294
    ],
    "status": "yellow",
    "photo": "mira-87",
    "problem": "Управление экономической безопасности и противодействие коррупции."
  },
  {
    "address": "пр. Мира, 88",
    "number": "88",
    "coords": [
      56.01191,
      92.86488
    ],
    "status": "green",
    "photo": "mira-88",
    "problem": "Нежилое здание. КГПУ им. Астафьева"
  },
  {
    "address": "пр. Мира, 86",
    "number": "86",
    "coords": [
      56.011937,
      92.865534
    ],
    "status": "green",
    "photo": "mira-86",
    "problem": "Нежилое здание. Дом кино"
  },
  {
    "address": "пр. Мира, 85",
    "number": "85",
    "coords": [
      56.011228,
      92.85983
    ],
    "status": "yellow",
    "photo": "mira-85",
    "problem": "МКД"
  },
  {
    "address": "пр. Мира, 83",
    "number": "83",
    "coords": [
      56.011122,
      92.861429
    ],
    "status": "green",
    "photo": "mira-83",
    "problem": "Нежилое здание со множеством собственников."
  },
  {
    "address": "пр. Мира, 84",
    "number": "84",
    "coords": [
      56.012119,
      92.86646
    ],
    "status": "green",
    "photo": "mira-84",
    "problem": "Нежилое здание со множеством собственников."
  },
  {
    "address": "пр. Мира, 82",
    "number": "82",
    "coords": [
      56.012415,
      92.869002
    ],
    "status": "green",
    "photo": "mira-82",
    "problem": "ОКН. СибГУ. Нежилое здание со множеством собственников."
  },
  {
    "address": "пр. Мира, 81",
    "number": "81",
    "coords": [
      56.011349,
      92.862426
    ],
    "status": "yellow",
    "photo": "mira-81",
    "problem": "ОКН. МКД. Требуется локальный ремонт. Финансирование отсутствует"
  },
  {
    "address": "пр. Мира, 80а",
    "number": "80а",
    "coords": [
      56.012597,
      92.870799
    ],
    "status": "green",
    "photo": "mira-80a",
    "problem": ""
  },
  {
    "address": "пр. Мира, 80",
    "number": "80",
    "coords": [
      56.012249,
      92.871823
    ],
    "status": "green",
    "photo": "mira-80",
    "problem": "МКД"
  },
  {
    "address": "пр. Мира, 79",
    "number": "79",
    "coords": [
      56.011399,
      92.86319
    ],
    "status": "green",
    "photo": "mira-79",
    "problem": "ОКН. Нежилое здание."
  },
  {
    "address": "пр. Мира, 78",
    "number": "78",
    "coords": [
      56.012315,
      92.872371
    ],
    "status": "green",
    "photo": "mira-78",
    "problem": "ОКН. Нежилое здание. Париж"
  },
  {
    "address": "пр. Мира, 76",
    "number": "76",
    "coords": [
      56.01232,
      92.872748
    ],
    "status": "yellow",
    "photo": "mira-76",
    "problem": "ОКН. КГАУ ДПО \"Кр.кр.  ИНСТИТУТ РАЗВИТИЯ ОБРАЗОВАНИЯ» Ремонт в плане на 2027 год."
  },
  {
    "address": "пр. Мира, 75",
    "number": "75",
    "coords": [
      56.011599,
      92.864928
    ],
    "status": "green",
    "photo": "mira-75",
    "problem": "ОКН. Нежилое здание. Театр Пушкина"
  },
  {
    "address": "пр. Мира, 74а",
    "number": "74а",
    "coords": [
      56.012355,
      92.873062
    ],
    "status": "green",
    "photo": "mira-74a",
    "problem": "ОКН. Нежилое здание."
  },
  {
    "address": "пр. Мира, 74",
    "number": "74",
    "coords": [
      56.012345,
      92.873287
    ],
    "status": "green",
    "photo": "mira-74",
    "problem": "ОКН. Нежилое здание."
  },
  {
    "address": "пр. Мира, 73",
    "number": "73",
    "coords": [
      56.011344,
      92.865642
    ],
    "status": "green",
    "photo": "mira-73",
    "problem": "ОКН. Нежилое здание."
  },
  {
    "address": "пр. Мира, 72",
    "number": "72",
    "coords": [
      56.012737,
      92.87344
    ],
    "status": "green",
    "photo": "mira-72",
    "problem": "ОКН. Нежилое здание."
  },
  {
    "address": "пр. Мира, 71",
    "number": "71",
    "coords": [
      56.011545,
      92.866334
    ],
    "status": "green",
    "photo": "mira-71",
    "problem": "ОКН. Нежилое здание. Театр Пушкина"
  },
  {
    "address": "пр. Мира, 70",
    "number": "70",
    "coords": [
      56.012607,
      92.87405
    ],
    "status": "yellow",
    "photo": "mira-70",
    "problem": "ОКН. Нежилое здание. КрасГМУ. В ремонте в 2026 году."
  },
  {
    "address": "пр. Мира, 69",
    "number": "69",
    "coords": [
      56.011585,
      92.867313
    ],
    "status": "yellow",
    "photo": "mira-69",
    "problem": "Нежилое здание. Дом офицеров. В ремонте в 2026 году."
  },
  {
    "address": "пр. Мира, 67",
    "number": "67",
    "coords": [
      56.011469,
      92.867798
    ],
    "status": "yellow",
    "photo": "mira-67",
    "problem": "Нежилое здание. АО \"Исторический квартал\". Ремонт в плане до 2028 года."
  },
  {
    "address": "пр. Мира, 66",
    "number": "66",
    "coords": [
      56.012441,
      92.874823
    ],
    "status": "yellow",
    "photo": "mira-66",
    "problem": "ОКН. ДОМ РФ. Требуется локальный ремонт."
  },
  {
    "address": "пр. Мира, 65",
    "number": "65",
    "coords": [
      56.011711,
      92.868454
    ],
    "status": "green",
    "photo": "mira-65",
    "problem": "МКД"
  },
  {
    "address": "пр. Мира, 64",
    "number": "64",
    "coords": [
      56.012506,
      92.87503
    ],
    "status": "green",
    "photo": "mira-64",
    "problem": "Нежилое здание со множеством собственников."
  },
  {
    "address": "пр. Мира, 63",
    "number": "63",
    "coords": [
      56.011494,
      92.868903
    ],
    "status": "green",
    "photo": "mira-63",
    "problem": "Нежилое административное  здание"
  },
  {
    "address": "пр. Мира, 61",
    "number": "61",
    "coords": [
      56.011766,
      92.869927
    ],
    "status": "green",
    "photo": "mira-61",
    "problem": "Нежилое административное  здание. В частной соб."
  },
  {
    "address": "пр. Мира, 60",
    "number": "60",
    "coords": [
      56.012732,
      92.875434
    ],
    "status": "green",
    "photo": "mira-60",
    "problem": "Нежилое здание со множеством собственников. Дом Быта"
  },
  {
    "address": "ул. Вейнбаума, 15",
    "number": "15",
    "coords": [
      56.011746,
      92.871068
    ],
    "status": "green",
    "photo": "veinbayma-15",
    "problem": "Нежилое административное  здание. В частной соб."
  },
  {
    "address": "пр. Мира, 59",
    "number": "59",
    "coords": [
      56.011897,
      92.871841
    ],
    "status": "green",
    "photo": "mira-59",
    "problem": "Нежилое административное  здание. В частной соб."
  },
  {
    "address": "пр. Мира, 57",
    "number": "57",
    "coords": [
      56.011907,
      92.872218
    ],
    "status": "green",
    "photo": "mira-57",
    "problem": "Нежилое административное  здание. В частной соб."
  },
  {
    "address": "пр. Мира, 56",
    "number": "56",
    "coords": [
      56.012556,
      92.877078
    ],
    "status": "red",
    "photo": "mira-56",
    "problem": "Нежилое административное  здание. В краевой соб-ти. Требуется локальный ремонт. Финансирование отсутствует."
  },
  {
    "address": "пр. Мира, 55",
    "number": "55",
    "coords": [
      56.011812,
      92.872829
    ],
    "status": "yellow",
    "photo": "mira-55",
    "problem": "Нежилое здание."
  },
  {
    "address": "пр. Мира, 54",
    "number": "54",
    "coords": [
      56.012597,
      92.87768
    ],
    "status": "green",
    "photo": "mira-54",
    "problem": "МКД"
  },
  {
    "address": "пр. Мира, 53",
    "number": "53",
    "coords": [
      56.011872,
      92.873592
    ],
    "status": "yellow",
    "photo": "mira-53",
    "problem": "ОКН. ФГБНУ «ФИЦ «Красноярский научный центр Сибирского отделения Российской академии наук» Запросили финансирование в РФ в г. Москве на ремонт фасада"
  },
  {
    "address": "пр. Мира, 52",
    "number": "52",
    "coords": [
      56.012672,
      92.878686
    ],
    "status": "yellow",
    "photo": "mira-52",
    "problem": "МКД"
  },
  {
    "address": "пр. Мира, 50а",
    "number": "50а",
    "coords": [
      56.012692,
      92.879144
    ],
    "status": "green",
    "photo": "mira-50а",
    "problem": "МКД"
  },
  {
    "address": "пр. Мира, 51",
    "number": "51",
    "coords": [
      56.012018,
      92.874149
    ],
    "status": "yellow",
    "photo": "mira-51",
    "problem": "ОКН. Требуется ремонт первого этажа. Вопрос прорабатывают собственник и служба."
  },
  {
    "address": "пр. Мира, 49",
    "number": "49",
    "coords": [
      56.012043,
      92.874562
    ],
    "status": "green",
    "photo": "mira-49",
    "problem": "Нежилое здание со множеством собственников."
  },
  {
    "address": "пр. Мира, 47",
    "number": "47",
    "coords": [
      56.012053,
      92.875083
    ],
    "status": "red",
    "photo": "mira-47",
    "problem": "ОКН. Нежилое здание со множеством собственников. Требуется локальный ремонт 1-го этажа. Финансирование на ремонт имеется, ведутся работы по согласованию со службой ОКН."
  },
  {
    "address": "пр. Мира, 46",
    "number": "46",
    "coords": [
      56.012732,
      92.879997
    ],
    "status": "green",
    "photo": "mira-46",
    "problem": "ОКН. Нежилое здание. Краевая поликлиника"
  },
  {
    "address": "пр. Мира, 45",
    "number": "45",
    "coords": [
      56.012113,
      92.87547
    ],
    "status": "red",
    "photo": "mira-45",
    "problem": "Нежилое здание со множеством собственников. Требуется локальный ремонт. В плане на 2027 год."
  },
  {
    "address": "пр. Мира, 39",
    "number": "39",
    "coords": [
      56.012199,
      92.877446
    ],
    "status": "green",
    "photo": "mira-39",
    "problem": "МКД"
  },
  {
    "address": "пр. Мира, 37",
    "number": "37",
    "coords": [
      56.012244,
      92.878416
    ],
    "status": "red",
    "photo": "mira-37",
    "problem": "ОКН. ТФ геологической информации по Сиб.округу. Требуется локальный ремонт. Финансирование отсутствует."
  },
  {
    "address": "пр. Мира, 36",
    "number": "36",
    "coords": [
      56.012949,
      92.882153
    ],
    "status": "green",
    "photo": "mira-36",
    "problem": "Нежилое здание со множеством собственников."
  },
  {
    "address": "пр. Мира, 35",
    "number": "35",
    "coords": [
      56.012285,
      92.879907
    ],
    "status": "red",
    "photo": "mira-35",
    "problem": "ОКН. Нежилое здание. Медэкспертиза. Требуется локальный ремонт. Финансирование отсутствует."
  },
  {
    "address": "пр. Мира, 35/19",
    "number": "35/19",
    "coords": [
      56.01228,
      92.880348
    ],
    "status": "green",
    "photo": "mira-35-19",
    "problem": ""
  },
  {
    "address": "пр. Мира, 34",
    "number": "34",
    "coords": [
      56.012899,
      92.883186
    ],
    "status": "green",
    "photo": "mira-34",
    "problem": "Нежилое здание. Министерство соцполитики"
  },
  {
    "address": "пр. Мира, 32",
    "number": "32",
    "coords": [
      56.013125,
      92.88377
    ],
    "status": "green",
    "photo": "mira-32",
    "problem": "Нежилое здание. Краевая прокуратура"
  },
  {
    "address": "пр. Мира, 30",
    "number": "30",
    "coords": [
      56.012989,
      92.884839
    ],
    "status": "green",
    "photo": "mira-30",
    "problem": "Нежилое здание со множеством собственников."
  },
  {
    "address": "пр. Мира, 29",
    "number": "29",
    "coords": [
      56.012425,
      92.881947
    ],
    "status": "green",
    "photo": "mira-29",
    "problem": "Нежилое здание со множеством собственников."
  },
  {
    "address": "пр. Мира, 27 стр. 1",
    "number": "27 стр. 1",
    "coords": [
      56.012405,
      92.882378
    ],
    "status": "green",
    "photo": "mira-27-1",
    "problem": ""
  },
  {
    "address": "пр. Мира, 27",
    "number": "27",
    "coords": [
      56.012501,
      92.8828
    ],
    "status": "green",
    "photo": "mira-27",
    "problem": "Нежилое здание со множеством собственников."
  },
  {
    "address": "пр. Мира, 26",
    "number": "26",
    "coords": [
      56.013165,
      92.885603
    ],
    "status": "green",
    "photo": "mira-26",
    "problem": "МКД"
  },
  {
    "address": "пр. Мира, 25",
    "number": "25",
    "coords": [
      56.01238,
      92.883546
    ],
    "status": "green",
    "photo": "mira-25",
    "problem": "Нежилое административное здание."
  },
  {
    "address": "пр. Мира, 24",
    "number": "24",
    "coords": [
      56.013095,
      92.886294
    ],
    "status": "green",
    "photo": "mira-24",
    "problem": ""
  },
  {
    "address": "пр. Мира, 22",
    "number": "22",
    "coords": [
      56.01307,
      92.886968
    ],
    "status": "green",
    "photo": "mira-22",
    "problem": "МКД"
  },
  {
    "address": "пр. Мира, 20",
    "number": "20",
    "coords": [
      56.013236,
      92.887678
    ],
    "status": "red",
    "photo": "mira-20",
    "problem": "Нежилое здание. Кр.краевой противотурберк. диспансер."
  },
  {
    "address": "пр. Мира, 19 стр. 1",
    "number": "19 стр. 1",
    "coords": [
      56.012511,
      92.88439
    ],
    "status": "green",
    "photo": "mira-19-1",
    "problem": ""
  },
  {
    "address": "пр. Мира, 19",
    "number": "19",
    "coords": [
      56.012642,
      92.885558
    ],
    "status": "green",
    "photo": "mira-19",
    "problem": "Нежилое здание. Краскон"
  },
  {
    "address": "пр. Мира, 17",
    "number": "17",
    "coords": [
      56.012103,
      92.887049
    ],
    "status": "green",
    "photo": "mira-17",
    "problem": "Нежилое здание. Краевой суд."
  },
  {
    "address": "пр. Мира, 16",
    "number": "16",
    "coords": [
      56.013165,
      92.888873
    ],
    "status": "yellow",
    "photo": "mira-16",
    "problem": "МКД"
  },
  {
    "address": "пр. Мира, 15",
    "number": "15",
    "coords": [
      56.012461,
      92.888154
    ],
    "status": "green",
    "photo": "mira-15",
    "problem": "Нежилое здание. Гостиница Октябрьская."
  },
  {
    "address": "пр. Мира, 14",
    "number": "14",
    "coords": [
      56.013231,
      92.889483
    ],
    "status": "green",
    "photo": "mira-14",
    "problem": "ОКН. Нежилое здание. Советник"
  },
  {
    "address": "пр. Мира, 12",
    "number": "12",
    "coords": [
      56.013477,
      92.890561
    ],
    "status": "yellow",
    "photo": "mira-12",
    "problem": "МКД"
  },
  {
    "address": "пр. Мира, 10",
    "number": "10",
    "coords": [
      56.013975,
      92.891388
    ],
    "status": "green",
    "photo": "mira-10",
    "problem": "Нежилое здание со множеством собственников."
  },
  {
    "address": "пр. Мира, 9",
    "number": "9",
    "coords": [
      56.012798,
      92.889259
    ],
    "status": "green",
    "photo": "mira-9",
    "problem": "Нежилое здание. Судебная коллегия."
  },
  {
    "address": "пр. Мира, 7а",
    "number": "7а",
    "coords": [
      56.012732,
      92.889942
    ],
    "status": "red",
    "photo": "mira-7a",
    "problem": "Часть нежилого здания и часть МКД. УК \"ЖСК\" Требуется локальный ремонт. Финансирование отсутствует."
  },
  {
    "address": "пр. Мира, 7",
    "number": "7",
    "coords": [
      56.012823,
      92.890606
    ],
    "status": "green",
    "photo": "mira-7",
    "problem": "МКД"
  },
  {
    "address": "пр. Мира, 5",
    "number": "5",
    "coords": [
      56.012954,
      92.891577
    ],
    "status": "red",
    "photo": "mira-5",
    "problem": "Нежилое здание. Профессорская клиника. Требуется локальный ремонт. Финансирование отсутствует."
  },
  {
    "address": "пр. Мира, 3",
    "number": "3",
    "coords": [
      56.012486,
      92.892457
    ],
    "status": "green",
    "photo": "mira-3",
    "problem": ""
  }
];
