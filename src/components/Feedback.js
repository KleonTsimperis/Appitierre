import React from 'react';
import { connect } from 'react-redux';
import '../App.css';

const Feedback = props => {
    return(
        <ul>
            <li className={props.feedbackState.link1? "active" : "inactive"}>
               <span className="link">Link 1</span> - Enabled when Item 1 is checked
            </li>
            <li className={props.feedbackState.link2? "active" : "inactive"}>
                <span className="link">Link 2</span> - Enabled when Items 3 & 5 are checked
            </li>
            <li className={props.feedbackState.link3? "active" : "inactive"}>
                <span className="link">Link 3</span> - Enabled when all items are checked
            </li>
            <li className={props.feedbackState.link4? "active" : "inactive"} >
                <span className="link">Link 4</span> - Enabled when no Items are checked
            </li>
            <li className={props.feedbackState.link5? "active" : "inactive"}>
                <span className="link">Link 5</span> - Enabled when all odd Items are checked
            </li>
            <li className={props.feedbackState.link6? "active" : "inactive"}>
                <span className="link">Link 6</span> - Enabled when all even Items are checked
            </li>
            <li className={props.feedbackState.link7? "active" : "inactive"}>
                <span className="link">Link 7</span> - Enabled when at least one Item is checked
            </li>

        </ul>
    )
}

const mapStateToProps = state => ({
    feedbackState: state.linksReducer
});



export default connect(mapStateToProps)(Feedback);
