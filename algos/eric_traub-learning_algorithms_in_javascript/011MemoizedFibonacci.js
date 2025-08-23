/**/
//index: index of number in fibonacci sequence
//cache: an array used as memory

function fibMemo(index, cache){
  cache = cache || [];
  if(cache[index]) return cache[index];
  else {
    if (index <= 2) return 1;
    else cache[index] = fibMemo(index - 1, cache) + fibMemo(index - 2, cache);
  }

  return cache[index];
}

fibMemo(20);
