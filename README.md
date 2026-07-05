# 📝 Bloco de Notas

Aplicativo de bloco de notas desenvolvido em **React Native** com **Expo**, utilizando **AsyncStorage** para persistência local dos dados e **React Navigation** para navegação entre telas.

O projeto foi desenvolvido como atividade prática da disciplina, tendo como base o CRUD criado em sala de aula.

## Funcionalidades

- ✅ Cadastro de notas
- ✅ Listagem de notas
- ✅ Edição de notas
- ✅ Exclusão de notas
- ✅ Confirmação antes da exclusão
- ✅ Persistência dos dados com AsyncStorage
- ✅ Navegação entre as telas utilizando Bottom Tab Navigator

## Estrutura das notas

Cada nota possui os seguintes campos:

```javascript
{
  id,
  titulo,
  conteudo
}
```

## Tecnologias utilizadas

- React Native
- Expo
- React Navigation
- AsyncStorage
- JavaScript

## Estrutura do projeto

```
App.js
AppTab.js
AppList.js
AppItem.js
AppForm.js
DataBase.js
```

## Como executar

1. Clone o repositório:

```bash
git clone <url-do-repositorio>
```

2. Instale as dependências:

```bash
npm install
```

3. Execute o projeto:

```bash
npx expo start
```

4. Abra o aplicativo utilizando o Expo Go ou um emulador Android/iOS.

## Funcionalidades implementadas

- Tela de listagem de notas
- Tela de cadastro e edição
- Navegação entre telas
- Listagem das notas pelo título
- Exclusão com confirmação
- Edição de notas com preenchimento automático do formulário
- Armazenamento local utilizando AsyncStorage

## Autor

Rafael Tavares