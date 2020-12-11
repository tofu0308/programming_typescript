// エラー処理
// nullを返す
{
  function ask() {
    // return prompt('When is your birthday?')
    const birthday = new Date
    return birthday.toString()
  }

  function parse(birthday: string): Date|null {
    let date = new Date(birthday)
    if(!isValid(date)) {
      return null
    }
    return date
  }

  // 与えられた日付が有効かどうかをチェック
  function isValid(date: Date) {
    return Object.prototype.toString.call(date) === '[object Date]' && !Number.isNaN(date.getTime())
  }

  let date = parse(ask())
  if(date) {
    console.info(`Date is ${date.toISOString()}`)
  } else {
    console.error('Error parsing date for some reason')
  }
}

// 例外をスローする
{
  function ask() {
    return null
  }

  class InvalidDateFormatError extends RangeError {}
  class DateIsInTheFutureError extends RangeError {}
  
  // 挙動確認のためanyに変更
  function parse(birthday: any): Date|null {
    let date = new Date(birthday)
    if(!isValid(date)) {
      throw new InvalidDateFormatError('Enter a date in the form YYY/MM/DD')
    }
    if (date.getTime() > Date.now()) {
      throw new DateIsInTheFutureError('Are you a timeload?')
    }
    return date
  }
 
    // 与えられた日付が有効かどうかをチェック
    function isValid(date: Date) {
      return Object.prototype.toString.call(date) === '[object Date]' && !Number.isNaN(date.getTime())
    }

    try {
      let date = parse(ask())
      // オプショナルチェイニングでエラー避け
      console.info(`Date is ${date?.toISOString()}`)

    } catch(e) {
     if(e instanceof InvalidDateFormatError) {
      console.error(e.message)

     } else if(e instanceof DateIsInTheFutureError) {
      console.error(e.message)

     } else {
      throw e
     }
   }
}

// 例外を返す
{
  function ask() {
    return null
  }

  class InvalidDateFormatError extends RangeError {}
  class DateIsInTheFutureError extends RangeError {}
  
  // 挙動確認のためanyに変更
  function parse(birthday: any): Date|InvalidDateFormatError|DateIsInTheFutureError {
    let date = new Date(birthday)
    if(!isValid(date)) {
      return new InvalidDateFormatError('Enter a date in the form YYY/MM/DD')
    }
    if (date.getTime() > Date.now()) {
      return new DateIsInTheFutureError('Are you a timeload?')
    }
    return date
  }
 
    // 与えられた日付が有効かどうかをチェック
    function isValid(date: Date) {
      return Object.prototype.toString.call(date) === '[object Date]' && !Number.isNaN(date.getTime())
    }

    let result = parse(ask()) // Dateオブジェクトorエラー
    if (result instanceof InvalidDateFormatError) {
      console.error(result.message)
    } else if  (result instanceof DateIsInTheFutureError) {
      console.error(result.message)
    } else {
      console.info(`Date is ${result.toISOString()}`)
    }

    // 冗長になりがちだが優れた安全性をもたらす
    type Error1 = {}
    type Error2 = {}
    type Error3 = {}

    function x(): void|Error1 {}

    function y():void|Error1|Error2 {
      let a = x()
      if(a instanceof Error){
        return a
      }
    }

    function z():void|Error1|Error2|Error3 {
      let a = y()
      if(a instanceof Error) {
        return a
      }
    }
 }

 // Option型
 {
  function ask() {
    // return prompt('When is your birthday?')
    const birthday = new Date
    return birthday.toString()
  }

  function parse(birthday: any): Date[] {
    let date = new Date(birthday)
    if(!isValid(date)) {
      return []
    }
    return [date]
  }

  // 与えられた日付が有効かどうかをチェック
  function isValid(date: Date) {
    return Object.prototype.toString.call(date) === '[object Date]' && !Number.isNaN(date.getTime())
  }

  let date = parse(ask())
   date
    .map(_ => _.toISOString())
    .forEach(_ => console.info('Option :Date is', _))
  interface Option<T> {
    flatMap<U>(f: (value:T)=> None): None
    flatMap<U>(f: (value:T)=> Option<U>): Option<U>
    getOrElse(value: T): T
  }
  class Some<T> implements Option<T> {
    constructor(private value: T) {}
    flatMap<U>(f: (value: T) => None):None
    flatMap<U>(f: (value: T) => Some<U>):Some<U>
    flatMap<U>(f: (value: T)=> Option<U>): Option<U> {
      return f(this.value)
    }
    getOrElse(): T {
      return this.value
    }
  }
  class None implements Option<never> {
    flatMap(): None {
      return this
    }
    getOrElse<U>(value: U):U {
      return value
    }
  }

  function Option<T>(value: null|undefined):None
  function Option<T>(value: T): Some<T>
  function Option<T>(value:T): Option<T>{
    if(value == null) {
      return new None
    }
    return new Some(value)
  }

  let result = Option(6)
    .flatMap(n => Option(n*3))
    .flatMap(n => new None)
    .getOrElse(7)

    console.log(result)
 }

 // 練習問題
 type UserID = unknown

 declare class API {
   getLoggerInUserID(): Option<UserID>
   getFriendIDs(userID: UserID): Option<UserID[]>
   getUserName(userID: UserID): Option<string>
 }

 interface Option<T> {
  flatMap<U>(f: (value:T)=> None): None
  flatMap<U>(f: (value:T)=> Option<U>): Option<U>
  getOrElse(value: T): T
 }
class Some<T> implements Option<T> {
  constructor(private value: T) {}
  flatMap<U>(f: (value: T) => None):None
  flatMap<U>(f: (value: T) => Some<U>):Some<U>
  flatMap<U>(f: (value: T)=> Option<U>): Option<U> {
    return f(this.value)
  }
  getOrElse(): T {
    return this.value
  }
}
class None implements Option<never> {
  flatMap(): None {
    return this
  }
  getOrElse<U>(value: U):U {
    return value
  }
}

function listOfOptionToOptionOfList<T>(list: Option<T>[]): Option<T[]> {
  let empty = {}
  let result = list.map(_ => _.getOrElse(empty as T)).filter(_ => _ !== empty)
  if (result.length) {
    return new Some(result)
  }
  return new None
}
//  ビルドエラー起こすので
/*
let api = new API()
let friendsUserNames = api
  .getLoggerInUserID()
  .flatMap(api.getFriendIDs)
  .flatMap(_ => listOfOptionToOptionOfList(_.map(api.getUserName)))
console.log(api)
console.log(friendsUserNames)
 */