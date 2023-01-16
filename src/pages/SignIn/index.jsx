import { useEffect } from "react";
import GoogleButton from "react-google-button";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import InputGeneric from "../../components/InputGeneric";
import ButtonGeneric from "../../components/ButtonGeneric";

const SignIn = () => {

    const { googleSignIn, user } = UserAuth()
    const navigate = useNavigate()

    const handleGoogleSignIn = async () => {
        try {
            await googleSignIn()
            navigate('/')
        }
        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (user !== null) {
            navigate('/')
        }
    }, [navigate, user])

    return (
        <main>
            <div className="text-center text-3xl font-bold py-8">SignIn</div>
            
            <div>
               <InputGeneric type="email" placeholder="Enter email"/>
               <InputGeneric type="password" placeholder="Enter email"/>
               <ButtonGeneric bgColor="bg-green" buttonName="Login"/>
            </div>

            <div className="max-w-[240px] m-auto py-4">
                <p>Or</p>
                <GoogleButton onClick={handleGoogleSignIn} />
            </div>
        </main>
    )
}

export default SignIn