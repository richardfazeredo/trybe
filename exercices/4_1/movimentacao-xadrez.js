let peca;

switch (peca.toLowerCase()) {
  case 'peon': 
    return 'Move-se uma casa na vertical, porém em seu primeiro lance, ele tem a opção de se mover duas casas na vertical.'
    
  case 'rook':
    return 'Move-se por casas ilimitadas, na horizontal ou na vertical.'
  
  case 'horse': 
    return 'Move-se em L.';
  
  case 'bishop':
    return 'Move-se por casas ilimitadas, ao longo de suas diagonais';

  case 'queen':
    return 'Move-se em qualquer sentido e por casas ilimitadas, ao longo de suas horizontais, diagonais e verticais.';

  case 'king':
    return 'Move-se em qualquer sentido, porém apenas em casas adjacentes a sua, podendo ser no sentido horizontal, diagonal e vertical.';

  default:
    return 'Erro: A peça informada é invalida!';
}