document.addEventListener("DOMContentLoaded", function(event) { 
  var app = new Vue({
    el: '#app',
    data: {
      people: [ 
              {
              name: "Jacque",
              bio: "Likes to eat food and play with puppies.",
              bioVisible: false
              },
              {
              name: "Lindsey",
              bio: "Likes to sew and go on trips.",
              bioVisible: false
              }
              ],
      newPersonName: "",
      newPersonBio: ""
    },
    mounted: function() {

    },
    methods: {
      toggleBio: function(inputPerson) {
        inputPerson.bioVisible = !inputPerson.bioVisible;
      },

      addPerson: function() {
        if (this.newPersonName && this.newPersonBio) {
          var newPerson = {
                          name: this.newPersonName,
                          bio: this.newPersonBio,
                          bioVisible: false
                          };
          this.people.push(newPerson);
          this.newPersonName = "";
          this.newPersonBio = "";
        }
      },

      deletePerson: function(inputPerson) {
        var index = this.people.indexOf(inputPerson);
        this.people.splice(index, 1);
      }

    },
    computed: {

    }
  });
});