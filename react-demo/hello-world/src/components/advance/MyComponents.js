import React from 'react';

const MyComponents = {
    DatePicker: function DatePicker(props) {
        return <div>Image a {props.color} datepicker here.</div>
    }
}

function BlueDatePicker() {
    return <MyComponents.DatePicker color="blue" />
}

export default BlueDatePicker;