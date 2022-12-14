//Для именования переменных JavaScript существует набор правил:
//
//Имена переменных чувствительны к регистру (y и Y это две разных переменных)
//Имена переменных должны начинаться с буквы, символа "$" или символа "_"
//Имя переменной может состоять из любых цифр и букв латинского алфавита, а также символов "$" и "_"
//В качестве имени переменной нельзя использовать зарезервированные и ключевые слова

//Объявление переменной делается с помощью ключевых слов var или let. Объявление следующим образом:

//var x = 1;
//let studentName = "Vasiliy";

//Инициализация уже объявленной переменной делается без директивы var :
//
//x = 1;
//studentName = "Vasiliy";

//Отличия между let и var
//var видима внутри всей функции, в которой произошло объявление
//в качестве счетчика цикла объявленная через слово var переменная живет в течение всего выполнения цикла и доступна
//даже после его завершения.
//
//let, видна только внутри блока { ... }, в котором она объявлена
//объявление через let, каждой итерации цикла будет соответствовать своя независимая переменная

//Переменные в JavaScript могут быть Локальными и Глобальными .

//Локальные переменные - это переменные, объявленные внутри функции JavaScript. Они  доступны только в пределах той
//функции, внутри которой они объявлены. При выходе из этой функции переменные уничтожаются.

//Глобальные переменные объявляются вне функций и к ним могут обращаться все функции и скрипты на странице. Уничтожаются
//такие переменные при закрытии страницы.
//
//Если переменную объявить без использования ключевого слова "var", то она автоматически объявляется глобальной,
//даже если объявление произведено внутри функции.
//
//Например выражения x = 5; или surName = "Ivanov"; объявят переменные x и surName как глобальные, если их еще не существует.
//Типы данных в JavaScript могут быть следующих видов:
//
// - Числа (number)
//
// - Строки (string)
//
// - Логические (boolean)
//
// - Неопределенные (undefined) Тип данных undefined переменная имеет в тот момент, когда она объявлена,
//но еще не инициализирована, то есть ее создали, а значение еще не присвоили.
//
// - Объект (object)
//
// - Пустой (null)

//Определение типа переменной
//
//var myName = "Ivan";
//alert (typeof myName);

//Переменные в JavaScript, так же как и в алгебре, используются для хранения значений или выражений.
//
//Переменная может иметь имя, например "x" или более информативное имя, например "myPetName".
//
//Для именования переменных JavaScript существует набор правил:
//
//Имена переменных чувствительны к регистру (y и Y это две разных переменных)
//Имена переменных должны начинаться с буквы, символа "$" или символа "_"
//Имя переменной может состоять из любых цифр и букв латинского алфавита, а также символов "$" и "_"
//В качестве имени переменной нельзя использовать зарезервированные и ключевые слова