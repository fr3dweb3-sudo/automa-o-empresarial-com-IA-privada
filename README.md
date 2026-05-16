# FL TECNOLOGIA — Preview local

Este repositório inclui uma landing page premium para a FL TECNOLOGIA e um preview local sem dependência de internet.

## Como abrir no navegador

> Importante: `localhost` sempre aponta para a máquina onde o navegador está rodando. Se os comandos forem executados em um container remoto, Codespace, VM ou ambiente do ChatGPT/Codex, o `http://localhost:3000` do seu computador não acessa automaticamente esse container. Nesse caso, use a URL de porta encaminhada/forwarded port da sua IDE ou plataforma.

### Rodando na sua própria máquina

```bash
npm install
npm run dev
```

Depois abra:

```text
http://localhost:3000
```

### Usando outra porta

```bash
PORT=4173 npm run dev
```

Depois abra:

```text
http://localhost:4173
```

### Teste rápido pelo terminal

Com o servidor rodando, valide:

```bash
curl http://localhost:3000/health
```

Resposta esperada:

```json
{"ok":true,"app":"FL TECNOLOGIA local preview"}
```

## Se aparecer `ERR_CONNECTION_REFUSED`

1. Confirme que o terminal continua aberto com `npm run dev` em execução.
2. Verifique se a porta impressa no terminal é a mesma aberta no navegador.
3. Se estiver em ambiente remoto/container, abra a porta encaminhada pela IDE/plataforma, não o `localhost` do seu computador.
4. Se a porta já estiver ocupada, rode com outra porta: `PORT=4173 npm run dev`.
