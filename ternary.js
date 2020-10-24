'use strict'

const N = 'N' //FALSE
const O = 'O' //UNDEFINED
const P = 'P' //TRUE
const TRILLEAN =
{
  '-1': false,
  0: undefined,
  1: true
}
const strToTrillean =
{
  N: false,
  O: undefined,
  P: true
}

class Trit
 {
	constructor(input)
	 {
	 	if (input === false)
	 	{
		  this.value = N
		  this.decimal = -1
  	} else if (input ===  true)
  	{
  		this.value = P
  		this.decimal = 1
  	} else
  	{
  		this.value = O
  		this.decimal = 0
  	}
 }
}

class int9
{
	constructor(dec)
	{
		this.trit = []
		for (let i = 0; i < 9; i++)
		{
			this.trit[i] = new Trit(null)
		}
    this.setValue(dec)
	}
  setMax()
  {
		for (let i = 0; i < 9; i++)
		{
			this.trit[i] = new Trit(true)
		}
  }
  setMin()
  {
		for (let i = 0; i < 9; i++)
		{
			this.trit[i] = new Trit(false)
		}
  }
	getTernary()
	{
		let ternary = ''
		for(let i = 0; i < 9; i++)
		{
			ternary = ternary +  this.trit[i].value;
		}
    ternary = ternary[0] + ternary[1] + ternary[2] + ' ' + ternary[3] + ternary[4] + ternary[5] + ' ' + ternary[6] + ternary[7] +  ternary[8]
		return ternary

	}
	getDecimal()
	{
		let sum = 0
		let discharge = 8
		for(let i = 0; i < 9; i++)
		{
			sum = sum + this.trit[i].decimal * (Math.pow(3, discharge--))
		}
		return sum
	}
	setValue(dec)
	{
    dec = Math.round(dec)
    let neg = dec < 0
    let n = Math.abs(dec)
	let i = 8
	for(let i = 0; i < 9; i++)
	{
		this.trit[i] = new Trit(null)
	}
    do {
      let digit = n % 3
      if (digit === 2) {
        digit = -1
        ++n
      }

      if (neg) {
        digit = -digit
      }

      this.trit[i--] = new Trit(TRILLEAN[digit])
      n = ~~(n / 3)
    } while(n)
	 }
   setRand()
   {
    this.setValue(Math.floor(Math.random() * 9841))
  }
  shiftRight(carry)
  {
	//console.log(this.getDecimal())
	this.setValue((Math.floor(this.getDecimal() / 3) + (carry * Math.pow(3, 8))))
  }
  shiftLeft(carry)
  {
	//console.log(this.getDecimal())
	this.setValue((this.getDecimal() * 3 + carry))
  }
}

class int27
{
	constructor(dec)
	{
		this.trit = []
		for (let i = 0; i < 27; i++)
		{
			this.trit[i] = new Trit(null)
		}
    this.setValue(dec)
	}
  setMax()
  {
		for (let i = 0; i < 27; i++)
		{
			this.trit[i] = new Trit(true)
		}
  }
  setMin()
  {
		for (let i = 0; i < 27; i++)
		{
			this.trit[i] = new Trit(false)
		}
  }
	getTernary()
	{
		let ternary = ''
		for(let i = 0; i < 27; i++)
		{
			ternary = ternary +  this.trit[i].value;
		}
		return ternary
	}
	getDecimal()
	{
		let sum = 0
		let discharge = 26
		for(let i = 0; i < 27; i++)
		{
			sum = sum + this.trit[i].decimal * (Math.pow(3, discharge--))
		}
		return sum
	}
	setValue(dec)
	{
    dec = Math.round(dec)
    let neg = dec < 0
    let n = Math.abs(dec)
	let i = 26
	for(let i = 0; i < 27; i++)
	{
		this.trit[i] = new Trit(null)
	}
    do {
      let digit = n % 3
      if (digit === 2) {
        digit = -1
        ++n
      }

      if (neg) {
        digit = -digit
      }

      this.trit[i--] = new Trit(TRILLEAN[digit])
      n = ~~(n / 3)
    } while(n)
	 }
   setRand()
   {
    this.setValue(Math.floor(Math.random() * 3812798742493))
  }
  shiftRight(carry)
  {
	//console.log(this.getDecimal())
	this.setValue(Math.round(this.getDecimal() / 3) + (carry * Math.pow(3, 26)))
  }
  shiftLeft(carry)
  {
	//console.log(this.getDecimal())
	this.setValue(this.getDecimal() * 3 + carry)
  }
}

class int81
{
	constructor(dec)
	{
		this.trit = []
		for (let i = 0; i < 81; i++)
		{
			this.trit[i] = new Trit(null)
		}
    this.setValue(dec)
	}
  setMax()
  {
		for (let i = 0; i < 81; i++)
		{
			this.trit[i] = new Trit(true)
		}
  }
  setMin()
  {
		for (let i = 0; i < 81; i++)
		{
			this.trit[i] = new Trit(false)
		}
  }
	getTernary()
	{
		let ternary = ''
		for(let i = 0; i < 81; i++)
		{
			ternary = ternary +  this.trit[i].value;
		}
		return ternary
	}
	getDecimal()
	{
		let sum = 0
		let discharge = 80
		for(let i = 0; i < 81; i++)
		{
			sum = sum + this.trit[i].decimal * (Math.pow(3, discharge--))
		}
		return sum
	}
	setValue(dec)
	{
    dec = Math.round(dec)
    let neg = dec < 0
    let n = Math.abs(dec)
	let i = 80
	for(let i = 0; i < 81; i++)
	{
		this.trit[i] = new Trit(null)
	}
    do {
      let digit = n % 3
      if (digit === 2) {
        digit = -1
        ++n
      }

      if (neg) {
        digit = -digit
      }

      this.trit[i--] = new Trit(TRILLEAN[digit])
      n = ~~(n / 3)
    } while(n)
	 }
   setRand()
   {
    for (let i = 0; i < 81; i++)
    {
      let rand = Math.random() * 3
      let trill =
      {
        1: false,
        2: true,
        3: false
      }
      this.trit[i] = new Trit(trill[Math.floor(rand)])
    }
  }
  shiftRight(carry)
  {
	//console.log(this.getDecimal())
	this.setValue(Math.round(this.getDecimal() / 3) + (carry * Math.pow(3, 80)))
  }
  shiftLeft(carry)
  {
	//console.log(this.getDecimal())
	this.setValue(this.getDecimal() * 3 + carry)
  }
}

function sum(ternary1, ternary2)
{
  ternary1.setValue(ternary1.getDecimal() + ternary2.getDecimal())
}

function inc(ternary1)
{
  ternary1.setValue(ternary1.getDecimal()++)
}

function dec(ternary1)
{
  ternary1.setValue(ternary1.getDecimal()--)
}

function dis(ternary1, ternary2)
{
  ternary1.setValue(ternary1.getDecimal() - ternary2.getDecimal())
}

function mul(ternary1, ternary2)
{
  ternary1.setValue(ternary1.getDecimal() * ternary2.getDecimal())
}

function div(ternary1, ternary2)
{
  ternary1.setValue(ternary1.getDecimal() / ternary2.getDecimal())
}

module.exports =
{
  N: N,
  O: O,
  P: P,
  Trillean: TRILLEAN,
  strToTrillean: strToTrillean,
  Trit: Trit,
  int9: int9,
  int27: int27,
  int81: int81,
  sum: sum,
  inc: inc,
  dec: dec,
  dis: dis,
  mul: mul,
  div: div
}
