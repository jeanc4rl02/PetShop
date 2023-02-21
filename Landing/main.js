var app = new Vue({
    el: '#app',
    data: {
      client: [],
      arrayPets: [
      {
        id: 1,
        img: "../assets/img/max.jpg",
        name: "Max",
        specie: "Perro",
        breed: "Labrador",
        gender: "Macho",
        color: "Negro",
        age: "5 meses",
        description: "Poco juguetón, amigable, calmado",
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
        age: "7 meses",
        description: "Poco juguetón, amigable, calmado",
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
        age: "8 meses",
        description: "Poco juguetón, amigable, calmado",
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
        age: "9 meses",
        description: "Poco juguetón, amigable, calmado",
        status: true,
      },
      {
        id: 5,
        img: "../assets/img/max.jpg",
        name: "Pachecho",
        specie: "Gato",
        breed: "Criollo",
        gender: "Macho",
        color: "Gris",
        age: "5 meses",
        description: "Poco juguetón, amigable, altivo",
        status: true,
      },
    ],
    arrayAdopted:[],
    },
    methods: {
      adopt(index){
        let pet = this.arrayPets.filter((p) => p.id == this.arrayPets[index].id);
        Swal.fire({
          title: `¿Estás seguro que deseas adoptar a ${this.arrayPets[index].name}?`,
          showDenyButton: true,
          confirmButtonText: `Confirmar`,
          denyButtonText: `Seguir buscando`,
         }).then((result) => {
          if (result.isConfirmed){
            pet[0].status = false;
            this.arrayAdopted.push(pet[0])
            this.arrayPets.splice(index, 1)
            localStorage.setItem("arrayPets", JSON.stringify(this.arrayPets))
            localStorage.setItem("arrayAdopted", JSON.stringify(this.arrayAdopted))
          }
          })
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
      } else {
        localStorage.setItem("arrayPets", JSON.stringify(this.arrayPets))
      }
    }
  })