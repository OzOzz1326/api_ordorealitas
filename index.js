const express = require('express');
const app = express()
const port = 3000

app.get('/REPO', (req, res) => {
    const criatura = [{
        id: 1,
        name: "Aniquilação",
        elemento1: "Sangue",
        element2o: "Medo",
        tamanho: "Colossal",
        stats:{
          vd: 380,
          hp: 1200,
          def: 58,
          desloc: "15m",
          presPertubadora:{
            dt: 45,
            dano: "9d8 mental"            
          },
          resistencia:{
            dano: 50
          },
          vulnerabilidade:{
            morte
          },
        },
        dices:{
          atributos:{
            agi: 4,
            for: 5,
            int: 3,
            pre: 4,
            vig: 5,
          },
          sentidos:{
            percepção: "4d20+20",
            iniciativa: "4d20+20"
          },
          pericias:{
            atletismo: "5d20+20"
          },
        },
        poderes:{
          ataque:{
            ataque1:{
              nome: "Garras",
              acao: "Padrão",
              tipo: "Corpo a corpo x2",
              ataque: "5d20+40",
              dano:{
                damage: "4d10+30",
                type: "Sangue",
              },
            },
            ataque2:{
              nome: "Tentáculos Espinheitos",
              acao: "Padrão",
              tipo: "Distância x3 MÉDIO",
              ataque: "4d10+10",
              dano:{
                damage: "2d10+20",
                type: "Sangue",
              },
            },
            ataque3:{
              nome: "Disparo de Espinhos",
              acao: "Padrão",
              tipo: "Distância x3 MÉDIO",
              ataque: "4d10+10",
              dano:{
                damage: "2d10+20",
                type: "Sangue",
              },
            },
          },
          reacao:{
            reacao1:{
              nome: "Agarrão",
              acao: "Reação",
              descricao: "Se a Aniquilação aceta um ataque de Tentáculos Espinheitos, ela pode tentar agarrar o alvo (teste 5d20+50). Ela pode manter até 4 personagens agarrados por vez.",
              dado:{
                teste: "5d20+50",
              },
            },
            reacao2:{
              nome: "Instinto Aniquilador",
              acao: "Reação",
              descricao: "Sempre que um personagem em alcance curto da Aniquilação se movimenta mais do que 3m, a Aniquilação realiza um ataque de Tentáculos Espinheitos contra o personagem.",
            }
          },
          livre:{
            livre1:{
              nome: "Apertar e Destruir",
              acao: "Livre",
              descricao: "No início do seu turno, a Aniquilação aperta os personagens agarrados com seus tentáculos, causando 40 pontos de dano de Sangue.",
              dado:{
                dano: 40,
                tipo: "Sangue",
              },
            },
          },
          movimento:{
            movimento1:{
              nome: "Bater as Asas",
              acao: "Movimento",
              descricao: "A Aniquilação bate suas asas, criando um som ensurdecedor. Cada personagem em alcance longo sofre 8d6 pontos de dano Mental, é empurrado 6m para longe da Aniquilação e fica atordoado por uma rodada (Fortitude DT 40 reduz o dano à metade e evita efeitos).",
              dado:{
                dano: "8d6",
                tipo: "Mental",
                efeito: "Atordoado",
                resistencia:{
                  teste: "Fortitude",
                  dt: 40,
                },
              },
            },
            movimento2:{
              nome: "Estrangulamento Final",
              acao: "Movimento",
              descricao: "A Aniquilação se desloca 15m enquanto seus inúmeros braços agarram e estrangulam personagens no caminho. Cada personagem que ficar adjacente a Aniquilação durante esse deslocamento fica agarrado e asfixiado (Reflexos DT 30 evita). Um personagem agarrado pode escapar gastando uma ação padrão e passando em um teste de Reflexos DT 30.",
              dado:{
                efeito:{
                  efeito1: "Agarrado",
                  efeito2: "Asfixiado",
                },
                resistencia:{
                  teste: "Reflexos",
                  dt: 30,
                },
              },
            },
          },
          completa:{
            completa1:{
              nome: "Tempestade de Espinhos",
              acao: "Completa",
              descricao: "A Aniquilação lança todos os seus espinhos. Todos os personagens em alcance médio sofrem 20d6+20 pontos de dano de Sangue (Reflexos DT 40 reduz à metade). A Aniquilação só pode usar esta habilidade uma vez por cena e, quando a usa, perde seu Disparo de Espinhos até o fim da cena.",
              dado:{
                dano: "20d6+20",
                tipo: "Sangue",
                resistencia:{
                  teste: "Reflexos",
                  dt: 40,
                },
              },
            },
          },
        },

        enigmaDoMedo:"O Enigma do Medo da Aniquilação é desconhecido. Quando ele for resolvido, a Aniquilação perderá sua resistência a dano e sua habilidade Tempestade de Espinho",
    }]
    const rituais = [{
      
      
    }]
    const poderesParanormais = [{
      
    }]
    const itensAmaldicoados = [{
      
    }]
    const ameaçasDaRealidade = [{

    }]

  res.send('./REPO')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})