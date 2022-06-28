import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,signOut,updateProfile     } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebase from "../../Pages/Login/Firebase/firebase.init";


initializeFirebase();
const useFirebase=()=>{
  const [user,setUser]=useState({})
  const [isLoading,setisLoading]=useState(true)
  const [admin,setAdmin]=useState(true)
  const [authError,setAuthError]=useState('')

  const auth = getAuth();

  const registerUser=(email,password,name,navigate)=>{
    setisLoading(true)
      createUserWithEmailAndPassword(auth,email,password)
      .then((userCredential) => {
        setAuthError('');
          const newUser={email,displayName:name};
          setUser(newUser);
          // save user to the database
          saveUser(email,name,'POST')
          // send name to firebase after creation
         
          updateProfile(auth.currentUser, {
            displayName: name
          }).then(() => {
          
          }).catch((error) => {
            setAuthError (error.message);
          });
          navigate('/')
        })
        .catch((error) => {
         
          console.log(error)
        })
        .finally(()=>setisLoading(false));
      
  }

  // useEffect(()=>{
  //   fetch(`https://safe-earth-59643.herokuapp.com/users/${user.email}`)
  //   .then(res=>res.json())
  //   .then(data=>setAdmin(data.admin))
  // },[user.email])


  const loginUser=(email,password,location,navigate)=>{
    
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        // const user = userCredential.user;
        // ...
        const destination=location?.state?.from || '/';
        navigate(destination);
       
      })
      .catch((error) => {
        
      })
     
  }

  const saveUser=(email,displayName,method)=>{
    const user={email,displayName};
    fetch('https://safe-earth-59643.herokuapp.com/users',{
      method:method,
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(user)
    })
    .then()
}

// observe user state change
useEffect(()=>{
  const unsubscribe=  onAuthStateChanged(auth,user=>{
        if(user){
            setUser(user)
        }
        else{
            setUser({})
        }
        
    })
    return ()=>unsubscribe;
},[])



const logOut=()=>{
  signOut(auth).then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
}

return{
  user,
  registerUser,
  loginUser,
  logOut,
  admin
  
}
}

export default useFirebase;