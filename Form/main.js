var app = new Vue({
    el: '#app',
    data: {
      client: [],
      arrayPets: [
      {
        id: 1,
        img: "../assets/img/max1.jpeg",
        name: "Max",
        specie: "Perro",
        breed: "Labrador",
        gender: "Macho",
        color: "Negro",
        age: "5 meses",
        desc: "",
        status: true,
      },
      {
        id: 2,
        img: "../assets/img/max2.jpeg",
        name: "Lucas",
        specie: "Perro",
        breed: "Labrador",
        gender: "Macho",
        color: "Negro",
        age: "5 meses",
        desc: "",
        status: true,
      },
      {
        id: 3,
        img: "../assets/img/max3.jpeg",
        name: "Tobi",
        specie: "Perro",
        breed: "Labrador",
        gender: "Macho",
        color: "Negro",
        age: "5 meses",
        desc: "",
        status: true,
      },
      {
        id: 4,
        img: "../assets/img/max4.jpeg",
        name: "Félix",
        specie: "Perro",
        breed: "Labrador",
        gender: "Macho",
        color: "Negro",
        age: "5 meses",
        desc: "",
        status: true,
      },
      {
        id: 5,
        img: "../assets/img/max.jpg",
        name: "Max",
        specie: "Perro",
        breed: "Labrador",
        gender: "Macho",
        color: "Negro",
        age: "5 meses",
        desc: "",
        status: true,
      },
    ],
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
      }
    }
  })