import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { getUserData } from '../../Redux/Actions';

export const Home = () => {
    return (
        <div>
            Home
        </div>
    )
}


const mapStateToProps = (store) => ({
    user: store.user.user,
})

const mapDispatchToProps = dispatch => bindActionCreators({ getUserData }, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Home)
