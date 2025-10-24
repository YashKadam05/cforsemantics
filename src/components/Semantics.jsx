import React from 'react'
import './semantics.css'

export default function Semantics(props) {

    // divides response into each individual line
    const handleResponse=()=>{
        let a=props.semantics;
        console.log("---------------------");
        console.log("a: ",a);

        let i=0,c,b=[],j=0,s=0;
        for(i=0;i<a.length;i++){
            c=a[i]
            if(c=='.'){
                b[j]=a.substring(s,i+1).replace("\n","");
                s=i+1;
                j++;
            }
        }
        console.log("b: ",b);
        addInfo(b);
    }

    // displays each line in individual div
    let data="s"
    const addInfo=(b)=> {
        data=b;
    }

    // adds color to individual divs
    let bb=['red','blue','green','purple'];
    let j=-1
    const colorChange=()=>{
        for(let i=0;i<data.length;i++){
            if(j>=bb.length-1){
                j=0;
            }
            else{
                j++;
            }
            return j
        }
    }
    let jj=-1
    const colorChange2=()=>{
        for(let i=0;i<data.length;i++){
            if(jj>=bb.length-1){
                jj=0;
            }
            else{
                jj++;
            }
            return jj
        }
    }

    // create keywords from response
    let mx=[];
    let st=props.statement

    const addInform=()=> {
        let y=data
        let key=0
        let z,mxx;

        for(key=0;key<=y.length-1;key++){
            for(z=0;z<y[key].length;z++){
                if(y[key].charAt(z)==':'){
                    mxx=y[key].substring(0,z)
                }
            }
            mx.push(mxx.replace(" ", "").replace("\n", ""))
        }

        diffe()
        console.log("mx: ",mx);
        console.log("st: ",st);
    }

    // checks if response keywords exist in statement
    const diffe=()=>{
        for(let i=0;i<=mx.length;i++){
            if(st.includes(mx[i])){
                if(i==mx.length-1){
                    colorChange3(mx)
                    break
                }
            }
        }
    }

    // combine keywords of stamenet and keywords of response
    // let f=[]
    // const sepp=(mx,st)=>{
    //     for(let i=0;i<=mx.length-1;i++){
    //     f.push(mx[i])
    //     }
    // }

    // color and display the statement
    let j1=-2
    const colorChange3=(mx)=>{
        for(let i=0;i<=mx.length-1;i++){
            if(j1>=bb.length-1){
                j1=0;
            }
            else{
                j1++;
            }
            return j1
        }

    }


    handleResponse()
    addInform()
    const some =(mx) => {
        console.log("mx: ",mx);
    }
    some(mx)


  return (
    <>
    <div className="sbody">
        <p id='stmtText' style={{marginTop:"30px",marginBottom:"40px"}}>{props.statement}</p>

        <p id='colorText'>
        {
            mx.map((element,index)=>{
                return <span key={index} style={{color:bb[colorChange3(mx)],padding:"5px",fontWeight:"bold"}} >{element}</span>
            })
        }
        </p>

        <div id="infoBody">
            {data.map((element,index)=>(
                <div className='info' key={index} style={{borderColor:bb[colorChange()],color:bb[colorChange2()]}}>{element}</div>
            ))}
        </div>

    </div>
    </>
  )
}
