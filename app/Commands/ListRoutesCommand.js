import Table from 'cli-table3';
import express from 'express';
import routes from "../../routes/routes.js";

export default {
    name: 'listar-rotas',
    description: 'Lista todas as rotas do Express com middlewares',

    async handle() {
        console.log('\n🔍 Obtendo rotas do Express com middlewares...\n');

        const table = new Table({
            head: ['Método', 'Path'],
            colWidths: [10, 45]
        });

        const routeList = [];

        function extractRoutes(stack, prefix = '') {
            stack.forEach((layer) => {
                if (layer.route) {
                    const { path, methods } = layer.route;
                    const methodList = Object.keys(methods).map((m) => m.toUpperCase());

                    methodList.forEach((method) => {
                        routeList.push({
                            method,
                            path: prefix + path,
                        });
                    });
                }

                // Rota montada via router.use()
                else if (layer.name === 'router' && layer.handle?.stack) {
                    // tenta extrair o prefixo
                    const nestedPrefix = getPathFromRegex(layer.regexp);
                    extractRoutes(layer.handle.stack, prefix + nestedPrefix);
                }
            });
        }

        function getPathFromRegex(regexp) {
            const match = regexp
                .toString()
                .replace('/^', '')
                .replace('\\/?(?=\\/|$)/i', '')
                .replace(/\\\//g, '/')
                .replace(/\\\./g, '.')
                .replace(/\$$/, '')
                .replace(/\//g, '/');

            return match === '^' ? '' : match;
        }

        const app = express();

        app.use("/", routes);

        console.log(app);

        extractRoutes(app._router.stack);
        if (routeList.length === 0) {
            console.log('⚠️ Nenhuma rota registrada.');
        } else {
            routeList.forEach((route) =>
                table.push([route.method, route.path])
            );
            console.log(table.toString());
        }
    }
};
