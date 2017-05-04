InputMoney = {
    applyMask: function(event, input) {
        //se for movimentação do teclado
        if ((event.keyCode >= 37 && event.keyCode <= 40) || event.keyCode == 36)
            return;

        var numbers = input.value.replace(/[^0-9]/g, '');

        input.value = InputMoney.mask(numbers, event.keyCode);
    },
    
    mask: function(numbers, keyCode) {
		if (numbers === '')
			return '';
		
		//tirar zeros à esquerda e transformar em uma string
		numbers = parseInt(numbers);
		
		inverseNumber = (numbers + '').split('').reverse().join('');
		
		var ret = '';
			
		if (numbers === 0) {
			//se tentou apagar quando o valor era zero
			if (keyCode === 8 || keyCode === 46)
				return '';
			
			return '0,00'
		} else if (numbers > 0 && inverseNumber.length === 1)
			return '0,0' + numbers;
		else if (numbers > 0 && inverseNumber.length === 2)
			return '0,' + numbers;
		else if (inverseNumber.length === 3 ||
				 inverseNumber.length === 4 ||
				 inverseNumber.length === 5)
			ret = inverseNumber.replace(/([0-9]{2})([0-9]{1,3})/, '$1,$2');
		else if (inverseNumber.length === 6 ||
				 inverseNumber.length === 7 ||
				 inverseNumber.length === 8)
			ret = inverseNumber.replace(/([0-9]{2})([0-9]{3})([0-9]{1,3})/, '$1,$2.$3');
		else if (inverseNumber.length === 9 ||
				 inverseNumber.length === 10 ||
				 inverseNumber.length === 11)
			ret = inverseNumber.replace(/([0-9]{2})([0-9]{3})([0-9]{3})([0-9]{1,3})/, '$1,$2.$3.$4');
		else if (inverseNumber.length === 12 ||
				 inverseNumber.length === 13 ||
				 inverseNumber.length === 14)
			ret = inverseNumber.replace(/([0-9]{2})([0-9]{3})([0-9]{3})([0-9]{1,3})([0-9]{1,3})/, '$1,$2.$3.$4.$5');
		
		return ret.split('').reverse().join('');
	}
};
		
jQuery('.input-money').keyup(function(ct, event) {
    InputMoney.applyMask(ct, this);
});