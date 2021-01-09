/*import { set } from 'mongoose'*/
import React, { useEffect, useState } from 'react'
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function Members() {
      const y = [
        {
       
          nom: "Azzabi",
          prenom: "Wiem"
        },
        {
       
          nom: "Laatar",
          prenom: "Eya"
        },
        {
       
          nom: "Ouledissa",
          prenom: "Motez"
        },
        {
       
          nom: "Fekih",
          prenom: "Cyrine"
        },
        {
       
          nom: "Bettaieb",
          prenom: "Hejer"
        },
        {
       
          nom: "Ghlissi",
          prenom: "Hakim"
        },
        {
       
          nom: "Mouelhi",
          prenom: "Oumaima"
        },
        {
       
          nom: "Hmani",
          prenom: "Emna"
        },
        {
       
          nom: "Saied",
          prenom: "Meriem"
        },
        {
       
          nom: "Kordoghli",
          prenom: "Oussama"
        },

      ]
    const [fromServer, setfromServer] = useState(y)   ; 
    const [index, setstate] = useState(0) ;
    const [complet, setcomplet] = useState() ;
    const [bilan, setbilan] = useState([]);
    const [filtred ,setfiltred]= useState([]) ;
    const [start, setstart] = useState(false) ;

    const classes = useStyles();
         const next = (status)=>{

            if (index==10) {
                setfiltred((old)=>[{name:complet,status},...old])
                setcomplet(fromServer[index-1].prenom+" "+fromServer[index-1].nom);
                setbilan((old)=>[{name:complet,status},...old])
                document.getElementById('presence').innerHTML=""
            }else{
                if (status=="go") {
                    setstate(index+1);
                    setcomplet(fromServer[index].prenom+" "+fromServer[index].nom);
    
                }else{
                    setfiltred((old)=>[{name:complet,status},...old])
                    setstate(index+1);
                    setcomplet(fromServer[index].prenom+" "+fromServer[index].nom);
                    setbilan((old)=>[{name:complet,status},...old])
    
                 }
            }
             

          
              
                
             
         }

         const filtre = (status)=>{
             if (status=="Tous") {
                 setfiltred(bilan)
             }else{

                 const result = bilan.filter(element => element.status == status);
     
                 setfiltred(result);
             }
            

         }
   
    return (
        <div className="container">
    <div id="presence" style={{    margin: '20px'}}>
         <div id="names" >
           {/*   <h6>{fromServer.length-index} </h6> */}
            {start?null:<Button onClick={()=>{
                setstart(!start);
                setcomplet(fromServer[index].prenom+" "+fromServer[index].nom);
                next("go");


            }}  variant="contained">Commencer</Button>} 


             <h4 id="showname"> {complet}  </h4>
         </div>
         <div id="buttons"  >
             <button type="button" disabled={!start} onClick={()=>next("Present")} className="btn btn-success">Present</button>
             <button type="button" disabled={!start} onClick={()=>next("Excusé")}  className="btn btn-warning">Excusé</button>
             <button type="button" disabled={!start} onClick={()=>next("Abscent")} className="btn btn-danger">Abscent</button>
         </div>
     </div>
     <div>
     <div className={classes.root}>
      <ButtonGroup id="choices"  size="large" color="primary" aria-label="outlined primary button group">
        <Button onClick={()=>filtre("Tous")}>Tous</Button>
        <Button onClick={()=>filtre("Abscent")}>Abscent</Button>
        <Button onClick={()=>filtre("Present")} >Present</Button>
      </ButtonGroup>
      
    </div>
     </div>
     <ul id="list">
        {filtred && filtred.map((element,index)=>
        <div key={index} id='results' className="card card-body mb-1">
            <div id="row" className="row">
                <div className="col-md-9">
                    <h6 style={{marginBottom:0}}>
                        {element.name}
                    </h6>
                </div>
                <div className="col-md-3">
                    <a className="btn btn-secondary">
                    {element.status}
                    </a>
                </div>
            </div>
      </div>
        ) }
     </ul>
     </div>
    )
}

