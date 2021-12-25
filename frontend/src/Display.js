import React, {useCallback, useState} from 'react'
import {useDropzone} from 'react-dropzone'
import { Uploader } from './uploader'

export function Display() {
    const [rating, setRating] = useState("0.0")

    const getBytesCallback = (data) => {
    console.log(data)
    fetch("http://127.0.0.1:5000/predict", { method: 'POST', body: data }).then((response) => {
        response.text().then((responseText) => setRating(responseText))
    })

    }
   
    return (
        <>
            <Uploader getBytesCallback={getBytesCallback}/>
            <div style={{fontSize: "64px", display: "flex", alignItems: "center", justifyContent: "center"}}>
                <svg style={{color: "rgb(245, 197, 24)"}} xmlns="http://www.w3.org/2000/svg" width="64" height="64" class="ipc-icon ipc-icon--star AggregateRatingButton__RatingIcon-sc-1ll29m0-4 iAOIoP" id="iconContext-star" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path d="M12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72 3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"></path></svg>
                {rating}
                <div style={{color: "rgb(120, 120, 120)", fontSize: "36px"}}>/10</div>
            </div>
        </>
    )
}