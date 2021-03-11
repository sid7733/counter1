import React from "react";
import s from "./Button.module.css";

export type ButtonPropsType = {
    onClick: () => void
    title: string
    disabled: boolean
}

export function Button(props:ButtonPropsType){
    return (
    <button className={s.Btn_item} onClick={props.onClick} disabled={props.disabled}>
        {props.title}
    </button>
)}

