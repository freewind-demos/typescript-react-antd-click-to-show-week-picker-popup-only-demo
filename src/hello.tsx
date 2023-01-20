import React, {useRef, useState} from 'react'
import {Button, DatePicker} from 'antd';
import {useClickAway} from "ahooks";

export default function Hello() {
    const [show, setShow] = useState(false);

    const ref = useRef<HTMLButtonElement>(null);
    useClickAway(() => setShow(false), ref);

    return <div>
        <h1>Click to show simplified week picker</h1>
        <DatePicker.WeekPicker
            bordered={false}
            open={show}
            style={{padding: 0}}
            inputRender={() => <Button ref={ref}
                                       onClick={() => setShow(v => !v)}>Hello, click to show the week picker</Button>}
            inputReadOnly={true}
            suffixIcon={undefined}
        ></DatePicker.WeekPicker>
        <div>other text</div>
    </div>
};
