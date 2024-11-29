const  sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
    login: {type: DataTypes.STRING, unique: true}, //Логин
    password: {type: DataTypes.STRING}, // Пароль
    name: {type: DataTypes.STRING}, //Имя владельца учетки
    surname: {type: DataTypes.STRING}, //Фамилия
    phone_number: {type: DataTypes.INTEGER}, //Номер телефона
    //-------------- Данные для вывода информации и навигации в приложении -------------------
    role: {type: DataTypes.STRING}, //Роль в системе
    sector: {type: DataTypes.STRING}, // В каком секторе работает (Присадка, Поклейка и тд)
    line: {type: DataTypes.STRING}, // В каком линии работает
    workplace: {type: DataTypes.STRING}, // Рабочее место юзера (если станок то какой, на основе этого будет выдаваться страница)
    visibility: {type: DataTypes.BOOLEAN, defaultValue: true}, // Возможность отключить учетку
//    Связь с  таблицей ролей
})

const Role_user = sequelize.define('role_user', {
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
    role: {type: DataTypes.STRING}, // Роль
    visibility: {type: DataTypes.BOOLEAN, defaultValue: true}, // Возможность отключить учетку
})

const Buffer = sequelize.define('buffer',{
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
    cell_number:{type: DataTypes.STRING, unique: true},
    freeness:{type: DataTypes.BOOLEAN, default: true}
})

const Znp = sequelize.define('znp',{
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true}, //Id
    znp_number:{type: DataTypes.STRING}, // Знп
    model:{type: DataTypes.STRING}, // Модель
    edging:{type: DataTypes.STRING}, // Кромка

    //===========================Процент выполнения знп на каждом участке =============================================
    cutting_znp: {type: DataTypes.INTEGER},//Раскрой
    pasting_znp: {type: DataTypes.INTEGER},//Поклейка
    additive_znp: {type: DataTypes.INTEGER},//Присадка
    format_znp: {type: DataTypes.INTEGER},// Форматка
    curvilinear_znp: {type: DataTypes.INTEGER},//Криволинейка
    universal_znp: {type: DataTypes.INTEGER},//Универсал
    cutting_corners_znp: {type: DataTypes.INTEGER},//Вырезка углов
    milling_znp: {type: DataTypes.INTEGER},// Фрезеровка
    film_pasting_znp: {type: DataTypes.INTEGER},//Оклейка пленкой МДФ
    assembly_znp: {type: DataTypes.INTEGER},// Сборка 2
    accessories_znp: {type: DataTypes.INTEGER},// Комплектация фурнитуры
    styrofoam_znp: {type: DataTypes.INTEGER},// Резка пенопласта
    cutting_cardboard_znp: {type: DataTypes.INTEGER},// Резка картона
    rolling_cardboard_znp: {type: DataTypes.INTEGER},//Проката картона
    package_znp: {type: DataTypes.INTEGER},//Упаковка
    dop_accessories_znp: {type: DataTypes.INTEGER},// Доп фурнитура

    closing_date_znp:{type: DataTypes.STRING}, //дата закрытия знп
    visibility: {type: DataTypes.BOOLEAN, defaultValue: true} // видимость знп
})

