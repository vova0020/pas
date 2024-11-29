import React, {useContext} from 'react';
import {Context} from "../../../index";

const MyOption = ({option, sector}) => {
        // Данные из глобального хранилища
        const {globalStore} = useContext(Context)
        const {user} = useContext(Context)
// Проверка ячейки на занятость, если занята то не показывается

        let ok = ""
        if (option.freeness == false && option.cell_number != "Выбрать адрес" ) {
                ok = "✔"
        } else {
                ok = ""
        }
        if (sector == user.raspil){
                if(option.id<=43){
                        return (
                            <option value={option.id} key={option.id}>{option.cell_number + ok }</option>
                        );
                }
        } else if (sector == user.pokleika){
                if(option.id > 43 && option.id <= 80){
                        return (
                            <option value={option.id} key={option.id}>{option.cell_number + ok }</option>
                        );
                }
        }else if (sector == user.prisadka){
                if(option.id > 80 && option.id <= 131){
                        return (
                            <option value={option.id} key={option.id}>{option.cell_number + ok }</option>
                        );
                }
        }else if (sector == user.ypakovka){

                if(option.id > 131 && option.id <= 141){
                        return (
                            <option value={option.id} key={option.id}>{option.cell_number + ok }</option>

                        );
                }
        }


        // return (
        //     <option value={option.id} key={option.id}>{option.cell_number}</option>
        //
        //
        // );
};

export default React.memo(MyOption);