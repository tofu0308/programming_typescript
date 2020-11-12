{
  type ExistingUser = {
    id: number
    name: string
  }
  type NewUser = {
    name: string
  }
type LegacyUser = {
  id?: number|string
  name: string
}


  function deleteUser(user: {id?: number, name: string}) {
    delete user.id
  }

  let existingUser: ExistingUser = {
    id: 1,
    name : 'user1'
  }
  // 削除前
  console.log(existingUser)
  deleteUser(existingUser) 
  // 削除後
  console.log(existingUser)

  let legacyUser: LegacyUser = {
    id: '1234',
    name: 'legacy1234'
  }

  // deleteUser(legacyUser)
  /*
    型 'LegacyUser' の引数を型 '{ id?: number | undefined; name: string; }' のパラメーターに割り当てることはできません。
    プロパティ 'id' の型に互換性がありません。
      型 'string | number | undefined' を型 'number | undefined' に割り当てることはできません。
        型 'string' を型 'number | undefined' に割り当てることはできません。ts(2345) 
  */
}
{
  class Animal {}
  class Bird extends Animal {
    chirp(){}
  }
  class Crow extends Bird {
    caw():void {}
  }
  /*
    CrowはBirdのサブタイプ
    BirdはAnimalsのサブタイプ
    Crow <: Bird <: Annimals
  */

  function chirp(bird: Bird): Bird {
    bird.chirp()
    return bird
  }

  // chirp(new Animal)
  /*
    型 'Animal' の引数を型 'Bird' のパラメーターに割り当てることはできません。
    プロパティ 'chirp' は型 'Animal' にありませんが、型 'Bird' では必須です。ts(2345)
  */

  chirp(new Bird)
  chirp(new Crow)

  function clone(f: (b: Bird) => Bird): void {}

  // 宣言された型が 'void' でも 'any' でもない関数は値を返す必要があります。ts(2355)  に暫定対処
  // @ts-ignore
  function birdToBird(b: Bird): Bird {}
  clone(birdToBird)

  // 宣言された型が 'void' でも 'any' でもない関数は値を返す必要があります。ts(2355)  に暫定対処
  // @ts-ignore
  function birdToCrow(d: Bird): Crow {}
  clone(birdToCrow)

  // 宣言された型が 'void' でも 'any' でもない関数は値を返す必要があります。ts(2355)  に暫定対処
  // @ts-ignore
　function birdToAnimal(d: Bird): Animal{}
  // clone(birdToAnimal)
  /*
  型 '(d: Bird) => Animal' の引数を型 '(b: Bird) => Bird' のパラメーターに割り当てることはできません。
  プロパティ 'chirp' は型 'Animal' にありませんが、型 'Bird' では必須です。ts(2345)
  */

  // 宣言された型が 'void' でも 'any' でもない関数は値を返す必要があります。ts(2355)  に暫定対処
  // @ts-ignore
  function animalToBird(a: Animal):Bird {}
  clone(animalToBird)

  // 宣言された型が 'void' でも 'any' でもない関数は値を返す必要があります。ts(2355)  に暫定対処
  // @ts-ignore
  function crowToBird(c: Crow):Bird {}
  // clone(crowToBird)
  /*
    型 '(c: Crow) => Bird' の引数を型 '(b: Bird) => Bird' のパラメーターに割り当てることはできません。
      パラメーター 'c' および 'b' は型に互換性がありません。
        プロパティ 'caw' は型 'Bird' にありませんが、型 'Crow' では必須です。ts(2345) 
  */
}