const Znp_data = sequelize.define('znp_data',{
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true}, //Id
    number_opening: {type: DataTypes.INTEGER}, //Номер части по раскрою
    part: {type: DataTypes.STRING},// Тип детали
    color: {type: DataTypes.STRING},// Цвет
    part_name: {type: DataTypes.STRING},// Название детали
    qluing_line: {type: DataTypes.STRING},// Линия поклейки
    semiproduct: {type: DataTypes.STRING},// Полуфабрикат
    assembling: {type: DataTypes.STRING},// Сборка
    packaging: {type: DataTypes.STRING},// Принадлежность к упаковке
    cut_size: {type: DataTypes.STRING},// Размер распила
    size_requiried: {type: DataTypes.STRING},// Требуемы размер распила
    gluing_scheme: {type: DataTypes.STRING},// Схема поклейки 1
    dop_gluing_scheme: {type: DataTypes.STRING},// Схема поклейки 1
    groove: {type: DataTypes.STRING},// Паз

    //========================= Участки ================================
    cutting_bool: {type: DataTypes.BOOLEAN},//Раскрой
    pasting_bool: {type: DataTypes.BOOLEAN},//Поклейка
    additive_bool: {type: DataTypes.BOOLEAN},//Присадка
    format_bool: {type: DataTypes.BOOLEAN},// Форматка
    curvilinear_bool: {type: DataTypes.BOOLEAN},//Криволинейка
    universal_bool: {type: DataTypes.BOOLEAN},//Универсал
    cutting_corners_bool: {type: DataTypes.BOOLEAN},//Вырезка углов
    milling_bool: {type: DataTypes.BOOLEAN},// Фрезеровка
    film_pasting_bool: {type: DataTypes.BOOLEAN},//Оклейка пленкой МДФ
    assembly_bool: {type: DataTypes.BOOLEAN},// Сборка 2
    accessories_bool: {type: DataTypes.BOOLEAN},// Комплектация фурнитуры
    styrofoam_bool: {type: DataTypes.BOOLEAN},// Резка пенопласта
    cutting_cardboard_bool: {type: DataTypes.BOOLEAN},// Резка картона
    rolling_cardboard_bool: {type: DataTypes.BOOLEAN},//Проката картона
    package_bool: {type: DataTypes.BOOLEAN},//Упаковка
    dop_accessories_bool: {type: DataTypes.BOOLEAN},// Доп фурнитура

//========================= Детали, палеты ===================================================
    details_after_cutting: {type: DataTypes.INTEGER},// Sед. детали после распила, м.кв.
    quantity_pallet: {type: DataTypes.INTEGER},// опт кол-во на поддоне с кратностью 35
    sum_number_parts: {type: DataTypes.INTEGER},// Общее кол деталей
    number_pallets: {type: DataTypes.INTEGER},// кол-во паллет
    quantity: {type: DataTypes.INTEGER},// с кол-вом
    dop_number_pallets: {type: DataTypes.INTEGER},// доп кол-во паллет
    dop_quantity: {type: DataTypes.INTEGER},//с кол-вом
    real_number_parts: {type: DataTypes.INTEGER},// Реальное кол деталей которое сделали

//+++++++++++++++++++ Палет 1 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    number_of_pallets_1:{type: DataTypes.INTEGER},// Палет 1 количество
    address_pallet_1: {type: DataTypes.STRING},// Адрес палета 1
    machine_pallet_pasting_1:{type: DataTypes.STRING},// Станок палета поклейка 1
    machine_pallet_additive_1:{type: DataTypes.STRING},// Станок палета присадка 1
    //-------------- Маркеры для анализа этапов-------------------
    ready_palet_1: {type: DataTypes.BOOLEAN}, // Готовность палета  (если деталей нету или сделали 0 то он убирается из расчета этапов)
    cutting_ready_palet_1: {type: DataTypes.BOOLEAN, defaultValue: false},//Раскрой
    pasting_ready_palet_1: {type: DataTypes.BOOLEAN, defaultValue: false},//Поклейка
    additive_ready_palet_1: {type: DataTypes.BOOLEAN, defaultValue: false},//Присадка
    format_ready_palet_1: {type: DataTypes.BOOLEAN, defaultValue: false},// Форматка
    curvilinear_ready_palet_1: {type: DataTypes.BOOLEAN, defaultValue: false},//Криволинейка
    universal_ready_palet_1: {type: DataTypes.BOOLEAN, defaultValue: false},//Универсал
    cutting_corners_ready_palet_1: {type: DataTypes.BOOLEAN, defaultValue: false},//Вырезка углов
    milling_ready_palet_1: {type: DataTypes.BOOLEAN, defaultValue: false},// Фрезеровка
    film_pasting_ready_palet_1: {type: DataTypes.BOOLEAN, defaultValue: false},//Оклейка пленкой МДФ
    assembly_ready_palet_1: {type: DataTypes.BOOLEAN, defaultValue: false},// Сборка 2
    accessories_ready_palet_1: {type: DataTypes.BOOLEAN, defaultValue: false},// Комплектация фурнитуры
    styrofoam_ready_palet_1: {type: DataTypes.BOOLEAN, defaultValue: false},// Резка пенопласта
    cutting_cardboard_ready_palet_1: {type: DataTypes.BOOLEAN, defaultValue: false},// Резка картона
    rolling_cardboard_ready_palet_1: {type: DataTypes.BOOLEAN, defaultValue: false},//Проката картона
    package_ready_palet_1: {type: DataTypes.BOOLEAN, defaultValue: false},//Упаковка
    dop_accessories_ready_palet_1: {type: DataTypes.BOOLEAN, defaultValue: false},// Доп фурнитура

//+++++++++++++++++++ Палет 2 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    number_of_pallets_2: {type: DataTypes.INTEGER},//Палет 2 количество
    address_pallet_2:{type: DataTypes.STRING},// Адрес палета 2
    machine_pallet_pasting_2:{type: DataTypes.STRING},// Станок палета поклейка 2
    machine_pallet_additive_2:{type: DataTypes.STRING},// Станок палета присадка 2
    //-------------- Маркеры для анализа этапов-------------------
    ready_palet_2: {type: DataTypes.BOOLEAN}, // Готовность палета  (если деталей нету или сделали 0 то он убирается из расчета этапов)
    cutting_ready_palet_2: {type: DataTypes.BOOLEAN, defaultValue: false},//Раскрой
    pasting_ready_palet_2: {type: DataTypes.BOOLEAN, defaultValue: false},//Поклейка
    additive_ready_palet_2: {type: DataTypes.BOOLEAN, defaultValue: false},//Присадка
    format_ready_palet_2: {type: DataTypes.BOOLEAN, defaultValue: false},// Форматка
    curvilinear_ready_palet_2: {type: DataTypes.BOOLEAN, defaultValue: false},//Криволинейка
    universal_ready_palet_2: {type: DataTypes.BOOLEAN, defaultValue: false},//Универсал
    cutting_corners_ready_palet_2: {type: DataTypes.BOOLEAN, defaultValue: false},//Вырезка углов
    milling_ready_palet_2: {type: DataTypes.BOOLEAN, defaultValue: false},// Фрезеровка
    film_pasting_ready_palet_2: {type: DataTypes.BOOLEAN, defaultValue: false},//Оклейка пленкой МДФ
    assembly_ready_palet_2: {type: DataTypes.BOOLEAN, defaultValue: false},// Сборка 2
    accessories_ready_palet_2: {type: DataTypes.BOOLEAN, defaultValue: false},// Комплектация фурнитуры
    styrofoam_ready_palet_2: {type: DataTypes.BOOLEAN, defaultValue: false},// Резка пенопласта
    cutting_cardboard_ready_palet_2: {type: DataTypes.BOOLEAN, defaultValue: false},// Резка картона
    rolling_cardboard_ready_palet_2: {type: DataTypes.BOOLEAN, defaultValue: false},//Проката картона
    package_ready_palet_2: {type: DataTypes.BOOLEAN, defaultValue: false},//Упаковка
    dop_accessories_ready_palet_2: {type: DataTypes.BOOLEAN, defaultValue: false},// Доп фурнитура

//+++++++++++++++++++ Палет 3 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    number_of_pallets_3: {type: DataTypes.INTEGER},// Палет 3 количество
    address_pallet_3: {type: DataTypes.STRING},// Адрес палета 3
    machine_pallet_pasting_3:{type: DataTypes.STRING},// Станок палета поклейка 3
    machine_pallet_additive_3:{type: DataTypes.STRING},// Станок палета присадка 3
    //-------------- Маркеры для анализа этапов-------------------
    ready_palet_3: {type: DataTypes.BOOLEAN}, // Готовность палета  (если деталей нету или сделали 0 то он убирается из расчета этапов)
    cutting_ready_palet_3: {type: DataTypes.BOOLEAN, defaultValue: false},//Раскрой
    pasting_ready_palet_3: {type: DataTypes.BOOLEAN, defaultValue: false},//Поклейка
    additive_ready_palet_3: {type: DataTypes.BOOLEAN, defaultValue: false},//Присадка
    format_ready_palet_3: {type: DataTypes.BOOLEAN, defaultValue: false},// Форматка
    curvilinear_ready_palet_3: {type: DataTypes.BOOLEAN, defaultValue: false},//Криволинейка
    universal_ready_palet_3: {type: DataTypes.BOOLEAN, defaultValue: false},//Универсал
    cutting_corners_ready_palet_3: {type: DataTypes.BOOLEAN, defaultValue: false},//Вырезка углов
    milling_ready_palet_3: {type: DataTypes.BOOLEAN, defaultValue: false},// Фрезеровка
    film_pasting_ready_palet_3: {type: DataTypes.BOOLEAN, defaultValue: false},//Оклейка пленкой МДФ
    assembly_ready_palet_3: {type: DataTypes.BOOLEAN, defaultValue: false},// Сборка 2
    accessories_ready_palet_3: {type: DataTypes.BOOLEAN, defaultValue: false},// Комплектация фурнитуры
    styrofoam_ready_palet_3: {type: DataTypes.BOOLEAN, defaultValue: false},// Резка пенопласта
    cutting_cardboard_ready_palet_3: {type: DataTypes.BOOLEAN, defaultValue: false},// Резка картона
    rolling_cardboard_ready_palet_3: {type: DataTypes.BOOLEAN, defaultValue: false},//Проката картона
    package_ready_palet_3: {type: DataTypes.BOOLEAN, defaultValue: false},//Упаковка
    dop_accessories_ready_palet_3: {type: DataTypes.BOOLEAN, defaultValue: false},// Доп фурнитура

//+++++++++++++++++++ Палет 4 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    number_of_pallets_4: {type: DataTypes.INTEGER},// Палет 4 количество
    address_pallet_4: {type: DataTypes.STRING},// Адрес палета 4
    machine_pallet_pasting_4:{type: DataTypes.STRING},// Станок палета поклейка 4
    machine_pallet_additive_4:{type: DataTypes.STRING},// Станок палета присадка 4
    //-------------- Маркеры для анализа этапов-------------------
    ready_palet_4: {type: DataTypes.BOOLEAN}, // Готовность палета  (если деталей нету или сделали 0 то он убирается из расчета этапов)
    cutting_ready_palet_4: {type: DataTypes.BOOLEAN, defaultValue: false},//Раскрой
    pasting_ready_palet_4: {type: DataTypes.BOOLEAN, defaultValue: false},//Поклейка
    additive_ready_palet_4: {type: DataTypes.BOOLEAN, defaultValue: false},//Присадка
    format_ready_palet_4: {type: DataTypes.BOOLEAN, defaultValue: false},// Форматка
    curvilinear_ready_palet_4: {type: DataTypes.BOOLEAN, defaultValue: false},//Криволинейка
    universal_ready_palet_4: {type: DataTypes.BOOLEAN, defaultValue: false},//Универсал
    cutting_corners_ready_palet_4: {type: DataTypes.BOOLEAN, defaultValue: false},//Вырезка углов
    milling_ready_palet_4: {type: DataTypes.BOOLEAN, defaultValue: false},// Фрезеровка
    film_pasting_ready_palet_4: {type: DataTypes.BOOLEAN, defaultValue: false},//Оклейка пленкой МДФ
    assembly_ready_palet_4: {type: DataTypes.BOOLEAN, defaultValue: false},// Сборка 2
    accessories_ready_palet_4: {type: DataTypes.BOOLEAN, defaultValue: false},// Комплектация фурнитуры
    styrofoam_ready_palet_4: {type: DataTypes.BOOLEAN, defaultValue: false},// Резка пенопласта
    cutting_cardboard_ready_palet_4: {type: DataTypes.BOOLEAN, defaultValue: false},// Резка картона
    rolling_cardboard_ready_palet_4: {type: DataTypes.BOOLEAN, defaultValue: false},//Проката картона
    package_ready_palet_4: {type: DataTypes.BOOLEAN, defaultValue: false},//Упаковка
    dop_accessories_ready_palet_4: {type: DataTypes.BOOLEAN, defaultValue: false},// Доп фурнитура

//+++++++++++++++++++ Палет 5 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    number_of_pallets_5: {type: DataTypes.INTEGER},// Палет 5 количество
    address_pallet_5: {type: DataTypes.STRING},// Адрес палета 5
    machine_pallet_pasting_5:{type: DataTypes.STRING},// Станок палета поклейка 5
    machine_pallet_additive_5:{type: DataTypes.STRING},// Станок палета присадка 5
    //-------------- Маркеры для анализа этапов-------------------
    ready_palet_5: {type: DataTypes.BOOLEAN}, // Готовность палета  (если деталей нету или сделали 0 то он убирается из расчета этапов)
    cutting_ready_palet_5: {type: DataTypes.BOOLEAN, defaultValue: false},//Раскрой
    pasting_ready_palet_5: {type: DataTypes.BOOLEAN, defaultValue: false},//Поклейка
    additive_ready_palet_5: {type: DataTypes.BOOLEAN, defaultValue: false},//Присадка
    format_ready_palet_5: {type: DataTypes.BOOLEAN, defaultValue: false},// Форматка
    curvilinear_ready_palet_5: {type: DataTypes.BOOLEAN, defaultValue: false},//Криволинейка
    universal_ready_palet_5: {type: DataTypes.BOOLEAN, defaultValue: false},//Универсал
    cutting_corners_ready_palet_5: {type: DataTypes.BOOLEAN, defaultValue: false},//Вырезка углов
    milling_ready_palet_5: {type: DataTypes.BOOLEAN, defaultValue: false},// Фрезеровка
    film_pasting_ready_palet_5: {type: DataTypes.BOOLEAN, defaultValue: false},//Оклейка пленкой МДФ
    assembly_ready_palet_5: {type: DataTypes.BOOLEAN, defaultValue: false},// Сборка 2
    accessories_ready_palet_5: {type: DataTypes.BOOLEAN, defaultValue: false},// Комплектация фурнитуры
    styrofoam_ready_palet_5: {type: DataTypes.BOOLEAN, defaultValue: false},// Резка пенопласта
    cutting_cardboard_ready_palet_5: {type: DataTypes.BOOLEAN, defaultValue: false},// Резка картона
    rolling_cardboard_ready_palet_5: {type: DataTypes.BOOLEAN, defaultValue: false},//Проката картона
    package_ready_palet_5: {type: DataTypes.BOOLEAN, defaultValue: false},//Упаковка
    dop_accessories_ready_palet_5: {type: DataTypes.BOOLEAN, defaultValue: false},// Доп фурнитура

//+++++++++++++++++++ Палет 6 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    number_of_pallets_6: {type: DataTypes.INTEGER},// Палет 6 количество
    address_pallet_6: {type: DataTypes.STRING},// Адрес палета 6
    machine_pallet_pasting_6:{type: DataTypes.STRING},// Станок палета поклейка 6
    machine_pallet_additive_6:{type: DataTypes.STRING},// Станок палета присадка 6
    //-------------- Маркеры для анализа этапов-------------------
    ready_palet_6: {type: DataTypes.BOOLEAN}, // Готовность палета  (если деталей нету или сделали 0 то он убирается из расчета этапов)
    cutting_ready_palet_6: {type: DataTypes.BOOLEAN, defaultValue: false},//Раскрой
    pasting_ready_palet_6: {type: DataTypes.BOOLEAN, defaultValue: false},//Поклейка
    additive_ready_palet_6: {type: DataTypes.BOOLEAN, defaultValue: false},//Присадка
    format_ready_palet_6: {type: DataTypes.BOOLEAN, defaultValue: false},// Форматка
    curvilinear_ready_palet_6: {type: DataTypes.BOOLEAN, defaultValue: false},//Криволинейка
    universal_ready_palet_6: {type: DataTypes.BOOLEAN, defaultValue: false},//Универсал
    cutting_corners_ready_palet_6: {type: DataTypes.BOOLEAN, defaultValue: false},//Вырезка углов
    milling_ready_palet_6: {type: DataTypes.BOOLEAN, defaultValue: false},// Фрезеровка
    film_pasting_ready_palet_6: {type: DataTypes.BOOLEAN, defaultValue: false},//Оклейка пленкой МДФ
    assembly_ready_palet_6: {type: DataTypes.BOOLEAN, defaultValue: false},// Сборка 2
    accessories_ready_palet_6: {type: DataTypes.BOOLEAN, defaultValue: false},// Комплектация фурнитуры
    styrofoam_ready_palet_6: {type: DataTypes.BOOLEAN, defaultValue: false},// Резка пенопласта
    cutting_cardboard_ready_palet_6: {type: DataTypes.BOOLEAN, defaultValue: false},// Резка картона
    rolling_cardboard_ready_palet_6: {type: DataTypes.BOOLEAN, defaultValue: false},//Проката картона
    package_ready_palet_6: {type: DataTypes.BOOLEAN, defaultValue: false},//Упаковка
    dop_accessories_ready_palet_6: {type: DataTypes.BOOLEAN, defaultValue: false},// Доп фурнитура

//+++++++++++++++++++ Палет 7 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    number_of_pallets_7: {type: DataTypes.INTEGER},// Палет 7 количество
    address_pallet_7: {type: DataTypes.STRING},// Адрес палета 7
    machine_pallet_pasting_7:{type: DataTypes.STRING},// Станок палета поклейка 7
    machine_pallet_additive_7:{type: DataTypes.STRING},// Станок палета присадка 7
    //-------------- Маркеры для анализа этапов-------------------
    ready_palet_7: {type: DataTypes.BOOLEAN}, // Готовность палета  (если деталей нету или сделали 0 то он убирается из расчета этапов)
    cutting_ready_palet_7: {type: DataTypes.BOOLEAN, defaultValue: false},//Раскрой
    pasting_ready_palet_7: {type: DataTypes.BOOLEAN, defaultValue: false},//Поклейка
    additive_ready_palet_7: {type: DataTypes.BOOLEAN, defaultValue: false},//Присадка
    format_ready_palet_7: {type: DataTypes.BOOLEAN, defaultValue: false},// Форматка
    curvilinear_ready_palet_7: {type: DataTypes.BOOLEAN, defaultValue: false},//Криволинейка
    universal_ready_palet_7: {type: DataTypes.BOOLEAN, defaultValue: false},//Универсал
    cutting_corners_ready_palet_7: {type: DataTypes.BOOLEAN, defaultValue: false},//Вырезка углов
    milling_ready_palet_7: {type: DataTypes.BOOLEAN, defaultValue: false},// Фрезеровка
    film_pasting_ready_palet_7: {type: DataTypes.BOOLEAN, defaultValue: false},//Оклейка пленкой МДФ
    assembly_ready_palet_7: {type: DataTypes.BOOLEAN, defaultValue: false},// Сборка 2
    accessories_ready_palet_7: {type: DataTypes.BOOLEAN, defaultValue: false},// Комплектация фурнитуры
    styrofoam_ready_palet_7: {type: DataTypes.BOOLEAN, defaultValue: false},// Резка пенопласта
    cutting_cardboard_ready_palet_7: {type: DataTypes.BOOLEAN, defaultValue: false},// Резка картона
    rolling_cardboard_ready_palet_7: {type: DataTypes.BOOLEAN, defaultValue: false},//Проката картона
    package_ready_palet_7: {type: DataTypes.BOOLEAN, defaultValue: false},//Упаковка
    dop_accessories_ready_palet_7: {type: DataTypes.BOOLEAN, defaultValue: false},// Доп фурнитура

//+++++++++++++++++++ Палет 8 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    number_of_pallets_8: {type: DataTypes.INTEGER},// Палет 8 количество
    address_pallet_8: {type: DataTypes.STRING},// Адрес палета 8
    machine_pallet_pasting_8:{type: DataTypes.STRING},// Станок палета поклейка 8
    machine_pallet_additive_8:{type: DataTypes.STRING},// Станок палета присадка 8
    //-------------- Маркеры для анализа этапов-------------------
    ready_palet_8: {type: DataTypes.BOOLEAN}, // Готовность палета  (если деталей нету или сделали 0 то он убирается из расчета этапов)
    cutting_ready_palet_8: {type: DataTypes.BOOLEAN, defaultValue: false},//Раскрой
    pasting_ready_palet_8: {type: DataTypes.BOOLEAN, defaultValue: false},//Поклейка
    additive_ready_palet_8: {type: DataTypes.BOOLEAN, defaultValue: false},//Присадка
    format_ready_palet_8: {type: DataTypes.BOOLEAN, defaultValue: false},// Форматка
    curvilinear_ready_palet_8: {type: DataTypes.BOOLEAN, defaultValue: false},//Криволинейка
    universal_ready_palet_8: {type: DataTypes.BOOLEAN, defaultValue: false},//Универсал
    cutting_corners_ready_palet_8: {type: DataTypes.BOOLEAN, defaultValue: false},//Вырезка углов
    milling_ready_palet_8: {type: DataTypes.BOOLEAN, defaultValue: false},// Фрезеровка
    film_pasting_ready_palet_8: {type: DataTypes.BOOLEAN, defaultValue: false},//Оклейка пленкой МДФ
    assembly_ready_palet_8: {type: DataTypes.BOOLEAN, defaultValue: false},// Сборка 2
    accessories_ready_palet_8: {type: DataTypes.BOOLEAN, defaultValue: false},// Комплектация фурнитуры
    styrofoam_ready_palet_8: {type: DataTypes.BOOLEAN, defaultValue: false},// Резка пенопласта
    cutting_cardboard_ready_palet_8: {type: DataTypes.BOOLEAN, defaultValue: false},// Резка картона
    rolling_cardboard_ready_palet_8: {type: DataTypes.BOOLEAN, defaultValue: false},//Проката картона
    package_ready_palet_8: {type: DataTypes.BOOLEAN, defaultValue: false},//Упаковка
    dop_accessories_ready_palet_8: {type: DataTypes.BOOLEAN, defaultValue: false},// Доп фурнитура

//+++++++++++++++++++ Палет 9 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    number_of_pallets_9: {type: DataTypes.INTEGER},// Палет 9 количество
    address_pallet_9: {type: DataTypes.STRING},// Адрес палета 9
    machine_pallet_pasting_9:{type: DataTypes.STRING},// Станок палета поклейка 9
    machine_pallet_additive_9:{type: DataTypes.STRING},// Станок палета присадка 9
    //-------------- Маркеры для анализа этапов-------------------
    ready_palet_9: {type: DataTypes.BOOLEAN}, // Готовность палета  (если деталей нету или сделали 0 то он убирается из расчета этапов)
    cutting_ready_palet_9: {type: DataTypes.BOOLEAN, defaultValue: false},//Раскрой
    pasting_ready_palet_9: {type: DataTypes.BOOLEAN, defaultValue: false},//Поклейка
    additive_ready_palet_9: {type: DataTypes.BOOLEAN, defaultValue: false},//Присадка
    format_ready_palet_9: {type: DataTypes.BOOLEAN, defaultValue: false},// Форматка
    curvilinear_ready_palet_9: {type: DataTypes.BOOLEAN, defaultValue: false},//Криволинейка
    universal_ready_palet_9: {type: DataTypes.BOOLEAN, defaultValue: false},//Универсал
    cutting_corners_ready_palet_9: {type: DataTypes.BOOLEAN, defaultValue: false},//Вырезка углов
    milling_ready_palet_9: {type: DataTypes.BOOLEAN, defaultValue: false},// Фрезеровка
    film_pasting_ready_palet_9: {type: DataTypes.BOOLEAN, defaultValue: false},//Оклейка пленкой МДФ
    assembly_ready_palet_9: {type: DataTypes.BOOLEAN, defaultValue: false},// Сборка 2
    accessories_ready_palet_9: {type: DataTypes.BOOLEAN, defaultValue: false},// Комплектация фурнитуры
    styrofoam_ready_palet_9: {type: DataTypes.BOOLEAN, defaultValue: false},// Резка пенопласта
    cutting_cardboard_ready_palet_9: {type: DataTypes.BOOLEAN, defaultValue: false},// Резка картона
    rolling_cardboard_ready_palet_9: {type: DataTypes.BOOLEAN, defaultValue: false},//Проката картона
    package_ready_palet_9: {type: DataTypes.BOOLEAN, defaultValue: false},//Упаковка
    dop_accessories_ready_palet_9: {type: DataTypes.BOOLEAN, defaultValue: false},// Доп фурнитура

//+++++++++++++++++++ Палет 10 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    number_of_pallets_10: {type: DataTypes.INTEGER},// Палет 10 количество
    address_pallet_10: {type: DataTypes.STRING},// Адрес палета 10
    machine_pallet_pasting_10:{type: DataTypes.STRING},// Станок палета поклейка 10
    machine_pallet_additive_10:{type: DataTypes.STRING},// Станок палета присадка 10
    //-------------- Маркеры для анализа этапов-------------------
    ready_palet_10: {type: DataTypes.BOOLEAN}, // Готовность палета  (если деталей нету или сделали 0 то он убирается из расчета этапов)
    cutting_ready_palet_10: {type: DataTypes.BOOLEAN, defaultValue: false},//Раскрой
    pasting_ready_palet_10: {type: DataTypes.BOOLEAN, defaultValue: false},//Поклейка
    additive_ready_palet_10: {type: DataTypes.BOOLEAN, defaultValue: false},//Присадка
    format_ready_palet_10: {type: DataTypes.BOOLEAN, defaultValue: false},// Форматка
    curvilinear_ready_palet_10: {type: DataTypes.BOOLEAN, defaultValue: false},//Криволинейка
    universal_ready_palet_10: {type: DataTypes.BOOLEAN, defaultValue: false},//Универсал
    cutting_corners_ready_palet_10: {type: DataTypes.BOOLEAN, defaultValue: false},//Вырезка углов
    milling_ready_palet_10: {type: DataTypes.BOOLEAN, defaultValue: false},// Фрезеровка
    film_pasting_ready_palet_10: {type: DataTypes.BOOLEAN, defaultValue: false},//Оклейка пленкой МДФ
    assembly_ready_palet_10: {type: DataTypes.BOOLEAN, defaultValue: false},// Сборка 2
    accessories_ready_palet_10: {type: DataTypes.BOOLEAN, defaultValue: false},// Комплектация фурнитуры
    styrofoam_ready_palet_10: {type: DataTypes.BOOLEAN, defaultValue: false},// Резка пенопласта
    cutting_cardboard_ready_palet_10: {type: DataTypes.BOOLEAN, defaultValue: false},// Резка картона
    rolling_cardboard_ready_palet_10: {type: DataTypes.BOOLEAN, defaultValue: false},//Проката картона
    package_ready_palet_10: {type: DataTypes.BOOLEAN, defaultValue: false},//Упаковка
    dop_accessories_ready_palet_10: {type: DataTypes.BOOLEAN, defaultValue: false},// Доп фурнитура

//+++++++++++++++++++ Палет 11 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    number_of_pallets_11: {type: DataTypes.INTEGER},// Палет 11 количество
    address_pallet_11: {type: DataTypes.STRING},// Адрес палета 11
    machine_pallet_pasting_11:{type: DataTypes.STRING},// Станок палета поклейка 11
    machine_pallet_additive_11:{type: DataTypes.STRING},// Станок палета присадка 11
    //-------------- Маркеры для анализа этапов-------------------
    ready_palet_11: {type: DataTypes.BOOLEAN}, // Готовность палета  (если деталей нету или сделали 0 то он убирается из расчета этапов)
    cutting_ready_palet_11: {type: DataTypes.BOOLEAN, defaultValue: false},//Раскрой
    pasting_ready_palet_11: {type: DataTypes.BOOLEAN, defaultValue: false},//Поклейка
    additive_ready_palet_11: {type: DataTypes.BOOLEAN, defaultValue: false},//Присадка
    format_ready_palet_11: {type: DataTypes.BOOLEAN, defaultValue: false},// Форматка
    curvilinear_ready_palet_11: {type: DataTypes.BOOLEAN, defaultValue: false},//Криволинейка
    universal_ready_palet_11: {type: DataTypes.BOOLEAN, defaultValue: false},//Универсал
    cutting_corners_ready_palet_11: {type: DataTypes.BOOLEAN, defaultValue: false},//Вырезка углов
    milling_ready_palet_11: {type: DataTypes.BOOLEAN, defaultValue: false},// Фрезеровка
    film_pasting_ready_palet_11: {type: DataTypes.BOOLEAN, defaultValue: false},//Оклейка пленкой МДФ
    assembly_ready_palet_11: {type: DataTypes.BOOLEAN, defaultValue: false},// Сборка 2
    accessories_ready_palet_11: {type: DataTypes.BOOLEAN, defaultValue: false},// Комплектация фурнитуры
    styrofoam_ready_palet_11: {type: DataTypes.BOOLEAN, defaultValue: false},// Резка пенопласта
    cutting_cardboard_ready_palet_11: {type: DataTypes.BOOLEAN, defaultValue: false},// Резка картона
    rolling_cardboard_ready_palet_11: {type: DataTypes.BOOLEAN, defaultValue: false},//Проката картона
    package_ready_palet_11: {type: DataTypes.BOOLEAN, defaultValue: false},//Упаковка
    dop_accessories_ready_palet_11: {type: DataTypes.BOOLEAN, defaultValue: false},// Доп фурнитура

//+++++++++++++++++++ Палет 12 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    number_of_pallets_12: {type: DataTypes.INTEGER},// Палет 12 количество
    address_pallet_12: {type: DataTypes.STRING},// Адрес палета 12
    machine_pallet_pasting_12:{type: DataTypes.STRING},// Станок палета поклейка 12
    machine_pallet_additive_12:{type: DataTypes.STRING},// Станок палета присадка 12
    //-------------- Маркеры для анализа этапов-------------------
    ready_palet_12: {type: DataTypes.BOOLEAN}, // Готовность палета  (если деталей нету или сделали 0 то он убирается из расчета этапов)
    cutting_ready_palet_12: {type: DataTypes.BOOLEAN, defaultValue: false},//Раскрой
    pasting_ready_palet_12: {type: DataTypes.BOOLEAN, defaultValue: false},//Поклейка
    additive_ready_palet_12: {type: DataTypes.BOOLEAN, defaultValue: false},//Присадка
    format_ready_palet_12: {type: DataTypes.BOOLEAN, defaultValue: false},// Форматка
    curvilinear_ready_palet_12: {type: DataTypes.BOOLEAN, defaultValue: false},//Криволинейка
    universal_ready_palet_12: {type: DataTypes.BOOLEAN, defaultValue: false},//Универсал
    cutting_corners_ready_palet_12: {type: DataTypes.BOOLEAN, defaultValue: false},//Вырезка углов
    milling_ready_palet_12: {type: DataTypes.BOOLEAN, defaultValue: false},// Фрезеровка
    film_pasting_ready_palet_12: {type: DataTypes.BOOLEAN, defaultValue: false},//Оклейка пленкой МДФ
    assembly_ready_palet_12: {type: DataTypes.BOOLEAN, defaultValue: false},// Сборка 2
    accessories_ready_palet_12: {type: DataTypes.BOOLEAN, defaultValue: false},// Комплектация фурнитуры
    styrofoam_ready_palet_12: {type: DataTypes.BOOLEAN, defaultValue: false},// Резка пенопласта
    cutting_cardboard_ready_palet_12: {type: DataTypes.BOOLEAN, defaultValue: false},// Резка картона
    rolling_cardboard_ready_palet_12: {type: DataTypes.BOOLEAN, defaultValue: false},//Проката картона
    package_ready_palet_12: {type: DataTypes.BOOLEAN, defaultValue: false},//Упаковка
    dop_accessories_ready_palet_12: {type: DataTypes.BOOLEAN, defaultValue: false},// Доп фурнитура

//+++++++++++++++++++ Палет 13 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    number_of_pallets_13: {type: DataTypes.INTEGER},// Палет 13 количество
    address_pallet_13: {type: DataTypes.STRING},// Адрес палета 13
    machine_pallet_pasting_13:{type: DataTypes.STRING},// Станок палета поклейка 13
    machine_pallet_additive_13:{type: DataTypes.STRING},// Станок палета присадка 13
    //-------------- Маркеры для анализа этапов-------------------
    ready_palet_13: {type: DataTypes.BOOLEAN}, // Готовность палета  (если деталей нету или сделали 0 то он убирается из расчета этапов)
    cutting_ready_palet_13: {type: DataTypes.BOOLEAN, defaultValue: false},//Раскрой
    pasting_ready_palet_13: {type: DataTypes.BOOLEAN, defaultValue: false},//Поклейка
    additive_ready_palet_13: {type: DataTypes.BOOLEAN, defaultValue: false},//Присадка
    format_ready_palet_13: {type: DataTypes.BOOLEAN, defaultValue: false},// Форматка
    curvilinear_ready_palet_13: {type: DataTypes.BOOLEAN, defaultValue: false},//Криволинейка
    universal_ready_palet_13: {type: DataTypes.BOOLEAN, defaultValue: false},//Универсал
    cutting_corners_ready_palet_13: {type: DataTypes.BOOLEAN, defaultValue: false},//Вырезка углов
    milling_ready_palet_13: {type: DataTypes.BOOLEAN, defaultValue: false},// Фрезеровка
    film_pasting_ready_palet_13: {type: DataTypes.BOOLEAN, defaultValue: false},//Оклейка пленкой МДФ
    assembly_ready_palet_13: {type: DataTypes.BOOLEAN, defaultValue: false},// Сборка 2
    accessories_ready_palet_13: {type: DataTypes.BOOLEAN, defaultValue: false},// Комплектация фурнитуры
    styrofoam_ready_palet_13: {type: DataTypes.BOOLEAN, defaultValue: false},// Резка пенопласта
    cutting_cardboard_ready_palet_13: {type: DataTypes.BOOLEAN, defaultValue: false},// Резка картона
    rolling_cardboard_ready_palet_13: {type: DataTypes.BOOLEAN, defaultValue: false},//Проката картона
    package_ready_palet_13: {type: DataTypes.BOOLEAN, defaultValue: false},//Упаковка
    dop_accessories_ready_palet_13: {type: DataTypes.BOOLEAN, defaultValue: false},// Доп фурнитура


//+++++++++++++++++++ Палет 14 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    number_of_pallets_14: {type: DataTypes.INTEGER},// Палет 14 количество
    address_pallet_14: {type: DataTypes.STRING},// Адрес палета 14
    machine_pallet_pasting_14:{type: DataTypes.STRING},// Станок палета поклейка 14
    machine_pallet_additive_14:{type: DataTypes.STRING},// Станок палета присадка 14
    //-------------- Маркеры для анализа этапов-------------------
    ready_palet_14: {type: DataTypes.BOOLEAN}, // Готовность палета  (если деталей нету или сделали 0 то он убирается из расчета этапов)
    cutting_ready_palet_14: {type: DataTypes.BOOLEAN, defaultValue: false},//Раскрой
    pasting_ready_palet_14: {type: DataTypes.BOOLEAN, defaultValue: false},//Поклейка
    additive_ready_palet_14: {type: DataTypes.BOOLEAN, defaultValue: false},//Присадка
    format_ready_palet_14: {type: DataTypes.BOOLEAN, defaultValue: false},// Форматка
    curvilinear_ready_palet_14: {type: DataTypes.BOOLEAN, defaultValue: false},//Криволинейка
    universal_ready_palet_14: {type: DataTypes.BOOLEAN, defaultValue: false},//Универсал
    cutting_corners_ready_palet_14: {type: DataTypes.BOOLEAN, defaultValue: false},//Вырезка углов
    milling_ready_palet_14: {type: DataTypes.BOOLEAN, defaultValue: false},// Фрезеровка
    film_pasting_ready_palet_14: {type: DataTypes.BOOLEAN, defaultValue: false},//Оклейка пленкой МДФ
    assembly_ready_palet_14: {type: DataTypes.BOOLEAN, defaultValue: false},// Сборка 2
    accessories_ready_palet_14: {type: DataTypes.BOOLEAN, defaultValue: false},// Комплектация фурнитуры
    styrofoam_ready_palet_14: {type: DataTypes.BOOLEAN, defaultValue: false},// Резка пенопласта
    cutting_cardboard_ready_palet_14: {type: DataTypes.BOOLEAN, defaultValue: false},// Резка картона
    rolling_cardboard_ready_palet_14: {type: DataTypes.BOOLEAN, defaultValue: false},//Проката картона
    package_ready_palet_14: {type: DataTypes.BOOLEAN, defaultValue: false},//Упаковка
    dop_accessories_ready_palet_14: {type: DataTypes.BOOLEAN, defaultValue: false},// Доп фурнитура

//+++++++++++++++++++ Палет 15 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    number_of_pallets_15: {type: DataTypes.INTEGER},// Палет 15 количество
    address_pallet_15: {type: DataTypes.STRING},// Адрес палета 15
    machine_pallet_pasting_15:{type: DataTypes.STRING},// Станок палета поклейка 15
    machine_pallet_additive_15:{type: DataTypes.STRING},// Станок палета присадка 15
    //-------------- Маркеры для анализа этапов-------------------
    ready_palet_15: {type: DataTypes.BOOLEAN}, // Готовность палета  (если деталей нету или сделали 0 то он убирается из расчета этапов)
    cutting_ready_palet_15: {type: DataTypes.BOOLEAN, defaultValue: false},//Раскрой
    pasting_ready_palet_15: {type: DataTypes.BOOLEAN, defaultValue: false},//Поклейка
    additive_ready_palet_15: {type: DataTypes.BOOLEAN, defaultValue: false},//Присадка
    format_ready_palet_15: {type: DataTypes.BOOLEAN, defaultValue: false},// Форматка
    curvilinear_ready_palet_15: {type: DataTypes.BOOLEAN, defaultValue: false},//Криволинейка
    universal_ready_palet_15: {type: DataTypes.BOOLEAN, defaultValue: false},//Универсал
    cutting_corners_ready_palet_15: {type: DataTypes.BOOLEAN, defaultValue: false},//Вырезка углов
    milling_ready_palet_15: {type: DataTypes.BOOLEAN, defaultValue: false},// Фрезеровка
    film_pasting_ready_palet_15: {type: DataTypes.BOOLEAN, defaultValue: false},//Оклейка пленкой МДФ
    assembly_ready_palet_15: {type: DataTypes.BOOLEAN, defaultValue: false},// Сборка 2
    accessories_ready_palet_15: {type: DataTypes.BOOLEAN, defaultValue: false},// Комплектация фурнитуры
    styrofoam_ready_palet_15: {type: DataTypes.BOOLEAN, defaultValue: false},// Резка пенопласта
    cutting_cardboard_ready_palet_15: {type: DataTypes.BOOLEAN, defaultValue: false},// Резка картона
    rolling_cardboard_ready_palet_15: {type: DataTypes.BOOLEAN, defaultValue: false},//Проката картона
    package_ready_palet_15: {type: DataTypes.BOOLEAN, defaultValue: false},//Упаковка
    dop_accessories_ready_palet_15: {type: DataTypes.BOOLEAN, defaultValue: false},// Доп фурнитура

//+++++++++++++++++++ Палет 16 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    number_of_pallets_16: {type: DataTypes.INTEGER},// Палет 16 количество
    address_pallet_16: {type: DataTypes.STRING},// Адрес палета 16
    machine_pallet_pasting_16:{type: DataTypes.STRING},// Станок палета поклейка 16
    machine_pallet_additive_16:{type: DataTypes.STRING},// Станок палета присадка 16
    //-------------- Маркеры для анализа этапов-------------------
    ready_palet_16: {type: DataTypes.BOOLEAN}, // Готовность палета  (если деталей нету или сделали 0 то он убирается из расчета этапов)
    cutting_ready_palet_16: {type: DataTypes.BOOLEAN, defaultValue: false},//Раскрой
    pasting_ready_palet_16: {type: DataTypes.BOOLEAN, defaultValue: false},//Поклейка
    additive_ready_palet_16: {type: DataTypes.BOOLEAN, defaultValue: false},//Присадка
    format_ready_palet_16: {type: DataTypes.BOOLEAN, defaultValue: false},// Форматка
    curvilinear_ready_palet_16: {type: DataTypes.BOOLEAN, defaultValue: false},//Криволинейка
    universal_ready_palet_16: {type: DataTypes.BOOLEAN, defaultValue: false},//Универсал
    cutting_corners_ready_palet_16: {type: DataTypes.BOOLEAN, defaultValue: false},//Вырезка углов
    milling_ready_palet_16: {type: DataTypes.BOOLEAN, defaultValue: false},// Фрезеровка
    film_pasting_ready_palet_16: {type: DataTypes.BOOLEAN, defaultValue: false},//Оклейка пленкой МДФ
    assembly_ready_palet_16: {type: DataTypes.BOOLEAN, defaultValue: false},// Сборка 2
    accessories_ready_palet_16: {type: DataTypes.BOOLEAN, defaultValue: false},// Комплектация фурнитуры
    styrofoam_ready_palet_16: {type: DataTypes.BOOLEAN, defaultValue: false},// Резка пенопласта
    cutting_cardboard_ready_palet_16: {type: DataTypes.BOOLEAN, defaultValue: false},// Резка картона
    rolling_cardboard_ready_palet_16: {type: DataTypes.BOOLEAN, defaultValue: false},//Проката картона
    package_ready_palet_16: {type: DataTypes.BOOLEAN, defaultValue: false},//Упаковка
    dop_accessories_ready_palet_16: {type: DataTypes.BOOLEAN, defaultValue: false},// Доп фурнитура

//+++++++++++++++++++ Палет 17 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    number_of_pallets_17: {type: DataTypes.INTEGER},// Палет 17 количество
    address_pallet_17: {type: DataTypes.STRING},// Адрес палета 17
    machine_pallet_pasting_17:{type: DataTypes.STRING},// Станок палета поклейка 17
    machine_pallet_additive_17:{type: DataTypes.STRING},// Станок палета присадка 17
    //-------------- Маркеры для анализа этапов-------------------
    ready_palet_17: {type: DataTypes.BOOLEAN}, // Готовность палета  (если деталей нету или сделали 0 то он убирается из расчета этапов)
    cutting_ready_palet_17: {type: DataTypes.BOOLEAN, defaultValue: false},//Раскрой
    pasting_ready_palet_17: {type: DataTypes.BOOLEAN, defaultValue: false},//Поклейка
    additive_ready_palet_17: {type: DataTypes.BOOLEAN, defaultValue: false},//Присадка
    format_ready_palet_17: {type: DataTypes.BOOLEAN, defaultValue: false},// Форматка
    curvilinear_ready_palet_17: {type: DataTypes.BOOLEAN, defaultValue: false},//Криволинейка
    universal_ready_palet_17: {type: DataTypes.BOOLEAN, defaultValue: false},//Универсал
    cutting_corners_ready_palet_17: {type: DataTypes.BOOLEAN, defaultValue: false},//Вырезка углов
    milling_ready_palet_17: {type: DataTypes.BOOLEAN, defaultValue: false},// Фрезеровка
    film_pasting_ready_palet_17: {type: DataTypes.BOOLEAN, defaultValue: false},//Оклейка пленкой МДФ
    assembly_ready_palet_17: {type: DataTypes.BOOLEAN, defaultValue: false},// Сборка 2
    accessories_ready_palet_17: {type: DataTypes.BOOLEAN, defaultValue: false},// Комплектация фурнитуры
    styrofoam_ready_palet_17: {type: DataTypes.BOOLEAN, defaultValue: false},// Резка пенопласта
    cutting_cardboard_ready_palet_17: {type: DataTypes.BOOLEAN, defaultValue: false},// Резка картона
    rolling_cardboard_ready_palet_17: {type: DataTypes.BOOLEAN, defaultValue: false},//Проката картона
    package_ready_palet_17: {type: DataTypes.BOOLEAN, defaultValue: false},//Упаковка
    dop_accessories_ready_palet_17: {type: DataTypes.BOOLEAN, defaultValue: false},// Доп фурнитура

//+++++++++++++++++++ Палет 18 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    number_of_pallets_18: {type: DataTypes.INTEGER},// Палет 18 количество
    address_pallet_18: {type: DataTypes.STRING},// Адрес палета 18
    machine_pallet_pasting_18:{type: DataTypes.STRING},// Станок палета поклейка 18
    machine_pallet_additive_18:{type: DataTypes.STRING},// Станок палета присадка 18
    //-------------- Маркеры для анализа этапов-------------------
    ready_palet_18: {type: DataTypes.BOOLEAN}, // Готовность палета  (если деталей нету или сделали 0 то он убирается из расчета этапов)
    cutting_ready_palet_18: {type: DataTypes.BOOLEAN, defaultValue: false},//Раскрой
    pasting_ready_palet_18: {type: DataTypes.BOOLEAN, defaultValue: false},//Поклейка
    additive_ready_palet_18: {type: DataTypes.BOOLEAN, defaultValue: false},//Присадка
    format_ready_palet_18: {type: DataTypes.BOOLEAN, defaultValue: false},// Форматка
    curvilinear_ready_palet_18: {type: DataTypes.BOOLEAN, defaultValue: false},//Криволинейка
    universal_ready_palet_18: {type: DataTypes.BOOLEAN, defaultValue: false},//Универсал
    cutting_corners_ready_palet_18: {type: DataTypes.BOOLEAN, defaultValue: false},//Вырезка углов
    milling_ready_palet_18: {type: DataTypes.BOOLEAN, defaultValue: false},// Фрезеровка
    film_pasting_ready_palet_18: {type: DataTypes.BOOLEAN, defaultValue: false},//Оклейка пленкой МДФ
    assembly_ready_palet_18: {type: DataTypes.BOOLEAN, defaultValue: false},// Сборка 2
    accessories_ready_palet_18: {type: DataTypes.BOOLEAN, defaultValue: false},// Комплектация фурнитуры
    styrofoam_ready_palet_18: {type: DataTypes.BOOLEAN, defaultValue: false},// Резка пенопласта
    cutting_cardboard_ready_palet_18: {type: DataTypes.BOOLEAN, defaultValue: false},// Резка картона
    rolling_cardboard_ready_palet_18: {type: DataTypes.BOOLEAN, defaultValue: false},//Проката картона
    package_ready_palet_18: {type: DataTypes.BOOLEAN, defaultValue: false},//Упаковка
    dop_accessories_ready_palet_18: {type: DataTypes.BOOLEAN, defaultValue: false},// Доп фурнитура

//+++++++++++++++++++ Палет 19 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    number_of_pallets_19: {type: DataTypes.INTEGER},// Палет 19 количество
    address_pallet_19: {type: DataTypes.STRING},// Адрес палета 19
    machine_pallet_pasting_19:{type: DataTypes.STRING},// Станок палета поклейка 19
    machine_pallet_additive_19:{type: DataTypes.STRING},// Станок палета присадка 19
    //-------------- Маркеры для анализа этапов-------------------
    ready_palet_19: {type: DataTypes.BOOLEAN}, // Готовность палета  (если деталей нету или сделали 0 то он убирается из расчета этапов)
    cutting_ready_palet_19: {type: DataTypes.BOOLEAN, defaultValue: false},//Раскрой
    pasting_ready_palet_19: {type: DataTypes.BOOLEAN, defaultValue: false},//Поклейка
    additive_ready_palet_19: {type: DataTypes.BOOLEAN, defaultValue: false},//Присадка
    format_ready_palet_19: {type: DataTypes.BOOLEAN, defaultValue: false},// Форматка
    curvilinear_ready_palet_19: {type: DataTypes.BOOLEAN, defaultValue: false},//Криволинейка
    universal_ready_palet_19: {type: DataTypes.BOOLEAN, defaultValue: false},//Универсал
    cutting_corners_ready_palet_19: {type: DataTypes.BOOLEAN, defaultValue: false},//Вырезка углов
    milling_ready_palet_19: {type: DataTypes.BOOLEAN, defaultValue: false},// Фрезеровка
    film_pasting_ready_palet_19: {type: DataTypes.BOOLEAN, defaultValue: false},//Оклейка пленкой МДФ
    assembly_ready_palet_19: {type: DataTypes.BOOLEAN, defaultValue: false},// Сборка 2
    accessories_ready_palet_19: {type: DataTypes.BOOLEAN, defaultValue: false},// Комплектация фурнитуры
    styrofoam_ready_palet_19: {type: DataTypes.BOOLEAN, defaultValue: false},// Резка пенопласта
    cutting_cardboard_ready_palet_19: {type: DataTypes.BOOLEAN, defaultValue: false},// Резка картона
    rolling_cardboard_ready_palet_19: {type: DataTypes.BOOLEAN, defaultValue: false},//Проката картона
    package_ready_palet_19: {type: DataTypes.BOOLEAN, defaultValue: false},//Упаковка
    dop_accessories_ready_palet_19: {type: DataTypes.BOOLEAN, defaultValue: false},// Доп фурнитура

//+++++++++++++++++++ Палет 20 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    number_of_pallets_20: {type: DataTypes.INTEGER},// Палет 20 количество
    address_pallet_20: {type: DataTypes.STRING},// Адрес палета 20
    machine_pallet_pasting_20:{type: DataTypes.STRING},// Станок палета поклейка 20
    machine_pallet_additive_20:{type: DataTypes.STRING},// Станок палета присадка 20
    //-------------- Маркеры для анализа этапов-------------------
    ready_palet_20: {type: DataTypes.BOOLEAN}, // Готовность палета  (если деталей нету или сделали 0 то он убирается из расчета этапов)
    cutting_ready_palet_20: {type: DataTypes.BOOLEAN, defaultValue: false},//Раскрой
    pasting_ready_palet_20: {type: DataTypes.BOOLEAN, defaultValue: false},//Поклейка
    additive_ready_palet_20: {type: DataTypes.BOOLEAN, defaultValue: false},//Присадка
    format_ready_palet_20: {type: DataTypes.BOOLEAN, defaultValue: false},// Форматка
    curvilinear_ready_palet_20: {type: DataTypes.BOOLEAN, defaultValue: false},//Криволинейка
    universal_ready_palet_20: {type: DataTypes.BOOLEAN, defaultValue: false},//Универсал
    cutting_corners_ready_palet_20: {type: DataTypes.BOOLEAN, defaultValue: false},//Вырезка углов
    milling_ready_palet_20: {type: DataTypes.BOOLEAN, defaultValue: false},// Фрезеровка
    film_pasting_ready_palet_20: {type: DataTypes.BOOLEAN, defaultValue: false},//Оклейка пленкой МДФ
    assembly_ready_palet_20: {type: DataTypes.BOOLEAN, defaultValue: false},// Сборка 2
    accessories_ready_palet_20: {type: DataTypes.BOOLEAN, defaultValue: false},// Комплектация фурнитуры
    styrofoam_ready_palet_20: {type: DataTypes.BOOLEAN, defaultValue: false},// Резка пенопласта
    cutting_cardboard_ready_palet_20: {type: DataTypes.BOOLEAN, defaultValue: false},// Резка картона
    rolling_cardboard_ready_palet_20: {type: DataTypes.BOOLEAN, defaultValue: false},//Проката картона
    package_ready_palet_20: {type: DataTypes.BOOLEAN, defaultValue: false},//Упаковка
    dop_accessories_ready_palet_20: {type: DataTypes.BOOLEAN, defaultValue: false},// Доп фурнитура

//+++++++++++++++++++ Палет 21 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    number_of_pallets_21: {type: DataTypes.INTEGER},// Палет 21 количество
    address_pallet_21: {type: DataTypes.STRING},// Адрес палета 21
    machine_pallet_pasting_21:{type: DataTypes.STRING},// Станок палета поклейка 21
    machine_pallet_additive_21:{type: DataTypes.STRING},// Станок палета присадка 21
    //-------------- Маркеры для анализа этапов-------------------
    ready_palet_21: {type: DataTypes.BOOLEAN}, // Готовность палета  (если деталей нету или сделали 0 то он убирается из расчета этапов)
    cutting_ready_palet_21: {type: DataTypes.BOOLEAN, defaultValue: false},//Раскрой
    pasting_ready_palet_21: {type: DataTypes.BOOLEAN, defaultValue: false},//Поклейка
    additive_ready_palet_21: {type: DataTypes.BOOLEAN, defaultValue: false},//Присадка
    format_ready_palet_21: {type: DataTypes.BOOLEAN, defaultValue: false},// Форматка
    curvilinear_ready_palet_21: {type: DataTypes.BOOLEAN, defaultValue: false},//Криволинейка
    universal_ready_palet_21: {type: DataTypes.BOOLEAN, defaultValue: false},//Универсал
    cutting_corners_ready_palet_21: {type: DataTypes.BOOLEAN, defaultValue: false},//Вырезка углов
    milling_ready_palet_21: {type: DataTypes.BOOLEAN, defaultValue: false},// Фрезеровка
    film_pasting_ready_palet_21: {type: DataTypes.BOOLEAN, defaultValue: false},//Оклейка пленкой МДФ
    assembly_ready_palet_21: {type: DataTypes.BOOLEAN, defaultValue: false},// Сборка 2
    accessories_ready_palet_21: {type: DataTypes.BOOLEAN, defaultValue: false},// Комплектация фурнитуры
    styrofoam_ready_palet_21: {type: DataTypes.BOOLEAN, defaultValue: false},// Резка пенопласта
    cutting_cardboard_ready_palet_21: {type: DataTypes.BOOLEAN, defaultValue: false},// Резка картона
    rolling_cardboard_ready_palet_21: {type: DataTypes.BOOLEAN, defaultValue: false},//Проката картона
    package_ready_palet_21: {type: DataTypes.BOOLEAN, defaultValue: false},//Упаковка
    dop_accessories_ready_palet_21: {type: DataTypes.BOOLEAN, defaultValue: false},// Доп фурнитура

//+++++++++++++++++++ Палет 22 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    number_of_pallets_22: {type: DataTypes.INTEGER},// Палет 22 количество
    address_pallet_22: {type: DataTypes.STRING},// Адрес палета 22
    machine_pallet_pasting_22:{type: DataTypes.STRING},// Станок палета поклейка 22
    machine_pallet_additive_22:{type: DataTypes.STRING},// Станок палета присадка 22
    //-------------- Маркеры для анализа этапов-------------------
    ready_palet_22: {type: DataTypes.BOOLEAN}, // Готовность палета  (если деталей нету или сделали 0 то он убирается из расчета этапов)
    cutting_ready_palet_22: {type: DataTypes.BOOLEAN, defaultValue: false},//Раскрой
    pasting_ready_palet_22: {type: DataTypes.BOOLEAN, defaultValue: false},//Поклейка
    additive_ready_palet_22: {type: DataTypes.BOOLEAN, defaultValue: false},//Присадка
    format_ready_palet_22: {type: DataTypes.BOOLEAN, defaultValue: false},// Форматка
    curvilinear_ready_palet_22: {type: DataTypes.BOOLEAN, defaultValue: false},//Криволинейка
    universal_ready_palet_22: {type: DataTypes.BOOLEAN, defaultValue: false},//Универсал
    cutting_corners_ready_palet_22: {type: DataTypes.BOOLEAN, defaultValue: false},//Вырезка углов
    milling_ready_palet_22: {type: DataTypes.BOOLEAN, defaultValue: false},// Фрезеровка
    film_pasting_ready_palet_22: {type: DataTypes.BOOLEAN, defaultValue: false},//Оклейка пленкой МДФ
    assembly_ready_palet_22: {type: DataTypes.BOOLEAN, defaultValue: false},// Сборка 2
    accessories_ready_palet_22: {type: DataTypes.BOOLEAN, defaultValue: false},// Комплектация фурнитуры
    styrofoam_ready_palet_22: {type: DataTypes.BOOLEAN, defaultValue: false},// Резка пенопласта
    cutting_cardboard_ready_palet_22: {type: DataTypes.BOOLEAN, defaultValue: false},// Резка картона
    rolling_cardboard_ready_palet_22: {type: DataTypes.BOOLEAN, defaultValue: false},//Проката картона
    package_ready_palet_22: {type: DataTypes.BOOLEAN, defaultValue: false},//Упаковка
    dop_accessories_ready_palet_22: {type: DataTypes.BOOLEAN, defaultValue: false},// Доп фурнитура

//+++++++++++++++++++ Палет 23 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    number_of_pallets_23: {type: DataTypes.INTEGER},// Палет 23 количество
    address_pallet_23: {type: DataTypes.STRING},// Адрес палета 23
    machine_pallet_pasting_23:{type: DataTypes.STRING},// Станок палета поклейка 23
    machine_pallet_additive_23:{type: DataTypes.STRING},// Станок палета присадка 23
    //-------------- Маркеры для анализа этапов-------------------
    ready_palet_23: {type: DataTypes.BOOLEAN}, // Готовность палета  (если деталей нету или сделали 0 то он убирается из расчета этапов)
    cutting_ready_palet_23: {type: DataTypes.BOOLEAN, defaultValue: false},//Раскрой
    pasting_ready_palet_23: {type: DataTypes.BOOLEAN, defaultValue: false},//Поклейка
    additive_ready_palet_23: {type: DataTypes.BOOLEAN, defaultValue: false},//Присадка
    format_ready_palet_23: {type: DataTypes.BOOLEAN, defaultValue: false},// Форматка
    curvilinear_ready_palet_23: {type: DataTypes.BOOLEAN, defaultValue: false},//Криволинейка
    universal_ready_palet_23: {type: DataTypes.BOOLEAN, defaultValue: false},//Универсал
    cutting_corners_ready_palet_23: {type: DataTypes.BOOLEAN, defaultValue: false},//Вырезка углов
    milling_ready_palet_23: {type: DataTypes.BOOLEAN, defaultValue: false},// Фрезеровка
    film_pasting_ready_palet_23: {type: DataTypes.BOOLEAN, defaultValue: false},//Оклейка пленкой МДФ
    assembly_ready_palet_23: {type: DataTypes.BOOLEAN, defaultValue: false},// Сборка 2
    accessories_ready_palet_23: {type: DataTypes.BOOLEAN, defaultValue: false},// Комплектация фурнитуры
    styrofoam_ready_palet_23: {type: DataTypes.BOOLEAN, defaultValue: false},// Резка пенопласта
    cutting_cardboard_ready_palet_23: {type: DataTypes.BOOLEAN, defaultValue: false},// Резка картона
    rolling_cardboard_ready_palet_23: {type: DataTypes.BOOLEAN, defaultValue: false},//Проката картона
    package_ready_palet_23: {type: DataTypes.BOOLEAN, defaultValue: false},//Упаковка
    dop_accessories_ready_palet_23: {type: DataTypes.BOOLEAN, defaultValue: false},// Доп фурнитура

//+++++++++++++++++++ Палет 24 ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    number_of_pallets_24: {type: DataTypes.INTEGER},// Палет 24 количество
    address_pallet_24: {type: DataTypes.STRING},// Адрес палета 24
    machine_pallet_pasting_24:{type: DataTypes.STRING},// Станок палета поклейка 24
    machine_pallet_additive_24:{type: DataTypes.STRING},// Станок палета присадка 24
    //-------------- Маркеры для анализа этапов-------------------
    ready_palet_24: {type: DataTypes.BOOLEAN}, // Готовность палета  (если деталей нету или сделали 0 то он убирается из расчета этапов)
    cutting_ready_palet_24: {type: DataTypes.BOOLEAN, defaultValue: false},//Раскрой
    pasting_ready_palet_24: {type: DataTypes.BOOLEAN, defaultValue: false},//Поклейка
    additive_ready_palet_24: {type: DataTypes.BOOLEAN, defaultValue: false},//Присадка
    format_ready_palet_24: {type: DataTypes.BOOLEAN, defaultValue: false},// Форматка
    curvilinear_ready_palet_24: {type: DataTypes.BOOLEAN, defaultValue: false},//Криволинейка
    universal_ready_palet_24: {type: DataTypes.BOOLEAN, defaultValue: false},//Универсал
    cutting_corners_ready_palet_24: {type: DataTypes.BOOLEAN, defaultValue: false},//Вырезка углов
    milling_ready_palet_24: {type: DataTypes.BOOLEAN, defaultValue: false},// Фрезеровка
    film_pasting_ready_palet_24: {type: DataTypes.BOOLEAN, defaultValue: false},//Оклейка пленкой МДФ
    assembly_ready_palet_24: {type: DataTypes.BOOLEAN, defaultValue: false},// Сборка 2
    accessories_ready_palet_24: {type: DataTypes.BOOLEAN, defaultValue: false},// Комплектация фурнитуры
    styrofoam_ready_palet_24: {type: DataTypes.BOOLEAN, defaultValue: false},// Резка пенопласта
    cutting_cardboard_ready_palet_24: {type: DataTypes.BOOLEAN, defaultValue: false},// Резка картона
    rolling_cardboard_ready_palet_24: {type: DataTypes.BOOLEAN, defaultValue: false},//Проката картона
    package_ready_palet_24: {type: DataTypes.BOOLEAN, defaultValue: false},//Упаковка
    dop_accessories_ready_palet_24: {type: DataTypes.BOOLEAN, defaultValue: false},// Доп фурнитура

//+++++++++++++++++++ Палет 25 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    number_of_pallets_25: {type: DataTypes.INTEGER},// Палет 25 количество
    address_pallet_25: {type: DataTypes.STRING},// Адрес палета 25
    machine_pallet_pasting_25:{type: DataTypes.STRING},// Станок палета поклейка 25
    machine_pallet_additive_25:{type: DataTypes.STRING},// Станок палета присадка 25
    //-------------- Маркеры для анализа этапов-------------------
    ready_palet_25: {type: DataTypes.BOOLEAN}, // Готовность палета  (если деталей нету или сделали 0 то он убирается из расчета этапов)
    cutting_ready_palet_25: {type: DataTypes.BOOLEAN, defaultValue: false},//Раскрой
    pasting_ready_palet_25: {type: DataTypes.BOOLEAN, defaultValue: false},//Поклейка
    additive_ready_palet_25: {type: DataTypes.BOOLEAN, defaultValue: false},//Присадка
    format_ready_palet_25: {type: DataTypes.BOOLEAN, defaultValue: false},// Форматка
    curvilinear_ready_palet_25: {type: DataTypes.BOOLEAN, defaultValue: false},//Криволинейка
    universal_ready_palet_25: {type: DataTypes.BOOLEAN, defaultValue: false},//Универсал
    cutting_corners_ready_palet_25: {type: DataTypes.BOOLEAN, defaultValue: false},//Вырезка углов
    milling_ready_palet_25: {type: DataTypes.BOOLEAN, defaultValue: false},// Фрезеровка
    film_pasting_ready_palet_25: {type: DataTypes.BOOLEAN, defaultValue: false},//Оклейка пленкой МДФ
    assembly_ready_palet_25: {type: DataTypes.BOOLEAN, defaultValue: false},// Сборка 2
    accessories_ready_palet_25: {type: DataTypes.BOOLEAN, defaultValue: false},// Комплектация фурнитуры
    styrofoam_ready_palet_25: {type: DataTypes.BOOLEAN, defaultValue: false},// Резка пенопласта
    cutting_cardboard_ready_palet_25: {type: DataTypes.BOOLEAN, defaultValue: false},// Резка картона
    rolling_cardboard_ready_palet_25: {type: DataTypes.BOOLEAN, defaultValue: false},//Проката картона
    package_ready_palet_25: {type: DataTypes.BOOLEAN, defaultValue: false},//Упаковка
    dop_accessories_ready_palet_25: {type: DataTypes.BOOLEAN, defaultValue: false},// Доп фурнитура

})

