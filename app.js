class ReactContainer extends React.Component{
    render(){
        return (
        <div>            
            <h1>Think with React</h1>    
            <div>let's rock and roll . This is babel</div>
        </div> 
        )
    };  
}

const container = document.getElementById('react-container');
ReactDOM.render(<ReactContainer/>,container); 