import {FunctionComponent, useEffect, useState} from "react";
import io from "socket.io-client";


const socket = io(process.env.REACT_APP_SOCKET_URL as string);

export type socketDispatch = (digits: number, operation: string) => void;

interface childProps {
    result: number;
    dispatch: socketDispatch;
}

interface Props {
    Comp: FunctionComponent<childProps>;
}

export type ServerType = {
    data: { result: number },
    status: 'OK' | 'ERROR'
};


const WithSocket: FunctionComponent<Props> = props => {
    const [isConnected, setIsConnected] = useState(socket.connected); //Socket server
    const [result, setResult] = useState(0); //Calcs from the server

    //Try to connect to the socket server
    useEffect(() => {
        socket.on('connect', () => {
            console.log('socket is connected!')
            setIsConnected(true);
        });

        socket.on('disconnect', () => {
            setIsConnected(false);
        });

        //Incoming data from the server
        socket.on('server.response', (response: ServerType) => {
            console.log('response received', response)
            if (response && response.status === 'OK') {
                setResult(response.data.result)
            }
        });

        return () => {
            socket.off('connect');
            socket.off('disconnect');
            socket.off('server.response');
        };
    }, []);

    const {Comp} = props;


    //Send to the server
    function dispatch(digits: number, operation: string) {
        console.log('dispatch')
        if (isConnected && socket) {
            socket.emit('client.btnPressed', {
                data: {operation, digits}
            })
        }
    }

    return <Comp result={result} dispatch={dispatch}/>
};

export default WithSocket;
