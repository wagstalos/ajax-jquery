var dados = new FormData();

dados.append("nome", "PAULO");
dados.append("idade", 35);
dados.append("filho", "Maria");

$.ajax({
  url: "http://localhost/ajax/meuscript.php",
  method: "POST",
  data: dados,
  processData: false,
  contentType: false,
  success: function (data) {
    console.log(data);
    $("#main").text(data);
  },
});
