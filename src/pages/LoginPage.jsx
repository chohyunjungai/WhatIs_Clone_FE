// import React from 'react'
// import "../pages/SignUp.scss";
// import { useNavigate } from 'react-router';

// const LoginPage = () => {
//   const navigate =useNavigate()
//   const [email,setEmail]=useState('')
//   const[pw,setPw] = useState('')
//   const [emailValid, setEmailValid] = useState(false)
//   const [pwValid, setPwValid] =useState(false)

//   //이메일, 비번 조건 충족시 로그인 버튼 활성화
//   const [notAllow, setNotAllow]=useState(true)

//   //  서버 통신 부분
//   const mutation = useMutation(login, {
//     onSuccess: ()=> {
//       console.log('로그인 성공');
//       navigate('/main')
//     },
//     onError: (error)=>{
//       alert(error.reponse.data.erroMessage);
//     }
//   })
//   const onSubmitHandler = async()=>{
//     try{
//       mutation.mutate({
//         email: email,
//         password: pw.
//       })
//     }catch (error) {
//       console.log(error),///
//     }
//   }
//   return (
//       <section className="sign-up">
//           <div className="form-wrapper">
//             <div className="form-label">로그인</div>

//             <div className="input-row">
//               <div className="input-wrapper name">
//                 <input placeholder="이메일 입력" type="text" />
//               </div>
//             </div>
//             <div className="input-row">
//               <div className="input-wrapper name">
//                 <input placeholder="비밀번호 입력" type="text" />
//               </div>
//             </div>
//             <div className="action-wrapper">
//              <button >로그인</button><br/>
//              </div>
//              <div className="kakao-wrapper">
//              <button>카카오로 시작하기</button>
//             </div>
//           </div>
//       </section>

// )

// };

// export default LoginPage
