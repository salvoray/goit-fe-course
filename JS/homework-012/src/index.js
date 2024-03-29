import './styles.css';
import './JS/getGeoPosition';

// Создай небольшое приложение поиска погоды по геопозиции или имени города используя DarkSky API.
// Зарегистрируйся на бесплатный план и получи ключ для аутентификации.

// При посещении страницы, используя возможности Geolocation API,
// приложение пытается получить разрешение пользователя на доступ к его геопозиции.

// Если пользователь разрешил использовать геопозицию, идет HTTP-запрос за погодой по его широте и долготе,
// при этом кеширование геопозиции ставим равным 60-ти минутам (опция maximumAge). Результат отображается в полях секции погоды.
// Если пользователь не дал разрешения на использование геопозиции,
// вывести оповещение 'Нет прав доступа к геопозиции, используйте поиск по имени города.'.
// После получения погоды любым из двух способов, пользователь может продолжить искать погоду для других городов через форму поиска.
// Для оповещений используй плагин pnotify.

// HTML-разметка состоит из формы поиска, секции погоды и ссылки на погодный API.
// Так же можно добавить спиннер и показывать его во время HTTP-запроса.

// https://api.darksky.net/forecast/16539c0b4fb8f6f9f6036ae44f8b93c7/37.8267,-122.4233

console.log(window.navigator);
