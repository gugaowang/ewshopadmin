import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import {NaiveUiResolver} from "unplugin-vue-components/resolvers"
// @ts-ignore
import {resolve} from "path";

function  pathResolve(dir:string){
     // @ts-ignore
    return resolve(process.cwd(),'.',dir)
}



// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      vue(),
      Components({
         resolvers:[NaiveUiResolver()]
    })



  ],
    resolve:{
      alias:[
          {
              find:'@', //寻找的目录
              replacement:pathResolve('src')
          }
      ]
    },
    server:{
      host:'localHost',
      port:1000
    }

})