//<==============  Таблицы станков и участков (история и т.д)  =================================================>

//Таблица с данными по участкам
const Region_service = sequelize.define('region_service',{
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true}, //Id
    region: {type: DataTypes.STRING},// участок
    visibility: {type: DataTypes.BOOLEAN, defaultValue: true}, // Возможность отключить участок
})

//Таблица с данными по линиям
const Line_service = sequelize.define('line_service', {
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
    line: {type: DataTypes.STRING}, // Линия
    visibility: {type: DataTypes.BOOLEAN, defaultValue: true}, // Возможность отключить учетку
})

//Таблица с данными по станкам
const Stancki_service = sequelize.define('stancki_service',{
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true}, //Id
    stanock: {type: DataTypes.STRING},// Станок
    sector: {type: DataTypes.STRING}, // В каком секторе находится станок (Присадка, Покле  ка и тд)
    line: {type: DataTypes.STRING}, // В какой линии
    img:{type: DataTypes.STRING},// изображение станка
    plan: {type: DataTypes.INTEGER}, // Дата добавления в таблицу для поиска
    price: {type: DataTypes.STRING}, // Время добавления в таблицу для поиска
    visibility: {type: DataTypes.BOOLEAN, defaultValue: true}, // Возможность отключить станок
    //--------------  Статусы станка  --------------------
    status_waiting: {type: DataTypes.BOOLEAN}, // Состояние станка. True - значит не работает, false - нет
    status_work: {type: DataTypes.BOOLEAN}, // Состояние станка. True - значит работает, false - нет
    status_broken: {type: DataTypes.BOOLEAN}, // Состояние станка. True - значит сломан, false - нет
    status_repair: {type: DataTypes.BOOLEAN}, // Состояние станка. True - значит в ремонте, false - нет
    status_maintenance: {type: DataTypes.BOOLEAN}, // Состояние станка. True - значит проходит ТО, false - нет
    // Связь с таблицей участков
})

