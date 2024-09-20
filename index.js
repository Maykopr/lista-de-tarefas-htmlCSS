let text = document.getElementById("caixaTexto");
let button = document.getElementById("botao");
let areaList = document.getElementById("areaLista");
let contador = 0;

function addTarefa() {
      let valorInput = text.value;
      if (valorInput !== null && valorInput !== "" && valorInput !== undefined) {
            ++contador;

            let novaTarefa = `
        <div class="lista" id="${contador}" >
        <label for="check${contador}" id="tarefa" ><input onclick="marcarTarefa(${contador})" type="checkbox" class="check" id="check${contador}">${valorInput}</label>
        <button onclick="deletar(${contador})" type="submit" id="deleteButton"><img class="lixeira"src="img/delete.png" alt="icone lixeira"></button>
        </div>`;

            /*add novo bloco html à lista e limpa a caixa de texto*/
            areaList.innerHTML += novaTarefa;
            text.value = "";
            text.focus();
      }
}

text.addEventListener("keyup", function (event) {
      if (event.keyCode === 13) {
            event.preventDefault();
            button.click();
      }
});

function deletar(id) {
      let tarefaRem = document.getElementById(id);
      tarefaRem.remove(id);
}

function marcarTarefa(id) {
      let item = document.getElementById(id);
      let classe = item.getAttribute("class");
      let check = document.getElementById(`check${id}`);
      console.log(id);
      if (classe == "lista") {
            item.classList.add("clicado");
      } else {
            item.classList.remove("clicado");
      }
}
