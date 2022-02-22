# Calculadora-De-Gorjeta

## Visão Geral
Esta aplicação é uma calculadora de gorjeta construída utilizando as tecnologias HTML , CSS e JAVASCRIPT. O objetivo dessa aplicação foi a prática e aperfeiçoamento de meus conhecimentos em front-end com foco especial em JAVASCRIPT.

O funcionamento se dá através da coleta de dados por meio de inputs e botões disponíveis ao usuário na tela, após a coleta das informações os dados são processados e retornados em um campo específico. A seguir será exibida a tela da aplicação para desktop, tablets e smartphones.

**Desktop** 

![Screenshot_3](https://user-images.githubusercontent.com/78181968/154742154-025944cf-e240-4202-9987-9071f67dbb85.png)

**Tablet**

![tablet](https://user-images.githubusercontent.com/78181968/154742177-68c9f75e-2fc8-41c1-a4d5-6b676ce07780.png)

**Smartphone**

![smartphone](https://user-images.githubusercontent.com/78181968/154742191-e95d2a67-6283-4276-8f81-94f5ba060559.png)

## Link de acesso
- https://igorg7.github.io/Calculadora-De-Gorjeta/

## Meu processo 
Primeiramente o layout foi feito utilizando HTML5 e CSS3, depois da confecção do layout foram criadas as funcionalidades usando JAVASCRIPT. O agrupamento e posicionamento dos botões e da seção de resultado foram realizados com grid para um posicionamento mais dinâmico dos elementos. 

## O que foi aprendido 
No processo de desenvolvimento dessa aplicação aprendi a como usar eventos DOM com `addEventListener()` usando os eventos de click e input. 

**addEventListener() com evento input**

Esse trecho de código recebe o valor do input assim que um dado é inserido, e depois faz uma verificação de outros dados em uma condicional para que seja executada uma função ou dependendo do resultado da verificação outra função é executada.

![trecho de código](https://user-images.githubusercontent.com/78181968/154753951-fa2a07a5-3069-405d-a5a3-39a5857bd590.png)

**addEventListener() com evento click**

Esse trecho de código é acionado toda vez que um botão recebe um clique, quando um botão recebe o clique ele passa para um estado ativo e seu valor é coletado para ser processado em outra função. No final desse evento existem duas condicionais que dependendo do resultado de seus testes uma das duas funções de cálculo será acionada.

![trecho de código 2](https://user-images.githubusercontent.com/78181968/154753989-0f15cb57-dfbd-4b07-8c3a-32cd4c332b98.png)

**Posicionamento com Grid**

O posicionamento dos botões foi feito com o grid para que os botões se posicionem de forma dinâmica. Essa seção foi separada em três colunas e em duas linhas, mas à medida que a tela fica menor essa seção passa a ter apenas duas colunas e três linhas.

![grid](https://user-images.githubusercontent.com/78181968/154754037-eb14e22b-7874-47f1-8f33-49cfa34d29fd.png)

![trecho de código 3](https://user-images.githubusercontent.com/78181968/154754071-31d0436b-2532-4776-bf2d-fbb6b4ab07ee.png)

A seção de resultados também foi posicionada com o grid layout, e nessa seção foi usado o `grid-template-areas` para delimitar qual área cada elemento iria ocupar.

![grid 2](https://user-images.githubusercontent.com/78181968/154754091-2a442de2-876e-41b5-ae2c-e35242a822e2.png)

![trecho de código 4](https://user-images.githubusercontent.com/78181968/154754100-b7f52e80-a94f-441c-9d68-faab8861d0a1.png)

Para aplicar a regra do grid aos elementos englobados dentro desta grade, o seguinte código deve ser escrito (no caso deste código):

![trecho de código 5](https://user-images.githubusercontent.com/78181968/154754114-4d942470-0041-4346-bdd6-8ddee4e38806.png)

Esse código faz com que os elementos respeitem a delimitação imposta pelo grid e não quebrem automaticamente à medida que o espaço diminui. Caso em seu código você queira que os elementos se adequem ao tamanho da tela, também é possível que isso seja feito, porém em meu código optei em fazer dessa forma. 

## Créditos 

Essa aplicação foi um desafio do site Frontend Mentor, e o intuito desse site é incentivar a prática de conhecimentos em aplicações Front-end. Vários níveis de desafios estão disponíveis para serem realizados nesse site, só estão esperando por você!

Vale ressaltar que em cada desafio só são disponibilizados alguns recursos que serão necessários durante o desenvolvimento, por exemplo, imagens, códigos hexadecimais de cores, etc, a construção do código é toda por sua conta, deixando ainda mais desafiador.   

