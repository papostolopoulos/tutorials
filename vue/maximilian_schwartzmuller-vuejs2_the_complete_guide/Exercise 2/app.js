new Vue({
        el: '#exercise',
        data: {
            value: ''
        },
        methods: {
          alertMe: function() {
            alert("Hello, I am an alert");
          },
          updateValue: function(event) {
            this.value = event.target.value;
          }
        }
    });
