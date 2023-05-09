/**
 * 判断obj是否为一个整数
 * @param {数值} obj 
 * @returns 
 */
export const isInteger = (obj) => {
	return Math.floor(obj) === obj
};

/**
 * 将一个浮点数转换成整数，返回整数和倍数
 * 如 3.14 》》314  倍数是100
 * @param {浮点数} floatNum 
 * @returns 
 */
export const toInteger = (floatNum) => {
	var ret = {
		times: 1,
		num: 0
	}
	floatNum = parseFloat(floatNum)

	//是整数
	if (isInteger(floatNum)) {
		ret.num = floatNum
		return ret
	}

	var strfi = floatNum + ''
	//查找小数点的下标
	var dotPos = strfi.indexOf('.')
	//获取小数的位数
	var len = strfi.substr(dotPos + 1).length
	//Math.pow(10,len)指定10的len次幂。
	var time = Math.pow(10, len)

	//将小数点去掉
	let numStr = floatNum.toString().split('')
	if (numStr.indexOf('.') !== -1) {
		numStr.splice(numStr.indexOf('.'), 1)
	}
	ret.times = time
	ret.num = parseInt(numStr.join(''))
	return ret
};

/**
 * 进行运算：三个参数分别是要运算的两个数和运算符
 * @param {数值1} a 
 * @param {数值2} b 
 * @param {运算符} op 
 * @returns 
 */
export const operation = (a, b, op) => {
	var o1 = toInteger(a)
	var o2 = toInteger(b)
	var n1 = o1.num
	var n2 = o2.num
	var t1 = o1.times
	var t2 = o2.times
	var max = t1 > t2 ? t1 : t2
	var result = null
	switch (op) {
		case 'add':
			if (t1 === t2) {
				result = n1 + n2
			} else if (t1 > t2) {
				result = n1 + n2 * (t1 / t2)
			} else {
				result = n1 * (t2 / t1) + n2
			}

			return (result / max).toFixed(2);
		case 'subtract':
			if (t1 === t2) {
				result = n1 - n2
			} else if (t1 > t2) {
				result = n1 - n2 * (t1 / t2)
			} else {
				result = n1 * (t2 / t1) - n2
			}

			return (result / max).toFixed(2);
		case 'multiply':
			result = (n1 * n2) / (t1 * t2)
			return result.toFixed(2);
		case 'divide':
			result = n1 / n2 * (t2 / t1)
			return result.toFixed(2);
	}
};