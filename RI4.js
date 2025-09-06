class Cliente {
    #cpf
    constructor(nome, cpf, endereco) {
        this.nome = nome
        this.#cpf = cpf
        this.endereco = endereco
        this.telefones = []
    }

    getCpf() {
        return this.#cpf
    }

    adicionarTelefone(telefone) {
        this.telefones.push(telefone)
    }

    detalhe() {
        let info = "Nome: " + this.nome + "\n"
        info += "Estado: " + this.endereco.estado +
                " cidade: " + this.endereco.cidade +
                " rua: " + this.endereco.rua +
                " numero: " + this.endereco.numero + "\n"
        this.telefones.forEach(t => {
            info += "ddd: " + t.ddd + " numero: " + t.numero + "\n"
        })
        return info
    }
}

class Telefone {
    constructor(ddd, numero) {
        this.ddd = ddd
        this.numero = numero
    }
}

class Endereco {
    constructor(rua, numero, cidade, estado) {
        this.rua = rua
        this.numero = numero
        this.cidade = cidade
        this.estado = estado
    }
}

class Empresa {
    #cnpj
    constructor(razaoSocial, nomeFantasia, cnpj, endereco) {
        this.razaoSocial = razaoSocial
        this.nomeFantasia = nomeFantasia
        this.#cnpj = cnpj
        this.endereco = endereco
        this.telefones = []
        this.clientes = []
    }

    getCnpj() {
        return this.#cnpj
    }

    adicionarTelefone(telefone) {
        this.telefones.push(telefone)
    }

    adicionarCliente(cliente) {
        this.clientes.push(cliente)
    }

    detalhe() {
        let info = "Razão Social: " + this.razaoSocial + "\n"
        info += "Nome fantasia: " + this.nomeFantasia + "\n"
        info += "------------------\n"
        this.clientes.forEach(c => {
            info += c.detalhe() + "\n"
        })
        return info
    }
}

let endEmpresa = new Endereco("Av Central", "1000", "São Paulo", "SP")
let empresa = new Empresa("ABC LTDA", "Mercado Online", "12.345.678/0001-99", endEmpresa)

let cliente1 = new Cliente("João", "111.111.111-11",
    new Endereco("Av Andrômeda", "987", "São José dos Campos", "SP"))
cliente1.adicionarTelefone(new Telefone("99999999", "99999999"))
cliente1.adicionarTelefone(new Telefone("99999999", "99999999"))
empresa.adicionarCliente(cliente1)

let cliente2 = new Cliente("Gabriel", "222.222.222-22",
    new Endereco("Av Andrômeda", "412", "São José dos Campos", "SP"))
cliente2.adicionarTelefone(new Telefone("88888888", "88888888"))
cliente2.adicionarTelefone(new Telefone("88888888", "88888888"))
empresa.adicionarCliente(cliente2)

let cliente3 = new Cliente("Bárbara", "333.333.333-33",
    new Endereco("Av São João", "789", "São José dos Campos", "SP"))
cliente3.adicionarTelefone(new Telefone("77777777", "77777777"))
cliente3.adicionarTelefone(new Telefone("77777777", "77777777"))
empresa.adicionarCliente(cliente3)

let cliente4 = new Cliente("Márcia", "444.444.444-44",
    new Endereco("Av Andrômeda", "452", "São José dos Campos", "SP"))
cliente4.adicionarTelefone(new Telefone("66666666", "66666666"))
cliente4.adicionarTelefone(new Telefone("66666666", "66666666"))
empresa.adicionarCliente(cliente4)


console.log(empresa.detalhe())