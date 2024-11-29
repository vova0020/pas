import React, {useState} from 'react';

import BuffChildrenFalse from "./buffChildren/buff_children_false";
import BuffChildrenTrue from "./buffChildren/buff_children_true";

const BuffCell = ({bufferLinks,sectr,buffers, ...props}) => {
    // Переменная с информациее что лежит в ячейке
    let r = {}
    // Переменная которая определяет пустая или занятая ячейка
    let status = ''
// Цикл проверки какие ячейки заняты и с какими данными, изменение статуса на акттивную ячейку или нет
    for (const bufferLink of bufferLinks) {
        if (sectr.cell_number === bufferLink.address_pallet_1) {
            // console.log(bufferLink)
            r = {
                znp_number:bufferLink.znp_number,
                model:bufferLink.model,
                number_of_pallets:bufferLink.number_of_pallets_1,
                address_pallet:bufferLink.address_pallet_1,
                part_name: bufferLink.part_name,
                cut_size: bufferLink.cut_size,
                boolik:true,
                palet: "Палет 1"
            }
            status = true
        } else if (sectr.cell_number === bufferLink.address_pallet_2){
            r = {
                znp_number:bufferLink.znp_number,
                model:bufferLink.model,
                number_of_pallets:bufferLink.number_of_pallets_2,
                address_pallet:bufferLink.address_pallet_2,
                part_name: bufferLink.part_name,
                cut_size: bufferLink.cut_size,
                boolik:true,
                palet: "Палет 2"
            }
            status = true
        }else if (sectr.cell_number === bufferLink.address_pallet_3){
            r = {
                znp_number:bufferLink.znp_number,
                model:bufferLink.model,
                number_of_pallets:bufferLink.number_of_pallets_3,
                address_pallet:bufferLink.address_pallet_3,
                part_name: bufferLink.part_name,
                cut_size: bufferLink.cut_size,
                boolik:true,
                palet: "Палет 3"
            }
            status = true
        }else if (sectr.cell_number === bufferLink.address_pallet_4){
            r = {
                znp_number:bufferLink.znp_number,
                model:bufferLink.model,
                number_of_pallets:bufferLink.number_of_pallets_4,
                address_pallet:bufferLink.address_pallet_4,
                part_name: bufferLink.part_name,
                cut_size: bufferLink.cut_size,
                boolik:true,
                palet: "Палет 4"
            }
            status = true
        }else if (sectr.cell_number === bufferLink.address_pallet_5) {
            r = {
                znp_number: bufferLink.znp_number,
                model: bufferLink.model,
                number_of_pallets: bufferLink.number_of_pallets_5,
                address_pallet: bufferLink.address_pallet_5,
                part_name: bufferLink.part_name,
                cut_size: bufferLink.cut_size,
                boolik: true,
                palet: "Палет 5"
            }
            status = true
        }else if (sectr.cell_number === bufferLink.address_pallet_6) {
            r = {
                znp_number: bufferLink.znp_number,
                model: bufferLink.model,
                number_of_pallets: bufferLink.number_of_pallets_6,
                address_pallet: bufferLink.address_pallet_6,
                part_name: bufferLink.part_name,
                cut_size: bufferLink.cut_size,
                boolik: true,
                palet: "Палет 6"
            }
            status = true
        }else if (sectr.cell_number === bufferLink.address_pallet_7) {
            r = {
                znp_number: bufferLink.znp_number,
                model: bufferLink.model,
                number_of_pallets: bufferLink.number_of_pallets_7,
                address_pallet: bufferLink.address_pallet_7,
                part_name: bufferLink.part_name,
                cut_size: bufferLink.cut_size,
                boolik: true,
                palet: "Палет 7"
            }
            status = true
        }else if (sectr.cell_number === bufferLink.address_pallet_8) {
            r = {
                znp_number: bufferLink.znp_number,
                model: bufferLink.model,
                number_of_pallets: bufferLink.number_of_pallets_8,
                address_pallet: bufferLink.address_pallet_8,
                part_name: bufferLink.part_name,
                cut_size: bufferLink.cut_size,
                boolik: true,
                palet: "Палет 8"
            }
            status = true
        }else if (sectr.cell_number === bufferLink.address_pallet_9) {
            r = {
                znp_number: bufferLink.znp_number,
                model: bufferLink.model,
                number_of_pallets: bufferLink.number_of_pallets_9,
                address_pallet: bufferLink.address_pallet_9,
                part_name: bufferLink.part_name,
                cut_size: bufferLink.cut_size,
                boolik: true,
                palet: "Палет 9"
            }
            status = true
        }else if (sectr.cell_number === bufferLink.address_pallet_10) {
            r = {
                znp_number: bufferLink.znp_number,
                model: bufferLink.model,
                number_of_pallets: bufferLink.number_of_pallets_10,
                address_pallet: bufferLink.address_pallet_10,
                part_name: bufferLink.part_name,
                cut_size: bufferLink.cut_size,
                boolik: true,
                palet: "Палет 10"
            }
            status = true
        }else if (sectr.cell_number === bufferLink.address_pallet_11) {
            r = {
                znp_number: bufferLink.znp_number,
                model: bufferLink.model,
                number_of_pallets: bufferLink.number_of_pallets_11,
                address_pallet: bufferLink.address_pallet_11,
                part_name: bufferLink.part_name,
                cut_size: bufferLink.cut_size,
                boolik: true,
                palet: "Палет 11"
            }
            status = true
        }else if (sectr.cell_number === bufferLink.address_pallet_12) {
            r = {
                znp_number: bufferLink.znp_number,
                model: bufferLink.model,
                number_of_pallets: bufferLink.number_of_pallets_12,
                address_pallet: bufferLink.address_pallet_12,
                part_name: bufferLink.part_name,
                cut_size: bufferLink.cut_size,
                boolik: true,
                palet: "Палет 12"
            }
            status = true
        }else if (sectr.cell_number === bufferLink.address_pallet_13) {
            r = {
                znp_number: bufferLink.znp_number,
                model: bufferLink.model,
                number_of_pallets: bufferLink.number_of_pallets_13,
                address_pallet: bufferLink.address_pallet_13,
                part_name: bufferLink.part_name,
                cut_size: bufferLink.cut_size,
                boolik: true,
                palet: "Палет 13"
            }
            status = true
        }else if (sectr.cell_number === bufferLink.address_pallet_14) {
            r = {
                znp_number: bufferLink.znp_number,
                model: bufferLink.model,
                number_of_pallets: bufferLink.number_of_pallets_14,
                address_pallet: bufferLink.address_pallet_14,
                part_name: bufferLink.part_name,
                cut_size: bufferLink.cut_size,
                boolik: true,
                palet: "Палет 14"
            }
            status = true
        }else if (sectr.cell_number === bufferLink.address_pallet_15) {
            r = {
                znp_number: bufferLink.znp_number,
                model: bufferLink.model,
                number_of_pallets: bufferLink.number_of_pallets_15,
                address_pallet: bufferLink.address_pallet_15,
                part_name: bufferLink.part_name,
                cut_size: bufferLink.cut_size,
                boolik: true,
                palet: "Палет 15"
            }
            status = true
        }else if (sectr.cell_number === bufferLink.address_pallet_16) {
            r = {
                znp_number: bufferLink.znp_number,
                model: bufferLink.model,
                number_of_pallets: bufferLink.number_of_pallets_16,
                address_pallet: bufferLink.address_pallet_16,
                part_name: bufferLink.part_name,
                cut_size: bufferLink.cut_size,
                boolik: true,
                palet: "Палет 16"
            }
            status = true
        }else if (sectr.cell_number === bufferLink.address_pallet_17) {
            r = {
                znp_number: bufferLink.znp_number,
                model: bufferLink.model,
                number_of_pallets: bufferLink.number_of_pallets_17,
                address_pallet: bufferLink.address_pallet_17,
                part_name: bufferLink.part_name,
                cut_size: bufferLink.cut_size,
                boolik: true,
                palet: "Палет 17"
            }
            status = true
        }else if (sectr.cell_number === bufferLink.address_pallet_18) {
            r = {
                znp_number: bufferLink.znp_number,
                model: bufferLink.model,
                number_of_pallets: bufferLink.number_of_pallets_18,
                address_pallet: bufferLink.address_pallet_18,
                part_name: bufferLink.part_name,
                cut_size: bufferLink.cut_size,
                boolik: true,
                palet: "Палет 18"
            }
            status = true
        }else if (sectr.cell_number === bufferLink.address_pallet_19) {
            r = {
                znp_number: bufferLink.znp_number,
                model: bufferLink.model,
                number_of_pallets: bufferLink.number_of_pallets_19,
                address_pallet: bufferLink.address_pallet_19,
                part_name: bufferLink.part_name,
                cut_size: bufferLink.cut_size,
                boolik: true,
                palet: "Палет 19"
            }
            status = true
        }else if (sectr.cell_number === bufferLink.address_pallet_20) {
            r = {
                znp_number: bufferLink.znp_number,
                model: bufferLink.model,
                number_of_pallets: bufferLink.number_of_pallets_20,
                address_pallet: bufferLink.address_pallet_20,
                part_name: bufferLink.part_name,
                cut_size: bufferLink.cut_size,
                boolik: true,
                palet: "Палет 20"
            }
            status = true
        }else if (sectr.cell_number === bufferLink.address_pallet_21) {
            r = {
                znp_number: bufferLink.znp_number,
                model: bufferLink.model,
                number_of_pallets: bufferLink.number_of_pallets_21,
                address_pallet: bufferLink.address_pallet_21,
                part_name: bufferLink.part_name,
                cut_size: bufferLink.cut_size,
                boolik: true,
                palet: "Палет 21"
            }
            status = true
        }else if (sectr.cell_number === bufferLink.address_pallet_22) {
            r = {
                znp_number: bufferLink.znp_number,
                model: bufferLink.model,
                number_of_pallets: bufferLink.number_of_pallets_22,
                address_pallet: bufferLink.address_pallet_22,
                part_name: bufferLink.part_name,
                cut_size: bufferLink.cut_size,
                boolik: true,
                palet: "Палет 22"
            }
            status = true
        }else if (sectr.cell_number === bufferLink.address_pallet_23) {
            r = {
                znp_number: bufferLink.znp_number,
                model: bufferLink.model,
                number_of_pallets: bufferLink.number_of_pallets_23,
                address_pallet: bufferLink.address_pallet_23,
                part_name: bufferLink.part_name,
                cut_size: bufferLink.cut_size,
                boolik: true,
                palet: "Палет 23"
            }
            status = true
        }else if (sectr.cell_number === bufferLink.address_pallet_24) {
            r = {
                znp_number: bufferLink.znp_number,
                model: bufferLink.model,
                number_of_pallets: bufferLink.number_of_pallets_24,
                address_pallet: bufferLink.address_pallet_24,
                part_name: bufferLink.part_name,
                cut_size: bufferLink.cut_size,
                boolik: true,
                palet: "Палет 24"
            }
            status = true
        }else if (sectr.cell_number === bufferLink.address_pallet_25) {
            r = {
                znp_number: bufferLink.znp_number,
                model: bufferLink.model,
                number_of_pallets: bufferLink.number_of_pallets_25,
                address_pallet: bufferLink.address_pallet_25,
                part_name: bufferLink.part_name,
                cut_size: bufferLink.cut_size,
                boolik: true,
                palet: "Палет 25"
            }
            status = true
        }
    }

    return (
        <div className={"buff_cell"}>
            <div className={"buff_cell-number , cell_padding"}>
                {sectr.cell_number}
            </div>
                {status === true ? (
                        <BuffChildrenFalse sectr={sectr} bufferLinks={r} buffers={buffers}/>
                    ) : (
                        <BuffChildrenTrue sectr={sectr} buffers={buffers} />
                    )
                }
        </div>
    );
};

export default React.memo(BuffCell) ;