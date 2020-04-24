import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { getUserData } from '../../Redux/Actions';

export const Login = () => {
    return (
        <div>
            Login
        </div>
    )
}


const mapStateToProps = (store) => ({
    user: store.user.user,
})

const mapDispatchToProps = dispatch => bindActionCreators({ getUserData }, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Login)
