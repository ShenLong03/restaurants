import React, { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'
import { getCurrentUser } from '../../utils/actions'
import UserGuest from './UserGuest'
import UserLogged from './UserLogged'
import Loading from '../../components/Loading'

export default function Account() {

    const [login, setLogin] = useState(null)
    
    useEffect(() => {
        const user = getCurrentUser()
        console.log("user", user)
        user ? setLogin(true) : setLogin(false)
        console.log(user ? true : false)
    }, [])

    if(login==null){
         return <Loading isVisible={true} text="Cargando..." />
    }

    return login ? <UserLogged /> : <UserGuest />
}

const styles = StyleSheet.create({})
