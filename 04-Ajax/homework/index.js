$("#boton").click(() => {
  $.get("http://localhost:5000/amigos", (amigos) => {
    const lista = $("#lista");

    lista.empty();

    amigos.forEach((amigo) => {
      const listItem = document.createElement("li");
      listItem.innerHTML = amigo.name;
      listItem.id = amigo.id;
      lista.append(listItem);
    });
  });
});

$("#search").click(() => {
  const searchInput = $("#input");

  $.get(`http://localhost:5000/amigos/${searchInput.val()}`, (amigo) => {
    $("#amigo").text(amigo.name);
  });
});

$("#delete").click(() => {
  const searchInput = $("#inputDelete");

  $.ajax({
    url: `http://localhost:5000/amigos/${searchInput.val()}`,
    method: "DELETE",
    success: () => {
      $("#success").text(`Amigo ${searchInput.val()} eliminado con éxito`);
    },
  });
});
