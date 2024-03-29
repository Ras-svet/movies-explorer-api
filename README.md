# **Дипломный проект Movies Explorer**

![Express](https://img.shields.io/badge/-Express-000000?logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/-MongoDB-56a14b?logo=mongodb&logoColor=white)
![Node](https://img.shields.io/badge/-Node.js-469837?logo=Node.js&logoColor=white)
![JavaScript](https://img.shields.io/badge/-JavaScript-f3de35?logo=javaScript&logoColor=black)
___

## Описание
Бэкенд для приложения Movie Explorer на Express.js. Схемы и модели созданы через Mongoose. Все роуты, кроме `/signup` и `/signin`, защищены. Используется валидация Joi и celebrate. При регистрации пользователя пароль хешируется модулем bcrypt. Реализована централизованная обработка ошибок. Настроено логирование запросов и ошибок.

IP-адрес 158.160.137.168
Backend https://api.rasmovie.nomoredomainsmonster.ru/

## Роуты
Для пользователей:</br>
<table>
<tr>
<td align="center"><strong>Запрос</strong></th>
<td align="center"><strong>Роут</strong></th>
<td align="center"> <strong>Описание</strong></th>
</tr>

<tr>
<td align="center">POST</td>
<td align="center">/signup</td>
<td>Создаёт пользователя с переданными в теле email, password и name</td>
</tr>

<tr>
<td align="center">POST</td>
<td align="center">/signin</td>
<td>Проверяет входные данные (email и password) и возвращает JWT</td>
</tr>

<tr>
<td align="center">GET</td>
<td align="center">/users/me</td>
<td>Возвращает информацию о пользователе</td>
</tr>

<tr>
<td align="center">PATCH</td>
<td align="center">/users/me</td>
<td>Обновляет информацию о пользователе (email и name)</td>
</tr>
</table>


Для фильмов:</br>
<table>
<tr>
<td align="center"><strong>Запрос</strong></th>
<td align="center"><strong>Роут</strong></th>
<td align="center"> <strong>Описание</strong></th>
</tr>

<tr>
<td align="center">GET</td>
<td align="center">/movies</td>
<td>Возвращает список всех фильмов</td>
</tr>

<tr>
<td align="center">POST</td>
<td align="center">/movies</td>
<td>Создаёт фильм с переданными в теле country, director, duration, year, description, image, trailerLink, thumbnail, movieId, nameRU, nameEN</td>
</tr>

<tr>
<td align="center">DELETE</td>
<td align="center">/movies/:movieId</td>
<td>Удаляет фильм по movieId</td>
</tr>

</table>

## Стек

- Node.js
- Express.js
- MongoDB
- JavaScript
- API

## Установка

Для запуска на локальной машине необходимо:

1. Установить npm зависимости:</br>

```sh
npm install
```

2. Запустить в режиме разработки:</br>

```sh
npm run start — запускает сервер
npm run dev — запускает сервер с hot-reload
```

Проект будет запущен на `http://localhost:3000`