
import {
    ADDITIVE_ROUTE,
    BHX1_ROUTE,
    BHX2_ROUTE,
    BHX3_ROUTE,
    BST1_ROUTE,
    BST2_ROUTE,
    BUFF_ROUTE,
    CREATEMONITOR,
    CREATUREZNP_ROUTE,
    CUTTING_ROUTE, DIAGRAM_ROUTE,
    EVOLUTION_ROUTE,
    KDT6032_ROUTE,
    KDT6052_ROUTE,
    MONITOR1, MONITOR10, MONITOR11, MONITOR12, MONITOR13, MONITOR14,
    MONITOR2,
    MONITOR3,
    MONITOR4,
    MONITOR5,
    MONITOR6, MONITOR7, MONITOR8, MONITOR9,
    PACKAGING_ROUTE,
    PASTING_ROUTE,
    S5002_ROUTE,
    S5003_ROUTE,
    S5004_ROUTE,
    SIGMA1_ROUTE,
    START_ROUTE,
    STREAMA_ROUTE, VENTURA07M_ROUTE,
    XD_ROUTE,
    YPAKGLUING
} from "./utils/consts";


export const authAdminRoutes = [
    {
        path: CUTTING_ROUTE,
        Component: "Раскрой"
    },
    {
        path: PASTING_ROUTE,
        Component: "Поклейка"
    },
    {
        path: ADDITIVE_ROUTE,
        Component: "Присадка"
    },
    {
        path: PACKAGING_ROUTE,
        Component: "Упаковка"
    },
    {
        path: BUFF_ROUTE,
        Component: "Буфер"
    },
    {
        path: CREATUREZNP_ROUTE,
        Component: "Создание ЗНП"
    },
    {
        path: YPAKGLUING,
        Component: "Мониторы упаковок"
    },
    {
        path: CREATEMONITOR,
        Component: "Создание упаковок"
    },
    {
        path: DIAGRAM_ROUTE,
        Component: "Диаграммы"
    },


]
export const authRaspilRoutes = [
    {
        path: CUTTING_ROUTE,
        Component: "Раскрой"
    },
    {
        path: BUFF_ROUTE,
        Component: "Буфер"
    },
]
export const authPrisadkaRoutes =[
    {
        path: ADDITIVE_ROUTE,
        Component: "Присадка"
    },
    {
        path: BUFF_ROUTE,
        Component: "Буфер"
    },
]
export const authPokleikaRoutes =[
    {
        path: PASTING_ROUTE,
        Component: "Поклейка"
    },
    {
        path: BUFF_ROUTE,
        Component: "Буфер"
    },

]
export const authYpakovkaRoutes =[
    {
        path: PACKAGING_ROUTE,
        Component: "Упаковка"
    },
    {
        path: YPAKGLUING,
        Component: "Мониторы упаковок"
    },
    {
        path: CREATEMONITOR,
        Component: "Создание упаковок"
    },
    {
        path: BUFF_ROUTE,
        Component: "Буфер"
    },
]

// Станки присадка общее
export const authStankiPrisadkaRoutes = [
    {
        path: BST1_ROUTE,
        Component: "BST-503_1"
    },
    {
        path: BST2_ROUTE,
        Component: "BST-503_2"
    },
    {
        path: BHX1_ROUTE,
        Component: "BHX-050_1"
    },
    {
        path: BHX2_ROUTE,
        Component: "BHX-050_2"
    },
    {
        path: BHX3_ROUTE,
        Component: "BHX-050_3"
    },
    {
        path: KDT6032_ROUTE,
        Component: "KDT-6032"
    },
    {
        path: KDT6052_ROUTE,
        Component: "KDT-6052"
    },
    {
        path: SIGMA1_ROUTE,
        Component: "Sigma_1"
    },
    {
        path: VENTURA07M_ROUTE,
        Component: "Venture-07M"
    }

]
// Станки поклейка общее

export const authStankiPokleiksRoutes = [
    {
        path: EVOLUTION_ROUTE,
        Component: "Evolution"
    },
    {
        path: S5002_ROUTE,
        Component: "S500_2"
    },
    {
        path: S5003_ROUTE,
        Component: "S500_3"
    },
    {
        path: S5004_ROUTE,
        Component: "S500_4"
    },
    {
        path: XD_ROUTE,
        Component: "XD"
    },
    {
        path: STREAMA_ROUTE,
        Component: "Stream A"
    },
]


