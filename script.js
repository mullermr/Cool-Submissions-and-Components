Vue.component('codenames', {
  props:["names"],
  data:function(){
    return{
      showing: this.names
    }
  },
  template:"<div v-on:click = 'changeName()'>{{showing}}</div>"
})

var app = new Vue({
  el: "#app",
  data: {
    name: "",
    email: "",
    nameMess: "",
    emailMess: "",
    submission: "Not Submitted", 
    list: [{name:"Protagonist",codename:"Joker"},{name:"Anne",codename:"Panther"},{name:"Ryuji",codename:"Skull"}]
  },
  
  
  methods:{
    validateEmail(value){
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)){
        this.emailMess = "";
      } 
      else{
        this.emailMess = "The input needs to be a valid Email Address.";
      } 
   },
    changeName(){
      if (this.showing === this.names){
        this.showing = this.codename;
      }
      else{
        this.showing = this.names;
      }
    }
  },
  
  
  watch:{
    name: function(){
      if(this.name.length < 2){
        this.nameMess = "The input needs to have at least 2 characters.";
      }
      else{
        this.nameMess = "";
      }
    },
   email: function(value){     
      this.email = value;
      this.validateEmail(value);
    },
    emailMess: function(){
      if(this.emailMess == "" && this.nameMess == ""){
        this.submission = "Submitted";
      }
      else{
        this.submission = "Not Submitted";
      }
    }
  }
})