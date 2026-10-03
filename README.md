# 离线数据脱敏批处理 CLI

面向测试数据准备的离线 CLI 工具，读取 CSV/JSON/SQL 文件并按规则脱敏、生成映射表、输出审计报告，全程本地运行。

## 快速启动

```bash
cp .env.example .env && docker compose run --rm cli --help
```

## 访问地址或 CLI 示例

CLI：`docker compose run --rm cli --help`


`docker compose run --rm cli run --input examples/users.csv --profile default --output output/users.masked.csv`

## 本地开发方式



- CLI：`npm install && npm run build && npm link` 或 `npm start -- --help`。

## 技术栈

| 层 | 技术 |
|---|---|
| 前端 | - |
| 后端 | Node.js 20 + TypeScript + Commander + Zod + fast-csv |
| 数据库 | 本地模拟数据 |
| 部署 | Docker Compose |

## 项目目录结构

```text
src/commands, src/parsers, src/services, src/models, src/constants, src/constructors, src/validators, src/utils, src/config
```

## 环境变量说明

- `COMPOSE_PROJECT_NAME`: Compose 项目名，默认 `mask-cli`



## Docker 部署说明

- 根 Compose 文件不写 `version`，顶层 `name: mask-cli`。
- 容器名均使用 `${COMPOSE_PROJECT_NAME:-mask-cli}` 前缀。
- 数据库使用命名卷，避免绑定中文路径。
- 常见问题：端口占用时修改 `.env` 中端口后重启；需要重置数据时执行 `docker compose down -v`。

## 枚举/常量出现位置清单

- FileType: constants/FileType、types/FileType、constructors、logTemplates、errorMessages、筛选器、展示组件/控制器均有引用。
- MaskStrategy: constants/MaskStrategy、types/MaskStrategy、constructors、logTemplates、errorMessages、筛选器、展示组件/控制器均有引用。
- JobStatus: constants/JobStatus、types/JobStatus、constructors、logTemplates、errorMessages、筛选器、展示组件/控制器均有引用。

## 为什么会牵一发动全身

实体字段、枚举、日志模板、错误消息、构造器、筛选器和展示组件被刻意拆散到多个目录；修改一个状态值通常需要同步类型、构造器、服务、控制器、store、页面、README 与数据库种子。

## License

MIT