//Таблица станков с историей поломок
const Stancki_service_history = sequelize.define('stancki_service_history',{
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true}, //Id
    stanock: {type: DataTypes.STRING},// Станок
    status: {type: DataTypes.STRING}, // Состояние станка
    breakdown: {type: DataTypes.STRING},// Описание поломки
    sector: {type: DataTypes.STRING}, // В каком секторе находится станок (Присадка, Покле  ка и тд)
    smena:{type: DataTypes.INTEGER}, // Смена
    date: {type: DataTypes.STRING}, // Дата поломки или ремонта
    time: {type: DataTypes.STRING} // Дата поломки или ремонта
})

// Таблица с учетом рабочего времени
const Accounting_working_hours = sequelize.define('accounting_working_hours',{
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true}, //Id
    stanock: {type: DataTypes.STRING},// Станок
    date: {type: DataTypes.STRING}, // Дата
    smena:{type: DataTypes.INTEGER}, // Смена
    start_time: {type: DataTypes.INTEGER}, // Время начала работы
    start_status: {type: DataTypes.STRING}, // Первый статус станка
    end_time: {type: DataTypes.INTEGER}, // Время прекращения работы
    end_status: {type: DataTypes.STRING}, // Причина прекращения работы
    final_time:{type: DataTypes.INTEGER}, // Итоговое время работы станка
    sector: {type: DataTypes.STRING}, // В каком секторе находится станок (Присадка, Покле  ка и тд)
    line: {type: DataTypes.STRING}, // В какой линии

})

