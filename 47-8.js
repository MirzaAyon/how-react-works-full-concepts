// 7-8 React Class Component, Component lifecycle and rerender
// chaile eki project e react class compo and functional compo use korte parbo
//new application jara banae ora keo e class compo ta use korena
//Ei table to class diye banano eke ami app.je er vitor theke call korte pari abr chaile func compo jemon watch er vitore thekeo call korte pari
//react js website e state and life cycle part e jabo
//okhane class


//func r class er parthokko holo age func component e shorashori return kortam
//r ekhn render ekta method ache ota theke erpr return kori
//tmn ekta drkr hbe na but google e ager ans khujle class beshi pabo
//2019 er age app e othoba google er ans e class compo beshi pawa jeto okhane use effect or useState kono tai use hoto na

constructor(){

}
//age evabe constructor use hoto use state er bodole
//ekhane state declare krto
componentDidMount(){

}
//component did mount namer method thake sheta diye data load korto useeffect er bodole 

//react org website e state and lifecycle e jabo egula shob ache
//age willMount did mount 2 ta alada kore kora lagto r ekhn 2 tai use effect er modhe kore fela jae

//react component life cycle google ekta pic ache ota dekhbo


//react every component e 3 ta stage paar kore
1.Mounting - mane dom e dkhanor jnno ready kora.eta 
initial stage jokhn kono component dom e probesh kore tokhn ei stage shuru hy ei stage e 4 ta method porjae krome hy
    * constructor()
    * getDerivedStateFromProps()
    * render()
    * componentDidMount()


2.Update - johkn props ba state er kono change component er kono poriborton ghotae, tokhn component ta ei stage e probesh kore 
ei stage e 5 ta method porjae krome hy
    * getDerivedStateFromProps()
    * shouldComponentUpdate()
    * render()
    * getSnapshotbeforeUpdate()
    * conponentDidMount()
3.Unmounting - dom theke kono component ke shorano dorkar hole tkhn compo ta ei stage e probesh kore ei stage e ekta method shomponno hy
    * componentwillmount()
eke bole component will mount

eta cllass compo te beshi kaj kore but func compo teo eta bujha jae