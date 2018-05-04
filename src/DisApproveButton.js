import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import { showNotification as showNotificationAction } from 'admin-on-rest';
import { push as pushAction } from 'react-router-redux';
import { UPDATE } from 'admin-on-rest';
import approve from './approveLogic';

const style = {
    margin: 12,
};

class DisApproveButton extends Component
{

    handleClick = () =>
    {
        const { push, record, showNotification } = this.props;
        const updatedRecord = { ...record, approved: false };
        approve(UPDATE, 'booking', { id: record.id, data: updatedRecord })
            .then(() => {
                showNotification('Booking Disapproved');
                push('/booking');
            })
            .catch((e) => {
                console.error(e);
                showNotification('Error: booking not Disapproved', 'warning')
            });
    }

    render()
    {
        return   <RaisedButton label="Disapprove" secondary={true} style={style} onClick={this.handleClick} />;

    }
}

DisApproveButton.propTypes = {
    push: PropTypes.func,
    record: PropTypes.object,
    showNotification: PropTypes.func,
};


export default connect(null, {
    showNotification: showNotificationAction,
    push: pushAction,
})(DisApproveButton);
