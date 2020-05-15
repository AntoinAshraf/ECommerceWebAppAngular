export class UserLoginData{
    private static storageName:string = "userKey";
    static isAdmin:boolean = true;
    static _adminEmail = "tonyashraf159@gmail.com";

    checkAdmin(email){
        if(UserLoginData._adminEmail == email){
            UserLoginData.isAdmin = true;
        }
        return UserLoginData.isAdmin;
    }

    getIsAdmin(){
        return UserLoginData.isAdmin;
    }

    static setSetting(data:any){
        localStorage.setItem(this.storageName, JSON.stringify(data));
    }

    static getUserSetting(){
        let data = localStorage.getItem(this.storageName);
        return JSON.parse(data);
    }

    static clearUserSetting(){
        localStorage.removeItem(this.storageName);
    }

    static cleanAll() {
        localStorage.clear();
    }
}