var monster1111 = function () {
  function chunk(ary, size = 1) {
    var result = []
    for (var i = 0; i < ary.length; i += size) {
      result.push(ary.slice(i, i + size))
    }
    return result
  }

  function compact(ary) {
    var result = []
    for (var item of ary) {
      if (item) {
        result.push(item)
      }
    }
    return result
  }

  function difference(ary, ...values) {
    var result = []
    var compare = []
    for (var i = 1; i < arguments.length; i++) {
      compare = compare.concat(arguments[i])
    }
    for (var i = 0; i < ary.length; i++) {
      if (compare.indexOf(arr[i]) == -1) {
        result.push(arr[i])
      }
    }
    return result
  }

  function drop(array, n = 1) {
    var result = []
    for (var i = n; i < array.length; i++) {
      result.push(array[i])
    }
    return result
  }

  function dropRight(array, n = 1) {
    var result = []
    for (var i = 0; i < array.length - n; i++) {
      result.push(array[i])
    }
    return result
  }

  function fill(array, value, start = 0, end = array.length) {
    for (var i = start; i < end; i++) {
      array[i] = value
    }
    return array
  }

  function flatten(array) {
    // return flattenDepth(array) 方法二
    // return [].contact(...array) 方法三
    var result = []
    for (var item of array) {
      if (Array.isArray(item)) {
        for (var val of item) {
          result.push(val)
        }
      } else {
        result.push(item)
      }
    }
    return result
  }

  function flattenDeep(array) {
    var result = []
    for (var item of array) {
      if (Array.isArray(item)) {
        result.push(...flattenDeep(item))
      } else {
        result.push(item)
      }
    }
    return result
  }

  //reduce写法
  // function flattenDeep(array) {
  //   return array.reduce((result, item) => {
  //     if (Array.isArray(item)) {
  //       result.push(...flattenDeep(item))
  //     } else {
  //       result.push(item)
  //     }
  //     return result
  //   }, [])
  // }

  function flattenDepth(array, depth = 1) {
    if (depth == 0) {
      return array.slice()
    }
    return array.reduce((result, item) => {
      if (Array.isArray(item)) {
        result.push(...flattenDepth(item, depth - 1))
      } else {
        result.push(item)
      }
      return result
    }, [])
  }
  //方法二:调用flatten函数
  // function flattenDepth(array, depth = 1) {
  //   while (depth--) {
  //     array = flatten(array)
  //   }
  //   return array
  // }

  function head(array) {
    for (var i = 0; i < array.length; i++) {
      return array[0]
    }
  }

  function indexOf(array, value, fromIndex = 0) {
    for (var i = fromIndex; i < array.length; i++) {
      if (array[i] == value) {
        return i
      }
    }
    return -1
  }

  function initial(array) {
    var result = []
    for (var i = 0; i < array.length - 1; i++) {
      result.push(array[i])
    }
    return result
  }

  function intersection(...array) {
    var arr = array[0]
    var result = []
    for (var i = 0; i < arr.length; i++) {
      var count = 0
      for (var j = 0; j < array.length; j++) {
        if (array[j].indexOf(arr[i]) == -1) {
          break
        } else {
          count++
        }
        if (count == array.length) {
          result.push(arr[i])
        }
      }
    }
    return result
  }

  function join(array, separator = ',') {
    var result = ''
    for (var i = 0; i < array.length; i++) {
      result += array[i] + separator
    }
    result += array[i]
    return result
  }

  function last(array) {
    for (var i = 0; i < array.length; i++) {
      return array[array.length - 1]
    }
  }

  function lastIndexOf(array, value, fromIndex = array.length - 1) {
    for (var i = fromIndex; i >= 0; i--) {
      if (array[i] == value) {
        return i
      }
    }
    return -1
  }

  function nth(array, n = 0) {
    return n < 0 ? array[array.length + n] : array[n]
  }

  function pull(array, ...values) {
    for (var i = 0; i < values.length; i++) {
      for (var j = 0; j < array.length; j++) {
        if (array[j] == values[i]) {
          array.splice(j, 1)
          j--
        }
      }
    }
    return array
  }

  function pullAll(array, values) {
    for (var i = 0; i < array.length; i++) {
      if (values.includes(array[i])) {
        array.slice(i--, 1)
      }
    }
    return array
  }

  function reverse(array) {
    var t = array.length / 2 | 0
    for (var i = 0; i < t; i++) {
      var left = i
      var right = array.length - left - 1
      var temp = array[left]
      array[left] = array[right]
      array[right] = temp
    }
    return array
  }

  function slice(array, start = 0, end = array.length) {
    var result = []
    for (var i = start; i < end; i++) {
      result.push(array[i])
      result[i] = array[i]
    }
    return result
  }

  function sortedIndex(array, value) {
    var left = 0
    var right = array.length - 1
    var mid = Math.floor((left + right) / 2)
    while (left <= right) {
      if (array[mid] >= value) {
        mid = Math.floor((left + mid) / 2)
      } else if (array[mid] < value) {
        return mid + 1
      }
    }
  }

  function sortedIndexOf(array, value) {
    return indexOf(array, value)
  }

  function sortedLastIndex(array, value) {
    for (var i = 0; i < array.length; i++) {
      if (array[i] > value) {
        return i
      }
    }
  }

  function sortedLastIndexOf(array, value) {
    return lastIndexOf(array, value)
  }

  function sortedUniq(array) {
    var map = {}
    var result = []
    for (var i of array) {
      if (!map[i]) {
        map[i] = 1
        result.push(i)
      }
    }
    return result
  }

  function tail(array) {
    return array.slice(array[0])
  }

  function take(array, n = 1) {
    return array.slice(0, n)
  }

  function takeRight(array, n = 1) {
    return n == 0 ? [] : array.slice(-n)
  }

  function union(...arrays) {
    var result = []
    for (var i = 0; i < arguments.length; i++) {
      var j = 0
      while (j < arrays[i].length) {
        if (result.indexOf(arrays[i][j]) == -1) {
          result.push(arrays[i][j])
        }
        j++
      }
    }
    return result
  }

  function forEach(collection, iteratee) {
    if (Array.isArray(collection)) {
      for (var i = 0; i < collection.length; i++) {
        iteratee(collection[i], i, collection)
      }
    } else {
      for (var item in collection) {
        iteratee(collection[item], item, collection)
      }
    }
    return collection
  }

  function after(n, func) {
    var calledTimes = 0
    return function (...args) {
      calledTimes++
      if (calledTimes >= n) {
        return func(...args)
      }
    }
  }

  function unary(func) {
    return function (...args) {
      var first = args.slice(0, 1)
      return func.call(this, ...first)
    }
  }
  // unary = flip(ary).bind(null, 1)

  //接收n个参数,只返回前n个参数
  //函数的长度是函数声明的形参的个数(除了...以外的参数)
  function ary(func, n = func.length) {
    return function (...args) {
      var initials = args.slice(0, n)
      return func(...initials)
    }
  }

  //创建一个函数,该函数调用原函数,返回原函数的参数反过来
  function flip(func) {
    return function (...args) {
      return func(...args.reverse())
    }
  }

  //创建一个函数,该函数否定掉predicate函数返回的结果,否定掉的是predicate的逻辑
  function negate(predicate) {
    return function (...args) {
      return !predicate(...args)
    }
  }

  //调用func
  function spread(func) {
    return function (array) {
      return func.apply(this, array)
    }
  }

  //判断target的每个属性是否和obj的每个属性相同
  function matches(target) {
    return function (obj) {
      for (var prop in target) {
        if (obj[prop] != target) {
          return false
        }
      }
      return true
    }
  }

  function filter(collection, predicate) {
    predicate = iteratee(predicate)
    var result = []
    for (var i = 0; i < collection.length; i++) {
      if (predicate(collection[i], i, collection)) {
        result.push(collectionp[i])
      }
    }
    return result
  }

  //判断元素的类型
  function iteratee(val) {
    predicate = val
    if (typeof predicate === 'string') {
      return proproperty(predicate)
    } else if (Array.isArray(predicate)) {
      return matchesProperty(predicate)
    } else if (typeof predicate === 'object') {
      return matches(predicate)
    }
    return val
  }

  function every(collection, predicate) {
    var f = iteratee(predicate)
    for (var key in collection) {
      if (f(collection[key], key, collection === false)) {
        return false
      }
    }
    return true
  }


  return {
    chunk,
    compact,
    difference,
    drop,
    dropRight,
    fill,
    flatten,
    flattenDeep,
    flattenDepth,
    head,
    indexOf,
    initial,
    intersection,
    join,
    last,
    lastIndexOf,
    nth,
    pull,
    pullAll,
    reverse,
    slice,
    sortedIndex,
    sortedIndexOf,
    sortedLastIndex,
    sortedLastIndexOf,
    sortedUniq,
    tail,
    take,
    takeRight,
    union,
    forEach,
    after,
    unary,
    ary,
    flip,
    negate,
    matches,
    filter,
    iteratee,
    spread,
    every,
  }
}()