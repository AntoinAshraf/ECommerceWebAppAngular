export class UserLoginData{
    private static storageName:string = "userKey";
    
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