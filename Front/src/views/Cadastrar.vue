<template>
  <component :is="nowActive" @Next="recNext"></component>
</template>

<script>
import CadastroLang from '@/components/CadastroLang.vue'
import CadastroCatg from '@/components/CadastroCatg.vue'
import CadastroColor from '@/components/CadastroColor.vue'
import Finalizado from '@/components/Finalizado.vue'
import axios from "axios";

export default {
  name: 'Cadastrar',
  data(){
    return {
      user: true,
      nowActive: "CadastroLang"
    }
  },
  methods: {
    recNext(next){
      this.nowActive = next
    },
    async getInfos(){
      const a = await axios.get("/userinfo")
      if (a.data.tag){
        this.$store.state.user.tag = a.data.tag
        this.$store.state.user.avatar = a.data.avatar
      }else{
        console.log("[ERROR] Cannot get user infos")
      }
    }
  },
  components: {
    CadastroLang,
    CadastroCatg,
    CadastroColor,
    Finalizado
  },
  created(){
    this.getInfos()
  }
}
</script>
