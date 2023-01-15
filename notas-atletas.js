let atletas = [
    {
        nome: "Cesar Abascal",
        notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
        nome: "Fernando Puntel",
        notas:  [8, 10, 10, 7, 9.33]
    },
    {
        nome: "Daiane Jelinsky",
        notas: [7, 10, 9.5, 9.5, 8]
    },
    {
        nome: "Bruno Castro",
        notas: [10, 10, 10, 9, 9.5]
    }
];

let atleta = []

class Atleta {
    constructor(nome, notas){
        this.nome = nome;
        this.notasObtidas = notas.join(",");
        this.notas = notas.sort(function(a, b){return a-b;});
        this.media = 0;
    }
    formatarNotas(){
        // let notas = this.notas.map(function(nota){ // cria um novo array com as notas para não modificar
        //     return nota
        // });
        this.notas.shift();
        this.notas.pop();
        let media = this.notas.reduce(function(total, nota) {
            return total + nota;
        })
        this.media = media/this.notas.length;
    }

    apresentarNotas(){
        return `
        Atleta: ${this.nome}
        Notas obtidas: ${this.notasObtidas}
        Média Válida: ${this.media}`
    }
}

for (let i = 0; i < atletas.length; i++) {
    atleta[i] = new Atleta(atletas[i].nome, atletas[i].notas);
    atleta[i].formatarNotas();
    console.log(atleta[i].apresentarNotas());
}
