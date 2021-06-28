function generate() {

  var pronoun = ["The", "Our", "You", "Him", "Her", "Us", "Them"];
  var adjective = ["big", "strong", "new", "old", "dangerous", "smooth",
    "happy", "cute", "nice", "perfect", "young"];
  var noum = ["postman", "actress", "policeman", "architect", "baker", "doctor", "enginner"];
  var domain = [".com", ".es", ".net", ".com.es", ".lat", ".com.ve", ".la",
    ".co", ".lt"]; 
  var rand_pronum = Math.floor(Math.random() *pronoun.length); 
  var rand_adje = Math.floor(Math.random() *adjective.length); 
  var rand_noum = Math.floor(Math.random() *noum.length); 
  var rand_domain = Math.floor(Math.random() * domain.length);
  document.getElementById("result").innerHTML = pronoun[rand_pronum] + "-" + adjective[rand_adje] + "-" +
        noum[rand_noum] + domain[rand_domain]; 
};
