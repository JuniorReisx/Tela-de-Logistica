let historicoPedidos = {
    idCliente: "12345",
    nomeCliente: "João Silva",
    pedidos: [
        {
            idPedido: "ord001",
            data: "2022-01-01",
            itens: [
                {
                    idProduto: "iphone12",
                    nomeProduto: "iPhone 12 Pro Max",
                    quantidade: 1,
                    preco: 1099.99,
                },
                {
                    idProduto: "galaxyS21",
                    nomeProduto: "Samsung Galaxy S21",
                    quantidade: 1,
                    preco: 799.99,
                },
            ],
            enderecoEntrega: {
                rua: "Rua Principal, 123",
                cidade: "São Paulo",
                estado: "SP",
                cep: "01234-567",
                pais: "Brasil",
            },
            status: "Entregue",
        },
        {
            idPedido: "ord002",
            data: "2022-02-01",
            itens: [
                {
                    idProduto: "pixel6",
                    nomeProduto: "Google Pixel 6",
                    quantidade: 1,
                    preco: 599.99,
                },
            ],
            enderecoEntrega: {
                rua: "Rua Secundária, 456",
                cidade: "Rio de Janeiro",
                estado: "RJ",
                cep: "98765-432",
                pais: "Brasil",
            },
            status: "Em trânsito",
        },
        {
            idPedido: "ord003",
            data: "2022-03-01",
            itens: [
                {
                    idProduto: "oneplus9",
                    nomeProduto: "OnePlus 9 Pro",
                    quantidade: 1,
                    preco: 969.99,
                },
            ],
            enderecoEntrega: {
                rua: "Rua Alternativa, 789",
                cidade: "Belo Horizonte",
                estado: "MG",
                cep: "54321-876",
                pais: "Brasil",
            },
            status: "Pendente",
        },
        {
            idPedido: "ord004",
            data: "2022-04-01",
            itens: [
                {
                    idProduto: "iphoneSE",
                    nomeProduto: "iPhone SE",
                    quantidade: 1,
                    preco: 399.99,
                },
            ],
            enderecoEntrega: {
                rua: "Rua Paralela, 1011",
                cidade: "Curitiba",
                estado: "PR",
                cep: "76543-210",
                pais: "Brasil",
            },
            status: "Pendente",
        },
        {
            idPedido: "ord005",
            data: "2022-02-01",
            itens: [
                {
                    idProduto: "pixel6",
                    nomeProduto: "Sansung A14",
                    quantidade: 1,
                    preco: 599.99,
                },
            ],
            enderecoEntrega: {
                rua: "Rua Dom Avelar, 456",
                cidade: "Bahia",
                estado: "BA",
                cep: "98765-432",
                pais: "Brasil",
            },
            status: "Em trânsito",
        },
        {
            idPedido: "ord006",
            data: "2022-02-01",
            itens: [
                {
                    idProduto: "pixel6",
                    nomeProduto: "Google Pixel 6",
                    quantidade: 1,
                    preco: 599.99,
                },
            ],
            enderecoEntrega: {
                rua: "Rua Secundária, 456",
                cidade: "Rio de Janeiro",
                estado: "RJ",
                cep: "98765-432",
                pais: "Brasil",
            },
            status: "Em trânsito",
        }
    ],
  };
  
  const colunaPedido = document.getElementById('tbody')


  historicoPedidos.pedidos.forEach((pedidos) =>{
    let linha = document.createElement('tr')
    let ColunaProduto = document.createElement('td')
    ColunaProduto.textContent = pedidos.idPedido


    let ColunaData = document.createElement('td')
    ColunaData.textContent = pedidos.data

    let ColunaItens = document.createElement('td')
    ColunaItens.textContent = pedidos.itens[0].nomeProduto

    let ColunaEstado = document.createElement('td')
    ColunaEstado.textContent = pedidos.enderecoEntrega.estado

    let ColunaCidade = document.createElement('td')
    ColunaCidade.textContent = pedidos.enderecoEntrega.cidade

    let ColunaEntrega = document.createElement('td')
    ColunaEntrega.textContent = pedidos.enderecoEntrega.rua

    let ColunaStatus = document.createElement('td')
    ColunaStatus.textContent = pedidos.status
  

    linha.appendChild(ColunaProduto)
    linha.appendChild(ColunaData)
    linha.appendChild(ColunaItens)
    linha.appendChild(ColunaEstado)
    linha.appendChild(ColunaCidade)
    linha.appendChild(ColunaEntrega)
    linha.appendChild(ColunaStatus)


	colunaPedido.appendChild(linha);
  })