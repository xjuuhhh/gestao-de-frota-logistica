// Seleciona os elementos do HTML
const inputPlaca = document.getElementById('placa');
const inputKm = document.getElementById('km');
const btnAdicionar = document.getElementById('btnAdicionar');
const listaCaminhoes = document.getElementById('listaCaminhoes');

// Função para adicionar o caminhão na tabela
function adicionarCaminhao() {
  const placa = inputPlaca.value;
  const km = Number(inputKm.value);

  // Validação simples para não enviar campos vazios
  if (placa === '' || inputKm.value === '') {
    alert('Por favor, preencha todos os campos!');
    return;
  }

  // Cria uma nova linha na tabela
  const linha = document.createElement('tr');

  // Regra de negócio: Se a rodagem for igual ou maior que 10.000km, o Status é URGENTE
  let statusTexto = 'OK';
  let classeStatus = 'status-ok';

  if (km >= 10000) {
    statusTexto = 'URGENTE';
    classeStatus = 'status-urgente';
  }

  // Preenche o conteúdo da linha
  linha.innerHTML = `
    <td>${placa}</td>
    <td>${km.toLocaleString('pt-BR')} km</td>
    <td><span class="${classeStatus}">${statusTexto}</span></td>
  `;

  // Adiciona a linha na tabela
  listaCaminhoes.appendChild(linha);

  // Limpa os campos de texto
  inputPlaca.value = '';
  inputKm.value = '';
}

// Escuta o clique do botão
btnAdicionar.addEventListener('click', adicionarCaminhao);