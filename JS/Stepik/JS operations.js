//Операции в JavaScript условно можно разделить на несколько видов:
//
//Арифметические операторы
//Операторы присваивания
//Операторы сравнения
//Логические операторы
//y = 5
//Сложение  "+"
//выражение x = y + 2 даст результат x = 7; y = 5;
//
//Вычитание "-"
//выражение x = y - 2 даст результат x = 3; y = 5;
//
//Умножение "*"
//выражение x = y * 2 даст результат x = 10; y = 5;
//
//Деление "/"
//выражение x = y / 2 даст результат x = 2.5; y = 5;
//
//
//
//Возведение в степень "**"
//выражение x = y ** 2 даст результат x = 25; y = 5;

//Остаток от деления (он же - деление по модулю) "%"
//выражение x = y % 2 даст результат x = 1; y = 5;

//Инкремент "++"
//Эта операция производит увеличение аргумента на единицу, т.е. выражение x++ будет эквивалентно выражению x = x + 1.
//Порядок применения инкремента в javascript имеет значение, например:
//
//выражение x = ++y даст результат x = 6, y = 6, так как вначале увеличивается значение переменной y на единицу и затем
// переменной x присваивается значение переменной y;
//а выражение x = y++ даст результат x = 5, y = 6, поскольку в данном случае операция инкрементирования (увеличения)
//происходит ПОСЛЕ того как переменной х присвоили значение из переменной у.
//Декремент "--"
//А эта операция производит уменьшение значения переменной на единицу, т.е. х-- эквивалентно x = х - 1. Порядок применения
// декремента в javascript также имеет значение, например:
//
//выражение x = --y даст результат x = 4, y = 4 - тут мы вначале уменьшаем на единицу переменную y, а затем присваиваем
//переменной x значение переменной y;
//а выражение x = y-- даст результат x = 5, y = 4 -  так как операция декремент была выполнена ПОСЛЕ того как переменной х
//присвоили значение из переменной у.