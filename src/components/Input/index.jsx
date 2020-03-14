import styled from 'styled-components';

export const Input = styled.input`
display:flex;
    width:100%;
    margin:auto;
    background: #ccc;
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
        background:var(--lightBlue);
        color: var(--mainDark);
    }
    &:active {
        background:var(--lightBlue);
        color: var(--mainDark);
    }
    &:focus {
        outline:none;
    }
    &:invalid{
        border: 2px solid red;
        /* border: 4px solid red; */
    }
    &:valid {
        border: 2px solid green;
    }
`

export const Text = styled.textarea`
    width:100%;
    text-transform:capitalize;
    font-size: 1.4rem;
    background: #ccc;
    border: 0.05rem solid var(--mainDark);
    border-color: var(--mainDark);
    color: var(--mainDark);
    border-radius: 0.5rem;
    padding: 0.2rem 0.5rem;
    cursor:pointer;
    margin: 0.2rem 0.5rem 0.2rem 0;
    transition: all 0.5s ease-in-out;
    &:hover {
        background:var(--lightBlue);
        color: var(--mainDark);
    }
    &:focus {
        outline:none;
    }
    &:invalid{
        border:0;
        border: 2px solid red;
        /* border: 4px solid red; */
    }
    &:valid {
        border: 2px solid green;
    }
`