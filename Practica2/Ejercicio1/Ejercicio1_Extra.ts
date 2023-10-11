
type Pagination={
    currentPage: null;
    nextPage:    null;
    totalPages:  null;
}

type quotes={
    _id: string,
    quoteText: string,
    quoteAuthor: string,
    quoteGenre: string,
    __v: number;
}

type ResponseData={

    statusCode: number,
    message: string,
    pagination: Pagination,
    totalQuotes: number,
    data:Array<quotes>;    

}

const fetchData=async()=>{

    /*
    Para hacer el punto extra simplemente he editado el link introduciento ?limit=30, 30 es el numero de cuotas que nos pide el ejercicio, este numero 
    le podemos cambiar si queremos más o menos cuotas que muestre el programa o incluso introducir una variable sustituyendo el 30, para que
    por ejemplo el usuario introduzca el numero de cuotas por consola.
    */ 
    try {

        const response = await fetch("https://quote-garden.onrender.com/api/v3/quotes?limit=30");
        
        const data: ResponseData = await response.json();

        data.data.forEach((elem,i)=>{ console.log(`Genero: ${elem.quoteGenre} Autor: ${elem.quoteAuthor} Quote: ${elem.quoteText}`)})
        

    }catch(error){console.log(error)}

}

fetchData()

