import React, {useEffect} from 'react';
import classes from '../../../../style/MyPrint.module.css';
import moment from "moment";

const MyPrint = ({componentRef, prints,optionOperator,activ}) => {

    let qluingLine1
    let qluingLine2 = "FE"
    let qluingLine3 = "Mix Credit"
    // =IF(B1="f";"Фор";IF(OR(B1="Ух";B1="У");"Унив";IF(B1="br";"Brandt";IF(B1="sR";"Самх";IF(OR(B1="Ex";B1="Exv";B1="Evx";B1="EvR";B1="E");"Ev";IF(B1="хУ";"КДТ";
    // IF(B1="R";"Ручная покл.";IF(B1="ПСшк";"Присадка";IF(OR(B1="v";B1="vxR";B1="vR");"Ven";IF(OR(B1="fпрR";B1="fEx";B1="fxR";B1="fR";B1="fx";B1="f";B1="fxE");"Фор";
    // IF(B1="к";"К";IF(OR(B1="xvx";B1="xприсf";B1="xE";B1="xf1";B1="xvR";B1="xfR";B1="xfx";B1="xf";B1="xvR";B1="х(с приф.)");"KDT";
    // IF(B1="без кромки";"б/к";IF(OR(B1="stvR";B1="stf";B1="stv";B1="stR";B1="st");"St";IF(OR(B1="xv";B1="х");"КДТ";IF(OR(B1="vf";B1="vExR";B1="vx");"Ven"))))))))))))))))

    if (prints.qluing_line == "x" || prints.qluing_line == "х"|| prints.qluing_line == "хУ" || prints.qluing_line == "xv" ){
        qluingLine1 = "КДТ"
    } else if (prints.qluing_line == "xEx"){
        qluingLine1 = "KDT" //+ EV
    } else if (prints.qluing_line == "f" || prints.qluing_line == "fпрR" || prints.qluing_line == "fEx" || prints.qluing_line == "fxR" || prints.qluing_line == "fR"
        || prints.qluing_line == "fx" || prints.qluing_line == "fxE"){
        qluingLine1 = "Фор"
    } else if (prints.qluing_line == "Ух" || prints.qluing_line == "У"){
        qluingLine1 = "Унив"
    }else if (prints.qluing_line == "br"){
        qluingLine1 = "Brandt"
    }else if (prints.qluing_line == "sR"){
        qluingLine1 = "Самх"
    }else if (prints.qluing_line == "Ex" || prints.qluing_line == "Exv" || prints.qluing_line == "Evx" || prints.qluing_line == "EvR" || prints.qluing_line == "E"|| prints.qluing_line == "EvxR"){
        qluingLine1 = "Ev"
    }else if (prints.qluing_line == "R"){
        qluingLine1 = "Ручная покл"
    }else if (prints.qluing_line == "ПСшк"){
        qluingLine1 = "Присадка"
    }else if (prints.qluing_line == "v" || prints.qluing_line == "vxR" || prints.qluing_line == "vR" || prints.qluing_line == "vf"
        || prints.qluing_line == "vExR"|| prints.qluing_line == "vx" ){
        qluingLine1 = "Ven"
    }else if (prints.qluing_line == "к"){
        qluingLine1 = "К"
    }else if (prints.qluing_line == "xvx" || prints.qluing_line == "xприсf"|| prints.qluing_line == "xE"|| prints.qluing_line == "xf1"
        || prints.qluing_line == "xf"|| prints.qluing_line == "xfx"|| prints.qluing_line == "xf"|| prints.qluing_line == "xvR"|| prints.qluing_line == "х(с приф.)"){
        qluingLine1 = "KDT"
    }else if (prints.qluing_line == "без кромки"){
        qluingLine1 = "б/к"
    }else if (prints.qluing_line == "stvR" || prints.qluing_line == "stf" || prints.qluing_line == "stv" || prints.qluing_line == "stR" || prints.qluing_line == "st"){
        qluingLine1 = "St"
    }else if (prints.qluing_line == "stvR" || prints.qluing_line == "stf" || prints.qluing_line == "stv" || prints.qluing_line == "stR" || prints.qluing_line == "st"){
        qluingLine1 = "St"
    }else if (prints.qluing_line == "Р-С" || prints.qluing_line == "Р-С-Ф-П-О-У"){
        qluingLine1 = "СБ"
    }else if (prints.qluing_line == "Р" || prints.qluing_line == "Р-П-О-У"|| prints.qluing_line == "Р-П-У"|| prints.qluing_line == "Р-Ф-О-У" || prints.qluing_line == "Р-Ф-П-О-У" || prints.qluing_line == "Р-Ф-П-У" || prints.qluing_line == "Р-Ф-У" || prints.qluing_line == "Ф-П-О-У"){
        qluingLine1 = "ФР"
    } 
    
    else {
        qluingLine1 = "Пусто"
    }


    let processStage1 = " "
    let processStage2 = " "
    let processStage3 = " "
    let processStage4 = " "
    let processStage5 = " "
    let processStage6 = " "
  

    if (prints.qluing_line == "Ух" || prints.qluing_line == "У"){
        processStage1 = "Универсал"
        processStage6 = "Присадка"
    } else if (prints.qluing_line == "xEx" || prints.qluing_line == "xE"){
        processStage1 = "KDT"
        processStage2 = "Эволюшн"
        processStage6 = "Присадка"
    } else if (prints.qluing_line == "Ex"){
        processStage1 = "Эволюшн"
        processStage2 = "KDT"
        processStage6 = "Присадка"
    } else if (prints.qluing_line == "br"){
        processStage1 = "Brandt"
        processStage6 = "Присадка"
    }else if (prints.qluing_line == "sR"){
        processStage1 = "Самхо"
        processStage6 = "Присадка"
    }else if (prints.qluing_line == "Exv" ||  prints.qluing_line == "Evx" || prints.qluing_line == "E" ){
        processStage1 = "Эволюшн"
        processStage6 = "Присадка"
    }else if (prints.qluing_line == "хУ"){
        processStage1 = "КДТ"
        processStage6 = "Присадка"
    }else if (prints.qluing_line == "R"){
        processStage1 = "Ручная покл"
        processStage6 = "Присадка"
    }else if (prints.qluing_line == "ПСшк"){
        processStage1 = "Присадка"
    }else if (prints.qluing_line == "v" || prints.qluing_line == "vR"){
        processStage1 = "Вентура"
        processStage6 = "Присадка"
    }else if (prints.qluing_line == "fпрR" || prints.qluing_line == "fxR" || prints.qluing_line == "fEx" || prints.qluing_line == "fR"
        || prints.qluing_line == "f"|| prints.qluing_line == "fx" || prints.qluing_line == "fxE"  ){
        processStage1 = "Форматка"
        processStage6 = "Присадка"
    }else if (prints.qluing_line == "к"){
        processStage1 = "калибровка"
        processStage6 = "Присадка"
    }else if (prints.qluing_line == "xvx" || prints.qluing_line == "xприсf" || prints.qluing_line == "xf1"
        || prints.qluing_line == "xfR"|| prints.qluing_line == "xfx"|| prints.qluing_line == "xf"
        || prints.qluing_line == "х(с приф.)"){
        processStage1 = "KDT с приф."
        processStage6 = "Присадка"
    }else if (prints.qluing_line == "без кромки"){
        processStage1 = "б/к"
        processStage6 = "Присадка"
    }else if (prints.qluing_line == "stvR" || prints.qluing_line == "stf"
        || prints.qluing_line == "stv"|| prints.qluing_line == "stR"|| prints.qluing_line == "st"){
        processStage1 = "Стефани"
        processStage6 = "Присадка"
    }else if (prints.qluing_line == "xv" || prints.qluing_line == "х"){
        processStage1 = "КДТ"
        processStage6 = "Присадка"
    }else if (prints.qluing_line == "vf" || prints.qluing_line == "vExR"|| prints.qluing_line == "vx"){
        processStage1 = "Вентура"
        processStage6 = "Присадка"
    }else if (prints.qluing_line == "xvR"){
        processStage1 = "KDT"
        processStage2 = "Вентура"
        processStage3 = "Криволенейка"
        processStage6 = "Присадка"
    }else if (prints.qluing_line == "EvR"){
        processStage1 = "Эволюшн"
        processStage2 = "Вентура"
        processStage3 = "Криволенейка"
        processStage6 = "Присадка"
    }else if (prints.qluing_line == "vxR"){
        processStage1 = "Вентура"
        processStage2 = "KDT"
        processStage3 = "Криволенейка"
        processStage6 = "Присадка"
    }else if (prints.qluing_line == "EvxR"){
        processStage1 = "Эволюшн"
        processStage2 = "Вентура"
        processStage3 = "KDT"
        processStage4 = "Криволинейка"
        processStage6 = "Присадка"
    }else if (prints.qluing_line == "Р") {
        
    }else if (prints.qluing_line == "Р-П-О-У") {
        processStage1 = "Присадка"
        processStage3 = "Оклейка"
        processStage5 = "Упаковка"
    }else if (prints.qluing_line == "Р-П-У") {
        processStage2 = "Присадка"
     
        processStage4 = "Упаковка"
    }else if (prints.qluing_line == "Р-С") {
        processStage4 = "Сборка"
        
    }else if (prints.qluing_line == "Р-С-Ф-П-О-У") {
        processStage1 = "Сборка"
        processStage2 = "Фрезеровка"
        processStage3 = "Присадка"
        processStage4 = "Оклейка"
        processStage6 = "Упаковка"
    }else if (prints.qluing_line == "Р-Ф-О-У") {
        processStage2 = "Фрезеровка"
        processStage4 = "Оклейка"
        processStage6 = "Упаковка"
    }else if (prints.qluing_line == "Р-Ф-П-О-У") {
        processStage1 = "Фрезеровка"
        processStage2 = "Присадка"
        processStage4 = "Оклейка"
        processStage6 = "Упаковка"
    }else if (prints.qluing_line == "Р-Ф-П-У") {
        processStage2 = "Фрезеровка"
        processStage4 = "Присадка"
        processStage6 = "Упаковка"
    }else if (prints.qluing_line == "Р-Ф-У") {
        processStage2 = "Фрезеровка"
    
        processStage4 = "Упаковка"
    }else if (prints.qluing_line == "Ф-П-О-У") {
        processStage2 = "Фрезеровка"
        processStage4 = "Присадка"
        processStage6 = "Оклейка"
        processStage6 = "Упаковка"
    }

    // =IF(OR(B1="Ух";B1="У");"Универсал";IF(B1="br";"Brandt";IF(B1="sR";"Самхо";IF(OR(B1="Exv";B1="Ex";B1="Evx";B1="EvR";B1="E");"Эволюшн";
// IF(B1="хУ";"КДТ";IF(B1="R";"Ручная покл.";IF(B1="ПСшк";"Присадка";IF(OR(B1="v";B1="vxR";B1="vR");"Вентура";
// IF(OR(B1="fпрR";B1="fxR";B1="fEx";B1="fR";B1="f";B1="fx";B1="fxE");"Форматка";IF(B1="к";"калибровка";
// IF(OR(B1="xvx";B1="xE";B1="xприсf";B1="xf1";B1="xvR";B1="xfR";B1="xfx";B1="xf";B1="xvR";B1="х(с приф.)");"KDT с приф.";
// IF(B1="без кромки";"б/к";IF(OR(B1="stvR";B1="stf";B1="stv";B1="stR";B1="st");"Стефани";
// IF(OR(B1="xv";B1="х");"КДТ";IF(OR(B1="vf";B1="vExR";B1="vx");"Вентура";"")))))))))))))))


// console.log(prints.number_opening)
    let fe = "FE Mix credit)"
    // useEffect(()=>{
    //
    //         if (prints.part != undefined && prints.part.includes("FE")){
    //             console.log( prints.part.split("FE")[1].split(")")[0])
    //         }
    //
    //
    // },[prints, activ])

    return (
        <div ref={componentRef} className={activ ? classes.myPrint_blocks : classes.myPrint_blocks_hidden}>
            <div className={classes.myPrint_blocks}>
                <hr className={classes.hr} align="center" color="black" size="2" />
                <table className={classes.table_context}>
                    <thead></thead>
                    <tbody>
                    <tr>
                        <td className={classes.myPrint_size_text__title}>Распиловочный размер</td>
                        <td className={classes.myPrint_size_text}>{prints.cut_size}</td>
                        <td className={classes.TD_skr}></td>
                        {prints.packaging == null || prints.packaging == "" ?(
                            <td className={classes.packaging_block}>(пусто)</td>
                        ):(
                            <td className={classes.packaging_block}>{prints.packaging}</td>
                        )}
                    </tr>
                    <tr>
                        <td className={classes.myPrint_context_text__title}>Модель</td>
                        <td className={classes.myPrint_context_text}>{prints.model}</td>
                        {/*<td className={classes.myPrint_context_text}>{prints.part.split("(")[1]}</td>*/}
                    </tr>
                    <tr>
                        <td className={classes.myPrint_context_text__title}>Название <br/> детали</td>
                        <td colSpan={3} className={classes.myPrint_context_text}>{prints.part_name} </td>
                    </tr>
                    <tr>
                        <td className={classes.myPrint_context_text__title}>Цвет/ДСП</td>
                        <td className={classes.myPrint_context_text}>{prints.color} / {prints.part} </td>
                        <td className={classes.TD_skr}></td>
                        <td className={classes.KDT}>{qluingLine1}</td>
                    </tr>
                    <tr>
                        <td className={classes.myPrint_context_text__title}>Готовая деталь</td>
                        <td className={classes.myPrint_context_size}>{prints.size_requiried}</td>
                        <td className={classes.TD_skr}></td>

                        {prints.part != undefined && prints.part.includes("FE") ? ( <td className={classes.FE}><div className={classes.FEDiv}>{qluingLine2} <br/> <span className={classes.FEtext}>{prints.part.split("FE")[1].split(")")[0]}</span></div> </td>) : ("")
                        }
                        {/*{prints.color != undefined && prints.color.split("(")[1] == fe ? ( <td className={classes.FE}><div className={classes.FEDiv}>{qluingLine2} <br/> <span className={classes.FEtext}>{qluingLine3}</span></div> </td>) : ("")*/}
                        {/*}*/}
                    </tr>
                    <tr>
                        <td className={classes.myPrint_footer_text__title}>Кромка</td>
                        <td colSpan={3} className={classes.myPrint_footer_text}>{prints.edging}</td>
                    </tr>
                    <tr>
                        <td className={classes.myPrint_footer_text__title}>Стороны поклейки №1</td>
                        <td className={classes.myPrint_footer_text}>{prints.gluing_scheme }</td>
                    </tr>
                    <tr>
                        <td className={classes.myPrint_footer_text__title}>Стороны поклейки №2</td>
                        <td className={classes.myPrint_footer_text}>{prints.dop_gluing_scheme}</td>
                    </tr>
                    <tr>
                        <td className={classes.myPrint_footer_text__title}>Паз</td>
                        <td className={classes.myPrint_footer_text}>{prints.groove}</td>
                    </tr>
                    <tr>
                        <td className={classes.myPrint_footer_text__title}>Палет №</td>
                        <td className={classes.myPrint_footer_text}>{prints.pallet}</td>
                    </tr>

                    </tbody>
                </table>

                <table className={classes.myPrint_table}>
                    <thead>
                    <tr>
                        <th className={classes.TH}>Участок</th>
                        <th className={classes.TH}>Дата</th>
                        <th className={classes.TH}>Оператор</th>
                        <th className={classes.TH}>Кол-во</th>
                        <th className={classes.TH}>Адрес</th>
                        <th className={classes.TH}>Примечание</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className={classes.TD}>Раскрой</td>
                        <td className={classes.TD}>{moment().format('DD.MM.YYYY')}</td>
                        <td className={classes.TD}>{optionOperator.operator}</td>
                        <td className={classes.TD}>{prints.number_of_pallets}</td>
                        {prints.address_pallet == "Выбрать адрес" ?(
                            <td className={classes.TD}>""</td>
                        ):(
                            <td className={classes.TD}>{prints.address_pallet}</td>
                        )}
                        <td className={classes.TD}></td>

                    </tr>
                    <tr>
                        <td className={classes.TD}>{processStage1}</td>
                        <td className={classes.TD}></td>
                        <td className={classes.TD}></td>
                        <td className={classes.TD}></td>
                        <td className={classes.TD}></td>
                        <td className={classes.TD}></td>
                    </tr>

                    <tr>
                        <td className={classes.TD}>{processStage2}</td>
                        <td className={classes.TD}></td>
                        <td className={classes.TD}></td>
                        <td className={classes.TD}></td>
                        <td className={classes.TD}></td>
                        <td className={classes.TD}></td>
                    </tr>

                    <tr>
                        <td className={classes.TD}>{processStage3}</td>
                        <td className={classes.TD}></td>
                        <td className={classes.TD}></td>
                        <td className={classes.TD}></td>
                        <td className={classes.TD}></td>
                        <td className={classes.TD}></td>
                    </tr>
                    <tr>
                        <td className={classes.TD}>{processStage4}</td>
                        <td className={classes.TD}></td>
                        <td className={classes.TD}></td>
                        <td className={classes.TD}></td>
                        <td className={classes.TD}></td>
                        <td className={classes.TD}></td>
                    </tr>
                    <tr>
                        <td className={classes.TD}>{processStage5}</td>
                        <td className={classes.TD}></td>
                        <td className={classes.TD}></td>
                        <td className={classes.TD}></td>
                        <td className={classes.TD}></td>
                        <td className={classes.TD}></td>
                    </tr>

                    <tr>
                        <td className={classes.TD}>{processStage6}</td>
                        <td className={classes.TD}></td>
                        <td className={classes.TD}></td>
                        <td className={classes.TD}></td>
                        <td className={classes.TD}></td>
                        <td className={classes.TD}></td>
                    </tr>

                    </tbody>
                </table>
                <hr className={classes.hr} align="center" color="black" size="2" />
                <div>
                    {prints.number_opening === null ?  <h1>{prints.znp_number + " " + prints.model}</h1>
                        : <h1>{prints.znp_number + " " + prints.model + " " + "Часть - " + prints.number_opening}</h1>
                    }

                    {prints.part != undefined && prints.part.includes("FE") ? <h1>{prints.part.split("(")[1].split(")")[0]}</h1> : ""
                    }

                </div>
            </div>
        </div>
    );
};

export default React.memo(MyPrint);
