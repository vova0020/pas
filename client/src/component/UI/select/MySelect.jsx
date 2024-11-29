import React from 'react';
import MyOption from "./MyOption";
import classes from "./MySelect.module.css";

const MySelect = ({options,StanokData, onChange, ...props}) => {


    return (
        <select className={classes.MySelect}  onChange={(eventTarget, eventId) => {
            onChange(eventTarget.target , StanokData)
        }}>
            {StanokData.address_pallet != null
                ? (<option value="standart">{StanokData.address_pallet}✔</option>)
                :(<option value="">Выбрать адрес</option>)
            }


            {options.map(option=>
                <MyOption key = {Math.random()}  option={option}  />
            )}
        </select>
    );
};

export default MySelect;
