import React, { useContext, createContext, ReactNode, useState, useEffect } from 'react';

interface AuthContextProps{
    children: ReactNode
}
interface User{
    id: string,
    firstName: string,
    lastName: string,
    email: string
}
interface Error{
    id: number, 
    title: string, 
    description: string
}
interface AuthDataProps{
    user: User,
    signIn:(email: string, password: string) => number
    signOut:()  => void
    signUp:(firstName: string, lastName: string, email: string, password: string) => number
    isLoading: boolean
}

const AuthContext = createContext({} as AuthDataProps);

export function AuthProvider({ children }: AuthContextProps){
    const [user, setUser] = useState<User>({} as User);
    const [isLoading, setIsLoading] = useState(true);
    const userKey = '@makeIt:user';

    function signOut(){
        setUser({} as User);
         localStorage.removeItem(userKey);
    }
    function signIn(email: string, password: string){
        if(email.toLowerCase() === 'henrique.aa01@gmail.com'){
            if(password === '123456'){
                const userLogged = {
                    id: '1',
                    firstName: 'Henrique',
                    lastName: 'Anjos',
                    email: email.toLowerCase()
                };
                setUser(userLogged);
                console.log(user);
                localStorage.setItem(userKey, JSON.stringify(userLogged));
                return 42;
            }else return 200;
        }else return 100;
    }
    function signUp(firstName: string, lastName: string, email: string, password: string ){
        const regexE = /@[a-z|A-Z]+.[a-z|A-Z]+/;
        if(firstName != ''){
            if(lastName != ''){
                if(regexE.test(email)){ 
                    const regex = /[0-9]/;
                    const regexL = /[a-z|A-Z]/;
                    if(regex.test(password) && regexL.test(password)){
                        const userLogged = {
                            id: '2',
                            firstName: firstName,
                            lastName: lastName,
                            email: email.toLowerCase(),
                        };
                        setUser(userLogged);
                        console.log(user);
                        localStorage.setItem(userKey, JSON.stringify(userLogged));
                        return 42;
                    }else return 202;
                }else return 101;
            }else return 22;
        }else return 11;
        return 0;
    }
    
    useEffect(() => {
        async function loadStorageUserData(){
            const userData = await localStorage.getItem(userKey);
            if(userData){
                const userLogged = JSON.parse(userData) as User;
                setUser(userLogged);
            }
            setIsLoading(false);
        }
        loadStorageUserData();
    }, []);

    return(
        <AuthContext.Provider value={{ 
            user,
            signIn,
            signOut,
            signUp,
            isLoading
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth(){
    const context = useContext(AuthContext);
    return context;
}