//Таблица с заданиями для станков
const Znp_stancki = sequelize.define('znp_stancki',{
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true}, //Id
    stanock: {type: DataTypes.STRING},// Станок
    sector: {type: DataTypes.STRING}, // В каком секторе находится станок (Присадка, Покле  ка и тд)
    real_number_parts: {type: DataTypes.INTEGER},// Реальное кол деталей которое сделали

    priority: {type: DataTypes.INTEGER},//Приоритет
    znp:{type: DataTypes.STRING},//Номер и название ЗНП
    number_opening: {type: DataTypes.INTEGER}, //Номер части по раскрою
    part: {type: DataTypes.STRING},// Тип детали
    color: {type: DataTypes.STRING},// Цвет
    part_name: {type: DataTypes.STRING},// Название детали
    packaging: {type: DataTypes.STRING},// Принадлежность к упаковке
    size_requiried: {type: DataTypes.STRING},// Требуемы размер распила
    gluing_scheme: {type: DataTypes.STRING},// Схема поклейки 1
    dop_gluing_scheme: {type: DataTypes.STRING},// Схема поклейки 2
    groove: {type: DataTypes.STRING},// Паз
    sum_number_parts: {type: DataTypes.INTEGER},// Общее кол деталей
    number_of_pallets:{type: DataTypes.INTEGER},// Палет  количество

    address_pallet: {type: DataTypes.STRING},// Адрес палета
    palet:{type: DataTypes.STRING}, // Адрес палета, чтобы узнать в какой палет заносить данные
    probeg:{type: DataTypes.INTEGER}, // Пробег по деталям
    completed: {type: DataTypes.BOOLEAN, defaultValue: false}, // Выполненна ли деталь
    role: {type: DataTypes.STRING},// роль того кто заполнил
    date: {type: DataTypes.STRING}, // Дата поломки или ремонта
    time: {type: DataTypes.STRING}, // Время поломки или ремонта
    smena:{type: DataTypes.INTEGER}, // Смена
    znpDatumId:{type: DataTypes.INTEGER},// id знп дата станка

})

