import React, { useState } from "react";

const [account, setAccount] = useState({
    fullName:'Jorge', 
    userName:'correo@correo.com', 
    password:'1234', 
    userType:'parent'
  })

const newUserAccount = (account) =>{
setAccounts([
    ...accounts, 
    account
])
}

newUserAccount(account)