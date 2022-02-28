import React, {Component} from 'react'
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle `
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`
const BackgraundPag = styled.div`
  display: flex;
  justify-content: center;
`
const Clipboard = styled.div `
  margin-top: 3.86%;
  padding: 1.5% 4% 3%;
  border-radius: 50px;
  position: relative;
  display: flex;
  justify-content: center;
  background-color:rgb(160, 94, 28);
`
const FastenerRectangle = styled.div ` 
  width: 30vh;
  height: 9vh;
  border-radius: 5%;
  position: absolute;
  top: -3vh; 
  display: flex;
  justify-content: center;
  background-color: gray;
`
const FastenerCircle = styled.div `
  width: 8vh;
  height: 8vh;
  border-radius: 48%;
  position:absolute;
  top: -5vh;
  background-color: gray;
`
const ToDo = styled.div `
  width: 58vh;
  height: 81vh;
  padding-top:5.5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(255, 237, 189);
`
const BoxAddChores = styled.div `
  width: 90%; 
`
const InputAddChores = styled.input `
  width: 82.7%;
  height: 120%;
  padding-left:2%;
  background-color: rgb(255, 218, 115);
  border: 1px solid black;
  border-right: none;
  border-radius: none;
  &:focus{
  outline: 2px solid rgb(245, 190, 71);
}
`
const Chores = styled.ul `
  width: 100%;
  margin-top:2%;
  padding: 5%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  list-style: none;
  overflow:auto;
  ::-webkit-scrollbar {
  width: 10px;
  position: fixed;
}
::-webkit-scrollbar-track {
  border-radius: 100px;
}
::-webkit-scrollbar-thumb {
  background-color: rgb(241, 211, 128); 
  border-radius: 100px;
}
::-webkit-scrollbar-thumb:hover {
  background-color: rgb(236, 201, 104); 
}
`
const ListItem = styled.li`
  width:min(100%, 322px);
  margin-top:2%;
  border:1px solid rgb(236, 201, 104); 
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding:2.5% 0 4% 2.5%;
  background-color: rgb(255, 218, 115);
  &:hover { 
      outline: 2px solid rgb(245, 190, 71);
  }
`
const ListItemText = styled.p`
  width:80%;
  overflow-wrap: break-word;
`
const AllButton = styled.button`
  width: 15%;
  height: min(120.1%, 19.61px);
  background-color: rgb(236, 201, 104);
  border: 1px solid black;
  &:hover{
  outline: 2px solid rgb(245, 190, 71);
}
`
/* const = styled.div*/
class App extends Component{
  state={
    addTarefa:"",
    lista:[],
    checkClique: 1
  }
  addEnter = (e) => {
    if(e.keyCode === 13){
      this.add()
    }
  }
  add = (e) => {
    let {lista, addTarefa} = this.state
    if(addTarefa.length > 0 &&  addTarefa.length <= 245 ){
      
        this.setState({
          addTarefa:"",
          lista: lista.concat({
              addTarefa: addTarefa,
              id: Date.now()
            })
        })
      }
  }
 //Evento sintetico
  handleChange = (event) =>{
    this.setState({
      addTarefa: event.target.value
    })
  } 
  remove = (id) => {
    let{lista}= this.state
    this.setState ({
      lista: lista.filter((item)=> {
        return item.id != id
      })
    })
  }
  render(){
    return(
      
      <BackgraundPag>
        <GlobalStyle />
        <Clipboard>
          <FastenerRectangle>
            <FastenerCircle></FastenerCircle>
          </FastenerRectangle>
          <ToDo>
            
              <h1>Lista de tarefas</h1>
              <BoxAddChores>
              <InputAddChores onKeyDown={(e) => this.addEnter(e)} value={this.state.addTarefa} onChange={this.handleChange} type="text" />
              <AllButton onClick={this.add} >add</AllButton>
              </BoxAddChores>
            <Chores>
              {this.state.lista.map((item) =>(
                  <ListItem id='lihover'><ListItemText>{item.addTarefa}</ListItemText> <AllButton onClick={()=>{this.remove(item.id)} } >🗑</AllButton> </ListItem>
              ))}
            </Chores>
          
          </ToDo>
        </Clipboard> 

      </BackgraundPag>
    )
  }
  //na li troque addTarefa por id

}

export default App;