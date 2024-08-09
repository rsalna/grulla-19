function mostrarGrulla() {
    // setInterval(() => {
      $('.grulla').css('display', 'flex');
      setTimeout(() => {
        $('.grulla').css('display', 'none');
      }, 4000);
    // }, 2000); // Repite cada 2 segundos (ajústalo según sea necesario)
  }

  $(document).ready(() => {
    mostrarGrulla();

    // -------------------Galeria de Incio--------------------
    // Iterar sobre las imágenes (asumiendo que tienen un patrón de ID como 'img1', 'img2', etc.)
    for (let i = 1; i <= 10; i++) {
      $(`#img${i}`).on({
        mouseout: function () {
          $(`.indicadorImg${i}`).removeClass("activeI");
          $(`#img${i}`).removeClass("hov");
          $(`#img${i} p`).css("display", "none");
          $(`.indicadorImg${i}`).css("width", "15");
        },
        mouseover: function () {
          $(`.indicadorImg${i}`).addClass("activeI");
          $(`#img${i}`).addClass("hov");
          $(`#img${i} p`).css("display", "block");
          $(`.indica`).css("width", "15");
          $(`.indicadorImg${i}`).css("width", "30");
        },
      });
      $(`.indicadorImg${i}`).on({
        mouseout: function () {
          $(`.indicadorImg${i}`).removeClass("activeI");
          $(`#img${i}`).removeClass("hov");
          $(`#img${i} p`).css("display", "none");
          $(`.indicadorImg${i}`).css("width", "15");
        },
        mouseover: function () {
          $(`.indicadorImg${i}`).addClass("activeI");
          $(`#img${i}`).addClass("hov");
          $(`#img${i} p`).css("display", "block");
          $(`.indica`).css("width", "15");
          $(`.indicadorImg${i}`).css("width", "30");
        },
      });
    }
  });