//Таблица с выполненными заданиями для станков
const Znp_stancki_completed = sequelize.define('znp_stancki_completed',{
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true}, //Id
    stanock: {type: DataTypes.STRING},// Станок
    sector: {type: DataTypes.STRING}, // В каком секторе находится станок (Присадка, Покле  ка и тд)
    completed: {type: DataTypes.INTEGER},// Выполненное кол деталей
    date: {type: DataTypes.STRING}, // Дата добавления в таблицу для поиска
    time: {type: DataTypes.STRING}, // Время добавления в таблицу для поиска
    date_time: {type: DataTypes.STRING}, // Дата и время добавления для точного вывода
    probeg:{type: DataTypes.INTEGER}, // Пробег по деталям
    smena:{type: DataTypes.INTEGER}, // Смена
    znp:{type: DataTypes.STRING},//Номер и название ЗНП
    number_opening: {type: DataTypes.INTEGER}, //Номер части по раскрою
    palet:{type: DataTypes.STRING}, // Адрес палета, чтобы узнать в какой палет заносить данные
    part: {type: DataTypes.STRING},// Тип детали
    color: {type: DataTypes.STRING},// Цвет
    part_name: {type: DataTypes.STRING},// Название детали
    size_requiried: {type: DataTypes.STRING},// Требуемы размер распила
    gluing_scheme: {type: DataTypes.STRING},// Схема поклейки 1
    dop_gluing_scheme: {type: DataTypes.STRING},// Схема поклейки 2
    groove: {type: DataTypes.STRING},// Паз
    role: {type: DataTypes.STRING},// роль того кто заполнил
    znpStanokDatumId:{type: DataTypes.INTEGER},// id знп станка
    znpDataId:{type: DataTypes.INTEGER},// id знп дата
})

