import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessages } from '../utils/chatSlice';

const Livechat = () => {
    const [number, setNumber] = useState(0);
    const [liveMessage, setLiveMessage] = useState("");

    const dispatch = useDispatch();
    const chatMessages = useSelector(store => store.chat.messages);

    useEffect(() => {
        const i = setInterval(() => {
            // API POLLING
            setNumber(prevCount => prevCount + 1);
            dispatch(addMessages({
                name: "Anonymous",
                message: "YT Live Chat Demo-"
            }))
        }, 1500);
        return () => clearInterval(i);
    }, [])

    return (<>
        <h1 className='font-semibold p-2 bg-white'>Top chat -</h1>
        <div className='mx-2 p-1 h-[325px] border border-black w-full overflow-y-scroll bg-slate-50 rounded-md flex flex-col-reverse'>
            <div className='p-2 '>
                {
                    chatMessages.map((c, i) => (<ChatMessage key={i} name={c.name} message={c.message}
                        number={number} />))
                }
            </div>
        </div>
        <form className='w-full m-2 rounded-lg' onSubmit={(e) => {
            e.preventDefault();
            dispatch(addMessages({
                name: "user",
                message: liveMessage
            }));
            setLiveMessage("");
        }}>
            <input type="text" placeholder='send live chat message' value={liveMessage} onChange={(e) => {
                setLiveMessage(e.target.value);
            }} className='p-1 w-10/12 rounded border border-black' />
            <button className='p-1 ml-2 hover:bg-gray-400 bg-gray-300 rounded'>Send</button>
        </form>
    </>
    )
}

export default Livechat