const USERS_REST_API_URL = 'http://backend-registration.169.50.202.75.nip.io/user/userslist';

class UserServiceFetch{
    getUsers(){
        
        return fetch(USERS_REST_API_URL,
            {
                method: 'get',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }).then((res => res.json()));
        
       
    }
}

export default new UserServiceFetch();