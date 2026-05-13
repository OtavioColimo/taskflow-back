# TaskFlow Back

REST API para gerenciamento de tarefas, desenvolvida com Node.js e Express.

## Stack

- **Runtime:** Node.js ≥ 18
- **Framework:** Express
- **ID gerado:** UUID v4
- **Deploy:** Render
- **CI/CD:** GitHub Actions (trigger via SemVer tags)

---

## Instalação

```bash
# 1. Clone o repositório
git clone https://github.com/OtavioColimo/taskflow-back.git
cd taskflow-back

# 2. Instale as dependências
npm install

# 3. Configure as variáveis de ambiente
cp .env.example .env
# Edite o .env se necessário

# 4. Inicie em modo desenvolvimento
npm run dev
```

---

## Variáveis de Ambiente

| Variável | Descrição            | Padrão |
|----------|----------------------|--------|
| `PORT`   | Porta do servidor    | `3000` |

---

## Endpoints

### Health

| Método | Rota      | Descrição             |
|--------|-----------|-----------------------|
| GET    | `/health` | Status da API         |

**Resposta:**
```json
{
  "success": true,
  "status": "ok",
  "timestamp": "2025-01-01T00:00:00.000Z",
  "uptime": 42
}
```

---

### Tarefas

| Método | Rota                     | Descrição                    |
|--------|--------------------------|------------------------------|
| GET    | `/tasks`                 | Listar todas as tarefas      |
| POST   | `/tasks`                 | Criar nova tarefa            |
| PUT    | `/tasks/:id`             | Atualizar tarefa             |
| DELETE | `/tasks/:id`             | Excluir tarefa               |
| PATCH  | `/tasks/:id/complete`    | Marcar tarefa como concluída |

#### POST `/tasks` — Corpo da requisição
```json
{
  "title": "Estudar Node.js",
  "description": "Revisar Express e middlewares"
}
```

#### Modelo de tarefa
```json
{
  "id": "uuid-v4",
  "title": "Estudar Node.js",
  "description": "Revisar Express e middlewares",
  "completed": false,
  "createdAt": "2025-01-01T00:00:00.000Z",
  "updatedAt": "2025-01-01T00:00:00.000Z"
}
```

---

## Deployment

### Render

**URL do Deploy:** https://taskflow-back-pc5v.onrender.com

1. **Conecte seu repositório GitHub ao Render**
   - Acesse [Render Dashboard](https://dashboard.render.com)
   - Clique em "New" → "Web Service"
   - Selecione este repositório

2. **Configure o serviço**
   - Nome: `taskflow-back`
   - Ambiente: `Node`
   - Build Command: `npm install`
   - Start Command: `npm start`

3. **Variáveis de Ambiente**
   - `NODE_ENV`: `production`

4. **Deploy via GitHub Actions**
   - O deploy ocorre **exclusivamente** ao fazer push de tags SemVer
   - O workflow `release.yml` é acionado automaticamente

---

## Estrutura do Projeto

```
taskflow-back/
├── .github/
│   └── workflows/
│       └── release.yml       # CI/CD — deploy no Render via tag
├── src/
│   ├── config/
│   │   └── env.js            # Variáveis de ambiente
│   ├── controllers/
│   │   ├── task.controller.js
│   │   └── health.controller.js
│   ├── routes/
│   │   ├── task.routes.js
│   │   └── health.routes.js
│   ├── services/
│   │   └── task.service.js   # Regras de negócio
│   ├── models/
│   │   └── task.model.js     # Factory de tarefa
│   ├── middlewares/
│   │   ├── notFound.middleware.js
│   │   └── errorHandler.middleware.js
│   ├── data/
│   │   └── tasks.store.js    # Store em memória
│   ├── utils/
│   │   └── response.js       # Helpers de resposta
│   ├── app.js                # Configuração do Express
│   └── server.js             # Entry point
├── media/                    # Assets estáticos (se necessário)
├── .env.example
├── .gitignore
└── package.json
```

---

## CI/CD — GitHub Actions + Render

O workflow `release.yml` é acionado ao criar uma tag SemVer:

```bash
git tag v1.0.0
git push origin v1.0.0
```

### Secrets necessários no repositório GitHub

| Secret           | Descrição                           |
|------------------|-------------------------------------|
| `RENDER_API_KEY` | API Key do Render                   |
| `SERVICE_ID`     | ID do serviço no Render             |

---

## Commits Semânticos

```
feat: nova funcionalidade
fix: correção de bug
ci: mudanças no pipeline
docs: atualização de documentação
```
