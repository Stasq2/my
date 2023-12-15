function see(){
    var k=0
    for (var i=0;i<30;i++)
    {
    if(document.test.elements[i].checked)
    {
    k=k+Number(document.test.elements[i].value)
    }
    }
    if(k<=2)document.test.rez.value="Вам потрібно ще повчити поліграфію, але ви молодець."
    if(k>2&&k<=5)document.test.rez.value="Ви молодець, але потрібно краще. "
    if(k>6)document.test.rez.value="Ви успішно здали тест на Полгірафію! МОЛОДЕЦЬ! "
    }
