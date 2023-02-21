var app = new Vue({
    el: '#app',
    data: {
      client: [],
      arrayPets: [],
        arrayAdopted:[],
    },
    methods: { 
      logout() {
        localStorage.removeItem("client");
        localStorage.removeItem("name");
        window.location = "../index.html";
      },
    },
    created(){
      this.client = JSON.parse(localStorage.getItem("client"));
      JSON.parse(localStorage.getItem("arrayAdopted")) ? this.arrayAdopted = JSON.parse(localStorage.getItem("arrayAdopted")) : this.arrayAdopted = []
        
      if(JSON.parse(localStorage.getItem("arrayPets")) != null){
        this.arrayPets = JSON.parse(localStorage.getItem("arrayPets"))
      } else {
        localStorage.setItem("arrayPets", JSON.stringify(this.arrayPets))
      }
    }
  })