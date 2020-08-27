let porcentagem = 100;

if(porcentagem < 0 || porcentagem > 100){
  return 'Erro: A nota informada é inválida!';
  }else if(porcentagem >= 90 && porcentagem <= 100){
    return 'Conceito A';
    }else if(porcentagem >= 80){
      return 'Conceito B';
      }else if(porcentagem >= 70){
        return 'Conceito C';
        }else if(porcentagem >= 60){
          return 'Conceito D';
          }else if(porcentagem >= 50){
            return 'Conceito E';
            }else{
              return 'Conceito F';
              }