import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addNotification } from '../actions/notificationActions';
import NotificationSystem from 'react-notification-system';

  class NotificationContainer extends React.Component {

    constructor(props) {
      super(props);
    }

    componentDidMount() {
      this.notificationSystem = this.refs.notificationSystem;
    }

    componentWillReceiveProps(newProps) {
      const {message, level, position} = newProps.notification;
      this.notificationSystem.addNotification({
        message,
        level,
        position:"bc",
        dismissible:true,
        autoDismiss:3
      });
    }

    render() {
      const style = {
          NotificationItem: { // Override the notification item
            DefaultStyle: { // Applied to every notification, regardless of the notification level
              margin: '10px 5px 2px 1px',
              backgroundColor: 'black',
              borderTop: '4px solid white',
              paddingTop: '30px',
              paddingBottom: '30px',
              color:'white',
              boxShadow: '0px 0px 0px'
            },

          error: { // Applied only to the success notification item
            borderTop: '4px solid red',
          },
          success: { // Applied only to the success notification item
            borderTop: '4px solid green',
          }
        },
        Dismiss: {
            DefaultStyle: {
              backgroundColor: 'black'
            }
          },
        Containers: {
          DefaultStyle: {
          }
        }
      }

      return (
        <NotificationSystem ref="notificationSystem" style={style}/>
      );
    }
  }

  function mapStateToProps(state) {
    return {
      notification: state.notifications
    };
  }

  export default connect(
    mapStateToProps
  )(NotificationContainer);
