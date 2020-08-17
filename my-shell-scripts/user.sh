#!/bin/bash

read -p "Digite o seu nome: " NOME
echo "O seu nome é" $NOME 

echo ""

read -p "Digite o seu idade: " IDADE
echo "A sua idade é de" $IDADE" anos"

echo ""

USUARIO=`whoami`
echo "Seu usuário:" $USUARIO

echo ""

CURRENT_DIRECTORY=`pwd`
echo "Seu diretório corrente:" $CURRENT_DIRECTORY