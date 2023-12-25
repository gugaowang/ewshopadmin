// @ts-ignore
import {defineStore} from 'pinia';
// @ts-ignore
import {login} from '@/api/auth.ts';
export interface  IUserState{
    token:string;
    username:string;
    avatar:string;
    permissions:string[];
    info:Object
}


export  const   useUserStore=defineStore({

      id:'app-user',
     // @ts-ignore
      state:():IUserState=>({
          token:localStorage.getItem('token')||'',
          username:'',
          avatar:'',
          permissions:[],
          info:{}


      }),
    getters:{
          getToken():string{
              return this.token
          },
          getAvatar():string{
              return this.avatar
          },
          getNickname():string{
            return  this.username
          },
          getPermissions():string[]{
              return  this.permissions
          },
          getInfo():object{
              return  this.info
         }

    },
    actions:{
      setToken(token:string){
          localStorage.setItem('token',token)
          this.token=token
      },
      setAvatar(avatar:string){
          this.avatar=avatar
      },
     setUserInfo(info:Object){
          this.info=info
     },
     setPermissions  (permissions:string[]){
          this.permissions=permissions
     },
        async login(userInfo:Object) {
            try {
                const response = await login(userInfo);
                   // @ts-ignore
                if (response.access_token){
                    // @ts-ignore
                    this.setToken(response.access_token);
                    await this.getUser()

                }
            } catch (error) {
                console.log(error);
            }
        },
        async getUser(){
            console.log('getUser')
            try {

                // @ts-ignore
                const response = await user();
                this.setUserInfo(response);
                this.setAvatar(response.avatar);
                // @ts-ignore
                this.setUserName(response.name);
                return response;
            } catch (error) {
                console.log(error);
            }
        }

    }

})