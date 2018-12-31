// Product of consecutive Fib numbers

function productFib(prod) {
	var n = 0;
	var nPlus = 1;
	while (n * nPlus < prod) {
		nPlus = n + nPlus;
		n = nPlus - n;
  }
  console.log([n, nPlus, n*nPlus===prod]);
	return [n, nPlus, n * nPlus === prod];
}

productFib(4895); // [ 55, 89, true ]
productFib(5895); // [ 89, 144, false ]

///// OR /////
function productFib2( prod ) // mathy way
{
  const r = ( 1 + Math.sqrt(5) ) / 2;
  let fib1 = Math.round( Math.sqrt( prod / r ) ),
  fib2 = Math.round( fib1 * r );
  if ( fib1 * fib2 === prod ) return [ fib1, fib2, true ];
  for ( [fib1, fib2] = [0, 1]; fib1 * fib2 < prod; [fib1, fib2] = [fib2, fib1 + fib2] );
  console.log([ fib1, fib2, false ]);
  return [ fib1, fib2, false ];
}

productFib2(4895); // [ 55, 89, true ]
productFib2(5895); // [ 89, 144, false ]