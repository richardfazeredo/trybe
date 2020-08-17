#!/bin/bash

#Exercício 1
echo "Shell Script é demais!"

#Exercício 2
BAJULACAO="Shell Script com variáveis é demais!"
echo $BAJULACAO

#Exercício 3
HOSTNAME=`hostname`
echo "Este script está rodando no computador $HOSTNAME"

#Exercício 4

if [ -e $1 ]
  then
  echo "O caminho está habilitado!"
  if [ -w $1 ]
  then
    echo "Você tem permissão para editar $1"
  else 
    echo "Você NÃO foi autorizado a editar $1"
  fi
fi

#Exercício 5

read -p "Informe o caminho até o arquivo: " ARQUIVO
echo ""

if [ -f $ARQUIVO ]
  then
  echo "Este é um arquivo comum."

elif [ -d $ARQUIVO ]
  then
  echo "Este é um diretório."

else
  echo "Este é um outro tipo de arquivo."
  fi

ls -l $ARQUIVO

#Exercício 6


if [ -f $1 ]
  then
  echo "Este é um arquivo comum."

elif [ -d $1 ]
  then
  echo "Este é um diretório."

else
  echo "Este é um outro tipo de arquivo."
  fi

ls -l $1

#Exercício 7

if [ -d $1 ] 
  then
  CONTAGEM=`ls $1 | wc -l`
 
  echo "O $1 tem $CONTAGEM arquivos." 

else
  echo "O argumento $1 não é um diretório!"
  fi