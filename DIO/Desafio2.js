// Função para calcular o saldo de Rankeadas e determinar o nível do jogador
function calcularSaldoRankeadas(vitorias, derrotas) {
    // Calcular o saldo de Rankeadas
    const saldoVitorias = vitorias - derrotas;
    let nivel;

    // Determinar o nível do jogador com base nas vitórias
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    // Retornar o saldo de Rankeadas e o nível do jogador
    return { saldoVitorias, nivel };
}

// Coletar a quantidade de vitórias e derrotas do jogador a partir do usuário
const vitorias = parseInt(prompt("Digite a quantidade de vitórias:"), 10);
const derrotas = parseInt(prompt("Digite a quantidade de derrotas:"), 10);

// Calcular o saldo de Rankeadas e o nível do jogador
const resultado = calcularSaldoRankeadas(vitorias, derrotas);

// Exibir a mensagem com o saldo de Rankeadas e o nível do jogador
console.log(`O Herói tem de saldo de ${resultado.saldoVitorias} está no nível de ${resultado.nivel}`);
