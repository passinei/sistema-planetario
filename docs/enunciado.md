# Prática: Movimentando paradas em JavaScript

_OBS: Este documento é uma adaptação do enunciado escrito e publicado no Moodle pelo professor [Flávio Coutinho](https://github.com/fegemo)_

![Vários vagalumes voando da esquerda para a direita em uma paisagem de céu noturno.](images/Vagalumes%20de%20Chihiro.gif)

Pré-requisitos:

1. Um navegador
2. Um editor de texto (sugiro [VS Code](https://code.visualstudio.com/) com a extensão [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer))

Objetivos:

1. Exercitar um pouco de JavaScript
2. Entender como movimentar objetos em uma página web

## Atividade

Você deve escolher um tema e criar uma página bem simples, com apenas um plano de fundo bacana e alguns objetos se movimentando nesse cenário, de alguma forma. Opcionalmente, você pode colocar um botão ou uma tecla que adiciona/remove os bichinhos que voam. Por exemplo: **vagalumes, estrelas cadentes, abelhas, moscas, passarinhos, flocos de neve, gotas de chuva** etc.

## Exercício 1: Básico da página

Escolha o tema e crie a página com o fundo, devidamente configurado com propriedades CSS. Escolha também a imagem para a paradinha que estará se movimentando no cenário. Prefira colocar as imagens em uma pastinha, para ficar tudo organizado.

## Exercício 2: Imagem única e posicionamento com CSS

Coloque um único elemento da imagem escolhida para movimentar dentro do body e consiga posicioná-lo com CSS. Lembre-se que, para definir suas posições (x,y) é necessário que ele tenha posicionamento absoluto. Além disso, opte por usar a propriedade de transformação, em vez de `left` e `top`, porque a placa de vídeo do computador é capaz de acelerar cálculos para gerar animações quando usamos a propriedade `transform`.

## Exercício 3: Imagem única se movimentando com JavaScript

O próximo passo é fazer a imagem se movimentar, por exemplo, da esquerda para direita, e dar a volta quando chegar no final, via JavaScript. Lembre-se que você não deve usar um laço (eg, `for`) para atualizar a posição, porque ele é executado "instantaneamente" antes que consigamos ver a alteração passo a passo. É necessário alterar a posição ao longo do tempo usando, por exemplo, o `setInterval(umaFuncao, periodo)`.

## Desafio 1: Vetor de imagens se movimentando

Em vez de apenas uma imagem se movimentando, tenha um vetor com elas e coloque um botão para criar uma nova (e, talvez outro para remover?). Pode ser uma boa ideia usar uma classe para deixar o código organizado.

## Desafio 2: Arrumar uns movimentos loucos

Use funções trigonométricas como seno e cosseno (e outras) para fazer movimentações diferentes. Por exemplo, é possível criar um movimento circular para o objeto ao fazer tanto o x quanto o y serem definidos de acordo com o cosseno e o seno (respectivamente). Nesse caso, seriam x/y seriam seno/cosseno de um ângulo que poderia começar de 0 e ir crescendo até `2 * Math.PI`.
