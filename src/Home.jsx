import React, { useState } from 'react'
import styled from 'styled-components';
import MonthNavigation from './component/MonthNavigation';
import ExpenseList from './component/ExpenseList';

export default function Home({expenses, setExpenses}){
    const [month, setMonth] = useState(1)
    console.log(expenses)

    const filteredExpenses = expenses.filter((expense)=>
    expense.month === month
    )
  return (
  <Container>
    <MonthNavigation month={month} setMonth={setMonth}/>
    <Section>캘린더 역할을 하는 섹션</Section>
    <ExpenseList expenses={filteredExpenses}/>
  </Container>
  )
}

const Container = styled.main`
max-width: 800px;
width: 100%;
display:flex;
flex-direction: column;
gap:20px;
margin: 0 auto;
`;

export const Section = styled.section`
background-color: #fff;
border-radius: 16pxl
padding: 20px;
`;
