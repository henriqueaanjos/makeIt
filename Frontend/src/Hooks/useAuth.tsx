import React, { useContext, createContext, ReactNode, useState, useEffect } from 'react';
import { api } from '../Services/api';

interface AuthContextProps{
    children: ReactNode
}
interface User{
    id: string,
    first_name: string,
    last_name: string,
    email: string
}
interface AuthResponse{
    token:string,
    user: User,
    code: number
}

interface AuthDataProps{
    user: User,
    signIn:(email: string, password: string) => Promise<number>
    signOut:()  => void
    signUp:(firstName: string, lastName: string, email: string, password: string) => Promise<number>
    isLoading: boolean
}

const AuthContext = createContext({} as AuthDataProps);

export function AuthProvider({ children }: AuthContextProps){
    const [user, setUser] = useState<User>({} as User);
    const [isLoading, setIsLoading] = useState(true);
    const tokenKey = '@makeIt:token';

    function signOut(){
        setUser({} as User);
         localStorage.removeItem(tokenKey);
    }
    async function signIn(email: string, password: string){
        const response = await api.post<AuthResponse>('authenticate',{
            email, 
            password
        })
        const {token, user} = response.data;
        if(token){
            localStorage.setItem(tokenKey, token);
            api.defaults.headers.common.authorization = `Bearer ${token}`
            setUser(user);
            return 42;
        }
        return response.data.code;
    }
    async function signUp(firstName: string, lastName: string, email: string, password: string ){
        const regexE = /@[a-z|A-Z]+.[a-z|A-Z]+/;
        if(firstName != ''){
            if(lastName != ''){
                if(regexE.test(email)){ 
                    const regex = /[0-9]/;
                    const regexL = /[a-z|A-Z]/;
                    if(regex.test(password) && regexL.test(password)){
                        const userLogged = {
                            first_name: firstName,
                            last_name: lastName,
                            email: email.toLowerCase(),
                            password
                        };
                        const response = await api.post<AuthResponse>('signup', userLogged);
                        const {token, user} = response.data;
                        localStorage.setItem(tokenKey, token);
                        api.defaults.headers.common.authorization = `Bearer ${token}`
                        setUser(user);
                        return 42;
                    }else return 202;
                }else return 101;
            }else return 22;
        }else return 11;
        return 0;
    }
    
    useEffect(() => {
        async function loadToken(){
            const token = await localStorage.getItem(tokenKey);
            if(token){
                api.defaults.headers.common.authorization = `Bearer ${token}`;
                api.get<User>('/profile').then(response => {
                    setUser(response.data)
                })
            }
            setIsLoading(false);
        }
        loadToken();
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