import React from 'react';
import axios from "axios";

const SelectGlung = ({selectActiv, setselectActiv, worckDataStanock, specZapros }) => {


    // При выборе анализируется что выбрано и отправляется запрос
    async function onChange(eventTarget, eventId){
        await axios.put( process.env.REACT_APP_STANCKI_ZNP_URL,{
            id:eventId.id,
            stanock:eventId.stanock,
            size_requiried:eventId.size_requiried,
            number_of_pallets:eventId.number_of_pallets,
            gluing_scheme:eventTarget,
            dop_gluing_scheme:eventId.dop_gluing_scheme
        })
        specZapros()
        setselectActiv(false)
    }

    // Функция анализирует и выводит доступный список элементов на выбор
    const optionSelectGluing = (data)=>{
        if (selectActiv){
            if (data.dop_gluing_scheme === "4" ||data.dop_gluing_scheme === "2д2к"){
                return   <select onChange={(eventTarget, eventId) => {
                    onChange(eventTarget.target.value, worckDataStanock)
                }}>
                    <option value={" "}> </option>
                    <option value={"(пусто)"}>(пусто)</option>
                </select>
            } else if (data.dop_gluing_scheme ==="2д1к"){
                return <select onChange={(eventTarget, eventId) => {
                    onChange(eventTarget.target.value, worckDataStanock)
                }}>
                    <option value={" "}> </option>
                    <option value={"1к"}>1к</option>
                    <option value={"(пусто)"}>(пусто)</option>
                </select>
            } else if (data.dop_gluing_scheme ==="1д2к"){
                return <select onChange={(eventTarget, eventId) => {
                    onChange(eventTarget.target.value, worckDataStanock)
                }}>
                    <option value={" "}> </option>
                    <option value={"1д"}>1д</option>
                    <option value={"(пусто)"}>(пусто)</option>
                </select>
            }else if (data.dop_gluing_scheme ==="1д1к"){
                return <select onChange={(eventTarget, eventId) => {
                    onChange(eventTarget.target.value, worckDataStanock)
                }}>
                    <option value={" "}> </option>
                    <option value={"1д"}>1д</option>
                    <option value={"1к"}>1к</option>
                    <option value={"1д1к"}>1д1к</option>
                    <option value={"(пусто)"}>(пусто)</option>
                </select>
            }else if (data.dop_gluing_scheme ==="1д"){
                return <select onChange={(eventTarget, eventId) => {
                    onChange(eventTarget.target.value, worckDataStanock)
                }}>
                    <option value={" "}> </option>
                    <option value={"1к"}>1к</option>
                    <option value={"2к"}>2к</option>
                    <option value={"1д"}>1д</option>
                    <option value={"1д2к"}>1д2к</option>
                    <option value={"1д1к"}>1д1к</option>
                    <option value={"(пусто)"}>(пусто)</option>
                </select>
            }else if (data.dop_gluing_scheme ==="2д"){
                return <select onChange={(eventTarget, eventId) => {
                    onChange(eventTarget.target.value, worckDataStanock)
                }}>
                    <option value={" "}> </option>
                    <option value={"1к"}>1к</option>
                    <option value={"2к"}>2к</option>
                    <option value={"(пусто)"}>(пусто)</option>
                </select>
            }else if (data.dop_gluing_scheme ==="1к"){
                return <select onChange={(eventTarget, eventId) => {
                    onChange(eventTarget.target.value, worckDataStanock)
                }}>
                    <option value={" "}> </option>
                    <option value={"1к"}>1к</option>
                    <option value={"1д"}>1д</option>
                    <option value={"2д"}>2д</option>
                    <option value={"1д1к"}>1д1к</option>
                    <option value={"2д1к"}>2д1к</option>
                    <option value={"(пусто)"}>(пусто)</option>
                </select>
            }else if (data.dop_gluing_scheme ==="2к"){
                return <select onChange={(eventTarget, eventId) => {
                    onChange(eventTarget.target.value, worckDataStanock)
                }}>
                    <option value={" "}> </option>
                    <option value={"1д"}>1д</option>
                    <option value={"2д"}>2д</option>
                    <option value={"(пусто)"}>(пусто)</option>
                </select>
            } else {
                return <select onChange={(eventTarget, eventId) => {
                    onChange(eventTarget.target.value, worckDataStanock)
                }}>
                    <option value={" "}> </option>
                    <option value={"1к"}>1к</option>
                    <option value={"2к"}>2к</option>
                    <option value={"1д"}>1д</option>
                    <option value={"2д"}>2д</option>
                    <option value={"2д1к"}>2д1к</option>
                    <option value={"1д2к"}>1д2к</option>
                    <option value={"1д1к"}>1д1к</option>
                    <option value={"4"}>4</option>
                    <option value={"(пусто)"}>(пусто)</option>
                </select>
            }
        } else {
            <div></div>
        }

    }

    return (
        <div>
            {optionSelectGluing(worckDataStanock)}

        </div>
    );
};

export default React.memo(SelectGlung);