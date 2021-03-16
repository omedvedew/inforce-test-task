import React, { useState } from 'react';

const ProductPageComment = () => {

    const arrComments = [
        {
            description: 'some text here',
            date: '14:00 22.08.2021',
        }
    ];

    const [comments, setComments] = useState(arrComments);

    const [newComments, setNewComments] = useState({
        description: "",
        date: "",
    })

    const handleDescriptionChange = (e) => (
        setNewComments((value) => ({
            ...value,
            description: e.target.value,
        }))
    )

    let today = new Date();
        let currentDate = today.getHours() + ':' + today.getMinutes() + ' ' + today.getDate() + '.' + (today.getMonth() + 1) + '.' + today.getFullYear();
        console.log(currentDate);

    const handleDateChange = (val) => (
        setNewComments((value) => ({
            ...value,
            date: val,
        }))
    )

    const onSend = (e) => {
        setNewComments((value) => ({
            ...value,
            description: '',
        }));
        setComments((value) => {
            return [
                ...value,
                newComments
            ]
        });
        e.preventDefault();
    }
    return (
        <div className="mpp_ct_comment">
            <div className="comments">
                {
                    comments.map((item, i) => (
                        <div 
                            key={i} 
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                width: "300px",
                                height: "fit-content",
                                padding: "5px",
                                border: "1px solid black",
                                borderRadius: "5px",
                                boxShadow: "3px 5px 10px rgba(0, 0, 0, 0.5)",
                                marginBottom: "15px",
                            }}
                        >
                            <div 
                                style={{
                                    margin: "5px",
                                }}
                            >Description: {item.description}
                            </div>
                            <div
                                style={{
                                    margin: "5px"
                                }}
                            >Date: {item.date}</div>
                        </div>
                    ))
                }
            </div>

            <form onSubmit={onSend}>
                <div>
                    <textarea
                        cols="30" 
                        rows="10"
                        placeholder="Enter your comment here" 
                        value={newComments.description} 
                        onChange={handleDescriptionChange}></textarea>
                </div>
                <button onClick={() => handleDateChange(currentDate)}>Leave a comment</button>
            </form> 
        </div>
    )
};

export default ProductPageComment;