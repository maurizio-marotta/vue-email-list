const { createApp } = Vue

createApp({
  data(){
    return{
      titolo: 'email list',
      apiUrl: 'https://flynn.boolean.careers/exercises/api/random/mail'
    }
  },
  methods:{
    getApi(){
      axios.get(this.apiurl)
      .then( res => {
        console.log(res.data.response);
        this.email = res.data.response;
        this.isloaded = true
      })
    }
  },
  mounted(){
    this.getapi()
  }
}).mount('#app')