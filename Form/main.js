var app = new Vue({
    el: '#app',
    data: {
      client: [],
      arrayPets: [],
      arrayAdopted:[],
      name: null,
      breed: null,
      gender: null,
      color: null,
      age: null,
      description: null,
      specie: null,
      img: null,
      error: false,
    },
    methods: {
      giveUpAdoption() {
        if(this.name != null && this.specie != null && this.gender != null && this.breed != null && this.age != null && this.color != null && this.description != null){
          this.error = false;
          this.arrayPets.push({
          id: this.arrayPets.length + this.arrayAdopted.length + 1,
          name: this.name,
          specie: this.specie,
          gender: this.gender,
          breed: this.breed,
          age: this.age+" meses",
          color: this.color,
          description: this.description,
          img: this.img
        })
          localStorage.setItem("arrayPets", JSON.stringify(this.arrayPets))
          window.location = "../Landing/index.html";
        } else {
          this.error = true;
        }
        
        
      },
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
      }
    }
  })