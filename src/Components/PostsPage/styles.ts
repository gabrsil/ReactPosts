import styled from 'styled-components';
import {Heart} from '@styled-icons/evil';
import {Delete} from '@styled-icons/material';

export const Container = styled.div`
    background-color: var(--bgprimary);
    min-height: 100vh;
`;


export const Wrapper = styled.div`
    width: 1280px;
    height: 100%;
    max-width: 1280px;


    margin: 0 auto;

@media (max-width: 1280px) {
    width: 100%

}

`

export const Main = styled.main`

    max-width: 700px;
    display: flex;
    flex-direction: column;
    
    margin: 0 auto;

`

export const PostList = styled.ul`

    width: 100%;
    min-height: 100%;
 
    list-style-type: none;
    border: 1px solid #dedede;
    padding: 0 15px;

  
  
`

export const PostItem = styled.li`
  
    height: 145px;
    width: 100%;
    background-color: #fff;
    margin: 14px 0;
    border-radius: 4px;
    padding: 6px 15px 3px;
    display: flex;
    flex-direction: column;


    

   
  
    > p {
        height: 100px;

    
    }


    /* :first-child, :last-child {
        margin-top: 25px;
    } */


`

export const LikeIcon = styled(Heart)`
  
  width: 34px;
  height: 34px;
  
  cursor:pointer;
  color: var(--color-icons);
  transition: 0.3s;
  
  :hover {
      color: #ff6e6e;
      transform: translateY(-8%);
  }
 
`

export const DeleteIcon = styled(Delete)`

    width: 27px;
    cursor: pointer;
    height: 27px;
    margin-right: 2px;
    color: var(--color-icons);
    transition: 0.3s;

    :hover {
        color: #000;
    }

`




export const PostEditor = styled.section`

  
    height: 310px;
    border: 1px solid #cccccc;
    margin-bottom: 20px;
    border-radius: 8px;
    
    
    form {
        display: flex;
        flex-direction: column;
        width: 80%;
        margin: 0 auto;
    }

`

export const CreatePost = styled.div`

   
   display:flex;
   flex-direction: column;
   width: 450px;

   margin: 0 auto;
   display: flex;
   align-items: center;
   
   input[type="text"] {
    
    width: 85%;
    margin: 15px 0 5px;
    
   }

   .my-editing-area {
       height: 75px;
       max-height: 75px;
       
   }

   select {
    width: 85%;
    margin: 10px 0;
    
   }

   


   
`

export const PostTop = styled.section`

    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 5px;
        

    > strong {
        margin-right: auto;
    }

`

export const PostBottom = styled.section`

    display: flex;
    flex-direction: row;
    align-items: center;
   


    > span {
        justify-self: flex-end;
        font-size: 0.7em;
        border: 1px solid #292929;
        width: 65px;
        height: 20px;
        border-radius: 8px;
        padding: 2px;
        text-align: center;
        cursor: pointer;
        margin-right: auto;
    }

`