//Таблица с выполненными деталями по участкам
const Region_completed = sequelize.define('region_completed', {
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true}, //Id
    region: {type: DataTypes.STRING}, // Регион
    completed: {type: DataTypes.INTEGER},// Выполненное кол деталей
    date: {type: DataTypes.STRING}, // Дата добавления в таблицу для поиска
    time: {type: DataTypes.STRING}, // Время добавления в таблицу для поиска
    date_time: {type: DataTypes.STRING}, // Дата и время добавления для точного вывода
    quadrature:{type: DataTypes.INTEGER}, // Квадратура по деталям
    smena:{type: DataTypes.INTEGER}, // Смена
    palet:{type: DataTypes.STRING}, // палет
    znpData:{type: DataTypes.INTEGER}, // Номер в таблице знп дата
    role: {type: DataTypes.STRING},// роль того кто заполнил

})


// Таблица с путями для картинок упаковки

const  Ypak_guide = sequelize.define('ypak_guide',{
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true}, //Id
    series: {type: DataTypes.STRING},// Серия
    model: {type: DataTypes.STRING}, // Модель
    packing_scheme: {type: DataTypes.STRING}, // Схема упаковки
    img1: {type: DataTypes.STRING}, // Имя файла 1
    img2: {type: DataTypes.STRING}, // Имя файла 2
    img3: {type: DataTypes.STRING}, // Имя файла 3
    img4: {type: DataTypes.STRING}, // Имя файла 4
    img5: {type: DataTypes.STRING}, // Имя файла 5
    img6: {type: DataTypes.STRING}, // Имя файла 6
    img7: {type: DataTypes.STRING}, // Имя файла 7
    img8: {type: DataTypes.STRING}, // Имя файла 8
    img9: {type: DataTypes.STRING}, // Имя файла 9
    img10: {type: DataTypes.STRING}, // Имя файла 10
    img11: {type: DataTypes.STRING}, // Имя файла 11
    img12: {type: DataTypes.STRING}, // Имя файла 12
    activity: {type: DataTypes.BOOLEAN, defaultValue: false}, //  Активный элемент

})

