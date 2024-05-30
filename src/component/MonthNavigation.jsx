import React from 'react'
import styled from 'styled-components'
import { Section } from '../Home'

const MonthWrapper = styled.div`
display:flex;
flex-wrap:wrap;
gap:20px;
justify-content:center;

`
const MonthButton = styled.button`
text-align:center;
font-family: Pretendard, serif;
font-size:18px;
font-styled:normal;
font-weight:600;
line-height:normal;

display:flex;
height: 60px;
padding:20px;
width:104px;
justify-content: center;
align-items: center;
flex-shrink:0;
color:${(props)=>props.selected ? "var(--white-alpha-100, #FFF)"
    : "var(--black-alpha-100, #000)"};
border-radius:10px;
border:none;
cursor:pointer;
background: ${((props) => !props.selected ? "var(--black-alpha-100, #F6F7FA)"
    : "var(--bg-form, #2EC4B6)")}

    &:hover{
        background:$2ec4b6;
        color:#fff;
    }
`;
const MOUTHS = [1,2,3,4,5,6,7,8,9,10,11,12];

const MonthNavigation = ({month, setMonth}) => {
  return (
    <Section>
        <MonthWrapper>
        {MOUTHS.map(
        (el)=> 
        <MonthButton key={el} onClick={()=>{
            setMonth(month);
        }}
        selected={el === month}
        >
        {`${el}월`}</MonthButton>)}
        </MonthWrapper>
    </Section>
  )
}

export default MonthNavigation;
