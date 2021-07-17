# Xsolla-backend-summer-school-2021

- Отборочное задание в школу по backend разработке xsolla 2021: 
  - [Постановка задачи](https://github.com/xsolla/xsolla-school-backend-2021/blob/main/README.md)
  - [Технологии](#технологии)
  - [Описание интерфейса](#описание-интерфейса)
  - [Последовательность действий для запуска и тестирования API](#последовательность-действий-для-запуска-и-тестирования-api)


## Технологии
  *Здесь надо написать про технологии*

## Описание интерфейса

### Получение информации о товаре/товарах
- GET market/all 
  - Метод возвращает список всех добавленных товаров
- GET market/:id 
  - Метод возвращает все данные о товаре по его индентификатору
- GET market/sku/:id 
  - Метод возвращает все данные о товаре по его SKU

### Создание товара
- POST /market 
  - Метод генерирует и возвращает уникальный идентификатор товара

### Редактирование товара
- PUT /market/:id 
  - Метод изменяет все данные о товаре по его идентификатору
- PUT /market/sku/:id 
  - Метод изменяет все данные о товаре по его SKU

### Удаление товара
- DELETE market/:id 
  - Метод удаляет все данные о товаре по его идентификатору
- DELETE /market/sku/:id 
  - Метод удаляет все данные о товаре по его SKU


## Последовательность действия для запуска и тестирования API
