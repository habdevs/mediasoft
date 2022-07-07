const path = require("path");

module.exports = {
    // выбираем мод для сборки
    mode: 'development',
    // указываем файл откуда будем брать исходный код для вебпака
    entry: './src/index.js',
    output: {
        // после сборки мы указываем какой файл сделаем
        filename: 'main.js',
        // после сборки мы указываем директорию в которую будем собирать код
        path: path.resolve(__dirname, "dist"),
    },
    // конфиг для дев сервера на котором можно посмотреть изменения 
    devServer: {
        // в поле статик указывается директория откуда он будет брать все исходные файлы для проекта
        static: {
            directory: path.join(__dirname, "dist"),
        },
        compress: true,
        port: 9000,
    },
};