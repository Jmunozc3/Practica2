
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

const fetchDat=async()=>{

    
    try {

        const response = await fetch("https://quote-garden.onrender.com/api/v3/quotes");
        
        const data: ResponseData = await response.json();

        data.data.forEach((elem,i)=>{ console.log(`Genero: ${elem.quoteGenre} Autor: ${elem.quoteAuthor} Quote: ${elem.quoteText}`)})
        

    }catch(error){console.log(error)}

}

fetchDat()
