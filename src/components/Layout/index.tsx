import React from 'react';
import './layout.css';
import kvlogo from '../../assets/kv-logo.png';
import icon from '../../assets/icon.svg';
export const Layout=({children,sidebar_title,header_title}:
    {children:React.ReactNode,sidebar_title:string,header_title:string})=>{
    return <main>
                <header className='main-header'></header>
                <aside>
                    <a href="https://keyvalue.systems">
                         <img className="logo" src={kvlogo}/>
                    </a>
                    <div className="bluebox">
                        <img src={icon}/>
                           {sidebar_title}
                    </div>
                </aside>
                <section>
                    <div className="content-header">
                        <h1>
                            {header_title}
                        </h1>
                    </div>
                    {children}
                   </section>
        </main>
}
                    