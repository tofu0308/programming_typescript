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