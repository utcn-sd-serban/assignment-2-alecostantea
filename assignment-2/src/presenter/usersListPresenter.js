import userModel from "../model/userModel";

class UsersListPresenter {

    onCreate(){
        userModel.addUser(userModel.state.newUser.Username,userModel.state.newUser.Password);
        userModel.changeNewUserProperty("Username","");
        userModel.changeNewUserProperty("Password","");
    }

    onChange(property, value){
        userModel.changeNewUserProperty(property,value);
    }

    onSignin(){
        for(let index = 0; index < userModel.state.users.length; index++) {
            if( userModel.state.users[index].Username === userModel.state.newUser.Username && userModel.state.users[index].Password === userModel.state.newUser.Password) {
                
                window.location.assign("#/questions");
            }
        }
    }
    
}

const usersListPresenter = new UsersListPresenter();

export default usersListPresenter;