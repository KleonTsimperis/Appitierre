import React from 'react';
import { connect } from 'react-redux';
import { handleClickEvent } from '../actions/actions';
import '../App.css';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { withStyles } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';

const styles = {
    root: {
      color: green[600],
      '&$checked': {
        color: green[500],
      },
    },
    checked: {},
  };

class UserInteractions extends React.Component {
    render(){
        const { classes } = this.props;
        return(
            <div className="flex-container">
            <h3 style={{textAlign:"left"}}>Checklist</h3>

            <FormControlLabel
                control={
                <Checkbox
                    checked={this.props.UserInteractionsState.item1}
                    onChange={()=> this.props.handleClickEvent(1)}
                    classes={{
                        root: classes.root,
                        checked: classes.checked,
                        }}
                />
                }
                label="Item 1"
            />

            <FormControlLabel
                control={
                <Checkbox
                    checked={this.props.UserInteractionsState.item2}
                    onChange={()=> this.props.handleClickEvent(2)}
                    classes={{
                        root: classes.root,
                        checked: classes.checked,
                        }}
                />
                }
                label="Item 2"
            />

            <FormControlLabel
                control={
                <Checkbox
                    checked={this.props.UserInteractionsState.item3}
                    onChange={()=> this.props.handleClickEvent(3)}
                    classes={{
                        root: classes.root,
                        checked: classes.checked,
                        }}
                />
                }
                label="Item 3"
            />

            <FormControlLabel
                control={
                <Checkbox
                    checked={this.props.UserInteractionsState.item4}
                    onChange={()=> this.props.handleClickEvent(4)}
                    classes={{
                        root: classes.root,
                        checked: classes.checked,
                        }}
                />
                }
                label="Item 4"
            />

            <FormControlLabel
                control={
                <Checkbox
                    checked={this.props.UserInteractionsState.item5}
                    onChange={()=> this.props.handleClickEvent(5)}
                    classes={{
                        root: classes.root,
                        checked: classes.checked,
                        }}
                />
                }
                label="Item 5"
            />
            </div>
        )
    }
}



const mapStateToProps = state => ({
    UserInteractionsState: state.checkListReducer
});

export default connect(mapStateToProps, { handleClickEvent })(withStyles(styles)(UserInteractions));
