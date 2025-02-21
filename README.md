# 📌 **Validação de Período em JavaScript**  

Este repositório contém uma função para validar intervalos de datas, garantindo que a data final não seja menor que a data inicial.  

## 📜 **Descrição**  

A função `validarPeriodo` verifica se um período de tempo é válido, alertando o usuário caso a data final seja menor que a inicial. Se a validação falhar, os valores são resetados para `null` e o envio do formulário é cancelado.  

## 🚀 **Função Implementada**  

🔹 **`validarPeriodo(dataInicio, dataFim, paginaAtual, paginaValida)`**  
- **Valida se a data final não é menor que a inicial**  
- **Garante que a verificação ocorra apenas em uma página específica**  
- **Retorna os valores corrigidos e um indicador se a submissão deve ser cancelada**  

## ⚙️ **Uso**  

A função pode ser chamada passando os valores das datas e a página onde a validação deve ocorrer:  

```javascript
let resultado = validarPeriodo("2025-02-01", "2025-01-30", 2, 2);

console.log(resultado);
// Saída: { dataInicio: null, dataFim: null, cancelar: true }
```

### **Aplicação Prática**  

A validação pode ser utilizada diretamente no fluxo de submissão de formulários:  

```javascript
let resultado = validarPeriodo(
    data.dteDATA_PLANEJAMENTO_FERIAS, 
    data.dteDATA_NOVA_SAIDA_FERIAS, 
    currentPage, 
    2
);

// Atualiza os valores conforme o resultado
cancelSubmit = resultado.cancelar;
data.dteDATA_PLANEJAMENTO_FERIAS = resultado.dataInicio;
data.dteDATA_NOVA_SAIDA_FERIAS = resultado.dataFim;
```

## 📌 **Detalhes Técnicos**  

- Converte as datas para o formato `Date` para garantir comparações corretas  
- Retorna um objeto com os valores corrigidos e um indicador se a submissão deve ser cancelada  
- Usa um `alert` para notificar o usuário caso a data final seja inválida  
