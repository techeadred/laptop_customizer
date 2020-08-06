import React from 'react';
import Features from './Features/Features';
import './MainForm.css';


class MainForm extends React.Component {
    render() {
        return (
            <form className="main__form">
                <h2>Customize your laptop</h2>
                <Features Selected={this.props.selected}/>
            </form>
        )
    }
};


export default MainForm;