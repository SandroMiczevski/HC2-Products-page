import styled from "styled-components";

export const Container = styled.div`
    width: 80%;
    margin: 45px auto ;

    @media (max-width: 385px) {
        width: 220px;
        text-align: center;
    }      

    section{
        width: 100%;
        padding: 0px 5px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

        .product-content{
            height: 400px;
            width: 180px;
            background-color: #fff;

            padding: 15px 10px;
            margin: 5px;
            
            display: grid;
            text-align: center;
            justify-content: center;
            
            border: 1px solid rgba(200,200,200,0.6);
            border-radius: 12px;

            img{
                //height: 200px;
                width: 150px;
            }
        }


    }

    

    
` 