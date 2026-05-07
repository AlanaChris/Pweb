//FUNC CONSTRUTORA

let altura = prompt("Digite a altura do retângulo:");
let base = prompt("Digite a base do retângulo:");

altura = parseFloat(altura);
base = parseFloat(base);

function Retangulo(x, y) {
    this.base = x;
    this.altura = y;

    this.calcularArea = function () {
        return this.base * this.altura;
    };
}

let retangulo = new Retangulo(base, altura);
alert("Área do retângulo: " + retangulo.calcularArea());






//classe

class Conta {
    constructor() {
        this._nomeCorrentista = "";
        this._banco = "";
        this._numeroConta = "";
        this._saldo = 0;
    }

    

    setNomeCorrentista(nome) {
        this._nomeCorrentista = nome;
    }

    getNomeCorrentista() {
        return this._nomeCorrentista;
    }

    setBanco(banco) {
        this._banco = banco;
    }

    getBanco() {
        return this._banco;
    }

    setNumeroConta(numero) {
        this._numeroConta = numero;
    }

    getNumeroConta() {
        return this._numeroConta;
    }

    setSaldo(saldo) {
        this._saldo = saldo;
    }

    getSaldo() {
        return this._saldo;
    }
}



class Corrente extends Conta {
    constructor() {
        super();
        this._saldoEspecial = 0;
    }

    setSaldoEspecial(valor) {
        this._saldoEspecial = valor;
    }

    getSaldoEspecial() {
        return this._saldoEspecial;
    }
}



class Poupanca extends Conta {
    constructor() {
        super();
        this._juros = 0;
        this._dataVencimento = "";
    }

    setJuros(juros) {
        this._juros = juros;
    }

    getJuros() {
        return this._juros;
    }

    setDataVencimento(data) {
        this._dataVencimento = data;
    }

    getDataVencimento() {
        return this._dataVencimento;
    }
}



let objCorrente = new Corrente();

objCorrente.setNomeCorrentista(
    prompt("Digite o nome do correntista da Conta Corrente:")
);

objCorrente.setBanco(
    prompt("Digite o banco da Conta Corrente:")
);

objCorrente.setNumeroConta(
    prompt("Digite o número da Conta Corrente:")
);

objCorrente.setSaldo(
    parseFloat(prompt("Digite o saldo da Conta Corrente:"))
);

objCorrente.setSaldoEspecial(
    parseFloat(prompt("Digite o saldo especial:"))
);




let objPoupanca = new Poupanca();

objPoupanca.setNomeCorrentista(
    prompt("Digite o nome do correntista da Poupança:")
);

objPoupanca.setBanco(
    prompt("Digite o banco da Poupança:")
);

objPoupanca.setNumeroConta(
    prompt("Digite o número da Poupança:")
);

objPoupanca.setSaldo(
    parseFloat(prompt("Digite o saldo da Poupança:"))
);

objPoupanca.setJuros(
    parseFloat(prompt("Digite a taxa de juros:"))
);

objPoupanca.setDataVencimento(
    prompt("Digite a data de vencimento:")
);


alert(
` Conta Corrente
Nome: ${objCorrente.getNomeCorrentista()}
Banco: ${objCorrente.getBanco()}
Número: ${objCorrente.getNumeroConta()}
Saldo: ${objCorrente.getSaldo()}
Saldo Especial: ${objCorrente.getSaldoEspecial()}`
);


alert(
`  Conta Poupança
Nome: ${objPoupanca.getNomeCorrentista()}
Banco: ${objPoupanca.getBanco()}
Número: ${objPoupanca.getNumeroConta()}
Saldo: ${objPoupanca.getSaldo()}
Juros: ${objPoupanca.getJuros()}
Data Vencimento: ${objPoupanca.getDataVencimento()}`
);