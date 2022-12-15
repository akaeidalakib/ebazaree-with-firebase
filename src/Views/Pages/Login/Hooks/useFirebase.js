import initializeFirebaseApp from "./../Firebase/Firebase.init";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  updatePassword,
  sendPasswordResetEmail
} from "firebase/auth";
import { useEffect, useState } from "react";
initializeFirebaseApp();

const useFirebase = () => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  const [user, setUser] = useState({});
  const [myuser, setMyuser] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const loginWithGoogle = (navigate, location) => {
    setIsLoading(true);
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user)
        const password = "Ebazaree@121";
        const confirmPassword = "Ebazaree@121";
        saveUser(user.email, user.displayName, password, confirmPassword, "POST");
        const destination = location?.state?.from || '/';
        console.log(destination);
        navigate(destination);
        setError('');
      }).catch((error) => {
        setError(error.message);
      }).finally(() => setIsLoading(false));
  };
  const changePassword = (email, password) => {
    setIsLoading(true);
    updatePassword(auth.currentUser, password)
      .then(() => {
        updateuser(email, password, 'PATCH');
        setError('');
      }).catch((error) => {
        setError(error.message);
      }).finally(() => setIsLoading(false));
  };
  const forgotPassword = (email) => {
    setIsLoading(true);
    sendPasswordResetEmail(auth, email)
      .then((result) => {
        console.log(result);
        // updateuser(email, password, 'PATCH');
        setError('');
      }).catch((error) => {
        setError(error.message);
      }).finally(() => setIsLoading(false));
  };

  //email and password
  // register user
  const registerUser = (firstName, email, password, confirmPassword, navigate) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in

        setError("");
        const newUser = userCredential.user
        setUser(newUser);

        // save to database-------------
        saveUser(email, firstName, password, confirmPassword, "POST");
        // updateProfile----------
        updateProfile(auth.currentUser, {
          displayName: firstName,
        })
          .then(() => {
            // Profile updated!
            // ...
          })
          .catch((error) => {
            // An error occurred
            setError(error.message);
            // ...
          });

        navigate("/");
        setError("");
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        setError(error.message);
        // ..
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  //save user in database
  const updateuser = (email, password, method) => {
    const confirmPassword = password
    const data = { password, confirmPassword };
    fetch(`http://localhost:8080/api/v1/user/change/${email}`, {
      method: method,
      headers: {
        'content-type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify(data)
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  }
  const saveUser = (email, firstName, password, confirmPassword, method) => {
    const user = { email, firstName, password, confirmPassword };
    fetch('http://localhost:8080/api/v1/user/signup', {
      method: method,
      headers: {
        'content-type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify(user)
    })
      .then()
  }
  // observe user state

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);

      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribe;
  }, [auth])
  //login user data check
  useEffect(() => {
    fetch('http://localhost:8080/api/v1/user/me', {
      headers: {
        authorization: `bearer ${localStorage.getItem('token')}`
      }
    })
      .then((response) => response.json())
      .then((json) => setMyuser(json.data));
  }, []);


  const loginUser = (email, password, navigate, location) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const destination = location?.state?.from || '/';
        navigate(destination, { replace: true });
        setError('');
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  }
  const handleLogout = () => {
    setIsLoading(true)
    localStorage.removeItem("token");
    signOut(auth).then(() => {
      setUser({});
      setMyuser({});
    }).catch((error) => {
      setError("");
    })
      .finally(() => setIsLoading(false));
  };

  return { loginWithGoogle, user, error, isLoading, handleLogout, registerUser, loginUser, changePassword, forgotPassword, myuser };
};
export default useFirebase;
