import React from 'react';
import { Helmet } from 'react-helmet';

export default function Questions() {
    return (
        <div className='container'>
            <Helmet>
                <title>Questions sur le développement web</title>
                <meta name="description" content="Le développement web se complexifiant de plus en plus, pour cela partageons nos connaissances." />
            </Helmet>
            <div className='text-center' style={{marginTop:'10vh'}}>
                <h1>Questions</h1>
            </div>
        </div>
    )
}