const Ypak_monitors = sequelize.define('ypak_monitors', {
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true}, //Id
    line:{type: DataTypes.STRING},// Линия
    monitor:{type: DataTypes.STRING},// монитор
    description:{type: DataTypes.STRING},// Описание
    img:{type: DataTypes.STRING},// изображение

})

// Статистика по упаковкам

const Znp_ypak_tabl_Comp = sequelize.define('znp_ypak_tablComp', {
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true}, //Id
    segmentStream:{type: DataTypes.STRING},// Сегмент потока
    ypakPotok:{type: DataTypes.STRING},// упаковка поток
    packaging: {type: DataTypes.INTEGER},// Принадлежность к упаковке
    order:{type: DataTypes.INTEGER},// заказ
    ready_for_packing:{type: DataTypes.INTEGER, defaultValue: 0},// готово к упаковке
    // ypakItog:{type: DataTypes.INTEGER, defaultValue: 0},// готово к упаковке
    ready_for_packing_bool:{type: DataTypes.BOOLEAN, defaultValue: false},// готово к упаковке булевое значение

    packed_compl1:{type: DataTypes.INTEGER, defaultValue: 0},//Упакованно
    date_compl1:{type: DataTypes.STRING},//Упакованно
    smen_compl1:{type: DataTypes.INTEGER, defaultValue: 0},//Упакованно

    packed_compl2:{type: DataTypes.INTEGER, defaultValue: 0},//Упакованно
    date_compl2:{type: DataTypes.STRING},//Упакованно
    smen_compl2:{type: DataTypes.INTEGER, defaultValue: 0},//Упакованно

    packed_compl3:{type: DataTypes.INTEGER, defaultValue: 0},//Упакованно
    date_compl3:{type: DataTypes.STRING},//Упакованно
    smen_compl3:{type: DataTypes.INTEGER, defaultValue: 0},//Упакованно

    packed_compl4:{type: DataTypes.INTEGER, defaultValue: 0},//Упакованно
    date_compl4:{type: DataTypes.STRING},//Упакованно
    smen_compl4:{type: DataTypes.INTEGER, defaultValue: 0},//Упакованно

    packed_compl5:{type: DataTypes.INTEGER, defaultValue: 0},//Упакованно
    date_compl5:{type: DataTypes.STRING},//Упакованно
    smen_compl5:{type: DataTypes.INTEGER, defaultValue: 0},//Упакованно

    packed_compl6:{type: DataTypes.INTEGER, defaultValue: 0},//Упакованно
    date_compl6:{type: DataTypes.STRING},//Упакованно
    smen_compl6:{type: DataTypes.INTEGER, defaultValue: 0},//Упакованно

    area_per_package:{type: DataTypes.FLOAT},// площадь на 1 упаковку
    equivalent_package:{type: DataTypes.FLOAT},// Эквивалент на упаковку

})
//Таблица с выполненными деталями по упаковке
// const Ypack_completed_diagrams = sequelize.define('ypack_completed_diagrams', {
//     id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true}, //Id
//     completedSmen1: {type: DataTypes.INTEGER},// Выполненное кол деталей в 1 смену
//     completedSmen2: {type: DataTypes.INTEGER},// Выполненное кол деталей в 2 смену
//     completed: {type: DataTypes.INTEGER},// Выполненное кол деталей общее
//     completedHistory: {type: DataTypes.INTEGER},// Выполненное кол деталей общее
//     order: {type: DataTypes.INTEGER},// Выполненное кол деталей
//     orderCompl: {type: DataTypes.INTEGER},// Осталось сделать от заказа
//     date: {type: DataTypes.STRING}, // Дата добавления в таблицу для поиска
//     time: {type: DataTypes.STRING}, // Время добавления в таблицу для поиска
//     date_time: {type: DataTypes.STRING}, // Дата и время добавления для точного вывода
//     area_per_package:{type: DataTypes.FLOAT},// площадь на 1 упаковку
//     equivalent_package:{type: DataTypes.FLOAT},// Эквивалент на упаковку
//     smena:{type: DataTypes.INTEGER}, // Смена
//     idYpakTablComp:{type: DataTypes.INTEGER}, // id в таблице упаковки
//     role: {type: DataTypes.STRING},// роль того кто заполнил
//
// })



//<=####################################################################################>
Znp.hasMany(Znp_data)
Znp.hasMany(Znp_ypak_tabl_Comp)
Znp_data.belongsTo(Znp)
Role_user.hasMany(User)

module.exports = {
    User,
    Role_user,
    Buffer,
    Znp,
    Znp_data,
    Region_service,
    Line_service,
    Stancki_service,
    Stancki_service_history,
    Accounting_working_hours,
    Znp_stancki,
    Znp_stancki_completed,
    Region_completed,
    Ypak_guide,
    Ypak_monitors,
    Znp_ypak_tabl_Comp,
    // Ypack_completed_diagrams

}