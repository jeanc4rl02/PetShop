let vm = new Vue({
    el: "#app",
    data: {
      users: [],
      userEntered: "",
      passwordEntered: "",
      error: false,
      showModal: false,
      errorReg: false,
      modalName: null,
      modalLastname: null,
      modalUsername: null,
      modalPassword: null,
      errorUser: null,
      errorUsername: false,
    },
    methods: {
      verifyUser() {
        const userValidation = this.users.find((u) => u.username == this.userEntered);
        const passwordValidation = this.users.find((u) => u.password == this.passwordEntered);
        if (passwordValidation && userValidation) {
          let client = this.users.filter((u) => u.username == this.userEntered);
          localStorage.setItem("name", client[0].name.first);
          localStorage.setItem("client", JSON.stringify(client));
          console.log(localStorage.getItem("client"));
          Swal.fire({
            icon: 'success',
            title: `Inicio sesión como ${localStorage.getItem("name")}`,
            showConfirmButton: false,
            timer: 1800
          })
          this.error = false;
          setTimeout(function() {
              window.location.href = "./Landing/index.html";
            }, 2000);
          
        } else {
          this.error = true;
          Swal.fire({
            icon: 'error',
            title: 'Inicio de sesión fallido',
            text: 'Revise sus credenciales de ingreso',
            showConfirmButton: false,
            timer: 2500
          })
        }
      },
      validateUsername(){
        return this.users.some(user=>user.username===this.modalUsername) //Retorna verdadero si lo encuentra y falso si no lo encuentra
      },
      async getUsers(){
        await fetch("https://randomuser.me/api/?results=10")
        .then(response => response.json())
        .then(d => (this.users = d.results))
        this.updateLocalStorage();
      },
      updateLocalStorage(){
        let aux = [];
        this.users.map(u => {
          let boolean = false;
          this.getRandomInt(2) == 1 ? boolean = true : boolean = false;
            aux.push({
                pic: u.picture.medium,
                name: u.name,
                age: u.dob.age,
                country: u.location.country,
                email: u.email,
                phone: u.phone,
                cell: u.cell,
                gender: u.gender,
                username: u.login.username,
                password: u.login.password,
                admin: boolean,
            })
            ;
        })
        this.users = aux;
        localStorage.setItem("users", JSON.stringify(this.users))
    },
      pushUser(){
        let userValidation = this.users.some((u) => u.username == this.modalUsername)
        if(userValidation){
          this.errorUsername = true
        }

        if(this.modalName != null && this.modalLastname != null && this.modalUsername != null && this.modalPassword != null && this.modalPassword.length >= 4 && !userValidation){
          this.errorUsername = false;
          this.errorReg = false;
          this.users = [];
          this.users = JSON.parse(localStorage.getItem("users")) || []
          if(!this.validateUsername()){
              this.users.push({
                name: this.modalName,
                lastname: this.modalLastname,
                username: this.modalUsername,
                password: this.modalPassword,
                accumulatedPickles: 0,
                cards: []
              })
              Swal.fire({
                icon: 'success',
                title: `Usuario registrado correctamente`,
                showConfirmButton: false,
                timer: 1800
              })
              this.errorReg = false;
              localStorage.setItem("users", JSON.stringify(this.users));
              setTimeout(function() {
                window.location.reload();
              }, 1500);
            
            }else{
              Swal.fire({
                icon: 'error',
                title: 'Registro fallido',
                text: 'El usuario que está tratando de ingresar ya existe en el sistema',
                showConfirmButton: false,
                timer: 3500
              })
            }
        
        } else {
          this.errorReg = true;
        }
      },
      getRandomInt(max) {
        return Math.floor(Math.random() * max);
    },
    },
    created(){
      localStorage.getItem("users") != null ? this.users = JSON.parse(localStorage.getItem("users")) : this.getUsers();
    },
    mounted(){

    }
  });