import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../redux'

const UserContainer = ({ fetchUsers, userData }) => {

    useEffect(() => {
        fetchUsers()
    }, [])

    return userData.loading ? <h2>Loading..</h2> : userData.error ? <h2>{userData.error}</h2> : (
        <div>
            <h2>List of characters in Final Space</h2>
            <div>{userData && userData.users && userData.users.map(user => <p><b>Name: </b> {user.name}
                <label><b> Gender: </b>{user.gender} </label>
                <label><b> Species: </b>{user.species} </label>
                <label><b> Status: </b>{user.status} </label>
                <label><b> Photo: </b> </label><img className="char_image" src={user.img_url}></img></p>)}
            </div>
            <style>{"\
                            .char_image{\
                                width: 5%;\
                                height: 5%;\
                                }\
                        "}</style>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        userData: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)
