import React from 'react';
import '@styles/globals.css';
import Nav from '@components/nav' 
export const metadata = {
    title : 'Promtopia',
    description : 'Discover & Sharw AI Prompts'
}
const ReactLayout = ({children}) => {
  return (
    <html lang='en'>
        <body>
            <div className='main'>
                <div className='gradient'/>
            </div>

            <main className='app'>
                <Nav/>
                {children}
            </main>
        </body>
    </html>
  )
}

export default ReactLayout