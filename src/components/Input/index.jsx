import styled from 'styled-components';

export const Input = styled.input`
    width:100%;
    background: var(--lightBlue);
    font-size: 1.4rem;
    border: 0.05rem solid var(--mainDark);
    border-color: var(--mainDark);
    color: var(--mainDark);
    border-radius: 0.5rem;
    padding: 0.2rem 0.5rem;
    cursor:pointer;
    margin: 0.2rem 0.5rem 0.2rem 0;
    transition: all 0.5s ease-in-out;
    &:hover {
        background:var(--mainYellow);
        color: var(--mainDark);
    }
    &:focus {
        outline:none;
    }
    &:invalid{
        border-bottom: 6px solid red;
        /* border: 4px solid red; */
    }
    &:valid {
        border: 0px;
    }
`

export const Text = styled.textarea`
    width:100%;
    text-transform:capitalize;
    font-size: 1.4rem;
    background: var(--lightBlue);
    border: 0.05rem solid var(--mainDark);
    border-color: var(--mainDark);
    color: var(--mainDark);
    border-radius: 0.5rem;
    padding: 0.2rem 0.5rem;
    cursor:pointer;
    margin: 0.2rem 0.5rem 0.2rem 0;
    transition: all 0.5s ease-in-out;
    &:hover {
        background:var(--mainYellow);
        color: var(--mainDark);
    }
    &:focus {
        outline:none;
    }
    &:invalid{
        border:0;
        border-bottom: 4px solid red;
        /* border: 4px solid red; */
    }
    &:valid {
        border: 0px;
    }
`