import React from 'react';
import axios from "axios";

const Bufr = () => {
    const bufrs = [{id:	1, cell_number:	"2A-1-1.1",freeness: true},
        {id:	2, cell_number:	"2A-1-1.2", freeness: true},
        {id:	3, cell_number:	"2A-1-2.1", freeness: true},
        {id:	4, cell_number:	"2A-1-2.2", freeness: true},
        {id:	5, cell_number:	"2A-1-3.1", freeness: true},
        {id:	6, cell_number:	"2A-1-3.2", freeness: true},
        {id:	7, cell_number:	"2A-2-1.1", freeness: true},
        {id:	8, cell_number:	"2A-2-2.1", freeness: true},
        {id:	9, cell_number:	"2A-2-3.1", freeness: true},
        {id:	10, cell_number:"2A-2-4.1", freeness: true},
        {id:	11, cell_number:"2A-3-1.1", freeness: true},
        {id:	12, cell_number:"2A-3-2.1", freeness: true},
        {id:	13, cell_number:"2A-3-3.1", freeness: true},
        {id:	14, cell_number:"2A-3-4.1", freeness: true},
        {id:	15, cell_number:"2A-3-5.1", freeness: true},
        {id:	16, cell_number:"2A-4-1.1", freeness: true},
        {id:	17, cell_number:"2A-4-1.2", freeness: true},
        {id:	18, cell_number:"2A-4-2.1", freeness: true},
        {id:	19, cell_number:"2A-4-2.2", freeness: true},
        {id:	20, cell_number:"2A-4-3.1", freeness: true},
        {id:	21, cell_number:"2A-4-3.2", freeness: true},
        {id:	22, cell_number:"2A-4-4.1", freeness: true},
        {id:	23, cell_number:"2A-4-4.2", freeness: true},
        {id:	24, cell_number:"2A-5-1.1", freeness: true},
        {id:	25, cell_number:"2A-5-1.2", freeness: true},
        {id:	26, cell_number:"2A-5-2.1", freeness: true},
        {id:	27, cell_number:"2A-5-2.2", freeness: true},
        {id:	28, cell_number:"2A-5-3.1", freeness: true},
        {id:	29, cell_number:"2A-5-3.2", freeness: true},
        {id:	30, cell_number:"2A-5-4.1", freeness: true},
        {id:	31, cell_number:"2A-5-4.2", freeness: true},
        {id:	32, cell_number:"2A-5-5.1", freeness: true},
        {id:	33, cell_number:"2A-5-5.2", freeness: true},
        {id:	34, cell_number:"2A-6-1.1", freeness: true},
        {id:	35, cell_number:"2A-6-2.1", freeness: true},
        {id:	36, cell_number:"2A-6-3.1", freeness: true},
        {id:	37, cell_number:"2A-6-4.1", freeness: true},
        {id:	38, cell_number:"2A-7-1.1", freeness: true},
        {id:	39, cell_number:"2A-7-2.1", freeness: true},
        {id:	40, cell_number:"2A-7-3.1", freeness: true},
        {id:	41, cell_number:"2A-7-4.1", freeness: true},
        {id:	42, cell_number:"2A-7-5.1", freeness: true},
        {id:	144, cell_number:"2A-0", freeness: true},

        {id:	43, cell_number:"2B-1-1.1", freeness: true},
        {id:	44, cell_number:"2B-1-1.2", freeness: true},
        {id:	45, cell_number:"2B-1-2.1", freeness: true},
        {id:	46, cell_number:"2B-1-2.2", freeness: true},
        {id:	47, cell_number:"2B-1-3.1", freeness: true},
        {id:	48, cell_number:"2B-1-3.2", freeness: true},
        {id:	49, cell_number:"2B-1-4.1", freeness: true},
        {id:	50, cell_number:"2B-1-4.2", freeness: true},
        {id:	51, cell_number:"2B-2-1.1", freeness: true},
        {id:	52, cell_number:"2B-2-1.2", freeness: true},
        {id:	53, cell_number:"2B-2-2.1", freeness: true},
        {id:	54, cell_number:"2B-2-2.2", freeness: true},
        {id:	55, cell_number:"2B-2-3.1", freeness: true},
        {id:	56, cell_number:"2B-2-3.2", freeness: true},
        {id:	57, cell_number:"2B-2-4.1", freeness: true},
        {id:	58, cell_number:"2B-2-4.2", freeness: true},
        {id:	59, cell_number:"2B-2-5.1", freeness: true},
        {id:	60, cell_number:"2B-2-5.2", freeness: true},
        {id:	61, cell_number:"2B-2-6.1", freeness: true},
        {id:	62, cell_number:"2B-2-6.2", freeness: true},
        {id:	63, cell_number:"2B-3-1.1", freeness: true},
        {id:	64, cell_number:"2B-3-2.1", freeness: true},
        {id:	65, cell_number:"2B-3-3.1", freeness: true},
        {id:	66, cell_number:"2B-3-4.1", freeness: true},
        {id:	67, cell_number:"2B-4-1.1", freeness: true},
        {id:	68, cell_number:"2B-4-1.2", freeness: true},
        {id:	69, cell_number:"2B-4-2.1", freeness: true},
        {id:	70, cell_number:"2B-4-2.2", freeness: true},
        {id:	71, cell_number:"2B-4-3.1", freeness: true},
        {id:	72, cell_number:"2B-4-3.2", freeness: true},
        {id:	73, cell_number:"2B-4-4.1", freeness: true},
        {id:	74, cell_number:"2B-4-4.2", freeness: true},
        {id:	75, cell_number:"2B-4-5.1", freeness: true},
        {id:	76, cell_number:"2B-4-5.2", freeness: true},
        {id:	77, cell_number:"2B-4-6.1", freeness: true},
        {id:	78, cell_number:"2B-4-6.2", freeness: true},
        {id:	145, cell_number:"2B-0", freeness: true},

        // Сектор С
        // блок 1 =======================================
        {id:	79, cell_number:"2C-1-1.1", freeness: true},
        {id:	79, cell_number:"2C-1-1.2", freeness: true},
        {id:	80, cell_number:"2C-1-2.1", freeness: true},
        {id:	80, cell_number:"2C-1-2.2", freeness: true},
        {id:	81, cell_number:"2C-1-3.1", freeness: true},
        {id:	81, cell_number:"2C-1-3.2", freeness: true},
        {id:	82, cell_number:"2C-1-4.1", freeness: true},
        {id:	82, cell_number:"2C-1-4.2", freeness: true},
        {id:	82, cell_number:"2C-1-5.1", freeness: true},
        {id:	82, cell_number:"2C-1-5.2", freeness: true},
        // блок 2 =======================================
        {id:	83, cell_number:"2C-2-1.1", freeness: true},
        {id:	83, cell_number:"2C-2-1.2", freeness: true},
        {id:	84, cell_number:"2C-2-2.1", freeness: true},
        {id:	84, cell_number:"2C-2-2.2", freeness: true},
        {id:	85, cell_number:"2C-2-3.1", freeness: true},
        {id:	85, cell_number:"2C-2-3.2", freeness: true},
        {id:	86, cell_number:"2C-2-4.1", freeness: true},
        {id:	86, cell_number:"2C-2-4.2", freeness: true},
        {id:	87, cell_number:"2C-2-5.1", freeness: true},
        {id:	87, cell_number:"2C-2-5.2", freeness: true},

        // {id:	88, cell_number:"2C-2-6.1", freeness: true},
        // {id:	89, cell_number:"2C-2-7.1", freeness: true},
        // {id:	90, cell_number:"2C-2-8.1", freeness: true},
        // {id:	91, cell_number:"2C-2-9.1", freeness: true},

        // блок 3 =======================================
        {id:	92, cell_number:"2C-3-1.1", freeness: true},
        {id:	92, cell_number:"2C-3-1.2", freeness: true},
        {id:	93, cell_number:"2C-3-2.1", freeness: true},
        {id:	93, cell_number:"2C-3-2.2", freeness: true},
        {id:	94, cell_number:"2C-3-3.1", freeness: true},
        {id:	94, cell_number:"2C-3-3.2", freeness: true},
        {id:	95, cell_number:"2C-3-4.1", freeness: true},
        {id:	95, cell_number:"2C-3-4.2", freeness: true},
        {id:	96, cell_number:"2C-3-5.1", freeness: true},
        {id:	96, cell_number:"2C-3-5.2", freeness: true},

        // блок 4 =======================================
        {id:	97, cell_number:"2C-4-1.1", freeness: true},
        {id:	98, cell_number:"2C-4-1.2", freeness: true},
        {id:	99, cell_number:"2C-4-2.1", freeness: true},
        {id:	100, cell_number:"2C-4-2.2", freeness: true},
        {id:	101, cell_number:"2C-4-3.1", freeness: true},
        {id:	102, cell_number:"2C-4-3.2", freeness: true},
        {id:	103, cell_number:"2C-4-4.1", freeness: true},
        {id:	104, cell_number:"2C-4-4.2", freeness: true},
        {id:	105, cell_number:"2C-4-5.1", freeness: true},
        {id:	106, cell_number:"2C-4-5.2", freeness: true},

        // {id:	107, cell_number:"2C-4-6.1", freeness: true},
        // {id:	108, cell_number:"2C-4-6.2", freeness: true},
        // {id:	109, cell_number:"2C-4-7.1", freeness: true},
        // {id:	110, cell_number:"2C-4-7.2", freeness: true},

        // блок 5 =======================================
        {id:	111, cell_number:"2C-5-1.1", freeness: true},
        {id:	112, cell_number:"2C-5-1.2", freeness: true},
        {id:	113, cell_number:"2C-5-2.1", freeness: true},
        {id:	114, cell_number:"2C-5-2.2", freeness: true},
        {id:	115, cell_number:"2C-5-3.1", freeness: true},
        {id:	116, cell_number:"2C-5-3.2", freeness: true},
        {id:	117, cell_number:"2C-5-4.1", freeness: true},
        {id:	118, cell_number:"2C-5-4.2", freeness: true},
        {id:	119, cell_number:"2C-5-5.1", freeness: true},
        {id:	120, cell_number:"2C-5-5.2", freeness: true},

        // {id:	121, cell_number:"2C-5-6.1", freeness: true},
        // {id:	122, cell_number:"2C-5-6.2", freeness: true},
        // {id:	123, cell_number:"2C-5-7.1", freeness: true},
        // {id:	124, cell_number:"2C-5-7.2", freeness: true},
        {id:	125, cell_number:"2C-0", freeness: true},

        {id:	125, cell_number:"2D-1.1", freeness: true},
        {id:	126, cell_number:"2D-2.1", freeness: true},
        {id:	127, cell_number:"2D-3.1", freeness: true},
        {id:	128, cell_number:"2D-4.1", freeness: true},
        {id:	129, cell_number:"2D-5.1", freeness: true},
        {id:	130, cell_number:"2D-6.1", freeness: true},
        {id:	131, cell_number:"2D-7.1", freeness: true},
        {id:	132, cell_number:"2D-8.1", freeness: true},
        {id:	133, cell_number:"2D-9.1", freeness: true},
        // {id:	134, cell_number:"2D-1-10.1", freeness: true},
        // {id:	135, cell_number:"2D-1-11.1", freeness: true},
        // {id:	136, cell_number:"2D-1-12.1", freeness: true},
        // {id:	137, cell_number:"2D-1-13.1", freeness: true},
        // {id:	138, cell_number:"2D-1-14.1", freeness: true},
        // {id:	139, cell_number:"2D-1-15.1", freeness: true},
        // {id:	140, cell_number:"2D-1-16.1", freeness: true},
        // {id:	141, cell_number:"2D-1-17.1", freeness: true},
        // {id:	142, cell_number:"2D-1-18.1", freeness: true},
        // {id:	143, cell_number:"2D-1-19.1", freeness: true},
        // {id:	144, cell_number:"2D-1-20.1", freeness: true},
        {id:	147, cell_number:"2D-0", freeness: true},

       ]
    const znpcData =[
        {
            number_opening: 2,
            part: "Тест 20мм",
            color: "Красный",
            part_name: "боковина ЛВ пенала ЛВ",
            qluing_line: null,
            semiproduct: "",
            assembling: "",
            packaging: "",
            cut_size: null,
            size_requiried: null,
            gluing_scheme: "1д",
            dop_gluing_scheme: "",
            groove: "Паз 12х6",
            cutting_bool: true,
            pasting_bool: true,
            additive_bool: true,
            format_bool: null,
            curvilinear_bool: null,
            universal_bool: null,
            cutting_corners_bool: null,
            milling_bool: null,
            film_pasting_bool: null,
            assembly_bool: null,
            accessories_bool: null,
            styrofoam_bool: null,
            cutting_cardboard_bool: null,
            rolling_cardboard_bool: null,
            package_bool: true,
            dop_accessories_bool: null,
            details_after_cutting: null,
            quantity_pallet: 105,
            sum_number_parts: 210,
            number_pallets: 2,
            quantity: 105,
            dop_number_pallets: 0,
            dop_quantity: 0,
            address_pallet_1: "2A-3-1.1",
            znpId: 1
        },
        {

            number_opening: 2,
            part: "Тест 20мм",
            color: "Красный",
            part_name: "боковина ЛВ пенала ЛВ",
            qluing_line: null,
            semiproduct: "",
            assembling: "",
            packaging: "",
            cut_size: null,
            size_requiried: null,
            gluing_scheme: "1д",
            dop_gluing_scheme: "",
            groove: "Паз 12х6",
            cutting_bool: true,
            pasting_bool: true,
            additive_bool: true,
            format_bool: null,
            curvilinear_bool: null,
            universal_bool: null,
            cutting_corners_bool: null,
            milling_bool: null,
            film_pasting_bool: null,
            assembly_bool: null,
            accessories_bool: null,
            styrofoam_bool: null,
            cutting_cardboard_bool: null,
            rolling_cardboard_bool: null,
            package_bool: true,
            dop_accessories_bool: null,
            details_after_cutting: null,
            quantity_pallet: 105,
            sum_number_parts: 210,
            number_pallets: 2,
            quantity: 105,
            dop_number_pallets: 0,
            dop_quantity: 0,
            address_pallet_1: "2A-3-2.1",
            znpId: 1
        },
        {

            number_opening: 2,
            part: "Тест 20мм",
            color: "Красный",
            part_name: "боковина ЛВ пенала ЛВ",
            qluing_line: null,
            semiproduct: "",
            assembling: "",
            packaging: "",
            cut_size: null,
            size_requiried: null,
            gluing_scheme: "1д",
            dop_gluing_scheme: "",
            groove: "Паз 12х6",
            cutting_bool: true,
            pasting_bool: true,
            additive_bool: true,
            format_bool: null,
            curvilinear_bool: null,
            universal_bool: null,
            cutting_corners_bool: null,
            milling_bool: null,
            film_pasting_bool: null,
            assembly_bool: null,
            accessories_bool: null,
            styrofoam_bool: null,
            cutting_cardboard_bool: null,
            rolling_cardboard_bool: null,
            package_bool: true,
            dop_accessories_bool: null,
            details_after_cutting: null,
            quantity_pallet: 105,
            sum_number_parts: 210,
            number_pallets: 2,
            quantity: 105,
            dop_number_pallets: 0,
            dop_quantity: 0,
            address_pallet_1: "2A-3-3.1",
            znpId: 2
        },
        {

            number_opening: 1,
            part: "дсп 20мм",
            color: "белый",
            part_name: "боковина ЛВ пенала ЛВ",
            qluing_line: null,
            semiproduct: null,
            assembling: null,
            packaging: null,
            cut_size: "1800x350",
            size_requiried: null,
            gluing_scheme: "1д",
            dop_gluing_scheme: null,
            groove: "Паз 12х6",
            cutting_bool: true,
            pasting_bool: true,
            additive_bool: true,
            format_bool: null,
            curvilinear_bool: null,
            universal_bool: null,
            cutting_corners_bool: null,
            milling_bool: null,
            film_pasting_bool: null,
            assembly_bool: null,
            accessories_bool: null,
            styrofoam_bool: null,
            cutting_cardboard_bool: null,
            rolling_cardboard_bool: null,
            package_bool: true,
            dop_accessories_bool: null,
            details_after_cutting: null,
            quantity_pallet: 105,
            sum_number_parts: 210,
            number_pallets: 2,
            quantity: 105,
            dop_number_pallets: null,
            dop_quantity: null,
            address_pallet_1: "2A-3-4.1",
            znpId: 2
        },
        {
            number_opening: 2,
            part: "Тест 200мм",
            color: "Красный",
            part_name: "боковина ЛВ пенала ЛВ",
            qluing_line: null,
            semiproduct: "",
            assembling: "",
            packaging: "",
            cut_size: null,
            size_requiried: null,
            gluing_scheme: "1д",
            dop_gluing_scheme: "",
            groove: "Паз 12х6",
            cutting_bool: true,
            pasting_bool: true,
            additive_bool: true,
            format_bool: null,
            curvilinear_bool: null,
            universal_bool: null,
            cutting_corners_bool: null,
            milling_bool: null,
            film_pasting_bool: null,
            assembly_bool: null,
            accessories_bool: null,
            styrofoam_bool: null,
            cutting_cardboard_bool: null,
            rolling_cardboard_bool: null,
            package_bool: true,
            dop_accessories_bool: null,
            details_after_cutting: null,
            quantity_pallet: 105,
            sum_number_parts: 210,
            number_pallets: 2,
            quantity: 105,
            dop_number_pallets: 0,
            dop_quantity: 0,
            address_pallet_1: "2A-3-1.1",
            znpId: 3
        },
        {
            number_opening: 2,
            part: "Тест 200мм",
            color: "Красный",
            part_name: "боковина ЛВ пенала ЛВ",
            qluing_line: null,
            semiproduct: "",
            assembling: "",
            packaging: "",
            cut_size: null,
            size_requiried: null,
            gluing_scheme: "1д",
            dop_gluing_scheme: "",
            groove: "Паз 12х6",
            cutting_bool: true,
            pasting_bool: true,
            additive_bool: true,
            format_bool: null,
            curvilinear_bool: null,
            universal_bool: null,
            cutting_corners_bool: null,
            milling_bool: null,
            film_pasting_bool: null,
            assembly_bool: null,
            accessories_bool: null,
            styrofoam_bool: null,
            cutting_cardboard_bool: null,
            rolling_cardboard_bool: null,
            package_bool: true,
            dop_accessories_bool: null,
            details_after_cutting: null,
            quantity_pallet: 105,
            sum_number_parts: 210,
            number_pallets: 2,
            quantity: 105,
            dop_number_pallets: 0,
            dop_quantity: 0,
            address_pallet_1: "2A-3-1.1",
            znpId: 3
        },
        {
            number_opening: 1,
            part: "Тест 40мм",
            color: "Красный",
            part_name: "боковина ЛВ пенала ЛВ",
            qluing_line: null,
            semiproduct: "",
            assembling: "",
            packaging: "",
            cut_size: null,
            size_requiried: null,
            gluing_scheme: "1д",
            dop_gluing_scheme: "",
            groove: "Паз 12х6",
            cutting_bool: true,
            pasting_bool: true,
            additive_bool: true,
            format_bool: null,
            curvilinear_bool: null,
            universal_bool: null,
            cutting_corners_bool: null,
            milling_bool: null,
            film_pasting_bool: null,
            assembly_bool: null,
            accessories_bool: null,
            styrofoam_bool: null,
            cutting_cardboard_bool: null,
            rolling_cardboard_bool: null,
            package_bool: true,
            dop_accessories_bool: null,
            details_after_cutting: null,
            quantity_pallet: 105,
            sum_number_parts: 210,
            number_pallets: 2,
            quantity: 105,
            dop_number_pallets: 0,
            dop_quantity: 0,
            address_pallet_1: "2A-3-1.1",
            znpId: 4
        },
        {
            number_opening: 1,
            part: "Тест 40мм",
            color: "Красный",
            part_name: "боковина ЛВ пенала ЛВ",
            qluing_line: null,
            semiproduct: "",
            assembling: "",
            packaging: "",
            cut_size: null,
            size_requiried: null,
            gluing_scheme: "1д",
            dop_gluing_scheme: "",
            groove: "Паз 12х6",
            cutting_bool: true,
            pasting_bool: true,
            additive_bool: true,
            format_bool: null,
            curvilinear_bool: null,
            universal_bool: null,
            cutting_corners_bool: null,
            milling_bool: null,
            film_pasting_bool: null,
            assembly_bool: null,
            accessories_bool: null,
            styrofoam_bool: null,
            cutting_cardboard_bool: null,
            rolling_cardboard_bool: null,
            package_bool: true,
            dop_accessories_bool: null,
            details_after_cutting: null,
            quantity_pallet: 105,
            sum_number_parts: 210,
            number_pallets: 2,
            quantity: 105,
            dop_number_pallets: 0,
            dop_quantity: 0,
            address_pallet_1: "2A-3-1.1",
            znpId: 4
        },
        {
            number_opening: 1,
            part: "Тест 500мм",
            color: "Красный",
            part_name: "боковина ЛВ пенала ЛВ",
            qluing_line: null,
            semiproduct: "",
            assembling: "",
            packaging: "",
            cut_size: null,
            size_requiried: null,
            gluing_scheme: "1д",
            dop_gluing_scheme: "",
            groove: "Паз 12х6",
            cutting_bool: true,
            pasting_bool: true,
            additive_bool: true,
            format_bool: null,
            curvilinear_bool: null,
            universal_bool: null,
            cutting_corners_bool: null,
            milling_bool: null,
            film_pasting_bool: null,
            assembly_bool: null,
            accessories_bool: null,
            styrofoam_bool: null,
            cutting_cardboard_bool: null,
            rolling_cardboard_bool: null,
            package_bool: true,
            dop_accessories_bool: null,
            details_after_cutting: null,
            quantity_pallet: 105,
            sum_number_parts: 210,
            number_pallets: 2,
            quantity: 105,
            dop_number_pallets: 0,
            dop_quantity: 0,
            address_pallet_1: "2A-3-1.1",
            znpId: 5
        },
        {
            number_opening: 2,
            part: "Тест 500мм",
            color: "Красный",
            part_name: "боковина ЛВ пенала ЛВ",
            qluing_line: null,
            semiproduct: "",
            assembling: "",
            packaging: "",
            cut_size: null,
            size_requiried: null,
            gluing_scheme: "1д",
            dop_gluing_scheme: "",
            groove: "Паз 12х6",
            cutting_bool: true,
            pasting_bool: true,
            additive_bool: true,
            format_bool: null,
            curvilinear_bool: null,
            universal_bool: null,
            cutting_corners_bool: null,
            milling_bool: null,
            film_pasting_bool: null,
            assembly_bool: null,
            accessories_bool: null,
            styrofoam_bool: null,
            cutting_cardboard_bool: null,
            rolling_cardboard_bool: null,
            package_bool: true,
            dop_accessories_bool: null,
            details_after_cutting: null,
            quantity_pallet: 105,
            sum_number_parts: 210,
            number_pallets: 2,
            quantity: 105,
            dop_number_pallets: 0,
            dop_quantity: 0,
            address_pallet_1: "2A-3-1.1",
            znpId: 5
        },
        {
            number_opening: 2,
            part: "Тест 60мм",
            color: "Красный",
            part_name: "боковина ЛВ пенала ЛВ",
            qluing_line: null,
            semiproduct: "",
            assembling: "",
            packaging: "",
            cut_size: null,
            size_requiried: null,
            gluing_scheme: "1д",
            dop_gluing_scheme: "",
            groove: "Паз 12х6",
            cutting_bool: true,
            pasting_bool: true,
            additive_bool: true,
            format_bool: null,
            curvilinear_bool: null,
            universal_bool: null,
            cutting_corners_bool: null,
            milling_bool: null,
            film_pasting_bool: null,
            assembly_bool: null,
            accessories_bool: null,
            styrofoam_bool: null,
            cutting_cardboard_bool: null,
            rolling_cardboard_bool: null,
            package_bool: true,
            dop_accessories_bool: null,
            details_after_cutting: null,
            quantity_pallet: 105,
            sum_number_parts: 210,
            number_pallets: 2,
            quantity: 105,
            dop_number_pallets: 0,
            dop_quantity: 0,
            address_pallet_1: "2A-3-1.1",
            znpId: 6
        },
        {
            number_opening: 2,
            part: "Тест 60мм",
            color: "Красный",
            part_name: "боковина ЛВ пенала ЛВ",
            qluing_line: null,
            semiproduct: "",
            assembling: "",
            packaging: "",
            cut_size: null,
            size_requiried: null,
            gluing_scheme: "1д",
            dop_gluing_scheme: "",
            groove: "Паз 12х6",
            cutting_bool: true,
            pasting_bool: true,
            additive_bool: true,
            format_bool: null,
            curvilinear_bool: null,
            universal_bool: null,
            cutting_corners_bool: null,
            milling_bool: null,
            film_pasting_bool: null,
            assembly_bool: null,
            accessories_bool: null,
            styrofoam_bool: null,
            cutting_cardboard_bool: null,
            rolling_cardboard_bool: null,
            package_bool: true,
            dop_accessories_bool: null,
            details_after_cutting: null,
            quantity_pallet: 105,
            sum_number_parts: 210,
            number_pallets: 2,
            quantity: 105,
            dop_number_pallets: 0,
            dop_quantity: 0,
            address_pallet_1: "2A-3-1.1",
            znpId: 6
        },
    ]
    const  znpc = [
        { znp_number: "№1111", model: "Лето", edging: "04 мм в цвет"},
        { znp_number: "№2222", model: "Зима", edging: "04 мм в цвет"},
        { znp_number: "№3333", model: "Осень", edging: "04 мм в цвет"},
        { znp_number: "№44444", model: "Осень", edging: "04 мм в цвет"},
        { znp_number: "№55555", model: "Осень", edging: "04 мм в цвет"},
        { znp_number: "№6666", model: "Осень", edging: "04 мм в цвет"},
        { znp_number: "№77777", model: "Осень", edging: "04 мм в цвет"},
    ]

    // Создание записей в таблицу буфера
    async function pppBuf (bufrs){
        for (const bufr of bufrs) {
            console.log(bufr.cell_number)
                await axios.post(process.env.REACT_APP_BUFF_URL,{
                    cell_number: bufr.cell_number,
                    freeness: bufr.freeness
                 })
        }
    }
    async function pppZnp (znpc) {
        for (const znps of znpc) {
            console.log(znps.znp_number)
            await axios.post(process.env.REACT_APP_ZNP_URL, {
                znp_number: znps.znp_number,
                model: znps.model,
                edging: znps.edging

            })
        }
    }
    async function pppZnpData (znpcData){
        for (const znp of znpcData) {
            console.log(znp.znpId)
            await axios.post(process.env.REACT_APP_ZNPDATA_URL,{
                znpId: znp.znpId,
                number_opening: znp.number_pallets,
                part: znp.part,
                color: znp.color,
                part_name: znp.part_name,
                qluing_line:znp.qluing_line,
                semiproduct:znp.semiproduct,
                assembling:znp.assembling,
                packaging: znp.packaging,
                cut_size: znp.cut_size,
                size_requiried: znp.size_requiried,
                gluing_scheme: znp.qluing_scheme,
                dop_gluing_scheme: znp.dop_gluing_scheme,
                groove: znp.groove,
                cutting_bool: znp.cutting_bool,
                pasting_bool: znp.pasting_bool,
                additive_bool: znp.additive_bool,
                format_bool: znp.format_bool,
                curvilinear_bool: znp.curvilinear_bool,
                universal_bool: znp.universal_bool,
                cutting_corners_bool: znp.cutting_corners_bool,
                milling_bool: znp.milling_bool,
                film_pasting_bool: znp.film_pasting_bool,
                assembly_bool: znp.assembly_bool,
                accessories_bool: znp.accessories_bool,
                styrofoam_bool: znp.styrofoam_bool,
                cutting_cardboard_bool: znp.cutting_cardboard_bool,
                rolling_cardboard_bool: znp.rolling_cardboard_bool,
                package_bool: znp.package_bool,
                dop_accessories_bool: znp.dop_accessories_bool,
                details_after_cutting: znp.details_after_cutting,
                quantity_pallet: znp.quantity_pallet,
                sum_number_parts: znp.sum_number_parts,
                number_pallets: znp.number_pallets,
                quantity: znp.quantity,
                dop_number_pallets: znp.dop_number_pallets,
                dop_quantity: znp.dop_quantity,
                number_of_pallets_1: znp.number_of_pallets_1,
                address_pallet_1: znp.address_pallet_1,
                number_of_pallets_2: znp.number_of_pallets_2,
                address_pallet_2: znp.address_pallet_2,
                number_of_pallets_3: znp.number_of_pallets_3,
                address_pallet_3: znp.address_pallet_3,
                number_of_pallets_4: znp.number_of_pallets_4,
                address_pallet_4: znp.address_pallet_4,
                number_of_pallets_5: znp.number_of_pallets_5,
                address_pallet_5: znp.address_pallet_5

            })
        }


    }


    // Создание записей в таблицу станков
    const Stancki = [
        {
            stanock: "BST-1",
            status:"Готов",
            sector:"Присадка"
        },
        {
            stanock: "BST-2",
            status:"Готов",
            sector:"Присадка"
        },
        {
            stanock: "BHX-2",
            status:"Готов",
            sector:"Присадка"
        },
        {
            stanock: "KDT-6032",
            status:"Готов",
            sector:"Присадка"
        },
        {
            stanock: "Evolution",
            status:"Готов",
            sector:"Поклейка"
        },
        {
            stanock: "S500-2",
            status:"Готов",
            sector:"Поклейка"
        },
        {
            stanock: "S500-3",
            status:"Готов",
            sector:"Поклейка"
        },
        {
            stanock: "S500-4",
            status:"Готов",
            sector:"Поклейка"
        },
    ]
    // Создание записей в таблицу станков
    async function stanock (Stancki){
        for (const Stanck of Stancki) {
            // console.log(bufr.cell_number)
            await axios.post(process.env.REACT_APP_SERVICE_URL,{
                stanock: Stanck.stanock,
                status: Stanck.status,
                sector: Stanck.sector
            })
        }
    }

    return (
        <div>
            <button onClick={()=> pppBuf(bufrs)}> Буфер</button>
            <button onClick={()=> pppZnp(znpc)}> Знп</button>
            <button onClick={()=> pppZnpData(znpcData)}> Знп дата</button>
            {/*<button onClick={()=> stanock (StanckiPage)}> Станки</button>*/}
        </div>
    );
};

export default Bufr;