import {useEffect, useState} from 'react'
import UseEffectBasic from './01_useEffect/01_useEffect-basic';
import UseEffectMount from './01_useEffect/02_useEffect-mount';
import UseEffectUpdate from './01_useEffect/03_useEffect-update';
import UseEffectCleanUp from './01_useEffect/04_useEffect-cleanUp';
import {Container} from './01_useEffect/05_useEffect-cleanUp-example';
import QuizShow from './01_useEffect/quizShow';
import {UseReducerBasic} from './02_useReducer/01_reducer-basic'
import ReducerFormControl from './02_useReducer/02_reducer-form-control.js'
import {Input} from './02_useReducer/02_reducer-form-control.js'
import HardCalculator from './03_useMemo/01_hard-carculator';
import ComplexCalculator from './03_useMemo/02_complex-calculator';
import UseMemoComponent from './03_useMemo/03_performance-optimization';
import LocationComponent from './03_useMemo/04_object-type-problem';
import CallBackProblem from './04_useCallBack/01_problem';
import FunctionMemorization from './04_useCallBack/02_function-memorization';
import CallBackComponent from './04_useCallBack/03_compositied-component';
import CounterRef from './05_useRef/01_problem';
import UseRefCounter from './05_useRef/02_resolve-as-useRef';
import LoginComponent from './05_useRef/03_inputRef';
import Header from './06_useContext/01_props-drilling';
import Page from './06_useContext/01_props-drilling';
import ContextContainer from './06_useContext/02_useContext';
import HooksProblem from './07_custom-hooks/01_problem';
import CustumHooks from './07_custom-hooks/02_custom-hook';



function App() {

  // const [message, setMessage] = useState('안녕하세요~');


  return (
    <>
      {/* <UseEffectBasic message={message}/> */}
      {/* <UseEffectMount/> */}
      {/* <UseEffectUpdate/> */}
      {/* <UseEffectCleanUp/> */}
      {/* <Container/> */}
      {/* <QuizShow/> */}
      {/* <Counter/> */}
      {/* <UseReducerBasic/> */}
      {/* <ReducerFormControl/>
      <br/>
      <Input/> */}
      {/* <HardCalculator/> */}
      {/* <ComplexCalculator/> */}
      {/* <UseMemoComponent/> */}
      {/* <LocationComponent/> */}
      {/* <CallBackProblem/>   */}
      {/* <FunctionMemorization/> */}
      {/* <CallBackComponent/> */}
      {/* <CounterRef/> */}
      {/* <UseRefCounter/> */}
      {/* <LoginComponent/> */}
      {/* <Header isDark={false}/> */}
      {/* <Page/> */}
      {/* <ContextContainer/> */}
      {/* <HooksProblem/> */}
      <CustumHooks/>
    </>
  );
}

export default App;