// Отдельно по станкам присадки
export const authBst1Routes =[
    {
        path: BST1_ROUTE,
        Component: "BST-503_1"
    },
    {
        path: BUFF_ROUTE,
        Component: "Буфер"
    },
]
export const authBst2Routes =[
    {
        path: BST2_ROUTE,
        Component: "BST-503_2"
    },
    {
        path: BUFF_ROUTE,
        Component: "Буфер"
    },
]
export const authBhx1Routes =[
    {
        path: BHX1_ROUTE,
        Component: "BHX-050_1"
    },
    {
        path: BUFF_ROUTE,
        Component: "Буфер"
    },
]
export const authBhx2Routes =[
    {
        path: BHX2_ROUTE,
        Component: "BHX-050_2"
    },
    {
        path: BUFF_ROUTE,
        Component: "Буфер"
    },
]
export const authBhx3Routes =[
    {
        path: BHX3_ROUTE,
        Component: "BHX-050_3"
    },
    {
        path: BUFF_ROUTE,
        Component: "Буфер"
    },
]
export const authKdt6032Routes =[
    {
        path: KDT6032_ROUTE,
        Component: "KDT-6032"
    },
    {
        path: BUFF_ROUTE,
        Component: "Буфер"
    },
]
export const authKdt6052Routes =[
    {
        path: KDT6052_ROUTE,
        Component: "KDT-6052"
    },
    {
        path: BUFF_ROUTE,
        Component: "Буфер"
    },
]
export const authSigma1Routes =[
    {
        path: SIGMA1_ROUTE,
        Component: "Sigma_1"
    },
    {
        path: BUFF_ROUTE,
        Component: "Буфер"
    },
]
export const authVentura07MRoutes =[
    {
        path: VENTURA07M_ROUTE,
        Component: "Venture-07M"
    },
    {
        path: BUFF_ROUTE,
        Component: "Буфер"
    },
]


// Отдельно по станкам поклейки
export const authEvolutionRoutes =[
    {
        path: EVOLUTION_ROUTE,
        Component: "Evolution"
    },
    {
        path: BUFF_ROUTE,
        Component: "Буфер"
    },
]
export const authS5002Routes =[
    {
        path: S5002_ROUTE,
        Component: "S500_2"
    },
    {
        path: BUFF_ROUTE,
        Component: "Буфер"
    },
]
export const authS5003Routes =[
    {
        path: S5003_ROUTE,
        Component: "S500_3"
    },
    {
        path: BUFF_ROUTE,
        Component: "Буфер"
    },
]
export const authS5004Routes =[
    {
        path: S5004_ROUTE,
        Component: "S500_4"
    },
    {
        path: BUFF_ROUTE,
        Component: "Буфер"
    },
]
export const authXDRoutes =[
    {
        path: XD_ROUTE,
        Component: "XD"
    },
    {
        path: BUFF_ROUTE,
        Component: "Буфер"
    },
]
export const authStreamARoutes =[
    {
        path: STREAMA_ROUTE,
        Component: "Stream A"
    },
    {
        path: BUFF_ROUTE,
        Component: "Буфер"
    },
]
export const authDiagramRoutes = [
    {
        path: CUTTING_ROUTE,
        Component: "Раскрой"
    },
    {
        path: PASTING_ROUTE,
        Component: "Поклейка"
    },
    {
        path: ADDITIVE_ROUTE,
        Component: "Присадка"
    },
    {
        path: PACKAGING_ROUTE,
        Component: "Упаковка"
    },
    {
        path: DIAGRAM_ROUTE,
        Component: "Диаграммы"
    },
    {
        path: BUFF_ROUTE,
        Component: "Буфер"
    },
]

export const authMonitorsARoutes =[
    {
        path: MONITOR1,
        Component: "Монитор 1"
    },
    {
        path: MONITOR2,
        Component: "Монитор 2"
    },
    {
        path: MONITOR3,
        Component: "Монитор 3"
    },
    {
        path: MONITOR4,
        Component: "Монитор 4"
    },
    {
        path: MONITOR5,
        Component: "Монитор 5"
    },
    {
        path: MONITOR6,
        Component: "Монитор 6"
    },
    {
        path: MONITOR7,
        Component: "Монитор 7"
    },
    {
        path: MONITOR8,
        Component: "Монитор 8"
    },
    {
        path: MONITOR9,
        Component: "Монитор 9"
    },
    {
        path: MONITOR10,
        Component: "Монитор 10"
    },
    {
        path: MONITOR11,
        Component: "Монитор 11"
    },
    {
        path: MONITOR12,
        Component: "Монитор 12"
    },
    {
        path: MONITOR13,
        Component: "Монитор 13"
    },
    {
        path: MONITOR14,
        Component: "Монитор 14"
    },
]





// Публичный доступ
export const publicRoutes = [
    {
        path: START_ROUTE,
        Component: "Старт"
    }
]