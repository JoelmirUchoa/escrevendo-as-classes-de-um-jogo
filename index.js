// Classe que representa um herói
class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque;

    // Escolhe o ataque conforme o tipo
    switch (this.tipo.toLowerCase()) {
      case "mago":
        ataque = "magia";
        break;
      case "guerreiro":
        ataque = "espada";
        break;
      case "monge":
        ataque = "artes marciais";
        break;
      case "ninja":
        ataque = "shuriken";
        break;
      default:
        ataque = "um ataque desconhecido";
    }

    console.log(`o ${this.tipo} atacou usando ${ataque}`);
  }
}

// Exemplos de uso:
const heroi1 = new Heroi("Arthus", 30, "mago");
heroi1.atacar(); // Saída: o mago atacou usando magia

const heroi2 = new Heroi("Bjorn", 40, "guerreiro");
heroi2.atacar(); // Saída: o guerreiro atacou usando espada

const heroi3 = new Heroi("Li", 25, "monge");
heroi3.atacar(); // Saída: o monge atacou usando artes marciais

const heroi4 = new Heroi("Hanzo", 28, "ninja");
heroi4.atacar(); // Saída: o ninja atacou usando shuriken