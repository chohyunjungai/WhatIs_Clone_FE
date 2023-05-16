//여기는 제가 전에 프로젝트에서 가져온 것입니다. 


import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from './component/Button'
import Header from './Header'
import useInput from './Hooks/useInput'
import * as CSS from '../components/component/style'
import { useMutation } from 'react-query'
import { handleLogin } from '../axios/api'
import Cookies from 'js-cookie'

const Login = () => {
  const [username, onChangeUsernameHandler ] = useInput('')
  const [password, onChangPasswordHandler] = useInput('')
  const [warningNotice, setWarningNotice] = useState('')
  const navigate = useNavigate()
  const expiresInSeconds = new Date(new Date().getTime()+ 60*60*1000)

  const mutation = useMutation(handleLogin,{
    onSuccess: (data) =>{
      alert('로그인 성공')
      navigate('/')
      Cookies.set('token',data,{expires:expiresInSeconds})
    },
    onError:(error)=>{
      setWarningNotice(error.message)
    }
})
  const newLoginPost = {
    username,
    password,
  }

  const onClickLoginHandler = (e)=>{
    const regex = /^[a-z0-9]+$/;
    if(username.length<1 || !regex.test(username)){
      setWarningNotice('아이디를 영문 소문자 + 숫자로만 입력해주세요.')
      return;
    }
    if(password.length<1 || !regex.test(password)){
      setWarningNotice('비밀번호를 영문 소문자 + 숫자로만 입력해주세요.')
      return;
    }
    setWarningNotice('')
    mutation.mutate(newLoginPost)
  }
  
  return (
    <div>
    <Header/>

    <CSS.Main>
      <CSS.LoginBox>
    <CSS.Title>로그인</CSS.Title>
    <CSS.Form onSubmit={(e)=>e.preventDefault()}>
    <CSS.Input  value={username} onChange={onChangeUsernameHandler}
    placeholder='USER ID'/>
    <CSS.Input type='password' value={password} onChange={onChangPasswordHandler}
    placeholder='PASSWORD'/>
    </CSS.Form>
    <CSS.WarningNotice>{warningNotice}</CSS.WarningNotice>
    <Button type='positive'
    size='200'


    onClick={onClickLoginHandler}>로그인</Button>
    

    <CSS.SignupGuide>
    <span>계정이 없으신가요?</span>
    <Link to='/signUp'>
      <Button>회원가입</Button>
      </Link>
    </CSS.SignupGuide>
    </CSS.LoginBox>
    </CSS.Main>


    </div>
  )
}

export default Login