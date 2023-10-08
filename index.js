class Hero {
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar(){
        let ataque = '';

        switch(this.tipo) {
            case 'mago':
                ataque = 'magia';
                break;
            case 'guerreiro':
                ataque = 'espada';
                break;
            case 'monge':
                ataque = 'artes marciais';
                break;
            case 'ninja':
                ataque = 'shuriken';
                break;
            default:
                console.log("Tipo de herói não reconhecido!");
                return;
        }

        console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }
}

const mago = new Hero("Merlin", 150, "mago");
mago.atacar();

const guerreiro = new Hero("Arthur", 25, "guerreiro");
guerreiro.atacar();
