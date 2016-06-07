function factorialize(num) {
	var max = num;
	num = 1;
	for (var i = 2; i <= max; i++) {
		num = num * i;
	}
	return num;
}

factorialize(5);
