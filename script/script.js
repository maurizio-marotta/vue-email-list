const { createApp } = Vue

createApp({
  data(){
    return{
      titolo: 'email list',
      apiUrl: 'https://flynn.boolean.careers/exercises/api/random/mail',
      emails: [], 
      isLoaded: false,
      limit: 10
    }
  },
  methods:{
    getApi(){
      axios.get(this.apiUrl)
      .then( res => {
        this.emails.push(res.data.response);
        console.log(this.emails);
        this.isLoaded = true
      })
    }
  },
  mounted(){
    for(let i = 0; i < this.limit; i++){
    this.getApi()
    }
  },
}).mount('#app')