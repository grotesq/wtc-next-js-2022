import { useCallback, useMemo, useState } from "react";
import BaseLayout from "../components/BaseLayout";
import _ from 'lodash';

const formatter = Intl.NumberFormat( 'ko-kr' );

const menu = {
    '에스프레소' : 2500,
    '아메리카노' : 2800,
    '카페라테' : 3000,
    '바닐라라테' : 3600,
    '녹차라테' : 3900,
    '자바칩 프라푸치노' : 4300,
}

const initialValues = {};
_.forEach( menu, ( price, key ) => {
    initialValues[ key ] = 0;
} );
/*
{
    '에스프레소' : 0,
    '아메리카노' : 0,
    '카페라테' : 0,
    '바닐라라테' : 0,
}
*/

export default function Order() {
    const [ orderData, setOrderData ] = useState(initialValues);
    const sum = useMemo(
        () => _.reduce( orderData, (sum, count, key) => sum + count * menu[ key ], 0 ),
        [orderData]
    );
    /*
        orderData.forEach( ( count, key ) => {
            count * _.find( menu, ( item, name ) => key === name )
        } );
    */
    const remove = useCallback(( key ) => {
        setOrderData({
            ...orderData,
            [key]: orderData[ key ] - 1,
        });
    }, [orderData, setOrderData]);
    
    const add = useCallback(( key ) => {
        setOrderData({
            ...orderData,
            [key]: orderData[ key ] + 1,
        });
    }, [orderData, setOrderData]);
    
    return(
        <BaseLayout>
            <h1 className="font-bold mb-4">온라인 주문</h1>

            <ul>
                { _.map( menu, (item, key) => (
                    <li className="flex items-center mb-2">
                        {key} : {formatter.format( item )}원

                        <button
                            className="border p-2 w-8 h-8 flex items-center justify-center ml-4"
                            onClick={() => remove( key )}
                        >
                            -
                        </button>
                        <span className="mx-4">{ orderData[ key ] }</span>
                        <button
                            className="border p-2 w-8 h-8 flex items-center justify-center"
                            onClick={() => add( key )}
                        >
                            +
                        </button>
                    </li>
                ) ) }
            </ul>

            <hr className="mb-4"/>

            합계 : {formatter.format( sum )}원
        </BaseLayout>
    )
}