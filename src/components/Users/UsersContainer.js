import React from 'react';
import { connect } from 'react-redux';
import { follow, toggleFollowingProgress, setCurrentPage, unfollow, getUsers } from '../../redux/usersReducer';

import Users from './Users';


class UsersContainer extends React.Component {
    componentDidMount() {

        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }
    onChangePage = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.getUsers(pageNumber, this.props.pageSize)
        
    }
    render() {


        return <Users
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onChangePage={this.onChangePage}
            unfollow={this.props.unfollow}
            follow={this.props.follow}
            users={this.props.users}
            followingIsProgress={this.props.followingIsProgress}
        />
    }
}




let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        followingIsProgress: state.usersPage.followingIsProgress
    }
}



export default connect(mapStateToProps, {follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers })(UsersContainer);

