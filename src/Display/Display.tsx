import React from "react";
import s from "./Display.module.css";

export type displayPropsType = {
    counter: number
    maxValue: number
}

export function Display(props: displayPropsType) {
    return (
        <div className={s.Disp}>
            <div className={props.counter === props.maxValue ? s.red : ""}>
                {props.counter}
            </div>
        </div>
    )
}

