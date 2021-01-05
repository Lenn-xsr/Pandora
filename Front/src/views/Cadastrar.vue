<template>
  <component :is='nowActive' @Next='recNext'></component>
</template>

<script>
import { mapState } from 'vuex'
import axios from 'axios';

export default {
  name: 'Cadastrar',
  data(){
    return {
      user: true,
      nowActive: 'CadastroLang'
    }
  },
  computed: {
    ...mapState(['user'])
  },
  methods: {
    recNext(next){
      this.nowActive = next
    },
    async getInfos(){
      const a = await axios.get('/userinfo')
      if (a.data.tag){
        this.user.tag = a.data.tag
        this.user.avatar = a.data.avatar
      }else{
        console.log('[ERROR] Cannot get user infos')
      }
    }
  },
  components: {
    CadastroLang: () => import('@/components/CadastroLang.vue'),
    CadastroCatg: () => import('@/components/CadastroCatg.vue'),
    CadastroColor: () => import('@/components/CadastroColor.vue'),
    Finalizado: () => import('@/components/Finalizado.vue')
  },
  created(){
    this.getInfos()
  }
}
</script>
