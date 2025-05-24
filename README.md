# Cálculo Algébrico do Tempo
A distância y da lava em função do tempo t é dada pela equação:
```
y(t)=7(2−0.9t )
```

Queremos encontrar o tempo t quando a lava atinge a aldeia, ou seja, quando y=10.
```
10 = 7(2−0.9t)
```

## portugol
```
algoritmo CalcularTempoAvancoLavaEuler
declare
    tempoAtual: real
    posicaoAtualLava: real
    posicaoAlvoLava: real
    passoTempo_h: real
    logaritmoNatural_C: real
    fatorA_negativo: real 
    baseC_exponencial: real
    taxaVariacaoLava_dydt: real

inicio
    tempoAtual := 0.0
    posicaoAtualLava := 7.0 
    posicaoAlvoLava := 10.0
    passoTempo_h := 0.0001
    fatorA_negativo := -7.0
    baseC_exponencial := 0.9
    logaritmoNatural_C := logN(baseC_exponencial)
    enquanto posicaoAtualLava < posicaoAlvoLava faca
        taxaVariacaoLava_dydt := fatorA_negativo * potencia(baseC_exponencial, tempoAtual) * logaritmoNatural_C
        posicaoAtualLava := posicaoAtualLava + passoTempo_h * taxaVariacaoLava_dydt
        tempoAtual := tempoAtual + passoTempo_h
    fimenquanto
    escreva "Tempo calculado para atingir o alvo: ", tempoAtual, " horas"

fim
```