import React from 'react'
import {Button, DatePicker} from 'antd';

export default function Hello() {
    return <div>
        <h1>Click to show simplified week picker</h1>
        <DatePicker.WeekPicker
            bordered={false}
            // open={show} // Don't control the state
            allowClear={false}
            style={{padding: 0}}
            inputRender={({id, tabIndex, disabled, autoFocus, title, onMouseDown, onKeyDown, onFocus, onBlur}) =>
                <Button id={id}
                        tabIndex={tabIndex}
                        disabled={disabled}
                        autoFocus={autoFocus}
                        title={title}
                        onMouseDown={onMouseDown}
                        onKeyDown={onKeyDown}
                        onFocus={onFocus}
                        onBlur={onBlur}
                >Hello, click to show the week
                    picker</Button>}
            suffixIcon={undefined}
        />
        <DatePicker.WeekPicker
            bordered={false}
            // open={show} // Don't control the state
            allowClear={false}
            style={{padding: 0}}
            inputRender={(props) => <Button {...props as any}>Dirty and lazy way</Button>}
            suffixIcon={undefined}
        />
        <div>other text</div>
    </div>
};
