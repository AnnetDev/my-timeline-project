export interface DetailSlide {
    year: number;
    description: string;
}

export interface MainSlide {
    title: string;
    startYear: number;
    endYear: number;
    details: DetailSlide[];
}

export const slidesData: MainSlide[] = [
    {
        title: "Технологии",
        startYear: 1980,
        endYear: 1986,
        details: [
            { year: 1980, description: "Sinclair Research выпускает домашний компьютер ZX80" },
            { year: 1981, description: "Выпущен IBM Personal Computer (IBM PC), положивший начало массовому использованию ПК" },
            { year: 1982, description: "Появился домашний компьютер ZX Spectrum, выпущенный британской компанией Sinclair Research" },
            { year: 1983, description: "Компания Microsoft анонсирует первую версию Windows" },
            { year: 1984, description: "Apple выпускает первый Macintosh, персональный компьютер с графическим интерфейсом" },
            { year: 1985, description: "Nintendo выпускает Nintendo Entertainment System (NES) в США" }
        ]
    },
    {
        title: "Кино",
        startYear: 1987,
        endYear: 1991,
        details: [
            { year: 1987, description: "«Хищник» / Predator, США (режиссёр: Джон Мактирнан)" },
            { year: 1988, description: "«Кто подставил кролика Роджера» / Who Framed Roger Rabbit, США (режиссёр: Роберт Земекис)" },
            { year: 1989, description: "«Назад в будущее 2» / Back to the Future Part II, США (режиссёр: Роберт Земекис)" },
            { year: 1990, description: "«Крепкий орешек 2» / Die Hard 2, США (режиссёр: Ренни Харлин)" },
            { year: 1991, description: "«Семейка Аддамс» / The Addams Family, США (режиссёр: Барри Зонненфельд)" }
        ]
    },
    {
        title: "Литература",
        startYear: 1992,
        endYear: 1997,
        details: [
            { year: 1992, description: "Нобелевская премия по литературе: Дерек Уолкотт, «за блестящий образец карибского эпоса в 64 разделах" },
            { year: 1994, description: "Роман «Бессонница» (Insomnia) — Стивен Кинг" },
            { year: 1995, description: "Нобелевская премия по литературе: Шеймас Хини (Ирландия)" },
            { year: 1997, description: "Выход первой книги серии о Гарри Поттере: «Гарри Поттер и философский камень» (J.K. Rowling)" }
        ]
    },
    {
        title: "Театр",
        startYear: 1999,
        endYear: 2004,
        details: [
            { year: 1999, description: "Премьера балета «Золушка» в постановке Жан-Кристофа Майо, сценография Эрнеста Пиньона" },
            { year: 2000, description: "Возобновлено издание журнала «Театр»" },
            { year: 2002, description: "Премьера трилогии Тома Стоппарда «Берег утопии» в Королевском национальном театре, Лондон" },
            { year: 2003, description: "Премьера спектакля «Магбет» с Патриком Стюартом в главной роли в Chichester Festival Theatre" },
            { year: 2004, description: "Театр National Theatre запускает проект NT Live — прямые трансляции спектаклей в кинотеатрах по всему миру" }
        ]
    },
    {
        title: "Спорт",
        startYear: 2006,
        endYear: 2014,
        details: [
            { year: 2006, description: "Баскетбольный клуб ЦСКА стал победителем национального первенства России" },
            { year: 2008, description: "С 8 по 24 августа в Пекине прошли XXIX летние Олимпийские игры" },
            { year: 2010, description: "С 13 по 28 февраля в Ванкувере прошли зимние Олимпийские игры 2010 года" },
            { year: 2012, description: "С 27 июля по 12 августа в Лондоне прошли XXX летние Олимпийские игры" },
            { year: 2014, description: "С 7 по 23 февраля в Сочи прошли XXII зимние Олимпийские игры (Россия)" }
        ]
    },
    {
        title: "Наука",
        startYear: 2015,
        endYear: 2022,
        details: [
            { year: 2015, description: "13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды" },
            { year: 2016, description: "Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11" },
            { year: 2017, description: "Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi" },
            { year: 2018, description: "Старт космического аппарата Parker Solar Probe, предназначенного для изучения Солнца" },
            { year: 2019, description: "Google объявила о создании 53-кубитного квантового компьютера и достижении квантового превосходства" },
            { year: 2020, description: "Корабль Crew Dragon компании SpaceX вернулся на Землю после первого пилотируемого полёта" },
            { year: 2021, description: "Телескоп James Webb Space Telescope успешно запущен 25 декабря" },
            { year: 2022, description: "Первые снимки Вселенной от телескопа James Webb, открытие экзопланет и ранних галактик" }
        ]
    }
];
